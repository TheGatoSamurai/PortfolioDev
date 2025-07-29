import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwind from '@astrojs/tailwind';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [tailwind()],
  vite: {
    plugins: [
      viteStaticCopy({
        targets: [
          { src: '_redirects', dest: '.' }
        ]
      })
    ]
  }
});
