const content = window.PORTFOLIO_CONTENT;
const root = document.documentElement;
const app = document.querySelector("[data-app]");
const brand = document.querySelector("[data-brand]");
const nav = document.querySelector("[data-nav]");
const footer = document.querySelector("[data-footer]");
const topEmail = document.querySelector("[data-top-email]");
const socialLinks = document.querySelector("[data-social-links]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const languageToggle = document.querySelector("[data-lang-toggle]");

const savedTheme = window.localStorage.getItem("portfolio-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedLanguage = window.localStorage.getItem("portfolio-language");
let language = savedLanguage || "zh";

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  root.dataset.theme = "dark";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isExternal(href = "") {
  return href.startsWith("http://") || href.startsWith("https://");
}

function linkAttrs(href) {
  return isExternal(href) ? ' target="_blank" rel="noreferrer"' : "";
}

function chips(items = []) {
  return items.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
}

function listItems(items = []) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function sectionTitle(eyebrow, title, note = "") {
  return `
    <div class="section-title">
      ${eyebrow ? `<p>${escapeHtml(eyebrow)}</p>` : ""}
      <h2>${escapeHtml(title)}</h2>
      ${note ? `<span>${escapeHtml(note)}</span>` : ""}
    </div>
  `;
}

function label(key) {
  const labels = {
    zh: {
      heroCta: "關於",
      contact: "聯絡",
      openTo: "專業範圍",
      resume: "關於",
      resumeByRequest: "查看履歷檔案",
      experience: "經歷",
      education: "學歷",
      certification: "證照",
      award: "獎項",
      portfolio: "作品集",
      portfolioNote: "精選成果與專案整理",
      research: "研究",
      publication: "發表與簡報",
      workingPaper: "進行中研究",
      pressSpeaking: "邀訪 / 工作坊",
      invitedTalks: "邀請演講與工作坊",
      mediaFeatures: "媒體報導",
      openLink: "查看連結",
      rights: "保留所有權利。",
    },
    en: {
      heroCta: "About",
      contact: "Contact",
      openTo: "Focus areas",
      resume: "About",
      resumeByRequest: "View resume PDF",
      experience: "Experience",
      education: "Education",
      certification: "License & Certification",
      award: "Award",
      portfolio: "Portfolio",
      portfolioNote: "Selected work and project archive",
      research: "Research",
      publication: "Publication & Presentation",
      workingPaper: "Working Paper",
      pressSpeaking: "Speaking / Workshops",
      invitedTalks: "Invited Talks & Workshops",
      mediaFeatures: "Media Features",
      openLink: "Open link",
      rights: "All Rights Reserved.",
    },
  };

  return labels[language]?.[key] || labels.en[key] || key;
}

function rowIcon(label) {
  return `<span class="row-icon" aria-hidden="true">${iconSvg(label) || escapeHtml(label)}</span>`;
}

function iconSvg(name) {
  const icons = {
    mail: `
      <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6h16v12H4z" fill="none" stroke="currentColor" stroke-width="2" />
        <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      </svg>
    `,
    linkedin: `
      <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9.75h4v11H3v-11Zm6.25 0h3.84v1.5h.05c.54-.95 1.86-1.95 3.83-1.95 4.1 0 4.86 2.7 4.86 6.2v5.25h-4v-4.66c0-1.11-.02-2.54-1.55-2.54-1.56 0-1.8 1.22-1.8 2.47v4.73h-4V9.75Z" />
      </svg>
    `,
    github: `
      <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.2-3.37-1.2-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.57 9.57 0 0 1 12 6.99c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.59c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    `,
    instagram: `
      <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="4.5" fill="none" stroke="currentColor" stroke-width="2" />
        <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" stroke-width="2" />
        <circle cx="17" cy="7" r="1.2" fill="currentColor" />
      </svg>
    `,
    orcid: `
      <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2" />
        <path fill="currentColor" d="M8.2 10h2v7h-2v-7Zm.98-3.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12.4 7h2.75c2.35 0 4 1.62 4 5s-1.65 5-4 5H12.4V7Zm2 1.8v6.4h.64c1.28 0 2.02-.88 2.02-3.2s-.74-3.2-2.02-3.2h-.64Z" />
      </svg>
    `,
    scholar: `
      <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 3 2.7 8.15 12 13.3l7.6-4.2v5.15h1.7v-6.1L12 3Zm-5.65 8.72v4.08c0 2.12 2.54 3.7 5.65 3.7s5.65-1.58 5.65-3.7v-4.08L12 14.85l-5.65-3.13Zm1.7.94L12 15.02l3.95-2.36v3.14c0 .92-1.55 2-3.95 2s-3.95-1.08-3.95-2v-3.14Z" />
      </svg>
    `,
    youtube: `
      <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M21.58 7.2a2.67 2.67 0 0 0-1.88-1.89C18.04 4.87 12 4.87 12 4.87s-6.04 0-7.7.44A2.67 2.67 0 0 0 2.42 7.2 27.82 27.82 0 0 0 2 12a27.82 27.82 0 0 0 .42 4.8 2.67 2.67 0 0 0 1.88 1.89c1.66.44 7.7.44 7.7.44s6.04 0 7.7-.44a2.67 2.67 0 0 0 1.88-1.89A27.82 27.82 0 0 0 22 12a27.82 27.82 0 0 0-.42-4.8ZM10 15.1V8.9l5.2 3.1L10 15.1Z" />
      </svg>
    `,
  };

  return icons[name] || "";
}

function renderHeader(data) {
  const fallbackName = content.profile.shortName.split(" ");
  const brandLead = data.brand?.lead || fallbackName[0];
  const brandAccent =
    data.brand?.accent ?? fallbackName.slice(1).join(" ");

  brand.innerHTML = `
    <span>${escapeHtml(brandLead)}</span>
    ${brandAccent ? `<strong>${escapeHtml(brandAccent)}</strong>` : ""}
  `;
  brand.setAttribute("aria-label", data.ui.backToTop);

  if (topEmail) {
    topEmail.href = `mailto:${content.profile.email}`;
    topEmail.innerHTML = `${iconSvg("mail")}<span>${escapeHtml(content.profile.email)}</span>`;
  }

  if (socialLinks) {
    const linkLabels = [
      { label: "LinkedIn", icon: "linkedin", href: content.profile.linkedin },
      { label: "GitHub", icon: "github", href: content.profile.github },
      { label: "Instagram", icon: "instagram", href: content.profile.instagram },
      { label: "ORCID", icon: "orcid", href: content.profile.orcid },
      { label: "Google Scholar", icon: "scholar", href: content.profile.scholar },
    ].filter((item) => item.href);

    socialLinks.innerHTML = linkLabels
      .map(
        (item) =>
          `<a href="${escapeHtml(item.href)}"${linkAttrs(item.href)} aria-label="${escapeHtml(item.label)}" title="${escapeHtml(item.label)}">${iconSvg(item.icon)}</a>`,
      )
      .join("");
  }

  nav.innerHTML = Object.entries(data.nav)
    .map(([key, label]) => `<a href="#${key}">${escapeHtml(label)}</a>`)
    .join("");

  languageToggle.textContent = data.ui.languageLabel;
  languageToggle.setAttribute(
    "aria-label",
    language === "zh" ? "Switch to English" : "切換到中文",
  );
}

function renderHero(data) {
  const heroTags = data.hero.tags || [];
  const displayName = data.displayName || content.profile.name;

  return `
    <section class="hero" id="home" style="--hero-bg: url('${escapeHtml(content.profile.image)}')">
      <div class="hero-inner">
        <div class="hero-copy">
          <p class="hero-kicker">${escapeHtml(data.hero.eyebrow)}</p>
          <h1>${escapeHtml(displayName)}</h1>
          <p>${escapeHtml(data.hero.lede)}</p>
          <div class="hero-tags">${heroTags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
          <a class="hero-button" href="#resume">${escapeHtml(label("heroCta"))}</a>
        </div>
        <figure class="hero-photo">
          <img src="${escapeHtml(content.profile.image)}" alt="${escapeHtml(displayName)}" />
        </figure>
      </div>
    </section>
  `;
}

function renderContactPanel(data) {
  const contactLabels =
    language === "zh"
      ? {
          linkedin: { icon: "linkedin", label: "個人檔案" },
          github: { icon: "github", label: "程式作品" },
          orcid: { icon: "orcid", label: "研究者識別碼" },
          scholar: { icon: "scholar", label: "Google Scholar" },
          instagram: { icon: "instagram", label: "Instagram" },
        }
      : {
          linkedin: { icon: "linkedin", label: "LinkedIn" },
          github: { icon: "github", label: "GitHub" },
          orcid: { icon: "orcid", label: "ORCID" },
          scholar: { icon: "scholar", label: "Google Scholar" },
          instagram: { icon: "instagram", label: "Instagram" },
        };

  return `
    <aside class="contact-panel" id="contact">
      <h2>${escapeHtml(label("contact"))}</h2>
      <a href="mailto:${escapeHtml(content.profile.email)}">${rowIcon("mail")}<span>${escapeHtml(content.profile.email)}</span></a>
      <a href="${escapeHtml(content.profile.linkedin)}"${linkAttrs(content.profile.linkedin)}>${rowIcon(contactLabels.linkedin.icon)}<span>${escapeHtml(contactLabels.linkedin.label)}</span></a>
      <a href="${escapeHtml(content.profile.github)}"${linkAttrs(content.profile.github)}>${rowIcon(contactLabels.github.icon)}<span>${escapeHtml(contactLabels.github.label)}</span></a>
      <a href="${escapeHtml(content.profile.instagram)}"${linkAttrs(content.profile.instagram)}>${rowIcon(contactLabels.instagram.icon)}<span>${escapeHtml(contactLabels.instagram.label)}</span></a>
      <a href="${escapeHtml(content.profile.orcid)}"${linkAttrs(content.profile.orcid)}>${rowIcon(contactLabels.orcid.icon)}<span>${escapeHtml(contactLabels.orcid.label)}</span></a>
      <a href="${escapeHtml(content.profile.scholar)}"${linkAttrs(content.profile.scholar)}>${rowIcon(contactLabels.scholar.icon)}<span>${escapeHtml(contactLabels.scholar.label)}</span></a>
      <div class="contact-note">
        <strong>${escapeHtml(label("openTo"))}</strong>
        <p>${escapeHtml(data.contact.body)}</p>
      </div>
      ${renderPodcastNote(data)}
    </aside>
  `;
}

function renderPodcastNote(data) {
  if (!data.podcast?.title) return "";

  const inner = `
    <span class="podcast-mark">${iconSvg("youtube")}</span>
    <span class="podcast-content">
      <span class="podcast-head">
        <strong>${escapeHtml(data.podcast.title)}</strong>
        <span>${escapeHtml(data.podcast.status)}</span>
      </span>
      <p>${escapeHtml(data.podcast.body)}</p>
      <span class="podcast-action">${escapeHtml(data.podcast.action || label("openLink"))}</span>
    </span>
  `;

  return data.podcast.href
    ? `<a class="podcast-note" href="${escapeHtml(data.podcast.href)}"${linkAttrs(data.podcast.href)}>${inner}</a>`
    : `<div class="podcast-note">${inner}</div>`;
}

function renderResume(data) {
  return `
    <section class="plain-section" id="resume">
        <div class="resume-layout">
        <div class="resume-main">
          ${sectionTitle("", label("resume"))}
          <div class="about-summary">
            ${data.about.paragraphs.map((text) => `<p>${escapeHtml(text)}</p>`).join("")}
            ${
              content.profile.resumePdf
                ? `<a class="resume-file-button" href="${escapeHtml(content.profile.resumePdf)}" target="_blank" rel="noreferrer">${escapeHtml(data.ui.requestResume || label("resumeByRequest"))}</a>`
                : ""
            }
          </div>

          ${sectionTitle("", label("experience"))}
          <div class="simple-list">
            ${data.experience.items
              .map(
                (item) => `
                  <article class="resume-entry">
                    ${rowIcon(language === "zh" ? "歷" : "i")}
                    <div>
                      <h3>${escapeHtml(item.title)} - ${escapeHtml(item.organization)}</h3>
                      <p>${escapeHtml(item.department)}</p>
                      <p>${escapeHtml(item.period)} · ${escapeHtml(item.location)}</p>
                      <p>${escapeHtml(item.summary)}</p>
                      <details>
                        <summary>${escapeHtml(data.ui.details)}</summary>
                        <ul>${listItems(item.highlights.concat(item.details || []))}</ul>
                      </details>
                      <div class="inline-tags">${chips(item.tools)}</div>
                    </div>
                  </article>
                `,
              )
              .join("")}
          </div>

          ${sectionTitle("", label("education"))}
          <div class="simple-list">
            ${data.education.schools
              .map(
                (item) => `
                  <article class="resume-entry">
                    ${rowIcon(language === "zh" ? "學" : "edu")}
                    <div>
                      <h3>${escapeHtml(item.school)}</h3>
                      <p>${escapeHtml(item.degree)}</p>
                      <p>${escapeHtml(item.period)}</p>
                      <p>${escapeHtml(item.description)}</p>
                    </div>
                  </article>
                `,
              )
              .join("")}
          </div>

          <div class="resume-columns">
            <div>
              ${sectionTitle("", label("certification"))}
              <div class="simple-list compact">
                ${data.education.certifications
                  .map(
                    (item) => `
                      <article class="resume-entry">
                        ${rowIcon("✓")}
                        <div><h3>${escapeHtml(item)}</h3></div>
                      </article>
                    `,
                  )
                  .join("")}
              </div>
            </div>
            <div>
              ${sectionTitle("", label("award"))}
              <div class="simple-list compact">
                ${data.education.awards
                  .map(
                    (item) => `
                      <article class="resume-entry">
                        ${rowIcon("★")}
                        <div><h3>${escapeHtml(item)}</h3></div>
                      </article>
                    `,
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </div>
        ${renderContactPanel(data)}
      </div>
    </section>
  `;
}

function renderPortfolio(data) {
  const items = [...data.featured.items, ...data.projects.items];
  return `
    <section class="portfolio-section" id="portfolio">
      ${sectionTitle("", label("portfolio"), label("portfolioNote"))}
      <div class="portfolio-grid">
        ${items
          .map(
            (item, index) => `
              <article class="portfolio-card">
                ${
                  item.image
                    ? `<figure class="portfolio-thumb"><img src="${escapeHtml(item.image)}" alt="" loading="lazy" /></figure>`
                    : `<div class="portfolio-thumb thumb-${(index % 4) + 1}"></div>`
                }
                <div>
                  <p>${escapeHtml(item.type)}</p>
                  <h3>${escapeHtml(item.title)}</h3>
                  <span>${escapeHtml(item.description)}</span>
                  <div class="inline-tags">${chips(item.tags)}</div>
                  ${
                    item.href
                      ? `<a href="${escapeHtml(item.href)}"${linkAttrs(item.href)}>${escapeHtml(label("openLink"))}</a>`
                      : ""
                  }
                </div>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function visualCard(item, metaParts = [], options = {}) {
  const image = item.image || "./assets/profile-placeholder.svg";
  const imageStyle = item.imagePosition
    ? ` style="object-position: ${escapeHtml(item.imagePosition)};"`
    : "";
  const meta = metaParts.filter(Boolean).map((part) => escapeHtml(part)).join(" · ");
  const note = options.showNote && item.note ? item.note : "";

  return `
    <article class="visual-card${options.compact ? " visual-card-compact" : ""}">
      <figure class="visual-thumb">
        <img src="${escapeHtml(image)}" alt=""${imageStyle} loading="lazy" />
      </figure>
      <div class="visual-body">
        ${meta ? `<p class="visual-meta">${meta}</p>` : ""}
        <h3>${escapeHtml(item.title)}</h3>
        ${note ? `<span class="visual-note">${escapeHtml(note)}</span>` : ""}
        ${
          item.href
            ? `<a href="${escapeHtml(item.href)}"${linkAttrs(item.href)}>${escapeHtml(label("openLink"))}</a>`
            : ""
        }
      </div>
    </article>
  `;
}

function renderResearch(data) {
  return `
    <section class="plain-section" id="research">
      <div class="single-column visual-section">
        ${sectionTitle("", label("research"))}
        <h3 class="block-heading">${escapeHtml(label("publication"))}</h3>
        <div class="visual-grid">
          ${data.research.publications
            .map((item) => visualCard(item, [item.venue, item.year], { showNote: true }))
            .join("")}
        </div>
        <details class="compact-disclosure">
          <summary>${escapeHtml(label("workingPaper"))} (${data.research.workingPapers.length})</summary>
          <div class="compact-index nested">
            ${data.research.workingPapers
              .map(
                (item) => `
                  <article class="compact-entry">
                    ${rowIcon(language === "zh" ? "研" : "w")}
                    <div><h3>${escapeHtml(item)}</h3></div>
                  </article>
                `,
              )
              .join("")}
          </div>
        </details>
      </div>
    </section>
  `;
}

function renderPress(data) {
  return `
    <section class="plain-section" id="press">
      <div class="single-column visual-section">
        ${sectionTitle("", label("pressSpeaking"))}
        <h3 class="block-heading">${escapeHtml(label("invitedTalks"))}</h3>
        <div class="visual-grid">
          ${data.speaking.items
            .map((item) => visualCard(item, [item.role, item.host, item.year]))
            .join("")}
        </div>
        <div class="anchor-block" id="media">
          <h3 class="block-heading">${escapeHtml(label("mediaFeatures"))}</h3>
          <div class="visual-grid media-grid">
            ${data.media.items
              .map((item) => visualCard(item, [item.source, item.year], { compact: true }))
              .join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderFooter(data) {
  const displayName = data.displayName || content.profile.name;
  footer.innerHTML = `
    <span>© <span>${new Date().getFullYear()}</span> ${escapeHtml(displayName)}. ${escapeHtml(label("rights"))}</span>
    <a href="#home">${escapeHtml(data.ui.backToTop)}</a>
  `;
}

function scrollToCurrentHash() {
  const targetId = window.location.hash.slice(1);
  if (!targetId) return;

  document.getElementById(targetId)?.scrollIntoView({ block: "start" });
}

function render() {
  const data = content.locales[language] || content.locales.zh;
  document.title = data.meta.title;
  document.documentElement.lang = data.meta.lang;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", data.meta.description);

  renderHeader(data);
  app.innerHTML = [
    renderHero(data),
    renderResume(data),
    renderPortfolio(data),
    renderResearch(data),
    renderPress(data),
  ].join("");
  renderFooter(data);
  scrollToCurrentHash();
}

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  window.localStorage.setItem("portfolio-theme", nextTheme);
});

languageToggle?.addEventListener("click", () => {
  language = language === "zh" ? "en" : "zh";
  window.localStorage.setItem("portfolio-language", language);
  render();
});

render();
