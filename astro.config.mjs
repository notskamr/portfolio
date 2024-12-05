import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import robots from "astro-robots";
import sitemap from "@astrojs/sitemap";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://vsahni.me",
  integrations: [tailwind(), robots(), sitemap(), compress()],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    edgeMiddleware: {
      enabled: true,
    }
  })
});