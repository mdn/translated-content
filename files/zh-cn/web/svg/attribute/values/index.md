---
title: values
slug: Web/SVG/Attribute/values
---

{{SVGRef}}

values 属性具有不同的含义，具体取决于使用的上下文，它可以定义在动画过程中使用的值序列，或者它是颜色矩阵的数字列表，根据颜色类型的不同，它们的解释也不同。要执行的颜色更改。

五个元素正在使用此属性：{{SVGElement("animate")}}, {{SVGElement("animateColor")}}, {{SVGElement("animateMotion")}}, {{SVGElement("animateTransform")}}, and {{SVGElement("feColorMatrix")}}

## animate, animateColor, animateMotion, animateTransform

对于 {{SVGElement("animate")}}, {{SVGElement("animateColor")}}, {{SVGElement("animateMotion")}}, 和 {{SVGElement("animateTransform")}}, `values`是一个列表 定义动画过程中的值序列的值。如果指定了此属性，则将忽略在元素上设置的任何 {{SVGAttr("from")}}, {{SVGAttr("to")}}, 和 {{SVGAttr("by")}} 属性值。

| Value         | [`<list-of-values>`](/zh-CN/docs/Web/SVG/Content_type#List-of-Ts) |
| ------------- | ----------------------------------------------------------------- |
| Default value | _None_                                                            |
| Animatable    | No                                                                |

- `<list-of-values>`
  - : 该值包含一个或多个值的分号分隔列表。值的类型由 {{SVGAttr("href")}} 和 {{SVGAttr("attributeName")}} 属性定义。

## feColorMatrix

对于 {{SVGElement("feColorMatrix")}} 元素，值是根据 {{SVGAttr("type")}} 属性值不同解释的数字列表。

| Value         | [`<list-of-numbers>`](/zh-CN/docs/Web/SVG/Content_type#List-of-Ts)                                                                                       |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Default value | _If `type="matrix"`, identity matrix, if `type="saturate"`, `1`, resulting in identity matrix, if `type="hueRotate"`, `0`, resulting in identity matrix_ |
| Animatable    | Yes                                                                                                                                                      |

- `<list-of-numbers>`

  - : 该值是一个数字列表，根据 type 属性的值来定义不同解释：

    - `type="matrix"`，`values` 是 20 个矩阵值（a00 a01 a02 a03 a04 a10 a11 ... a34）的列表，以空格和/或逗号分隔。
    - `type="saturate"`，`values` 是单个实数值（0 到 1）。
    - `type="hueRotate"`，`values` 是一个单一的实数值（度）。
    - `type="luminanceToAlpha"`，`values` 不适用。

## Specifications

{{Specifications}}
