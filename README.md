# Parameterized Wedding Website Template

This is a blank, customizable static wedding website inspired by a scrapbook/collage layout.

## Open it

Double-click `index.html`.

For best results, run it through a small local server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Main customization file

Edit `content.js`.

You can change:

- names, date, and location
- colors and fonts
- background image
- navigation labels
- page order
- event details
- hotel and travel information
- RSVP and registry links
- recommendation cards
- every object’s position, size, rotation, and stacking order

## Canvas positioning

Each object can use:

```js
x: 50,
y: 50,
width: 400,
rotation: -3,
zIndex: 2
```

- `x`: horizontal position from 0–100%
- `y`: vertical position from 0–100%
- `width`: width in pixels
- `rotation`: degrees
- `zIndex`: which object sits on top

## Object types

### Paper

```js
{
  kind: "paper",
  paperStyle: "lined", // optional: "lined" or "crumpled"
  title: "Title",
  body: "Your text",
  x: 50, y: 50, width: 400, rotation: 0, zIndex: 1
}
```

### Photo

```js
{
  kind: "photo",
  src: "assets/your-photo.jpg",
  alt: "Description",
  x: 50, y: 50, width: 250, rotation: 4, zIndex: 2
}
```

### Transparent image or decorative object

```js
{
  kind: "image",
  src: "assets/your-object.png",
  alt: "Description",
  x: 50, y: 50, width: 250, rotation: 0, zIndex: 2
}
```

### Button

```js
{
  kind: "button",
  label: "RSVP here",
  href: "https://your-rsvp-link.com",
  x: 50, y: 50, width: 350, rotation: 0, zIndex: 2
}
```

## Adding images

Put JPG, PNG, SVG, or WebP files in the `assets` folder, then use:

```js
src: "assets/file-name.png"
```

Transparent PNGs work especially well for decorative objects.

## Fonts

The starter uses system fonts so it works immediately. To use custom web fonts, add the font import to `styles.css`, then change `bodyFont` or `displayFont` in `content.js`.

Only use fonts you are licensed to publish online.

## Publishing

This folder can be deployed directly to:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

No build process is required.
