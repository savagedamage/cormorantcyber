# Cormorant Cyber — corporate site

Single-page business site for [Cormorant Cyber](https://cormorantcyber.com), an independent
mobile & Android security consultancy by Casey Chambers (Dubai, UAE).

## What's here

| File | Purpose |
| --- | --- |
| `index.html` | Single-page site — semantic HTML5, inline CSS/JS, no external dependencies |
| `CNAME` | Custom domain for GitHub Pages (`cormorantcyber.com`) |

## How the site is published

1. Push `main` to `github.com/savagedamage/cormorantcyber`.
2. GitHub Pages serves the repo root (`/`) on the `main` branch.
3. The `CNAME` file points the Pages deployment at `cormorantcyber.com`;
   the live preview URL is `https://savagedamage.github.io/cormorantcyber/`.

All content is authored by hand — no build step, no framework, no CDN dependencies,
so the page works fully standalone.
