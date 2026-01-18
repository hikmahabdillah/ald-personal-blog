---
title: "Web Performance Optimization: Bikin Website Mu Secepat Kilat"
description: "Panduan praktis optimasi performa web untuk user experience yang lebih baik dan SEO yang lebih mantap"
pubDate: 2026-01-09
tags: ["performance", "web-dev", "optimization"]
image: "web-performance-optimization"
imageCredit: "web-performance-optimization"
---

## Kenapa Performance Itu Penting?

Di era 2026 ini, user attention span makin pendek. Study shows: **53% users leave** kalau website load lebih dari 3 detik. Belum lagi Google search ranking yang heavily consider page speed. So yeah, performance matters—a lot!

### The Performance Budget

Before optimize, set your target dulu:

```
Performance Budget Target:
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.8s
- Cumulative Layout Shift (CLS): < 0.1
- First Input Delay (FID): < 100ms
```

## Image Optimization: Low-Hanging Fruit

Images often jadi **70-80% dari total page weight**. Optimize ini dulu = instant improvement!

### 1. Format Modern: WebP & AVIF

```html
<!-- Fallback support untuk browser lama -->
<picture>
  <source srcset="image.avif" type="image/avif" />
  <source srcset="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Fallback" />
</picture>
```

**Size comparison:**

- JPG: 100KB
- WebP: ~30KB (70% smaller!)
- AVIF: ~20KB (80% smaller!)

### 2. Lazy Loading

```html
<!-- Native lazy loading - simple dan effective -->
<img src="image.jpg" loading="lazy" alt="Description" />

<!-- Untuk background images -->
<div class="lazy-bg" data-bg="hero.jpg"></div>
```

```javascript
// Intersection Observer untuk custom lazy loading
const images = document.querySelectorAll(".lazy-bg");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const bg = entry.target.dataset.bg;
      entry.target.style.backgroundImage = `url(${bg})`;
      observer.unobserve(entry.target);
    }
  });
});

images.forEach((img) => observer.observe(img));
```

### 3. Responsive Images

```html
<img
  src="image-800.jpg"
  srcset="image-400.jpg 400w, image-800.jpg 800w, image-1200.jpg 1200w"
  sizes="(max-width: 640px) 400px, 
         (max-width: 1024px) 800px, 
         1200px"
  alt="Responsive image"
/>
```

## Code Splitting & Bundle Optimization

### Dynamic Imports

```javascript
// Bad - load everything upfront
import HeavyComponent from "./HeavyComponent";

// Good - load on demand
const HeavyComponent = lazy(() => import("./HeavyComponent"));

// Usage dengan Suspense
<Suspense fallback={<Loading />}>
  <HeavyComponent />
</Suspense>;
```

### Tree Shaking

Pastikan unused code nggak masuk bundle:

```javascript
// Bad - import whole library
import _ from "lodash";
const result = _.debounce(fn, 300);

// Good - import specific function
import debounce from "lodash/debounce";
const result = debounce(fn, 300);

// Best - use native atau lightweight alternative
const debounce = (fn, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
};
```

## Critical CSS & Font Loading

### Inline Critical CSS

```html
<head>
  <!-- Critical CSS inline -->
  <style>
    /* Above-the-fold styles */
    body {
      margin: 0;
      font-family: system-ui;
    }
    header {
      background: #1a1a1a;
      color: white;
    }
  </style>

  <!-- Non-critical CSS async -->
  <link
    rel="preload"
    href="styles.css"
    as="style"
    onload="this.rel='stylesheet'"
  />
</head>
```

### Font Display Strategy

```css
@font-face {
  font-family: "CustomFont";
  src: url("font.woff2") format("woff2");
  font-display: swap; /* Show fallback immediately */
  font-weight: 400;
}

/* Use system fonts as fallback */
body {
  font-family:
    "CustomFont",
    system-ui,
    -apple-system,
    sans-serif;
}
```

## Caching Strategies

### Service Worker untuk Offline Support

```javascript
// sw.js - Basic service worker
const CACHE_NAME = "v1";
const CACHE_URLS = ["/", "/styles.css", "/script.js", "/offline.html"];

// Install - cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CACHE_URLS)),
  );
});

// Fetch - serve from cache, fallback to network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
      .catch(() => caches.match("/offline.html")),
  );
});
```

### HTTP Headers

```
# .htaccess untuk Apache atau nginx config
<IfModule mod_expires.c>
  ExpiresActive On

  # Images
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"

  # CSS & JavaScript
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"

  # HTML
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>
```

## Database & API Optimization

### Query Optimization

```javascript
// Bad - N+1 query problem
const users = await db.users.findMany();
for (const user of users) {
  user.posts = await db.posts.findMany({
    where: { userId: user.id },
  });
}

// Good - single query dengan join
const users = await db.users.findMany({
  include: { posts: true },
});
```

### API Response Caching

```javascript
// Cache API responses
const cache = new Map();

async function fetchWithCache(url, ttl = 60000) {
  const cached = cache.get(url);

  if (cached && Date.now() - cached.timestamp < ttl) {
    return cached.data;
  }

  const data = await fetch(url).then((r) => r.json());
  cache.set(url, { data, timestamp: Date.now() });

  return data;
}
```

## Monitoring & Measuring

### Core Web Vitals

```javascript
// Measure real user metrics
import { getCLS, getFID, getFCP, getLCP, getTTFB } from "web-vitals";

function sendToAnalytics(metric) {
  // Send to your analytics endpoint
  fetch("/analytics", {
    method: "POST",
    body: JSON.stringify(metric),
  });
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

### Tools yang Helpful

1. **Lighthouse** - Chrome DevTools, comprehensive audit
2. **WebPageTest** - detailed waterfall analysis
3. **GTmetrix** - performance testing dengan various locations
4. **Chrome DevTools Performance tab** - profiling dan bottleneck detection

## Quick Wins Checklist

- ✅ Enable Gzip/Brotli compression
- ✅ Minify CSS, JS, HTML
- ✅ Optimize images (WebP, lazy loading)
- ✅ Use CDN untuk static assets
- ✅ Implement browser caching
- ✅ Remove unused CSS/JS (tree shaking)
- ✅ Use system fonts atau font-display: swap
- ✅ Defer non-critical JavaScript
- ✅ Minimize redirects
- ✅ Use HTTP/2 atau HTTP/3

## Kesimpulan

Web performance optimization itu continuous process, bukan one-time thing. Start dengan **measure**, identify bottlenecks, **optimize**, then **measure again**.

Every millisecond counts untuk better user experience dan higher conversion rates. Keep optimizing! 🚀⚡

Remember: **Fast websites = Happy users = Better business** 💚
