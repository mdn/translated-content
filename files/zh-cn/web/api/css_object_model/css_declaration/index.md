---
title: CSS 声明
slug: Web/API/CSS_Object_Model/CSS_Declaration
l10n:
  sourceCommit: b07efa13f8459a44a2cbc7b6cdb3279967565e63
---

{{DefaultAPISidebar("CSSOM")}}

**CSS 声明**是一个抽象概念，并未在 DOM 中作为对象公开。它表示 CSS 属性和值的配对。

CSS 声明具有以下关联属性：

- 属性名称
  - : 声明的属性名称（如 {{cssxref("background-color")}}）。
- 值
  - : 声明的值，以组件值列表的形式表示。
- 重要标志
  - : 可设置或取消设置。
- 大小写敏感标志
  - : 如果根据规范定义该属性名称为大小写敏感，则设置；否则取消设置。

## 基本示例

以下示例显示了一个用于 {{htmlelement("Heading_Elements","&lt;h1&gt;")}} 元素的带有 [CSS 声明块](/zh-CN/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block)的 CSS 规则。在本示例中，CSS 声明块是花括号之间的行，其中包含两个 CSS 声明。一个用于 {{cssxref("font-style")}}，另一个用于 {{cssxref("color")}}。

```css
h1 {
  font-style: italic;
  color: rebeccapurple;
}
```

## 规范

{{Specifications}}
