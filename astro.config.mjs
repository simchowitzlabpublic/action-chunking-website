// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

// https://astro.build/config
export default defineConfig({
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