---
title: 使用命名线布局
slug: Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines
---

{{CSSRef}}

在前几篇文章中，我们已经学习了根据网格轨道创建出的网格线来定位，以及根据命名的模块区域来定位，在本文中我们将探讨如何通过为网格线命名来把这两种方法结合起来。命名网格线不可思议地有用，但是它那把名字和轨道尺寸混在一起的语法看上去令人困惑，不过通过学习本文的示例，它们会变得清晰而简单。

## 在定义网格时命名网格线

在用 `grid-template-rows` 和 `grid-template-columns` 属性定义网格时，可以为网格中的部分或全部网格线命名。为了便于演示，下面将使用在基于网格线定位一文中使用过的简单布局。这次我们会用命名线来创建网格。

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

在定义网格时，把网格线的名字写在方括号内，名字随意。我们先为容器的起点和终点命名，既包括行的，也包括列的。接下来再把处于网格中间的块的起点和终点命名为 `columns-start` 和 `columns-end`，也是包括行和列的。不一定要把全部网格线都命名，只需要为布局时用到的关键线命名即可。

```css
.wrapper {
  display: grid;
  grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
  grid-template-rows: [main-start] 100px [content-start] 100px [content-end] 100px [main-end];
}
```

一旦这些网格线有了名字，我们就可以用比线序号更易用的线名字来定位项目了。

```css
.box1 {
  grid-column-start: main-start;
  grid-row-start: main-start;
  grid-row-end: main-end;
}
.box2 {
  grid-column-start: content-end;
  grid-row-start: main-start;
  grid-row-end: content-end;
}
.box3 {
  grid-column-start: content-start;
  grid-row-start: main-start;
}
.box4 {
  grid-column-start: content-start;
  grid-column-end: main-end;
  grid-row-start: content-end;
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

{{ EmbedLiveSample('在定义网格时命名网格线', '500', '330') }}

基于网格线布局的其他知识仍然照常可用，而且可以把命名线和线序号混合使用。为线命名的方法对于创建响应式页面特别有用，当需要在媒体查询中重新定义网格时，你就不需要通过修改线序号来改变布局，只要直接使用定义过的线名字就可以了，因为（即使在不同的布局中）线的名字总是相同的。

### 为网格线定义多个名字

你可能想要给一条线命名多个名字，比如在上例中的 sidebar-end 和 main-start 其实是同一条线。为了实现这个效果，只要把多个名字都写到方括号里，然后用空格分隔就行了：`[sidebar-end main-start]`。在引用时可以使用其中的任何一个名字。

## 由命名线定义的隐式网格区域

前面提到过，可以为网格线取任意名字，名字是 [custom ident](https://drafts.csswg.org/css-values-4/#custom-idents) 类型的，它由开发者定义。不过在命名时要避免使用可能会出现在规范中的容易引起混淆的词，比如 `span`。名字两端不用加引号。

在选择名字时，如果把一个区域周围的线都用 `-start` 和 `-end` 作为后缀，就像上面的例子那样，网格就会为区域创建一个名字，名字就是后缀前的单词。再看上面的例子，我们把一些行和列命名为 `content-start` 和 `content-end`，这意味着得到了一个命名为 content 的网格区域，并且可以在这个区域中放入你想放的内容。

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

下面的示例代码中，使用与上例相同的网格定义，但这次会在命名为 `content` 的区域里放入一个单独的项目。

```css
.wrapper {
  display: grid;
  grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
  grid-template-rows: [main-start] 100px [content-start] 100px [content-end] 100px [main-end];
}
.thing {
  grid-area: content;
}
```

```html
<div class="wrapper">
  <div class="thing">I am placed in an area named content.</div>
