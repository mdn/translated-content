---
title: 处理 Multicol 中的溢出
slug: Web/CSS/CSS_multicol_layout/Handling_overflow_in_multicol_layout
---

{{CSSRef}}

在本指南中，我们将了解 multicol 如何处理溢出，包括在列框内以及内容超出容器容量的情况。

## column boxes 内部溢出

当子项的大小大于列框时，就会发生溢出。例如，当列中的图像宽度大于 `column-width` 值或基于 `column-count` 声明的列数生成的列宽度时，就可能会发生这种情况。

在这种情况下，内容溢出（并且是可见的）到下一列，而不是被列框裁切。你可以在下面的示例中看到，在编写本文时，浏览器以不同的方式处理预期的呈现图像。

{{EmbedGHLiveSample("css-examples/multicol/overflow/image.html", '100%', 800)}}

![](image-overflow-multicol.png)

如果你想要一个图像尺寸缩小到适合列框，标准的响应式的解决方案是设置最大宽度:100%。

{{EmbedGHLiveSample("css-examples/multicol/overflow/image-max-width.html", '100%', 800)}}

## 更多的列

如何处理溢出的列取决于是在一个片段化的媒体上下文（比如打印）中，还是在一个连续的媒体上下文（比如 web 页面）中。

在一个片段化的媒体中，一旦碎片（例如页面）中充满了列，多出的列将移至新页面。在连续介质中，列将沿横向溢出。在 web 上，这意味着水平滚动条的出现。

下面的示例显示了这种溢出行为。multicol 容器有一个高度，列的文本多于空间，因此多出的列会在容器外面出现。

{{EmbedGHLiveSample("css-examples/multicol/overflow/overflow-inline.html", '100%', 800)}}

本规范的未来版本中，会允许横向溢出的列向下排列，用户能向下滚动鼠标查看溢出的列。

## 使用纵向的媒体查询

multicol 在 web 上的一个问题：如果你的列比 viewport 高，读者需要上下滚动来阅读，这样的用户体验不好。避免这种情况的一种方法是，只有在有足够的高度时才应用列属性。

在下面的示例中，我们使用了 `min-height`。

{{EmbedGHLiveSample("css-examples/multicol/overflow/min-height.html", '100%', 800)}}

在本系列的最后一篇指南中，我们将看到[片段化下的 Muticol 如何使用](/zh-CN/docs/Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol)的规范，去控制列内容的溢出。
