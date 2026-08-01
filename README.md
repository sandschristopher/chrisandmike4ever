# Responsive Artboard Wedding Site

This build keeps the existing 1600 × 900 desktop compositions and introduces a dedicated 430 × 932 portrait artboard for phones. Both layouts use the same page content and assets from `content.js`.

## Files

- `index.html`
- `app.js`
- `styles.css`
- `content.js`
- `assets/` — all uploaded image assets
- `CNAME`

The font declarations are preserved. Copy your existing font files into `assets/fonts/`:

- `RASCAL__.TTF`
- `XanhMono-Regular.ttf`
- `PPPlayground-Medium.otf`
- `DepartureMono-Regular.otf`

The site has fallback fonts and still renders when those files are absent.

## Local preview

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Editing positions

Desktop values remain unchanged. Each item can also contain one mobile override:

```js
mobile: { x: 50, y: 65, width: 300, rotation: -2 }
```

The mobile values are evaluated against the portrait artboard, not the desktop artboard.
