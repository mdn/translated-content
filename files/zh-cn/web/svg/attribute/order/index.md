---
title: order
slug: Web/SVG/Attribute/order
---

{{SVGRef}}

order 属性确定被用作 {{ SVGElement("feConvolveMatrix") }} 元素的矩阵的大小。

提供的值必须是大于 0 的[<整数>](/zh-CN/SVG/Content_type#Integer). 第一个值\<orderX>,确定矩阵的列数。第二个值\<orderY>确定矩阵的行数。如果\<orderY>没有指定，那么它的默认值相当于\<orderX>的值。

一个典型的值是 order="3". 建议只使用较小的值 (例如 3); 大值可能会导致较高的 CPU 开销而且通常界面上并不能表现出高耗能造成的效果。

如果未指定该属性，则其效果就如同指定值为 3.

## Usage context

| Categories | None                                                                        |
| ---------- | --------------------------------------------------------------------------- |
| Value      | [\<number-optional-number>](/zh-CN/SVG/Content_type#Number-optional-number) |
| Animatable | Yes                                                                         |

## Example

## Elements

下列元素可以使用 order 属性

- {{ SVGElement("feConvolveMatrix") }}

## 规范

{{Specifications}}
