---
title: 定位
slug: Learn/CSS/CSS_layout/Positioning
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout/Practical_positioning_examples", "Learn/CSS/CSS_layout")}}

定位允许你从正常的文档流布局中取出元素，并使它们具有不同的行为，例如放在另一个元素的上面，或者始终保持在浏览器视窗内的同一位置。本文解释的是定位 ({{cssxref("position")}}) 的各种不同值，以及如何使用它们。

<table>
  <tbody>
    <tr>
      <th>预备知识：</th>
      <td>
        HTML 基础 (学习
        <a href="/zh-CN/docs/learn/HTML/Introduction_to_HTML">HTML 导学</a>) 和
        CSS 怎样工作的 (学习<a href="/zh-CN/docs/Learn/CSS/Introduction_to_CSS">
          CSS 导学</a
        >)
      </td>
    </tr>
    <tr>
      <th>目的：</th>
      <td>了解 CSS 定位的工作原理</td>
    </tr>
  </tbody>
</table>

## 文档流

定位是一个相当复杂的话题，所以我们深入了解代码之前，让我们审视一下布局理论，并让我们了解它的工作原理。

首先，围绕元素内容添加任何内边距、边界和外边距来布置单个元素盒子——这就是[盒模型](/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model) ，我们前面看过。默认情况下，块级元素的内容宽度是其父元素的宽度的 100％，并且与其内容一样高。内联元素高宽与他们的内容高宽一样。你不能对内联元素设置宽度或高度——它们只是位于块级元素的内容中。如果要以这种方式控制内联元素的大小，则需要将其设置为类似块级元素 `display: block;`。

这只是解释了单个元素，但是元素相互之间如何交互呢？**正常的布局流**（在布局介绍文章中提到）是将元素放置在浏览器视口内的系统。默认情况下，块级元素在视口中垂直布局——每个都将显示在上一个元素下面的新行上，并且它们的外边距将分隔开它们。

内联元素表现不一样——它们不会出现在新行上；相反，它们互相之间以及任何相邻（或被包裹）的文本内容位于同一行上，只要在父块级元素的宽度内有空间可以这样做。如果没有空间，那么溢流的文本或元素将向下移动到新行。

如果两个相邻元素都在其上设置外边距，并且两个外边距接触，则两个外边距中的较大者保留，较小的一个消失——这叫[外边距折叠](/zh-CN/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing), 我们之前也遇到过。

让我们来看一个简单的例子来解析这一切：

```html
<h1>Basic document flow</h1>

<p>
  I am a basic block level element. My adjacent block level elements sit on new
  lines below me.
</p>

<p>
  By default we span 100% of the width of our parent element, and we are as tall
  as our child content. Our total width and height is our content + padding +
  border width/height.
</p>

<p>
  We are separated by our margins. Because of margin collapsing, we are
  separated by the width of one of our margins, not both.
</p>

<p>
  inline elements <span>like this one</span> and <span>this one</span> sit on
  the same line as one another, and adjacent text nodes, if there is space on
  the same line. Overflowing inline elements will
  <span>wrap onto a new line if possible (like this one containing text)</span>,
  or just go on to a new line if not, much like this image will do:
  <img src="long.jpg" />
</p>
```

```css
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}
```

{{ EmbedLiveSample('文档流', '100%', 500) }}

在我们阅读本文时，我们将多次重复这个例子，因为我们要展示不同定位选项的效果。

如果可能，我们希望你在本地计算机上跟随练习——从 GitHub 仓库下载一个 [`0_basic-flow.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/0_basic-flow.html) ([源代码](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/1_static-positioning.html)) 然后用它作为我们的起步点。

## 介绍定位

定位的整个想法是允许我们覆盖上面描述的基本文档流行为，以产生有趣的效果。如果你想稍微改变布局中一些盒子的位置，使它们的默认布局流程位置稍微有点古怪，不舒服的感觉呢？定位是你的工具。或者，如果你想要创建一个浮动在页面其他部分顶部的 UI 元素，并且/或者始终停留在浏览器窗口内的相同位置，无论页面滚动多少？定位使这种布局工作成为可能。

有许多不同类型的定位，你可以对 HTML 元素生效。要使某个元素上的特定类型的定位，我们使用{{cssxref("position")}}属性。

### 静态定位

静态定位是每个元素获取的默认值——它只是意味着“将元素放入它在文档布局流中的正常位置 ——这里没有什么特别的。

为了演示这一点，并为以后的部分设置示例，首先在 HTML 中添加一个`positioned` 的 `class` 到第二个{{htmlelement("p")}}：

```html
<p class="positioned">...</p>
```

现在，将以下规则添加到 CSS 的底部：

```css
.positioned {
  position: static;
  background: yellow;
}
```

如果现在保存和刷新，除了第 2 段的更新的背景颜色，根本没有差别。这很好——正如我们之前所说，静态定位是默认行为！

> **备注：** 你可以在 [`1_static-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/1_static-positioning.html) 查看这个例子 ([see source code](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/1_static-positioning.html))。

