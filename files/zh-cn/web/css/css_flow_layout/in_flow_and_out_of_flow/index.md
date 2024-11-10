---
title: In Flow and Out of Flow
slug: Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow
---

{{CSSRef}}

在之前的 [文档](/zh-CN/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)中我解释了常规流中块（block）和行（inline）布局，常规流中的所有元素都会以这种布局方式运作。

在下面的例子中，我新建了一个标题（h1 元素），一个段落（p 元素），一个无序列表（ul 元素）和一个包含 strong 元素的段落（p 元素），标题和段落都是块级（block level），strong 元素为行级（inline）。列表中的项通过弹性盒布局排成一行，但是列表本身仍然处于块和内联布局中 - 他的 display 属性为 block。

{{EmbedGHLiveSample("css-examples/flow/in-flow/in-flow.html", '100%', 800)}}

可以说，示例中的所有元素都属于常规流，按照源代码中的顺序渲染到页面中。

## 脱离常规流的元素

下列元素会脱离常规流：

- floated items。浮动的元素
- items with `position: absolute` (including `position: fixed` which acts in the same way)。通过设置 position 属性为 absolute 或者 fixed 的元素
- the root element (`html`) 根元素

脱离常规流的元素会创建一个新的块级格式化上下文（Block Formatting Context: BFC）环境，其中包含的所有元素构成了一个小的布局环境，与页面中的其他内容分隔开来。而根元素，作为页面中所有内容的容器，自身脱离常规流，为整个文档创建了一个块级格式化上下文环境。

### Floated Items

在这个例子中，我有一个 div，以及两个段落。我已经为段落添加了背景颜色，然后将 div 向左浮动。div 现在已经不再处于 flow 中了。

作为一个浮动的元素，它首先根据正常 flow 布局，然后从流动中取出并尽可能地向左移动

{{EmbedGHLiveSample("css-examples/flow/in-flow/float.html", '100%', 800)}}

你可以看到下面段落的背景颜色在下面运行，只是该段落的行框已被缩短以导致在浮动周围包裹内容的效果。我们段落的方框仍然按照正常流程规则显示。这就是为什么要在浮动项目周围留出空间，必须为项目添加边距，以便将线框推离它。你无法对以下内插内容应用任何内容来实现此目的。

### Absolute Positioning

设置元素属性为 `position: absolute` 或者 `position: fixed` 会使此元素脱离文档流，他本来占据的空间也会被移除。在下面的例子中，我定义了三个 p 元素，并且将第二个 p 元素设置为 `position` `absolute`, `top: 30px` , `right: 30px`. 使其脱离文档流。

{{EmbedGHLiveSample("css-examples/flow/in-flow/abspos.html", '100%', 700)}}

设置 `position: fixed` 也能使元素脱离文档流，但是偏移量会根据视口而不是父元素来定。

当通过定位方式使元素脱离文档流，元素内容可能重叠，这需要你自己去处理。脱离文档流意味着页面中的其他元素不知道该元素的存在，故不会对该元素做出响应。

### Relative Positioning and Flow

如果你给一个元素开启相对定位，那该元素依然会位于文档流中，然而你可以通过设置偏移值的方式来移动他。正如下面的例子所展示的，该元素的原先占据的空间仍然会被保留。

{{EmbedGHLiveSample("css-examples/flow/in-flow/relative.html", '100%', 800)}}

当你移动一个元素或者使元素脱离文档流，为防止重叠，你可能需要对元素内容和元素周围的内容做一些管理，要么清除浮动，要么保证相对定位不会覆盖其他元素。

## Summary

In this guide we have covered the ways to take an element out of flow in order to achieve some very specific types of positioning. In the next guide we will look at a related issue, that of creating a [Block Formatting Context](/zh-CN/docs/Web/CSS/CSS_display/Block_formatting_context), in [Formatting Contexts Explained](/zh-CN/docs/Web/CSS/CSS_flow_layout/Formatting_Contexts_Explained).

## See Also

- Learn Layout: _[Positioning](/zh-CN/docs/Learn/CSS/CSS_layout/Positioning)_
