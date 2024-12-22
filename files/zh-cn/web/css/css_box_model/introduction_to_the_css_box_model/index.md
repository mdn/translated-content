---
title: CSS 基础框盒模型介绍
slug: Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model
---

{{CSSRef}}

当对一个文档进行布局（lay out）的时候，浏览器的渲染引擎会根据标准之一的 **CSS 基础框盒模型**（**CSS basic box model**），将所有元素表示为一个个矩形的盒子（box）。CSS 决定这些盒子的大小、位置以及属性（例如颜色、背景、边框尺寸…）。

每个盒子由四个部分（或称*区域*）组成，其效用由它们各自的边界（Edge）所定义（原文：defined by their respective edges，可能意指容纳、包含、限制等）。如图，与盒子的四个组成区域相对应，每个盒子有四个边界：_内容边界_ _Content edge_、_内边距边界_ _Padding Edge_、_边框边界_ _Border Edge_、_外边框边界_ _Margin Edge_。

![CSS 盒模型](boxmodel.png)

## 内容区域

**内容区域**（content area）由内容边界限制，容纳着元素的“真实”内容，例如文本、图像，或是一个视频播放器。它的尺寸为内容宽度（或称 _content-box 宽度_）和内容高度（或称 _content-box 高度_）。它通常含有一个背景颜色（默认颜色为透明）或背景图像。

如果 {{cssxref("box-sizing")}} 为 `content-box`（默认），则内容区域的大小可明确地通过 {{cssxref("width")}}、{{cssxref("min-width")}}、{{cssxref("max-width")}}、{{cssxref("height")}}、{{cssxref("min-height")}} 和 {{cssxref("max-height")}} 控制。

## 内边距区域

**内边距区域**（padding area）由内边距边界限制，扩展自内容区域，负责延伸内容区域的背景，填充元素中内容与边框的间距。它的尺寸是 _padding-box 宽度_ 和 _padding-box 高度_。

内边距的粗细可以由 {{cssxref("padding-top")}}、{{cssxref("padding-right")}}、{{cssxref("padding-bottom")}}、{{cssxref("padding-left")}}，和简写属性 {{cssxref("padding")}} 控制。

## 边框区域

**边框区域**（border area）由边框边界限制，扩展自内边距区域，是容纳边框的区域。其尺寸为 *border-box 宽度*和 _border-box 高度_。

边框的粗细由 {{cssxref("border-width")}} 和简写的 {{cssxref("border")}} 属性控制。如果 {{cssxref("box-sizing")}} 属性被设为 `border-box`，那么边框区域的大小可明确地通过 {{cssxref("width")}}、{{cssxref("min-width")}}, {{cssxref("max-width")}}、{{ cssxref("height") }}、{{cssxref("min-height")}}，和 {{cssxref("max-height")}} 属性控制。假如框盒上设有背景（{{cssxref("background-color")}} 或 {{cssxref("background-image")}}），背景将会一直延伸至边框的外沿（默认为在边框下层延伸，边框会盖在背景上）。此默认表现可通过 CSS 属性 {{cssxref("background-clip")}} 来改变。

## 外边距区域

**外边距区域**（margin area）由外边距边界限制，用空白区域扩展边框区域，以分开相邻的元素。它的尺寸为 *margin-box 宽度*和 _margin-box 高度_。

外边距区域的大小由 {{cssxref("margin-top")}}、{{cssxref("margin-right")}}、{{cssxref("margin-bottom")}}、{{cssxref("margin-left")}}，和简写属性 {{cssxref("margin")}} 控制。在发生[外边距合并](/zh-CN/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)的情况下，由于盒之间共享外边距，外边距不容易弄清楚。

最后，请注意，除[可替换元素](/zh-CN/docs/Web/CSS/Replaced_element)外，对于行内元素来说，尽管内容周围存在内边距与边框，但其占用空间（每一行文字的高度）则由 {{cssxref('line-height')}} 属性决定，即使边框和内边距仍会显示在内容周围。

## 参见

- [布局与包含块](/zh-CN/docs/Web/CSS/Containing_block)
- [CSS 层叠介绍](/zh-CN/docs/Web/CSS/Cascade)
- [层叠和继承](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
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
