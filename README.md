# Proof of Humans

A decentralized identity verification system built with Astro. This project can be deployed as a static website or as a Cloudflare Worker.

## 🚀 Quick Start

### Prerequisites
- Node.js 18.14 or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000` to see your site in action.

### Build

For **static site generation** (default):
```bash
npm run build
```

## 📦 Deployment Options

### Option 1: Static Site (GitHub Pages, Netlify, Vercel, etc.)

The default configuration outputs a static site to the `dist/` directory.

```bash
npm run build
npm run preview
```

### Option 2: Cloudflare Workers

To deploy as a Cloudflare Worker:

1. **Enable Cloudflare adapter in `astro.config.mjs`:**

```javascript
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  adapter: cloudflare(),
  output: 'hybrid', // or 'server' for full SSR
});
```

2. **Configure `wrangler.toml`:**

```toml
name = "proofofhumans"
type = "javascript"
account_id = "your-account-id"
workers_dev = true
route = ""
zone_id = ""

[build]
command = "npm run build"
cwd = "./"
watch_paths = ["src/**/*.astro"]

[build.upload]
format = "service-worker"
main = "./dist/index.js"
```

3. **Deploy:**

```bash
npm install -g wrangler
wrangler deploy
```

## 📁 Project Structure

```
/
├── public/          # Static assets
├── src/
│   ├── layouts/     # Layout components
│   ├── pages/       # Page routes
│   └── components/  # Reusable components
├── astro.config.mjs # Astro configuration
└── tsconfig.json    # TypeScript configuration
```

## 🛠️ Adding Pages

Create new pages in `src/pages/`:

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Page Title">
  <h1>Your content here</h1>
</Layout>
```

Astro will automatically create routes based on your file structure.

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Cloudflare Workers with Astro](https://docs.astro.build/en/guides/integrations-guide/cloudflare/)

## 📝 License

MIT
