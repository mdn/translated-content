---
title: CSS 色
slug: Web/CSS/Guides/Colors
original_slug: Web/CSS/CSS_colors
l10n:
  sourceCommit: 729754108952e0bac9fb6268fcdf24a63b3cbbf3
---

**CSS 色** (colors) モジュールは、色、色の種類、色の混合、透過性、そしてどのようにこれらの色や効果を HTML コンテンツに適用するかを扱います。

このモジュールが持つ CSS プロパティは {{cssxref("color")}} と {{cssxref("opacity")}} の 2 つだけですが、20 以上の CSS と SVG プロパティ、CSS 画像、アットルール、@media ルールはこの 2 つのプロパティに依存しています。

### 色の実際

下記の色構文コンバーターは、現在選択されている色の値を [赤緑青](/ja/docs/Web/CSS/Reference/Values/color_value/rgb) (RGB), [16 進数](/ja/docs/Web/CSS/Reference/Values/hex-color) (HEX), [色相・彩度・明度](/ja/docs/Web/CSS/Reference/Values/color_value/hsl) (HSL), and [色相・白色度・黒色度](/ja/docs/Web/CSS/Reference/Values/color_value/hwb) (HWB) の CSS 色形式で表示します。ここでの RGB、HEX、HSL、HWB の色値はすべて、書き方は異なりますが、同じ色値を表します。

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

[カラーピッカー](/ja/docs/Web/HTML/Reference/Elements/input/color)で色を選択し、[スライダー](/ja/docs/Web/HTML/Reference/Elements/input/range)で不透明度を選択すると、RGB、HEX、HSL、HWB 値が更新されます。新しい色や不透明度の値を選ぶと、背景とスライダーの色はそれぞれ CSS プロパティの {{cssxref("background-color")}} と {{cssxref("accent-color")}} によって更新されます。