</div>
```

{{ EmbedLiveSample('由命名线定义的隐式网格区域', '500', '330') }}

不需要通过 `grid-template-areas` 来指定区域的位置，因为它已经被命名线约束好了。

## 由网格区域隐式定义的命名线

上面我们看到了如何通过命名网格线来创建命名的区域，而且这个方法反过来也可行，先用命名的模块区域来定义命名线，再用命名线定位项目。下面尝试利用《网格模板区域》一文中的布局示例，来探讨由网格区域创建的命名线是如何工作的。

在这个例子中额外增加了一个 div，它的样式类名为 `overlay`。我们先用 `grid-area` 属性创建命名的区域，然后用 `grid-template-areas` 创建布局。区域的名字是：

- `hd`
- `ft`
- `main`
- `sd`

由此，即隐式地创建了行列网格线：

- `hd-start`
- `hd-end`
- `sd-start`
- `sd-end`
- `main-start`
- `main-end`
- `ft-start`
- `ft-end`

下图中可以看到被命名的网格线，注意，有些线有 2 个名字，比如 `sd-end` 和 `main-start` 指的是同一条线。

![An image showing the implicit line names created by our grid areas.](5_multiple_lines_from_areas.png)

接下来使用隐式命名的网格线来定位项目 `overlay`，这和先显式命名网格线然后再定位是一样的。

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
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas:
    "hd hd hd hd   hd   hd   hd   hd   hd"
    "sd sd sd main main main main main main"
    "ft ft ft ft   ft   ft   ft   ft   ft";
}
.header {
  grid-area: hd;
}
.footer {
  grid-area: ft;
}
.content {
  grid-area: main;
}
.sidebar {
  grid-area: sd;
}
.wrapper > div.overlay {
  z-index: 10;
  grid-column: main-start / main-end;
  grid-row: hd-start / ft-end;
  border: 4px solid rgb(92, 148, 13);
  background-color: rgba(92, 148, 13, 0.4);
  color: rgb(92, 148, 13);
  font-size: 150%;
}
```

```html
<div class="wrapper">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Content</div>
  <div class="footer">Footer</div>
  <div class="overlay">Overlay</div>
</div>
```

{{ EmbedLiveSample('由网格区域隐式定义的命名线', '500', '330') }}

为了获得由命名的区域隐式创建命名线的能力，和由命名线隐式创建区域的能力，在创建网格布局时花一点时间来设计命名策略是非常值得的。慎重地选择名字对你和你的团队的意义在于，你创建网格的工作会变得容易，对其他使用和维护网格的人也大有益处。

## 用 repeat() 定义相同名字的多条线

如果要给网格中所有的线都定义唯一的名字，就要用普通写法，即在定义轨道时把名字写在方括号里，而不能使用 repeat 语法。使用 repeat 语法的结果是得到有相同名字的多条线，不过这也是有用的。

### 使用 repeat() 定义 12 列的网格

下面的例子创建了一个有 12 个等宽列的网格，在定义列轨道尺寸为 1fr 之前，也定义了网格线名字 `[col-start]`，也就是说最终会创建一个 12 列的网格，每个 `1fr` 宽的列左侧的线都被命名为 `col-start`。

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
  grid-template-columns: repeat(12, [col-start] 1fr);
}
```

网格创建好之后，就可以在其中定位项目了。我们有多条名为 `col-start` 的线，如果有一个项目位于 `col-start` 之后，就是指命名为 `col-start` 的第一条线，也就是指最左边那条线。如果要引用其他的同名线，就要加上序号。比如要定位项目从名为 col-start 的第 1 条线开始，到第 5 条线结束，应该这样写：

```css
.item1 {
  grid-column: col-start / col-start 5;
}
```

此处也可以使用 `span` 关键字。比如下一个项目的位置从名为 `col-start` 的第 7 条线开始，跨越 3 条线。

```css
.item2 {
  grid-column: col-start 7 / span 3;
}
```

```html
<div class="wrapper">
  <div class="item1">I am placed from col-start line 1 to col-start 5</div>
  <div class="item2">I am placed from col-start line 7 spanning 3 lines</div>
