# Cormorant Cyber — corporate site

Single-page marketing site for [Cormorant Cyber](https://cormorantcyber.com), an independent
mobile & Android security consultancy by Casey Chambers (Dubai, UAE).

## What's here

| Path | Purpose |
| --- | --- |
| `src/` | React + Vite + Tailwind single-page app (all copy lives in `src/constants/` and section components) |
| `public/` | `CNAME` (custom domain), plus legacy standalone pages carried over from the previous static site: `contact.html`, `research.html`, `fleet/` |
| `gh-pages` branch | Built output (`dist/`) — this is what GitHub Pages serves |

## How the site is published

1. Push source changes to `main` on `github.com/savagedamage/cormorantcyber`.
2. Build: `npm run build`.
3. Push the build to the Pages branch:
   ```bash
   git push deploy main                     # source
   # build output branch:
   git worktree add -B gh-pages /tmp/cc-pages deploy/main  # or use a fresh clone
   cp -r dist/* /tmp/cc-pages/ && cd /tmp/cc-pages
   git add -A && git commit -m "deploy: $(date +%Y%m%d-%H%M)" && git push deploy gh-pages
   ```
4. GitHub Pages serves the `gh-pages` branch root. `public/CNAME` keeps the custom domain
   `cormorantcyber.com`; the preview URL is `https://savagedamage.github.io/cormorantcyber/`.

The Vite base is `./`, so the same build works at the domain root and under the project path.

## Built on

The design and code started from [sanidhyy/brainwave](https://github.com/sanidhyy/brainwave)
(MIT — see `LICENSE`), then was rebranded and redesigned: original sonar-dive hero animation,
Inter/JetBrains Mono type system, and a dark glass design language remixed from Linear's.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/
```
