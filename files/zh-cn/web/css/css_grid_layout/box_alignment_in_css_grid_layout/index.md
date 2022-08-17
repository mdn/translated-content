---
title: 网格布局中的盒模型对齐
slug: Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout
---
如果你熟悉 [flex 布局方式](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout)，那么你应该已经学习过如何在 flex 容器中对 flex 项目恰当对齐的方法了。这些对齐属性最初出现在 flex 布局方式中，后来被移到了一个新的被称为“[盒模型对齐 Level 3](https://drafts.csswg.org/css-align/)”的规范中，这个规范详细约定了在不同的布局方式下如何处理对齐问题。

每种布局方式对盒模型对齐规范的实现都有一些差异，因为实际情况是每种方式都有各自的特点以及历史包袱，不能期望在所有的实现方式中都有完全一致的对齐表现。盒模型对齐规范对每种布局方式下的实现都有详细描述，不过如果你在各种布局方式下尝试过后可能会感到失望，因为浏览器对它还没有足够支持，好在浏览器已经支持网格布局下的对齐和空间分配了。本文将演示它是如何工作的，你会发现很多属性和值与 flex 布局中的用法是类似的，由于网格布局是二维的，flex 布局是一维的，所以你也会发现它们有一些小区别。我们就从处理网格对齐时用到的两条轴线开始吧。

## 网格布局的两条轴线

网格布局方式下共有两条轴线用于对齐 —— **块方向的列轴**和**文字方向的行轴**。块方向的轴是采用块布局时块的排列方向。假设页面中有两个段落，其中一个显示在另一个下面，所以这个方向的轴被称为块方向的轴。在 CSS 网格布局规范中，它被称为列轴，因为这条轴的方向和列轨道是一致的。

![Image showing the location of the Block or Column axis.](https://mdn.mozillademos.org/files/14725/7_Block_Axis.png)

**行方向的轴**与块方向的轴垂直，它的方向和普通文本的方向一致。在 CSS 网格规范中，它有时被称为行轴，因为这条轴的方向和行轨道是一致的。

![Image demonstrating the Inline or Row axis location.](7_inline_axis.png)

我们可以把网格区域中的内容，以及网格轨道整体与这两条轴线对齐。

## 对齐项目到块方向的列轴

属性 {{cssxref("align-self")}} 和 {{cssxref("align-items")}} 用于控制项目在块方向的轴上对齐，通过设置这两个属性，可以改变网格区域中的项目的对齐方式。

在下面的例子中，网格里包含四个网格区域，可以通过网格容器上的 {{cssxref("align-items")}} 属性，把项目的对齐方式设置为下列值之一：

- `auto`
- `normal`
- `start`
- `end`
- `center`
- `stretch`
- `baseline`
- `first baseline`
- `last baseline`

```css hidden
* {box-sizing: border-box;}

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
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 10px;
  grid-auto-rows: 100px;
  grid-template-areas:
    "a a a a b b b b"
    "a a a a b b b b"
    "c c c c d d d d"
    "c c c c d d d d";
  align-items: start;
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('alignment_1', '500', '450') }}

设置了 {{cssxref("align-items")}} 属性，就相当于为网格的所有子项目都设置了 {{cssxref("align-self")}} 属性，当然也可以为单独的某一个网格元素设置它的个性化的 `align-self` 属性。

下一个例子演示把 `align-self` 设置为不同的值的对齐效果。第一个区域的 `align-self` 采用默认值即 `stretch`，第二个项目的 `align-self` 的值为 `start`，第三个项目的值为 `end`，第四个项目的值为 `center`。

```css hidden
* {box-sizing: border-box;}

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
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 10px;
  grid-auto-rows: 100px;
  grid-template-areas:
    "a a a a b b b b"
    "a a a a b b b b"
    "c c c c d d d d"
    "c c c c d d d d";
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
  align-self: start;
}
.item3 {
  grid-area: c;
  align-self: end;
}
.item4 {
  grid-area: d;
  align-self: center;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('alignment_2', '500', '450') }}

