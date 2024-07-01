---
title: baseline-shift
slug: Web/SVG/Attribute/baseline-shift
---

{{SVGRef}}

属性 `baseline-shift` 允许相对于父文本内容元素的 `dominant-baseline` 重定位 `dominant-baseline`。该切换对象必须是一个下标或上标。

作为一个外观属性，它还可以直接作为 CSS 样式表内部的属性使用。请看{{ cssxref("baseline-shift","CSS baseline-shift") }}以了解更多信息。

## 用法

| 类别     | 外观属性                                                                                                        |
| -------- | --------------------------------------------------------------------------------------------------------------- |
| 值       | **auto** \| baseline \| super \| sub \| \<percentage> \| [\<length>](/zh-CN/SVG/Content_type#Length) \| inherit |
| 可变性   | Yes                                                                                                             |
| 规范文档 | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG11/text.html#BaselineShiftProperty)                             |

- baseline
  - : 没有基线切换，`dominant-baseline`依然在原来的位置。
- sub
  - : `dominant-baseline`切换到下标的默认位置。
- super
  - : `dominant-baseline`切换到上标的默认位置
- \<percentage>
  - : 该属性的结果值是这个百分数乘以 {{ SVGElement("text") }}元素的{{ SVGAttr("line-height") }}。如果是正值，dominant-baseline 向 shift 同方向移动结果值；如果是负值，dominant-baseline 向 shift 反方向移动结果值，相对于父文本内容元素。值“0%”等于”baseline“。
- [\<length>](/zh-CN/SVG/Content_type#Length)
  - : 如果是正值，dominant-baseline 向 shift 同方向移动[\<length>](/zh-CN/SVG/Content_type#Length)距离；如果是负值，dominant-baseline 向 shift 反方向移动[\<length>](/zh-CN/SVG/Content_type#Length)距离。值”0cm“等于”baseline“。

## 示例

## 元素

下列这些元素可以使用 `baseline-shift` 属性。

- {{ SVGElement("tspan") }}
- {{ SVGElement("tref") }}
- {{ SVGElement("textPath") }}

## 规范

{{Specifications}}

## 参见

- {{ cssxref("baseline-shift","CSS baseline-shift") }}
