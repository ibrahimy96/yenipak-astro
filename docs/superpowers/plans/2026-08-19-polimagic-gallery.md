# Polimagic Gallery Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Preserve the original Wix Polimagic hologram-pattern gallery in the Astro migration using self-hosted image assets.

**Architecture:** Download the 17 original Wix gallery images into `public/images/products/polimagic/`, define their labels and local paths in `polimagic.astro`, and render them as a responsive CSS grid below the existing “Hologram Desenleri” heading. No runtime dependency on Wix remains.

**Tech Stack:** Astro 5, `astro:assets` for local images, static files under `public/`, CSS Grid.

## Global Constraints

- Use local assets only; do not leave Wix CDN URLs in the migrated page.
- Preserve the original Turkish pattern labels and ordering.
- Do not add dependencies.
- Keep the existing Polimagic text and page structure outside the gallery.

---

### Task 1: Download the original hologram assets

**Files:**
- Create: `public/images/products/polimagic/a0-gokkusagi.jpg` through `b7-isik.jpg`

- [x] Download the 17 original Wix source images into the product asset directory, preserving this order and mapping:

```text
A0 Gökkuşağı       ac31a9_8f1312acfcd74f9abf96f42ea136611b~mv2.jpg
A1 Noktacıklar      ac31a9_7e80e0d02bce4036b13391bc94c25e8c~mv2.jpg
A2 Gonca            ac31a9_a898c39aaeef4952b11244b76f2d63b8~mv2.jpg
A3 Çizgiler         ac31a9_42dee43ed329416da8627bf56c35b6a4~mv2.jpg
A4 Hasır            ac31a9_e53d924ea48c4e03be6cf5aaeb32aa0d~mv2.jpg
A5 Rüzgar           ac31a9_3f3baa4ef3b8465e811e3b5a3996a3b2~mv2.jpg
A6 Yağmur           ac31a9_9c5765dd644f44fb883c3b379b436bf1~mv2.jpg
A7 Cam Kırığı       ac31a9_c6df5e13106d4000a92d335870f3a5f6~mv2.jpg
A8 Çubuklar         ac31a9_f316531376f34999b7ec10c897c22add~mv2.jpg
A9 Boncuklar        ac31a9_4cb1389dd69141bb8d5682e2710e9cd7~mv2.jpg
B0 Çizgi Gökkuşağı  ac31a9_e4431d0be7314dd986f6f521d81526f8~mv2.jpg
B1 Yapboz           ac31a9_abeb78393f684168b99f0a76541c4240~mv2.jpg
B2 Balon            ac31a9_71393af5950d4233acf6cceaf4d6e33c~mv2.jpg
B3 Kar Tanesi       ac31a9_a129c53aab304821b1719d5159b499d3~mv2.jpg
B5 Atom             ac31a9_cfca44bbb00c4dea912d8e58b984bdde~mv2.jpg
B6 Kum Desen        ac31a9_ed37cf4f1ca441f6958b217c6c7d8075~mv2.jpg
B7 Işık             ac31a9_415b5745c332476e95336f59b8426f0d~mv2.jpg
```

- [x] Verify all 17 files exist and are non-empty.

### Task 2: Render the local Polimagic gallery

**Files:**
- Modify: `src/pages/urunler/polimagic.astro:1-55`
- Modify: `src/pages/urunler/polimagic.astro:110-143`

- [x] Add a `hologramPatterns` array containing the 17 Turkish labels and local `/images/products/polimagic/<file>` paths.
- [x] Render each pattern in the existing “Hologram Desenleri” card using a semantic figure with an image and caption.
- [x] Add a CSS grid with responsive columns, fixed thumbnail aspect ratio, `object-fit: cover`, and captions matching the existing site typography.
- [x] Keep the grid inside the existing variant card and retain the current explanatory text.

### Task 3: Verify the migrated page

**Files:**
- Verify: `dist/urunler/polimagic/index.html`

- [x] Run `pnpm build` and confirm all pages build successfully.
- [x] Check that `/urunler/polimagic` returns HTTP 200.
- [x] Check that all 17 local image URLs return HTTP 200.
- [x] Confirm the generated page contains all 17 pattern captions and no `static.wixstatic.com` references.
