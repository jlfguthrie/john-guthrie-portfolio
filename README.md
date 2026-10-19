# John Guthrie — product & technical delivery

A personal portfolio with three explorable case studies, a career timeline and two downloadable CVs. Built with React and served by a Cloudflare Worker, including a small server-side workflow demonstration.

## Run locally

Node.js 22.18 or newer and npm are required.

```sh
npm ci
npm run dev
```

The Cloudflare Vite plugin runs the backend in workerd. The sample order demo is deterministic, uses fictional data and has no database, messaging or external service connections.

## Check and build

```sh
npm test
npm run build
npm run test:sites
```

The four backend tests cover both fulfilment branches, invalid requests, cross-origin rejection and asset routing. The original prototype packaging tests are retained as a separate compatibility check.

The production build lives in `.cloudflare/output/v0/`. `dist/` is a secondary prototype-compatible export; production is deployed with the Cloudflare CLI.

## Deploy

Authenticate the official `cf` CLI to the intended Cloudflare account, then:

```sh
npx cf deploy --dry-run
npx cf deploy
```

Configuration is in `cloudflare.config.ts`. This is a full Worker with static assets, not a Pages project. API requests run through `server/index.js`; assets are served by the Workers asset binding. Logs and sampled traces are enabled. No API keys or other secrets are needed by the application.

The compatibility date follows the deployment platform's UTC date. CI validates builds; deployment credentials are not stored in this repository.

## Content

- `src/App.jsx` — public career content and interactions
- `src/styles.css` — responsive presentation
- `server/index.js` — bounded-input sample workflow API
- `public/cv/` — public PDF CVs
- `public/john-guthrie.jpg` — supplied portrait, unchanged
- `design-qa.md` — visual and interaction checks

The education and employment content comes from the owner's CVs and records. Oracle qualification details are owner-reported; no recovered credential ID or digital verification is claimed. Private supporting documents and recovery correspondence are not included.

The original prototype runtime files are preserved for portability. The Cloudflare Worker uses its own entry point.
