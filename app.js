(function () {
  const root = document.documentElement;
  const app = document.getElementById("app");
  const nav = document.getElementById("site-nav");
  const MOBILE_QUERY = `(max-width: ${Number(site.layout.mobileBreakpoint) || 700}px)`;

  applyTheme();
  renderPages();
  renderNavigation();
  initializeRecommendationMaps();
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
    document.title = `${site.coupleNames} — ${site.date}`;
  }

  function renderNavigation() {
    nav.innerHTML = site.navigation.map(item =>
      `<a href="#${escapeAttr(item.pageId)}" data-page="${escapeAttr(item.pageId)}">${escapeHtml(item.label)}</a>`
    ).join("");

    nav.querySelectorAll("a[data-page]").forEach(link => {
      link.addEventListener("click", event => {
        const target = document.getElementById(link.dataset.page);
        if (!target) return;
        event.preventDefault();
        const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
        target.scrollIntoView({ behavior, block: "start" });
        try { history.replaceState(null, "", `#${link.dataset.page}`); } catch (_) {}
      });
    });
  }

  function renderPages() {
    app.innerHTML = site.pages.map(renderPage).join("");
  }

  function renderPage(page) {
    if (page.type === "cards") return renderCardsPage(page);

    const heading = page.heading ? `<h2 class="artboard-heading">${escapeHtml(page.heading)}</h2>` : "";
    const intro = page.intro ? `<p class="artboard-intro">${escapeHtml(page.intro)}</p>` : "";

    return `
      <section class="page page-canvas" id="${escapeAttr(page.id)}" data-page-section="${escapeAttr(page.id)}">
        <div class="artboard-viewport">
          <div class="artboard-frame">
            <div class="artboard">
              ${heading}${intro}${page.items.map(renderCanvasItem).join("")}
            </div>
          </div>
        </div>
      </section>`;
  }

  function renderCardsPage(page) {
    const heading = page.heading ? `<h2 class="page-heading">${escapeHtml(page.heading)}</h2>` : "";
    const intro = page.intro ? `<p class="page-intro">${escapeHtml(page.intro)}</p>` : "";
    const map = page.map?.places?.length ? renderRecommendationMap(page) : "";
    return `
      <section class="page page-cards" id="${escapeAttr(page.id)}" data-page-section="${escapeAttr(page.id)}">
        <div class="cards-page-inner">${heading}${intro}${map}</div>
      </section>`;
  }

  function renderRecommendationMap(page) {
    const mapId = `${page.id}-map`;
    const categories = [...new Set(page.map.places.map(place => place.category).filter(Boolean))];
    const filters = categories.map(category =>
      `<button class="map-filter" type="button" data-map-filter="${escapeAttr(category)}" aria-pressed="true">${escapeHtml(category)}</button>`
    ).join("");

    return `
      <section class="recommendation-map-shell" aria-labelledby="${escapeAttr(mapId)}-title">
        <div class="map-heading-row">
          <div>
            <p class="map-help">Explore our favorites: tap a heart for details, drag or pinch to explore.</p>
          </div>
          <button class="map-reset" type="button" data-map-reset="${escapeAttr(mapId)}">Show all</button>
        </div>
        <div class="map-filters" aria-label="Filter recommendations by category">${filters}</div>
        <div id="${escapeAttr(mapId)}" class="recommendation-map" data-recommendation-map="${escapeAttr(page.id)}" role="region" aria-label="Interactive map of neighborhood recommendations"></div>
        <p class="map-fallback" hidden>Map tiles could not be loaded. The complete recommendation list is still available below.</p>
      </section>`;
  }

function renderCanvasItem(item) {
  const mobile = item.mobile || {};

  const desktopBlur = number(item.blur, 0);
  const mobileBlur = number(mobile.blur, desktopBlur);

  const style = [
    `--x:${number(item.x, 50)}%`,
    `--y:${number(item.y, 50)}%`,
    `--w:${number(item.width, 300)}px`,
    `--rotate:${number(item.rotation, 0)}deg`,
    `--z:${number(item.zIndex, 1)}`,
    `--blur:${desktopBlur}px`,

    `--mx:${number(mobile.x, item.x ?? 50)}%`,
    `--my:${number(mobile.y, item.y ?? 50)}%`,
    `--mw:${number(mobile.width, item.width ?? 300)}px`,
    `--mrotate:${number(mobile.rotation, item.rotation ?? 0)}deg`,
    `--mz:${number(mobile.zIndex, item.zIndex ?? 1)}`,
    `--mblur:${mobileBlur}px`
  ].join(";");

  const blurClass =
    desktopBlur > 0 || mobileBlur > 0
      ? " has-item-blur"
      : "";

  let html = "";

  if (item.kind === "paper") {
    const styleClass = item.paperStyle
      ? ` ${escapeAttr(item.paperStyle)}`
      : "";

    const title = item.title
      ? `<h3 class="paper-title">${escapeHtml(item.title)}</h3>`
      : "";

    const body = item.body
      ? `<div class="paper-body">${item.body}</div>`
      : "";

    const links = item.links?.length
      ? `
        <ul class="link-list">
          ${item.links.map(link => `
            <li>
              <a
                href="${escapeAttr(link.href)}"
                target="${externalTarget(link.href)}"
                rel="${externalRel(link.href)}"
              >
                ${escapeHtml(link.label)}
              </a>
            </li>
          `).join("")}
        </ul>
      `
      : "";

    html = `
      <article class="paper${styleClass}">
        ${title}
        ${body}
        ${links}
      </article>
    `;
  }

  if (item.kind === "photo") {
    html = `
      <figure class="photo">
        <img
          src="${escapeAttr(item.src)}"
          alt="${escapeAttr(item.alt || "")}"
        />
      </figure>
    `;
  }

  if (item.kind === "image") {
    html = `
      <div class="image-only">
        <img
          src="${escapeAttr(item.src)}"
          alt="${escapeAttr(item.alt || "")}"
        />
      </div>
    `;
  }

  if (item.kind === "button") {
    html = `
      <div class="button-card">
        <a
          href="${escapeAttr(item.href)}"
          target="${externalTarget(item.href)}"
          rel="${externalRel(item.href)}"
        >
          ${escapeHtml(item.label)}
        </a>
      </div>
    `;
  }

  return `
    <div class="canvas-item${blurClass}" style="${style}">
      ${html}
    </div>
  `;
}

  function renderCards(page) {
    const columns = number(page.columns, 3);
    const cards = page.cards.map(card => `<article class="info-card"><h3>${escapeHtml(card.title)}</h3><p>${escapeHtml(card.body || "")}</p></article>`).join("");
    return `<div class="cards-grid" style="--columns:${columns}">${cards}</div>`;
  }

  function initializeRecommendationMaps() {
    const mapElements = Array.from(document.querySelectorAll("[data-recommendation-map]"));
    if (!mapElements.length) return;

    if (typeof window.L === "undefined") {
      mapElements.forEach(element => {
        element.classList.add("map-unavailable");
        const fallback = element.parentElement?.querySelector(".map-fallback");
        if (fallback) fallback.hidden = false;
      });
      return;
    }

    mapElements.forEach(element => {
      const page = site.pages.find(candidate => candidate.id === element.dataset.recommendationMap);
      if (!page?.map?.places?.length) return;

      const map = L.map(element, {
        zoomControl: true,
        scrollWheelZoom: false,
        tap: true,
        preferCanvas: true
      });

      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
      }).addTo(map);

      const markerLayer = L.layerGroup().addTo(map);
      const markers = [];
      const visibleCategories = new Set(page.map.places.map(place => place.category));

      page.map.places.forEach((place, index) => {
        if (!Number.isFinite(Number(place.lat)) || !Number.isFinite(Number(place.lng))) return;

        const icon = L.divIcon({
          className: "recommendation-marker-wrap",
          html: `<span class="recommendation-marker" aria-hidden="true">♥</span>`,
          iconSize: [36, 36],
          iconAnchor: [18, 31],
          popupAnchor: [0, -28]
        });

        const marker = L.marker([Number(place.lat), Number(place.lng)], {
          icon,
          title: place.title,
          keyboard: true,
          riseOnHover: true
        });

        marker.placeData = place;
        marker.bindPopup(renderMapPopup(place), {
          className: "wedding-map-popup",
          maxWidth: 290,
          minWidth: 210,
          closeButton: true,
          autoPanPaddingTopLeft: [20, 80],
          autoPanPaddingBottomRight: [20, 110]
        });
        marker.addTo(markerLayer);
        markers.push(marker);
      });

      const fitVisibleMarkers = () => {
        const visible = markers.filter(marker => visibleCategories.has(marker.placeData.category));
        if (!visible.length) return;
        const bounds = L.latLngBounds(visible.map(marker => marker.getLatLng()));
        map.fitBounds(bounds, {
          paddingTopLeft: [34, 34],
          paddingBottomRight: [34, 48],
          maxZoom: Number(page.map.maxZoom) || 14
        });
      };

      const redrawMarkers = () => {
        markerLayer.clearLayers();
        markers.forEach(marker => {
          if (visibleCategories.has(marker.placeData.category)) marker.addTo(markerLayer);
        });
        fitVisibleMarkers();
      };

      const shell = element.closest(".recommendation-map-shell");
      shell?.querySelectorAll("[data-map-filter]").forEach(button => {
        button.addEventListener("click", () => {
          const category = button.dataset.mapFilter;
          const isActive = button.getAttribute("aria-pressed") === "true";
          if (isActive && visibleCategories.size === 1) return;
          if (isActive) visibleCategories.delete(category);
          else visibleCategories.add(category);
          button.setAttribute("aria-pressed", String(!isActive));
          redrawMarkers();
        });
      });

      shell?.querySelector("[data-map-reset]")?.addEventListener("click", () => {
        page.map.places.forEach(place => visibleCategories.add(place.category));
        shell.querySelectorAll("[data-map-filter]").forEach(button => button.setAttribute("aria-pressed", "true"));
        redrawMarkers();
      });

      map.on("focus", () => map.scrollWheelZoom.enable());
      map.on("blur", () => map.scrollWheelZoom.disable());
      map.on("click", () => map.scrollWheelZoom.enable());

      fitVisibleMarkers();
      window.setTimeout(() => map.invalidateSize(), 100);
      element._leafletMap = map;
    });
  }

  function renderMapPopup(place) {
    const category = place.category ? `<p class="map-popup-category">${escapeHtml(place.category)}</p>` : "";
    const description = place.description ? `<p class="map-popup-description">${escapeHtml(place.description)}</p>` : "";
    const neighborhood = place.neighborhood ? `<p class="map-popup-neighborhood">${escapeHtml(place.neighborhood)}</p>` : "";
    const href = place.href || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.title} Brooklyn NY`)}`;
    return `
      <div class="map-popup-content">
        ${category}
        <h4>${escapeHtml(place.title)}</h4>
        ${description}
        ${neighborhood}
        <a href="${escapeAttr(href)}" target="_blank" rel="noopener noreferrer">Open in Maps</a>
      </div>`;
  }

  function installArtboardScaling() {
    const viewports = Array.from(document.querySelectorAll(".artboard-viewport"));
    const media = window.matchMedia(MOBILE_QUERY);

    const resize = viewport => {
      const frame = viewport.querySelector(".artboard-frame");
      const artboard = viewport.querySelector(".artboard");
      if (!frame || !artboard) return;

      const dimensions = media.matches ? site.layout.mobile : site.layout.desktop;
      const width = Number(dimensions.width);
      const height = Number(dimensions.height);
      const availableWidth = Math.max(1, viewport.clientWidth);
      const availableHeight = Math.max(1, viewport.clientHeight);
      const scale = Math.min(availableWidth / width, availableHeight / height);

      frame.style.width = `${width * scale}px`;
      frame.style.height = `${height * scale}px`;
      artboard.style.width = `${width}px`;
      artboard.style.height = `${height}px`;
      artboard.style.transform = `scale(${scale})`;
      artboard.dataset.scale = String(scale);
      artboard.dataset.layout = media.matches ? "mobile" : "desktop";

      // Expose the exact artboard scale so non-artboard headings can match
      // the rendered size of headings inside the transformed artboard.
      root.style.setProperty("--artboard-scale", String(scale));
    };

    const observer = new ResizeObserver(entries => entries.forEach(entry => resize(entry.target)));
    viewports.forEach(viewport => { observer.observe(viewport); resize(viewport); });
    media.addEventListener("change", () => requestAnimationFrame(() => viewports.forEach(resize)));
    window.addEventListener("orientationchange", () => window.setTimeout(() => viewports.forEach(resize), 150));
  }

  function observePages() {
    const links = Array.from(nav.querySelectorAll("a"));
    const sections = Array.from(document.querySelectorAll("[data-page-section]"));
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      links.forEach(link => link.dataset.page === visible.target.dataset.pageSection
        ? link.setAttribute("aria-current", "page") : link.removeAttribute("aria-current"));
    }, { threshold: [0.25, 0.5, 0.75] });
    sections.forEach(section => observer.observe(section));
  }

  function externalTarget(href) { return /^https?:\/\//i.test(href) ? "_blank" : "_self"; }
  function externalRel(href) { return /^https?:\/\//i.test(href) ? "noopener noreferrer" : ""; }
  function number(value, fallback) { return Number.isFinite(Number(value)) ? Number(value) : fallback; }
  function escapeHtml(value = "") { return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;"); }
  function escapeAttr(value = "") { return escapeHtml(value); }
})();
