---
title: 列布局
slug: Web/CSS/How_to/Layout_cookbook/Column_layouts
l10n:
  sourceCommit: d4a09bb1d0d466e0f31d1c15d1bc0d908b5d70ea
---

你经常需要创建具有多列的布局，而 CSS 提供了多种方法来实现这一目的。使用[多列](/zh-CN/docs/Web/CSS/Guides/Multicol_layout)、[弹性盒](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout)还是使用[网格](/zh-CN/docs/Web/CSS/Guides/Grid_layout)布局，取决于你想要实现的目标，在本指南中，我们将探讨这些选项。

![三种不同风格的布局，在容器中分为两列](cookbook-multiple-columns.png)

## 需求

你也许会为你的栏目实现多种设计样式：

- [将连续的内容分割成报纸风格的列](#连贯的内容——多列布局)。
- [单行项目按列排列，所有内容高度相等](#高度相等的单行项目——弹性盒)。
- [按行和列排列的多行列](#按行和列排列项目——网格布局)。

## 指南

为了达到你的需求，你需要选择不同的布局方式。

### 连贯的内容——多列布局

如果你使用多列布局来创建列，则文本会以连续流的形式依次填满每个列。这些列必须大小相同，并且你不能单独指定列或者列的内容的样式。

你可以使用 {{cssxref("column-gap")}} 或 {{cssxref("gap")}} 属性控制列之间的距离，并且使用 {{cssxref("column-rule")}} 为列之间添加分割线。

{{EmbedGHLiveSample("css-examples/css-cookbook/columns-multicol.html", '100%', 720)}}

> [!CALLOUT]
>
> [下载这份示例](https://github.com/mdn/css-examples/blob/main/css-cookbook/columns-multicol--download.html)

在以下情况使用多列布局：

- 你想要你的文本看起来想报纸那种排版布局。
- 你有一组要分成列的小项目。
- 你不需要单独为指定的列写样式。

### 高度相等的单行项目——弹性盒

通过设置 {{cssxref("display", "display: flex;")}}，使父元素成为一个弹性容器，就可以使用弹性盒布局法将内容分成几列。只需添加这一个属性，就能将所有子元素（子元素、伪元素和文本节点）变成单行的弹性项。用单一数值设置相同的 {{cssxref("flex")}} 简写属性，可以平均分配所有可用空间，一般来说，只要没有非包裹内容迫使项目变大，所有弹性项目的大小都是一样的。

外边距或 `gap` 属性可用于在项目之间创建间隙，但目前还没有在弹性项目之间添加分割线的 CSS 属性。

{{EmbedGHLiveSample("css-examples/css-cookbook/columns-flexbox.html", '100%', 720)}}

> [!CALLOUT]
>
> [下载这份示例](https://github.com/mdn/css-examples/blob/main/css-cookbook/columns-flexbox--download.html)

要创建一个布局，其中的弹性项可以换行，请将容器上的 {{cssxref("flex-wrap")}} 属性设置为 `wrap`。请注意，每个弹性行只为该行分配空间。一行中的项目不一定会与其他行中的项目对齐，正如你在下面的示例中看到的那样。这就是为什么弹性盒布局被描述为一维布局法的原因。它设计用于控制一行或一列的布局，但不能同时控制这两种布局。

{{EmbedGHLiveSample("css-examples/css-cookbook/columns-flexbox-wrapping.html", '100%', 720)}}

> [!CALLOUT]
>
> [下载这份示例](https://github.com/mdn/css-examples/blob/main/css-cookbook/columns-flexbox-wrapping--download.html)

在以下情况使用弹性盒布局：

- 用于单行或单列项目。
- 希望在摆放好项目后在横轴上对齐时。
- 希望封装好的项目只在其所在行内共享空间，而不与其他行内的项目对齐时。

### 按行和列排列项目——网格布局

如果你想要一个二维网格，让项目按行和列排列，那么你应该选择 CSS 网格布局。与弹性盒适用于弹性容器的直接子代类似，网格布局也适用于网格容器的直接子代。只需在容器上设置 {{cssxref("display", "display: grid;")}} 即可。在该容器上设置的属性，如 {{cssxref("grid-template-columns")}} 和 {{cssxref("grid-template-rows")}}——定义了项目如何沿行和列分布。

{{EmbedGHLiveSample("css-examples/css-cookbook/columns-grid.html", '100%', 720)}}

> [!CALLOUT]
>
> [下载这份示例](https://github.com/mdn/css-examples/blob/main/css-cookbook/columns-grid--download.html)

在以下情况使用网格布局：

- 用于多行或多列项目。
- 希望项目在区块轴和内联轴上对齐时。
- 希望项目在行和列中对齐时。

## MDN 上的资源

- [多列布局指南](/zh-CN/docs/Web/CSS/Guides/Multicol_layout)
- [弹性盒布局指南](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout)
- [CSS 网格布局指南](/zh-CN/docs/Web/CSS/Guides/Grid_layout)
