---
title: stdDeviation
slug: Web/SVG/Attribute/stdDeviation
---

« [SVG 属性参考主页](/zh-CN/SVG/Attribute)

`stdDeviation` 属性定义了模糊操作的标准差。如果列出两个 [\<number>](/zh-CN/docs/SVG/Content_type#Number)，第一个数字表示沿着 x 轴的标准差值，第二个值表示沿着 y 轴的标准差值。如果只出现一个数字，那个值就表示在 x 轴和 y 轴上有着相同的标准差。

负值是不允许的。设为零即禁用了已有滤镜的原本效果（比如，结果是滤镜输入图像）。如果 `stdDeviation` 在 x 轴和 y 轴上只有一个为 0，那么模糊效果就只会应用于非 0 的那个方向。

如果此属性没被定义，就与标准差值被定义为 0 的效果一样。

## 用法

| 类别   | None                                                                            |
| ------ | ------------------------------------------------------------------------------- |
| 值     | [\<number-optional-number>](/zh-CN/docs/SVG/Content_type#Number-optional-number) |
| 可变性 | Yes                                                                             |

{{ page("/en-US/docs/SVG/Content_type","Number-optional-number") }}

## 示例

## 元素

以下的元素可以使用 `stdDeviation` 属性

- {{ SVGElement("feGaussianBlur") }}

## 规范

{{Specifications}}
