import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import robots from "astro-robots";
import sitemap from "@astrojs/sitemap";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://vsahni.me",
  output: "static",
  integrations: [tailwind(), robots(), sitemap(), compress()],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    edgeMiddleware: {
      enabled: true,
    }
  }),
  redirects: {
    "/resume.pdf": { destination: "/resume_feb2026.pdf", status: 301 }
  }
});