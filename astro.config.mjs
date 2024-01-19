import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import robots from "astro-robots";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

import fontPicker from "astro-font-picker";

// https://astro.build/config
export default defineConfig({
  site: "https://vsahni.me",
  integrations: [fontPicker(), tailwind(), robots(), sitemap(), partytown()],
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    speedInsights: {
      enabled: true
    }
  })
});