---
title: CSS 网格中基于线的定位
slug: Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement
---

{{CSSRef}}

在[探讨网格布局的基础概念](/zh-CN/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)一文中，我们了解了如何使用线编号来排列元素，本文则会全面探索这个基础特性如何工作。

了解编号线是最好的探索网格布局方式的起点，当你使用网格布局时，编号线总是存在。这些线从 1 开始按行和列编号。要注意的是网格是根据书写方向来编号的。在像英文这样从左至右书写的语言中，网格线的 1 是最左边的线。当使用从右至左书写的语言时，网格线 1 就是最右边的线。我们会在之后的文章中深入探讨书写模式和网格间的交互。

## 基础示例

在这个非常简单的例子中，我们使用了 3 行 3 列的导轨，从而每个方向上我们有 4 条线。

网格容器中有 4 个子元素。如果我们不定义它们的位置，它们会按照自动定位规则布局，即前 4 个单元格中各 1 个元素。你可使用 [Firefox Grid Highlighter](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) 查看网格是如何定义行和列的。

![在开发者工具中突出显示的网格](3_hilighted_grid.png)

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
  grid-template-rows: repeat(3, 100px);
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

{{ EmbedLiveSample('基础示例', '300', '330') }}

## 使用线编号定位元素

我们可以使用基于线的定位控制元素在网格上的位置。比如我想要第一个元素从网格的最左开始，占 1 个列导轨。它还应该从第 1 行线开始，延伸至第 4 行线：

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
}
```

当你为某些元素定位，剩下的元素会继续按照自动定位规则定位。我们会在以后的文章中介绍这些规则，但现在你可以看到网格开始把未定位的元素放入空的单元格。

在逐个定义元素后，我们把所有 4 个元素都填充到了网格中。注意，我们可以留空一些单元格。网格布局的一个优势是：无需给元素周围加上 margin 来阻止文档流自动填补空白，就能实现设计中的留白区域。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
}
.box2 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}
.box3 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
.box4 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
}
```

{{ EmbedLiveSample('使用线编号定位元素', '300', '330') }}

## `grid-column` 和 `grid-row` 的简写

我们用了不少代码定位每个元素，你应该不会惊讶有[简写](/zh-CN/docs/Web/CSS/Shorthand_properties)。{{cssxref("grid-column-start")}} 和 {{cssxref("grid-column-end")}} 属性可以合并为 {{cssxref("grid-column")}}、{{cssxref("grid-row-start")}} 和 {{cssxref("grid-row-end")}} 则合并为 {{cssxref("grid-row")}}。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-column: 1 / 2;
  grid-row: 1 / 4;
}
.box2 {
  grid-column: 3 / 4;
  grid-row: 1 / 3;
}
.box3 {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}
.box4 {
  grid-column: 2 / 4;
  grid-row: 3 / 4;
}
```

{{ EmbedLiveSample('grid-column 和 grid-row 的简写', '300', '330') }}

## 默认跨度

在上例中，为了展示这些属性，我们指定了每个结束行线和列线，但实际上如果一个元素只延伸一个轨道的话，你可以省略 `grid-column-end` 或 `grid-row-end` 值。元素默认延伸一个轨道。

### 默认跨度的普通写法

我们最初的示例的普通写法会是这样：

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: 4;
}
.box2 {
  grid-column-start: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}
.box3 {
  grid-column-start: 2;
  grid-row-start: 1;
}
.box4 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 3;
}
```

{{ EmbedLiveSample('默认跨度的普通写法', '300', '330') }}

### 默认跨度的简写

当省略了跨越一个轨道的元素的斜杠和第二个值，我们的简写则会是这样：

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-column: 1;
  grid-row: 1 / 4;
}
.box2 {
  grid-column: 3;
  grid-row: 1 / 3;
}
.box3 {
  grid-column: 2;
  grid-row: 1;
}
.box4 {
  grid-column: 2 / 4;
  grid-row: 3;
}
```

{{ EmbedLiveSample('默认跨度的简写', '300', '330') }}

## `grid-area` 属性

我们可以更进一步，给每个元素只定义一个属性 {{cssxref("grid-area")}}。值的顺序如下

- grid-row-start
- grid-column-start
- grid-row-end
- grid-column-end

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-area: 1 / 1 / 4 / 2;
}
.box2 {
  grid-area: 1 / 3 / 3 / 4;
}
.box3 {
  grid-area: 1 / 2 / 2 / 3;
}
.box4 {
  grid-area: 3 / 2 / 4 / 4;
}
```

{{ EmbedLiveSample('grid-area 属性', '300', '330') }}

`grid-area` 的值的顺序看起来可能有点奇怪，比如说它正好和定义 margin 和 padding 的简写的值的顺序相反。但如果说是因为它与 CSS 书写模式规范中的书写方向相关就不难理解了。我们会在之后的文章中探讨网格与书写模式的关系，但我们有 4 个书写流关联的方向：

- 块起始（block-start）
- 块结束（block-end）
- 行起始（inline-start）
- 行结束（inline-end）

我们现在使用的是英语，一种从左至右书写的语言。块起始就是网格容器的顶端行线，块结束就是底端行线。行起始是左端列线，因为行起始与当前书写模式的起点一致，行结束就是网格右端列线。

