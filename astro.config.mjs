// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

const SITE_URL = process.env.ASTRO_SITE_URL || undefined;
const BASE_PATH = SITE_URL ? new URL(SITE_URL).pathname : undefined;

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'never',
  integrations: [
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [
        [
          rehypeMathjax,
          {
            tex: {
              inlineMath: [['$', '$']],
              displayMath: [['$$', '$$']],
            },
          },
        ],
      ],
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [
        rehypeMathjax,
        {
          tex: {
            inlineMath: [['$', '$']],
            displayMath: [['$$', '$$']],
          },
        },
      ],
    ],
  },
  vite: {
    plugins: [tailwindcss()],
    server: {allowedHosts: ["7e4265c63c79.ngrok-free.app"]}
  }
});
