---
title: stroke-dasharray
slug: Web/SVG/Attribute/stroke-dasharray
---

{{SVGRef}}

属性 `stroke-dasharray` 可控制用来描边的点划线的图案范式。

作为一个外观属性，它也可以直接用作一个 CSS 样式表内部的属性。

## 用法

| 类别   | 外观属性                            |
| ------ | ----------------------------------- |
| 值     | **none** \| \<dasharray> \| inherit |
| 可变性 | Yes                                 |

- \<dasharray>
  - : 它是一个[\<length>](/zh-CN/SVG/Content_type#Length)和[\<percentage>](/zh-CN/SVG/Content_type#Percentage)数列，数与数之间用逗号或者空白隔开，指定短划线和缺口的长度。如果提供了奇数个值，则这个值的数列重复一次，从而变成偶数个值。因此，**5,3,2**等同于**5,3,2,5,3,2**。

## 示例

```html
<?xml version="1.0"?>
<svg
  width="200"
  height="200"
  viewPort="0 0 200 300"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  <line stroke-dasharray="5, 5" x1="10" y1="10" x2="190" y2="10" />
  <line stroke-dasharray="5, 10" x1="10" y1="30" x2="190" y2="30" />
  <line stroke-dasharray="10, 5" x1="10" y1="50" x2="190" y2="50" />
  <line stroke-dasharray="5, 1" x1="10" y1="70" x2="190" y2="70" />
  <line stroke-dasharray="1, 5" x1="10" y1="90" x2="190" y2="90" />
  <line stroke-dasharray="0.9" x1="10" y1="110" x2="190" y2="110" />
  <line stroke-dasharray="15, 10, 5" x1="10" y1="130" x2="190" y2="130" />
  <line stroke-dasharray="15, 10, 5, 10" x1="10" y1="150" x2="190" y2="150" />
  <line
    stroke-dasharray="15, 10, 5, 10, 15"
    x1="10"
    y1="170"
    x2="190"
    y2="170" />
  <line stroke-dasharray="5, 5, 1, 5" x1="10" y1="190" x2="190" y2="190" />

  <style>
    <![CDATA[
    line{
        stroke: black;
        stroke-width: 2;
    }
    ]]>
  </style>
</svg>
```

**示例输出**

{{ EmbedLiveSample('示例','220','220') }}

## 元素

下列元素可以使用`stroke-dasharray 属性：`

- [形状元素](/zh-CN/SVG/Element#Shape_elements) »
- [文本内容元素](/zh-CN/SVG/Element#Text_content_elements) »

## 规范

{{Specifications}}
