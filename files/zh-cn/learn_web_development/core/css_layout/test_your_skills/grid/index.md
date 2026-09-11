---
title: 技能测试：CSS 网格
short-title: 测试：CSS 网格
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Grid
l10n:
  sourceCommit: 143f7345a4276156679d816a153470fe1fc6f3f8
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension", "Learn_web_development/Core/CSS_layout")}}

此任务的目的是让你使用 CSS 网格布局，并测试你是否了解[网格和网格项](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Grids)的行为方式。接下来，你将完成几项小任务，这些任务会运用到你刚刚学过的内容中的不同要素。

> [!NOTE]
> 如需帮助，请阅读我们的[技能测试](/zh-CN/docs/Learn_web_development#技能测试)使用指南。你也可以通过我们的[沟通渠道](/zh-CN/docs/MDN/Community/Communication_channels)之一联系我们。

## CSS 网格布局 1

在此任务中，你需要创建一个网格，要求其中的四个子元素能自动排布。网格应包含三列，这些列应平均分配可用空间，且列轨道与行轨道之间应留有 `20px` 的间距。接下来，尝试在带有 `grid` 类的父容器内添加更多子元素，并观察它们在默认情况下的表现。

任务的起始点如下：

{{EmbedLiveSample("grid1-start", "", "220px")}}

以下是起始点对应的代码：

```html live-sample___grid1-start live-sample___grid1-finish
<div class="grid">
  <div>一</div>
  <div>二</div>
  <div>三</div>
  <div>四</div>
</div>
```

```css live-sample___grid1-start live-sample___grid1-finish
body {
  font: 1.2em / 1.5 sans-serif;
}

.grid > * {
  background-color: #4d7298;
  border: 2px solid #77a6b6;
  border-radius: 0.5em;
  color: white;
  padding: 0.5em;
}

.grid {
  /* 在这里添加样式 */
}
```

完成的布局应该类似如下：

{{EmbedLiveSample("grid1-finish", "", "160px")}}

<details>
<summary>点击这里查看答案</summary>

使用 `display: grid` 创建一个网格，通过 `grid-template-columns` 设置为三列，并在项目之间添加 `gap`：

```css live-sample___grid1-finish
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
```

</details>

## CSS 网格布局 2

在此任务中，我们已经定义了一个网格。我们需要你修改这两个子元素的 CSS 规则，使每个元素都横跨多个网格轨道。第二个元素应覆盖在第一个元素之上。

**附加题：** 现在，你能不改变源代码中元素的顺序，就让第一个元素显示在最上面吗？

任务的起始点如下：

{{EmbedLiveSample("grid2-start", "", "340px")}}

以下是起始点对应的代码：

```html live-sample___grid2-start live-sample___grid2-finish
<div class="grid">
  <div class="item1">一</div>
  <div class="item2">二</div>
</div>
```

```css live-sample___grid2-start live-sample___grid2-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
.grid > * {
  border-radius: 0.5em;
  color: white;
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

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px 100px;
  gap: 10px;
}

.item1 {
  /* 在这里添加样式 */
}

.item2 {
  /* 在这里添加样式 */
}
```

完成任务以后，布局应该类似如下：

{{EmbedLiveSample("grid2-finish", "", "340px")}}

<details>
<summary>点击这里查看答案</summary>

可以通过让元素占据相同的网格单元格来实现层叠效果。一种方法是使用下面的简写形式，不过使用如 `grid-row-start` 这样的完整写法也是正确的。

```css live-sample___grid2-finish
.item1 {
  grid-column: 1 / 4;
  grid-row: 1 / 3;
}

.item2 {
  grid-column: 2 / 5;
  grid-row: 2 / 4;
}
```

关于附加题，实现这一效果的一种方法是使用 `order`，我们在弹性盒模型教程中已经接触过它。

```css live-sample___grid2-finish
.item1 {
  order: 1;
}
```

另外一种合适的解法是使用 `z-index`：

```css
.item1 {
  z-index: 1;
}
```

</details>

## CSS 网格布局 3

在此任务中，网格中包含四个直接子节点。它们目前被自动放置在网格中。

任务的起始点如下：

{{EmbedLiveSample("grid3-start", "", "200px")}}

以下是起始点对应的代码：

```html live-sample___grid3-start live-sample___grid3-finish
<div class="grid">
  <div class="one">一</div>
  <div class="two">二</div>
  <div class="three">三</div>
  <div class="four">四</div>
</div>
```

```css live-sample___grid3-start live-sample___grid3-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
.grid > * {
  background-color: #4d7298;
  border: 2px solid #77a6b6;
  border-radius: 0.5em;
  color: white;
  padding: 0.5em;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
}
```

要完成此任务，请使用 `grid-area` 和 `grid-template-areas` 属性，按照下图所示对项目进行布局：

{{EmbedLiveSample("grid3-finish", "", "200px")}}

<details>
<summary>点击这里查看答案</summary>

布局的每个部分都需要使用 `grid-area` 属性指定名称，并通过 `grid-template-areas` 进行布局。可能引起混淆的地方包括：没有意识到需要添加 `.` 来留空一个单元格，或者没有意识到需要重复名称才能让某个元素横跨多个轨道：

```css live-sample___grid3-finish
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

## CSS 网格布局 4

在此任务中，你需要同时使用网格布局和弹性盒模型来重现最终的布局。列轨道与行轨道之间的间距应为 `10px`。为实现这一效果，你无需对 HTML 代码进行任何修改。

任务的起始点如下：

{{EmbedLiveSample("grid4-start", "", "400px")}}

以下是起始点对应的代码：

```html live-sample___grid4-start live-sample___grid4-finish
<div class="container">
  <div class="card">
    <img
      alt="一个红色的气球"
      src="https://mdn.github.io/shared-assets/images/examples/balloons1.jpg" />
    <ul class="tags">
      <li>气球</li>
      <li>红色</li>
      <li>天空</li>
      <li>蓝色</li>
      <li>热气球</li>
    </ul>
  </div>
  <div class="card">
    <img
      alt="一些房子上空飘着气球"
      src="https://mdn.github.io/shared-assets/images/examples/balloons2.jpg" />
    <ul class="tags">
      <li>气球</li>
      <li>房子</li>
      <li>火车</li>
      <li>海滨</li>
    </ul>
  </div>
  <div class="card">
    <img
      alt="气球充气的特写镜头"
      src="https://mdn.github.io/shared-assets/images/examples/balloons3.jpg" />
    <ul class="tags">
      <li>气球</li>
      <li>充气</li>
      <li>绿色</li>
      <li>蓝色</li>
    </ul>
  </div>
  <div class="card">
    <img
      alt="阳光下的气球"
      src="https://mdn.github.io/shared-assets/images/examples/balloons4.jpg" />
    <ul class="tags">
      <li>气球</li>
      <li>阳光</li>
      <li>天空</li>
      <li>夏季</li>
      <li>明亮</li>
    </ul>
  </div>
</div>
```

```css live-sample___grid4-start live-sample___grid4-finish
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
  background-color: #999999;
  color: white;
  padding: 0.2em 0.8em;
  border-radius: 0.2em;
  font-size: 80%;
  margin: 5px;
}

.container {
  /* 在这里添加样式 */
}

.tags {
  /* 在这里添加样式 */
}
```

完成任务以后，布局应该类似如下：

{{EmbedLiveSample("grid4-finish", "", "400px")}}

<details>
<summary>点击这里查看答案</summary>
  
由于需要对行和列进行对齐（即二维布局），因此容器必须采用网格布局。`<ul>` 需要作为弹性容器，因为标签（`<li>` 元素）不会按列排列，仅按行排列，并且通过将 `justify-content` 属性设置为 `center` 来使其在空间中居中。

你可以尝试在容器上使用弹性盒模型，并使用百分比值来限制卡片的大小。你也可以尝试将项目设置为网格布局，但请注意，项目并非在二维空间中对齐，因此弹性盒模型并非最佳选择。

```css live-sample___grid4-finish
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

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension", "Learn_web_development/Core/CSS_layout")}}
