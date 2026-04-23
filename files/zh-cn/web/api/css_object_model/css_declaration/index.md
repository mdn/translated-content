---
title: CSS 声明
slug: Web/API/CSS_Object_Model/CSS_Declaration
l10n:
  sourceCommit: b07efa13f8459a44a2cbc7b6cdb3279967565e63
---

{{DefaultAPISidebar("CSSOM")}}

**CSS 声明**是一个抽象概念，在 DOM 中并未作为对象暴露。它表示一对 CSS 属性和值。

CSS 声明具有以下相关属性：

- 属性名称
  - : 声明的属性名称，例如 {{cssxref("background-color")}}。
- 值
  - : 声明的值，表示为组件值的列表。
- important 标志
  - : 设置或未设置状态。
- 区分大小写标志
  - : 如果属性名称根据规范定义为区分大小写，则为设置状态；否则为未设置状态。

## 基本示例

以下示例展示了一个针对 {{htmlelement("Heading_Elements","&lt;h1&gt;")}} 元素的 CSS 规则，其中包含一个 [CSS 声明块](/zh-CN/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block)。CSS 声明块位于大括号之间，包含两个 CSS 声明：一个用于 {{cssxref("font-style")}}，另一个用于 {{cssxref("color")}}。

```css
h1 {
  font-style: italic;
  color: rebeccapurple;
}
```

## 规范

{{Specifications}}