### 具有固定宽高比的项目

规范中对 {{cssxref("align-self")}} 的默认行为是拉伸（`stretch`），例外的情况是若项目具有固定宽高比，行为就改为与轴起点对齐（`start`）。此项例外的原因在于，如果把一个有固定宽高比的项目拉伸，将导致它扭曲变形。

虽然规范中已经阐明如何处理，但部分浏览器目前还没有按规范正确地实现，在此特性尚未被完全支持时，为了确保网格中的项目比如图片不被拉伸，可以通过把 {{cssxref("align-self")}} 和 {{cssxref("justify-self")}} 都设置为 `start` 来模拟正确的实现效果。

## 对齐项目到文本方向的行轴

与 {{cssxref("align-items")}} 和 {{cssxref("align-self")}} 用于对齐项目到块方向的轴类似，{{cssxref("justify-items")}} 和 {{cssxref("justify-self")}} 用于对齐项目到文本方向的行轴，可选值也和 `align-self` 一样。

- `auto`
- `normal`
- `start`
- `end`
- `center`
- `stretch`
- `baseline`
- `first baseline`
- `last baseline`

借用上面演示过的设置 {{cssxref("align-items")}} 的例子，下面把它改为设置 {{cssxref("justify-self")}} 属性。

默认的对齐方式仍然是 `stretch`，除非项目具有固定宽高比。也就是说在默认情况下，网格项目会覆盖网格区域，除非改变它们的对齐方式。下面的例子中，第一个项目演示了默认的对齐效果：

```css hidden
* {box-sizing: border-box;}

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
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 10px;
  grid-auto-rows: 100px;
  grid-template-areas:
    "a a a a b b b b"
    "a a a a b b b b"
    "c c c c d d d d"
    "c c c c d d d d";
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
  justify-self: start;
}
.item3 {
  grid-area: c;
  justify-self: end;
}
.item4 {
  grid-area: d;
  justify-self: center;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('alignment_3', '500', '450') }}

与 {{cssxref("align-self")}} 和 {{cssxref("align-items")}} 的关系类似，通过为网格容器设置 {{cssxref("justify-items")}} 属性，就相当于为所有的项目都设置了 {{cssxref("justify-self")}} 属性。

属性 {{cssxref("justify-self")}} 和 {{cssxref("justify-items")}} 在 [flex 布局方式](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout)中未被实现，是因为 flex 布局本质上是一维的，在轴上会有多个项目，无法单独对齐其中某一个元素。要在 flex 布局中实现沿主轴即文本方向上对齐项目，可以使用 {{cssxref("justify-content")}} 属性。

## 使项目居于区域正中

通过组合使用 align 和 justify 属性，让项目居于网格区域的正中就变得非常容易了。

```css hidden
* {box-sizing: border-box;}

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
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-auto-rows: 200px;
  grid-template-areas:
    ". a a ."
    ". a a .";
}
.item1 {
  grid-area: a;
  align-self: center;
  justify-self: center;
}
```

```html
<div class="wrapper">
 <div class="item1">Item 1</div>
</div>
```

{{ EmbedLiveSample('alignment_4', '500', '480') }}

## 对齐项目轨道到块方向的列轴

设想这样一种场景，网格轨道整体占据的空间小于网格容器，那么就可以在容器中对齐网格轨道。针对块方向和文本方向的轴线，分别使用 {{cssxref("align-content")}} 对齐到块方向的轴线，使用 {{cssxref("justify-content")}} 对齐到文本方向的轴线。属性 {{cssxref("align-content")}} 和 {{cssxref("justify-content")}} 的可选值都是：

- `normal`
- `start`
- `end`
- `center`
- `stretch`
- `space-around`
- `space-between`
- `space-evenly`
- `baseline`
- `first baseline`
- `last baseline`

下面的例子中，网格容器的宽高都是 500 像素，分别定义了行轨道和列轨道各 3 条，轨道尺寸为 100 像素，轨道间隙为 10 像素。可知，网格容器的块方向和文字方向都留有多余的空间。

属性 `align-content` 要设置在网格容器上，但它的效果却体现在内部的网格中。网格布局中默认的行为是对齐到起点（`start`），所以我们看到网格轨道整体居于网格的左上角，紧挨着起始的网格线：

```css hidden
* {box-sizing: border-box;}

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
  grid-template-rows: repeat(3,100px);
  height: 500px;
  width: 500px;
  grid-gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('alignment_5', '500', '520') }}

