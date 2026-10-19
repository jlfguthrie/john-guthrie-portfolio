import { defineConfig, bindings } from "cf/config";
export default defineConfig({
  accountId: "369c6110ddcb46f01377c1e8b7590a26",
  worker: {
    name: "john-guthrie-portfolio",
    entrypoint: "./server/index.js",
    compatibilityDate: "2026-10-19",
    env: { ASSETS: bindings.assets() },
    assets: { notFoundHandling: "none", runWorkerFirst: ["/api/*"] },
    observability: {
      enabled: true,
      redactQueryString: true,
      logs: { enabled: true, headSamplingRate: 1 },
      traces: { enabled: true, headSamplingRate: 0.1 },
    },
  },
});
