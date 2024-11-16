---
title: 溢出的内容
slug: Learn/CSS/Building_blocks/Overflowing_content
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks")}}

本节课，我们来了解一下 CSS 中另外一个重要的概念——**溢出**。溢出是在盒子无法容纳下太多的内容的时候发生的。在这篇教程里面，你将会学习到什么是溢出，以及如何控制它。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基础的电脑知识，<a
          href="/zh-CN/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >安装了基本的软件</a
        >，<a
          href="/zh-CN/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >处理文件</a
        >的基础知识，HTML 基础（学习
        <a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 简介</a
        >），对 CSS 的工作原理有所了解（学习
        <a href="/zh-CN/docs/Learn/CSS/First_steps">CSS 入门概述</a>）。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>理解溢出和控制溢出的方法。</td>
    </tr>
  </tbody>
</table>

## 什么是溢出？

我们知道，CSS 中万物皆盒，因此我们可以通过给 {{cssxref("width")}} 和 {{cssxref("height")}}（或者 {{cssxref("inline-size")}} 和 {{cssxref("block-size")}}）赋值的方式来约束盒子的尺寸。溢出是在你往盒子里面塞太多东西的时候发生的，所以盒子里面的东西也不会老老实实待着。CSS 给了你好几种工具来控制溢出，在学习的早期理解这些概念是很有用的。在你写 CSS 的时候你经常会遇到溢出的情形，尤其是当你以后更加深入到 CSS 布局的时候。

## CSS 尽力减少“数据损失”

我们从两个展示了在碰到溢出的时候，CSS 默认会如何处理的例子开始吧。

第一个例子是，一个盒子，在块方向上已经受到 `height` 的限制。然后我们已经加了过多的内容，以至于盒子里面没有空间容纳。内容正在从盒子里面溢出，并让自己把盒子下面的段落弄得一团糟。

{{EmbedGHLiveSample("css-examples/learn/overflow/block-overflow.html", '100%', 600)}}

第二个例子是一个单词，位于在内联方向上受到限制的盒子里面。盒子已经被做得小到无法放置那个单词的地步，于是那个单词就突破了盒子的限制。

{{EmbedGHLiveSample("css-examples/learn/overflow/inline-overflow.html", '100%', 500)}}

你也许会好奇，为什么 CSS 默认会采取如此不整洁的方式，让内容这么凌乱地溢出出来呢？为何不把多余的内容隐藏起来，或者让盒子变大呢？

只要有可能，CSS 就不会隐藏你的内容，隐藏引起的数据损失通常会造成困扰。在 CSS 的术语里面，这会导致一些内容消失，你的访客可能不会注意到这一点，如果消失的是表格上的提交按钮，没有人能填完这个表格，这是很麻烦的事情！所以 CSS 反而会把它以可见的形式溢出出去。这样做的结果就是，你会看到错误的 CSS 导致的一片混乱，或者最坏的情况也只是你的网站的访客会告诉你有些内容冒了出来，你的网站需要修缮。

如果你已经用 `width` 或者 `height` 限制住了一个盒子，CSS 假定，你知道你在做什么，而且你已经控制住了溢出的隐患。总之，在盒子里面需要放置文本的时候，限制住块方向的尺寸是会引起问题的，因为可能会有比你在设计网站的时候所预计的文本更多的文本，或者文本变大了——比如用户增加字体大小的时候。

在下面的几节课里，我们会看一下各种不同的控制尺寸的方式，以减少溢出的影响。但是，如果你需要固定的尺寸，你也可以控制溢出表现的形式。那么让我们接着读下去吧！

## overflow 属性

{{cssxref("overflow")}} 属性是你控制一个元素溢出的方式，它告诉浏览器你想怎样处理溢出。`overflow` 的默认值为 `visible`，这就是我们的内容溢出的时候，我们在默认情况下看到它们的原因。

如果你想在内容溢出的时候把它裁剪掉，你可以在你的盒子上设置 `overflow: hidden`。这就会像它表面上所显示的那样作用——隐藏掉溢出。这可能会很自然地让东西消失掉，所以你只应该在判断隐藏内容不会引起问题的时候这样做。

{{EmbedGHLiveSample("css-examples/learn/overflow/hidden.html", '100%', 600)}}

也许你还会想在有内容溢出的时候加个滚动条？如果你用了 `overflow: scroll`，那么你的浏览器总会显示滚动条，即使没有足够多引起溢出的内容。你可能会需要这样的样式，它避免了滚动条在内容变化的时候出现和消失。

**如果你移除了下面的盒子里的一些内容，你可以看一下，滚动条是否还会在没有能滚动的东西的时候保留。**

