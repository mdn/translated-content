---
title: Subgrid
slug: Web/CSS/Guides/Grid_layout/Subgrid
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

[CSS 网格布局](/zh-CN/docs/Web/CSS/Guides/Grid_layout)模块为 {{cssxref("grid-template-columns")}} 和 {{cssxref("grid-template-rows")}} 提供了一个 `subgrid` 取值。本指南详细介绍了子网格的作用，并列举一些该特性适用的例子和设计模式。

## 子网格简介

当你为网格容器添加 [`display: grid`](/zh-CN/docs/Web/CSS/Reference/Properties/display) 样式时，只有直接子元素会成为网格项，这些网格项随后可被放置在你创建的网格中，而这些网格项的子元素仍会以常规流布局展示。

你可以通过将网格项设置为网格容器的方式来实现网格的“嵌套”。但是，这些嵌套网格独立于父网格，彼此也相互独立。这意味着，它们不会继承父网格的轨道尺寸，这使得让嵌套网格项与主网格对齐变得十分困难。

如果你在 `grid-template-columns`、`grid-template-rows` 或为二者同时设置 `subgrid` 属性值，那么该嵌套网格不会生成新的轨道列表，而是直接继承父网格中定义的轨道。

例如，若你为嵌套网格设置 `grid-template-columns: subgrid`，且该嵌套网格跨占父网格的三列轨道，那么这个嵌套网格将会有与父网格相同大小的三列轨道。尽管[网格间距](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#网格间距)也会被继承，但可以通过不同的 {{cssxref("gap")}} 值进行覆盖。[具名网格线](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)可以从父网格传递到子网格，子网格也可以声明自己的具名网格线。

## 列子网格

在下方示例中，该网格布局包含 9 个宽度为 `1fr` 的列轨道，以及 4 行最小高度为 100px 的行轨道。

`.item` 元素被放置在第 2 至第 7 列网格线之间，位于第 2 行到第 4 行。该网格项自身通过使用 `display: grid` 被设定为网格，然后将其列轨道设置为子网格（即设置 `grid-template-columns: subgrid`），同时使用常规的行轨道定义，使其成为一个列方向子网格。由于该子网格跨占了 5 列轨道，因此它自身也拥有 5 列轨道。

因为 `.item` 元素是一个子网格，尽管 `.subitem` 元素不是外层 `.grid` 网格容器的直接子项，它仍然可以被放置在外层网格上，并且它的列与外层网格的列对齐。由于它的行轨道不是子网格，因此其行为就像一个嵌套的网格一样。父网格的区域会扩展到足够大以容纳这个嵌套网格。

```html live-sample___columns
<div class="grid">
  <div class="item">
    <div class="subitem"></div>
  </div>
</div>
```

```css hidden live-sample___columns
* {
  box-sizing: border-box;
}

.grid {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
}

.subitem {
  background-color: rgb(40 240 83);
}
```

```css live-sample___columns
.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-template-rows: repeat(3, 80px);
}

.subitem {
  grid-column: 3 / 6;
  grid-row: 1 / 3;
}
```

注意，子网格内的行号会重新开始——当在子网格内时，第 1 列就是子网格的第一条线。子网格元素不会继承父网格元素的行号。这意味着你可以安全地布局一个组件，尽管它可能会被放置在主网格的不同位置上，但组件上的行号将始终保持一致。

{{EmbedLiveSample("columns", "", "450px")}}

## 行子网格

这个示例使用了与上面相同的 HTML，但此处 `subgrid` 是以 `grid-template-rows` 值来应用的，同时对列轨道进行了显式定义。在这种情况下，列轨道的表现与常规嵌套网格一致，而行轨道则与 `.item` 元素所跨占的两条轨道绑定。

```html live-sample___rows hidden
<div class="grid">
  <div class="item">
    <div class="subitem"></div>
  </div>
</div>
```

```css hidden live-sample___rows
* {
  box-sizing: border-box;
}

.grid {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
}

.subitem {
  background-color: rgb(40 240 83);
}
```

```css live-sample___rows
.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: subgrid;
}

.subitem {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
```

{{EmbedLiveSample("rows", "", "450px")}}

## 两个维度上的子网格

此示例中，行和列均被定义为子网格，使得该子网格在两个维度上均与父网格的轨道绑定。

```html live-sample___both hidden
<div class="grid">
  <div class="item">
    <div class="subitem"></div>
  </div>
</div>
```

```css hidden live-sample___both
* {
  box-sizing: border-box;
}

.grid {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
}

.subitem {
  background-color: rgb(40 240 83);
}
```

```css live-sample___both
.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}

.subitem {
  grid-column: 3 / 6;
  grid-row: 1 / 3;
}
```

{{EmbedLiveSample("both", "", "450px")}}

### 子网格维度中没有隐式网格

如果需要让项目自动布局，并且无法确定项目数量，那么在创建子网格时需要格外注意——因为子网格会阻止额外的行被创建来容纳这些项目。

来看下一个示例——该示例使用了与上文示例相同的父网格和子网格。子网格内共有 12 个项，这些项试图自动放置到 10 个网格单元中。由于该子网格同时作用于行和列两个维度，剩余的两个项目没有地方可以放置，只能被放置到网格的最后一个轨道。这是规范中定义的行为。

```html live-sample___no-implicit
<div class="grid">
  <div class="item">
    <div class="subitem">1</div>
    <div class="subitem">2</div>
    <div class="subitem">3</div>
    <div class="subitem">4</div>
    <div class="subitem">5</div>
    <div class="subitem">6</div>
    <div class="subitem">7</div>
    <div class="subitem">8</div>
    <div class="subitem">9</div>
    <div class="subitem">10</div>
    <div class="subitem">11</div>
    <div class="subitem">12</div>
  </div>
</div>
```

```css hidden live-sample___no-implicit
* {
  box-sizing: border-box;
}
body {
  font: 1.2em sans-serif;
}

.grid {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  color: #d9480f;
}

.subitem {
  background-color: #d9480f;
  color: white;
  border-radius: 5px;
}
```

```css live-sample___no-implicit
.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}
```

{{EmbedLiveSample("no-implicit", "", "440px")}}

移除 `grid-template-rows` 的值后，常规的隐式轨道生成机制便会被激活，会根据需要自动创建足够的行。这些行将不会与父网格的轨道对齐。

```html live-sample___implicit
<div class="grid">
  <div class="item">
    <div class="subitem">1</div>
    <div class="subitem">2</div>
    <div class="subitem">3</div>
    <div class="subitem">4</div>
    <div class="subitem">5</div>
    <div class="subitem">6</div>
    <div class="subitem">7</div>
    <div class="subitem">8</div>
    <div class="subitem">9</div>
    <div class="subitem">10</div>
    <div class="subitem">11</div>
    <div class="subitem">12</div>
  </div>
</div>
```

```css hidden live-sample___implicit
* {
  box-sizing: border-box;
}
body {
  font: 1.2em sans-serif;
}

.grid {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  color: #d9480f;
}

.subitem {
  background-color: #d9480f;
  color: white;
  border-radius: 5px;
}
```

```css live-sample___implicit
.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-auto-rows: minmax(100px, auto);
}
```

{{EmbedLiveSample("implicit", "", "520px")}}

## 间隔属性与子网格

父网格上设置的任何 {{cssxref("gap")}}、{{cssxref("column-gap")}} 或 {{cssxref("row-gap")}} 的值都会传递到子网格，使子网格轨道之间的间距与父网格保持一致。该默认行为可以通过在子网格容器上应用 `gap-*` 属性来覆盖。

在这个示例中，父网格的行和列间距为 `20px`，而子网格的 `row-gap` 被设置为 `0`。

```html live-sample___gap
<div class="grid">
  <div class="item">
    <div class="subitem"></div>
    <div class="subitem2"></div>
  </div>
</div>
```

```css hidden live-sample___gap
* {
  box-sizing: border-box;
}

.grid {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
}

.subitem {
  background-color: rgb(40 240 83);
}
```

```css live-sample___gap
.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
  gap: 20px;
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
  row-gap: 0;
}

.subitem {
  grid-column: 3 / 6;
  grid-row: 1 / 3;
}

.subitem2 {
  background-color: rgb(0 0 0 / 0.5);
  grid-column: 2;
  grid-row: 1;
}
```

{{EmbedLiveSample("gap", "", "500px")}}

如果你在开发者工具的网格检查器中查看，你将会注意到子网格的线位于间距中央。将间隔设置为 `0` 的效果类似于给元素设置负外边框，能把原本由间距占据的空间还给网格项目。

![较小的项目显示在间距中，因为子网格的 row-gap 被设置为 0，如在 Firefox 开发者工具的网格检查器中所看到的那样。](gap.png)

## 具名网格线

使用 CSS 网格时，你可以[为网格线命名](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)，然后根据这些网格线名称而非网格线编号来定位项目。父网格线上的线名会被传递到子网格，你可以使用这些线名来放置项目。在下面的示例中，父网格的具名线 `col-start` 和 `col-end` 被用来放置子项目。

```html live-sample___line-names
<div class="grid">
  <div class="item">
    <div class="subitem"></div>
  </div>
</div>
```

```css hidden live-sample___line-names
* {
  box-sizing: border-box;
}

.grid {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
}

.subitem {
  background-color: rgb(40 240 83);
}
```

```css live-sample___line-names
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr [col-start] 1fr 1fr 1fr [col-end] 1fr 1fr 1fr;
  grid-template-rows: repeat(4, minmax(100px, auto));
  gap: 20px;
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}

.subitem {
  grid-column: col-start / col-end;
  grid-row: 1 / 3;
}
```

{{EmbedLiveSample("line-names", "", "500px")}}

你也可以为子网格指定网格线名称。这可以通过在 `subgrid` 关键字后添加用方括号括起来的网格线名称列表来实现。例如，如果你的子网格有四条线，要为它们命名，可以使用语法 `grid-template-columns: subgrid [line1] [line2] [line3] [line4]`。

在子网格上指定的线会被添加到父网格上指定的线中，因此你可以使用父网格的线、子网格的线，或者两者都使用。在这个示例中，一个项目是使用父网格的线放置的，另一个则使用子网格的线放置。

```html live-sample___adding-line-names
<div class="grid">
  <div class="item">
    <div class="subitem"></div>
    <div class="subitem2"></div>
  </div>
</div>
```

```css hidden live-sample___adding-line-names
* {
  box-sizing: border-box;
}

.grid {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
}

.subitem {
  background-color: rgb(40 240 83);
}
```

```css live-sample___adding-line-names
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr [col-start] 1fr 1fr 1fr [col-end] 1fr 1fr 1fr;
  grid-template-rows: repeat(4, minmax(100px, auto));
  gap: 20px;
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid [sub-a] [sub-b] [sub-c] [sub-d] [sub-e] [sub-f];
  grid-template-rows: subgrid;
}

.subitem {
  grid-column: col-start / col-end;
  grid-row: 1 / 3;
}

.subitem2 {
  background-color: rgb(0 0 0 / 0.5);
  grid-column: sub-b / sub-d;
  grid-row: 1;
}
```

{{EmbedLiveSample("adding-line-names", "", "500px")}}

## 使用子网格

子网格的行为与嵌套网格非常相似；唯一的区别是子网格的轨道尺寸是在父网格上设置的。然而，像任何嵌套网格一样，子网格的轨道尺寸会随着内容大小改变，前提是使用的轨道尺寸方法允许内容影响大小。在这种情况下，自动调整大小的行轨道会根据父网格和子网格的内容自动扩展来适应内容。

由于子网格的作用方式与常规的嵌套网格行为非常相似，因此在两者之间切换非常容易。例如，如果你发现需要为行创建一个隐式网格，则需要移除 `grid-template-rows` 中的 `subgrid` 属性值，并可能需要为 `grid-auto-rows` 属性设置一个值，以此控制隐式轨道的尺寸。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [视频：使用子网格排布表单](https://www.youtube.com/watch?v=gmQlK3kRft4)（2019）
- [视频：不要犹豫，立即使用子网格来优化卡片布局](https://www.youtube.com/watch?v=lLnFtK1LNu4)（2019）
- [视频：你好，子网格！](https://www.youtube.com/watch?v=vxOj7CaWiPU)（来自 CSSConf.eu 的演讲，2019）
