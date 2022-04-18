import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import vue from '@astrojs/vue';

import example from '@lloydjatkinson/astro-integration-demo';

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
    vue(),
    example(),
  ]
});