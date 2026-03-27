import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import seoFiles from './src/integrations/seo-files';
import { config } from './src/config';

export default defineConfig({
  site: config.seo.siteUrl,
  integrations: [sitemap(), seoFiles()],
  vite: {
    plugins: [tailwindcss()],
  },
});
