---
title: accumulate
slug: Web/SVG/Attribute/accumulate
---

« [SVG 属性参考主页](/zh-CN/SVG/Attribute)

该属性控制了动画是否是累加的。

在原来的结果的基础上重复动画的时候，它通常很有用，每一次循环都累加。这个属性告诉动画是否是每次循环，前一个动画属性值要加上去。

## 用法

| 类别     | 动画累加属性                                                                      |
| -------- | --------------------------------------------------------------------------------- |
| 值       | **none** \| sum                                                                   |
| 可变性   | No                                                                                |
| 规范文档 | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG/animate.html#AdditionAttributes) |

- sum
  - : 指定第一次循环后的每次循环建立在上次循环的终值上。
- none
  - : 指定重复循环是不累加的。这是默认值。

## 示例

## 元素

以下元素可以使用`additive`属性：

- {{ SVGElement("animate") }}
- {{ SVGElement("animateColor") }}
- {{ SVGElement("animateMotion") }}
- {{ SVGElement("animateTransform") }}

## 规范

{{Specifications}}
