---
title: CSS @ 规则
short-title: "@ 规则"
slug: Web/CSS/Reference/At-rules
l10n:
  sourceCommit: 3ee2355c3c90cf92c3119b82f8ebfa5d16c91c53
---

**@ 规则**是用于指示 CSS 如何运作的 [CSS 语句](/zh-CN/docs/Web/CSS/Guides/Syntax/Introduction#css_语句)。它们用于对样式规则和其他 @ 规则进行分组和结构化，声明与所选内容无直接关联的样式信息，以及管理语法结构（如导入和命名空间关键字映射）。它们以“@”符号（`@`，U+0040 COMMERCIAL AT）开头，后跟一个标识符。

## @ 规则和 @ 规则描述符索引

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
- {{cssxref("@custom-media")}}
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
- {{cssxref("@media")}}（参见下一节[媒体特性列表](#媒体特性索引)）
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

## 媒体特性索引

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

## 规范

{{Specifications}}

## 参见

- [CSS @ 规则函数](/zh-CN/docs/Web/CSS/Reference/At-rules/At-rule_functions)
- [嵌套 @ 规则](/zh-CN/docs/Web/CSS/Guides/Nesting/At-rules)
- [CSS 语法](/zh-CN/docs/Web/CSS/Guides/Syntax)模块
- [CSS 条件语法](/zh-CN/docs/Web/CSS/Guides/Conditional_rules)模块
