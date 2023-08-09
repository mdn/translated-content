---
title: 传统的布局方法
slug: Learn/CSS/CSS_layout/Legacy_Layout_Methods
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/CSS/CSS_layout/Multiple-Column_Layout", "Learn/CSS/CSS_layout/Supporting_Older_Browsers", "Learn/CSS/CSS_layout")}}

在 CSS 布局中，网格系统是一种非常常见的布局方式，并且在 CSS 网格布局之前，它们倾向于由浮动和其他的布局功能实现。假想你的布局是一组数字标注的列（例如 4、6 或者 12），然后把你的内容填充到这些想象的列中。这篇文章将要探讨这种早期的方法是怎么实现的，来帮助你在旧项目工作时更好地理解他们。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">学习前提：</th>
      <td>
        HTML 基础 (学习
        <a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction to HTML</a
        >),并且了解 CSS 是怎么工作的 (学习
        <a href="/zh-CN/docs/Learn/CSS/Introduction_to_CSS"
          >Introduction to CSS</a
        >
        and <a href="/zh-CN/docs/Learn/CSS/Styling_boxes">Styling boxes</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>了解浏览器 CSS 网格布局系统的基本概念。</td>
    </tr>
  </tbody>
</table>

## CSS 网格布局之前的布局与网格系统

一个来自设计领域的人或许会惊讶，CSS 直到最近才有网格系统，不仅如此，我们还用了许多次优方法来建立类网格设计。我们现在把这些称为“古老”的方法。

对于新项目来说，大多数情况下 CSS 网格布局（CSS Grid Layout）被用来和其他一个或多个现代的布局方法结合，以形成布局的基础。但是你会时不时的遇到采用这种古老方法的“网格系统”。值得了解它们是如何工作的，以及为什么它们和 CSS 网格布局不同。

这个课程将会解释基于 float 和 flexbox 的网格系统和网格框架是如何工作的。学习过网格布局之后，你可能会惊讶，这些看起来真的好复杂！如果你需要为不支持新技术的老浏览器上创建后备代码的话，这些知识将会变的十分有用，而且你也可以在使用这些类别系统的已有工程上工作。

值得铭记在心的是，在我们探索这些系统时，它们里面没有哪个的建立方式是像通过 CSS 网格布局创建网格那样，真的建立一个网格。他们通过给目标一个大小，然后推动它们，让它们**看起来**像网格一样排列成一条线。

## 两列布局

让我们从最简单的实例开始——一个两列布局。你可以按照步骤在你的电脑上创建一个新的 `index.html`，先用一个[简单 HTML 模板](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html)填充它，然后在适当的位置填充下面的代码。在这节底部，你可以看到一个展示最终代码样貌的实时实例。

首先，我们需要在我们的栏中放入一些内容。把现在在 body 中的内容替换成下面的代码：

```html
<h1>2 column layout example</h1>
<div>
  <h2>First column</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer
    ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur
    vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus.
    Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus
    sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus.
    Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis,
    eget fermentum sapien.
  </p>
</div>

<div>
  <h2>Second column</h2>
  <p>
    Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
    ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
    est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
    tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
    lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
    vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </p>
</div>
```

每一列都需要一个上一级元素来包含内容，这样我们可以一次性操作所有内容。在这个例子中我们选择了{{htmlelement("div")}}，但是你可以选择其他更合适的，例如{{htmlelement("article")}}, {{htmlelement("section")}}, 和 {{htmlelement("aside")}}，或者是任何别的元素。

现在我们来看 CSS。首先，应用以下的代码来对 HTML 进行基本设置：

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}
```

body 将会占据 90% 的视口宽度，直到达到 900 像素，在这种情况下，它将固定并保持在视口正中。默认情况下，它的子项（the {{htmlelement("h1")}} 和两个 {{htmlelement("div")}}）将会达到正文宽度的 100%。如果我们希望两个{{htmlelement("div")}}，一个浮在窗口的一边，另一个浮动在另一边的话，我们需要将它们的宽度设置为其父元素的 100% 或者更小，以便他们可以并排放置。将下面的代码加在 CSS 的底部：

```css
div:nth-of-type(1) {
  width: 48%;
}