如果把容器中 `align-content` 的值改为 `end`，那么网格轨道整体都会移到贴近块方向轴线的最后一条线：

```css hidden
* {box-sizing: border-box;}

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
  grid-template-rows: repeat(3,100px);
  height: 500px;
  width: 500px;
  grid-gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
  align-content: end;
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('alignment_6', '500', '520') }}

也可以为这个属性设置与 flex 布局方式类似的用于分配空间的值：`space-between`，`space-around` 和 `space-evenly`。比如把 {{cssxref("align-content")}} 的值改为 `space-between`，观察网格元素在空间中是如何摆放的：

```css hidden
* {box-sizing: border-box;}

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
  grid-template-rows: repeat(3,100px);
  height: 500px;
  width: 500px;
  grid-gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
  align-content: space-between;
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('alignment_7', '500', '520') }}

有必要强调一下，这些与分配空间有关的值会使网格项目变大。如果项目跨越了多于一条轨道，因为轨道的间隙变大了，所以项目也变得更大了。因为精确尺寸的网格较为常用，所以如果你决定使用这些值，一定要确保其中的内容能够适应多出来的空间，或者在使用这些属性值时，把项目的对齐方式设置为对齐到起点（`start`），可能会比设置为拉伸（`stretch`）要好。

下图中的网格使用了 `align-content` 属性，左侧的值为 `start`，右侧的值为 `space-between`。观察 Item 1 和 Item 2，它们都跨越了两条行轨道，右侧的图因为增加了轨道间隙，所以它们占据的空间变大了：

![Demonstrating how items become larger if we use space-between.](7_space-between.png)

## 对齐项目轨道到文本方向的行轴

在行轴上使用 {{cssxref("justify-content")}} 属性可以获得与在列轴上使用 {{cssxref("align-content")}} 相同的对齐效果。

继续利用上面的例子，设置 {{cssxref("justify-content")}} 的值为 `space-around`，那些占据超过一列的项目将因此获得额外的空间：

```css hidden
* {box-sizing: border-box;}

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
  grid-template-rows: repeat(3,100px);
  height: 500px;
  width: 500px;
  grid-gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
  align-content: space-between;
  justify-content: space-around;
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('alignment_8', '500', '500') }}

## 对齐和自动外边距

另一个在网格区域内使项目对齐的方法是使用自动外边距。如果你曾经用过把容器的左右外边距都设置为 `auto` 以让页面布局显示在视口中间的方法的话，你肯定知道自动外边距能够消化掉全部的多余空间。当把两侧的外边距都设置为 `auto` 时，块元素就会被挤到中间，多余的空间则被留到两侧。

在下面的例子中，项目 item 1 的左外边距被设置成 `auto`，可以看到内容被推到了区域右侧，因为在为项目的内容分配了空间之后，自动外边距占据了剩余的空间：

```css hidden
* {box-sizing: border-box;}

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
  grid-template-rows: repeat(3,100px);
  height: 500px;
  width: 500px;
  grid-gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
}
.item1 {
  grid-area: a;
  margin-left: auto;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('alignment_9', '500', '500') }}

在 [Firefox Grid Highlighter](/zh-CN/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts) 中可以清晰地看到项目是如何被对齐的：

![Image showing auto-margins using the Grid Highlighter.](7_auto_margins.png)

## 对齐和书写模式

上面所有的例子都是工作在英语这样一种从左到右的语言环境下，这意味着当从物理方向观察时，网格的起始线是在从左上开始的。

