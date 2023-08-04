---
title: 盒模型
slug: Learn/CSS/Building_blocks/The_box_model
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks")}}

在 CSS 中，所有的元素都被一个个的“盒子（box）”包围着，理解这些“盒子”的基本原理，是我们使用 CSS 实现准确布局、处理元素排列的关键。

本文围绕“盒模型”为主题展开。旨在于完成学习后，您能够在“理解盒装模型原理”的基础上，完成更加复杂的布局任务。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识（Prerequisites）:</th>
      <td>
        <p>
          基本的计算机知识，<a
            href="/zh-CN/Learn/Getting_started_with_the_web/Installing_basic_software"
            >安装基本的软件</a
          >，<a
            href="/zh-CN/Learn/Getting_started_with_the_web/Dealing_with_files"
            >文件处理</a
          >基本知识，HTML 基础知识 (如果不了解 HTML，请移步
          <a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML"
            >学习 HTML 入门</a
          >)，以及 CSS 如何工作的基本常识 (如果不了解 CSS，请移步
          <a href="/zh-CN/docs/Learn/CSS/First_steps">学习 CSS 第一步</a>.)
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">学习目标（Objective）:</th>
      <td>
        学习盒模型的基本理论，了解盒装模型的工作原理，了解盒模型与替代模型的区别以及如何进行切换。
      </td>
    </tr>
  </tbody>
</table>

## 块级盒子（Block box）和 内联盒子（Inline box）

在 CSS 中我们广泛地使用两种“盒子” —— **块级盒子** (**block box**) 和 **内联盒子** (**inline box**)。这两种盒子会在**页面流**（page flow）和元素之间的关系方面表现出不同的行为：

一个被定义成块级的（block）盒子会表现出以下行为：

- 盒子会在内联的方向上扩展并占据父容器在该方向上的所有可用空间，在绝大数情况下意味着盒子会和父容器一样宽
- 每个盒子都会换行
- {{cssxref("width")}} 和 {{cssxref("height")}} 属性可以发挥作用
- 内边距（padding）, 外边距（margin）和 边框（border）会将其他元素从当前盒子周围“推开”

除非特殊指定，诸如标题 (`<h1>`等) 和段落 (`<p>`) 默认情况下都是块级的盒子。

如果一个盒子对外显示为 `inline`，那么他的行为如下：

- 盒子不会产生换行。
- {{cssxref("width")}} 和 {{cssxref("height")}} 属性将不起作用。
- 垂直方向的内边距、外边距以及边框会被应用但是不会把其他处于 `inline` 状态的盒子推开。
- 水平方向的内边距、外边距以及边框会被应用且会把其他处于 `inline` 状态的盒子推开。

用做链接的 `<a>` 元素、 `<span>`、 `<em>` 以及 `<strong>` 都是默认处于 `inline` 状态的。

我们通过对盒子{{cssxref("display")}} 属性的设置，比如 `inline` 或者 `block` ，来控制盒子的外部显示类型。

## 补充：内部和外部显示类型

在这里最好也解释下**内部** 和 **外部** 显示类型。如上所述，css 的 box 模型有一个外部显示类型，来决定盒子是块级还是内联。

同样盒模型还有内部显示类型，它决定了盒子内部元素是如何布局的。默认情况下是按照 **[正常文档流](/zh-CN/docs/Learn/CSS/CSS_layout/Normal_Flow) **布局，也意味着它们和其他块元素以及内联元素一样 (如上所述).

但是，我们可以通过使用类似 `flex` 的 `display` 属性值来更改内部显示类型。如果设置 `display: flex`，在一个元素上，外部显示类型是 `block`，但是内部显示类型修改为 `flex`。该盒子的所有直接子元素都会成为 flex 元素，会根据[弹性盒子（Flexbox）](/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox)规则进行布局，稍后您将了解这些规则。

> **备注：** 想要了解更多有关显示值以及盒子在块和内联布局中的工作原理，请参阅[常规流中的块和内联布局](/zh-CN/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)。

当你进一步了解 css 布局的更多细节的时候，你会了解到 `flex`，和其他内部显示类型会用到的值，例如 [`grid`](/zh-CN/docs/Learn/CSS/CSS_layout/Grids) 。

块级和内联布局是 web 上默认的行为 —— 正如上面所述，它有时候被称为 _正常文档流_，因为如果没有其他说明，我们的盒子布局默认是块级或者内联。