div:nth-of-type(2) {
  width: 48%;
}
```

这里我们将它们都设置为了父元素宽度的 48%——总共是 96%，在两栏之间留 4% 的空隙，为它们提供一些宽松的空间。现在我们只需要将让列浮动，像这样：

```css
div:nth-of-type(1) {
  width: 48%;
  float: left;
}

div:nth-of-type(2) {
  width: 48%;
  float: right;
}
```

将这些都放在一起，会得到这样的结果：

{{ EmbedLiveSample('两列布局', '100%', 520) }}

你有没有注意到我们在宽度的表示上都用的是百分比——这是一个很好的策略，这创建了一个**流动布局（liquid layout），**能够适应不同的屏幕大小，在小一些的屏幕上也能使列保持一样的比例。试一试自己来调整浏览器窗口的宽度，这是响应式网页非常有价值的一个工具。

> **备注：**你可以在 [0_two-column-layout.html](http://mdn.github.io/learning-area/css/css-layout/floats/0_two-column-layout.html) 实时查看这个实例（另见[源代码](https://github.com/mdn/learning-area/blob/main/css/css-layout/floats/0_two-column-layout.html)）。

## 创建简单的传统网格框架

大多数传统的框架使用{{cssxref("float")}}属性来使列相邻排列，让它们看起来像是一个网格。以用 float 创建网格的流程工作，可以向你展示它们工作的原理，并介绍一些更高级的概念，并在[浮动和清除](/zh-CN/docs/Learn/CSS/CSS_layout/Floats)这节课中学到的内容之上搭建更多的东西。

最简单的一类网格创建是固定宽度的——我们只需要计算设计中总的宽度、列的数目、每一列和间隔的宽度。但是，如果我们决定设计的网格是可以根据浏览器宽度缩放的，我们则需要计算每一列和间距的所占的宽度的百分比。

下一部分我们将学习如何创建这两种方式的网格。我们会构建一个有 12 列的表格——我们选择了 12 这个常见的数字，来看它对不同情景的适应情况，因为 12 可以被 6，4，3，和 2 完全整除。

### 一个简单的固定宽度网格

让我们先来创建一个固定列宽度的网格系统吧。

首先，把 [simple-grid.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/simple-grid.html)下载储存下来，其 body 中包含以下的标记：

```html
<div class="wrapper">
  <div class="row">
    <div class="col">1</div>
    <div class="col">2</div>
    <div class="col">3</div>
    <div class="col">4</div>
    <div class="col">5</div>
    <div class="col">6</div>
    <div class="col">7</div>
    <div class="col">8</div>
    <div class="col">9</div>
    <div class="col">10</div>
    <div class="col">11</div>
    <div class="col">12</div>
  </div>
  <div class="row">
    <div class="col span1">13</div>
    <div class="col span6">14</div>
    <div class="col span3">15</div>
    <div class="col span2">16</div>
  </div>
</div>
```

我们的目标是把它变成一个有两行十二列的演示网格——第一行显示各列的大小，第二行显示网格上不同大小的区域。

![](simple-grid-finished.png)

在{{htmlelement("style")}}中，加入下面的代码，使容器右侧的内边距为 20 像素，总的宽度变为 980 像素。这样给我们留出 960 像素可以放置列和它们的间隔——这种情况下，内边距会被从总的内容宽度中减去，因为我们在{{cssxref("box-sizing")}}中将站点上所有的元素设置成了`border-box` （可以查看[完全改变盒模型](/zh-CN/docs/Learn/CSS/Styling_boxes/Box_model_recap#Changing_the_box_model_completely)，获得更多解释）。

```css
* {
  box-sizing: border-box;
}

body {
  width: 980px;
  margin: 0 auto;
}

