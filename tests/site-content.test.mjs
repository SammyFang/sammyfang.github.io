import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import vm from "node:vm";

const repositoryRoot = resolve(import.meta.dirname, "..");
const dataSource = readFileSync(resolve(repositoryRoot, "data/site-data.js"), "utf8");
const shellSource = readFileSync(resolve(repositoryRoot, "index.html"), "utf8");
const scriptSource = readFileSync(resolve(repositoryRoot, "script.js"), "utf8");
const styleSource = readFileSync(resolve(repositoryRoot, "styles.css"), "utf8");
const themeSource = readFileSync(resolve(repositoryRoot, "theme-v3.css"), "utf8");
const sandbox = { window: {} };

vm.runInNewContext(dataSource, sandbox, { filename: "site-data.js" });

const site = sandbox.window.PORTFOLIO_CONTENT;
const expectedCollections = {
  "hero.tags": 7,
  "about.paragraphs": 2,
  "about.focus": 4,
  "featured.items": 6,
  "experience.items": 5,
  "projects.items": 9,
  "research.publications": 9,
  "research.workingPapers": 3,
  "speaking.items": 6,
  "leadership.items": 5,
  "media.items": 7,
  "education.schools": 3,
  "education.awards": 7,
  "education.certifications": 5,
  "education.memberships": 2,
  "education.skillGroups": 3,
  "contact.topics": 5,
};

function getPath(value, path) {
  return path.split(".").reduce((current, key) => current?.[key], value);
}

function collectAssetReferences(value, references = new Set()) {
  if (typeof value === "string" && value.startsWith("./assets/")) {
    references.add(value);
  } else if (Array.isArray(value)) {
    value.forEach((item) => collectAssetReferences(item, references));
  } else if (value && typeof value === "object") {
    Object.values(value).forEach((item) => collectAssetReferences(item, references));
  }
  return references;
}

test("English and Chinese preserve every content collection", () => {
  for (const locale of ["en", "zh"]) {
    const localized = site.locales[locale];
    assert.equal(Object.keys(localized.nav).length, 7, `${locale} navigation count`);

    for (const [collection, count] of Object.entries(expectedCollections)) {
      const values = getPath(localized, collection);
      assert.ok(Array.isArray(values), `${locale}.${collection} must be an array`);
      assert.equal(values.length, count, `${locale}.${collection} count`);
    }
  }
});

test("all local content assets resolve to checked-in files", () => {
  const references = collectAssetReferences(site);
  assert.equal(references.size, 17, "checked-in asset reference count");

  for (const reference of references) {
    assert.ok(existsSync(resolve(repositoryRoot, reference)), `missing ${reference}`);
  }
});

test("research impact claims remain qualified and bilingual", () => {
  for (const locale of ["en", "zh"]) {
    const research = site.locales[locale].research.publications.find(
      (item) => item.href === "https://sammyfang.tw/dynamic-pricing-impact/",
    );
    assert.ok(research, `${locale} dynamic-pricing publication`);
    assert.match(research.description, /9\.48%/);
    assert.match(research.description, /10\.44%/);
  }

  const englishClaim = site.locales.en.research.publications.find(
    (item) => item.href === "https://sammyfang.tw/dynamic-pricing-impact/",
  );
  const chineseClaim = site.locales.zh.research.publications.find(
    (item) => item.href === "https://sammyfang.tw/dynamic-pricing-impact/",
  );
  assert.match(englishClaim.description, /does not establish quantum advantage/i);
  assert.match(chineseClaim.description, /不代表已證明量子優勢/);
});

test("the shell exposes bilingual, theme, navigation, and accessible controls", () => {
  assert.match(shellSource, /data-lang-toggle/);
  assert.match(shellSource, /data-theme-toggle/);
  assert.match(shellSource, /class="skip-link"/);
  assert.match(shellSource, /data-scroll-progress/);
  assert.match(shellSource, /theme-v3\.css\?v=20260805-duck-tech/);

  for (const id of ["resume", "portfolio", "research", "press", "media", "contact"]) {
    assert.match(scriptSource, new RegExp(`id=["']${id}["']`), `rendered #${id} section`);
  }

  assert.match(scriptSource, /prefers-reduced-motion/);
  assert.match(styleSource, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(styleSource, /@media \(max-width: 430px\)/);
  assert.match(styleSource, /@media \(min-width: 1720px\)/);
  assert.doesNotMatch(
    styleSource,
    /hero-tag-rail\s*>\s*span:nth-child[^}]*display:\s*none/s,
    "mobile styles must not hide existing focus areas",
  );
  assert.match(themeSource, /--duck-yellow:\s*#ffc928/i);
  assert.match(themeSource, /--duck-orange:\s*#ff7139/i);
  assert.match(themeSource, /--tech-blue:\s*#2f7df4/i);
  assert.match(themeSource, /#research \.visual-card:first-child\s*\{[^}]*grid-column:\s*1 \/ -1/s);
  assert.match(themeSource, /\.portfolio-grid\s*\{[^}]*align-items:\s*start/s);
  assert.match(themeSource, /@media \(max-width: 720px\)/);
});

test("duck-tech cards guard against overlap and stretched whitespace regressions", () => {
  assert.match(themeSource, /\.portfolio-card,\s*\.portfolio-card:nth-child\(n\)\s*\{[^}]*grid-template-rows:\s*auto auto/s);
  assert.match(themeSource, /\.portfolio-grid\s*\{[^}]*align-items:\s*start/s);
  assert.match(themeSource, /\.portfolio-thumb,\s*\.portfolio-card:nth-child\(n\) \.portfolio-thumb\s*\{[^}]*margin:\s*0/s);
  assert.match(themeSource, /#research \.visual-card:first-child\s*\{[^}]*grid-column:\s*1 \/ -1[^}]*grid-template-columns:/s);
  assert.match(themeSource, /#research \.visual-card:first-child \.visual-body\s*\{[^}]*padding:/s);
  assert.match(themeSource, /border-radius:\s*var\(--radius-lg\)/);
  assert.doesNotMatch(themeSource, /hero-tag-rail[^}]*display:\s*none/s);
});
