---
title: 处理不同方向的文本
slug: Learn_web_development/Core/Styling_basics/Handling_different_text_directions
original_slug: Learn/CSS/Building_blocks/Handling_different_text_directions
l10n:
  sourceCommit: 68772e87a84d6d6fc6a8e377dea4998afbeb511c
---

{{LearnSidebar}}

目前为止我们在 CSS 学习中遇到的许多属性和属性值与显示器的物理尺度紧密相关。例如，我们会在盒子的上侧、右侧、下侧、左侧设置边框。这些物理尺寸与水平排布的文本相得益彰，并且，默认浏览器对方向从左到右的文本（如英文或法文）的支持，要优于从右到左的文本（如阿拉伯语）的支持。

但近年来，CSS 不断发展，以更好地支持不同方向的内容，包括从右到左和从上到下的文本（如日文）——这些不同的方向属性被称为**书写模式**。随着学习的深入，当你开始试着对页面进行布局时，对书写模式的了解将会对你很有帮助，为此我们在这里加以介绍。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        <a
          href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >安装了基本的软件</a
        >，了解基本的<a
          href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >文件管理知识</a
        >，具有 HTML 基础（参见 <a
          href="/zh-CN/docs/Learn_web_development/Core/Structuring_content"
          >HTML 介绍</a
        >），并了解 CSS 如何工作（参见 <a href="/zh-CN/docs/Learn_web_development/Core/Styling_basics"
          >CSS 第一步</a
        >）。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>了解书写模式对现代 CSS 的重要性</td>
    </tr>
  </tbody>
</table>

## 什么是书写模式？

CSS 中的书写模式是指文本的排列方向是横向还是纵向的。{{cssxref("writing-mode")}} 属性使我们从一种模式切换到另一种模式。为此，你不必使用一种竖向的语言——你还可以更改部分文字的方向以实现创新性的布局。

在下面的示例中，我们使用 `writing-mode: vertical-rl` 显示了一个标题。现在文本垂直显示。垂直文本在图形设计中很常见，可以为网页设计添加更有趣的界面外观。

```html live-sample___simple-vertical
<h1>玩转书写模式</h1>
```

```css live-sample___simple-vertical
body {
  font-family: sans-serif;
  height: 300px;
}
h1 {
  writing-mode: vertical-rl;
  color: white;
  background-color: black;
  padding: 10px;
}
```

{{EmbedLiveSample("simple-vertical", "", "350px")}}

[`writing-mode`](/zh-CN/docs/Web/CSS/writing-mode) 属性的三种可能的值分别是：

- `horizontal-tb`: 区块流向从上至下。对应的文本方向是横向的。
- `vertical-rl`: 区块流向从右向左。对应的文本方向是纵向的。
- `vertical-lr`: 区块流向从左向右。对应的文本方向是纵向的。

因此，`writing-mode` 属性实际上设定的是页面上块级元素的显示方向——要么是从上到下，要么是从右到左，要么是从左到右。而这决定了文本的方向。

## 书写模式、块级布局和行级布局

我们已经讨论了[块级布局和行级布局](/zh-CN/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)，以及有些东西显示为块级元素，有些显示为行级元素。如上文所述，区块元素和行内元素与文档的书写模式有关，而与物理屏幕无关。只有在使用横向显示文本的书写模式（如英语）时，才会从页面顶部到底部显示块元素。

用一个例子可以更清楚地说明这一点。下一个例子中有两个盒子，分别包含一个标题和一个段落。第一个盒子应用的是 `writing-mode: horizontal-tb`，这是一个从上到下的横向的书写模式。第二个盒子应用的是 `writing-mode: vertical-rl`，这是一个从右到左的纵向的书写模式。

```html live-sample___block-inline
<div class="wrapper">
  <div class="box horizontal">
    <h2>标题</h2>
    <p>用 CSS 演示书写模式的段落。</p>
  </div>
  <div class="box vertical">
    <h2>标题</h2>
    <p>用 CSS 演示书写模式的段落。</p>
  </div>
</div>
```

