---
title: ":left"
slug: Web/CSS/:left
---

{{CSSRef}}

**`:left`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes), 需要和[@规则](/zh-CN/docs/Web/CSS/At-rule) {{cssxref("@page")}} 配套使用，对打印文档的左侧页设置 CSS 样式。

```css
/* 设置打印时的左侧文档样式 */
@page :left {
  margin: 2in 3in;
}
```

打印文档的"左"或"右"是由书写方向相关的。举个栗子，"从左到右"的书写方向中第一页应当使用 {{Cssxref(":right")}} 配置; "从右至左"的书写方向中第一页应当使用 `:left` 配置。

> **备注：** 并不是所有样式属性都能应用在此选择器内。仅仅 {{ Cssxref("margin") }}, {{ Cssxref("padding") }}, {{ Cssxref("border") }}, 和 {{ Cssxref("background") }} 等打印时需要的属性可以使用。其他属性将直接忽略，并且可以使用的属性也只会在打印时生效，显示时不会生效。

## 参数

{{csssyntax}}

## 样例

```css
@page :left {
  margin: 2in 3in;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ Cssxref("@page") }}
- Other page-related pseudo-classes: {{ Cssxref(":first") }}, {{ Cssxref(":right") }}