.wrapper {
  padding-right: 20px;
}
```

现在使用包装了网格每行的列容器，清除网格中每行的浮动，在你前面的规则里加入下面的规则：

```css
.row {
  clear: both;
}
```

应用这条清除规则，意味着我们不用在每行上都填充 12 列元素。行与行之间不会互相干扰，并保持分隔。

列与列之间保持 20 像素的间隔。我们使用每列元素的左外边框来实现这个间隔。然后我们一共有 12 个间隔 — 12 x 20 = 240。

我们需要从 960px 的总宽减去这个间隔，然后剩下 720 像素给我们的列。如果用 720 除以 12，我们知道每列有 60 个像素宽。

接下来我们给`.col`类写一个规则，让它向左浮动，给它设置 20 像素的{{cssxref("margin-left")}}来实现一个间隔，再设置 60 像素的{{cssxref("width")}}。把下面的规则加到你的 CSS 底部：

```css
.col {
  float: left;
  margin-left: 20px;
  width: 60px;
  background: rgb(255, 150, 150);
}
```

单个列的最上面一行现在铺开成为了一个排列整齐的网格。

> **备注：**我们也已经让每列变成亮红色，这样你就能准确看到每列占据了多少空间。

如果我们想让布局容器横跨多列，必须要给它设置特殊的类，来适应列的数量的{{cssxref("width")}} 值（加上间隔的值）。我们需要新建额外的类来允许横跨 2-12 列。每个宽度是将该列数的列宽加上间隔宽度相加的结果，这些宽度总是比列数少一个。

在你的 CSS 底部加入下面的内容：

```css
/* Two column widths (120px) plus one gutter width (20px) */
.col.span2 {
  width: 140px;
}
/* Three column widths (180px) plus two gutter widths (40px) */
.col.span3 {
  width: 220px;
}
/* And so on... */
.col.span4 {
  width: 300px;
}
.col.span5 {
  width: 380px;
}
.col.span6 {
  width: 460px;
}
.col.span7 {
  width: 540px;
}
.col.span8 {
  width: 620px;
}
.col.span9 {
  width: 700px;
}
.col.span10 {
  width: 780px;
}
.col.span11 {
  width: 860px;
}
.col.span12 {
  width: 940px;
}
```

创建了这些类以后，我们可以在网格上布局不同宽度的列。试试保存并在你的浏览器上加载这个页面，来查看效果。

> **备注：** 如果你在让上面的示例实现的时候正遇到麻烦，尝试将它和我们在 GitHub 上的[完成版](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/simple-grid-finished.html)进行比较（再[看下实时的示例](http://mdn.github.io/learning-area/css/css-layout/grids/simple-grid-finished.html)）。

试试修改这些类，甚至添加、删除一些容器，来看看你能怎么改变这个布局。例如，你可以把第二行写成这样：

```css
<div class="row">
  <div class="col span8">13</div>
  <div class="col span4">14</div>
</div>
```

现在你的网格布局生效了。你可以简单的定义这些行，和每行的列数，然后给他们添加你想要的内容。真棒！

### 创建液态网格

这个网格表现的不错，但是它长度固定。我们实际却想要一个弹性（流体）的网格，它可以随着浏览器的{{Glossary("viewport")}}大小的变化自动伸缩。为了达成这个目标，我们需要把相应的像素的长度变为百分比长度。

把固定宽度转为伸缩的基于百分比宽度的算式在下面：

```plain
target / context = result
```

在我们的列宽里，我们的**目标列长度**是 60 像素，我们的**上下文**是 960 像素的包装。我们可以这么计算百分比：

```plain
60 / 960 = 0.0625
```

然后我们挪动小数点两位，得到百分数 6.25%。所以在 CSS 里面，我们可以用 6.25% 代替 60 像素。

我们需要同样这么算间隔：

```plain
20 / 960 = 0.02083333333
```

所以我们需要用 2.08333333% 代替`.col`里{{cssxref("margin-left")}}的 20 像素，和`.wrapper`里{{cssxref("padding-right")}}的 20 像素。

#### 更新我们的网格

创建一个之前例子网页的副本。然后开始这个章节，或者制作一个[simple-grid-finished.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/simple-grid-finished.html)代码的本地副本，以将其作为入手点。

更新第二个 CSS 规则（有着`.wrapper`选择器），像下面这样：

```css
body {
  width: 90%;
  max-width: 980px;
  margin: 0 auto;
}

