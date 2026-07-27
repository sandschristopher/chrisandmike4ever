
(function () {
  const root = document.documentElement;
  const app = document.getElementById("app");
  const nav = document.getElementById("site-nav");

  applyTheme();
  renderPages();
  renderNavigation();
  observePages();

  function applyTheme() {
    const t = site.theme;
    root.style.setProperty("--background", t.background);
    root.style.setProperty("--background-image", t.backgroundImage ? `url("${t.backgroundImage}")` : "none");
    root.style.setProperty("--text", t.text);
    root.style.setProperty("--paper", t.paper);
    root.style.setProperty("--paper-text", t.paperText);
    root.style.setProperty("--accent", t.accent);
    root.style.setProperty("--body-font", t.bodyFont);
    root.style.setProperty("--display-font", t.displayFont);
    document.title = `${site.coupleNames} — ${site.date}`;
  }

  function renderNavigation() {
    nav.innerHTML = site.navigation.map(item =>
      `<a href="#${escapeAttr(item.pageId)}" data-page="${escapeAttr(item.pageId)}">${escapeHtml(item.label)}</a>`
    ).join("");
  }

  function renderPages() {
    app.innerHTML = site.pages.map(renderPage).join("");
  }

  function renderPage(page) {
    const heading = page.heading ? `<h2 class="page-heading">${escapeHtml(page.heading)}</h2>` : "";
    const intro = page.intro ? `<p class="page-intro">${escapeHtml(page.intro)}</p>` : "";

    let content = "";
    if (page.type === "cards") {
      content = renderCards(page);
    } else {
      content = renderCanvas(page);
    }

    return `
      <section class="page" id="${escapeAttr(page.id)}" data-page-section="${escapeAttr(page.id)}">
        <div class="page-inner">
          ${heading}
          ${intro}
          ${content}
        </div>
      </section>
    `;
  }

  function renderCanvas(page) {
    const desktop = page.items.map(renderCanvasItem).join("");
    const mobile = page.items.map(item => {
      const copy = { ...item, x: 50, y: 50 };
      return renderCanvasItem(copy);
    }).join("");

    return `
      <div class="canvas">${desktop}</div>
      <div class="mobile-stack">${mobile}</div>
    `;
  }

  function renderCanvasItem(item) {
    const style = [
      `--x:${number(item.x, 50)}%`,
      `--y:${number(item.y, 50)}%`,
      `--w:${number(item.width, 300)}px`,
      `--rotate:${number(item.rotation, 0)}deg`,
      `--z:${number(item.zIndex, 1)}`
    ].join(";");

    let html = "";

    if (item.kind === "paper") {
      const styleClass = item.paperStyle ? ` ${escapeAttr(item.paperStyle)}` : "";
      const title = item.title ? `<h3 class="paper-title">${escapeHtml(item.title)}</h3>` : "";
      const body = item.body ? `<div class="paper-body">${item.body}</div>` : "";
      const links = item.links?.length
        ? `<ul class="link-list">${item.links.map(link =>
            `<li><a href="${escapeAttr(link.href)}" target="${externalTarget(link.href)}">${escapeHtml(link.label)}</a></li>`
          ).join("")}</ul>`
        : "";
      html = `<article class="paper${styleClass}">${title}${body}${links}</article>`;
    }

    if (item.kind === "photo") {
      html = `<figure class="photo"><img src="${escapeAttr(item.src)}" alt="${escapeAttr(item.alt || "")}" /></figure>`;
    }

    if (item.kind === "image") {
      html = `<div class="image-only"><img src="${escapeAttr(item.src)}" alt="${escapeAttr(item.alt || "")}" /></div>`;
    }

    if (item.kind === "button") {
      html = `<div class="button-card"><a href="${escapeAttr(item.href)}" target="${externalTarget(item.href)}">${escapeHtml(item.label)}</a></div>`;
    }

    return `<div class="canvas-item" style="${style}">${html}</div>`;
  }

  function renderCards(page) {
    const columns = number(page.columns, 3);
    const cards = page.cards.map(card => `
      <article class="info-card">
        <h3>${escapeHtml(card.title)}</h3>
        <p>${escapeHtml(card.body || "")}</p>
      </article>
    `).join("");

    return `<div class="cards-grid" style="--columns:${columns}">${cards}</div>`;
  }

  function observePages() {
    const links = Array.from(nav.querySelectorAll("a"));
    const sections = Array.from(document.querySelectorAll("[data-page-section]"));

    const observer = new IntersectionObserver(entries => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      const id = visible.target.dataset.pageSection;
      links.forEach(link => {
        if (link.dataset.page === id) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    }, { threshold: [0.35, 0.55, 0.75] });

    sections.forEach(section => observer.observe(section));
  }

  function externalTarget(href) {
    return /^https?:\/\//i.test(href) ? "_blank" : "_self";
  }

  function number(value, fallback) {
    return Number.isFinite(Number(value)) ? Number(value) : fallback;
  }

  function escapeHtml(value = "") {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function escapeAttr(value = "") {
    return escapeHtml(value);
  }
})();