この色構文コンバーターのコードを見るには、 [GitHub でソースをご覧ください](https://github.com/mdn/css-examples/blob/main/modules/colors.html)。

## リファレンス

### プロパティ

- {{cssxref("color")}}
- {{cssxref("opacity")}}

### アットルールと記述子

- {{cssxref("@color-profile")}}
  - [`components`](/ja/docs/Web/CSS/Reference/At-rules/@color-profile#記述子) 記述子
  - [`rendering-intent`](/ja/docs/Web/CSS/Reference/At-rules/@color-profile#記述子) 記述子
  - [`src`](/ja/docs/Web/CSS/Reference/At-rules/@color-profile#記述子) 記述子

### 関数

- 色関数:
  - [`rgb()`](/ja/docs/Web/CSS/Reference/Values/color_value/rgb)
  - [`hsl()`](/ja/docs/Web/CSS/Reference/Values/color_value/hsl)
  - [`hwb()`](/ja/docs/Web/CSS/Reference/Values/color_value/hwb)
  - [`lab()`](/ja/docs/Web/CSS/Reference/Values/color_value/lab)
  - [`lch()`](/ja/docs/Web/CSS/Reference/Values/color_value/lch)
  - [`oklab()`](/ja/docs/Web/CSS/Reference/Values/color_value/oklab)
  - [`oklch()`](/ja/docs/Web/CSS/Reference/Values/color_value/oklch)
  - [`color()`](/ja/docs/Web/CSS/Reference/Values/color_value/color)
- [`color-contrast()`](/ja/docs/Web/CSS/Reference/Values/color_value) {{experimental_inline}}
- [`color-mix()`](/ja/docs/Web/CSS/Reference/Values/color_value/color-mix)
- [`device-cmyk()`](/ja/docs/Web/CSS/Reference/Values/color_value/device-cmyk)
- {{CSSXref("color_value/light-dark", "light-dark()")}}

### データ型

- {{cssxref("&lt;color&gt;")}}
- [`<color-function>`](#関数)
- {{cssxref("hex-color")}}
- {{cssxref("named-color")}}
- {{cssxref("alpha-value")}}
- {{cssxref("hue")}}
- {{cssxref("system-color")}}
- [`<colorspace-params>`](/ja/docs/Web/CSS/Reference/Values/color_value/color#using_predefined_color_spaces_with_color)

### 用語集の用語とキーワード

- {{glossary("color space", "色空間")}}
- [`currentcolor`](/ja/docs/Web/CSS/Reference/Values/color_value#currentcolor_キーワード)
- {{glossary("interpolation")}}
- {{glossary("RGB")}}
- [`transparent`](/ja/docs/Web/CSS/Reference/Values/named-color#transparent)

### インターフェイス

- `CSSColorProfileRule`

## ガイド

- [CSS を使った HTML 要素への色の適用](/ja/docs/Web/CSS/Guides/Colors/Applying_color)
  - : 様々な種類のコンテンツに CSS を使って色を適用するためのガイドです。色に関するすべての CSS プロパティが関係します。
- [CSS 色値](/ja/docs/Web/CSS/CSS_colors/Color_values)
  - : 色空間と CSS で利用できるさまざまな `<color>` 関数記法の概要です。
- [賢い色の使用](/ja/docs/Web/CSS/CSS_colors/Using_color_wisely)
  - : 色彩理論とリソース、例えばアクセシブルなカラーパレットを作成するために正しい色を探すこと、コントラスト、カラーで出力される印刷などです。
- [相対色の使用](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors)
  - : この記事では、 CSS の相対色の構文について説明し、さまざまなオプションが何であるかを示し、いくつかの例を見ていきます。
- [色と明るさの理解](/ja/docs/Web/Accessibility/Guides/Colors_and_Luminance)
  - : 色覚障碍（色盲）ユーザー、弱視ユーザー、前庭障碍やその他の神経障碍を持つユーザーを念頭に置いた色知覚と使用することです。
- [WCAG 1.4.1: 色コントラスト](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
  - : 読みやすさを保証するために要求されるコンテンツの背景と前景のコントラストの説明です。

## 関連概念

- 他の仕様の一部である CSS プロパティ:
  - {{cssxref("accent-color")}}
  - {{cssxref("background-color")}}
  - {{cssxref("background-image")}}
  - {{cssxref("border-color")}}
  - {{cssxref("box-shadow")}}
  - {{cssxref("caret-color")}}
  - {{cssxref("color")}}
  - {{cssxref("color-scheme")}}
  - {{cssxref("column-rule-color")}}
  - {{cssxref("outline-color")}}
  - {{cssxref("scrollbar-color")}}
  - {{cssxref("text-decoration-color")}}
  - {{cssxref("text-emphasis-color")}}
  - {{cssxref("text-shadow")}}
  - {{cssxref("-webkit-tap-highlight-color")}}
- 他の仕様の一部である SVG 色プロパティ:
  - [`fill`](/ja/docs/Web/SVG/Reference/Attribute/fill)
  - [`flood-color`](/ja/docs/Web/SVG/Attribute/flood-color)
  - [`lighting-color`](/ja/docs/Web/SVG/Attribute/lighting-color)
  - [`stop-color`](/ja/docs/Web/SVG/Reference/Attribute/stop-color)
  - [`stroke`](/ja/docs/Web/SVG/Reference/Attribute/stroke)
- SVG [`color`](/ja/docs/Web/SVG/Reference/Attribute/color) 属性
  - [`fill`](/ja/docs/Web/SVG/Reference/Attribute/fill)
  - [`flood-color`](/ja/docs/Web/SVG/Reference/Attribute/flood-color)
  - [`lighting-color`](/ja/docs/Web/SVG/Reference/Attribute/lighting-color)
  - [`stop-color`](/ja/docs/Web/SVG/Reference/Attribute/stop-color)
  - [`stroke`](/ja/docs/Web/SVG/Reference/Attribute/stroke)
- SVG [`color`](/ja/docs/Web/SVG/Reference/Attribute/color) 属性
- {{glossary("Color wheel", "色相環")}}（用語）
- {{glossary("Interpolation", "補間")}}（用語）
- [`@font-palette-values`](/ja/docs/Web/CSS/Reference/At-rules/@font-palette-values) アットルールの [`override-colors`](/ja/docs/Web/CSS/Reference/At-rules/@font-palette-values/override-colors) 記述子
- [`@color-profile`](/ja/docs/Web/CSS/Reference/At-rules/@color-profile) アットルール
- @media の [`color-gamut`](/ja/docs/Web/CSS/Reference/At-rules/@media/color-gamut) 特性
- @media の [`forced-colors`](/ja/docs/Web/CSS/Reference/At-rules/@media/forced-colors) 特性

## 仕様書

{{Specifications}}

## 関連情報

- [CSS 色調整](/ja/docs/Web/CSS/Guides/Color_adjustment)モジュールと {{cssxref("print-color-adjust")}} プロパティ
- [CSS 画像](/ja/docs/Web/CSS/Guides/Images)モジュール（CSS [`<gradient>`](/ja/docs/Web/CSS/Reference/Values/gradient) 画像を定義）
- [`VideoColorSpace`](/ja/docs/Web/API/VideoColorSpace) インターフェイス
- SVG の [`<feColorMatrix>`](/ja/docs/Web/SVG/Reference/Element/feColorMatrix) 要素
- [キャンバス API: スタイルと色の適用](/ja/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#色)
