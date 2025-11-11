---
title: 格式化上下文简介
short-title: 格式化上下文
slug: Web/CSS/Guides/Display/Formatting_contexts
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

本文介绍格式化上下文的概念，其包含多种类型，包括区块（block）格式化上下文、行内（inline）格式化上下文和弹性（flex）格式化上下文。还介绍了它们的基本行为以及如何利用这些行为。

页面上的所有内容都是**格式化上下文**的一部分，或者是一个以特定方式显示的区域。**区块格式化上下文**（BFC）将根据区块布局规则布局子元素，**弹性格式化上下文**将其子元素布局为{{Glossary("flex item", "弹性项目")}}，等等。每个格式化上下文在其上下文中都有特定的布局规则。

## 区块格式化上下文

在采用区块布局规则的文档中，最外层元素会建立首个**初始区块格式化上下文**。这意味着 `<html>` 元素区块内的所有元素都将遵循区块与行内布局规则，按正常流进行排版。参与 BFC 的元素采用 CSS 盒模型规则，该模型定义了元素的边距、边框和内边距如何与同一上下文中的其他块级元素交互。

### 创建新的区块格式化上下文

{{HTMLElement("html")}} 元素不是唯一能够创建区块格式上下文的元素。任何块级元素都可以通过应用某些 CSS 属性来创建一个 BFC。

在以下情况下会创建一个新的 BFC：

- 通过 {{cssxref("float")}} 使其浮动的元素
- [绝对定位](/zh-CN/docs/Web/CSS/Reference/Properties/position#定位类型)的元素
- 具有 {{cssxref("display", "display: inline-block", "#inline-block")}} 的元素
- 表格单元格或使用 `display: table-cell` 的元素，包括使用 `display: table-*` 属性创建出的匿名表格单元格
- 表格标题或使用 `display: table-caption` 的元素
- `overflow` 属性不为 `visible` 的块级元素
- 具有 `display: flow-root` 或 `display: flow-root list-item` 的元素
- 具有 {{cssxref("contain", "contain: layout", "#layout")}}、`content` 或 `strict` 的元素
- {{Glossary("flex item", "弹性项目")}}
- 网格项目素
- [多栏容器](/zh-CN/docs/Web/CSS/Guides/Multicol_layout/Basic_concepts)
- 具有 {{cssxref("column-span")}} 为 `all` 的元素

这很有用，因为新的 BFC 会具有像最外层文档那样的行为——它会在主布局中形成一个微型布局。BFC 包含其内部的所有内容，{{cssxref("float")}} 和 {{cssxref("clear")}} 仅适用于同一格式化上下文内的元素，边距也仅在同一格式化上下文内的元素之间合并。

### BFC 创建示例

让我们看看几个示例，来理解创建 BFC 的效果。

在下面的示例中，我们在应用了边框的 `<div>` 中有一个浮动元素。该 `div` 的内容与浮动元素一起浮动。由于 float 的内容比它旁边的内容高，所以现在 `<div>` 的边框贯穿了 float。如[应用或脱离流式布局](/zh-CN/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow)中所述，浮动已脱离文档流，因此 div 的背景和边框仅包含内容，而不包含浮动。

```html live-sample___float
<div class="box">
  <div class="float">我是一个浮动盒子！</div>
  <p>我是容器中的内容。</p>
</div>
```

```css live-sample___float
body {
  font: 1.2em sans-serif;
}

.box {
  background-color: rgb(224 206 247);
  border: 5px solid rebeccapurple;
}

.float {
  float: left;
  width: 200px;
  height: 100px;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("float")}}

创建一个新的 BFC 可以容纳浮动元素。过去常用的做法是设置 `overflow: auto`，或者将 `overflow` 属性设置为初始值 `visible` 以外的其他值。

```html hidden live-sample___bfc-overflow
<div class="box">
  <div class="float">我是一个浮动盒子！</div>
  <p>我是容器中的内容。</p>
</div>
```

```css live-sample___bfc-overflow
body {
  font: 1.2em sans-serif;
}
.box {
  background-color: rgb(224 206 247);
  border: 5px solid rebeccapurple;
  overflow: auto;
}

.float {
  float: left;
  width: 200px;
  height: 150px;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("bfc-overflow", "", "220px")}}