## 不同显示类型的例子

让我们继续看看别的例子。下面三个 html 元素，都有一个外部显示类型 `block`。第一个是一个段落，在 CSS 中加了边框。浏览器把它渲染成一个块级盒子，所以段落从新的一行开始，而且宽度占满一行。

第二个是一个列表，布局属性是 `display: flex`。将在容器中建立一个 flex 布局，但是每个列表是一个块级元素 —— 像段落一样 —— 会充满整个容器的宽度并且换行。

下面有个块级段落，里面有两个 `<span>` 元素。正常情况下是 `inline`，但是其中一个加了 block 类，设置属性 `display: block`。

{{EmbedGHLiveSample("css-examples/learn/box-model/block.html", '100%', 1000)}}

我们可以看到 `inline` 元素在下面例子中的表现。 `<span>` 在第一段默认是内联元素所以不换行。

还有一个 `<ul>` 设置为 `display: inline-flex`，使得在一些 flex 元素外创建一个内联框。

最后设置两个段落为 `display: inline`。inline flex 容器和段落在一行上而不是像块级元素一样换行。

**你可以修改 `display: inline` 为 `display: block` 或者 `display: inline-flex` 改为 `display: flex` 来观察显示模式切换。**

{{EmbedGHLiveSample("css-examples/learn/box-model/inline.html", '100%', 1000)}}

在后面的内容中会遇到诸如弹性盒子布局的内容；现在需要记住的是， `display` 属性可以改变盒子的外部显示类型是块级还是内联，这将会改变它与布局中的其他元素的显示方式。

剩下的内容，我们会专注于外部显示类型。

## 什么是 CSS 盒模型？

完整的 CSS 盒模型应用于块级盒子，内联盒子只使用盒模型中定义的部分内容。模型定义了盒的每个部分 —— margin, border, padding, and content —— 合在一起就可以创建我们在页面上看到的内容。为了增加一些额外的复杂性，有一个标准的和替代（IE）的盒模型。

### 盒模型的各个部分

CSS 中组成一个块级盒子需要：

- **Content box**: 这个区域是用来显示内容，大小可以通过设置 {{cssxref("width")}} 和 {{cssxref("height")}}.
- **Padding box**: 包围在内容区域外部的空白区域；大小通过 {{cssxref("padding")}} 相关属性设置。
- **Border box**: 边框盒包裹内容和内边距。大小通过 {{cssxref("border")}} 相关属性设置。
- **Margin box**: 这是最外面的区域，是盒子和其他元素之间的空白区域。大小通过 {{cssxref("margin")}} 相关属性设置。

如下图：

![Diagram of the box model](box-model.png)

### 标准盒模型

在标准模型中，如果你给盒设置 `width` 和 `height`，实际设置的是 _content box_。padding 和 border 再加上设置的宽高一起决定整个盒子的大小。见下图。

假设定义了 `width`, `height`, `margin`, `border`, and `padding`:

```css
.box {
  width: 350px;
  height: 150px;
  margin: 25px;
  padding: 25px;
  border: 5px solid black;
}
```

如果使用标准模型，实际占用空间的宽高分别为：宽度 = 410px (350 + 25 + 25 + 5 + 5)，高度 = 210px (150 + 25 + 25 + 5 + 5)。

![Showing the size of the box when the standard box model is being used.](standard-box-model.png)

> **备注：** margin 不计入实际大小 —— 当然，它会影响盒子在页面所占空间，但是影响的是盒子外部空间。盒子的范围到边框为止 —— 不会延伸到 margin。

### 替代（IE）盒模型

你可能会认为盒子的大小还要加上边框和内边距，这样很麻烦，而且你的想法是对的 ! 因为这个原因，css 还有一个替代盒模型。使用这个模型，所有宽度都是可见宽度，所以内容宽度是该宽度减去边框和填充部分。使用上面相同的样式得到 (width = 350px, height = 150px).

![Showing the size of the box when the alternate box model is being used.](alternate-box-model.png)

默认浏览器会使用标准模型。如果需要使用替代模型，您可以通过为其设置 `box-sizing: border-box` 来实现。这样就可以告诉浏览器使用 `border-box` 来定义区域，从而设定您想要的大小。

```css
.box {
  box-sizing: border-box;
}
```

如果你希望所有元素都使用替代模式，而且确实很常用，设置 `box-sizing` 在 `<html>` 元素上，然后设置所有元素继承该属性，正如下面的例子。如果想要深入理解，请看 [the CSS Tricks article on box-sizing](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/)。

