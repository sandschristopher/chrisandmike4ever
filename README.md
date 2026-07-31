# Fixed Artboard Wedding Site

This version keeps every canvas page on a fixed 1600 × 900 design artboard and scales the entire artboard uniformly to fit the available browser area.

## Replace these files

- `app.js`
- `styles.css`
- `content.js`
- `index.html`

Keep your existing `assets` folder.

## Run locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` and hard-refresh with Command + Shift + R.

## Positioning

Your existing values still work:

```js
x: 58,
y: 45,
width: 480,
rotation: -2,
zIndex: 1
```

The difference is that the entire 1600 × 900 composition now scales together. Objects do not stack on mobile and pages reserve their own height, so one section cannot spill into the next.

## Optional mobile override

```js
mobile: {
  x: 45,
  y: 55,
  width: 300,
  rotation: -4
}
```

This is optional. Without it, mobile uses the exact desktop composition, uniformly scaled.
