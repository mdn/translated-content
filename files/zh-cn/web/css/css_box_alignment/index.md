---
title: CSS 盒子对齐
slug: Web/CSS/CSS_box_alignment
---

{{CSSRef}}

CSS 盒子对齐 (Box Alignment) 模块指定了在各种 CSS 盒子布局模型，如块布局，表布局，弹性布局和网格布局中，与盒子对齐有关的 CSS 功能。该模块旨在建立一种能一致地在 CSS 中指定对齐的方法。这份文档详述了出现在该规范中的一般概念。

> [!NOTE]
> 每种布局方法的文档都将详细说明在其中是如何应用“盒子对齐”的

## 较老的对齐方法

传统上，CSS 的对齐功能非常有限。我们可以利用 {{cssxref("text-align")}} 对齐文本，利用 auto {{cssxref("margin")}} 对齐块，并且利用 {{cssxref("vertical-align")}} 属性在表格 (table) 或者行内块 (inline-block) 布局中对齐块。现在 [Inline Layout](https://www.w3.org/TR/css-inline-3/) 与 [CSS Text](https://www.w3.org/TR/css-text-3/) 模块中涵盖了文本对齐的内容，而盒子对齐模块让我们第一次拥有了完整的水平与垂直对齐的能力。

如果你最初学习过[弹性盒子（Flexbox）](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout)，你可能会觉得这些属性是弹性盒子规范的一部分。确实，某些属性是列在弹性盒子的 Level 1 标准中，不过规范指出我们应该提到盒子对齐规范，因为它可能会弹性盒子的基础上增加额外的功能。

## 基本示例

下面的例子演示了部分盒子对齐属性在[网格](/zh-CN/docs/Web/CSS/CSS_grid_layout)和[弹性盒子](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout)中是如何被使用的。

### CSS 网格布局对齐示例

下面使用网格布局的示例中，在行内轴 (inline axis)（主轴 (main axis)）上布局了固定宽度的轨道后，网格容器中有一些多余的空间。这些空间是使用 {{cssxref("justify-content")}} 来分配的。在块轴 (block axis)（交叉轴 (cross axis)）上，项目在他们的网格区域内的对齐是用 {{cssxref("align-items")}} 来控制的。第一个项目通过将 {{cssxref("align-self")}} 设置为 `center`，重载了组内设置的 `align-items` 属性。

{{EmbedGHLiveSample("css-examples/box-alignment/overview/grid-align-items.html", '100%', 500)}}

### 弹性盒子对齐示例

在下面的示例中，三个弹性项目分别利用 `justify-content` 和 `align-items` 属性在主轴和交叉轴上对齐。第一个项目通过将 `align-self` 设置为 `center`，重载了组内设置的 `align-items` 属性。

{{EmbedGHLiveSample("css-examples/box-alignment/overview/flex-align-items.html", '100%', 500)}}

## 关键概念与术语

规范详细介绍了一些对齐术语，让我们能更容易地在特定布局方法内的具体实现之外讨论这些对齐属性。另外其中还有一些对于所有布局方法都通用的关键概念。

### 与书写模式的关系

对齐方式与书写模式有关，因为在对齐项目时，我们不会考虑是否将其对齐到顶部，右侧，底部和左侧的物理尺寸。与此相反，我们根据正在使用的特定维度的开始和结束来描述对齐方式。这样可确保不管文档具有怎样的书写模式，对齐方式总是以相同的方式工作。

### 对齐的两个维度

使用盒子对齐属性时，我们会在两个轴的其中之一上对齐内容——行内轴 (inline axis)（或称主轴 (main axis)）和块轴 (block axis)（或称交叉轴 (cross axis)）。内联轴是在使用特定写作模式中，沿句子单词的流动方向的轴。比如对于英语或者中文来说，内联轴是水平的。块轴是沿块 (block)（比如段落元素）的布局方向延伸的轴，它会垂直穿过行内轴。

![](two-axes.png)

当在行内轴上对齐项目时，你将用到以 `justify-` 开头的属性：

- {{cssxref("justify-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("justify-content")}}

当在块轴上对齐项目时，你将用到以 `align-` 开头的属性：

- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("align-content")}}

在弹性盒子布局中，情况要更复杂些，因为当 {{cssxref("flex-direction")}} 设置为 `row` 时，上面的这些说法都是对的。但当弹性盒子设为 `column` 时则恰好相反（行内轴上的对齐用 `justify-` 指定，块轴上用 `align-` ）。因此，当使用弹性盒子时，用主轴和交叉轴来思考要比用行内轴和块轴来思考更直观些。 `justify-` 属性总是用来对齐主轴，而 `align-` 属性总是用来对齐交叉轴的。

### 对齐主体

**对齐主体** 指的是被对齐的物体。对于 `justify-self` 或 `align-self` ，或者将以上两值用 `justify-items` 或 `align-items` 成组设置时，对齐主体将是使用此属性的元素的外边距盒子 (margin box)。 `justify-content` 和 `align-content` 属性因布局方法而异。

### 对齐容器

**对齐容器** 指的是对齐主体被对齐时所处的盒子。这一般指的是包含对齐主体的块。一个对齐容器可能包含一个或多个对齐主体。

下图展示了一个内部包含两个对齐主体的对齐容器。

![](align-container-subjects.png)

### 回退对齐

如果设置的对齐方式无法实现，那么 **回退对齐** 将派上用场并且处理可用的空间。这一回退对齐是为每种布局方法分别指定的，且在方法的对应页面上有详细说明。

## 对齐的种类

规范中详述了三种不同的对齐方式；这些对齐使用关键字值。

- **位置对齐 (Positional alignment)**：通过对齐主体与它的对齐容器间的关系来指定对齐主体的位置。
- **基线对齐 (Baseline alignment)**：这些关键字把对齐看作在一个对齐上下文中多个对齐主体的基线 (baseline) 之间的关系。
- **分布对齐 (Distributed alignment)**：这些关键字把对齐看作多个对齐主体间空间的分布

### 位置对齐关键字的值

以下这些值是为位置对齐定义的，并且可以用于指定内容对齐的 `justify-content` 和 `align-content` 属性与指定自对齐的 `justify-self` 和 `align-self` 属性上。

- `center`
- `start`
- `end`
- `self-start`
- `self-end`
- `flex-start` 仅用于弹性盒子布局
- `flex-end` 仅用于弹性盒子布局
- `left`
- `right`

除了与屏幕的物理属性相关的物理值 `left` 与 `right` 之外，其他的所有值都是与内容的书写模式相关的逻辑值。

比如，当使用 CSS 网格布局时，如果你使用了英语并且把 `justify-content` 设为 `start` ，那么这一设置将会在行内维度上把项目移动到起始位置，也就是左侧，因为英语中句子的开头就在左侧。如果你使用的是阿拉伯语，一种从左到右书写的语言，那么相同的 `start` 值会导致项目移动到右侧，因为页面的右手边才是阿拉伯语中句子的开头。

这两个例子都设置了 `justify-content: start`，但是起始位置却随着书写模式而改变了。

![](writing-mode-start.png)

### 基线对齐

基线对齐的关键词是用于对齐一组对齐主体的盒子的基线的。他们可以用于指定内容对齐的 `justify-content` 和 `align-content` 属性与指定自对齐的 `justify-self` 和 `align-self` 属性上。

- `baseline`
- `first baseline`
- `last baseline`

基线内容对齐——为 `justify-content` 或 `align-content` 指定基线对齐——适用于把项目按行排列的布局方法。通过在盒子内添加填充，使对齐主体的基线彼此对齐。

基线自对齐通过在盒子外部增加外边距，从而移动盒子，实现对齐。自对齐是指当使用 `justify-self` 或 `align-self`，又或者或者将以上两值用 `justify-items` 或 `align-items` 成组设置的情况。

### 分布对齐

**分布对齐关键字** 是用于 `align-content` 和 `justify-content` 属性的。这些关键字定义了在已经显示对齐主体后，其余的所有空间会发生什么。取值如下：

- `stretch`
- `space-between`
- `space-around`
- `space-evenly`

例如在弹性布局中，初始时是通过 `flex-start` 对齐项目的。在使用水平的，自上而下的书写模式（如英文或中文）时，若 `flex-direction` 设为 `row` ，那么项目将从最左边开始，显示项目后的所有可用空间都放置在项目之后。

![](justify-content-start.png)

如果你在弹性容器上设置了 `justify-content: space-between` ，那么可用空间会被共享并放置在项目之间。

![](justify-content-space-between.png)

为了使这些关键字生效，在项目要对齐的维度上必须有可用空间。没有空间，就没有空间可以分布。

## 溢出对齐

`safe` 与 `unsafe` 关键字可以帮助我们定义当对齐主体比对齐容器更大时的表现。`safe` 关键字会在一个指定的对齐方式导致了溢出时对齐到 `start` ，其目的是避免“数据丢失”，即项目的一部分超出了对齐容器的边界并且无法滚动到该位置。

如果你指定 `unsafe` ，那么即使对齐方式会导致数据丢失也会按照该对齐方式来对齐。

## 盒子间的间隔

盒子对齐规范还包括 `gap`, `row-gap`，和 `column-gap` 属性。这些属性允许在一行或一列之间设置一致的间隔，只要布局是用这种方法排列项目的。

`gap` 属性是 `row-gap` 和 `column-gap` 属性的简写，让我们可以一次性的设置这些属性：

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

在下面的例子中，一个网格布局使用了 `gap` 简写来在行轨道上设置 `10px` 的间隙，在列轨道上设置 `2em` 的间隙。

{{EmbedGHLiveSample("css-examples/box-alignment/overview/grid-gap.html", '100%', 500)}}

下面这个例子在 {{cssxref("gap")}} 之外我还使用了 {{cssxref("grid-gap")}} 属性。`gap` 属性原本在网格布局中是拥有 `grid-` 前缀的，而有些浏览器只支持这些有前缀的版本。

- {{cssxref("grid-row-gap")}}
- {{cssxref("grid-column-gap")}}
- {{cssxref("grid-gap")}}

带前缀的版本将作为未带前缀版本的别名保留，不过你对于这些第三方的前缀你总是可以两者兼取，加上一个 `grid-gap` 属性然后再加上一个具有相同的值的 `gap` 属性。

另外，请注意其他的东西可能会增加显示的视觉间隔，例如使用空间分布关键字或为项目增加外边距。

## 详细说明各个对齐属性的页面

由于 CSS 盒子对齐属性的实现方式取决于与它们相交互的规范，因此请参见以下每种布局类型的页面，以获取关于如何将对齐属性与其一起使用的详细信息：

- [Box alignment in Flexbox](/zh-CN/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box alignment in CSS Grid Layout](/zh-CN/docs/Web/CSS/CSS_box_alignment/Box_Alignment_In_Grid_Layout)
- [Box alignment in multiple-column layout](/zh-CN/docs/Web/CSS/CSS_box_alignment/Box_Alignment_in_Multi-column_Layout)
- [Box alignment for block, absolutely positioned and table layout](/zh-CN/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)

## 参考

### CSS 属性

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("place-content")}}
- {{cssxref("justify-items")}}
- {{cssxref("align-items")}}
- {{cssxref("place-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}
- {{cssxref("place-self")}}
- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### 词汇表

- {{Glossary("Cross axis")}}
- {{Glossary("Main axis")}}
- {{Glossary("Alignment container")}}
- {{Glossary("Alignment subject")}}
- {{Glossary("Fallback alignment")}}

## 指南

- CSS 弹性盒子指南：_[Basic concepts of Flexbox](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)_
- CSS 弹性盒子指南：_[Aligning items in a flex container](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)_
- CSS 网格指南：_[Box alignment in CSS Grid layouts](/zh-CN/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)_

## 外部资源

- [Box alignment cheatsheet](https://rachelandrew.co.uk/css/cheatsheets/box-alignment)
- [CSS Grid, Flexbox and Box alignment](https://www.smashingmagazine.com/2016/11/css-grids-flexbox-box-alignment-new-layout-standard/)
- [Thoughts on partial implementations of Box alignment](https://blogs.igalia.com/jfernandez/2017/05/03/can-i-use-css-box-alignment/)
