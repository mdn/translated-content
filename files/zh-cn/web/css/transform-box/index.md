---
title: transform-box
slug: Web/CSS/transform-box
---

{{CSSRef}}

## 概述

**`transform-box`** 属性定义了与 {{cssxref("transform")}}、{{cssxref("transform-origin")}} 这两个属性有关联的布局框。

## 语法

```css
/* Keyword values */
transform-box: border-box;
transform-box: fill-box;
transform-box: view-box;

/* Global values */
transform-box: inherit;
transform-box: initial;
transform-box: unset;
```

`transform-box`属性被指定为以下所列出的关键字值之一。

### 值

- `border-box`
  - : border box 是用作引用框，一个表格（table）的 border-box 是 table 包装盒的边框，而不是表的边框。
- `fill-box`
  - : Uses the object bounding box as reference box.
- `view-box`
  - : Uses the nearest {{Glossary("SVG")}} viewport as reference box. If a {{SVGAttr("viewBox")}} attribute is specified for the SVG viewport creating element, the reference box is positioned at the origin of the coordinate system established by the `viewBox` attribute and the dimension of the reference box is set to the width and height values of the `viewBox` attribute.

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 变换](/zh-CN/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
