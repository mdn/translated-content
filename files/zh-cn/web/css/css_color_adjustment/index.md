---
title: CSS 颜色调整
slug: Web/CSS/CSS_color_adjustment
l10n:
  sourceCommit: 8d03307af2cee96a307c22b5d52b93f155f11524
---

{{CSSRef}}

**CSS 颜色调整**（CSS color adjustment）模块提供了一种机制，允许用户代理根据用户偏好（例如“暗黑模式”、对比度调整和其他配色方案）自动进行颜色调整。

该模块与 {{CSSxRef("@media")}} 媒体查询特性 {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}、{{cssxref("@media/prefers-contrast", "prefers-contrast")}} 和 {{cssxref("@media/forced-colors", "forced-colors")}} 一起，定义了浏览器自动调整颜色的方式和时机。

## 参考

### 属性

- {{cssxref("color-scheme")}}
- {{cssxref("forced-color-adjust")}}
- {{cssxref("print-color-adjust")}}

## 相关概念

- {{cssxref("&lt;color&gt;")}} CSS 数据类型
- 相关的 {{CSSxRef("@media")}} 特性：
  - {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - {{cssxref("@media/forced-colors", "forced-colors")}}
- 受强制颜色模式影响的属性
  - {{cssxref("accent-color")}}
  - {{cssxref("background-color")}}
  - {{cssxref("background-image")}}
  - {{cssxref("border-color")}}
  - {{cssxref("box-shadow")}}
  - {{cssxref("caret-color")}}
  - {{cssxref("color")}}
  - {{cssxref("color-scheme")}}
  - {{cssxref("column-rule-color")}}
  - [`fill`](/zh-CN/docs/Web/SVG/Attribute/fill)
  - [`flood-color`](/zh-CN/docs/Web/SVG/Attribute/flood-color)
  - [`lighting-color`](/zh-CN/docs/Web/SVG/Attribute/lighting-color)
  - {{cssxref("outline-color")}}
  - {{cssxref("scrollbar-color")}}
  - [`stop-color`](/zh-CN/docs/Web/SVG/Attribute/stop-color)
  - [`stroke`](/zh-CN/docs/Web/SVG/Attribute/stroke)
  - {{cssxref("text-decoration-color")}}
  - {{cssxref("text-emphasis-color")}}
  - {{cssxref("text-shadow")}}
  - {{cssxref("-webkit-tap-highlight-color")}}

## 规范

{{Specifications}}

## 参见

- [CSS 颜色](/zh-CN/docs/Web/CSS/CSS_colors)模块
