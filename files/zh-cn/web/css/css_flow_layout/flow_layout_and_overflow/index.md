---
title: 流布局和溢出
slug: Web/CSS/CSS_flow_layout/Flow_layout_and_overflow
---

{{CSSRef}}

当容器中的内容超过可容纳的范围时，就会发生溢出情况。了解溢出的行为对于处理 CSS 中大小受限的任何元素都很重要。本指南解释了使用正常流时溢出是如何工作的。

## 什么是溢出？

为元素赋予固定的高度和宽度，然后向框中添加重要内容，将创建一个基本的溢出示例：

{{EmbedGHLiveSample("css-examples/flow/overflow/overflow.html", '100%', 700)}}

内容将进入框中。一旦填充了该框，它将继续以可见的方式溢出，在框外显示内容，可能在随后的内容下显示。控制溢出行为的属性是初始值为 `visible` 的 [`overflow`](/zh-CN/docs/Web/CSS/overflow) 属性。这就是为什么我们可以看到溢出内容。

## 控制溢出

还有其他值控制溢出内容的行为。要隐藏溢出的内容，请使用值 `hidden`。这可能会导致某些内容不可见。

{{EmbedGHLiveSample("css-examples/flow/overflow/hidden.html", '100%', 700)}}

使用值 `scroll` 包含其框中的内容，并添加滚动条以启用查看。即使内容适合该框，也将添加滚动条。

{{EmbedGHLiveSample("css-examples/flow/overflow/scroll.html", '100%', 700)}}

如果内容适合方框，则使用值 auto 将显示不带滚动条的内容。如果它不适合，则会添加滚动条。将下一个示例与溢出示例进行比较：当溢出滚动只需要垂直滚动时，你应该看到它有水平滚动条和垂直滚动条。下面的自动示例只在我们需要滚动的直接位置添加滚动条。

{{EmbedGHLiveSample("css-examples/flow/overflow/auto.html", '100%', 700)}}

正如我们已经了解的，使用这些值中的任何一个，而不是默认的 `visible`，都会创建一个新的块级格式化上下文。

注意：在 [Overflow Level 3 的工作草案](https://www.w3.org/TR/css-overflow-3/)中，还有一个附加值 `overflow: clip`。这将类似于 `overflow: hidden`，但不允许编程滚动，框将变为不可滚动。此外，它不会创建块格式上下文。

实际上，overflow 属性是 [`overflow-x`](/zh-CN/docs/Web/CSS/overflow-x) 和 [`overflow-y`](/zh-CN/docs/Web/CSS/overflow-y) 属性的简写。如果只为溢出指定一个值，则此值用于两个轴。但是，你可以指定两个值，在这种情况下，第一个值用于 `overflow-x`，因此是水平方向，第二个值用于 `overflow-y` 和垂直方向。在下面的示例中，我只指定了 `overflow-y: scroll`，这样我们就不会得到不需要的水平滚动条。

{{EmbedGHLiveSample("css-examples/flow/overflow/overflow-y.html", '100%', 700)}}

## 流相对属性

在[书写模式和流布局指南](/zh-CN/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes)中，我们研究了 `block-size` 和 `inline-size` 这两个较新的属性，这些属性在使用不同的编写模式时比将布局与屏幕的物理尺寸联系起来更有意义。3 级溢出模块还包括溢出——[`overflow-block`](/zh-CN/docs/Web/CSS/@media/overflow-block) 和 [`overflow-inline`](/zh-CN/docs/Web/CSS/@media/overflow-inline) 的流相关属性。这些对应于 `overflow-x` 和 `overflow-y`，但映射取决于文档的书写模式。

这些属性当前在浏览器中没有实现，因此你需要在当前使用物理属性并根据你的书写模式进行调整。

## 指示溢出

在 3 级溢出规范中，我们有一些属性可以帮助改进溢出情况下内容的外观。

### 行轴溢出

[`text-overflow`](/zh-CN/docs/Web/CSS/text-overflow) 属性处理行方的文本溢出。它采用两个值 `clip` 中的一个值，在这种情况下，内容在溢出时被剪裁，这是初始值，因此是默认行为。我们还有一个省略号，它呈现了一个省略号，可以用一个更好的字符来替换使用中的语言或书写模式。

{{EmbedGHLiveSample("css-examples/flow/overflow/text-overflow.html", '100%', 500)}}

### 块轴溢出

还有一个关于块溢出属性的建议，尽管在编写名称时仍有待讨论。此建议将允许在块维度中文本溢出时添加省略号。

例如，在有文章列表的情况下，这很有用，并且在固定高度框中显示列表，而固定高度框只接受有限的文本量。对于读者来说，当单击框或标题时，可能不太明显有更多的内容需要单击。省略号清楚地表明有更多的内容。规范允许插入一个内容字符串或常规省略号。

## 总结

无论你是在 Web 上的连续媒体中，还是在页面媒体格式（如 print 或 epub）中，了解在处理任何布局方法时内容溢出是如何有用的。通过了解正常流中溢出的工作方式，你应该会发现更容易理解布局方法（如网格和弹性盒子）中溢出内容的含义。