当我们用 `grid-area` 属性来定义网格区域时，我们先定义块起始（`block-start`）和行起始（`inline-start`），然后再定义块结束（`block-end`）和行结束（`inline-end`）。起初，我们可能会因为习惯了顶、右、底、左的属性定义顺序，觉得这个顺序奇怪，但当从网站的书写模式有多个方向的角度思考，这就显得合理了。

## 反方向计数

我们也可以从行和块结束线开始反方向计数，对于英语来说就是右端的列线和底端的行线。这些线会被记为 `-1`，然后你可以从这往前数，所以倒数第 2 条线会被记为 `-2`。值得注意的是最后一条线是指显式定义网格的最后一条线，即由 `grid-template-columns` 和 `grid-template-rows` 定义的网格，并不把隐式定义网格的加入的行和列纳入考虑。

下面这个示例中，我们通过从右端和底端开始定义布局，把之前的示例的布局翻转了。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-column-start: -1;
  grid-column-end: -2;
  grid-row-start: -1;
  grid-row-end: -4;
}
.box2 {
  grid-column-start: -3;
  grid-column-end: -4;
  grid-row-start: -1;
  grid-row-end: -3;
}
.box3 {
  grid-column-start: -2;
  grid-column-end: -3;
  grid-row-start: -1;
  grid-row-end: -2;
}
.box4 {
  grid-column-start: -2;
  grid-column-end: -4;
  grid-row-start: -3;
  grid-row-end: -4;
}
```

{{ EmbedLiveSample('反方向计数', '300', '330') }}

### 使元素跨越整个网格

拥有从开始计数和从末尾计数这两种定位方法使得使一个元素跨越整个网格变得很方便：

```css
.item {
  grid-column: 1 / -1;
}
```

## 间距

CSS 网格规范加入了用 {{cssxref("column-gap")}} 和 {{cssxref("row-gap")}} 属性定义列间距和行间距的能力。这两个属性的行为和多列布局中的 {{cssxref("column-gap")}} 属性很像。

> **备注：** 在浏览器首次引入网格属性 {{cssxref("column-gap")}}、{{cssxref("row-gap")}} 和 {{cssxref("gap")}} 时，具有 `grid-` 前缀。分别是 `grid-column-gap`、`grid-row-gap` 和 `grid-gap`。
>
> 浏览器正在更新它们的渲染引擎，以删除这一前缀，但是携带有前缀的版本将以别名的形式进行维护，使得它们可以被安全地使用。

间距只出现在网格轨道与轨道之间，它们并不会出现在网格容器的四周。通过在网格容器上定义这些属性，我们给上例加上了间距：

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-column: 1;
  grid-row: 1 / 4;
}
.box2 {
  grid-column: 3;
  grid-row: 1 / 3;
}
.box3 {
  grid-column: 2;
  grid-row: 1;
}
.box4 {
  grid-column: 2 / 4;
  grid-row: 3;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  column-gap: 20px;
  row-gap: 1em;
}
```

{{ EmbedLiveSample('间距', '300', '350') }}

### 网格间距简写

这两个属性可以用 {{cssxref("gap")}} 简写。如果你只给出一个值，那这个值会同时应用于行间距和列间距。如果你给了两个值，第一个会被用于 `row-gap`，第二个则会被用于 `column-gap`。

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 1em 20px;
}
```

从基于线定位的角度来说，间距的行为就像是使基线变得特别宽。所有从这条线开始的东西会从间距结束的地方开始，你并不能定位也不能放任何东西到这个间距的空间中。如果你希望得到行为和轨道行为相似的间距，你当然可以定义轨道来作为间距。

## 使用 `span` 关键字

除了”起始线与结束线“的定位方法，你还可以使用”起始线与跨越轨道数量“的定位方法

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-column: 1;
  grid-row: 1 / span 3;
}
.box2 {
  grid-column: 3;
  grid-row: 1 / span 2;
}
.box3 {
  grid-column: 2;
  grid-row: 1;
}
.box4 {
  grid-column: 2 / span 2;
  grid-row: 3;
}
```

{{ EmbedLiveSample('使用 span 关键字', '300', '330') }}

你也可以在 `grid-row-start`/`grid-row-end` 和 `grid-column-start`/`grid-column-end` 属性中使用 `span` 关键字。接下来两个例子会创建同样的网格。第一个例子中我们设定了起始行，然后说我们想结束线在跨越 3 条线之后。那这个元素就会从 1 号线开始，跨越 3 条线，到 4 号线结束。

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: span 3;
}
```

第二个例子中，我们定义了结束行线，然后设置起始线为跨越 3 条线。意味着这个元素会从指定的线往上跨越 3 条线。这个元素会从 4 号线开始，跨越 3 条线到 1 号线。

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: span 3;
  grid-row-end: 4;
}
```

为了熟悉基于线的定位方式，你可以尝试用网格布置几个列宽不同的元素来实现一些常见布局。记住，如果你没有给所有元素定位，那些没被定位的元素就会按照自动定位规则定位。这么做的结果可能恰好和你的目标一样，但如果一些元素在你预料之外的地方出现，先检查一下你有没有给它定位。

再者，记住你明确定位的元素是可以互相重叠的。有时你能用这点创造一些有趣的效果，但有时也会因为你定位错了线而导致不正确的重叠。[Firefox Grid Highlighter](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) 可以在你学习时给你帮助，特别是当你的网格比较复杂时。
