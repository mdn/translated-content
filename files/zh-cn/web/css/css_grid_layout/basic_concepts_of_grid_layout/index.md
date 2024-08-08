---
title: 网格布局的基本概念
slug: Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout
l10n:
  sourceCommit: 21ed195dd72d2f11c0c7e0fdd0ed0aaf31068de1
---

{{CSSRef}}

[CSS 网格布局](/zh-CN/docs/Web/CSS/CSS_grid_layout)引入了二维网格布局系统，可用于布局页面主要的区域或小型用户界面元素。本文介绍了 CSS 网格布局与 CSS 网格布局规范第 1 版中的新术语。这篇简介中所展示的每种特性，将在本指南的其余部分中详细介绍。

## 什么是网格？

网格是一组相交的水平线和垂直线，它定义了网格的列和行。我们可以将网格元素放置在与这些列和行相关的位置上。CSS 网格布局具有以下特点：

### 固定的位置和弹性的轨道的大小

你可以使用固定的轨道尺寸创建网格，比如使用像素单位。你也可以使用比如百分比或者专门为此目的创建的新单位 `fr` 来创建有弹性尺寸的网格。

### 网格项摆放

你可以使用行号、行名或者标定一个网格区域来精确定位元素。网格同时还使用一种算法来控制未给出明确网格位置的元素。

### 创建额外的轨道来包含内容

可以通过网格布局定义显式网格。网格布局规范非常灵活，可以在需要时添加额外的行和列。包括添加“一个容器能容纳的尽可能多的列”等特性。

### 对齐控制

网格包含对齐特性，因此我们可以控制项目放入网格区域后的对齐方式，以及整个网格的对齐方式。

### 控制重叠内容

多个项目可以放置在网格单元格中，或者区域可以部分地彼此重叠。然后可以使用 {{cssxref("z-index")}} 属性来控制重叠区域显示的优先级。

网格布局是一个强大的规范，当与 CSS 的其他部分（如[弹性盒](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout)）结合使用时，可以帮助你创建以前不可能在 CSS 中构建的布局。这一切都是通过在**网格容器**上创建一个网格来开始的。

## 网格容器

我们通过在元素上声明 `display：grid` 或 `display：inline-grid` 来创建一个*网格容器*。一旦我们这样做，这个元素的所有*直系子元素*将成为*网格项目*。

在这个示例中，有一个类名为 `wrapper` 的 `div` 元素作为容器，其内部有五个子元素。

```html
<div class="wrapper">
  <div>一</div>
  <div>二</div>
  <div>三</div>
  <div>四</div>
  <div>五</div>
</div>
```

我将 `.wrapper` 作为一个网格容器。

```css
.wrapper {
  display: grid;
}
```

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

{{ EmbedLiveSample('网格容器', '200', '330') }}

所有直系子元素现在都是网格项了。在 web 浏览器中，元素转为网格项前看不出什么差异，因为网格给这些元素创建了一个单列网格。此刻，Firefox 开发者版（Developer Edition）可能会助你一臂之力。此时，你可能会发现使用 Firefox 开发工具中的[网格检查器](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)非常有用。如果你在 Firefox 中查看此示例并检查网格，会看到 `grid` 值旁边有一个小图标。单击该图标后，该元素上的网格就会显示到浏览器窗口中。

![使用 DevTools 中的网格高亮器观察网格](1-grid-inspector.png)

当你学习并且使用 CSS 网格布局时，这个工具能让你更好地了解到你的网格在视觉上发生了哪些变化。

如果我们想让这个示例更加“网格化”，我们需要使用列轨道。

## 网格轨道

我们使用 {{cssxref("grid-template-rows")}} 和 {{cssxref("grid-template-columns")}} 属性定义网格上的行和列。这些属性定义了网格轨道。_网格轨道_（grid track）是网格上任意两条相邻线之间的空间。下图显示了一个突出显示的轨道——这是网格中第一行的轨道。

![一个包含 3 个网格项的方框。在这三个项目的上方有一个浅绿色的实心区域，这就是轨道。](1_grid_track.png)

通过使用 `grid-template-columns` 和 `grid-template-rows` 属性或简写的 `grid` 或 `grid-template` 属性，可在显式网格中定义网格轨道。在隐式网格中，也可以通过在显式网格中创建的轨道外定位网格项来创建轨道。

### 基本示例

