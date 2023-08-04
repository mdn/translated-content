---
title: CSS 网格，逻辑值和书写模式
slug: Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes
---

{{CSSRef}}

在前面的文章中，我们已经接触了网格布局的一个重要特性：被纳入规范的对不同书写模式的支持。本文我们将探讨在网格和其他现代布局方式下的这个特性的表现，以及学习一些关于书写模式和逻辑属性与物理属性的知识。

## 逻辑属性与物理属性及逻辑值与物理值

CSS 中布满了**物理**位置的关键字 —— left 和 right，top 和 bottom。当使用绝对位置来定位项目时，就要使项目围绕上用物理关键字描述的偏移量。在下面的代码片断中，项目被定位到距容器顶部 20 像素，并且距容器左侧 30 像素：

```css
.container {
  position: relative;
}
.item {
  position: absolute;
  top: 20px;
  left: 30px;
}
```

```html
<div class="container">
  <div class="item">Item</div>
</div>
```

另一个用到物理关键字的地方是使用 `text-align: right` 把文本对齐到右侧，这也是 CSS 中的**物理**属性。当我们为项目增加外边距、内边距和边框时会使用像 {{cssxref("margin-left")}}，{{cssxref("padding-left")}} 这样的物理属性。

把这些关键字称为*物理*属性，是因为它们与你看到的屏幕紧密相关，左永远是左，不管文本流动的方向如何。

在开发有多种语言的网站时，如果其中包含了从右侧而不是从左侧开始书写的文字，物理属性就会成为一个问题。浏览器很擅长处理文本方向，不需要真的在一种 {{glossary("rtl")}} （从右到左）的语言下开发，我们也可以一窥究竟。下面的例子里有两个段落，一个段落没有设置 {{cssxref("text-align")}} 属性，另一个段落的 `text-align` 设置为 `left`。在 `html` 元素上添加 `dir="rtl"` 声明，就会把书写模式从默认的 `ltr` （从左到右）的英语切换为 `rtl` （从右到左）的语言。我们可以看到，第一段仍然是从左到右显示，因为 `text-align` 的值为 `left`，但第二段把文字的流动方向切换成了从右到左。

![A simple example of text direction.](8_direction_simple_example.png)

这只是在使用物理属性和值时引起问题的一个非常简单的例子，它们阻止浏览器切换书写模式，因为这些物理属性和值已经假设文字的流动方向一定是从左到右、从上到下的。

### 逻辑属性和值

逻辑属性和值不会预设文字方向，这也是为什么在网格布局中要实现对齐到容器的开始位置时使用 `start` 关键字的原因。对我来说，因为我使用英语工作，所以 `start` 就是左侧，不过它并不总是代表左侧，并不能根据 `start` 这个词推断出物理位置。

## 块和行内

如果我们用逻辑属性而不是物理属性来思考，就不能使用从左到右、从上到下的方式观察世界，我们需要一个新的参考点，也就是在此前的文章中讨论*对齐*时接触过的*块轴*与*行内轴*。理解它们是非常重要的，如果开始用块轴与行内轴的方式来看待布局，在网格布局中使用到的术语就变得非常有意义了。

![An image showing the default direction of the Block and Inline Axes.](8-horizontal-tb.png)

## CSS 书写模式

