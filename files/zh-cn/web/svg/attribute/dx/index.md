---
title: dx
slug: Web/SVG/Attribute/dx
---

{{SVGRef}}

`dx` 属性表示一个元素或其内容在 `x` 轴方向上的偏移，偏移量取决于设置该属性的元素。

对于{{SVGElement("feOffset")}}元素，它的值代表所有输入的图像的偏移量之和。这个总和被表达在由{{SVGElement("filter")}}元素的{{SVGAttr("primitiveUnits")}}属性定义的坐标系中。

对于{{SVGElement("glyphRef")}}元素，它的值代表该符号在字体坐标系中 x 轴上的相对坐标。

对于 {{SVGElement("text")}}、{{SVGElement("tspan")}} 和 {{SVGElement("tref")}} 元素，由于这些元素允许设置 [\<list-of-length>](/zh-CN/docs/SVG/Content_type#list-of-ts)，所以更复杂。

如果只提供了一个[\<length>](/zh-CN/docs/SVG/Content_type#length)，当前文本位置会沿着坐标系内 x 轴方向偏移[\<length>](/zh-CN/docs/SVG/Content_type#length) 。

如果提供了一个由逗号或者空格分隔的[\<length>](/zh-CN/docs/SVG/Content_type#length)列表，列表中的值将会表示前 n 个字符沿 x 轴方向偏移的增量。因此，当前文本位置也因为绘制当前{{SVGElement("text")}}元素而沿 x 轴方向偏移。

如果在[\<length>](/zh-CN/docs/SVG/Content_type#length)列表中有更多的字符，那么对于每个字符，都有

- 如果祖先{{SVGElement("text")}}或{{SVGElement("tspan")}}元素对于给定的字符，通过 dx 的属性指定了相对 x 坐标，那么当前文本位置会沿坐标系的 x 轴方向偏移该数值（最近的祖先具有优先级）
- 否则没有额外的 x 轴方向的偏移发生

## 使用说明

| 分类     | 无                                                                                                                                        |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 数值类型 | [\<number>](/zh-CN/docs/SVG/Content_type#number) \| [T<.2Fvar>s">\<list-of-length>](/zh-CN/docs/SVG/Content_type#list-of-<var>t<.2fvar>s) |
| 可变     | 是                                                                                                                                        |

## 元素

这些元素可以使用 dx 属性

- {{ SVGElement("feOffset") }}
- {{ SVGElement("glyphRef") }}
- {{ SVGElement("text") }}
- {{ SVGElement("tref") }}
- {{ SVGElement("tspan") }}

## 规范

{{Specifications}}