.wrapper {
  padding-right: 2.08333333%;
}
```

我们不仅给它一个百分比的{{cssxref("width")}}，还添加了{{cssxref("max-width")}}属性，来确保布局不过于宽。

下一步，更新第四条 CSS 规则（有`.col`选择器），像这样：

```css
.col {
  float: left;
  margin-left: 2.08333333%;
  width: 6.25%;
  background: rgb(255, 150, 150);
}
```

现在做些稍微麻烦的事 — 我们需要更新所有 `.col.span` 规则来把像素变为百分比。这需要点时间计算；为节省你的功夫，我们在下面替你做了。

像下面这样更新 CSS 规则的底部块：

```css
/* Two column widths (12.5%) plus one gutter width (2.08333333%) */
.col.span2 {
  width: 14.58333333%;
}
/* Three column widths (18.75%) plus two gutter widths (4.1666666) */
.col.span3 {
  width: 22.91666666%;
}
/* And so on... */
.col.span4 {
  width: 31.24999999%;
}
.col.span5 {
  width: 39.58333332%;
}
.col.span6 {
  width: 47.91666665%;
}
.col.span7 {
  width: 56.24999998%;
}
.col.span8 {
  width: 64.58333331%;
}
.col.span9 {
  width: 72.91666664%;
}
.col.span10 {
  width: 81.24999997%;
}
.col.span11 {
  width: 89.5833333%;
}
.col.span12 {
  width: 97.91666663%;
}
```

现在保存你的代码，从浏览器里加载它，尝试改变视口长度——你应该可以看到网格完美地适配了。

> **备注：**如果你在让上面的示例实现的时候正遇到困难，试着把它和我们[GitHub 上的完成版](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid.html)比较（另[见实时的示例](http://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid.html)）。

### 使用 calc() 函数的更简单计算

你可以用 {{cssxref("calc()")}} 函数来在 CSS 里面做数学方面的计算——这允许你在 CSS 里插入简单的算式，来计算那些值。这个会很有用，特别当你有个复杂计算的时候，甚至你还可以在算式里用不同的单位，比如“我想要这个元素一直比它父元素少 50 像素”。看下[这个来自 MediaRecorder API 教程的示例](/zh-CN/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API#保持主界面对显示区域的约束，用_calc_来忽略设备的尺寸)。

言归正传，来讲我们的网格！我们网格里跨越超过一列的列，它的总长是 6.45% 乘跨越的列数加 2.08333333%，乘间隔数（间隔数总等于行数减一）。`calc()` 函数允许我们就在宽度值里面这么计算，所以对跨越 4 列的列我们可以这么算：

```css
.col.span4 {
  width: calc((6.25% * 4) + (2.08333333% * 3));
}
```

试着用下面的内容替换你底部的规则块，然后在浏览器中重载，看看你是否能得到相同的结果：

```css
.col.span2 {
  width: calc((6.25% * 2) + 2.08333333%);
}
.col.span3 {
  width: calc((6.25% * 3) + (2.08333333% * 2));
}
.col.span4 {
  width: calc((6.25% * 4) + (2.08333333% * 3));
}
.col.span5 {
  width: calc((6.25% * 5) + (2.08333333% * 4));
}
.col.span6 {
  width: calc((6.25% * 6) + (2.08333333% * 5));
}
.col.span7 {
  width: calc((6.25% * 7) + (2.08333333% * 6));
}
.col.span8 {
  width: calc((6.25% * 8) + (2.08333333% * 7));
}
.col.span9 {
  width: calc((6.25% * 9) + (2.08333333% * 8));
}
.col.span10 {
  width: calc((6.25% * 10) + (2.08333333% * 9));
}
.col.span11 {
  width: calc((6.25% * 11) + (2.08333333% * 10));
}
.col.span12 {
  width: calc((6.25% * 12) + (2.08333333% * 11));
}
```

> **备注：**你能在[fluid-grid-calc.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid-calc.html)里看到我们的完成版（另[见实时版](http://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid-calc.html)）。

> **备注：**如果你不能让这个正常工作，可能是你的浏览器不支持`calc()`函数，尽管各浏览器对它的支持相当好——远至 IE9 那样老。

### 语义 vs.“无语义”网格系统

在标记中添加类以定义布局，意味着您的内容和标记与您的可视化表示相关联。你将会偶尔听到，这种使用 CSS 类的方式，被描绘成“无语义”：描述了内容的外观，而不是描述内容的语义性的类的使用。这是我们的`span2`、`span3`等类所面临的情况。

这些并不是唯一的方法，你或许会转头决定使用网格，然后向已有的语义类里面加入尺寸信息。例如，如果你有一个带有`content`类的{{htmlelement("div")}}，而且你想让它横跨 8 列，你可以从`span8`类里面复制整个关于宽度的规则，结果是像这样的一条规则：

```css
.content {
  width: calc((6.25% * 8) + (2.08333333% * 7));
}
```

> **备注：** 如果你要用预处理工具，如[Sass](http://sass-lang.com/)，你可以建立一个简单的类（mixin）以插入那个值。

### 在我们的网格里启用偏移容器

我们创造的网格很有效。只要我们想把所有容器都从网格的左手边对齐。如果我们想在第一个容器前来个空列，或者容器之间来个空列，我们需要新建一个偏移类，为站点加上左外边距，来可见地推动网格。再来点数学计算！

让我们实际试试吧。

从你以前的代码开始，或者把我们的[fluid-grid.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid.html)文件用作起始点。

我们在 CSS 上搞一个类，它会给一个容器元素来个一列宽度的偏移。将下面的内容加到你的 CSS 的底部：

```css
.offset-by-one {
  margin-left: calc(6.25% + (2.08333333% * 2));
}
```

或者假如你更愿意自己算百分比，用下面这个：

```css
.offset-by-one {
  margin-left: 10.41666666%;
}
```

想要给一个容器的左边加个有一列宽的空白的话，你可以在容器上添加这个类。例如，如果你在 HTML 中有这个内容的时候：

```html
<div class="col span6">14</div>
```

试着用下面的替换：

```html
<div class="col span5 offset-by-one">14</div>
```

> **备注：** 注意你需要别让横跨多列的列太多，给偏移留点空间！

试着载入，刷新来查看区别，或者查看我们的[fluid-grid-offset.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid-offset.html)示例（另见[实时](http://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid-offset.html)示例）。完成的示例应该看起来像这样：

![](offset-grid-finished.png)

> **备注：**作为额外练习，你能实现一个`offset-by-two`类吗？

### 浮动网格的限制

当你想用这个网格系统时，你得仔细看看你的总长是否正确，并且每行中的元素所横跨的列数不超过这一行可容纳的列数。由于浮动布局实现的方式，如果网格列的数目对与网格来说太大，在最后边的元素会跑到下一行去，搞坏了布局。

还要记住，如果元素内容比行宽，它会溢出，看起来一团糟。

这个系统的最大限制是，它本质上是一维的。我们在处理列、让元素跨越列，但是处理不了行。如果不设置一个确定的高度，用老方法很难控制元素高。这个方法很不灵活 —它只有在你确定你的内容有个明确的高的情况下有用。

## 弹性盒网格？

如果你读了之前关于[flexbox](/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox)的文章，你大概会想，弹性布局是个写网格布局的好办法。现在有很多基于弹性布局的网格布局，并且弹性布局可以解决很多上面讲的问题。

但是，弹性布局不是为网格布局而设的，把它当网格布局来用也有新的挑战。举个简单的例子，我们可以使用我们在上面使用过的同样的示例标记，用下面的 CSS 样式化`wrapper`、`row`和`col`类：

```css
body {
  width: 90%;
  max-width: 980px;
  margin: 0 auto;
}