现在我要介绍另一个规范：CSS 书写模式规范，并在下面的例子中给出演示。这个规范详细描述了如何在 CSS 中使用多种不同的书写模式，不仅是支持与英语不同书写模式的语言，而且提供了更富创造性的用途。我将通过使用 {{cssxref("writing-mode")}} 属性来改变网格的书写模式，演示逻辑值是如何工作的。如果你想更深入地探讨书写模式，我推荐你阅读 Jen Simmons 的优秀文章：[CSS Writing Modes](https://24ways.org/2016/css-writing-modes/)，这篇文章对标准的讨论比本文要深入得多。

### writing-mode

书写模式不仅可以使文字从左到右或从右到左显示，`writing-mode` 属性还可以设置其他的文字流动方向。{{cssxref("writing-mode")}} 属性有以下可选值：

- `horizontal-tb`
- `vertical-rl`
- `vertical-lr`
- `sideways-rl`
- `sideways-lr`

属性值 `horizontal-tb` 是 web 上显示文本的默认效果，也就是你现在正在阅读的这篇文章的方向，其他的属性值将会改变文字的流动方向，能匹配世界各地不同的书写模式，这些细节你都可以在 [Jen 的文章](https://24ways.org/2016/css-writing-modes/)中看到。下面用两个段落展示一个简单的例子，第一个段落使用默认的 `horizontal-tb`，第二个段落使用 `vertical-rl`，这种模式下文本仍然从左到右排列，不过文本的方向却是垂直的 —— 现在行内文本是从页面的顶部到底部向下流动的。

```css hidden
.wrapper > p {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  margin: 1em;
  color: #d9480f;
  max-width: 300px;
}
```

```html
<div class="wrapper">
  <p style="writing-mode: horizontal-tb">
    I have writing mode set to the default <code>horizontal-tb</code>
  </p>
  <p style="writing-mode: vertical-rl">
    I have writing mode set to <code>vertical-rl</code>
  </p>
</div>
```

{{ EmbedLiveSample('writing-mode', '500', '420') }}

## 网格布局中的书写模式

现在让我们来做一个网格布局的实验，就可以看到书写模式是如何改变你对块轴和行内轴的看法的。

### 默认书写模式

下面例子是一个二行三列的网格，也就是说有三个沿着块轴方向的轨道。在默认的书写模式下，网格自动定位项目的流向，是从左上开始，向右延伸，填满行内轴方向的三个格子，然后转到下一行，创建一个新的行轨道，继续定位更多的项目：

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
  grid-gap: 10px;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
  <div class="item5">Item 5</div>
</div>
```

{{ EmbedLiveSample('默认书写模式', '500', '330') }}

### 设置书写模式

如果给网格容器加上 `writing-mode: vertical-lr` 属性，就可以看到块轴和行内轴都转到不同的方向了，块轴从左到右地穿过页面，行内轴则从上到下到流动。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  writing-mode: vertical-lr;
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
  grid-gap: 10px;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
  <div class="item5">Item 5</div>
</div>
```

{{ EmbedLiveSample('设置书写模式', '500', '330') }}

![A image showing the direction of Block and Inline when writing-mode is vertical-lr](8-vertical-lr.png)

## 用于对齐的逻辑值

因为块轴和行内轴可以改变方向，所以在对齐属性中使用的逻辑值就具有更丰富的含义。

在下面的例子中，网格被设置了 `writing-mode: vertical-lr` 属性，我们将使用对齐属性来对齐项目。`start` 和 `end` 属性值仍然像在默认的书写模式下那样保留着它们的逻辑，但却已经不是 left 和 right，top 和 bottom 所能够表示的了。只要我们把网格翻转到一边，就会发生这种情况：

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  writing-mode: vertical-lr;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  grid-gap: 10px;
}

.item1 {
  grid-column: 1 / 4;
  align-self: start;
}

.item2 {
  grid-column: 1 / 3;
  grid-row: 2 / 4;
  align-self: start;
}

.item3 {
  grid-column: 3;
  grid-row: 2 / 4;
  align-self: end;
  justify-self: end;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
</div>
```

{{ EmbedLiveSample('用于对齐的逻辑值', '500', '330') }}

如果你要看看在先上到下再从右到左的书写模式，把 `vertical-lr` 换成 `vertical-rl`，就能得到一个从右到左的垂直书写模式。

## 自动定位和书写模式

如上例所示，我们已经看到当书写模式改变了方向时网格是如何定位项目的，项目将被沿着行内轴排列直到下一行，只是行内轴不再总是沿着从左到右的方向罢了。

## 基于网格线的定位和书写模式

要切记，当用网格线序号来定位项目时，不管在哪种书写模式下，第 1 行永远代表开始的那条网格线，第 -1 行永远代表结束的那条网格线。

### 从左到右文本的基于网格线的定位

在下面的例子中，网格的默认方向是 `ltr`（从左到右），用基于网格线定位方式定位了三个项目。

- Item 1 从列的第 1 条线开始，跨越 1 个轨道。
- Item 2 从列表的第 -1 条线开始，跨越到第 -3 条线。
- Item 3 从列的第 1 条线开始，跨越到列的第 3 条线。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
  grid-gap: 10px;
}
.item1 {
  grid-column: 1;
}
.item2 {
  grid-column: -1 / -3;
}
.item3 {
  grid-column: 1 / 3;
  grid-row: 2;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
</div>
```

{{ EmbedLiveSample('从左到右文本的基于网格线的定位', '500', '330') }}

### 从右到左文本的基于网格线的定位

如果现在为网格容器增加一个 {{cssxref("direction")}} 属性，属性值为 `rtl`，那么 第 1 条线就变到了网格的右侧，而第 -1 条线则变到左侧。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  direction: rtl;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
  grid-gap: 10px;
}
.item1 {
  grid-column: 1;
}
.item2 {
  grid-column: -1 / -3;
}
.item3 {
  grid-column: 1 / 3;
  grid-row: 2;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
</div>
```

{{ EmbedLiveSample('从右到左文本的基于网格线的定位', '500', '330') }}

这表明，如果要切换页面整体或部分的文本方向，并且正在使用网格线，那么如果不想让布局受到影响，应该命名网格线。有些情况下，比如网格包含文本内容，切换后的结果可能正是你想要的，但对于其他情况却不一定。

### `grid-area` 属性值的奇怪顺序

可以把定义网格区域的四条线合并为一个值传给 {{cssxref("grid-area")}} 属性，在第一次使用这个属性时，人们经常会惊讶它的写法没有遵从 `margin` 的按顺时针的简写顺序：top，right，bottom，left。

但是 `grid-area` 的简写顺序却是：

- `grid-row-start`
- `grid-column-start`
- `grid-row-end`
- `grid-column-end`

对于英语书写模式来说，从左到右的顺序应该是：

- `top`
- `left`
- `bottom`
- `right`

`grid-area` 的简写顺序是逆时针！与我们常用的 `margin` 和 `padding` 相反。你要意识到 `grid-area` 是从“块和行内”的角度看世界的，牢记应该先设置两条开始线，再设置两条结束线。这样的顺序才更符合逻辑！

## 书写模式与网格布局的结合

书写模式除了为特定语言处理提供便利，另外对于文档的显示效果，也可以提供 `ltr` （从左到右）模式之外的创新性。在下面的例子中，想在网格布局的一侧展示若干链接，就可以通过变更书写模式把这些链接按列轨道方向排列：

```css
.wrapper {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr auto;
  font:
    1em Helvetica,
    Arial,
    sans-serif;
}
.wrapper nav {
  writing-mode: vertical-lr;
}
.wrapper ul {
  list-style: none;
  margin: 0;
  padding: 1em;
  display: flex;
  justify-content: space-between;
}
.wrapper a {
  text-decoration: none;
}
```

```html
<div class="wrapper">
  <div class="content">
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo
      shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea.
      Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi
      beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki
      bean chickweed potato bell pepper artichoke.
    </p>

    <p>
      Nori grape silver beet broccoli kombu beet greens fava bean potato
      quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
      turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter
      purslane fennel azuki bean earthnut pea sierra leone bologi leek soko
      chicory celtuce parsley jícama salsify.
    </p>
  </div>
  <nav>
    <ul>
      <li><a href="">Link 1</a></li>
      <li><a href="">Link 2</a></li>
      <li><a href="">Link 3</a></li>
    </ul>
  </nav>
</div>
```

{{ EmbedLiveSample('书写模式与网格布局的结合', '500', '330') }}

## 物理值和网格布局

在构建网站时经常会遇到物理属性，尽管网格定位和对齐属性及它们的值都遵从书写模式，还是有很多时候即使在网格中也不得不使用物理属性和值。在 [网格布局中的盒模型对齐](/zh-CN/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout) 一文中，演示了在网格区域中如何利用自动边距，而自动边距也是 flexbox 布局的一种技巧，尽管这样又把布局和物理空间纠结到了一起。

如果在网格区域中使用绝对定位，那么你就会使用物理偏移量调整网格区域中的项目的位置。关键是要掌握使用物理属性与逻辑属性的力度，举例来说，要衡量把 `ltr` 切换到 `rtl` 时你需要对 CSS 做多少修改。

### 逻辑属性无处不在！

新的布局方法赋予使用逻辑值定位项目的能力，不过如果和使用物理属性的 `margin`、`padding` 属性混用，切记这些物理属性并不会依据书写模式来改变它们的显示效果。

[CSS 逻辑属性规范](https://drafts.csswg.org/css-logical-props/)的目标是改变现状，在未来的 CSS 中，{{cssxref("margin-left")}} 和 {{cssxref("margin-right")}} 将与[逻辑属性](/zh-CN/docs/Web/CSS/CSS_logical_properties_and_values)相同。Firefox 已经实现了，所以你现在就可以在 Firefox 中试上一试。未来如果得到全面支持，那么通过网格学习到的“块和行内”的知识，你也能马上举一反三地用在其他地方了。
