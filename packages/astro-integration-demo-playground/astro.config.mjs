import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import vue from '@astrojs/vue'; // import example from '@lloydjatkinson/astro-integration-demo';
// https://astro.build/config

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
    vue(),
    tailwind(),
  ],
  // vite: {
  //   resolve: {
  //     extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.vue', '.json'],
  //   },
  // }
});