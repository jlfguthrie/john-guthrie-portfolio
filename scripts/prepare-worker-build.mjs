import { cp, mkdir } from "node:fs/promises";
// Keep the original prototype packaging available alongside the Workers output.
await mkdir("dist/client", { recursive: true });
await cp(".cloudflare/output/v0/workers/default/assets", "dist/client", {
  recursive: true,
});