我可以通过添加 `grid-template-columns` 属性将列轨道添加到之前的示例，然后定义列轨道的大小。

我现在创建了一个网格，包含了三个 200 像素宽的列轨道。子元素将在网格上每个网格单元中摆放。

```html
<div class="wrapper">
  <div>一</div>
  <div>二</div>
  <div>三</div>
  <div>四</div>
  <div>五</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```

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

{{EmbedLiveSample('基本示例', '610', '140')}}

### fr 单位

轨道可以使用任何长度单位进行定义。网格还引入了一个另外的长度单位来帮助我们创建灵活的网格轨道。新的 `fr` 单位代表网格容器中可用空间的一部分。下一个网格定义将创建三个等宽的轨道，并根据可用空间的大小进行增减。

```html
<div class="wrapper">
  <div>一</div>
  <div>二</div>
  <div>三</div>
  <div>四</div>
  <div>五</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

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

{{ EmbedLiveSample('fr 单位', '220', '140') }}

### 不同尺寸

在下面的这个示例中，我们定义了一个 `2fr` 轨道和两个 `1fr` 轨道。可用空间被四等分。其中两份给了第一个轨道，剩下两个轨道各占一份。

```html
<div class="wrapper">
  <div>一</div>
  <div>二</div>
  <div>三</div>
  <div>四</div>
  <div>五</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}
```

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

{{ EmbedLiveSample('不同尺寸', '220', '140') }}

### 混合弹性尺寸和绝对尺寸

在最后一个示例中，我们将绝对大小的轨道与 `fr` 单位混合使用。第一条轨道是 500 像素，因此从可用空间中扣除了固定宽度。剩下的空间被一分为三，并按比例分配给两个灵活的轨道。

```html
<div class="wrapper">
  <div>一</div>
  <div>二</div>
  <div>三</div>
  <div>四</div>
  <div>五</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 500px 1fr 2fr;
}
```

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

{{ EmbedLiveSample('混合弹性尺寸和绝对尺寸', '220', '140') }}

### 在轨道列表中使用 repeat() 标记

包含多个轨道的大型网格可使用 `repeat()` 标记来重复部分或整个轨道列表。如下方的网格定义：

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

也可写成：

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

Repeat 标记可以用于重复轨道列表中的一部分。在下面的示例中我创建了一个网格，其起始轨道为 20 像素，接着重复了 6 个 `1fr` 的轨道，最后再添加了一个 20 像素的轨道。

```css
.wrapper {
  display: grid;
  grid-template-columns: 20px repeat(6, 1fr) 20px;
}
```

Repeat 标记可以传入一个轨道列表，因此你可以用它来创建一个多轨道模式的重复轨道列表。在下一个示例中，网格将有共计 10 个轨道，为 1 个 `1fr` 轨道后面跟着 1 个 `2fr` 轨道，该模式重复 5 次。

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr 2fr);
}
```

### 隐式和显式网格

在创建示例网格时，我们使用 {{cssxref("grid-template-columns")}} 属性专门定义了列轨道，但网格也会自行创建行。这些行是隐式网格的一部分。而显式网格由使用 {{cssxref("grid-template-columns")}} 或 {{cssxref("grid-template-rows")}} 定义的任何行和列组成。

如果你在定义的网格外放置内容，或者由于内容太多，需要更多的网格轨道，那么网格就会在隐式网格中创建行和列。默认情况下，这些轨道会自动调整大小，因此它们的大小取决于轨道内的内容。

你还可以使用 {{cssxref("grid-auto-rows")}} 和 {{cssxref("grid-auto-columns")}} 属性为在隐式网格中创建的轨道定义设定大小。

在下面的示例中我们用 `grid-auto-rows` 属性来确保在隐式网格中创建的轨道是 200 像素高。

```html
<div class="wrapper">
  <div>一</div>
  <div>二</div>
  <div>三</div>
  <div>四</div>
  <div>五</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
}
```

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

{{ EmbedLiveSample('隐式和显式网格', '230', '450') }}

### 轨道大小和 minmax

在设置显式网格或定义自动创建的行或列的大小时，我们可能希望给轨迹一个最小尺寸，但也要确保它们能扩展以适应添加的任何内容。例如，我可能希望我的行永远不会缩小到 100 像素以下，但如果我的内容高度扩展到 300 像素，那么我希望行也能扩展到这个高度。

