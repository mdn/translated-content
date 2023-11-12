---
title: dur
slug: Web/SVG/Attribute/dur
---

{{SVGRef}}

该属性标识了动画的简单持续时间。

## 用法

| 类别     | 动画定时属性                                                                |
| -------- | --------------------------------------------------------------------------- |
| 值       | [\<clock-value>](/zh-CN/SVG/Content_type#Clock-value) \| **indefinite**     |
| 可变性   | No                                                                          |
| 规范文档 | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG/animate.html#DurAttribute) |

- [\<clock-value>](/zh-CN/SVG/Content_type#Clock-value)
  - : 指定简单持续时间的时长。值必须大于 0。可以用小时（h）、分钟（m）、秒（s）、毫秒（ms）表达这个值。可以组合这些时间表达式以提供一个复合的持续时间，比如这样：`hh:mm:ss.iii`或者这样：`mm:ss.iii`。

如果一个动画元素不带有`dur`属性，简单持续时间就是无限期的。请注意：如果一个简单持续时间是无限期的，则插值不能起作用（虽然它对 {{ SVGElement("set") }} 元素依然是有用的）。

## 示例

## 元素

下列元素可以使用`dur`属性：

- [动画元素](/zh-CN/SVG/Element#Animation) »

## 规范

{{Specifications}}
