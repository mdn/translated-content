---
title: flex 布局的基本概念
slug: Web/CSS/Guides/Flexible_box_layout/Basic_concepts
---

Flexible Box 模型，通常被称为 flexbox，是一种一维的布局模型。它给 flexbox 的子元素之间提供了强大的空间分布和对齐能力。本文给出了 flexbox 的主要特性，更多的细节将在别的文档中探索。

我们说 flexbox 是一种一维的布局，是因为一个 flexbox 一次只能处理一个维度上的元素布局，一行或者一列。作为对比的是另外一个二维布局 [CSS Grid Layout](/zh-CN/docs/Web/CSS/Guides/Grid_layout)，可以同时处理行和列上的布局。

## flexbox 的两根轴线

当使用 flex 布局时，首先想到的是两根轴线 — 主轴和交叉轴。主轴由 {{cssxref("flex-direction")}} 定义，另一根轴垂直于它。我们使用 flexbox 的所有属性都跟这两根轴线有关，所以有必要在一开始首先理解它。

### 主轴

主轴由 `flex-direction` 定义，可以取 4 个值：

- `row`
- `row-reverse`
- `column`
- `column-reverse`

如果你选择了 `row` 或者 `row-reverse`，你的主轴将沿着**行向**延伸。

![当主轴方向设置为 row 时，主轴沿着行向延伸](basics1.svg)

选择 `column` 或者 `column-reverse` 时，你的主轴会沿着页面的上下方向延伸——也就是**块向**。

![当主轴方向设置为 column 时，主轴沿着块向延伸](basics2.svg)

### 交叉轴

交叉轴垂直于主轴，所以如果你的`flex-direction`（主轴）设成了 `row` 或者 `row-reverse` 的话，交叉轴的方向就是沿着上下方向延伸的。

![当主轴方向设置为 row 时，交叉轴的方向沿着块向延伸](basics3.svg)

如果主轴方向设成了 `column` 或者 `column-reverse`，交叉轴就是水平方向。

![当主轴方向设置为 column 时，交叉轴的方向沿着行向延伸](basics4.svg)

理解主轴和交叉轴的概念对于对齐 flexbox 里面的元素是很重要的；flexbox 的特性是沿着主轴或者交叉轴对齐之中的元素。

## 起始线和终止线

另外一个需要理解的重点是 flexbox 不会对文档的书写模式提供假设。过去，CSS 的书写模式主要被认为是水平的，从左到右的。现代的布局方式涵盖了书写模式的范围，所以我们不再假设一行文字是从文档的左上角开始向右书写，新的行也不是必须出现在另一行的下面。

你可以在接下来的文章中学到更多 flexbox 和书写模式关系的详细说明。下面的描述是来帮助我们理解为什么不用上下左右来描述 flexbox 元素的方向。

如果 `flex-direction` 是 `row`，并且我是在书写英文，那么主轴的起始线是左边，终止线是右边。

![书写英文时，主轴的起始线是左边](basics5.svg)

如果我在书写阿拉伯文，那么主轴的起始线是右边，终止线是左边。

![书写阿拉伯文时，主轴的起始线是右边](basics6.svg)

在这两种情况下，交叉轴的起始线是 flex 容器的顶部，终止线是底部，因为两种语言都是水平书写模式。

之后，你会觉得用起始和终止来描述比左右更合适，这会对你理解其他相同模式的布局方法（例如：CSS Grid Layout）起到帮助的作用。

## Flex 容器

文档中采用了 flexbox 的区域就叫做 flex 容器。为了创建 flex 容器，我们把一个容器的 {{cssxref("display")}} 属性值改为 `flex` 或者 `inline-flex`。完成这一步之后，容器中的直系子元素就会变为 **flex 元素**。由于所有 CSS 属性都会有一个初始值，所以 flex 容器中的所有 flex 元素都会有下列行为：

- 元素排列为一行（`flex-direction` 属性的初始值是 `row`）。
- 元素从主轴的起始线开始。
- 元素不会在主维度方向拉伸，但是可以缩小。
- 元素被拉伸来填充交叉轴大小。
- {{cssxref("flex-basis")}} 属性为 `auto`。
- {{cssxref("flex-wrap")}} 属性为 `nowrap`。

