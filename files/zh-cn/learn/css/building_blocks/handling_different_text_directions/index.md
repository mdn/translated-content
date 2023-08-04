---
title: 处理不同方向的文本
slug: Learn/CSS/Building_blocks/Handling_different_text_directions
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks")}}

目前为止我们在 CSS 学习中遇到的许多属性和属性值与显示器的物理尺度紧密相关。例如，我们会在上、右、下、左设置边框。这些物理尺寸与水平排布的文本相得益彰，并且，默认浏览器对方向从左到右的文本（如英文或法文）的支持，要优于从右到左的文本（如阿拉伯语）的支持。

然而，CSS 在最近几年得到了改进，以更好地支持不同方向的文本，包括从右到左，也包括从上到下的文本（如日文）——这些不同的方向属性被称为书写模式。随着学习的深入，当你开始试着对页面进行布局时，对书写模式的了解将会对你很有帮助，为此我们在这里加以介绍。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">先决条件：</th>
      <td>
        计算机基础知识，基本软件（参见<a
          href="/zh-CN/Learn/Getting_started_with_the_web/Installing_basic_software"
          >basic software installed</a
        >），文件管理的基本知识（参见<a
          href="/zh-CN/Learn/Getting_started_with_the_web/Dealing_with_files"
          >working with files</a
        >），HTML 基础（HTML 学习<a
          href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction to HTML</a
        >）以及 CSS 基础（学习<a href="/zh-CN/docs/Learn/CSS/First_steps"
          >CSS first steps</a
        >）。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>了解书写模式对现代 CSS 的重要</td>
    </tr>
  </tbody>
</table>

## 什么是书写模式

CSS 中的书写模式是指文本的排列方向是横向还是纵向的。{{cssxref("writing-mode")}} 属性使我们从一种模式切换到另一种模式。为此，你不必使用一种竖向的语言——你还可以更改部分文字的方向以实现创新性的布局。

下面的例子中，我们使用`writing-mode: vertical-rl`对一个标题的显示进行设置。现在，标题文本是竖向的了。竖向文本在平面设计中很常见，也可以为你的网页设计增添更加有趣的外观。

{{EmbedGHLiveSample("css-examples/learn/writing-modes/simple-vertical.html", '100%', 800)}}

[`writing-mode`](/zh-CN/docs/Web/CSS/writing-mode)的三个值分别是：

- `horizontal-tb`: 块流向从上至下。对应的文本方向是横向的。
- `vertical-rl`: 块流向从右向左。对应的文本方向是纵向的。
- `vertical-lr`: 块流向从左向右。对应的文本方向是纵向的。

因此，`writing-mode`属性实际上设定的是页面上块级元素的显示方向——要么是从上到下，要么是从右到左，要么是从左到右。而这决定了文本的方向。

## 书写模式、块级布局和内联布局

