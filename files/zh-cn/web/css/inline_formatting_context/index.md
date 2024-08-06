---
title: 行内格式化上下文（Inline formatting context）
slug: Web/CSS/Inline_formatting_context
---

{{CSSRef}}

这篇文章将解释什么是行内格式化上下文（Inline formatting context）

## 核心概念

行内格式化上下文是一个网页的渲染结果的一部分。其中，各行内框（inline boxes）一个接一个地排列，其排列顺序根据书写模式（writing-mode）的设置来决定：

- 对于水平书写模式，各个框从左边开始水平地排列
- 对于垂直书写模式，各个框从顶部开始水平地排列

在下面给出的例子中，带黑色边框的两个 ({{HTMLElement("div")}}) 元素组成了一个[区块格式化上下文](/zh-CN/docs/Web/CSS/CSS_display/Block_formatting_context)，其中的每一个单词都参与一个行内格式化上下文中。水平书写模式下的各个框水平地排列，垂直书写模式下的各个框垂直地排列。

{{EmbedGHLiveSample("css-examples/inline-formatting/inline.html", '100%', 720)}}

各个框组成了一行，而该行位于一个称为“行框（line box）”的矩形区域之中。该行框的大小将足以包含该行中所有的行内框（inline boxes）；当行内方向上没有剩余空间时，将会创建新行。因此，一个段落实际上是一系列行框的集合，这些行框在块的方向上排列。

一个行内框（inline box）被分割到多行中时，margins, borders, 以及 padding 的设定均不会在断裂处生效。下例中有一个 ({{HTMLElement("span")}}) 元素，它包裹了一系列单词，占据了两行。可以看见在断裂处，`<span>` 的 border 同样发生了断裂。

{{EmbedGHLiveSample("css-examples/inline-formatting/break.html", '100%', 720)}}

Margins, borders, 以及 padding 的设置，在行的方向上是生效的。在下例中，可以看见行内元素 `<span>` 的 margin，border 以及 padding 是被加上了的。

{{EmbedGHLiveSample("css-examples/inline-formatting/mbp.html", '100%', 920)}}

> [!NOTE]
> 此处使用了 logical, flow-relative properties — {{cssxref("padding-inline-start")}}，而不是 {{cssxref("padding-left")}} — so that they work in the inline dimension whether the text is horizontal or vertical. Read more about these properties in [Logical Properties and Values](/zh-CN/docs/Web/CSS/CSS_logical_properties_and_values).

## 在块的方向上对齐

行内框（Inline boxes）可使用{{cssxref("vertical-align")}}属性，以不同的方式在块的方向上进行对齐（因此在垂直书写模式下，`vertical-align` 中的“vertical”根本是名不副实——此时行内框将在水平方向上进行对齐）。下例中，字号较大的文本使得第一个句子的行框变大，因此 `vertical-align` 能让行内框（inline boxes）分布于上侧或下侧。例子里用的值是 `top`, 可以试试 `middle`, `bottom`, 或 `baseline` 这些值。

{{EmbedGHLiveSample("css-examples/inline-formatting/align.html", '100%', 920)}}

## 在行内方向上对齐

如果行内方向上还有额外空间，那么 {{cssxref("text-align")}} 可用于将各行内框（inline boxes）在行框（line box）内对齐。可以试试把 `text-align` 的值改成 `end` 。

{{EmbedGHLiveSample("css-examples/inline-formatting/text-align.html", '100%', 920)}}

## 浮动造成的效果

在行内方向上，各行框（Line Boxes）通常具有相同的尺寸，即在水平书写模式下，它们有同样的宽度；在垂直书写模式下，它们有同样的高度。但是，如果同一个块格式化上下文中存在一个 {{cssxref("float")}}，则这个浮动元素将导致包裹了它的各行框变短。

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/float.html", '100%', 720)}}

## 参见

- [区块格式化上下文](/zh-CN/docs/Web/CSS/CSS_display/Block_formatting_context)
- [视觉格式化模型](/zh-CN/docs/Web/CSS/Visual_formatting_model)