这会让你的元素呈线形排列，并且把自己的大小作为主轴上的大小。如果有太多元素超出容器，它们会溢出而不会换行。如果一些元素比其他元素高，那么元素会沿交叉轴被拉伸来填满它的大小。

```html live-sample___the-flex-container
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three <br />has <br />extra <br />text</div>
</div>
```

```css live-sample___the-flex-container
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
}
```

{{EmbedLiveSample("the-flex-container")}}

### 更改 flex 方向 flex-direction

在 flex 容器中添加 {{cssxref("flex-direction")}} 属性可以让我们更改 flex 元素的排列方向。设置 `flex-direction: row-reverse` 可以让元素沿着行的方向显示，但是起始线和终止线位置会交换。

把 flex 容器的属性 `flex-direction` 改为 `column`，主轴和交叉轴交换，元素沿着列的方向排列显示。改为 `column-reverse`，起始线和终止线交换。

下面的例子中，`flex-direction` 值为 `row-reverse`。尝试使用其他的值 `row` ，`column`，`column-reverse`，看看内容会发生什么改变。

```html live-sample___flex-direction
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

```css live-sample___flex-direction
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-direction: row-reverse;
}
```

{{EmbedLiveSample("flex-direction")}}

## 用 flex-wrap 实现多行 Flex 容器

虽然`flexbox`是一维模型，但可以使我们的`flex`项目应用到多行中。在这样做的时候，你应该把每一行看作一个新的`flex`容器。任何空间分布都将在该行上发生，而不影响该空间分布的其他行。

为了实现多行效果，请为属性{{cssxref("flex-wrap")}}添加一个属性值`wrap`。现在，如果你的项目太大而无法全部显示在一行中，则会换行显示。下面的实时例子包含已给出宽度的项目，对于`flex`容器，项目的子元素总宽度大于容器最大宽度。由于`flex-wrap`的值设置为`wrap`，所以项目的子元素换行显示。若将其设置为`nowrap`，这也是初始值，它们将会缩小以适应容器，因为它们使用的是允许缩小的初始`Flexbox`值。如果项目的子元素无法缩小，使用`nowrap`会导致溢出，或者缩小程度还不够小。

```html live-sample___flex-wrap
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

```css live-sample___flex-wrap
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  width: 200px;
}

.box {
  width: 500px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap;
}
```

{{EmbedLiveSample("flex-wrap")}}

参见[掌握弹性物件的包装](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)指南，以了解更多有关弹性物件包装的信息。

## 简写属性 flex-flow

你可以将两个属性 `flex-direction` 和 `flex-wrap` 组合为简写属性 {{cssxref("flex-flow")}}。第一个指定的值为 `flex-direction` ，第二个指定的值为 `flex-wrap`.

在下面的例子中，尝试将第一个值修改为 `flex-direction` 的允许取值之一，即 `row`, `row-reverse`, `column` 或 `column-reverse`, 并尝试将第二个指定值修改为 `wrap` 或 `nowrap`。

```html live-sample___flex-flow
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

```css live-sample___flex-flow
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  width: 200px;
}

