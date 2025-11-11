---
title: 对齐弹性容器中的项目
slug: Web/CSS/Guides/Flexible_box_layout/Aligning_items
---

弹性盒之所以能迅速吸引开发者的注意，其中一个原因就是它首次为网页样式居中提供了合适的方案。得益于它提供的合适的垂直居中能力，我们可以很轻松地把一个盒子居中。在这份指南里，我们将详细地介绍 flexbox 的垂直和水平居中的工作原理。

## 在弹性盒中使用对齐

为了使我们的盒子居中，通过 `align-items` 属性，可以将交叉轴上的 item 对齐，此时使用的是垂直方向的块轴。而使用 `justify-content` 则可以对齐主轴上的项目，主轴是水平方向的。

![一个包含另一个盒子的元素在其中心。](align1.png)

如下代码所示，即使改变容器或内嵌元素的 size，内嵌元素也会保持居中状态

```html live-sample___intro
<div class="box">
  <div></div>
</div>
```

```css live-sample___intro
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dotted rgb(96 139 168);
}

.box div {
  width: 100px;
  height: 100px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("intro")}}

## 控制对齐的属性

本指南中的属性如下。

- {{cssxref("justify-content")}} - 控制主轴（横轴）上所有 flex 项目的对齐。
- {{cssxref("align-items")}} - 控制交叉轴（纵轴）上所有 flex 项目的对齐。
- {{cssxref("align-self")}} - 控制交叉轴（纵轴）上的单个 flex 项目的对齐。
- {{cssxref("align-content")}} - 控制“多条主轴”的 flex 项目在交叉轴的对齐。

我们也会了解到 flexbox 如何使用 margin: auto 来实现居中。

> [!NOTE]
> 这些 Flexbox 的对齐属性已经纳入 [CSS Box Alignment Level 3](https://www.w3.org/TR/css-align-3/)标准里了。预计这特性将最终会取代之前在[Flexbox Level One](https://www.w3.org/TR/css-flexbox-1/)定义的属性。

## 交叉轴

`align-items` 和`align-self` 是控制我们的 flex 项目在交叉轴的对齐，如果 `flex-direction` 是 `row` 则是控制竖向对齐，反之 `flex-direction` 是 `column` 则是控制横向对齐。

我们正在用一个最简单的例子做交叉轴对齐。如果我们在父级的容器元素上添加`display: flex` 属性，那么容器里的所有子元素将会变成横向排列的 flex items。所有的 flex 项目会撑满交叉轴方向的高度，因为`display: flex` 属性会将 flex 项目的高定义成容器的高度。如果你的父级容器有设置高度，则 flex 项目会撑满整个父级容器的高度，不会管 flex 项目里的内容的多少。

![三个项目，其中一个附加文本使其比其他文件更高。](align2.png)

![三项拉伸到 200 像素高](align3.png)

flex items 的高度全都变成一样的原因是 `align-items` 属性的初始值设成 `stretch` 控制交叉轴对齐。

我们可以使用其他的值来控制项目的对齐方式：

- `align-items: stretch`
- `align-items: flex-start`
- `align-items: flex-end`
- `align-items: start`
- `align-items: end`
- `align-items: center`
- `align-items: baseline`
- `align-items: first baseline`
- `align-items: last baseline`

下面的例子中，`align-items` 的值为 `stretch`。尝试给 `align-items` 赋上其他的值然后看下在弹性容器里是什么样的对齐效果。

```html live-sample___align-items
<div class="box">
  <div>一</div>
  <div>二</div>
  <div>三 <br />具有 <br />额外的 <br />文本</div>
</div>
```

```css live-sample___align-items
.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  align-items: stretch;
}

.box div {
  width: 100px;
  height: 100px;
  background-color: rgb(96 139 168 / 0.2);
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
}
```

{{EmbedLiveSample("align-items")}}

### `align-self` 用于对齐单个 flex 子项

`align-items` 属性是给所有 flex 项目统一设置 `align-self` 的对齐属性。这意味着你能给单个 flex 项目明确地声明 `align-self` 属性。`align-self` 拥有 `align-items` 的所有属性值，另外还有一个 `auto` 能重置自身的值为 `align-items` 定义的值。

在下面的一个例子中，flex 容器为 `align-items: flex-start`，这意思是所有的 flex 项目都在交叉轴方向的开始端对齐。我用 `first-child` 选择器给第一个 flex 项目设置了 `align-self: stretch` ；另外一个 flex 项目用 selected 的类设置成 `align-self: center` 。你能试着改变 `align-items` 或者在单个 `align-self` 的值，可以发现这些值是怎么影响对齐的。

```html live-sample___align-self
<div class="box">
  <div>一</div>
  <div>二</div>
  <div class="selected">三</div>
  <div>四</div>
