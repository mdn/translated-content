---
title: CSS 字型
slug: Web/CSS/CSS_fonts
---

{{CSSRef}}

**CSS 字型**模組定義了與字型相關的屬性以及字體資源的載入方式。它允許你定義字型的樣式，例如其字族、大小和粗細，以及當多個字形可用於單一字元時要使用的字形變體。

字型是一種資源檔案，其內容包含字元的視覺表示，以及將字元代碼映射到代表字母、數字、標點符號甚至表情符號的字形。字型家族是一組共享相同設計風格和字型屬性的字型組，每個成員提供不同的字形顯示方式，這些方式可能在筆劃粗細、傾斜度或相對寬度等屬性上有所不同。字型通常代表某種樣式的字體，例如為粗斜體的 Helvetica。字型家族則是所有樣式的完整集合。在文件或設計中包含此類字型，是透過為每個字型資源定義一個單獨的 `@font-face` 宣告來實現的。

CSS 字型模組的屬性、@ 規則和描述符使得能夠下載多種變體的字型。它們還定義了用於特定字型特徵的字型檔案，並在資源加載失敗時提供後備指示。CSS 字型選擇機制描述了將一組給定的 CSS 字型屬性與單個字型面匹配的過程。

CSS 字型模組還支持可變字型。與常規字型不同的是，每種樣式都作為一個單獨的字型檔案實現，可變字型可以在單一檔案中包含所有樣式。通過使用單個 `@font-face` 宣告，可以導入包含所有樣式的可變字型。根據字型的不同，這可以包含多種字型變體。可變字型是 OpenType 字型規範的一部分。

## 參考

### 屬性

- {{cssxref("font")}} 簡寫
- {{cssxref("font-family")}}
- {{cssxref("font-feature-settings")}}
- {{cssxref("font-kerning")}}
- {{cssxref("font-language-override")}}
- {{cssxref("font-optical-sizing")}}
- {{cssxref("font-palette")}}
- {{cssxref("font-size")}}
- {{cssxref("font-size-adjust")}}
- {{cssxref("font-stretch")}}
- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}

- {{cssxref("font-synthesis")}} 簡寫
- {{cssxref("font-synthesis-small-caps")}}
- {{cssxref("font-synthesis-style")}}
- {{cssxref("font-synthesis-weight")}}

- {{cssxref("font-variant")}} 簡寫
- {{cssxref("font-variant-alternates")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-emoji")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-numeric")}}
- {{cssxref("font-variant-position")}}
- {{cssxref("font-variation-settings")}}

### @ 規則與描述符

