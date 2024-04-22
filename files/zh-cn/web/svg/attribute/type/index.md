---
title: type
slug: Web/SVG/Attribute/type
---

{{SVGRef}}

type 属性是一个类属性，他在不同的使用语境下有不同的意思。

- 对于{{SVGElement("animateTransform")}}元素 , 它决定了那些随时间变化的值的转换的类型
- 对于 {{SVGElement("feColorMatrix")}} 元素，它指明了矩阵运算的类型。关键词 `matrix` 表明一个全 5x4 矩阵的值会被提供。其他关键字快捷方式代表允许不执行复杂矩阵运算下使用常用颜色。
- 对于{{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}}, {{SVGElement("feFuncB")}}, 和{{SVGElement("feFuncA")}} 元素，它指明了组件传递函数的类型。
- 对于 {{SVGElement("feTurbulence")}} 元素，它表示应以噪声函数还是湍流函数执行过滤。
- 对于 {{SVGElement("style")}} 和 {{SVGElement("script")}} 元素，它定义了元素内容的类型。

## Usage context

### For the {{SVGElement("animateTransform")}} elements

| Categories         | _None_                                                                                                |
| ------------------ | ----------------------------------------------------------------------------------------------------- |
| Value              | **`translate`** \| `scale` \| `rotate` \| `skewX` \| `skewY`                                          |
| Animatable         | No                                                                                                    |
| Normative document | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG11/animate.html#AnimateTransformElementTypeAttribute) |

### For the {{ SVGElement("feColorMatrix") }} element

| Categories         | _None_                                                                                      |
| ------------------ | ------------------------------------------------------------------------------------------- |
| Value              | **`matrix`** \| `saturate` \| `hueRotate` \| `luminanceToAlpha`                             |
| Animatable         | Yes                                                                                         |
| Normative document | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG11/filters.html#feColorMatrixTypeAttribute) |

### For the {{ SVGElement("feFuncR") }}, {{ SVGElement("feFuncG") }}, {{ SVGElement("feFuncB") }}, and {{ SVGElement("feFuncA") }} elements

| Categories         | _None_                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------- |
| Value              | `identity` \| `table` \| `discrete` \| `linear` \| `gamma`                                        |
| Animatable         | Yes                                                                                               |
| Normative document | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG11/filters.html#feComponentTransferTypeAttribute) |

### For the {{ SVGElement("feTurbulence") }} element

| Categories         | _None_                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------ |
| Value              | `fractalNoise` \| **`turbulence`**                                                         |
| Animatable         | Yes                                                                                        |
| Normative document | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG11/filters.html#feTurbulenceTypeAttribute) |

### For the {{ SVGElement("style") }} and {{SVGElement("script")}} elements

| Categories         | _None_                                                                                                                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Value              | \<content-type>                                                                                                                                                                                        |
| Animatable         | No                                                                                                                                                                                                     |
| Normative document | [SVG 1.1 (2nd Edition) : script](http://www.w3.org/TR/SVG11/script.html#ScriptElementTypeAttribute) [SVG 1.1 (2nd Edition) : style](http://www.w3.org/TR/SVG11/styling.html#StyleElementTypeAttribute) |

## Example

## Elements

The following elements can use the `values` attribute

- {{SVGElement("animateTransform")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feFuncA")}}
- {{SVGElement("feFuncB")}}
- {{SVGElement("feFuncG")}}
- {{SVGElement("feFuncR")}}
- {{SVGElement("feTurbulence")}}
- {{SVGElement("script")}}
- {{SVGElement("style")}}