### 相对定位

相对定位是我们将要看的第一个位置类型。它与静态定位非常相似，占据在正常的文档流中，除了你仍然可以修改它的最终位置，包括让它与页面上的其他元素重叠。让我们继续并更新代码中的 `position` 属性：

```css
position: relative;
```

如果你在此阶段保存并刷新，则结果根本不会发生变化。那么如何修改元素的位置呢？你需要使用{{cssxref("top")}}，{{cssxref("bottom")}}，{{cssxref("left")}}和{{cssxref("right")}}属性，我们将在下一节中解释。

### 介绍 top、bottom、left 和 right

{{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}}, 和 {{cssxref("right")}} 来精确指定要将定位元素移动到的位置。要尝试这样做，请在 CSS 中的 `.positioned` 规则中添加以下声明：

```css
top: 30px;
left: 30px;
```

> **备注：** 这些属性的值可以采用逻辑上期望的任何单位 ——px，mm，rems，％等。

如果你现在保存和刷新，你会得到一个这样的结果：

```html hidden
<h1>Relative positioning</h1>

<p>
  I am a basic block level element. My adjacent block level elements sit on new
  lines below me.
</p>

<p class="positioned">
  By default we span 100% of the width of our parent element, and our are as
  tall as our child content. Our total width and height is our content + padding
  + border width/height.
</p>

<p>
  We are separated by our margins. Because of margin collapsing, we are
  separated by the width of one of our margins, not both.
</p>

<p>
  inline elements <span>like this one</span> and <span>this one</span> sit on
  the same line as one another, and adjacent text nodes, if there is space on
  the same line. Overflowing inline elements
  <span>wrap onto a new line if possible — like this one containing text</span>,
  or just go on to a new line if not, much like this image will do:
  <img src="long.jpg" />
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: relative;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('介绍 top、bottom、left 和 right', '100%', 500) }}

酷，是吗？好吧，所以这个结果这可能不是你期待的——为什么它移动到底部和右边，但我们指定顶部和左边？听起来不合逻辑，但这只是相对定位工作的方式——你需要考虑一个看不见的力，推动定位的盒子的一侧，移动它的相反方向。所以例如，如果你指定 `top: 30px;`一个力推动框的顶部，使它向下移动 30px。

> **备注：** 你可以在 [`2_relative-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/2_relative-positioning.html) 查看这个例子 ([see source code](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/2_relative-positioning.html))。

### 绝对定位

绝对定位带来了非常不同的结果。让我们尝试改变代码中的位置声明如下：

```css
position: absolute;
```

如果你现在保存和刷新，你应该看到这样：

```html hidden
<h1>Absolute positioning</h1>

<p>
  I am a basic block level element. My adjacent block level elements sit on new
  lines below me.
</p>

<p class="positioned">
  By default we span 100% of the width of our parent element, and we are as tall
  as our child content. Our total width and height is our content + padding +
  border width/height.
</p>

<p>
  We are separated by our margins. Because of margin collapsing, we are
  separated by the width of one of our margins, not both.
</p>

<p>
  inline elements <span>like this one</span> and <span>this one</span> sit on
  the same line as one another, and adjacent text nodes, if there is space on
  the same line. Overflowing inline elements
  <span>wrap onto a new line if possible — like this one containing text</span>,
  or just go on to a new line if not, much like this image will do:
  <img src="long.jpg" />
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('绝对定位', '100%', 450) }}

首先，请注意，定位的元素应该在文档流中的间隙不再存在——第一和第三元素已经靠在一起，就像第二个元素不再存在！好吧，在某种程度上，这是真的。绝对定位的元素不再存在于正常文档布局流中。相反，它坐在它自己的层独立于一切。这是非常有用的：这意味着我们可以创建不干扰页面上其他元素的位置的隔离的 UI 功能。例如，弹出信息框和控制菜单；翻转面板；可以在页面上的任何地方拖放的 UI 功能……

第二，注意元素的位置已经改变——这是因为{{cssxref("top")}}，{{cssxref("bottom")}}，{{cssxref("left")}}和{{cssxref("right")}}以不同的方式在绝对定位。它们指定元素应距离每个包含元素的边的距离，而不是指定元素应该移入的方向。所以在这种情况下，我们说的绝对定位元素应该位于从“包含元素”的顶部 30px，从左边 30px。

> **备注：** 如果需要，你可以使用 {{cssxref("top")}}，{{cssxref("bottom")}}、{{cssxref("left")}} 和 {{cssxref("right")}} 调整元素大小。尝试设置 `top: 0; bottom: 0; left: 0; right: 0;` 和 `margin: 0;` 对你定位的元素，看看会发生什么！之后再回来

> **备注：** 是的，margins 仍会影响定位的元素。然而 margin collapsing 不会。

> **备注：** 你可以在[`3_absolute-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/3_absolute-positioning.html) 查看这个例子 ([see source code](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/3_absolute-positioning.html))。