```css live-sample___block-inline
body {
  font-family: sans-serif;
  height: 300px;
}
.wrapper {
  display: flex;
}

.box {
  border: 1px solid #ccc;
  padding: 0.5em;
  margin: 10px;
}

.horizontal {
  writing-mode: horizontal-tb;
}

.vertical {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("block-inline", "", "350px")}}

当我们切换书写模式时，我们也在改变哪里显示为块级，哪里显示为行级。`horizontal-tb` 书写模式下块向是从上到下的；而 `vertical-rl` 书写模式下块向是从右到左的。因此，**块向维度**指的总是区块在页面书写模式下的显示方向。而**行向维度**指的总是文本方向。

这张图展示了在水平书写模式下的两种维度。![水平书写模式下的区块和行向轴。](horizontal-tb.png)

这张图片展示了纵向书写模式下的两种维度。

![纵向书写模式下的区块和行向轴。](vertical.png)

一旦你开始接触 CSS 布局，尤其是更新的布局方法，这些关于块级元素和行级元素的概念会变得非常重要。稍后还会讨论这个问题。

### 方向

除了书写模式，我们还有文字方向。如上所述，有些语言（如阿拉伯语）是水平书写的，但却是从右向左。这并不是你可能会在创意意义上使用的东西——如果你想把某些东西排在右边，有其他方法可以做到——不过，重要的是要理解这是 CSS 特性的一部分。Web 中的语言并非只能从左到右显示！

由于书写模式和文本方向都是可变的，新的 CSS 布局方法不再定义从左到右和从上到下，而是将这些连同行级元素和块级元素的*开头*和*结尾*一起考量。现在不必过于担心，但是带着这些概念开始你的布局，你会发现这对你掌握 CSS 非常有用。

## 逻辑属性和逻辑值

我们之所以要在这里探讨书写模式和方向，是因为目前为止我们已经了解了很多与屏幕的物理显示密切相关的很多属性，而书写模式和方向在水平书写模式下会很有意义。

让我们再来看看那两个盒子——一个用 `horizontal-tb` 设定了书写模式，一个用 `vertical-rl` 设定了书写模式。我为这两个盒子分别设定了宽度（{{cssxref("width")}}）。可以看到，当盒子处于纵向书写模式下时，宽度也发生了变化，从而导致文本超出了盒子的范围。

```html live-sample___width
<div class="wrapper">
  <div class="box horizontal">
    <h2>标题</h2>
    <p>用 CSS 演示书写模式的段落。</p>
    <p>这些盒子具有宽度。</p>
  </div>
  <div class="box vertical">
    <h2>标题</h2>
    <p>用 CSS 演示书写模式的段落。</p>
    <p>这些盒子具有宽度。</p>
  </div>
</div>
```

```css live-sample___width
body {
  font-family: sans-serif;
  height: 300px;
}
.wrapper {
  display: flex;
}

.box {
  border: 1px solid #ccc;
  padding: 0.5em;
  margin: 10px;
  width: 100px;
}

.horizontal {
  writing-mode: horizontal-tb;
}

.vertical {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("width", "", "350px")}}

通过这一些列调整，我们想要的实际上是使宽和高随着书写模式一起变化。当处于纵向书写模式之下时，我们希望盒子可以向横向模式下一样得到拓宽。

为了更容易实现这样的转变，CSS 最近开发了一系列映射属性。这些属性用**逻辑**和**流相对变化**代替了像 `width` 和 `height` 一样的物理属性。

横向书写模式下，映射到 `width` 的属性被称作 {{cssxref("inline-size")}}——行向维度的尺寸。而映射 `height` 的属性被称作 {{cssxref("block-size")}}——块向维度的尺寸。下面的例子展示了替换掉 `width` 的 `inline-size` 是如何生效的。

```html live-sample___inline-size
<div class="wrapper">
  <div class="box horizontal">
    <h2>标题</h2>
    <p>用 CSS 演示书写模式的段落。</p>
    <p>这些盒子具有 inline-size。</p>
  </div>
  <div class="box vertical">
    <h2>标题</h2>
    <p>用 CSS 演示书写模式的段落。</p>
    <p>这些盒子具有 inline-size。</p>
  </div>
</div>
```