设置 `overflow: auto` 会自动创建包含浮动的新 BFC。现在，我们的 `<div>` 在布局中变成了一个迷你布局。任何子元素都将包含在其中。

使用 `overflow` 创建新的 BFC 的问题在于，`overflow` 属性用于告诉浏览器你希望如何处理溢出的内容。在某些情况下，当你纯粹使用此属性创建 BFC 时，你会发现不需要的滚动条或剪切阴影。另外，对于未来的开发人员来说，它可能不太可读，因为不能显式地表明为什么要使用 `overflow` 来实现这一目的。如果你使用了这个方法，最好对代码进行注释以便他人理解。

### 使用 display:flow-root 显式创建 BFC

在包含区块中使用 `display: flow-root`（或 `display: flow-root list-item`）将创建一个新的 BFC，而不会产生任何其他潜在的问题副作用。

```html hidden live-sample___bfc-flow-root
<div class="box">
  <div class="float">我是一个浮动盒子！</div>
  <p>我是容器中的内容。</p>
</div>
```

```css live-sample___bfc-flow-root
body {
  font: 1.2em sans-serif;
}
.box {
  background-color: rgb(224 206 247);
  border: 5px solid rebeccapurple;
  display: flow-root;
}
```

```css hidden live-sample___bfc-flow-root
.float {
  float: left;
  width: 200px;
  height: 100px;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("bfc-flow-root")}}

使用 {{HTMLElement("div")}} 上的 `display: flow-root`，该容器内的所有内容都参与该容器的区块格式上下文，并且浮动不会从元素底部弹出。

`flow-root` 关键字的意义是，创建的内容本质上类似于一个新的根元素（如 {{HTMLElement("html")}} 所做），并确定这个新的上下文如何创建及其流布局如何实现。

## 行内格式化上下文

行内格式化上下文存在于其他格式上下文中，可以将其视为段落的上下文。段落创建了一个行内格式化上下文，其中在文本中使用诸如 {{HTMLElement("strong")}}、{{HTMLElement("a")}} 或 {{HTMLElement("span")}} 元素等内容。

盒模型不完全适用于参与行内格式化上下文。在水平书写模式行中，水平内边距、边框和外边距将应用于元素，并左右移动文本。但是，元素上方和下方外边距将不适用。应用垂直内边距和边框可能会在内容的上方和下方重叠，因为在行内格式上下文中，内边距和边框不会将行盒子撑开。

```html live-sample___inline
<p>
  在那之前——<strong>一个令人难忘的夜晚</strong>，正如后来所证明的那样——数以亿计的人们凝望着自己篝火升起的缕缕烟圈，却从未因此获得任何特别的启迪。
</p>
```

```css live-sample___inline
body {
  font: 1.2em sans-serif;
}
p {
  margin-top: 2em;
}
strong {
  margin: 20px;
  padding: 20px;
  border: 5px solid rebeccapurple;
}
```

{{EmbedLiveSample("inline")}}

## 其他格式化上下文

本指南涵盖了流式布局，因此不涉及其他可能的格式化上下文。因此，了解创建任何类型的格式化上下文都将改变该格式化上下文中元素的行为方式是很有用的。这种行为总是在规范中描述的，在 MDN 中也有描述。

## 总结

在本指南中，我们更详细地介绍了区块和行内格式化上下文以及创建区块格式化上下文（BFC）的重要主题。在下一个指南中，我们将了解[正常流如何与不同的写入模式交互](/zh-CN/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes)。

## 参见

- [区块格式化上下文](/zh-CN/docs/Web/CSS/Guides/Display/Block_formatting_context)
- [视觉格式化模型](/zh-CN/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- [CSS 盒模型](/zh-CN/docs/Web/CSS/Guides/Box_model)