.box {
  width: 500px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-flow: row wrap;
}
```

{{EmbedLiveSample("flex-flow")}}

## flex 元素上的属性

为了更好地控制 flex 元素，有三个属性可以作用于它们：

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

在这里，我们只会大概介绍一下它们的用法，更详细的细节请参阅其他的文章。

在考虑这几个属性的作用之前，需要先了解一下**可用空间**（available space）这个概念。这几个 flex 属性的作用其实就是改变了 flex 容器中的可用空间的行为。同时，可用空间对于 flex 元素的对齐行为也是很重要的。

假设在 1 个 500px 的容器中，我们有 3 个 100px 宽的元素，那么这 3 个元素需要占 300px 的宽，剩下 200px 的可用空间。在默认情况下，flexbox 的行为会把这 200px 的空间留在最后一个元素的后面。

![这个 Flex 容器在布置元素后还有可用空间](basics7.svg)

如果期望这些元素能自动地扩展去填充满剩下的空间，那么我们需要去控制可用空间在这几个元素间如何分配，这就是元素上的那些 `flex` 属性要做的事。

### Flex 元素属性：`flex-basis`

`flex-basis` 定义了该元素的**空间大小**，flex 容器里除了元素所占的空间以外的富余空间就是**可用空间**。该属性的默认值是 `auto`。此时，浏览器会检测这个元素是否具有确定的尺寸。在上面的例子中，所有元素都设定了宽度（width）为 100px，所以 `flex-basis` 的值为 100px。

如果没有给元素设定尺寸，`flex-basis` 的值采用元素内容的尺寸。这就解释了：我们给只要给 Flex 元素的父元素声明 `display: flex`，所有子元素就会排成一行，且自动分配大小以充分展示元素的内容。

### Flex 元素属性：`flex-grow`

`flex-grow` 若被赋值为一个正整数，flex 元素会以 `flex-basis` 为基础，沿主轴方向增长尺寸。这会使该元素延展，并占据此方向轴上的可用空间（available space）。如果有其他元素也被允许延展，那么他们会各自占据可用空间的一部分。

如果我们给上例中的所有元素设定 `flex-grow` 值为 1，容器中的可用空间会被这些元素平分。它们会延展以填满容器主轴方向上的空间。

flex-grow 属性可以按比例分配空间。如果第一个元素 `flex-grow` 值为 2，其他元素值为 1，则第一个元素将占有 2/4（上例中，即为 200px 中的 100px）, 另外两个元素各占有 1/4（各 50px）。

### Flex 元素属性：`flex-shrink`

`flex-grow`属性是处理 flex 元素在主轴上增加空间的问题，相反`flex-shrink`属性是处理 flex 元素收缩的问题。如果我们的容器中没有足够排列 flex 元素的空间，那么可以把 flex 元素`flex-shrink`属性设置为正整数来缩小它所占空间到`flex-basis`以下。与`flex-grow`属性一样，可以赋予不同的值来控制 flex 元素收缩的程度——给`flex-shrink`属性赋予更大的数值可以比赋予小数值的同级元素收缩程度更大。

在计算 flex 元素收缩的大小时，它的最小尺寸也会被考虑进去，就是说实际上 flex-shrink 属性可能会和 flex-grow 属性表现的不一致。因此，我们可以在文章《[控制 Flex 子元素在主轴上的比例](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)》中更详细地看一下这个算法的原理。

> [!NOTE]
> 在给 `flex-grow` 和 `flex-shrink` 赋值时要注意比例。如果我们给所有 flex 元素的 flex 属性赋值为 `1 1 200px` ，并且希望其中一个元素可以增加到 2 倍，我们可以给该元素的 flex 属性赋值为`2 1 200px`。当然，你也可以选择赋值为 flex: `10 1 200px` 和 flex: `20 1 200px` 。

### Flex 属性的简写

你可能很少看到 `flex-grow`，`flex-shrink`，和 `flex-basis` 属性单独使用，而是混合着写在 {{cssxref("flex")}} 简写形式中。 `Flex` 简写形式允许你把三个数值按这个顺序书写 — `flex-grow`，`flex-shrink`，`flex-basis`。

你可以在下面的实例中尝试把 flex 简写形式中的数值更改为不同数值，但要记得第一个数值是 `flex-grow`。赋值为正数的话是让元素增加所占空间。第二个数值是`flex-shrink` — 正数可以让它缩小所占空间，但是只有在 flex 元素总和超出主轴才会生效。最后一个数值是 `flex-basis`；flex 元素是在这个基准值的基础上缩放的。

```html live-sample___flex-properties
<div class="box">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
</div>
```

```css live-sample___flex-properties
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
}

.one {
  flex: 1 1 auto;
}

.two {
  flex: 1 1 auto;
}