```css live-sample___inline-size
.wrapper {
  display: flex;
}

.box {
  border: 1px solid #ccc;
  padding: 0.5em;
  margin: 10px;
  inline-size: 100px;
}

.horizontal {
  writing-mode: horizontal-tb;
}

.vertical {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("inline-size", "", "300px")}}

### 逻辑外边距、边框和内边距属性

我们在前面两节中学习了 CSS 的盒模型和 CSS 边框。在外边距、边框和内边距属性中，你会发现许多物理属性，例如 {{cssxref("margin-top")}}、{{cssxref("padding-left")}} 和 {{cssxref("border-bottom")}}。就像 width 和 height 有映射，这些属性也有相应的映射。

`margin-top` 属性的映射是 {{cssxref("margin-block-start")}}——总是指向块级维度开始处的边距。

{{cssxref("padding-left")}} 属性映射到 {{cssxref("padding-inline-start")}}，这是应用到行首方向（这是该书写模式文本开始的地方）上的内边距。{{cssxref("border-bottom")}} 属性映射到的是 {{cssxref("border-block-end")}}，也就是块级维度结尾处的边框。

下面是物理和逻辑属性之间的对比。

如果你用 `writing-mode` 把盒子 `.box` 的书写模式改为 `vertical-rl`，你将会看到尽管盒子的物理方向变了，盒子的物理属性仍然没变，然而逻辑属性会随着书写模式一起改变。

你还可以看到，二级标题 {{htmlelement("h2")}} 有一个黑色的底部边框 `border-bottom`。你知道如何使得底部边框无论在哪种书写模式下都位于文本的下方吗？

```html live-sample___logical-mbp
<div class="wrapper">
  <div class="box physical">
    <h2>物理属性</h2>
    <p>用 CSS 演示逻辑属性的段落。</p>
  </div>
  <div class="box logical">
    <h2>逻辑属性</h2>
    <p>用 CSS 演示逻辑属性的段落。</p>
  </div>
</div>
```

```css live-sample___logical-mbp
.wrapper {
  display: flex;
  border: 5px solid #ccc;
}

.box {
  margin-right: 30px;
  inline-size: 200px;
  writing-mode: horizontal-tb;
}

.logical {
  margin-block-start: 20px;
  padding-inline-end: 2em;
  padding-block-start: 2px;
  border-block-start: 5px solid pink;
  border-inline-end: 10px dotted rebeccapurple;
  border-block-end: 1em double orange;
  border-inline-start: 1px solid black;
}

.physical {
  margin-top: 20px;
  padding-right: 2em;
  padding-top: 2px;
  border-top: 5px solid pink;
  border-right: 10px dotted rebeccapurple;
  border-bottom: 1em double orange;
  border-left: 1px solid black;
}

h2 {
  border-bottom: 5px solid black;
}
```

{{EmbedLiveSample("logical-mbp", "", "200px")}}

如果考虑到所有单独的边框完整表述，属性的数量是非常庞大的，你可以在[逻辑属性和逻辑值](/zh-CN/docs/Web/CSS/CSS_logical_properties_and_values) MDN 页面上看到所有映射的属性。

### 逻辑值

目前为止我们看到的都是逻辑属性的名称。还有一些属性的取值是一些物理值（如 `top`、`right`、`bottom` 和 `left`）。这些值同样拥有逻辑值映射（`block-start`、`inline-end`、`block-end` 和 `inline-start`）。

例如，你可以将一张图片移到左边，并使文本环绕图片。你可以将 `left` 替换为 `inline-start`，就像下面的例子中一样。

将这个例子的书写模式改为 `vertical-rl`，看看图片会发生什么。将 `inline-start` 改为 `inline-end` 来改变浮动方向：

```html live-sample___float
<div class="wrapper">
  <div class="box logical">
    <img
      alt="星星"
      src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
    <p>
      该盒子使用了逻辑属性。星星图像以 inline-start 形式浮动，在 inline-end 和
      block-end 方向也有内边距。
    </p>
  </div>
</div>
```

```css live-sample___float
.wrapper {
  display: flex;
}

.box {
  margin: 10px;
  padding: 0.5em;
  border: 1px solid #ccc;
  inline-size: 200px;
  writing-mode: horizontal-tb;
}

img {
  float: inline-start;
  margin-inline-end: 10px;
  margin-block-end: 10px;
}
```

{{EmbedLiveSample("float", "", "200px")}}

我们同样使用逻辑边距值来保证在任何书写模式下边距的位置都是对的。

### 应该使用物理属性还是逻辑属性呢？

逻辑属性和值比物理属性和值更新颖，因此最近才在浏览器中实现。你可以查看 MDN 上的任何属性页面，了解浏览器支持的历史。如果不使用多种书写模式，那么目前可能更愿意使用物理版本。不过，我们预计人们最终会在大多数情况下过渡到逻辑版本，因为一旦开始使用弹性盒和网格等布局方法，逻辑版本就会变得非常有意义。

## 技能测试！

本文已经结束，但你还记得最重要的信息吗？在继续学习之前，可以找到一些进一步的测试，以验证是否保留了这些信息——请参阅[技能测试：书写模式和逻辑属性](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Writing_Modes_Tasks)。

## 总结

本课讲解的概念在 CSS 中变得越来越重要。了解块级方向和行级方向，以及文字流如何随着书写模式的改变而改变，对今后的工作非常有用。即使你从未使用过水平书写模式以外的其他书写模式，也能帮助你理解 CSS。
