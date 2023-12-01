---
title: fill
slug: Web/SVG/Attribute/fill
---

{{SVGRef}}

`fill` 属性根据它的使用环境，拥有两个意义。

默认地，当动画元素结束时，目标元素的外观属性不再应用该效果。在动画元素结束后，要还保持这个动画的的值，就需要用到`fill`属性。

对于形状元素和文本，`fill`属性是外观属性，用来定义给定图形元素内部的颜色。哪一块算是“内部”取决于形状本身以及{{ SVGAttr("fill-rule") }} 属性的值。作为一个外观属性，它可以直接用作 CSS 样式表内部的属性。

## 用法

### 对动画元素

| 类别     | 动画定时属性                                                                 |
| -------- | ---------------------------------------------------------------------------- |
| 值       | **remove** \| freeze                                                         |
| 可变性   | No                                                                           |
| 规范文档 | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG/animate.html#FillAttribute) |

- remove（默认值）
  - : 在动画的激活持续时间结束后，动画效果会移除（不再应用）。在动画的激活结束后，动画不再对目标元素有影响（除非动画重新开始）。
- freeze
  - : 在动画激活持续时间结束后，文档持续时间的剩余时间里（或者直到动画重新开始）动画效果会“冻结”着。

### 对形状元素

| 类别     | 外观属性                                                                     |
| -------- | ---------------------------------------------------------------------------- |
| 值       | [\<paint>](/zh-CN/SVG/Content_type#Paint)                                    |
| 可变性   | Yes                                                                          |
| 规范文档 | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG/painting.html#FillProperty) |

## 示例

## 元素

下列元素可以使用`fill`属性：

- [动画元素](/zh-CN/SVG/Element#Animation_elements) »
- [形状元素](/zh-CN/SVG/Element#Shape) »
- [文本内容元素](/zh-CN/SVG/Element#TextContent) »
