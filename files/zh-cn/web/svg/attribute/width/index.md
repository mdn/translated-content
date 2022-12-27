---
title: width
slug: Web/SVG/Attribute/width
---

« [SVG 属性参考主页](/zh-CN/SVG/Attribute)

该属性在用户坐标系统中标识了一个水平长度。该坐标的确切效果依赖于每个元素。大多数时候，它体现引用元素的矩形区域的宽度（请阅读每个元素的文档以了解例外情况）。

除了`<svg>`元素之外，别的元素都必须指定该属性，`<svg>`的宽度默认是**100%**，而`<filter>`元素以及`<mask>`元素的默认宽度是**120%**。

## 用法

| 类别   | 无                                      |
| ------ | --------------------------------------- |
| 值     | [\<length>](/zh-CN/SVG/Content_type#Length) |
| 可变性 | Yes                                     |

{{ page("/zh-CN/docs/Web/SVG/Content_type","长度") }}

## 元素

下列元素可以使用`width`属性：

- [滤镜元素](/zh-CN/SVG/Element#FilterPrimitive) »
- {{ SVGElement("filter") }}
- {{ SVGElement("foreignObject") }}
- {{ SVGElement("image") }}
- {{ SVGElement("pattern") }}
- {{ SVGElement("rect") }}
- {{ SVGElement("svg") }}
- {{ SVGElement("use") }}
- {{ SVGElement("mask") }}

## 规范

{{Specifications}}
