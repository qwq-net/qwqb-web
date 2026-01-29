// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), icon()],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  adapter: cloudflare({
    imageService: "compile",
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