```css
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
```

> **备注：** 一个有趣的历史记录 ——Internet Explorer 默认使用替代盒模型，没有可用的机制来切换。（译者注：IE8+ 支持使用 `box-sizing` 进行切换）

## 玩转盒模型

下面的例子中，你可以看到两个盒子。都有类 `.box`，给了相同的 `width`, `height`, `margin`, `border`, and `padding`。唯一区别是第二个设置了替代模型。

**你能改变第二个盒子的大小 (通过添加 CSS 到 `.alternate` 类中) 让它和第一个盒子宽高一样吗？**

{{EmbedGHLiveSample("css-examples/learn/box-model/box-models.html", '100%', 1000)}}

> **备注：** [单击此处查看答案](https://github.com/mdn/css-examples/blob/master/learn/solutions.md#the-box-model)。

### 使用调试工具来查看盒模型

[浏览器开发者工具](/zh-CN/docs/Learn/Common_questions/What_are_browser_developer_tools)可以使你更容易地理解 box 模型。如果你在 Firefox 的 DevTools 中查看一个元素，你可以看到元素的大小以及它的外边距、内边距和边框。这是一个很好的检查元素大小的方式，可以便捷的判断你的盒子大小是否符合预期 !

![Inspecting the box model of an element using Firefox DevTools](box-model-devtools.png)

## 外边距，内边距，边框

您已经在上面的示例中看到了{{cssxref("margin")}}、{{cssxref("padding")}}和{{cssxref("border")}}属性。该示例中使用的是属性的**简写**，允许我们一次设置盒子的四个边。这些简写等价于分别控制盒子的不同边的普通写法。

接下来，我们更详细地研究这些属性：

### 外边距

外边距是盒子周围一圈看不到的空间。它会把其他元素从盒子旁边推开。外边距属性值可以为正也可以为负。设置负值会导致和其他内容重叠。无论使用标准模型还是替代模型，外边距总是在计算可见部分后额外添加。

我们可以使用{{cssxref("margin")}}属性一次控制一个元素的所有边距，或者每边单独使用等价的普通属性控制：

- {{cssxref("margin-top")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}

**在下面的示例中，尝试更改外边距的值，来查看当前元素和其包含元素，在外边距设置为正时是如何推开周边元素，以及设置为负时，是如何收缩空间的。**

{{EmbedGHLiveSample("css-examples/learn/box-model/margin.html", '100%', 1000)}}

#### 外边距折叠

理解外边距的一个关键是外边距折叠的概念。如果你有两个外边距相接的元素，这些外边距将合并为一个外边距，即最大的单个外边距的大小。

在下面的例子中，我们有两个段落。顶部段落的页 `margin-bottom`为 50px。第二段的`margin-top` 为 30px。因为外边距折叠的概念，所以框之间的实际外边距是 50px，而不是两个外边距的总和。

**您可以通过将第 2 段的 `margin-top` 设置为 0 来测试它。两个段落之间的可见边距不会改变——它保留了第一个段落 `margin-bottom`设置的 50 像素。**

{{EmbedGHLiveSample("css-examples/learn/box-model/margin-collapse.html", '100%', 800)}}

有许多规则规定了什么时候外边距会折叠，什么时候不会折叠。相关更多信息，请参阅[外边距重叠](/zh-CN/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)。现在首先要记住的事情是，外边距会折叠这个事情。如果你用外边距创建空间而没有得到你想要的效果，那这可能就是这个原因。

### 边框

边框是在边距和填充框之间绘制的。如果您正在使用标准的盒模型，边框的大小将添加到框的宽度和高度。如果您使用的是替代盒模型，那么边框的大小会使内容框更小，因为它会占用一些可用的宽度和高度。

为边框设置样式时，有大量的属性可以使用——有四个边框，每个边框都有样式、宽度和颜色，我们可能需要对它们进行操作。

可以使用{{cssxref("border")}}属性一次设置所有四个边框的宽度、颜色和样式。

分别设置每边的宽度、颜色和样式，可以使用：

- {{cssxref("border-top")}}
- {{cssxref("border-right")}}
- {{cssxref("border-bottom")}}
- {{cssxref("border-left")}}

设置所有边的颜色、样式或宽度，请使用以下属性：

- {{cssxref("border-width")}}
- {{cssxref("border-style")}}
- {{cssxref("border-color")}}

设置单边的颜色、样式或宽度，可以使用最细粒度的普通属性之一：

- {{cssxref("border-top-width")}}
- {{cssxref("border-top-style")}}
- {{cssxref("border-top-color")}}
- {{cssxref("border-right-width")}}
- {{cssxref("border-right-style")}}
- {{cssxref("border-right-color")}}
- {{cssxref("border-bottom-width")}}
- {{cssxref("border-bottom-style")}}
- {{cssxref("border-bottom-color")}}
- {{cssxref("border-left-width")}}
- {{cssxref("border-left-style")}}
- {{cssxref("border-left-color")}}

**设置边框的颜色、样式或宽度，可以使用最细粒度的普通属性或者简写属性。在下面的示例中，我们使用了各种普通属性或者简写属性来创建边框。尝试一下不同的属性，以检查您是否理解它们是如何工作的。MDN 中的边框属性页面为您提供可用的不同边框样式的信息。**

{{EmbedGHLiveSample("css-examples/learn/box-model/border.html", '100%', 1000)}}

### 内边距

内边距位于边框和内容区域之间。与外边距不同，您不能有负数量的内边距，所以值必须是 0 或正的值。应用于元素的任何背景都将显示在内边距后面，内边距通常用于将内容推离边框。

我们可以使用{{cssxref("padding")}}简写属性控制元素所有边，或者每边单独使用等价的普通属性：

- {{cssxref("padding-top")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}

**如果在下面的示例中更改类`.box`的内边距值，您可以看到，这将更改文本开始的位置。**

**您还可以更改类`.container`的内边距，这将在容器和方框之间留出空间。任何元素上的内边距都可以更改，并在其边界和元素内部的任何内容之间留出空间。**

{{EmbedGHLiveSample("css-examples/learn/box-model/padding.html", '100%', 800)}}

## 盒子模型和内联盒子

以上所有的方法都完全适用于块级盒子。有些属性也可以应用于内联盒子，例如由`<span>`元素创建的那些内联盒子。

在下面的示例中，我们在一个段落中使用了`<span>`，并对其应用了宽度、高度、边距、边框和内边距。可以看到，宽度和高度被忽略了。外边距、内边距和边框是生效的，但它们不会改变其他内容与内联盒子的关系，因此内边距和边框会与段落中的其他单词重叠。

{{EmbedGHLiveSample("css-examples/learn/box-model/inline-box-model.html", '100%', 800)}}

## 使用 display: inline-block

display 有一个特殊的值，它在内联和块之间提供了一个中间状态。这对于以下情况非常有用：您不希望一个项切换到新行，但希望它可以设定宽度和高度，并避免上面看到的重叠。

一个元素使用 `display: inline-block`，实现我们需要的块级的部分效果：

- 设置`width` 和`height` 属性会生效。
- `padding`, `margin`, 以及`border` 会推开其他元素。

但是，它不会跳转到新行，如果显式添加 `width` 和 `height` 属性，它只会变得比其内容更大。

**在下一个示例中，我们将 `display: inline-block` 添加到 `<span>` 元素中。尝试将此更改为 `display: block` 或完全删除行，以查看显示模型中的差异**。

{{EmbedGHLiveSample("css-examples/learn/box-model/inline-block.html", '100%', 800)}}

当您想要通过添加内边距使链接具有更大的命中区域时，这是很有用的。`<a>` 是像 `<span>` 一样的内联元素；你可以使用 `display: inline-block` 来设置内边距，让用户更容易点击链接。

这种情况在导航栏中很常见。下面的导航使用 flexbox 显示在一行中，我们为 `<a>` 元素添加了内边距，因为我们希望能够在 `<a>` 在鼠标移动到上面时改变背景色。内边距似乎覆盖了 `<ul>` 元素上的边框。这是因为 `<a>` 是一个内联元素。

使用 `.links-list a` 选择器将 `display: inline-block` 添加到样式规则中，你将看到它是如何通过内边距推开其他元素来修复这个问题的。

{{EmbedGHLiveSample("css-examples/learn/box-model/inline-block-nav.html", '100%', 600)}}

## 总结

这就是你需要了解的关于盒子模型的大部分内容。如果以后你发现对于盒模型的布局仍有困惑，你将会回来温故这些内容。

在下一节课中，我们将看看如何使用[背景和边框](/zh-CN/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)来使你的普通盒子看起来更有趣。

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks")}}
