---
title: 计算值
slug: Web/CSS/computed_value
---

{{CSSRef}}

一个 CSS 属性的计算值是指这个属性在由父类转向子类的继承中的值。它通过指定值计算出来：

- 处理特殊的值 {{cssxref("inherit")}}，{{cssxref("initial")}}， {{cssxref("unset")}}和 {{cssxref("revert")}}。
- 进行计算，以达到属性摘要中“计算值”行中描述的值。

计算值所需要的计算通常包括将相对值转换成绝对值 (如 em 单位或百分比)。例如，如一个元素的属性值为 `font-size:16px` 和 `padding-top:2em`, 则 `padding-top` 的计算值为 `32px` (字体大小的 2 倍).

然而，对于有些属性 (这些元素的百分比与需要布局确定后才能知道的值有关，如 `width`, `margin-right`, `text-indent`, 和 `top`)，它们的“百分比值”会转换成“百分比的计算值”。另外，line-height 属性值如是没有单位的数字，则该值就是其计算值。这些计算值中的相对值会在 [应用值](/zh-CN/docs/Web/CSS/used_value) 确定后转换成绝对值。

> **备注：** {{domxref("Window.getComputedStyle", "getComputedStyle()")}} DOM API 返回 [resolved value](/zh-CN/docs/Web/CSS/resolved_value), 可能是 [computed value](/zh-CN/docs/Web/CSS/computed_value) 或 [used value](/zh-CN/docs/Web/CSS/used_value)其中的一个，取决于属性。

## 规范

{{Specifications}}

## 参见

- {{domxref("window.getComputedStyle")}}
- CSS 重要概念：

  - [CSS 语法](/zh-CN/docs/Web/CSS/Syntax)
  - [@ 规则](/zh-CN/docs/Web/CSS/At-rule)
  - [注释](/zh-CN/docs/Web/CSS/Comments)
  - [优先级](/zh-CN/docs/Web/CSS/Specificity)
  - [继承](/zh-CN/docs/Web/CSS/Inheritance)
  - [盒模型](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [布局模式](/zh-CN/docs/Web/CSS/Layout_mode)
  - [视觉格式化模型](/zh-CN/docs/Web/CSS/Visual_formatting_model)
  - [外边距合并](/zh-CN/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - 值

    - [初始值](/zh-CN/docs/Web/CSS/initial_value)
    - [计算值](/zh-CN/docs/Web/CSS/computed_value)
    - [解析值](/zh-CN/docs/Web/CSS/resolved_value)
    - [指定值](/zh-CN/docs/Web/CSS/specified_value)
    - [应用值](/zh-CN/docs/Web/CSS/used_value)
    - [实际值](/zh-CN/docs/Web/CSS/actual_value)

  - [属性值定义语法](/zh-CN/docs/Web/CSS/Value_definition_syntax)
  - [简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties)
  - [可替换元素](/zh-CN/docs/Web/CSS/Replaced_element)
