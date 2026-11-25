// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://pradhansubhasish16-sudo.github.io',
  base: '/wanderers-and-ridges',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
