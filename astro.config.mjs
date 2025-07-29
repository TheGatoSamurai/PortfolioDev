import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [tailwind()],
  vite: {
    build: {
      rollupOptions: {
      }
    }
  },
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const fs = await import('fs/promises');
      await fs.copyFile('_redirects', `${dir}/_redirects`);
    }
  }
});
