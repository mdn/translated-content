---
title: color-contrast()
slug: Web/CSS/color_value/color-contrast
l10n:
  sourceCommit: 8a22e494736dbe7cc8ba38127a0d928b9fe8e700
---

{{CSSRef}}{{SeeCompatTable}}

**`color-contrast()`** 函数标记接收 {{cssxref("color_value","color")}} 值，并将其与其他的 {{cssxref("color_value","color")}} 值比较，从列表中选择最高对比度的颜色。

## 语法

```css
color-contrast(wheat vs tan, sienna, #d2691e)
color-contrast(#008080 vs olive, var(--myColor), #d2691e)
```

### 值

函数标记：`color-contrast(color vs color-list)`

- `color`

  - : 任何有效的 {{CSSXref("&lt;color&gt;")}} 值。

- `vs`

  - : 字面保留字，作为语法的一部分。

- `color-list`

  - : 由逗号分隔的列表，至少两个值，以与第一个值进行比较。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("color_value", "&lt;color>")}} 数据类型
- [CSS 颜色](/zh-CN/docs/Web/CSS/CSS_colors)模块
- [`prefers-contrast`](/zh-CN/docs/Web/CSS/@media/prefers-contrast) 和 [`prefers-color-scheme`](/zh-CN/docs/Web/CSS/@media/prefers-color-scheme) {{cssxref("@media")}} 特性
- [`contrast()`](/zh-CN/docs/Web/CSS/filter-function/contrast)
- [WCAG：色彩对比](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS 自定义属性](/zh-CN/docs/Web/CSS/--*)和 {{cssxref("var")}}
