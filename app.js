(function () {
  const root = document.documentElement;
  const app = document.getElementById("app");
  const nav = document.getElementById("site-nav");

  const ARTBOARD_WIDTH = Number(site.layout?.artboardWidth) || 1600;
  const ARTBOARD_HEIGHT = Number(site.layout?.artboardHeight) || 900;

  applyTheme();
  renderPages();
  renderNavigation();
  observePages();
  installArtboardScaling();

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
    root.style.setProperty("--artboard-width", ARTBOARD_WIDTH);
    root.style.setProperty("--artboard-height", ARTBOARD_HEIGHT);
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
    if (page.type === "cards") {
      return renderCardsPage(page);
    }

    const heading = page.heading
      ? `<h2 class="artboard-heading">${escapeHtml(page.heading)}</h2>`
      : "";
    const intro = page.intro ? `<p class="artboard-intro">${escapeHtml(page.intro)}</p>` : "";

    return `
      <section class="page page-canvas" id="${escapeAttr(page.id)}" data-page-section="${escapeAttr(page.id)}">
        <div class="artboard-viewport">
          <div class="artboard-frame">
            <div class="artboard" style="width:${ARTBOARD_WIDTH}px;height:${ARTBOARD_HEIGHT}px">
              ${heading}
              ${intro}
              ${page.items.map(renderCanvasItem).join("")}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderCardsPage(page) {
const heading = page.heading
  ? `<h2 class="page-heading">${escapeHtml(page.heading)}</h2>`
  : "";
    const intro = page.intro ? `<p class="page-intro">${escapeHtml(page.intro)}</p>` : "";

    return `
      <section class="page page-cards" id="${escapeAttr(page.id)}" data-page-section="${escapeAttr(page.id)}">
        <div class="cards-page-inner">
          ${heading}
          ${intro}
          ${renderCards(page)}
        </div>
      </section>
    `;
  }

  function renderCanvasItem(item) {
    const mobile = item.mobile || {};
    const style = [
      `--x:${number(item.x, 50)}%`,
      `--y:${number(item.y, 50)}%`,
      `--w:${number(item.width, 300)}px`,
      `--rotate:${number(item.rotation, 0)}deg`,
      `--z:${number(item.zIndex, 1)}`,
      `--mx:${number(mobile.x, item.x ?? 50)}%`,
      `--my:${number(mobile.y, item.y ?? 50)}%`,
      `--mw:${number(mobile.width, item.width ?? 300)}px`,
      `--mrotate:${number(mobile.rotation, item.rotation ?? 0)}deg`
    ].join(";");

    let html = "";

    if (item.kind === "paper") {
      const styleClass = item.paperStyle ? ` ${escapeAttr(item.paperStyle)}` : "";
      const title = item.title ? `<h3 class="paper-title">${escapeHtml(item.title)}</h3>` : "";
      const body = item.body ? `<div class="paper-body">${item.body}</div>` : "";
      const links = item.links?.length
        ? `<ul class="link-list">${item.links.map(link =>
            `<li><a href="${escapeAttr(link.href)}" target="${externalTarget(link.href)}" rel="${externalRel(link.href)}">${escapeHtml(link.label)}</a></li>`
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
      html = `<div class="button-card"><a href="${escapeAttr(item.href)}" target="${externalTarget(item.href)}" rel="${externalRel(item.href)}">${escapeHtml(item.label)}</a></div>`;
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

  function installArtboardScaling() {
    const viewports = Array.from(document.querySelectorAll(".artboard-viewport"));

    const resize = viewport => {
      const frame = viewport.querySelector(".artboard-frame");
      const artboard = viewport.querySelector(".artboard");
      if (!frame || !artboard) return;

      const availableWidth = Math.max(1, viewport.clientWidth);
      const availableHeight = Math.max(1, viewport.clientHeight);

      const scale = Math.min(
          availableWidth / ARTBOARD_WIDTH,
          availableHeight / ARTBOARD_HEIGHT
      );

      root.style.setProperty("--artboard-scale", scale);

      frame.style.width = `${ARTBOARD_WIDTH * scale}px`;
      frame.style.height = `${ARTBOARD_HEIGHT * scale}px`;
      artboard.style.transform = `scale(${scale})`;
      artboard.dataset.scale = String(scale);
    };

    const observer = new ResizeObserver(entries => {
      entries.forEach(entry => resize(entry.target));
    });

    viewports.forEach(viewport => {
      observer.observe(viewport);
      resize(viewport);
    });

    window.addEventListener("orientationchange", () => {
      window.setTimeout(() => viewports.forEach(resize), 150);
    });
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
    }, { threshold: [0.25, 0.5, 0.75] });

    sections.forEach(section => observer.observe(section));
  }

  function externalTarget(href) {
    return /^https?:\/\//i.test(href) ? "_blank" : "_self";
  }

  function externalRel(href) {
    return /^https?:\/\//i.test(href) ? "noopener noreferrer" : "";
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