- @ 規則：{{cssxref("@font-face")}}

  - : 描述符：
    - {{cssxref("@font-face/ascent-override", "ascent-override")}}
    - {{cssxref("@font-face/descent-override", "descent-override")}}
    - {{cssxref("@font-face/font-display", "font-display")}}
    - {{cssxref("@font-face/font-family", "font-family")}}
    - {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
    - {{cssxref("@font-face/font-stretch", "font-stretch")}}
    - {{cssxref("@font-face/font-style", "font-style")}}
    - {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
    - {{cssxref("@font-face/font-weight", "font-weight")}}
    - {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
    - {{cssxref("@font-face/size-adjust", "size-adjust")}}
    - {{cssxref("@font-face/src", "src")}}
    - {{cssxref("@font-face/unicode-range", "unicode-range")}}

- @ 規則：{{cssxref("@font-feature-values")}}

  - : 描述符：
    - {{cssxref("@font-feature-values/font-display", "font-display")}}

- @ 規則：{{cssxref("@font-palette-values")}}

  - : 描述符：
    - {{cssxref("@font-palette-values/base-palette", "base-palette")}}
    - {{cssxref("@font-palette-values/font-family", "font-family")}}
    - {{cssxref("@font-palette-values/override-colors", "override-colors")}}

### 資料類型

`font-size`：

- {{cssxref("absolute-size")}}
- {{cssxref("relative-size")}}

`font-family`：

- {{cssxref("generic-family")}}

`font-feature-settings`：

- [`<feature-tag-value>`](/zh-TW/docs/Web/CSS/font-feature-settings#值)

`font-format`：

- [`<font-format>`](/zh-TW/docs/Web/CSS/@supports#font-format)

`font-stretch`：

- [`<font-stretch-css3>`](/zh-TW/docs/Web/CSS/font-stretch#值)

`font-tech`：

- [`<color-font-tech>`](/zh-TW/docs/Web/CSS/@supports#font-tech)
- [`<font-features-tech>`](/zh-TW/docs/Web/CSS/@supports#font-tech)
- [`<font-tech>`](/zh-TW/docs/Web/CSS/@supports#font-tech)

`font-variant`：

- [`<font-variant-css2>`](/zh-TW/docs/Web/CSS/font-variant)
- [`<east-asian-variant-values>`](/zh-TW/docs/Web/CSS/font-variant#值)
- [`<east-asian-width-values>`](/zh-TW/docs/Web/CSS/font-variant#值)

`font-variant-ligatures`：

- [`<common-lig-values>`](/zh-TW/docs/Web/CSS/font-variant-ligatures#值)
- [`<contextual-alt-values>`](/zh-TW/docs/Web/CSS/font-variant-ligatures#值)
- [`<discretionary-lig-values>`](/zh-TW/docs/Web/CSS/font-variant-ligatures#值)
- [`<historical-lig-values>`](/zh-TW/docs/Web/CSS/font-variant-ligatures#值)

`font-variant-numeric`：

- [`<numeric-figure-values>`](/zh-TW/docs/Web/CSS/font-variant-numeric#值)
- [`<numeric-fraction-values>`](/zh-TW/docs/Web/CSS/font-variant-numeric#值)
- [`<numeric-spacing-values>`](/zh-TW/docs/Web/CSS/font-variant-numeric#值)

`font-weight`：

- [`<font-weight-absolute>`](/zh-TW/docs/Web/CSS/font-weight#值)

### 介面

- {{domxref("CSSFontFaceRule")}}
- {{domxref("CSSFontFeatureValuesRule")}}
- {{domxref("CSSFontPaletteValuesRule")}}

## 指南

- [文字和字型樣式基礎](/zh-TW/docs/Learn_web_development/Core/Text_styling/Fundamentals)

  - : 在這篇給初學者的文章中，我們詳細說明了文字和字型樣式的基礎知識，包括瞭解如何使用 {{cssxref("font")}} 簡寫來設定字型粗細、字族和樣式，以及如何對齊文字以及管理行和字母間距。

- [Web 字型](/zh-TW/docs/Learn_web_development/Core/Text_styling/Web_fonts)

  - : 在這篇給初學者的文章中，我們詳細介紹如何在網頁上使用自訂字型以實現更多樣化的自訂文字樣式。

- [OpenType 字型特性指南](/zh-TW/docs/Web/CSS/CSS_fonts/OpenType_fonts_guide)

  - : 字型功能或變體是指 OpenType 字型中包含的不同字形或字元樣式，其中包括連字（組合「fi」或「ffl」等字元的特殊字形）、字距調整（調整特定字母形式對之間的間距）、分數、數字樣式以及許多其他內容。 這些都稱為 OpenType 功能，並且可以透過特定屬性和低階控制屬性 {{cssxref("font-feature-settings")}} 在 Web 上使用。本文提供了有關在 CSS 中使用 OpenType 字型功能所需的所有資訊。

- [可變字型指南](/zh-TW/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)

  - : 本文將協助你開始使用可變字型。

- [提升字型效能](/zh-TW/docs/Learn_web_development/Extensions/Performance/CSS#improving_font_performance)

  - : 本文是 CSS 效能指南的一部分，討論字型載入、僅載入所需的字形以及使用 `font-display` 定義字型顯示行為。

## 相關概念

- {{cssxref("letter-spacing")}} CSS 屬性
- {{cssxref("line-height")}} CSS 屬性
- {{cssxref("text-transform")}} CSS 屬性

## 規範

{{Specifications}}

## 參見

- [CSS 字型載入](/zh-TW/docs/Web/CSS/CSS_font_loading)模組
- [CSS 字型載入 API](/zh-TW/docs/Web/API/CSS_Font_Loading_API)
- [CSS 文本](/zh-TW/docs/Web/CSS/CSS_text)模組
- [CSS 書寫模式](/zh-TW/docs/Web/CSS/CSS_writing_modes)模組