.wrapper {
  padding-right: 2.08333333%;
}

.row {
  display: flex;
}

.col {
  margin-left: 2.08333333%;
  margin-bottom: 1em;
  width: 6.25%;
  flex: 1 1 auto;
  background: rgb(255, 150, 150);
}
```

你可以试着在你自己的示例里做这些替换，或者看下我们的[flexbox-grid.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/flexbox-grid.html)示例代码（另见[实时版](http://mdn.github.io/learning-area/css/css-layout/grids/flexbox-grid.html)）。

这里，我们会把每行变成一个弹性容器。有了弹性盒为基础的网格，我们仍然需要行，以让我们的元素加起来能不超过 100%。我们将容器设为`display: flex`。

在`.col`上。我们设定{{cssxref("flex")}}属性的第一个值（{{cssxref("flex-grow")}}）为 1，这样我们的物件可以变大；第二个值（{{cssxref("flex-shrink")}}）为 1，这样我们的物件可以缩小；第三个值（{{cssxref("flex-basis")}}）为`auto`。因为我们的元素的{{cssxref("width")}}被设定了， `auto`将会使用和`flex-basis` 值一样的宽度。

在顶行，我们有十二个整齐的盒子，它们在视口宽度改变时同等地放大缩小。可是在下一行，我们只有四个物件，它们也从六十像素的基础上变大变小。因为它们只有四个，它们可以长得比上一行的物件更快，结果是它们都占据了第二行的相同宽度。

![](flexbox-grid-incomplete.png)

为了解决这个问题，我们仍然需要包含`span`类，以提供一个用于那个元素的，可以替换掉为 `flex-basis`所使用的值的宽度。

它们也不遵从上面的物件使用的网格，因为它们对它一无所知。

弹性盒设计上是**一维**。它处理单个维度，行的或者列的。我们不能创建一个对行列严格要求的网格，意即如果我们要在我们的网格上使用弹性盒的话，我们仍然需要计算浮动布局的百分比。

在你的工程中，由于弹性盒相比浮动能提供附加的对齐和空间分布能力，你可能仍然选择使用弹性盒“网格”。但是你应该清楚，你仍然是在使用一个被设计用来做其他事情的工具。所以你可能觉得，这就像是在你抵达你想要的结果之前，让你跳过额外的坑。

## 第三方网格系统

既然我们理解了我们的网格计算背后的数学了，我们现在该看看一些常用的第三方网格系统了。如果你在互联网上搜索“CSS 网格框架”的话，你会发现一个包含了可选项的庞大列表。流行的框架，例如[Bootstrap](http://getbootstrap.com/)和[Foundation](http://foundation.zurb.com/)，就包含了网格系统。此外还有独立的网格系统，不是用 CSS 开发的就是用预处理器开发的。

让我们看下这些独立系统其中的一个，它阐释了利用网格框架工作的常见技术。我们将要使用的网格是 Skeleton 的一部分，它是一种简单的 CSS 框架。

访问[Skeleton 网站](http://getskeleton.com/)以开始，选择“Download”下载 ZIP 文件。解压文件，把 skeleton.css 和 normalize.css 复制到一个新路径下。

制作一个[html-skeleton.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/html-skeleton.html)文件的副本，在同 skeleton 和 normalize CSS 相同的路径下保存副本。

在 HTML 页面包含 skeleton 和 normalize CSS，通过把以下内容加到文件头部的方式：

```html
<link href="normalize.css" rel="stylesheet" />
<link href="skeleton.css" rel="stylesheet" />
```

Skeleton 不仅包含了网格系统，它还包含了用于排版和其他能作为起始点的页面元素上的 CSS。我们现在把这些部分留作默认值，我们在这里真正感兴趣的是网格。

> **备注：**[Normalize](/zh-CN/docs/)是由 Nicolas Gallagher 编写的一个很有用的小 CSS 库，它自动做了一些有用的基础布局修正，让元素默认的样式化在不同浏览器中更加协调。

我们将会使用和在前面的示例中相似的 HTML。将下面的内容加到你的 HTML body 中：

```html
<div class="container">
  <div class="row">
    <div class="col">1</div>
    <div class="col">2</div>
    <div class="col">3</div>
    <div class="col">4</div>
    <div class="col">5</div>
    <div class="col">6</div>
    <div class="col">7</div>
    <div class="col">8</div>
    <div class="col">9</div>
    <div class="col">10</div>
    <div class="col">11</div>
    <div class="col">12</div>
  </div>
  <div class="row">
    <div class="col">13</div>
    <div class="col">14</div>
    <div class="col">15</div>
    <div class="col">16</div>
  </div>
