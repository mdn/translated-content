---
title: 浮动
slug: Learn/CSS/CSS_layout/Floats
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout")}}

{{cssxref("float")}} 属性最初只用于在成块的文本内浮动图像，但是现在它已成为在网页上创建多列布局的最常用工具之一。本文将阐述它的有关知识。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">要求：</th>
      <td>
        HTML 基础知识 (学习<a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML"
          >入门 HTML</a
        >)，和 CSS 的工作理念（学习
        <a href="/zh-CN/docs/Learn/CSS/Introduction_to_CSS">入门 CSS</a>)。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        学习如何创建浮动特性，比如首字下沉、浮动图像，和多个列在网页布局。
      </td>
    </tr>
  </tbody>
</table>

## 浮动的背景知识

最初，引入 {{cssxref("float")}} 属性是为了能让 Web 开发人员实现简单的布局，包括在一列文本中浮动的图像，文字环绕在它的左边或右边。你可能在报纸版面上看到过。

但 Web 开发人员很快意识到，任何东西都可以浮动，而不仅仅是图像，所以浮动的使用范围扩大了。之前的 [fancy paragraph example](https://css-tricks.com/snippets/css/drop-caps/) 的课程展示了如何使用浮动创建一个有趣的 drop-cap（首字下沉）效果。

浮动曾被用来实现整个网站页面的布局，它使信息列得以横向排列（默认的设定则是按照这些列在源代码中出现的顺序纵向排列）。目前出现了更新更好的页面布局技术，所以使用浮动来进行页面布局应被看作[传统的布局方法](/zh-CN/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)。

在这一章中，我们仅就浮动这一命令本身的性能展开讲解。

## 简单的例子

让我们来探讨如何使用浮动。我们将从一个非常简单的例子开始，包括在图像周围浮动一个文本块。你可以在电脑上创建新的 `index.html` 文件，并以 [简单的 HTML 模板](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) 填充，在适当的地方插入以下代码。稍后你可以看到示例代码应该能呈现出的效果。

首先，我们写一些简单的 HTML——添加以下内容到 HTML 的{{htmlelement("body")}}内，删除之前{{htmlelement("body")}}里面的东西：

```html
<h1>Simple float example</h1>

<div class="box">Float</div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet.
</p>

<p>
  Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
  orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
  ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
  ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
  ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et
  a urna. Ut id ornare felis, eget fermentum sapien.
</p>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>
```

现在将以下 CSS 应用到您的 HTML 中（使用 {{htmlelement("style")}} 元素或 {{htmlelement("link")}} 到单独的 `.css` 文件——由你选择）：

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.box {
  width: 150px;
  height: 100px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

如果你现在保存并刷新，你会看到和你预期的效果差不多——图片坐落在文本的上方，且保持正常布局流。

### 使盒子浮动起来

为了使盒子浮动起来，向规则 `.box` 下添加 {{cssxref("float")}} 和 {{cssxref("margin-right")}} 属性：

```html hidden
<h1>Simple float example</h1>

<div class="box">Float</div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet.
</p>

<p>
  Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
  orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
  ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
  ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
  ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et
  a urna. Ut id ornare felis, eget fermentum sapien.
</p>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>
```

```css
.box {
  float: left;
  margin-right: 15px;
  width: 150px;
  height: 100px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

现在，如果您保存和刷新，你会看到类似下面的东西：

{{EmbedLiveSample('使盒子浮动起来', '100%', 500)}}

让我们考虑一下浮动是如何工作的——浮动元素 (这个例子中的 {{htmlelement("div")}} 元素) 会脱离正常的文档布局流，并吸附到其父容器的左边（这个例子中的 {{htmlelement("body")}} 元素）。在正常布局中位于该浮动元素之下的内容，此时会围绕着浮动元素，填满其右侧的空间。

向右浮动的内容是一样的效果，只是反过来了——浮动元素会吸附到右边，而其他内容将从左侧环绕它。尝试将上一个例子中的浮动值改为 `right` ，再把 `margin-right` 换成 `margin-left` ，看看结果是什么。

### 让浮动效果可视化

我们可以在浮动元素上应用 margin，将文字推开，但不能在文字上应用 margin 将浮动元素推走。这是因为浮动的元素脱离了正常文档流，紧随其后的元素排布在它的“后方”。你可以将示例代码进行更改，来观察到这个现象。

在紧随浮动盒子的第一段文字上添加 `special` 类，然后在你的 CSS 文件中添加如下规则，它会赋予跟随其后的段落一个背景色。

```css
.special {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
}
```

为了更清晰的看到效果，将浮动的 `margin-left` 改为 `margin` 以将周围全部空出来。如此代码效果所示，你可以看到段落的背景色处于浮动盒子之下。

```html hidden
<h1>Simple float example</h1>

<div class="box">Float</div>

<p class="special">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate.
</p>

<p>
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
</p>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}

.special {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
}
```

{{EmbedLiveSample('让浮动效果可视化', '100%', 500)}}

目标元素的[行内盒子](/zh-CN/docs/Web/CSS/Visual_formatting_model#line_boxes)已被缩短，故文字会排布在浮动元素周围，但是浮动元素从正常文档流移出，故段落的盒子仍然保持全部宽度。

## 清除浮动

我们看到，一个浮动元素会被移出正常文档流，且其他元素会显示在它的下方。如果我们不想让剩余元素也受到浮动元素的影响，我们需要 _停止_ 它；这是通过添加 {{cssxref("clear")}} 属性实现的。

在前例的 HTML 代码中，向浮动元素下方的第二个段落添加 `cleared` 类，然后向 CSS 文件中添加以下样式：

```css
.cleared {
  clear: left;
}
```

```html hidden
<h1>Simple float example</h1>

<div class="box">Float</div>

<p class="special">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate.
</p>

<p class="cleared">
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
</p>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}

