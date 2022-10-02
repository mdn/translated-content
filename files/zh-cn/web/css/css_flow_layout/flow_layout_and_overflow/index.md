---
title: Flow Layout and Overflow 流布局和溢出
slug: Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Overflow
---

When there is more content than can fit into a container, an overflow situation occurs. Understanding how overflow behaves is important in dealing with any element with a constrained size in CSS. This guide explains how overflow works when working with normal flow.
当容器中的内容超过可容纳的范围时，就会发生溢出情况。了解溢出的行为对于处理 CSS 中大小受限的任何元素都很重要。本指南解释了使用正常流时溢出是如何工作的。

## What is overflow？什么是溢出？

Giving an element a fixed height and width, then adding significant content to the box, creates a basic overflow example:
为元素赋予固定的高度和宽度，然后向框中添加重要内容，将创建一个基本的溢出示例：

{{EmbedGHLiveSample("css-examples/flow/overflow/overflow.html", '100%', 700)}}

The content goes into the box. Once it fills the box, it continues to overflow in a visible way, displaying content outside the box, potentially displaying under subsequent content. The property that controls how overflow behaves is the [`overflow`](/zh-CN/docs//Web/CSS/overflow) property which has an initial value of `visible`. This is why we can see the overflow content.
内容将进入框中。一旦填充了该框，它将继续以可见的方式溢出，在框外显示内容，可能在随后的内容下显示。控制溢出行为的属性是初始值为 Visible 的溢出属性。这就是为什么我们可以看到溢出内容。

## Controlling overflow 控制溢出

There are other values that control how overflow content behaves. To hide overflowing content use a value of `hidden`. This may cause some of your content to not be visible.
还有其他值控制溢出内容的行为。要隐藏溢出的内容，请使用值 hidden。这可能会导致某些内容不可见。

{{EmbedGHLiveSample("css-examples/flow/overflow/hidden.html", '100%', 700)}}

Using a value of `scroll` contains the content in its box and add scrollbars to enable viewing it. Scrollbars will be added even if the content fits in the box.
使用值 scroll 包含其框中的内容，并添加滚动条以启用查看。即使内容适合该框，也将添加滚动条。

{{EmbedGHLiveSample("css-examples/flow/overflow/scroll.html", '100%', 700)}}

Using a value of `auto` will display the content with no scrollbars if the content fits inside the box. If it doesn’t fit then scrollbars will be added. Comparing the next example with the example for `overflow: scroll` you should see `overflow scroll` has horizontal and vertical scrollbars when it only needs vertical scrolling. The `auto` example below only adds the scrollbar in the direct we need to scroll.
如果内容适合方框，则使用值 auto 将显示不带滚动条的内容。如果它不适合，则会添加滚动条。将下一个示例与溢出示例进行比较：当溢出滚动只需要垂直滚动时，您应该看到它有水平滚动条和垂直滚动条。下面的自动示例只在我们需要滚动的直接位置添加滚动条。

{{EmbedGHLiveSample("css-examples/flow/overflow/auto.html", '100%', 700)}}

As we have already learned, using any of these values, other than the default of `visible`, will create a new Block Formatting Context.
如果内容适合方框，则使用值 auto 将显示不带滚动条的内容。如果它不适合，则会添加滚动条。将下一个示例与溢出示例进行比较：当溢出滚动只需要垂直滚动时，您应该看到它有水平滚动条和垂直滚动条。下面的自动示例只在我们需要滚动的直接位置添加滚动条。

Note: In the [Working Draft of Overflow Level 3](https://www.w3.org/TR/css-overflow-3/), there is an additional value `overflow: clip`. This will act like `overflow: hidden` however it does not allow for programmatic scrolling, the box becomes non-scrollable. In addition it does not create a Block Formatting Context.
注意：在溢出级别 3 的工作草案中，还有一个附加值 overflow:clip。这将类似于溢出：隐藏，但不允许编程滚动，框将变为不可滚动。此外，它不会创建块格式上下文。

The overflow property is in reality a shorthand for the [`overflow-x`](/zh-CN/docs/Web/CSS/overflow-x) and [`overflow-y`](/zh-CN/docs/Web/CSS/overflow-y) properties. If you specify only one value for overflow, this value is used for both axes. However, you can specify both values in which case the first is used for `overflow-x` and therefore the horizontal direction, and the second for `overflow-y` and the vertical direction. In the below example, I have only specified `overflow-y: scroll` so we do not get the unwanted horizontal scrollbar.
实际上，overflow 属性是 overflow-x 和 overflow-y 属性的简写。如果只为溢出指定一个值，则此值用于两个轴。但是，您可以指定两个值，在这种情况下，第一个值用于 overflow-x，因此是水平方向，第二个值用于 overflow-y 和垂直方向。在下面的示例中，我只指定了 overflow-y:scroll，这样我们就不会得到不需要的水平滚动条。

{{EmbedGHLiveSample("css-examples/flow/overflow/overflow-y.html", '100%', 700)}}

## Flow Relative Properties 流相对属性

In the guide to [Writing Modes and Flow Layout](/zh-CN/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes), we looked at the newer properties of `block-size` and `inline-size` which make more sense when working with different writing modes than tying our layout to the physical dimensions of the screen. The Level 3 Overflow Module also includes flow relative properties for overflow - [`overflow-block`](/zh-CN/docs/Web/CSS/@media/overflow-block) and [`overflow-inline`](/zh-CN/docs/Web/CSS/@media/overflow-inline). These correspond to `overflow-x` and `overflow-y` but the mapping depends on the writing mode of the document.
在编写模式和流布局指南中，我们研究了块大小和内联大小的较新属性，这些属性在使用不同的编写模式时比将布局与屏幕的物理尺寸联系起来更有意义。3 级溢出模块还包括溢出 - 溢出块和溢出内联的流相关属性。这些对应于 overflow-x 和 overflow-y，但映射取决于文档的写入模式。

These properties currently do not have implementations in browsers, so you will need to use the physical properties at the present time and adjust for your writing mode.
这些属性当前在浏览器中没有实现，因此您需要在当前使用物理属性并根据您的写入模式进行调整。

## Indicating Overflow 指示溢出

In the Level 3 Overflow specification we have some properties which can help improve the way content looks in an overflow situation.
在 3 级溢出规范中，我们有一些属性可以帮助改进溢出情况下内容的外观。

### Inline-Axis Overflow 内联轴溢出

The [`text-overflow`](/zh-CN/docs/Web/CSS/text-overflow) property deals with text overflowing in the inline direction. It takes one of two values `clip`, in which case content is clipped when it overflows, this is the initial value and therefore the default behaviour. We also have `ellipsis` which renders an ellipsis, which may be replaced with a better character for the language or writing mode in use.
文本溢出属性处理内联方向的文本溢出。它采用两个值 clip 中的一个值，在这种情况下，内容在溢出时被剪裁，这是初始值，因此是默认行为。我们还有一个省略号，它呈现了一个省略号，可以用一个更好的字符来替换使用中的语言或书写模式。

{{EmbedGHLiveSample("css-examples/flow/overflow/text-overflow.html", '100%', 500)}}

### Block-Axis Overflow 块轴溢出

There is also a proposal for a `block-overflow` property, although at the time of writing the name is still up for discussion. This proposal would enable the adding of an ellipsis when text overflows in the block dimension.
还有一个关于块溢出属性的建议，尽管在编写名称时仍有待讨论。此建议将允许在块维度中文本溢出时添加省略号。

This is useful in the situation where you have a listing of articles, for example, and you display the listings in fixed height boxes which only take a limited amount of text. It may not be obvious to the reader that there is more content to click through to when clicking the box or the title. An ellipsis indicates clearly the fact there is more content. The specification would allow a string of content or a regular ellipsis to be inserted.
例如，在有文章列表的情况下，这很有用，并且在固定高度框中显示列表，而固定高度框只接受有限的文本量。对于读者来说，当单击框或标题时，可能不太明显有更多的内容需要单击。省略号清楚地表明有更多的内容。规范允许插入一个内容字符串或常规省略号。

## Summary 总结

Whether you are in continuous media on the web or in a Paged Media format such as print or EPUB, understanding how content overflows is useful when dealing with any layout method. By understanding how overflow works in normal flow, you should find it easier to understand the implications of overflow content in layout methods such as grid and flexbox.
无论您是在 Web 上的连续媒体中，还是在页面媒体格式（如 print 或 epub）中，了解在处理任何布局方法时内容溢出是如何有用的。通过了解正常流中溢出的工作方式，您应该会发现更容易理解布局方法（如网格和 FlexBox）中溢出内容的含义。

{{QuickLinksWithSubpages("/en-US/docs/Web/CSS/CSS_Flow_Layout/")}}