</div>
```

```css live-sample___align-self
.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  align-items: flex-start;
  height: 200px;
}
.box div {
  background-color: rgb(96 139 168 / 0.2);
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  padding: 20px;
}
.box > *:first-child {
  align-self: stretch;
}
.box .selected {
  align-self: center;
}
```

{{EmbedLiveSample("align-self", "", "250px")}}

### 改变主轴方向

到目前为止我们已经看到了我们的 `flex-direction` 是 `row` 和使用的语言的书写方式为从上至下的表现行为。这意味着主轴是水平方向，交叉轴对齐则是有上至下垂直方向。

![三个项目，第一个对齐到 flex-start，第二个到中心，第三个到 flex-end。在垂直轴上对齐。](align4.png)

如果我们改变我们的 `flex-direction` 为 `column` ，`align-items` 和 `align-self` 对齐的 flex 项目则是水平方向从左往右。

![三个项目，第一个对齐到 flex-start，第二个到中心，第三个到 flex-end。在水平轴上对齐。](align5.png)

你能在下面这个例子体验一下，它除了 `flex-direction` 为 `column` 这个属性，其他的属性值和前一个例子是一样的。

```html live-sample___align-self-column
<div class="box">
  <div>一</div>
  <div>二</div>
  <div class="selected">三</div>
  <div>四</div>
</div>
```

```css live-sample___align-self-column
.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 200px;
}
.box div {
  background-color: rgb(96 139 168 / 0.2);
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  padding: 20px;
}
.box > *:first-child {
  align-self: stretch;
}
.box .selected {
  align-self: center;
}
```

{{EmbedLiveSample("align-self-column", "", "300px")}}

## 轴对齐内容——align-content 属性

到现在为止，我们已经对定义在 flex 容器里的 flex 项目或者单个 flex 项目进行对齐操作了。如果你有一个折行的多条 flex 项目的 flex 容器，然后你可能想使用 `align-content` 来控制每行之间空间的分配，在这种特定的场景叫做[packing flex lines](https://drafts.csswg.org/css-flexbox/#align-content-property)。

要使得 `align-content` 生效，你需要你的 flex 容器的 height 要大于 flex 项目的可视内容。然后它会将所有的 flex 项目打包成一块之后再对齐剩下的空间。

`align-content` 属性的值如下：

- `align-content: flex-start`
- `align-content: flex-end`
- `align-content: start`
- `align-content: end`
- `align-content: center`
- `align-content: space-between`
- `align-content: space-around`
- `align-content: space-evenly`
- `align-content: stretch`
- `align-content: normal`（与 `stretch` 的行为相同）
- `align-content: baseline`
- `align-content: first baseline`
- `align-content: last baseline`

在下面的例子，有一个 400px 高的 flex 容器，能足够地显示 flex 项目。`align-content` 的值为 `space-between` 等同于分配 flex 行之间的空间。

尝试用其他的属性值查看 `align-content` 是如何影响布局的。

```html live-sample___align-content
<div class="box">
  <div>一</div>
  <div>二</div>
  <div>三</div>
  <div>四</div>
  <div>五</div>
  <div>六</div>
  <div>七</div>
  <div>八</div>
</div>
```

```css live-sample___align-content
.box {
  width: 450px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap;
  height: 300px;
  align-content: space-between;
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 100px;
}

.box div {
  background-color: rgb(96 139 168 / 0.2);
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  padding: 20px;
}
```

{{EmbedLiveSample("align-content", "", "380px")}}

在强调一次我们可以切换我们的 `flex-direction` 为 `column` 去观察这个属性的行为是怎样的。和之前一样，我们需要足够的交叉轴空间去显示所有的 flex 项目之外还有有一定的自由空间。

```html live-sample___align-content-column
<div class="box">
  <div>一</div>
  <div>二</div>
  <div>三</div>
  <div>四</div>
  <div>五</div>
  <div>六</div>
  <div>七</div>
  <div>八</div>
