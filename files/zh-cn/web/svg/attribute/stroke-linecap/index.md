---
title: stroke-linecap
slug: Web/SVG/Attribute/stroke-linecap
---

{{SVGRef}}

`stroke-linecap` 属性制定了，在开放子路径被设置描边的情况下，用于开放自路径两端的形状。

作为一个展现属性，它也可以在一个 CSS 样式表内部，作为一个属性直接使用。

## 使用背景

| 分类     | 展现属性                           |
| -------- | ---------------------------------- |
| 属性值   | butt \| round \| square \| inherit |
| 可动画化 | 是                                 |

## Example

```html
<?xml version="1.0"?>
<svg
  width="120"
  height="120"
  viewPort="0 0 120 120"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  <line
    stroke-linecap="butt"
    x1="30"
    y1="30"
    x2="30"
    y2="90"
    stroke="black"
    stroke-width="20" />

  <line
    stroke-linecap="round"
    x1="60"
    y1="30"
    x2="60"
    y2="90"
    stroke="black"
    stroke-width="20" />

  <line
    stroke-linecap="square"
    x1="90"
    y1="30"
    x2="90"
    y2="90"
    stroke="black"
    stroke-width="20" />

  <path d="M30,30 L30,90 M60,30 L60,90 M90,30 L90,90" stroke="white" />
</svg>
```

**实时样例**

{{ EmbedLiveSample('Example','120','120') }}

## 元素

以下元素可以使用`stroke-linecap` 属性

- [图形元素](/zh-CN/docs/Web/SVG/Element#Shape) »
- [文本内容元素](/zh-CN/docs/Web/SVG/Element#TextContent) »

## 规范

{{Specifications}}