</div>
```

要开始使用 Skeleton，我们需要给包装的{{htmlelement("div")}}一个`container`类——这已经包含在了我们的 HTML 里面。这让最大宽度为 960 像素的内容居中了。你可以看看盒子现在是怎么不会宽于 960 像素的。

你可以看看 skeleton.css 文件里，CSS 在我们应用这个类的时候是如何使用的。`<div>`用值为`auto`的左右外边距居中，左边和右边还应用了 20 像素的内边距。同我们前面做过的那样，Skeleton 同时把 Skeleton{{cssxref("box-sizing")}}属性设为`border-box`值，所以这个元素的内边距和边框将会被包含在整个 width 里面。

```css
.container {
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}
```

如果它们在行里面的话，元素只会是网格的一部分，所以对于前面的示例，我们需要一个额外的`<div>`或者其他带有`row`类的、内嵌到`content` `<div>`和我们实际的内容容器的`<div>`之间的元素。我们也已经做了这件事。

现在让我们铺开容器盒子。Skeleton 基于一个 12 列的网格。顶端一行的盒子都需要加上`one column`的类，以让它们横跨一列。

现在加上这些，像是在下面的节录里面显示的那样：

```html
<div class="container">
  <div class="row">
    <div class="one column">1</div>
    <div class="one column">2</div>
    <div class="one column">3</div>
    /* and so on */
  </div>
