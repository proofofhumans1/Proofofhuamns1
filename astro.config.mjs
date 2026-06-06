import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // Uncomment the line below to use Cloudflare Workers as your adapter
  // adapter: cloudflare(),
  
  // For static site generation (default)
  output: 'static',
  
  // Site configuration
  site: 'https://proofofhumans1.com',
  
  // Build configuration
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