我们已经讨论了块级布局和内联布局（[block and inline layout](/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model#Block_and_inline_boxes)），也知道外部显示类型元素分为块级元素和内联元素。如上所述，块级显示和内联显示与文本的书写模式（而非屏幕的物理显示）密切相关。如果你使用书写模式的显示是横向的，如英文，那么块在页面上的显示就是从上到下的。

用一个例子可以更清楚地说明这一点。下一个例子中有两个盒子，分别包含一个标题和一个段落。第一个盒子应用的是`writing-mode: horizontal-tb`，这是一个从上到下的横向的书写模式。第二个盒子应用的是`writing-mode: vertical-rl`，这是一个从右到左的纵向的书写模式。

{{EmbedGHLiveSample("css-examples/learn/writing-modes/block-inline.html", '100%', 1200)}}

当我们切换书写模式时，我们也在改变块和内联文本的方向。`horizontal-tb`书写模式下块的方向是从上到下的横向的，而 `vertical-rl`书写模式下块的方向是从右到左的纵向的。因此，块维度指的总是块在页面书写模式下的显示方向。而内联维度指的总是文本方向。

这张图展示了在水平书写模式下的两种维度。![](horizontal-tb.png)

这张图片展示了纵向书写模式下的两种维度。

![](vertical.png)

一旦你开始接触 CSS 布局，尤其是更新的布局方法，这些关于块级元素和内联元素的概念会变得非常重要。我之后会返回来再看。

### 方向

除了书写模式，我们还可以设置文本方向。正如上面所言，有些语言（如阿拉伯语）是横向书写的，但是是从右向左。当你在对页面布局进行创新时，你可能不这么使用——如果你只是想将某部分内容放到右边排列下来，还有其他方法可以选择——然而，重要的是能意识到，这其实是 CSS 本身功能的一部分。网页可不仅限于从左向右排列的语言！

由于书写模式和文本方向都是可变的，新的 CSS 布局方法不再定义从左到右和从上到下，而是将这些连同内联元素和块级元素的*开头*和*结尾*一起考量。现在不必过于担心，但是带着这些概念开始你的布局，你会发现这对你掌握 CSS 非常有用。

## 逻辑属性和逻辑值

我们之所以要在这里探讨书写模式和方向，是因为目前为止我们已经了解了很多与屏幕的物理显示密切相关的很多属性，而书写模式和方向在水平书写模式下会很有意义。

让我们再来看看那两个盒子——一个用`horizontal-tb`设定了书写模式，一个用`vertical-rl`设定了书写模式。我为这两个盒子分别设定了宽度（ {{cssxref("width")}}）。可以看到，当盒子处于纵向书写模式下时，宽度也发生了变化，从而导致文本超出了盒子的范围。

{{EmbedGHLiveSample("css-examples/learn/writing-modes/width.html", '100%', 1200)}}

通过这一些列调整，我们想要的实际上是使宽和高随着书写模式一起变化。当处于纵向书写模式之下时，我们希望盒子可以向横向模式下一样得到拓宽。

为了更容易实现这样的转变，CSS 最近开发了一系列映射属性。这些属性用逻辑（**logical**）和相对变化（**flow relative**）代替了像宽`width`和高`height`一样的物理属性。

横向书写模式下，映射到`width`的属性被称作内联尺寸（{{cssxref("inline-size")}}）——内联维度的尺寸。而映射`height`的属性被称为块级尺寸（{{cssxref("block-size")}}），这是块级维度的尺寸。下面的例子展示了替换掉`width`的`inline-size`是如何生效的。

{{EmbedGHLiveSample("css-examples/learn/writing-modes/inline-size.html", '100%', 1200)}}

### 逻辑外边距、边框和内边距属性

我们在前面两节中学习了 CSS 的盒模型和 CSS 边框。在外边距、边框和内边距属性中，你会发现许多物理属性，例如 {{cssxref("margin-top")}}、 {{cssxref("padding-left")}}和 {{cssxref("border-bottom")}}。就像 width 和 height 有映射，这些属性也有相应的映射。

`margin-top`属性的映射是{{cssxref("margin-block-start")}}——总是指向块级维度开始处的边距。

{{cssxref("padding-left")}}属性映射到 {{cssxref("padding-inline-start")}}，这是应用到内联开始方向（这是该书写模式文本开始的地方）上的内边距。{{cssxref("border-bottom")}}属性映射到的是{{cssxref("border-block-end")}}，也就是块级维度结尾处的边框。

下面是物理和逻辑属性之间的对比。

**如果你用`writing-mode`把盒子`.box`的书写模式改为`vertical-rl`，你将会看到尽管盒子的物理方向变了，盒子的物理属性仍然没变，然而逻辑属性会随着书写模式一起改变。**

**你还可以看到，二级标题{{htmlelement("h2")}}有一个黑色的底部边框`border-bottom`。你知道如何使得底部边框无论在那种书写模式下都位于文本的下方吗？**

{{EmbedGHLiveSample("css-examples/learn/writing-modes/logical-mbp.html", '100%', 1200)}}

对于每一个普通边距，都有许多属性可以参考，你可以在 MDN 页面（[Logical Properties and Values](/zh-CN/docs/Web/CSS/CSS_logical_properties_and_values)）查看所有映射属性。

### 逻辑值

目前为止我们看到的都是逻辑属性的名称。还有一些属性的取值是一些物理值（如`top`、`right`、`bottom`和`left`）。这些值同样拥有逻辑值映射（`block-start`、`inline-end`、`block-end`和`inline-start`）。

例如，你可以将一张图片移到左边，并使文本环绕图片。你可以将`left`替换为`inline-start` ，就像下面的例子中一样。

**将这个例子的书写模式改为`vertical-rl`，看看图片会发生什么。将`inline-start`改为`inline-end`来改变图片的移动。**

{{EmbedGHLiveSample("css-examples/learn/writing-modes/float.html", '100%', 1200)}}

之类，我们同样使用逻辑边距值来保证在任何书写模式下边距的位置都是对的。

> **备注：** [`float`](/zh-CN/docs/CSS/float)的逻辑值暂时只有 Firefox 和 Firefox for Android 支持，上面的例子可能无法生效。

### 应该使用物理属性还是逻辑属性呢？

逻辑属性是在物理属性之后出现的，因而最近才开始在浏览器中应用。你可以通过查看 MDN 的属性页面来了解浏览器对逻辑属性的支持情况。如果你并没有应用多种书写模式，那么现在你可能更倾向于使用物理属性，因为这些在你使用弹性布局和网格布局时非常有用。

## 总结

本章介绍的概念在 CSS 的重要性越来越大。了解块级方向和内联方向，以及文本的排列方向如何随书写模式发生变化，将来会非常有用。即便你仅使用横向的书写模式，这也能帮助你了解。

在下一部分，我们将会看一下 CSS 中的溢出。

{{PreviousMenuNext("Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks")}}
