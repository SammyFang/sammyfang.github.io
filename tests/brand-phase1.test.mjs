import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import vm from "node:vm";

const root = path.resolve(import.meta.dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const context = { window: {} };
vm.runInNewContext(read("data/site-data.js"), context);
const content = context.window.PORTFOLIO_CONTENT;

test("English and Traditional Chinese keep the same content architecture", () => {
  assert.deepEqual(
    Object.keys(content.locales.en).sort(),
    Object.keys(content.locales.zh).sort(),
  );
});

test("phase-one brand statement exists in both languages", () => {
  assert.equal(content.locales.en.hero.title, "Turning uncertainty into decisions.");
  assert.equal(content.locales.zh.hero.title, "把不確定，變成可以執行的決策。");
});

test("hero keeps the real profile image and renders the restrained brand layer", () => {
  const script = read("script.js");
  assert.equal(content.profile.image, "./assets/ucr-profile.jpg");
  assert.match(script, /class="hero-statement"/);
  assert.match(script, /class="hero-lede"/);
  assert.match(script, /class="hero-scroll"/);
  assert.match(script, /<img src="\$\{escapeHtml\(content\.profile\.image\)\}"/);
});

test("phase-one assets are cache-busted without loading a rejected overlay theme", () => {
  const html = read("index.html");
  assert.match(html, /styles\.css\?v=20260805-brand-phase1/);
  assert.match(html, /script\.js\?v=20260805-brand-phase1/);
  assert.match(html, /site-data\.js\?v=20260805-brand-phase1/);
  assert.doesNotMatch(html, /theme-v3\.css/);
});

test("responsive and reduced-motion guardrails remain present", () => {
  const css = read("styles.css");
  assert.match(css, /@media \(max-width: 1120px\)/);
  assert.match(css, /@media \(max-width: 720px\)/);
  assert.match(css, /@media \(max-width: 640px\)/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
});

test("all locally referenced assets exist", () => {
  const source = [read("index.html"), read("script.js"), read("data/site-data.js")].join("\n");
  const references = [...new Set([...source.matchAll(/\.\/assets\/[A-Za-z0-9_./-]+/g)].map((match) => match[0]))];
  assert.ok(references.length > 0);

  for (const reference of references) {
    assert.equal(
      fs.existsSync(path.join(root, reference.slice(2))),
      true,
      `Missing asset: ${reference}`,
    );
  }
});
