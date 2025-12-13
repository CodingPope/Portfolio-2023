# Portfolio (Next.js)

Personal portfolio site built with Next.js, MDX posts, and a handful of custom UI components/animations.

## Requirements

- Node.js: `22.x` (matches `package.json#engines`)
- npm: `>= 8.6.0`

## Getting started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

## Scripts

- `npm run dev`: start Next.js in development mode
- `npm run build`: production build + static export to `build/`
- `npm run start`: start the Next.js server (run `npm run build` first)
- `npm test`: placeholder

## Environment variables

This app references the following variables at runtime:

- `NEXT_PUBLIC_WEBSITE_URL` (canonical URLs, OG image links)
- `NEXT_PUBLIC_FATHOM_ID` (Fathom site ID)
- `NEXT_PUBLIC_FATHOM_URL` (Fathom script URL)

## Conventions

- Routes use custom Next.js extensions: `*.page.js` and `*.api.js` (see `next.config.js`).
- Static export output goes to `build/`.

## Content

- MDX posts live in `src/posts/`.

## Customization

<details>
  <summary>How do I change the color/feel of the <code>DisplacementSphere</code> (the blobby rotating background)?</summary>

  The sphere is rendered in `src/layouts/Home/DisplacementSphere.js` and uses custom shaders:

  - `src/layouts/Home/displacementSphereVertex.glsl`
  - `src/layouts/Home/displacementSphereFragment.glsl`

  Lighting and background color come from the active theme (see `ThemeProvider`), e.g. `rgbBackground` / `colorWhite`.
</details>