{{EmbedGHLiveSample("css-examples/learn/overflow/scroll.html", '100%', 600)}}

在以上的例子里面，我们仅仅需要在 `y` 轴方向上滚动，但是我们在两个方向上都有了滚动条。你可以使用 {{cssxref("overflow-y")}} 属性，设置 `overflow-y: scroll` 来仅在 `y` 轴方向滚动。

{{EmbedGHLiveSample("css-examples/learn/overflow/scroll-y.html", '100%', 600)}}

你也可以用 {{cssxref("overflow-x")}}，以在 x 轴方向上滚动，尽管这不是处理长英文词的好办法！如果你真的需要在小盒子里面和长英文词打交道，那么你可能要了解一下 {{cssxref("word-break")}} 或者 {{cssxref("overflow-wrap")}} 属性。除此以外，一些[在 CSS 里面调整大小](/zh-CN/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)这节课里面讨论过的方式可能会帮助你创建可以和有变化容量的内容相协调的盒子。

{{EmbedGHLiveSample("css-examples/learn/overflow/scroll-x.html", '100%', 500)}}

和 `scroll` 一样，在无论是否有多到需要 用滚动条的内容的时候，页面上都会显示一个滚动条。

> [!NOTE]
> 你可以用 `overflow` 属性指定 x 轴和 y 轴方向的滚动，同时使用两个值进行传递。如果指定了两个关键字，第一个对 `overflow-x `生效而第二个对 `overflow-y` 生效。否则，`overflow-x` 和 `overflow-y` 将会被设置成同样的值。例如，`overflow: scroll hidden` 会把 `overflow-x` 设置成 `scroll`，而 `overflow-y` 则为 `hidden`。

如果你只是想让滚动条在有比盒子所能装下更多的内容的时候才显示，那么使用 `overflow: auto`。此时由浏览器决定是否显示滚动条。桌面浏览器一般仅仅会在有足以引起溢出的内容的时候这么做。

**在下面的例子里面，移除一些内容，直到能够装在盒子里面，你还会看到滚动条消失了。**

{{EmbedGHLiveSample("css-examples/learn/overflow/auto.html", '100%', 700)}}

## 溢出建立了区块格式化上下文

CSS 中有所谓[**区块格式化上下文**（Block Formatting Context，BFC）](/zh-CN/docs/Web/CSS/CSS_display/Block_formatting_context)的概念。现在你不用太过在意，但是你应该知道，在你使用诸如 `scroll` 或者 `auto` 的时候，你就建立了一个块级排版上下文。结果就是，你改变了 `overflow` 的值的话，对应的盒子就变成了更加小巧的状态。在容器之外的东西没法混进容器内，也没有东西可以突出盒子，进入周围的版面。激活了滚动动作，你的盒子里面所有的内容会被收纳，而且不会遮到页面上其他的物件，于是就产生了一个协调的滚动体验。

## 网页设计时不需要的溢出

现代网页布局的方式（正如 [CSS 布局](/zh-CN/docs/Learn/CSS/CSS_layout)模块中所介绍的那些）可以很好地处理溢出。我们不一定能预料到网页上会有多少内容，人们很好地设计它们，使得它们能与这种现状协调。但是在以往，开发者会更多地使用固定高度，尽力让毫无关联的盒子的底部对齐。这是很脆弱的，在旧时的应用里面，你偶尔会遇到一些盒子，它们的内容遮到了页面上的其他内容。如果你看到了，那么你现在应该知道，这就是溢出，理论上你应该能重新排布这些布局，使得它不必依赖于盒子尺寸的调整。

在开发网站的时候，你应该一直把溢出的问题挂在心头，你应该用或多或少的内容测试设计，增加文本的字号，确保你的 CSS 可以正常地协调。改变溢出属性的值，来隐藏内容或者增加滚动条，会是你仅仅在少数特别情况下需要的，例如在你确实需要一个可滚动盒子的时候。

## 技能测试！

你已经到了本文的结尾，但你能记住其中重要的信息吗？你可以在继续前进之前进行一些测试来验证你是否记住了这些内容——见[技能测试：溢出](/zh-CN/docs/Learn/CSS/Building_blocks/Overflow_Tasks)。

## 小结

这节短短的课已经介绍了溢出的概念，你现在明白，CSS 会尽力不让溢出的内容不可见，因为这会造成数据损失。你已经发现，你可以控制住潜在的溢出，同样，你也应该测试你的作品，确保你不会一下子就弄出令人困扰的溢出。

{{PreviousMenuNext("Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks")}}