网格布局提供了 {{cssxref("minmax", "minmax()")}} 函数来解决这个问题。在下一个示例中，我在 {{cssxref("grid-auto-rows")}} 的值中使用了 `minmax()`。这意味着自动创建的行高度最小为 100 像素，最大为 `auto`。使用 `auto` 表示大小将取决于内容的大小，并将拉伸以在该行中为单元格中最高的项目留出空间。

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
```

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

```html
<div class="wrapper">
  <div>一</div>
  <div>
    二
    <p>这里有更多内容。</p>
    <p>使得这里高于 100 像素。</p>
  </div>
  <div>三</div>
  <div>四</div>
  <div>五</div>
</div>
```

{{ EmbedLiveSample('轨道大小和 minmax', '240', '470') }}

## 网格线

应该注意的是，当我们定义网格时，我们定义的是网格轨道，而不是网格线。网格布局会为我们创建编号的网格线来让我们来定位每一个网格元素。例如下面这个三列两行的网格中，就拥有四条纵向的网格线。

![显示编号网格线的示意图。](1_diagram_numbered_grid_lines.png)

网格线的编号顺序取决于文章的书写模式。在从左至右书写的语言中，编号为 1 的网格线位于最左边。在从右至左书写的语言中，编号为 1 的网格线位于最右边。网格线也可以被命名，我们将在稍后的教程中看到如何完成这一操作。

### 跨轨道放置网格项目

我们将在以后的文章中详细探讨基于行的放置。下面的示例以简单的方式演示了这一点。放置项目时，我们的目标是网格线而不是网格轨道。

在下面的示例中，我使用 {{cssxref("grid-column-start")}}、{{cssxref("grid-column-end")}}、{{cssxref("grid-row-start")}} 和 {{cssxref("grid-row-end")}} 属性，将前两个项目放置在三列轨道网格上。从左到右，第一个项目放置在第 1 列，并跨越到第 4 列，在我们的示例中，第 4 列是网格的最右边一行。它开始于第 1 行，结束于第 3 行，因此跨越了两条行轨。

第二个项目从网格列第 1 行开始，跨越一个轨道。这是默认设置，因此我不需要指定终止行。它还跨越了从第 3 行到第 5 行的两条行轨道。其他项目将放置在网格的空白处。

```html
<div class="wrapper">
  <div class="box1">一</div>
  <div class="box2">二</div>
  <div class="box3">三</div>
  <div class="box4">四</div>
  <div class="box5">五</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 3;
  grid-row-end: 5;
}
```

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

{{ EmbedLiveSample('跨轨道放置网格项目', '220', '410') }}

> [!NOTE]
> 别忘了你可以使用 Firefox 开发者工具中的[网格检查器](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)查看这些元素是如何被摆放在网格中的。

### 网格线定位简写

对于列，可以使用 {{cssxref("grid-column")}} 将上面使用的完整值压缩到一行，对于行，可以使用 {{cssxref("grid-row")}} 将其压缩到一行。下面的示例将提供与前面代码相同的定位，但 CSS 内容要少得多。斜线字符（`/`）前面的值为起始网格线，斜线字符（`/`）后面的值为终止网格线。

如果网格项只跨越了一个轨道，可以省略终止值。

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column: 1 / 4;
  grid-row: 1 / 3;
}

.box2 {
  grid-column: 1;
  grid-row: 3 / 5;
}
```

## 网格单元

_网格单元_（grid cell）是网格项中最小的单位，从概念上来讲其实它和表格的一个单元格很像。现在再看回我们前面的一个例子，一旦一个网格元素被定义为父级元素，那么它的子级元素将会排列在每个事先定义好的网格单元中。在下面的图中，我会将第一个网格单元作高亮处理。

![网格的第一个单元格突出显示](1_grid_cell.png)

## 网格区域

项目可以按行或列跨越一个或多个单元格，这样就形成了一个*网格区域*（grid area）。网格区域必须是矩形的（例如不能创建 L 形区域）。突出显示的网格区域跨越了两条行轨道和两条列轨道。

![一个网格区域](1_grid_area.png)

## 网格间距