CSS 网格布局和盒模型对齐规范是为了解决 CSS 中的书写模式而设计的，这意味着，如果你用一种从右到左的语言工作，比如阿拉伯语，那网格的起始线就应该是从右上开始，此时 justify-content: start 也将使网格轨道从网格的右侧开始。为 `margin-right` 和 `margin-left` 设置自动外边距，或者使用绝对位置如 ` top，``right，``bottom ` 和 `left` 来设置偏移量对书写模式来说并不是一种友好的表达方式。在下一篇文章中，我们会深入讨论 CSS 网格布局、盒模型对齐和书写模式之间的关系，理解这些原理，对于开发用多种语言显示的网站，或者设计混合了多种语言和书写模式的页面将大有益处。

1.  [**CSS**](/zh-CN/docs/Web/CSS)
2.  [**CSS 参考**](/zh-CN/docs/Web/CSS/Reference)
3.  [CSS 网格布局](/zh-CN/docs/Web/CSS/CSS_Grid_Layout)
4.  **指南**

    1.  [网格布局的基本概念](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
    2.  [与其他布局方法的关系](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
    3.  [基于线的定位](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
    4.  [网格模板区域](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
    5.  [使用命名线布局](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
    6.  [网格布局中的自动定位](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
    7.  [网格布局中的盒模型对齐](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
    8.  [网格、逻辑值和书写模式](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
    9.  [CSS 网格布局和可及性](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
    10. [CSS 网格布局和渐进增强](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
    11. [使用网格实现常见布局](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

5.  **属性**

    1.  [grid](/zh-CN/docs/Web/CSS/grid)
    2.  [grid-area](/zh-CN/docs/Web/CSS/grid-area)
    3.  [grid-auto-columns](/zh-CN/docs/Web/CSS/grid-auto-columns)
    4.  [grid-auto-flow](/zh-CN/docs/Web/CSS/grid-auto-flow)
    5.  [grid-auto-rows](/zh-CN/docs/Web/CSS/grid-auto-rows)
    6.  [grid-column](/zh-CN/docs/Web/CSS/grid-column)
    7.  [grid-column-end](/zh-CN/docs/Web/CSS/grid-column-end)
    8.  [grid-column-gap](/zh-CN/docs/Web/CSS/grid-column-gap)
    9.  [grid-column-start](/zh-CN/docs/Web/CSS/grid-column-start)
    10. [grid-gap](/zh-CN/docs/Web/CSS/grid-gap)
    11. [grid-row](/zh-CN/docs/Web/CSS/grid-row)
    12. [grid-row-end](/zh-CN/docs/Web/CSS/grid-row-end)
    13. [grid-row-gap](/zh-CN/docs/Web/CSS/grid-row-gap)
    14. [grid-row-start](/zh-CN/docs/Web/CSS/grid-row-start)
    15. [grid-template](/zh-CN/docs/Web/CSS/grid-template)
    16. [grid-template-areas](/zh-CN/docs/Web/CSS/grid-template-areas)
    17. [grid-template-columns](/zh-CN/docs/Web/CSS/grid-template-columns)
    18. [grid-template-rows](/zh-CN/docs/Web/CSS/grid-template-rows)

6.  **词汇**

    1.  [Grid](/zh-CN/docs/Glossary/Grid)
    2.  [Grid lines](/zh-CN/docs/Glossary/Grid_lines)
    3.  [Grid tracks](/zh-CN/docs/Glossary/Grid_tracks)
    4.  [Grid cell](/zh-CN/docs/Glossary/Grid_cell)
    5.  [Grid areas](/zh-CN/docs/Glossary/Grid_areas)
    6.  [Gutters](/zh-CN/docs/Glossary/Gutters)
    7.  [Grid Axis](/zh-CN/docs/Glossary/Grid_Axis)
    8.  [Grid row](/zh-CN/docs/Glossary/Grid_rows)
    9.  [Grid column](/zh-CN/docs/Glossary/Grid_column)
