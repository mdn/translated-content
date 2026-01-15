---
title: CSS アットルール
short-title: アットルール
slug: Web/CSS/Reference/At-rules
l10n:
  sourceCommit: 55ace19185180eaaec2faa470d044d7c2cea7cd7
---

**アットルール**は CSS がどのように動作するかを指示する [CSS 文](/ja/docs/Web/CSS/Guides/Syntax/Introduction#css_statements)です。これらは、スタイルルールやその他のアットルールをグループ化・構造化するため、選択されたコンテンツと直接関連しないスタイル情報を宣言するため、およびインポートや名前空間キーワードマッピングといった構文構造を管理するために使用されます。アット記号 `@` (U+0040 COMMERCIAL AT) で始まり、識別子が続きます。

## アットルールとアットルール記述子の索引

- {{cssxref("@charset")}}
- {{cssxref("@color-profile")}}
- {{cssxref("@container")}}
- {{cssxref("@counter-style")}}
  - {{cssxref("@counter-style/additive-symbols")}}
  - {{cssxref("@counter-style/fallback")}}
  - {{cssxref("@counter-style/negative")}}
  - {{cssxref("@counter-style/pad")}}
  - {{cssxref("@counter-style/prefix")}}
  - {{cssxref("@counter-style/range")}}
  - {{cssxref("@counter-style/speak-as")}}
  - {{cssxref("@counter-style/suffix")}}
  - {{cssxref("@counter-style/symbols")}}
  - {{cssxref("@counter-style/system")}}
- {{cssxref("@document")}} {{non-standard_inline}} {{deprecated_inline}}
- {{cssxref("@font-face")}}
  - {{cssxref("@font-face/ascent-override")}}
  - {{cssxref("@font-face/descent-override")}}
  - {{cssxref("@font-face/font-display")}}
  - {{cssxref("@font-face/font-family")}}
  - {{cssxref("@font-face/font-feature-settings")}}
  - {{cssxref("@font-face/font-stretch")}}
  - {{cssxref("@font-face/font-style")}}
  - {{cssxref("@font-face/font-variation-settings")}}
  - {{cssxref("@font-face/font-weight")}}
  - {{cssxref("@font-face/line-gap-override")}}
  - {{cssxref("@font-face/size-adjust")}}
  - {{cssxref("@font-face/src")}}
  - {{cssxref("@font-face/unicode-range")}}
- {{cssxref("@font-feature-values")}}
  - {{cssxref("@font-feature-values/font-display")}}
- {{cssxref("@font-palette-values")}}
  - {{cssxref("@font-palette-values/base-palette")}}
  - {{cssxref("@font-palette-values/font-family")}}
  - {{cssxref("@font-palette-values/override-colors")}}
- {{cssxref("@function")}} {{experimental_inline}}
- {{cssxref("@import")}}
- {{cssxref("@keyframes")}}
- {{cssxref("@layer")}}
- {{cssxref("@media")}} （次の節の[メディア特性の一覧](#メディア特性の索引)を参照）
- {{cssxref("@namespace")}}
- {{cssxref("@page")}}
  - {{cssxref("@page/page-orientation")}}
  - {{cssxref("@page/size")}}
- {{cssxref("@position-try")}}
- {{cssxref("@property")}}
  - {{cssxref("@property/inherits")}}
  - {{cssxref("@property/initial-value")}}
  - {{cssxref("@property/syntax")}}
- {{cssxref("@scope")}}
- {{cssxref("@starting-style")}}
- {{cssxref("@supports")}}
- {{cssxref("@view-transition")}}

## メディア特性の索引

- {{cssxref("@media/-moz-device-pixel-ratio")}}
- {{cssxref("@media/-webkit-animation")}}
- {{cssxref("@media/-webkit-device-pixel-ratio")}}
- {{cssxref("@media/-webkit-transform-2d")}}
- {{cssxref("@media/-webkit-transform-3d")}}
- {{cssxref("@media/-webkit-transition")}}
- {{cssxref("@media/any-hover")}}
- {{cssxref("@media/any-pointer")}}
- {{cssxref("@media/aspect-ratio")}}
- {{cssxref("@media/color")}}
- {{cssxref("@media/color-gamut")}}
- {{cssxref("@media/color-index")}}
- {{cssxref("@media/device-aspect-ratio")}}
- {{cssxref("@media/device-height")}}
- {{cssxref("@media/display-mode")}}
- {{cssxref("@media/dynamic-range")}}
- {{cssxref("@media/forced-colors")}}
- {{cssxref("@media/grid")}}
- {{cssxref("@media/height")}}
- {{cssxref("@media/horizontal-viewport-segments")}}
- {{cssxref("@media/hover")}}
- {{cssxref("@media/inverted-colors")}}
- {{cssxref("@media/monochrome")}}
- {{cssxref("@media/orientation")}}
- {{cssxref("@media/overflow-block")}}
- {{cssxref("@media/overflow-inline")}}
- {{cssxref("@media/pointer")}}
- {{cssxref("@media/prefers-color-scheme")}}
- {{cssxref("@media/prefers-contrast")}}
- {{cssxref("@media/prefers-reduced-data")}}
- {{cssxref("@media/prefers-reduced-motion")}}
- {{cssxref("@media/prefers-reduced-transparency")}}
- {{cssxref("@media/resolution")}}
- {{cssxref("@media/scan")}}
- {{cssxref("@media/scripting")}}
- {{cssxref("@media/shape")}}
- {{cssxref("@media/update")}}
- {{cssxref("@media/vertical-viewport-segments")}}
- {{cssxref("@media/video-dynamic-range")}}
- {{cssxref("@media/width")}}

## 仕様書

{{Specifications}}

## 関連情報

- [CSS アットルール関数](/ja/docs/Web/CSS/Reference/At-rules/At-rule_functions)
- [入れ子アットルール](/ja/docs/Web/CSS/Guides/Nesting/At-rules)
- [CSS 構文](/ja/docs/Web/CSS/Guides/Syntax)モジュール
- [CSS 条件付きルール](/ja/docs/Web/CSS/Guides/Conditional_rules)モジュール
