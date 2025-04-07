---
title: 技能测试：网格布局
slug: Learn_web_development/Core/CSS_layout/Grid_skills
---

{{LearnSidebar}}

此任务的目的是让你使用 CSS 网格布局，并测试你是否了解网格和网格项的行为方式。你将会完成三个包括不同的元素小任务。

> [!NOTE]
> 你可以在下面的交互式编辑器中试用解决方案，不过，下载代码并使用在线工具 (如 CodePen、jsFiddle 或 Glitch) 处理这些任务可能会更有帮助。
>
> 如果你遇到困难，请向我们寻求帮助 — 参阅本页底部的 [评估或进一步帮助](#assessment_or_further_help) 部分。

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

> [!NOTE]
> 评估或进一步的工作目的，可以[下载此任务的源文件](https://github.com/mdn/css-examples/blob/master/learn/tasks/grid/grid1-download.html)在你自己的编辑器或使用线编辑器。

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

附加问题：

- 你可以把第一个元素覆盖到第二个元素，而不通过改变 html 元素的顺序吗？

> [!NOTE]
> 评估或进一步的工作目的，可以 [下载此任务的源文件](https://github.com/mdn/css-examples/blob/master/learn/tasks/grid/grid2-download.html) 在你自己的编辑器或使用线编辑器。

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

> [!NOTE]
> 评估或进一步的工作目的，可以 [下载此任务的源文件](https://github.com/mdn/css-examples/blob/master/learn/tasks/grid/grid3-download.html) 在你自己的编辑器或使用线编辑器。

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

> [!NOTE]
> 评估或进一步的工作目的，可以 [下载此任务的源文件](https://github.com/mdn/css-examples/blob/master/learn/tasks/grid/grid4-download.html) 在你自己的编辑器或使用线编辑器。

## 评估 或者 帮助

你可以在上述的交互编辑器上练习。

如果你的作业需要评估，或者有困难想要帮助：

1. 把你的作业放在一个在线可分享的编辑器上，比如 [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), 或者 [Glitch](https://glitch.com/). 你可以自己重头开始写，或者使用上面章节提供的源文件。
2. Write a post asking for assessment and/or help at the [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn). Your post should include:
   发布一个评估的帖子 或者 帮助在[MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn)你的发布应该涵盖以下几点：

   - A descriptive title such as "Assessment wanted for Grid layout 1 skill test".
   - Details of what you have already tried, and what you would like us to do, e.g. if you are stuck and need help, or want an assessment.
   - A link to the example you want assessed or need help with, in an online shareable editor (as mentioned in step 1 above). This is a good practice to get into — it's very hard to help someone with a coding problem if you can't see their code.
   - A link to the actual task or assessment page, so we can find the question you want help with.