### 定位上下文

哪个元素是绝对定位元素的“包含元素“？这取决于绝对定位元素的父元素的 position 属性。(参见 [Identifying the containing block](/zh-CN/docs/Web/CSS/Containing_block#identifying_the_containing_block)).

如果所有的父元素都没有显式地定义 position 属性，那么所有的父元素默认情况下 position 属性都是 static。结果，绝对定位元素会被包含在**初始块容器**中。这个初始块容器有着和浏览器视口一样的尺寸，并且\<html>元素也被包含在这个容器里面。简单来说，绝对定位元素会被放在\<html>元素的外面，并且根据浏览器视口来定位。

绝对定位元素在 HTML 源代码中，是被放在\<body>中的，但是在最终的布局里面，它离页面 (而不是\<body>) 的左边界、上边界有 30px 的距离。我们可以改变**定位上下文** —— 绝对定位的元素的相对位置元素。通过设置其中一个父元素的定位属性 —— 也就是包含绝对定位元素的那个元素（如果要设置绝对定位元素的相对元素，那么这个元素一定要包含绝对定位元素）。为了演示这一点，将以下声明添加到你的 body 规则中：

```css
position: relative;
```

应该得到以下结果：

```html hidden
<h1>Positioning context</h1>

<p>
  I am a basic block level element. My adjacent block level elements sit on new
  lines below me.
</p>

<p class="positioned">
  Now I'm absolutely positioned relative to the
  <code>&lt;body&gt;</code> element, not the <code>&lt;html&gt;</code> element!
</p>

<p>
  We are separated by our margins. Because of margin collapsing, we are
  separated by the width of one of our margins, not both.
</p>

<p>
  inline elements <span>like this one</span> and <span>this one</span> sit on
  the same line as one another, and adjacent text nodes, if there is space on
  the same line. Overflowing inline elements
  <span>wrap onto a new line if possible — like this one containing text</span>,
  or just go on to a new line if not, much like this image will do:
  <img src="long.jpg" />
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
  position: relative;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('定位上下文', '100%', 420) }}

定位的元素现在相对于{{htmlelement("body")}}元素。

> **备注：** 你可以在这里看到这个例子 [`4_positioning-context.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/4_positioning-context.html) ([see source code](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/4_positioning-context.html)).

### 介绍 z-index

所有这些绝对定位很有趣，但还有另一件事我们还没有考虑到 ——当元素开始重叠，什么决定哪些元素出现在其他元素的顶部？在我们已经看到的示例中，我们在定位上下文中只有一个定位的元素，它出现在顶部，因为定位的元素胜过未定位的元素。当我们有不止一个的时候呢？

尝试添加以下到你的 CSS，使第一段也是绝对定位：

```css
p:nth-of-type(1) {
  position: absolute;
  background: lime;
  top: 10px;
  right: 30px;
}
```

此时，你将看到第一段的颜色为绿色，移出文档流程，并位于原始位置上方一点。它也堆叠在原始的 `.positioned` 段落下，其中两个重叠。这是因为 `.positioned` 段落是源顺序 (HTML 标记) 中的第二个段落，并且源顺序中后定位的元素将赢得先定位的元素。

你可以更改堆叠顺序吗？是的，你可以使用{{cssxref("z-index")}}属性。 “z-index”是对 z 轴的参考。你可以从源代码中的上一点回想一下，我们使用水平（x 轴）和垂直（y 轴）坐标来讨论网页，以确定像背景图像和阴影偏移之类的东西的位置。 （0,0）位于页面（或元素）的左上角，x 和 y 轴跨页面向右和向下（适合从左到右的语言，无论如何）。

网页也有一个 z 轴：一条从屏幕表面到你的脸（或者在屏幕前面你喜欢的任何其他东西）的虚线。{{cssxref("z-index")}} 值影响定位元素位于该轴上的位置；正值将它们移动到堆栈上方，负值将它们向下移动到堆栈中。默认情况下，定位的元素都具有 z-index 为 auto，实际上为 0。

要更改堆叠顺序，请尝试将以下声明添加到 `p:nth-of-type(1)` 规则中：

```css
z-index: 1;
```

你现在应该可以看到完成的例子：

```html hidden
<h1>z-index</h1>

<p>
  I am a basic block level element. My adjacent block level elements sit on new
  lines below me.
</p>

<p class="positioned">
  Now I'm absolutely positioned relative to the
  <code>&lt;body&gt;</code> element, not the <code>&lt;html&gt;</code> element!
</p>

<p>
  We are separated by our margins. Because of margin collapsing, we are
  separated by the width of one of our margins, not both.
</p>

<p>
  inline elements <span>like this one</span> and <span>this one</span> sit on
  the same line as one another, and adjacent text nodes, if there is space on
  the same line. Overflowing inline elements
  <span>wrap onto a new line if possible — like this one containing text</span>,
  or just go on to a new line if not, much like this image will do:
  <img src="long.jpg" />
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
  position: relative;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px;
}

p:nth-of-type(1) {
  position: absolute;
  background: lime;
  top: 10px;
  right: 30px;
  z-index: 1;
}
```

{{ EmbedLiveSample('介绍 z-index', '100%', 400) }}

请注意，z-index 只接受无单位索引值；你不能指定你想要一个元素是 Z 轴上 23 像素—— 它不这样工作。较高的值将高于较低的值，这取决于你使用的值。使用 2 和 3 将产生与 300 和 40000 相同的效果。

> **备注：** 你可以在这里看到这个例子 [`5_z-index.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/5_z-index.html) ([see source code](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/5_z-index.html)).

### 固定定位

还有一种类型的定位覆盖——fixed。这与绝对定位的工作方式完全相同，只有一个主要区别：绝对定位将元素固定在相对于其位置最近的祖先。（如果没有，则为初始包含它的块）而固定定位固定元素则是相对于浏览器视口本身。这意味着你可以创建固定的有用的 UI 项目，如持久导航菜单。

让我们举一个简单的例子来说明我们的意思。首先，从 CSS 中删除现有的 `p:nth-of-type(1)` 和`.positioned` 规则。

现在，更新 `body` 规则以删除`position: relative;` 声明并添加固定高度，如此：

```css
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}
```

现在我们要给{{htmlelement("h1")}}元素 `position: fixed;`，并让它坐在视口的顶部中心。将以下规则添加到 CSS：

```css
h1 {
  position: fixed;
  top: 0;
  width: 500px;
  margin: 0 auto;
  background: white;
  padding: 10px;
}
```

`top: 0;`是要使它贴在屏幕的顶部；我们然后给出标题与内容列相同的宽度，并使用可靠的老技巧 `margin: 0 auto;` 使它居中。然后我们给它一个白色背景和一些内边距，所以内容将不会在它下面可见。

如果你现在保存并刷新，你会看到一个有趣的小效果，标题保持固定，内容显示向上滚动并消失在其下。但是我们可以改进这一点——目前标题下面挡住一些内容的开头。这是因为定位的标题不再出现在文档流中，所以其他内容向上移动到顶部。我们要把它向下移动一点；我们可以通过在第一段设置一些顶部边距来做到这一点。添加：

```css
p:nth-of-type(1) {
  margin-top: 60px;
}
```

你现在应该看到完成的例子：

```html hidden
<h1>Fixed positioning</h1>

<p>
  I am a basic block level element. My adjacent block level elements sit on new
  lines below me.
</p>

<p class="positioned">I'm not positioned any more...</p>

<p>
  We are separated by our margins. Because of margin collapsing, we are
  separated by the width of one of our margins, not both.
</p>

<p>
  inline elements <span>like this one</span> and <span>this one</span> sit on
  the same line as one another, and adjacent text nodes, if there is space on
  the same line. Overflowing inline elements
  <span>wrap onto a new line if possible — like this one containing text</span>,
  or just go on to a new line if not, much like this image will do:
  <img src="long.jpg" />
</p>
```

```css hidden
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

h1 {
  position: fixed;
  top: 0px;
  width: 500px;
  margin: 0 auto;
  background: white;
  padding: 10px;
}

p:nth-of-type(1) {
  margin-top: 60px;
}
```

{{ EmbedLiveSample('固定定位', '100%', 400) }}

> **备注：** 你可以在这里看到这个例子[`6_fixed-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/6_fixed-positioning.html) ([see source code](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/6_fixed-positioning.html)).

