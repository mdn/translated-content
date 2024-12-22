---
title: 可替换元素
slug: Web/CSS/Replaced_element
---

{{CSSRef}}

在 [CSS](/zh-CN/docs/Web/CSS) 中，**可替换元素**（**replaced element**）的展现效果不是由 CSS 来控制的。这些元素是一种外部对象，它们外观的渲染，是独立于 CSS 的。

简单来说，它们的内容不受当前文档的样式的影响。CSS 可以影响可替换元素的位置，但不会影响到可替换元素自身的内容。某些可替换元素，例如 {{HTMLElement("iframe")}} 元素，可能具有自己的样式表，但它们不会继承父文档的样式。

CSS 能对可替换元素产生的唯一影响在于，部分属性支持控制元素内容在其框中的位置或定位方式。有关详细信息，请参阅本文下面的[控制内容框中的对象位置](#控制内容框中的对象位置)。

## 可替换元素

典型的可替换元素有：

- {{HTMLElement("iframe")}}
- {{HTMLElement("video")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("img")}}

有些元素仅在特定情况下被作为可替换元素处理，例如：

- {{HTMLElement("option")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("object")}}

HTML 规范也说了 {{HTMLElement("input")}} 元素可替换，因为 `"image"` 类型的 {{HTMLElement("input")}} 元素就像 {{HTMLElement("img")}} 一样被替换。但是其他形式的控制元素，包括其他类型的 {{HTMLElement("input")}} 元素，被明确地列为非可替换元素（non-replaced element）。该规范用术语小挂件（Widget）来描述它们默认的限定平台的渲染行为。

用 CSS {{cssxref("content")}} 属性插入的对象是匿名的可替换元素。它们并不存在于 HTML 标记中，因此是“匿名的”。

## CSS 与可替换元素

CSS 在某些情况下会对可替换元素做一些特殊处理，比如计算外边距（{{cssxref("margin")}}）和一些 `auto` 的具体值。

需要注意的是，一部分（并非全部）可替换元素，其本身具有的尺寸和基线（baseline）会被一些 CSS 属性（例如 {{cssxref("vertical-align")}}）加入计算之中。只有可替换元素才能具有这种自带值。

### 控制内容框中的对象位置

某些 CSS 属性可用于指定可替换元素中包含的内容对象在该元素的盒区域内的位置或定位方式。这些属性的具体定义可以在 [CSS3 Images](https://drafts.csswg.org/css-images/) 规范中找到：

- {{cssxref("object-fit")}}
  - : 指定可替换元素的内容对象在元素盒区域中的填充方式。（有些类似于 {{cssxref("background-size")}} ）
- {{cssxref("object-position")}}
  - : 指定可替换元素的内容对象在元素盒区域中的位置。（类似于 {{cssxref("background-position")}} ）

## 参见

- 可替换元素的 [HTML 规范](https://html.spec.whatwg.org/multipage/rendering.html#replaced-elements)
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
