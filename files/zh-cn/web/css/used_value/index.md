---
title: 应用值
slug: Web/CSS/used_value
---

{{CSSRef}}

CSS 属性的应用值（used value）是完成所有计算后最终使用的值，可以由 [window.getComputedStyle](/zh-CN/docs/Web/API/Window/getComputedStyle) 获取。尺寸 (例如 `width`, `line-height`) 单位为像素，简写属性 (例如 background) 与组成属性相符 (例如 `background-color`，`display`) 与 `position`、`float` 相符，每个 CSS 属性都有值。

## 详情

计算出 CSS 属性的最终值有三个步骤。首先，[指定值 specified value](/zh-CN/docs/Web/CSS/specified_value) 取自样式层叠 (选取样式表里权重最高的规则), [继承](/zh-CN/docs/Web/CSS/Inheritance) (如果属性可以继承则取父元素的值)，或者默认值。然后，按规范算出 [计算值 computed value](/zh-CN/docs/Web/CSS/computed_value) (例如， `span` 指定 `position: absolute` 后`display` 变为 `block`)。最后，计算布局 (尺寸比如 `auto` 或 百分数 换算为像素值 )，结果即 **应用值 used value**。这些步骤是在内部完成的，脚本只能使用 [window.getComputedStyle](/zh-CN/docs/Web/API/Window/getComputedStyle) 获得最终的应用值。

## 举例

没有明确的宽度。指定的宽度：auto (默认). 计算的宽度：auto. 应用的宽度：998px (举例而言)。明确的宽度：50%. 指定的宽度：50%. 计算的宽度：50%. 应用的宽度：447px 明确的宽度：inherit. 指定的宽度：50%. 计算的宽度：50%. 应用的宽度：221px .

## 与计算值的区别

CSS 2.0 只定义了 [计算值 computed value](/zh-CN/docs/Web/CSS/computed_value) 作为属性计算的最后一步。CSS 2.1 引进了定义明显不同的应用值，这样当父元素的计算值为百分数时子元素可以显式地继承其高宽。对于不依赖于布局的 CSS 属性 (例如 display, font-size, line-height) 计算值与应用值一样，否则就会不一样 (引自 [CSS 2.1 Changes: Specified, computed, and actual values](https://www.w3.org/TR/CSS2/changes.html#q36)):

- background-position
- bottom, left, right, top
- height, width
- margin-bottom, margin-left, margin-right, margin-top,
- min-height, min-width
- padding-bottom, padding-left, padding-right, padding-top
- text-indent

## 规范

[CSS Level 2: Used Values](https://www.w3.org/TR/CSS2/cascade.html#used-value)

## 参见

- [CSS Reference](/zh-CN/docs/Web/CSS/Reference)
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

- [window.getComputedStyle](/zh-CN/docs/Web/API/Window/getComputedStyle)
