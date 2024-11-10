---
title: Introduction to formatting contexts 格式化上下文简介
slug: Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts
---

{{CSSRef}}
本文介绍格式化上下文的概念，其中有几种类型，包括块格式化上下文 block formatting contexts、内联格式化上下文 inline formatting contexts 和灵活格式化上下文 flex formatting contexts。还介绍了它们的基本行为以及如何利用这些行为。
页面上的所有内容都是**格式化上下文 formatting context** 的一部分，或者是一个以特定方式显示的区域。**块格式上下文（BFC）**将根据块布局规则布局子元素，**灵活格式上下文 flex formatting context** 将其子元素布局为灵活项{{Glossary("flex item", "flex items")}}等。每个格式上下文在其上下文中都有特定的布局规则。

## Block formatting contexts 块格式化上下文

文档最外层元素使用块布局规则或称为**初始块格式上下文**。这意味着`<html>`元素块中的每个元素都是按照正常流程遵循块和内联布局规则进行布局的。参与 BFC 的元素使用 CSS 框模型概述的规则，该模型定义了元素的边距、边框和填充如何与同一上下文中的其他块交互。

### 创建新的块格式上下文

{{HTMLElement("html")}} 元素不是唯一能够创建块格式上下文的元素。任何块级元素都可以通过应用某些 CSS 属性来创建一个 BFC

除了文档的根元素 ({{HTMLElement("html")}}) 之外，还将在以下情况下创建一个新的 BFC：

- 使用{{cssxref("float")}} 使其浮动的元素
- 绝对定位的元素 (包含 {{cssxref("position", "position: fixed", "#fixed")}} 或{{cssxref("position", "position: sticky", "#sticky")}}
- 使用以下属性的元素 {{cssxref("display", "display: inline-block", "#inline-block")}}
- 表格单元格或使用 `display: table-cell`, 包括使用 `display: table-*` 属性的所有表格单元格
- 表格标题或使用 `display: table-caption` 的元素
- 块级元素的 overflow 属性不为 `visible`
- 元素属性为 `display: flow-root` 或 `display: flow-root list-item`
- 元素属性为 {{cssxref("contain", "contain: layout", "#layout")}}, `content`, 或 `strict`
- {{Glossary("flex item", "flex items")}}
- 网格布局元素
- [multicol containers](/zh-CN/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
- 元素属性 {{cssxref("column-span")}} 设置为 `all`

这很有用，因为新的 BFC 的行为与最外层的文档非常相似，它在主布局中创造了一个小布局。BFC 包含其内部的所有内容，{{cssxref("float")}} 和 {{cssxref("clear")}} 仅适用于同一格式上下文中的项目，而页边距仅在同一格式上下文中的元素之间折叠。

### BFC 创建例子

让我们看看几个例子，来理解创建 BFC 的效果。

在下面的示例中，我们在应用了边框的 `<div>` 中有一个浮动元素。该 `div` 的内容与浮动元素一起浮动。由于 float 的内容比它旁边的内容高，所以现在 DIV 的边框贯穿了 float。如流入和流出元素指南[guide to in-flow and out of flow elements](/zh-CN/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow)中所述，浮动已脱离文档流，因此 DIV 的背景和边框仅包含内容，而不包含浮动。

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/float.html", '100%', 720)}}

创建一个新的 BFC 将包含该浮动。在过去，一种典型的方法是设置 `overflow: auto` 或设置其他不是 `overflow: visible` 的值。

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/bfc-overflow.html", '100%', 720)}}
设置 `overflow: auto` 会自动创建包含浮动的新 BFC。现在，我们的 DIV 在布局中变成了一个迷你布局。任何子元素都将包含在其中。

使用 `overflow` 创建新的 BFC 的问题在于， `overflow` 属性用于告诉浏览器你希望如何处理溢出的内容。在某些情况下，当你纯粹使用此属性创建 BFC 时，你会发现不需要的滚动条或剪切阴影。另外，对于未来的开发人员来说，它可能不太可读，因为不能显式地表明为什么要使用溢出来实现这一目的。如果你使用了这个方法，最好对代码进行注释以便他人理解。

### 使用 display:flow-root 显式创建 BFC

使用 `display: flow-root` （或 `display: flow-root list-item`）将创建一个新的 BFC，而不会产生任何其他潜在的问题副作用。

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/bfc-flow-root.html", '100%', 720)}}

使用 {{HTMLElement("div")}}上的 `display: flow-root` ，该容器内的所有内容都参与该容器的块格式上下文，并且浮动不会从元素底部弹出。

`flow-root` 关键字的意义是，创建的内容本质上类似于一个新的根元素（如 {{HTMLElement("html")}}所做），并确定这个新的上下文如何创建及其流布局如何实现。

## 行内格式化上下文

内联格式上下文存在于其他格式上下文中，可以将其视为段落的上下文。段落创建了一个内联格式上下文，其中在文本中使用诸如 {{HTMLElement("strong")}}、{{HTMLElement("a")}}或 {{HTMLElement("span")}} 元素等内容。

box model 不完全适用于参与内联格式上下文。在水平书写模式行中，水平填充、边框和边距将应用于元素，并左右移动文本。但是，元素上方和下方边距将不适用。应用垂直填充和边框可能会在内容的上方和下方重叠，因为在内联格式上下文中，填充和边框不会将行框撑开。

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/inline.html", '100%', 720)}}

## 其他格式上下文

本指南涵盖了流式布局，因此不涉及其他可能的格式上下文。因此，了解创建任何类型的格式上下文都将改变该格式上下文中元素的行为方式是很有用的。这种行为总是在规范中描述的，在 MDN 中也有描述。

## 总结

在本指南中，我们更详细地介绍了块和内联格式上下文以及创建块格式上下文（BFC）的重要主题。在下一个指南中，我们将了解[正常流如何与不同的写入模式交互](/zh-CN/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes)。

## 参见

- [区块格式化上下文](/zh-CN/docs/Web/CSS/CSS_display/Block_formatting_context)
- [视觉格式化模型](/zh-CN/docs/Web/CSS/Visual_formatting_model)
- [CSS 盒模型](/zh-CN/docs/Web/CSS/CSS_box_model)