网格单元格之间的*横向间距*（gutter）或*纵向间距*（alley）可以使用 {{cssxref("column-gap")}} 和 {{cssxref("row-gap")}} 属性或简写 {{cssxref("gap")}} 来创建。在下面的示例中，我在列与列之间创建了 10 像素的间隙，在行与行之间创建了 1em 的间隙。

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 1em;
}
```

> [!NOTE]
> 当网格布局首次在浏览器中使用时，{{cssxref("column-gap")}}、{{cssxref("row-gap")}} 和 {{cssxref("gap")}} 都带有 `grid-` 前缀，分别称为 `grid-column-gap`、`grid-row-gap ` 和 `grid-gap`。现在，所有浏览器都支持无前缀值，但前缀版本将作为别名保留，以便安全使用。

```html
<div class="wrapper">
  <div>一</div>
  <div>二</div>
  <div>三</div>
  <div>四</div>
  <div>五</div>
</div>
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  column-gap: 10px;
  row-gap: 1em;
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

{{ EmbedLiveSample('网格间距') }}

网格间距使用的任何空间都会在分配给灵活长度的 `fr` 轨道之前计算在内，而且网格间距的大小与常规网格轨道相同，但不能在间距中放置任何东西。就基于行的定位而言，网格间距就像一条粗线。

## 嵌套网格

网格项可以也成为一个网格容器。在下面的示例中，我使用了之前创建的三栏网格，并放置了两个项目。在本例中，第一个项目有一些子项目。由于这些项目不是网格的直接子项，它们不参与网格布局，因此显示在正常的文档流中。

![文档流中的嵌套网格](1_nested_grids_in_flow.png)

### 不使用子网格的嵌套

如果我将 `box1` 设置为 `display: grid`，我就可以给它一个轨道定义，它也会变成一个网格项。然后，项目就会排列在这个新网格上。

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

```html hidden
<div class="wrapper">
  <div class="box box1">
    <div class="nested">a</div>
    <div class="nested">b</div>
    <div class="nested">c</div>
  </div>
  <div class="box box2">二</div>
  <div class="box box3">三</div>
  <div class="box box4">四</div>
  <div class="box box5">五</div>
</div>
```

```css
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  gap: 3px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}

.box1 {
  grid-column: 1 / 4;
}

.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

{{ EmbedLiveSample('不使用子网格的嵌套', '600', '340') }}

在这种情况下，嵌套网格与父网格没有任何关系。正如你在示例中看到的，它没有继承父网格的 {{cssxref("gap")}}，嵌套网格中的行也没有与父网格中的行对齐。

### 子网格

除了常规网格外，_子网格_（subgrid）还能让我们创建嵌套网格，使用父网格的轨道定义。

要使用它们，我们可以编辑上述嵌套网格示例，将 `grid-template-columns: repeat(3,1fr)` 的轨道定义更改为 `grid-template-columns: subgrid`。嵌套网格就会沿用父网格轨道来布局项目。

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: subgrid;
}
```

## 使用 z-index 控制层级

网格项可以占据同一单元格，在这种情况下，我们可以使用 {{cssxref("z-index")}} 属性来控制重叠项的堆叠顺序。

### 不使用 z-index 的重叠

如果我们回到按行号定位项目的示例，就可以改变这种方法，使两个项目重叠。

```html
<div class="wrapper">
  <div class="box box1">一</div>
  <div class="box box2">二</div>
  <div class="box box3">三</div>
  <div class="box box4">四</div>
  <div class="box box5">五</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 2;
  grid-row-end: 4;
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

{{ EmbedLiveSample('不使用 z-index 的重叠', '230', '460') }}

网格项目 `box2` 现在覆盖于 `box1` 之上，因为它在源文件顺序中排在后面。

### 控制顺序

我们可以在网格项目发生重叠时使用 `z-index` 属性控制重叠的顺序——就像放置网格项目一样。如果我们给 `box2` 设定一个低于 `box1` 的 `z-index` 值的话，`box2` 将会显示在 `box1` 的下方。

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  z-index: 2;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 2;
  grid-row-end: 4;
  z-index: 1;
}
```

```html hidden
<div class="wrapper">
  <div class="box box1">一</div>
  <div class="box box2">二</div>
  <div class="box box3">三</div>
  <div class="box box4">四</div>
  <div class="box box5">五</div>
</div>
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

{{ EmbedLiveSample('控制顺序', '230', '460') }}

## 下一步

在本文中，我们快速了解了网格布局的各种可能性。探索并玩转代码示例，然后进入[本指南的下一部分](/zh-CN/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)，在这里我们将真正开始挖掘 CSS 网格布局的细节。
