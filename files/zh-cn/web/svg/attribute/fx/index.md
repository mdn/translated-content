---
title: fx
slug: Web/SVG/Attribute/fx
---

{{SVGRef}}

对于 {{ SVGElement("radialGradient") }} 元素，此属性用来定义径向渐变的焦点的 x 轴坐标。如果该属性没有被定义，就假定它与中心点是同一位置。

## 用法

| 类别     | 无                                                                                                                           |
| -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 值       | [\<coordinate>](/zh-CN/SVG/Content_type#Coordinate)                                                                          |
| 可变性   | 非                                                                                                                           |
| 规范文档 | [SVG 1.1 (2nd Edition): The radialGradient element](http://www.w3.org/TR/SVG/pservers.html#RadialGradientElementCXAttribute) |

## 示例

```html
<?xml version="1.0" standalone="no"?>

<svg width="120" height="120" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="Gradient" cx="0.5" cy="0.5" r="0.5" fx="0.25" fy="0.25">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
  </defs>

  <rect
    x="10"
    y="10"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#Gradient)"
    stroke="black"
    stroke-width="2" />

  <circle
    cx="60"
    cy="60"
    r="50"
    fill="transparent"
    stroke="white"
    stroke-width="2" />
  <circle cx="35" cy="35" r="2" fill="white" stroke="white" />
  <circle cx="60" cy="60" r="2" fill="white" stroke="white" />
  <text x="38" y="40" fill="white" font-family="sans-serif" font-size="10pt">
    (fx,fy)
  </text>
  <text x="63" y="63" fill="white" font-family="sans-serif" font-size="10pt">
    (cx,cy)
  </text>
</svg>
```

## 元素

下列元素可以使用 `fx` 属性：

- {{ SVGElement("radialGradient") }}

## 规范

{{Specifications}}