### position: sticky

还有一个可用的位置值称为 position: sticky，比起其他位置值要新一些。它基本上是相对位置和固定位置的混合体，它允许被定位的元素表现得像相对定位一样，直到它滚动到某个阈值点（例如，从视口顶部起 10 像素）为止，此后它就变得固定了。例如，它可用于使导航栏随页面滚动直到特定点，然后粘贴在页面顶部。

#### Sticky positioning example

```html hidden
<h1>Sticky positioning</h1>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>

<div class="positioned">Sticky</div>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

.positioned {
  background: rgba(255, 84, 104, 0.3);
  border: 2px solid rgb(255, 84, 104);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
```

```css
.positioned {
  position: sticky;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Sticky positioning example', '100%', 200) }}

#### 滚动索引

`position: sticky` 的另一种有趣且常用的用法，是创建一个滚动索引页面。在此页面上，不同的标题会停留在页面顶部。这样的示例的标记可能如下所示：

```html
<h1>Sticky positioning</h1>

<dl>
  <dt>A</dt>
  <dd>Apple</dd>
  <dd>Ant</dd>
  <dd>Altimeter</dd>
  <dd>Airplane</dd>
  <dt>B</dt>
  <dd>Bird</dd>
  <dd>Buzzard</dd>
  <dd>Bee</dd>
  <dd>Banana</dd>
  <dd>Beanstalk</dd>
  <dt>C</dt>
  <dd>Calculator</dd>
  <dd>Cane</dd>
  <dd>Camera</dd>
  <dd>Camel</dd>
  <dt>D</dt>
  <dd>Duck</dd>
  <dd>Dime</dd>
  <dd>Dipstick</dd>
  <dd>Drone</dd>
  <dt>E</dt>
  <dd>Egg</dd>
  <dd>Elephant</dd>
  <dd>Egret</dd>
