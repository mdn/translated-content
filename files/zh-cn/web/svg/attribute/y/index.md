---
title: 'y'
slug: Web/SVG/Attribute/y
---

« [SVG 属性参考主页](/zh-CN/SVG/Attribute)

该属性在用户坐标系统中标识了一个 y 轴坐标。本坐标的确切效果依赖于每个元素。大多数时候，它体现了引用元素的矩形区域的左上角的 y 轴坐标（请阅读每个元素的文档以了解例外情况）。

如果没有指定这个属性，效果相当于值被设置为**0**，除了[`<filter>`](/zh-CN/docs/Web/SVG/Element/filter)元素以及[`<mask>`](/zh-CN/docs/Web/SVG/Element/mask)元素；这两个元素的`y`默认值为**-10%**。

## 用法

| 类别   | 无                                              |
| ------ | ----------------------------------------------- |
| 值     | [\<coordinate>](/zh-CN/SVG/Content_type#Coordinate) |
| 可变性 | Yes                                             |

{{ page("/en/SVG/Content_type","coordinate") }}

## 元素

下列元素可以使用`y`属性：

- [滤镜元素](/zh-CN/SVG/Element#FilterPrimitive) »
- {{ SVGElement("altGlyph") }}
- {{ SVGElement("fePointLight") }}
- {{ SVGElement("feSpotLight") }}
- {{ SVGElement("filter") }}
- {{ SVGElement("foreignObject") }}
- {{ SVGElement("glyphRef") }}
- {{ SVGElement("image") }}
- {{ SVGElement("pattern") }}
- {{ SVGElement("rect") }}
- {{ SVGElement("svg") }}
- {{ SVGElement("text") }}
- {{ SVGElement("use") }}
- {{ SVGElement("mask") }}
- {{ SVGElement("tref") }}
- {{ SVGElement("tspan") }}

## 规范

{{Specifications}}