</div>
```

```css live-sample___align-content-column
.box {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 400px;
  height: 300px;
  align-content: space-between;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 100px;
}

.box div {
  background-color: rgb(96 139 168 / 0.2);
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  padding: 20px;
}
```

{{EmbedLiveSample("align-content-column", "", "380px")}}

> [!NOTE]
> `space-evenly` 没有在 flexbox 特性中定义，而是后来添加到 Box Alignment 的特性的属性。浏览器的支持没有 flexbox 特性好。

查看 [`justify-content` 在 MDN 的文档](/zh-CN/docs/Web/CSS/Reference/Properties/justify-content) 获取属性值的浏览器支持的更多详细说明。

## 对齐主轴内容

到目前我们已经看到 flex 项目是如何在交叉轴上对齐的，现在我们可以看一下主轴上的对齐。这里只有一个属性是用于主轴上对齐——`justify-content`。这是因为我们把所有的 flex 项目当成一个组去处理。用 `justify-content` 这个属性的时候，我们只控制主轴出显示出来 flex 项目的多余空间。

在我们的最开始的例子中，我们在 flex 容器定义了 `display: flex`，flex 项目则水平排队从容器的初始端显示。这是因为 `justify-content` 的初始值是 `flex-start` ，其他多余的空间都会显示在 flex 项目的最后。

![Three items, each 100 pixels wide in a 500 pixel container. The available space is at the end of the items.](align6.png)

`justify-content` 属性有和 `align-content` 一样的属性值：

- `justify-content: flex-start`
- `justify-content: flex-end`
- `justify-content: start`
- `justify-content: end`
- `justify-content: left`
- `justify-content: right`
- `justify-content: center`
- `justify-content: space-between`
- `justify-content: space-around`
- `justify-content: space-evenly`
- `justify-content: stretch`（与 start 的行为相同）
- `justify-content: normal`（与 stretch（其行为与 start 的一致）的行为相同）

在下面的例子中，`justify-content` 的值为 `space-between` 。在显示完 flex 项目后的可用空间的分配是在 flex 项目水平方向之间。

```html live-sample___justify-content
<div class="box">
  <div>一</div>
  <div>二</div>
  <div>三</div>
  <div>四</div>
</div>
```

```css live-sample___justify-content
.box {
  display: flex;
  justify-content: space-between;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("justify-content")}}

如果主轴方向 `flex-direction` 设置成 `column`，那么 `justify-content` 分配的空间则是纵向的分配。

```html live-sample___justify-content-column
<div class="box">
  <div>一</div>
  <div>二</div>
  <div>三</div>
  <div>四</div>
</div>
```

```css live-sample___justify-content-column
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("justify-content-column", "", "380px")}}

### 对齐和书写模式

记得这些所有的对齐方法，属性值 `flex-start` 和 `flex-end` 是受书写模式的影响的。如果 `justify-content` 的值是 `flex-start` 而已你的书写模式是从左到右的话，那么 flex items 就会从 flex container 的左边开始排列。

![Three items lined up on the left](basics5.png)

反之，则会 flex 项目就会从 flex 容器的右边开始排列。

![Three items lined up from the right](basics6.png)

下面的例子将 `direction` 属性值设成 `rtl` 强行让 flex 项目从右到左排列，你可以移除这个属性值或者改变 `justify-content` 的值，看他是如何影响 flex 项目的排列方向的。

```html live-sample___justify-content-writing-mode
<div class="box">
  <div>一</div>
  <div>二</div>
  <div>三</div>
  <div>四</div>
</div>
```

```css live-sample___justify-content-writing-mode
.box {
  direction: rtl;
  display: flex;
  justify-content: flex-end;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("justify-content-writing-mode")}}

## 对齐和 flex-direction

如果你改变 `flex-direction` 属性，主轴起始线也会改变——例如，使用 `row-reverse` 代替 `row`。

在下面的例子里，弹性项目布局为 `flex-direction: row-reverse` 和 `justify-content: flex-end` 。在一个书写模式为从左到右的语言中，弹性项目会对齐到左边。尝试将 `flex-direction: row-reverse` 改为 `flex-direction: row`，你会看到弹性项目会对齐到右边。

```html live-sample___justify-content-reverse
<div class="box">
  <div>一</div>
  <div>二</div>
  <div>三</div>
  <div>四</div>
</div>
```

