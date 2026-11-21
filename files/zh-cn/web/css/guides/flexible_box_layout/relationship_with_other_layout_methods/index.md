---
title: 弹性盒子与其他布局方法的联系
short-title: 弹性盒子与其他布局
slug: Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods
l10n:
  sourceCommit: 6cc5111618cee56a288f3c4354acd2330f893434
---

在本文中，我们将了解弹性盒子（Flexbox）如何与所有其他 CSS 模块配合使用。如果你想学习弹性盒子，我们将一起找出需要注意的规范以及弹性盒子与其他的模块不同的原因。

## 盒子对齐模块

许多人开始了解弹性盒子，是为了在弹性容器中正确对齐弹性元素。弹性盒子可以设置在其交叉轴以及主轴上对齐元素的属性。

弹性盒子最初在独立的[弹性盒子布局](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout)模块中定义，而与其他布局方法共用的属性和值则在 [CSS 盒子对齐](/zh-CN/docs/Web/CSS/Guides/Box_alignment)模块中定义。该模块详细说明了对齐、空间分配、间隙和沟槽在所有布局系统（而不仅仅是弹性盒子）中的工作方式。当两个规范都定义了某项特性时，应以盒子对齐模块中的定义为准。

## 书写模式

在[弹性盒子的基本概念](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)文章中，提到了弹性盒子是**会感知书写模式的**。书写模式在 [CSS 书写模式](/zh-CN/docs/Web/CSS/Guides/Writing_modes)模块中有详细说明，其中详细说明了 CSS 如何支持国际上存在的不同书写模式。我们需要了解这将如何影响我们的弹性布局，因为书写模式会改变文档中块的布局方向。了解**块**与**行**的方向对于新的布局方法至关重要。

值得注意的是，除了发布使用不同书写模式的语言的内容之外，我们可能还想改变文档的书写模式。CSS 书写模式模块定义了如何水平地从左到右或从右到左书写文本，以及如何垂直地从上到下书写文本。这对于国际化和翻译很重要，同时也可以用于创意设计。

### 书写模式属性

书写模式规范定义了以下 {{cssxref("writing-mode")}} 属性的值，这些值用于改变块在页面上的布局方向，以匹配内容在特定书写模式下的格式化方向。你可以更改下面的实时示例的书写模式，以查看弹性布局的变化。

- `horizontal-tb`
- `vertical-rl`
- `vertical-lr`
- `sideways-rl`
- `sideways-lr`

```html live-sample___writing-modes
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

```css live-sample___writing-modes
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  width: 500px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  writing-mode: horizontal-tb;
}
```

{{EmbedLiveSample("writing-modes")}}

注意，你通常不会使用 CSS 和 `writing-mode` 属性来将整个文档更改为另一种书写模式。这应该通过 HTML 完成，通过为 {{htmlelement("html")}} 元素添加 [`dir`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/dir) 和 [`lang`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/lang) 属性来指示文档语言和默认文本方向。这意味着即使 CSS 没有加载，文档也会正确显示。

## 弹性盒子和其他布局方式

有些属性在设计时假设内容使用标准的区块布局系统，因此不适用于弹性布局。设置了 `display: flex` 的元素在大多数情况下都会像其他块级容器一样，它会创建一个包含块。它会建立新的{{glossary("Flex container", "弹性格式化上下文")}}，因此浮动不会侵入，容器的外边距也不会折叠。

对于弹性元素，如果元素是浮动的或者清除了浮动，然后因父元素应用了 `display: flex` 而变成弹性元素，那么浮动和清除也将不再发生，该元素也不会像浮动元素那样脱离常规流。如果你使用了 {{cssxref("vertical-align")}} 属性（与 `inline-block` 或表格布局一起用于对齐），这将不再影响该元素，可以改用弹性盒子的对齐属性来代替。

在下面的实时示例中，子元素应用了浮动，而它们的容器应用了 `display: flex`。如果你移除 `display: flex`，你应该会看到 `.box` 元素会折叠，因为我们没有清除浮动。这证明了浮动的存在。重新应用 `display: flex`，折叠就不会发生。这是因为元素不再浮动——它们已经变成了弹性元素。

```html live-sample___floats
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

```css live-sample___floats
.box {
  width: 500px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  float: left;
}
```

{{EmbedLiveSample("floats")}}

## 弹性盒子和网格布局

[CSS 网格布局](/zh-CN/docs/Web/CSS/Guides/Grid_layout)和弹性盒子共享许多属性和值。对于两种布局中不同的属性，如果弹性元素变成网格元素，则分配给子元素的 `flex` 相关值（例如 `flex-end`）将被忽略。正如上文所述，盒子对齐模块中适用于这两种布局方法的值，会取代仅在弹性盒子规范中定义的值。

### 弹性和网格的区别

一个常见的问题是：弹性盒子和 CSS 网格布局之间有什么区别？为什么我们有两个规范，它们有时看起来做着相同的事情？