</dl>
```

CSS 可能如下所示。在正常布局流中，{{htmlelement("dt")}}元素将随内容滚动。当我们在{{htmlelement("dt")}}元素上添加`position: sticky`，并将{{cssxref("top")}}的值设置为 0，当标题滚动到视口的顶部时，支持此属性的浏览器会将标题粘贴到那个位置。随后，每个后续标题将替换前一个标题，直到它向上滚动到该位置。

```css
dt {
  background-color: black;
  color: white;
  padding: 10px;
  position: sticky;
  top: 0;
  left: 0;
  margin: 1em 0;
}
```

```css hidden
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}
```

```html hidden
<h1>Sticky positioning</h1>

<dl>
  <dt>A</dt>
  <dd>Apple</dd>
  <dd>Ant</dd>
  <dd>Altimeter</dd>
  <dd>Airplane</dd>
  <dt>B</dt>
  <dd>Bird</dd>
  <dd>Buzzard</dd>
  <dd>Bee</dd>
  <dd>Banana</dd>
  <dd>Beanstalk</dd>
  <dt>C</dt>
  <dd>Calculator</dd>
  <dd>Cane</dd>
  <dd>Camera</dd>
  <dd>Camel</dd>
  <dt>D</dt>
  <dd>Duck</dd>
  <dd>Dime</dd>
  <dd>Dipstick</dd>
  <dd>Drone</dd>
  <dt>E</dt>
  <dd>Egg</dd>
  <dd>Elephant</dd>
  <dd>Egret</dd>
</dl>
```

{{ EmbedLiveSample('滚动索引', '100%', 200) }}

> **备注：** 你可以在 [`7_sticky-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/7_sticky-positioning.html) 查看这个例子 ([see source code](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/7_sticky-positioning.html))。

## 试试你的技术！

这篇文章到此为止了，但你们能记住最重要的信息吗？在继续之前，你可以找到一些进一步的测试来验证是否完全掌握了这个知识：[试试你的技术](/zh-CN/docs/Learn/CSS/CSS_layout/Position_skills)。

## 总结

我相信你用基本定位愉快地玩耍；它是创建复杂的 CSS 布局和 UI 功能背后的基本工具之一。考虑到这一点，在下一篇文章中，我们将更有趣的定位——我们将进一步，开始建立一些真实世界有用的东西。

{{PreviousMenuNext("Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout/Practical_positioning_examples", "Learn/CSS/CSS_layout")}}
