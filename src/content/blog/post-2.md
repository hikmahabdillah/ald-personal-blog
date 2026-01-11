---
title: "Belajar Astro: Framework yang Bikin Loading Cepat"
description: "Pengalaman membangun blog dengan Astro dan mengapa framework ini cocok untuk content-focused websites"
pubDate: 2026-01-06
tags: ["astro", "web-dev", "javascript"]
image: "post-2"
---

## Kenapa Astro?

Setelah mencoba berbagai framework seperti Next.js, Gatsby, dan lainnya, akhirnya aku memutuskan untuk membangun blog pribadi ini dengan **Astro**. Keputusan ini nggak datang begitu saja—ada beberapa alasan kuat yang membuat Astro jadi pilihan utama.

### Zero JavaScript by Default

Ini yang paling menarik: Astro secara default **tidak mengirim JavaScript ke browser** kecuali kamu memang membutuhkannya. Hasilnya? Website super cepat dengan load time yang minimal. Perfect untuk blog atau website yang fokus ke konten.

```javascript
// Komponen Astro (.astro)
---
const greeting = "Hello from Astro!";
const currentYear = new Date().getFullYear();
---

<div>
  <h1>{greeting}</h1>
  <p>Tahun {currentYear} dan Astro masih the best! 🚀</p>
</div>
```

### Islands Architecture

Konsep **Islands Architecture** yang diusung Astro memungkinkan kita untuk:

- Render sebagian besar halaman sebagai HTML statis
- Menambahkan interaktivitas hanya di bagian yang membutuhkan (islands)
- Mix and match framework (React, Vue, Svelte bisa jalan bareng!)

### Developer Experience yang Mantap

Yang bikin coding jadi lebih enjoyable:

1. **File-based routing** - mirip Next.js, simpel dan intuitif
2. **Markdown support** - native support untuk `.md` dan `.mdx`
3. **Fast refresh** - development server yang blazing fast
4. **TypeScript ready** - built-in TypeScript support tanpa config ribet

## Content Collections: Game Changer

Fitur Content Collections di Astro v2+ ini seriously bikin hidup lebih mudah:

```typescript
// src/content/config.ts
import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()),
    image: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
```

Dengan Content Collections, semua markdown files kita punya **type safety** dan **validation**. No more typo di frontmatter yang bikin error! 💯

## Performance yang Bikin Bangga

Hasil akhirnya? Blog dengan:

- ⚡ **Lighthouse score 100** di semua kategori
- 🎯 **First Contentful Paint < 1s**
- 📦 **Bundle size** yang minimal
- 🚀 **Time to Interactive** yang super cepat

## Kesimpulan

Astro bukan cuma hype. Framework ini beneran solve masalah real: website yang cepat tanpa sacrifice developer experience. Kalau kamu lagi bikin blog, documentation site, atau any content-focused website, Astro adalah pilihan yang solid.

Next post bakal bahas lebih dalam tentang styling dengan Tailwind CSS di Astro. Stay tuned! ✨