```css live-sample___justify-content-reverse
.box {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("justify-content-reverse")}}

这似乎有一点令人困惑，需要记住的规则就是，当没有设置 `flex-direction` 时，弹性项目的排列方向与文档语言的文本沿行内轴的排列方向一致。`flex-start` 就是一个句子中文本的起始处。

![Diagram showing start on the left and end on the right.](align8.png)

你可以通过设置 `flex-direction: column`，使弹性项目沿着文档语言的块级轴方向显示。那样话，`flex-start` 就是文本第一个段落的顶端起始处。

![Diagram showing start and the top and end at the bottom.](align10.png)

如果你将 `flex-direction` 的值改成 `row-reverse` 或者 `column-revers` ，那么弹性项目会沿着文档语言的文本书写方向的相反方向，从轴的尾端开始排列。`flex-start` 就会变为轴的尾端。也就是说，沿着行内轴时，这个位置就是每行文本的换行处；沿着块级轴时，就是文本最后一个段落的底部。

![Diagram showing start on the right and end on the left.](align9.png)

![Diagram showing end at the top and start at the bottom](align11.png)

## 使用自动的外边距在主轴上对齐

我们想要处理个别弹性项目在主轴上的对齐，但是没有 `justify-items` 属性或者 `justify-self` 属性可用，因为弹性项目会被当成一个组来对齐。然而，我们可以使用自动的外边距来处理一些个别弹性项目或者一组弹性项目想和其他弹性项目分离开的对齐情况。

一个常见的案例是导航栏，一些重要项目右对齐，而一组其他主要项目左对齐。你可能会想，这个时候就需要一个 `justify-self` 属性。但是下面的情况，如图所示，有 3 个项目在左边，2 个在右边。假设可以在项目 d 上设置 `justify-self` 的话，那么跟在后面的项目 e 的对齐方式也会发生改变。可能这正是我们想要的效果，但某些时候并不是。

![Five items, in two groups. Three on the left and two on the right.](align7.png)

另一个办法是，单独把项目 d 的 `margin-left` 属性设置成 `auto`。自动的外边距会占据全部的多余的空间——在一个块上设置自动的左右外边距可以使它居中。两边尽可能占据多的空间，块就被置于中间位置了。

在下面这个在线例子中，弹性项目按默认方式简单地沿行排列，而样式类 `push` 有设置有 `margin-left: auto`。你可以尝试删除它，或者把这个类名加到别的弹性项目上，你会看到它是怎样影响弹性项目排列的。

```html live-sample___auto-margins
<div class="box">
  <div>一</div>
  <div>二</div>
  <div>三</div>
  <div class="push">四</div>
  <div>五</div>
</div>
```

```css live-sample___auto-margins
.box {
  display: flex;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
.push {
  margin-left: auto;
}
```

{{EmbedLiveSample("auto-margins")}}

## 未来的 Flexbox 对齐特性

在本文的开头，我解释了 Level1 flexbox 规范中当前包含的对齐相关属性也被包含在了 Box Alignment Level3 规范中，这意味着将来会很好地扩展这些属性和值。我们已经看到了这种情况的发生，比如：为 `align-content` 和`justify-content` 属性引入`space-evenly`值。

Box Alignment 模块还包含其他创建子项之间间隙的方法，比如在 [CSS Grid Layout](/zh-CN/docs/Web/CSS/Guides/Grid_layout) 中包含的 `column-gap` 和`row-gap` 特性。这些属性包含在 Box Alignment 规范中意味着在将来我们也应该能够在 flex 布局中使用`column-gap`和`row-gap`，在 Firefox 63 中，你将在 flex 布局中找到第一个浏览器对 gap 属性的实现。

在深入研究 flexbox 对齐时，我的建议是同时查看 Grid Layout 中的对齐方式。两种规范都使用 Box Alignment 规范中详细说明的对齐属性。你可以在 MDN 文章《[Box Alignment in Grid Layout](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Box_alignment)》中查看使用网格时这些属性的行为，并且我还在《 [Box Alignment Cheatsheet](https://rachelandrew.co.uk/css/cheatsheets/box-alignment)》中比较了这些规范中对齐的工作方式。

## 参见

- [Box Alignment](/zh-CN/docs/Web/CSS/Guides/Box_alignment)
- [Box Alignment in Flexbox](/zh-CN/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [Box Alignment in Grid Layout](/zh-CN/docs/Web/CSS/CSS_box_alignment/Box_Alignment_In_Grid_Layout)
