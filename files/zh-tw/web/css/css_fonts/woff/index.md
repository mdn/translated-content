---
title: 網路開放字型格式 (WOFF)
slug: Web/CSS/CSS_fonts/WOFF
---

**WOFF**（**網頁開放字型格式**）是由 Mozilla、Type Supply、LettError 和其它組織協力開發的全新網路字型格式。它使用了同為表格結構的 `sfnt` 壓縮版，廣泛用於 TrueType、OpenType 和開放字型格式，另外加入了中繼資料和私有資料結構，其中包含事先定義的欄位，讓有意願的廠商和製造商提供授權資訊。

使用 WOFF 主要有以下三項好處：

1. 字型資料經過壓縮，因此使用 WOFF 的網站流量降低，載入速度也會比未壓縮的 TrueType 或 OpenType 檔更快。
2. 許多不願授權的字型商都可以授權 WOFF 格式的字型，網站設計師有更多的字型可以選擇。
3. 專有軟體和自由軟體商都喜歡 WOFF 格式，因此在網路世界上，可以成為真正通用和可交換的字型格式，有別於目前其它字型格式。

## 使用 WOFF

你可透過 {{cssxref("@font-face")}} CSS 屬性在網頁內的文字使用 WOFF 字型。它的運作方式和 OpenType 以及 TrueType 字型並無二異，但在下載內容時可能會更有效率，這完全歸功於其與生俱來的壓縮特性。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{cssxref("@font-face")}}
