# Cotomy Reference Site

This repository contains the Cotomy reference site, split out from the
`reference-site` directory in the main `cotomy` repository.

The site is built with [Docusaurus](https://docusaurus.io/).

## Requirements

- Node.js 20 or later
- npm

GitHub Actions uses Node.js 22 for Pages deployment.

## Local Development

```bash
npm install
npm run start
```

## Build

```bash
npm run build
```

The static site is generated into `build/`.

## Deployment

The repository is configured for GitHub Pages through GitHub Actions:

1. Push this repository to GitHub.
2. In repository settings, set Pages source to **GitHub Actions**.
3. Push to `main`; the workflow builds Docusaurus and deploys `build/`.

Do not add `static/CNAME` until the domain cutover. First deploy and verify the
site on the temporary `github.io` URL, then configure `cotomy.net` in Pages
settings and move DNS after the new deployment is confirmed.
