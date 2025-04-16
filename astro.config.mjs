// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import rehypePrettyCode from "rehype-pretty-code";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    mdx({
      syntaxHighlight: false,
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: "one-dark-pro",
          },
        ],
      ],
    }),
  ],
});