.three {
  flex: 1 1 auto;
}
```

{{EmbedLiveSample("flex-properties")}}

大多数情况下可以用预定义的简写形式。在这个教程中你可能经常会看到这种写法，许多情况下你都可以这么使用。下面是几种预定义的值：

- `flex: initial`
- `flex: auto`
- `flex: none`
- `flex: <positive-number>`

`flex: initial` 是把 flex 元素重置为 Flexbox 的初始值，它相当于 `flex: 0 1 auto`。在这里 `flex-grow` 的值为 0，所以 flex 元素不会超过它们 `flex-basis` 的尺寸。`flex-shrink` 的值为 1, 所以可以缩小 flex 元素来防止它们溢出。`flex-basis` 的值为 `auto`. Flex 元素尺寸可以是在主维度上设置的，也可以是根据内容自动得到的。

`flex: auto` 等同于 `flex: 1 1 auto`；和上面的 `flex:initial` 基本相同，但是这种情况下，flex 元素在需要的时候既可以拉伸也可以收缩。

`flex: none` 可以把 flex 元素设置为不可伸缩。它和设置为 `flex: 0 0 auto` 是一样的。元素既不能拉伸或者收缩，但是元素会按具有 `flex-basis: auto` 属性的 flexbox 进行布局。

你在教程中常看到的 `flex: 1` 或者 `flex: 2` 等等。它相当于`flex: 1 1 0` 或者 `flex: 2 1 0`。元素可以在 `flex-basis` 为 0 的基础上伸缩。

尝试在下面的实例中应用这些简写值。

```html live-sample___flex-shorthands
<div class="box">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
</div>
```

```css live-sample___flex-shorthands
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
}

.one {
  flex: 1;
}

.two {
  flex: 1;
}

.three {
  flex: 1;
}
```

{{EmbedLiveSample("flex-shorthands")}}

## 元素间的对齐和空间分配

Flexbox 的一个关键特性是能够设置 flex 元素沿主轴方向和交叉轴方向的对齐方式，以及它们之间的空间分配。

### `align-items`

{{cssxref("align-items")}} 属性可以使元素在交叉轴方向对齐。

这个属性的初始值为`stretch`，这就是为什么 flex 元素会默认被拉伸到最高元素的高度。实际上，它们被拉伸来填满 flex 容器——最高的元素定义了容器的高度。

你也可以设置`align-items`的值为`flex-start`，使 flex 元素按 flex 容器的顶部对齐，`flex-end` 使它们按 flex 容器的下部对齐，或者`center`使它们居中对齐。在实例中尝试——我给出了 flex 容器的高度，以便你可以看到元素在容器中移动。看看如果更改 align-items 的值为下列值会发生什么：

- `stretch`
- `flex-start`
- `flex-end`
- `center`

```html live-sample___align-items
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three <br />has <br />extra <br />text</div>
</div>
```

```css live-sample___align-items
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  width: 500px;
  height: 130px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  align-items: flex-start;
}
```

{{EmbedLiveSample("align-items")}}

### `justify-content`

{{cssxref("justify-content")}}属性用来使元素在主轴方向上对齐，主轴方向是通过 `flex-direction` 设置的方向。初始值是`flex-start`，元素从容器的起始线排列。但是你也可以把值设置为`flex-end`，从终止线开始排列，或者`center`，在中间排列。

你也可以把值设置为`space-between`，把元素排列好之后的剩余空间拿出来，平均分配到元素之间，所以元素之间间隔相等。或者使用`space-around`，使每个元素的左右空间相等。

在实例中尝试下列`justify-content`属性的值：

- `stretch`
- `flex-start`
- `flex-end`
- `center`
- `space-around`
- `space-between`

```html live-sample___justify-content
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

```css live-sample___justify-content
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  justify-content: flex-start;
}
```

{{EmbedLiveSample("justify-content")}}

在以后的文章中，为了更好的理解它们怎么使用，我们会更深入的探索这些属性。然而，这些简单的例子对大多数应用都很有帮助。

## 下一步

在读完这篇文章之后，你应该掌握了 flexbox 的基本特性。在下一篇文章中，我们将会学习如何[与其他 CSS 一起使用](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods)。
