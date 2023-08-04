---
title: radius
slug: Web/SVG/Attribute/radius
---

{{SVGRef}}

`radius` 属性代表了一个给定 {{SVGElement("feMorphology")}} 滤镜上的操作。如果提供了两个 [\<number>](/zh-CN/SVG/Content_type#Number)，则第一个数代表了 x-radius，第二个数代表了 y-radius。如果只提供了一个数字，则值同时用于 x 和 y。值是在 {{SVGElement("filter")}} 元素的属性 {{SVGAttr("primitiveUnits")}} 确定的坐标系统内。

如果没有指定该属性值，效果等同于指定了一个 **0** 值。

## 用法

| 类别   | _无_                                                                        |
| ------ | --------------------------------------------------------------------------- |
| 值     | [\<number-optional-number>](/zh-CN/SVG/Content_type#Number-optional-number) |
| 可变性 | Yes                                                                         |

## 示例

## 元素

以下元素可以使用`radius`属性：

- {{ SVGElement("feMorphology") }}

## 规范

{{Specifications}}