这个问题最直接的答案定义在规范中。弹性盒子是一维布局方法，而网格布局是二维布局方法。下面的示例使用了弹性布局。正如在[基本概念](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)文章中描述的那样，弹性元素允许换行，但是一旦这样做，每一行的行为都像一个独立的弹性容器。当空间被分配时，弹性盒子不会参考其他行中的元素的位置，而只是将元素彼此对齐。

```html live-sample___flex-layout
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
</div>
```

```css live-sample___flex-layout
.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 1em;
  flex: 1 1 200px;
}
```

{{EmbedLiveSample("flex-layout", "", "300px")}}

如果我们使用网格布局创建一个非常相似的布局，我们可以控制行和列的布局。

```html live-sample___grid-layout
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
</div>
```

```css live-sample___grid-layout
.box {
  border: 2px dotted rgb(96 139 168);
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  padding: 1em;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("grid-layout", "", "300px")}}

这些示例指出了两个布局方法之间的另一个关键区别。在网格布局中，你需要在容器上设置大部分尺寸规范，设置轨道然后将元素放入其中。在弹性盒子中，虽然你创建了弹性容器并设置了该级别的方向，但是对元素大小的任何控制都需要在元素本身之上进行。

在某些情况下，你可以使用任意一种布局方法。随着你对这两种方法越来越熟悉，你会发现每一种方法都更适用于特定的布局需求，最终你的 CSS 中会同时使用这两种方法。这很少有一个正确或错误的答案。

作为基本规则，如果你要为弹性元素设置宽度，以便使包装的弹性容器中的一排元素与其上方的元素对齐，那么应该改用二维网格布局。

并没有“较小的组件应使用弹性盒子，而较大的组件应使用网格布局”这样的固定规则。较小的组件可以是二维的，而一维布局则可以更好地表示较大的布局。尝试一下它们——你有了布局方法的选择，所以要好好利用它。

可以参考[网格布局和其他布局方法的关系](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods)这篇文章，以更为全面地比较网格和弹性盒子。这篇文章详细解释了网格布局和弹性布局的不同之处，并展示了使用网格布局的一些其他功能，例如在网格上层叠放置元素。这篇文章还可以帮助你决定使用哪种布局方法。

## 弹性盒子和 display: contents

对于 {{cssxref("display")}} 属性的 `contents` 值，规范中对它的描述如下：

> “元素本身并不会生成任何盒子，但它的子元素和伪元素仍然会像通常的那样生成盒子。对于盒子的生成和布局，元素必须被视作已经被替换为其子元素和伪元素。”

`display` 的值控制盒子的生成，以及元素是否应该生成一个我们可以添加样式并在页面上看到的盒子，或者是否应该移除它通常会创建的盒子，并将子元素在层面上向上移动以参与其父元素所参与的布局方法。通过一个示例，这将更易于理解。

在下面的实时示例中，我们有一个带有三个弹性元素的弹性容器。其中的一个弹性元素有两个嵌套在其中的元素，它们通常不会参与弹性布局。弹性布局仅适用于弹性容器的直接子元素。

通过为嵌套元素的包装器添加 `display: contents`，你可以看到该元素已从布局中消失，从而允许两个子元素被布局，就像它们是弹性容器的直接子元素一样。你可以尝试移除 `display: contents` 这行来查看其结果。

请注意，这只会从布局中删除该盒子；子元素并不会以任何其他方式成为直接子元素。我们使用了直接子元素选择器来为弹性元素添加背景和边框，因此这些样式并没有应用到嵌套的子元素上。它们已经被布局为弹性元素，但由于它们不是直接子元素，所以它们不会获得其他样式。

由于盒子被移除，你就无法使用它来——例如——为嵌套的子元素添加背景色。如果你在该实时示例中删除 `display: contents`，你会看到我们要删除属性的元素的直接子元素的背景色为橙色。当盒子消失时，这个背景色也会消失。

```html live-sample___display-contents
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div class="nested">
    <div>Sub-item 1</div>
    <div>Sub-item 2</div>
  </div>
</div>
```

```css live-sample___display-contents
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  padding: 1em;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  border: 2px dotted rgb(96 139 168);
  padding: 1em;
  display: flex;
}

.nested {
  background-color: orange;
  display: contents;
}
```

{{EmbedLiveSample("display-contents")}}

> [!WARNING]
> 一些浏览器会错误地将某些设置了 `display: contents` 的元素从无障碍树中移除（但会保留其后代），从而丢失这些元素的语义，同时保留其子元素的内容。这意味着屏幕阅读器可能不会宣告元素本身。参见 [`display: contents`](/zh-CN/docs/Web/CSS/Reference/Properties/display#display_contents) 和[认为 `display: contents` 有害](https://ericwbailey.website/published/display-contents-considered-harmful/)。
