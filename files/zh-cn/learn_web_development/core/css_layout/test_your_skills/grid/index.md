---
title: 技能测试：网格布局
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Grid
---

此任务的目的是让你使用 CSS 网格布局，并测试你是否了解网格和网格项的行为方式。你将会完成三个包括不同的元素小任务。

> [!NOTE]
> 你可以在下面的交互式编辑器中试用解决方案，不过，下载代码并使用在线工具 (如 CodePen、jsFiddle 或 Glitch) 处理这些任务可能会更有帮助。
>
> 如果你遇到了困难，可以通过[沟通渠道](/zh-CN/docs/MDN/Community/Communication_channels)联系我们。

## 网格布局 一

在此任务中，你需要创建一个网格，要求其中的四个子元素能自动排布。网格内要有三列并且将可用空间等分，列和行的间距均为 20px。

在三列网格布局中有四个物体放入其中。

尝试更新下面的实时代码以复现上面的示例：

```html live-sample___grid1
<div class="grid">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

```css hidden live-sample___grid1
body {
  font: 1.2em / 1.5 sans-serif;
}
.grid > * {
  background-color: #4d7298;
  border: 2px solid #77a6b6;
  border-radius: 0.5em;
  color: #fff;
  padding: 0.5em;
}
```

```css live-sample___grid1
.grid {
}
```

{{EmbedLiveSample("grid1", "", "200px")}}

<details>
<summary>Click here to show the solution</summary>

Create a grid using `display: grid` with three columns using `grid-template-columns` and a `gap` between the items:

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
```

</details>

## 网格布局 二

在此例中，我们已经定义好了一个 grid, 请通过修改下面两个子元素的 CSS 规则，导致它们跨过彼此的网格轨道; 第二个 item 应该在第一个 item 之上 (如下图所示).

![盒子中的两个元素，其中一个元素覆盖在另一个元素上。](grid-task2.png)

尝试更新下面的实时代码以复现上面的示例：

```html live-sample___grid2
<div class="grid">
  <div class="item1">One</div>
  <div class="item2">Two</div>
</div>
```

```css hidden live-sample___grid2
body {
  font: 1.2em / 1.5 sans-serif;
}
.grid > * {
  border-radius: 0.5em;
  color: #fff;
  padding: 0.5em;
}

.item1 {
  background-color: rgb(74 102 112 / 70%);
  border: 5px solid rgb(74 102 112 / 100%);
}

.item2 {
  background-color: rgb(214 162 173 / 70%);
  border: 5px solid rgb(214 162 173 / 100%);
}
```

```css live-sample___grid2
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px 100px;
  gap: 10px;
}

.item1 {
}

.item2 {
}
```

{{EmbedLiveSample("grid2", "", "340px")}}

<details>
<summary>Click here to show the solution</summary>

It is possible to layer items by way of them occupying the same grid cells.
One option is to use the shorthands below, however it would be correct to use the longhand `grid-row-start` for example.

```css
.item1 {
  grid-column: 1 / 4;
  grid-row: 1 / 3;
}

.item2 {
  grid-column: 2 / 5;
  grid-row: 2 / 4;
}
```

For the bonus question, one way of achieving this would be to use `order`, which we've encountered in the flexbox tutorial.

```css
.item1 {
  order: 1;
}
```

Another valid solution is to use `z-index`:

```css
.item1 {
  z-index: 1;
}
```

</details>

## 网格布局 三

此 grid 中 4 个子元素，初始状态是显示的是 auto-placement. 请通过使用 grid-area 和 grid-template-areas 属性对照下图放置元素的布局。

![网格中显示的四个项目。](grid-task3.png)

尝试更新下面的实时代码以复现上面的示例：

```html live-sample___grid3
<div class="grid">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
  <div class="four">Four</div>
</div>
```

```css hidden live-sample___grid3
body {
  font: 1.2em / 1.5 sans-serif;
}
.grid > * {
  background-color: #4d7298;
  border: 2px solid #77a6b6;
  border-radius: 0.5em;
  color: #fff;
  padding: 0.5em;
}
```

```css live-sample___grid3
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
}
```

{{EmbedLiveSample("grid3", "", "200px")}}

<details>
<summary>Click here to show the solution</summary>

Each part of the layout needs a name using the `grid-area` property and `grid-template-areas` to lay them out. Possible areas of confusion would be not realizing you should place a `.` to leave a cell empty, or that you should repeat the name to cause an element to span more than one track:

```css
.grid {
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    "aa aa"
    "bb cc"
    ". dd";
}

.one {
  grid-area: aa;
}

.two {
  grid-area: bb;
}

.three {
  grid-area: cc;
}

.four {
  grid-area: dd;
}
```

</details>

## 网格布局 四

此例中，你需要同时使用 Grid Layout 和 Flexbox 来完成下图所示的任务。这个过程中你不需要通过改变 HTML 来完成。

![两行卡片，每个卡片有一个图像和一组标签。](grid-task4.png)

尝试更新下面的实时代码以复现上面的示例：

```html live-sample___grid4
<div class="container">
  <div class="card">
    <img
      alt="a single red balloon"
      src="https://mdn.github.io/shared-assets/images/examples/balloons1.jpg" />
    <ul class="tags">
      <li>balloon</li>
      <li>red</li>
      <li>sky</li>
      <li>blue</li>
      <li>Hot air balloon</li>
    </ul>
  </div>
  <div class="card">
    <img
      alt="balloons over some houses"
      src="https://mdn.github.io/shared-assets/images/examples/balloons2.jpg" />
    <ul class="tags">
      <li>balloons</li>
      <li>houses</li>
      <li>train</li>
      <li>harborside</li>
    </ul>
  </div>
  <div class="card">
    <img
      alt="close-up of balloons inflating"
      src="https://mdn.github.io/shared-assets/images/examples/balloons3.jpg" />
    <ul class="tags">
      <li>balloons</li>
      <li>inflating</li>
      <li>green</li>
      <li>blue</li>
    </ul>
  </div>
  <div class="card">
    <img
      alt="a balloon in the sun"
      src="https://mdn.github.io/shared-assets/images/examples/balloons4.jpg" />
    <ul class="tags">
      <li>balloon</li>
      <li>sun</li>
      <li>sky</li>
      <li>summer</li>
      <li>bright</li>
    </ul>
  </div>
</div>
```

```css hidden live-sample___grid4
body {
  font: 1.2em / 1.5 sans-serif;
}
.card {
  display: grid;
  grid-template-rows: 200px min-content;
}

.card > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tags {
  margin: 0;
  padding: 0;
  list-style: none;
}

.tags > * {
  background-color: #999;
  color: #fff;
  padding: 0.2em 0.8em;
  border-radius: 0.2em;
  font-size: 80%;
  margin: 5px;
}
```

```css live-sample___grid4
.container {
}

.tags {
}
```

{{EmbedLiveSample("grid4", "", "400px")}}

<details>
<summary>Click here to show the solution</summary>

The container will need to be a grid layout, as we have alignment in rows and columns - two-dimensional.
The `<ul>` needs to be a flex container as tags (`<li>` elements) are not lined up in columns, only in rows and they are centered in the space with the alignment property `justify-content` set to `center`.

You may try to use flexbox on the container and restrict the cards with percentage values. You may also try to make the items into a grid layout in which case, note that the items are not aligned in two dimensions so flexbox isn't the best choice.

```css
.container {
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
```

</details>