</div>
```

然后，给第二行的容器加上解释它们应该横跨几个列的类，像这样：

```html
<div class="row">
  <div class="one column">13</div>
  <div class="six columns">14</div>
  <div class="three columns">15</div>
  <div class="two columns">16</div>
</div>
```

试着保存你的 HTML，在你的浏览器里面载入，看下效果。

> **备注：**如果你在实现这个示例的时候遇到麻烦，试着拿它和我们的[html-skeleton-finished.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/html-skeleton-finished.html)文件进行比较（另见[实时运行版](http://mdn.github.io/learning-area/css/css-layout/grids/html-skeleton-finished.html)）。

如果你看下 skeleton.css 文件的内容，你能理解这是如何实现的。例如，Skeleton 有下面的定义内容，用于样式化加入了“three colomns”类的元素。

```css
.three.columns {
  width: 22%;
}
```

Skeleton（或者其他任何网格框架）正在做的所有事情是，设定一个预定义的类，你可以通过把它们加到你的标记文件里面的方式使用这些框架，和你自己做计算这些百分数的工作完全是一样的。

正如你所看到的这样，我们使用 Skeleton 的时候，几乎不需要写多少 CSS。它在我们向标记文本里面加类的时候，替我们处理了所有的浮动。正是把布局的责任甩给其他人的可能性，使得使用用于网格系统的框架成为了一个强制性的选择！但是现在来看，有了 CSS 网格布局，许多开发者正在停止使用这些框架，转而使用 CSS 提供的内建的原生网格。

## 小结

你现在理解了多种网格系统是如何建立的。这将会在处理老网站的时候，以及理解 CSS 网格布局的原生网格和那些老系统的不同的时候帮到你。

{{PreviousMenuNext("Learn/CSS/CSS_layout/Multiple-Column_Layout", "Learn/CSS/CSS_layout/Supporting_Older_Browsers", "Learn/CSS/CSS_layout")}}