</div>
```

{{ EmbedLiveSample('使用 repeat() 定义 12 列的网格', '500', '330') }}

如果在 Firefox Grid Highlighter 中查看布局，就能观察到纵向的列线，以及项目是如何依赖这些线来定位的。

![The 12 column grid with items placed. The Grid Highlighter shows the position of the lines.](5_named_lines1.png)

### 使用轨道列表定义命名网格线

repeat 语法不仅可用于重复的单一轨道尺寸，也可以用于轨道列表。下面的代码创建了一个 8 个轨道的网格，在一个名为 `col1-start` 的 `1fr` 窄轨道之后，跟着是一个名为 `col2-start` 的 `3fr` 宽轨道。

```css
.wrapper {
  grid-template-columns: repeat(4, [col1-start] 1fr [col2-start] 3fr);
}
```

如果 repeat 语法包含相邻的两条网格线，那它们会被合并，结果就像是不用 repeat 语法的创建的，所有的网格线都有多个名字。在下面的定义中，创建了四条 `1fr` 的轨道，每条轨道都有开始名和结束名。

```css
.wrapper {
  grid-template-columns: repeat(4, [col-start] 1fr [col-end]);
}
```

如果不用 repeat 语法来定义它们，应该写成这样。

```css
.wrapper {
  grid-template-columns: [col-start] 1fr [col-end col-start] 1fr [col-end col-start] 1fr [col-end col-start] 1fr [col-end];
}
```

如果已经定义了一个轨道列表，接下来在使用 span 关键字定位项目时，不仅可以在 span 后面写一个行序数，还可以在 `span` 后面写一个命名线的行序数。

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
  grid-template-columns: repeat(6, [col1-start] 1fr [col2-start] 3fr);
}
.item1 {
  grid-column: col1-start / col2-start 2;
}
.item2 {
  grid-row: 2;
  grid-column: col1-start 2 / span 2 col1-start;
}
```

```html
<div class="wrapper">
  <div class="item1">
    I am placed from col1-start line 1 to col2-start line 2
  </div>
  <div class="item2">
    I am placed from col1-start line 2 spanning 2 lines named col1-start
  </div>
</div>
```

{{ EmbedLiveSample('使用轨道列表定义命名网格线', '500', '330') }}

通过前面的三篇文章，我们发现使用网格布局时有非常多不同的方法来定位项目，这乍看起来有些过于复杂了，不过其实你不必把它们都用上。在实践中，我发现使用命名的模块区域是最直截了当的布局方法，它的可视化表示法能让你看到布局的效果，并且也容易在网格上移动项目。

### 三列布局

一个严格的多列布局已经可以工作得很好了，比如本文最后一部分用命名线做的演示，如果你考虑使用 Foundation 或 Bootstrap 这类框架，它们提供的是基于 12 列的网格系统，框架会导入代码然后进行计算以确保所有的列宽加在一起是 100%。如果使用网格布局，那么我们的“框架”只有这些代码就够了：

```css
.wrapper {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, [col-start] 1fr);
}
```

然后就可以使用这个框架来布局页面了。比如，创建一个三列的布局，有头部和尾部，HTML 代码如下所示。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > * {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <header class="main-header">I am the header</header>
  <aside class="side1">I am sidebar 1</aside>
  <article class="content">I am the main article</article>
  <aside class="side2">I am sidebar 2</aside>
  <footer class="main-footer">I am the footer</footer>
</div>
```

接下来就可以在网格布局框架上定位元素了。

```css
.main-header,
.main-footer {
  grid-column: col-start / span 12;
}
.side1 {
  grid-column: col-start / span 3;
  grid-row: 2;
}
.content {
  grid-column: col-start 4 / span 6;
  grid-row: 2;
}
.side2 {
  grid-column: col-start 10 / span 3;
  grid-row: 2;
}
```

{{ EmbedLiveSample('三列布局', '500', '330') }}

再一次，Firefox Grid Highlighter 工具帮助我们看到网格是如何定位项目的。

![The layout with the grid highlighted.](5_named_lines2.png)

这就是我们需要的，不用做任何计算，网格在分配 1fr 的列轨道空间之前会自动把 10 像素的轨道间距删除掉。在你动手创建自己的布局的过程中，语法会变得越来越熟悉，你能找到适于自己的方法和喜欢创建的项目类型。尝试用不同的方法去创建一些通用的布局模式，你会找到最适合自己的工作方式。在下一篇文章中我们会探讨如何用网格定位元素 —— 根本不需要使用定位属性！