.special {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
}

.cleared {
  clear: left;
}
```

{{EmbedLiveSample('清除浮动', '100%', 600)}}

应该看到，第二个段落已经停止了浮动，不会再跟随浮动元素排布了。`clear` 属性接受下列值：

- `left`：停止任何活动的左浮动
- `right`：停止任何活动的右浮动
- `both`：停止任何活动的左右浮动

## 清除浮动元素周围的盒子

现在你知道了如何停止浮动元素其后元素的浮动行为。我们来看个例子，如果存在一个盒子 _同时_ 包含了很高的浮动元素和一个很短的段落，会发生什么。

### 问题所在

改变你的文档结构，使得第一个段落与浮动的盒子共同处于类名为 `wrapper` 的 {{htmlelement("div")}} 元素之下。

```html
<div class="wrapper">
  <div class="box">Float</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate.
  </p>
</div>
```

在你的 CSS 代码中，为 `.wrapper` 类添加如下规则并重载页面：

```css
.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
}
```

此外，将原先的 `.cleared` 类移除：

```css
.cleared {
  clear: left;
}
```

你会看到，就像示例代码一样，如果将背景色属性置于段落上，那么这个背景色将处于浮动元素之下。

```html hidden
<p>
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
</p>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

{{EmbedLiveSample('问题所在', '100%', 600)}}

再一次强调，这是因为浮动元素处于正常文档流之外，停止紧随其后元素的浮动并不像之前那样奏效。如果你想让盒子联合包住浮动的项目以及第一段文字，同时让紧随其后的内容从盒子中清除浮动，这就是一个问题。

有三种方法可以处理这个问题，其中的两种在所有浏览器中均可以奏效（虽然看上去有点“小技巧”），剩下的一种是可以处理问题的较新的解决方案。

### clearfix 小技巧

传统上，这个问题通常由所谓的 "clearfix 小技巧" 解决，其过程为：先向包含浮动内容及其本身的盒子后方插入一些生成的内容，并将生成的内容清除浮动。

向示例中添加以下 CSS 代码：

```css
.wrapper::after {
  content: "";
  clear: both;
  display: block;
}
```

现在重载页面，盒子的浮动就应该清除了。这与在浮动盒子后手动添加诸如 `div` 的 HTML 元素，并设置其样式为 `clear:both` 是等效的。

```html hidden
<h1>Simple float example</h1>
<div class="wrapper">
  <div class="box">Float</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate.
  </p>
</div>
<p class="cleared">
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
</p>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}

.wrapper::after {
  content: "";
  clear: both;
  display: block;
}
```

{{EmbedLiveSample('clearfix 小技巧', '100%', 600)}}

### 使用 overflow

一个替代的方案是将包裹元素的 {{cssxref("overflow")}} 属性设置为除 `visible` 外的其他值。

移除上一节添加的 clearfix CSS 代码；在包裹元素上添加 `overflow: auto` 规则。现在，盒子应该再一次停止浮动。

```css
.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
  overflow: auto;
}
```

```html hidden
<h1>Simple float example</h1>
<div class="wrapper">
  <div class="box">Float</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate.
  </p>
</div>
<p class="cleared">
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
</p>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
  overflow: auto;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

{{EmbedLiveSample('使用 overflow', '100%', 600)}}

这个例子之所以能够生效，是因为创建了所谓的 **块格式化上下文（BFC）**。可以把它看作页面内部包含所需元素的一小块布局区域。如此设置可以让浮动元素包含在 BFC 及其背景之内。大部分情况下这种小技巧都可以奏效，但是可能会出现莫名其妙的滚动条或裁剪阴影，这是使用 overflow 带来的一些副作用。

### display: flow-root

一个较为现代的方案是使用 `display` 属性的 `flow-root` 值。它可以无需小技巧来创建块格式化上下文（BFC），在使用上没有副作用。

从 `.wrapper` 中移除 `overflow: auto` 规则并添加 `display: flow-root`。如果你的浏览器支持该属性（[支持的浏览器列表](/zh-CN/docs/Web/CSS/display#浏览器兼容性)），盒子就会停止浮动。

```css
.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
  display: flow-root;
}
```

```html hidden
<h1>Simple float example</h1>
<div class="wrapper">
  <div class="box">Float</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate.
  </p>
</div>
<p class="cleared">
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
</p>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
  display: flow-root;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

{{EmbedLiveSample('display_flow-root', '100%', 600)}}

## 纸上得来终觉浅！

你已经读完了这一篇文章，但是你还记得几成呢？在继续阅读之前你可以在这里找到一些测试来检验一下：[测试你的技能：浮动](/zh-CN/docs/Learn/CSS/CSS_layout/Floats_skills).

## 总结

现在你应该了解现代网页开发中浮动布局开发的知识了，请参阅 [传统的布局方法](/zh-CN/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods) 以查看它们的用法，没准可以对你老旧的项目有所帮助。

{{PreviousMenuNext("Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout")}}
