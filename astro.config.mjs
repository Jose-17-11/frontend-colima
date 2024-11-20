// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  adapter: cloudflare(),
  image: {
    service: passthroughImageService()
  },
  output: 'hybrid',
});