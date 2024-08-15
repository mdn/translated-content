---
title: stroke-dashoffset
slug: Web/SVG/Attribute/stroke-dashoffset
---

{{SVGRef}}

`stroke-dashoffset` 属性定义了虚线与路径起点的偏移量。

> [!NOTE]
> 作为一个表现属性，`stroke-dashoffset` 可以用作 CSS 属性。

## 用法

| 类别   | 显示属性                                                                                                      |
| ------ | ------------------------------------------------------------------------------------------------------------- |
| 值     | [\<percentage>](/zh-CN/SVG/Content_type#Percentage) \| [\<length>](/zh-CN/SVG/Content_type#Length) \| inherit |
| 初始值 | 0                                                                                                             |
| 可动画化 | 是                                                                                                           |

偏移量的计算通常基于 {{SVGAttr('pathLength')}}，但如果使用 [\<percentage>](/zh-CN/docs/Web/SVG/Content_type#百分数) 值，那么将根据当前视口的百分比进行计算。

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-3 0 33 10" xmlns="http://www.w3.org/2000/svg">
  <!-- No dash array -->
  <line x1="0" y1="1" x2="30" y2="1" stroke="black" />

  <!-- No dash offset -->
  <line x1="0" y1="3" x2="30" y2="3" stroke="black" stroke-dasharray="3 1" />

  <!--
  The start of the dash array computation
  is pulled by 3 user units
  -->
  <line
    x1="0"
    y1="5"
    x2="30"
    y2="5"
    stroke="black"
    stroke-dasharray="3 1"
    stroke-dashoffset="3" />

  <!--
  The start of the dash array computation
  is pushed by 3 user units
  -->
  <line
    x1="0"
    y1="7"
    x2="30"
    y2="7"
    stroke="black"
    stroke-dasharray="3 1"
    stroke-dashoffset="-3" />

  <!--
  The start of the dash array computation
  is pulled by 1 user units which ends up
  in the same rendering as the previous example
  -->
  <line
    x1="0"
    y1="9"
    x2="30"
    y2="9"
    stroke="black"
    stroke-dasharray="3 1"
    stroke-dashoffset="1" />

  <!--
  the following red lines highlight the
  offset of the dash array for each line
  -->
  <path d="M0,5 h-3 M0,7 h3 M0,9 h-1" stroke="rgb(255 0 0 / 50%)" />
</svg>
```

{{EmbedLiveSample("示例", '100%', 200)}}

## 元素

以下元素可使用 stroke-dashoffset 属性

- [形状元素](/zh-CN/SVG/Element#形状元素) »
- [文本内容元素](/zh-CN/SVG/Element#文本内容元素) »

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
