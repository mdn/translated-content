---
title: color-contrast()
slug: Web/CSS/color_value/color-contrast
---

{{CSSRef}}{{SeeCompatTable}}

**`color-contrast()`** 函数标记接收一个 {{cssxref("color_value","color")}} 值，并将其与其他的 {{cssxref("color_value","color")}} 值比较，从列表中选择最高对比度的颜色。

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
