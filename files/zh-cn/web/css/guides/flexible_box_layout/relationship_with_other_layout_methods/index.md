---
title: 弹性盒子与其他布局方法的联系
slug: Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods
l10n:
  sourceCommit: 856b52f634b889084869d2ee0b8bb62c084be04d
---

在本文中，我们将了解弹性盒子（Flexbox）如何与所有其他 CSS 模块配合使用。如果你想学习弹性盒子，我们将一起找出需要注意的规范以及弹性盒子与其他的模块不同的原因。

> [!NOTE]
> CSS 1 和 CSS 2 是单一的整体规范，其中所有 CSS 都定义在一个文档中。随着 CSS 成为一种特性更加丰富的语言，各个部分有不同的发展速度，如何维护一个庞大的规范就成了问题。因此 CSS 已被模块化，不同的 CSS 规范构成的模块构成了如今的 CSS。这些模块之间相互关联，并且处于不同的开发阶段。

## 盒子对齐模块

许多人开始关注弹性盒子的最初原因是在弹性容器中能够很好地对齐其中的元素。弹性盒子可以设置在其交叉轴以及主轴上对齐元素的属性。

这些属性最开始出现在弹性盒子规范中，现在已经成为[盒子对齐规范](https://www.w3.org/TR/css-align-3/)的一部分。这个规范详细说明了在所有布局中（不仅仅是弹性盒子）对齐属性是如何起作用的。盒子对齐用于处理对齐方式以及内容调整（包括在弹性元素之间创建间隙或上下间距）。

之所以在弹性盒子规范和盒子对齐规范中都有有关盒子对齐属性的详细描述，是为了确保弹性盒子规范的完成不会受盒子对齐规范的影响，因为后者需要详细说明所有的布局类型中的对齐方法。弹性盒子规范中有一条注释指出：将来，弹性盒子第 3 版规范一旦完成，它将会取代弹性盒子规范中的相关定义：

> “注意：虽然对齐属性是在 CSS 弹性盒子 \[CSS-ALIGN-3] 中定义的，但弹性盒子布局在此处重现了相关属性的定义，以免形成规范性的依赖关系，而这可能会减慢规范的发展。在 CSS 弹性盒子第 3 级规范完成并定义其对其他布局模式的效果之前，这些属性仅适用于弹性布局。此外，在盒子对齐模块中定义的任何新值都将适用于弹性盒子布局；换句话说，一旦盒子对齐模块完成，其中的相关定义将取代此处的定义。”

在本系列的后续文章——[在弹性容器中对齐元素](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)——中，我们将全面了解盒子对齐属性如何应用于弹性元素。

## 书写模式

在[弹性盒子的基本概念](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)文章中，我们解释了弹性盒子是**会感知书写模式的**。书写模式在 CSS [书写模式规范](https://www.w3.org/TR/css-writing-modes-3/)中有详细说明，其中详细说明了 CSS 如何支持国际上存在的各种不同的书写模式。我们需要了解这将如何影响我们的弹性布局，因为书写模式会改变文档中块的布局方向。了解**块**与**行**的方向对于新的布局方法至关重要。

值得注意的是，除了发布使用不同书写模式的语言的内容之外，我们可能还想改变文档的书写模式。请参阅[这篇文章](https://24ways.org/2016/css-writing-modes/)，了解书写模式及其使用方法的完整描述，无论是针对其他语言的内容还是出于创意原因。

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

请注意目前只有 Firefox 支持 `sideways-rl` 和 `sideways-lr`。关于 `writing-mode` 和弹性盒子还有一些已知的问题。你可以在 [MDN 有关 writing-mode 的文档](/zh-CN/docs/Web/CSS/Reference/Properties/writing-mode)中查看有关浏览器支持的更多信息。然而，如果你打算在你的布局中使用书写模式，我们建议仔细测试结果——尤其是因为它很容易使内容变得难以阅读！

注意，你通常不会使用 CSS 和 `writing-mode` 属性来将整个文档更改为另一种书写模式。这应该通过 HTML 完成，通过为 `html` 元素添加 `dir` 和 `lang` 属性来指示文档语言和默认文本方向。这意味着即使 CSS 没有加载，文档也会正确显示。

## 弹性盒子和其他布局方式

弹性盒子规范包含了对如果一个元素使用了其他布局方式然后变成了弹性元素的这种情况[会发生什么的定义](https://www.w3.org/TR/css-flexbox-1/#flex-containers)。例如，如果一个元素是浮动的，那么它的父元素就会变成弹性容器。或者，弹性容器在不同布局中的行为。

设置了 `display: flex` 的元素在大多数情况下都会像其他块级容器一样，它会创建一个包含块。浮动不会侵入，容器的外边距也不会折叠。

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

[CSS 网格布局](/zh-CN/docs/Web/CSS/Guides/Grid_layout)和弹性盒子在覆盖其他方法方面的行为通常是一样的。然而，你可能想要将弹性盒子作为网格布局的回退布局，因为旧版浏览器对弹性盒子有更好的支持。这种方法非常有效。如果一个弹性元素变成了网格元素，那么（可能）分配给子元素的 `flex` 属性将被忽略。

你可以同时在两种布局方式中使用盒子对齐属性，因此将弹性盒子作为网格布局的回退布局可以有效地工作。

### 弹性和网格的区别

一个常见的问题是：弹性盒子和 CSS 网格布局之间有什么区别？为什么我们有两个规范，它们有时看起来做着相同的事情？

这个问题最直接的答案定义在规范中。弹性盒子是一维布局方法，而网格布局是二维布局方法。下面的示例使用了弹性布局。正如在[基本概念](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)文章中描述的那样，弹性元素允许换行，但是一旦这样做，每一行都会变成一个新的弹性容器。当空间被分配时，弹性盒子不会参考其他行中的元素的位置，而只是将元素彼此对齐。

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

在某些情况下，你可以使用任意一种布局方法，但你会发现每一种方法都适用于不同的布局需求，你的 CSS 中会有多种方法。这很少有一个正确或错误的答案。

作为基本规则，如果你要为弹性元素设置宽度，以便使包装的弹性容器中的一排元素与其上方的元素对齐，那么你真正需要的其实是二维布局。在这种情况下，很可能使用 CSS 网格布局更好。对于较小的组件，你不应该使用弹性盒子，而对于较大的组件，你不应该使用网格布局；较小的组件可以是二维的，而一维布局则可以更好地表示较大的布局。尝试一下它们——我们第一次有了布局方法的选择，所以要好好利用它。

可以参考[网格布局和其他布局方法的关系](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods)这篇文章，以更为全面地比较网格和弹性盒子。这篇文章详细解释了网格布局和弹性布局的不同之处，并展示了使用网格布局的一些其他功能，例如在网格上层叠放置元素。这篇文章还可以帮助你决定使用哪种布局方法。

## 弹性盒子和 display: contents

{{cssxref("display")}} 属性的 `contents` 值是一个新值，规范中对它的描述如下：

> “元素本身并不会生成任何盒子，但它的子元素和伪元素仍然会像通常的那样生成盒子。对于盒子的生成和布局，元素必须被视作已经被替换为其子元素和伪元素。”

`display` 的值控制盒子的生成，以及元素是否应该生成一个我们可以添加样式并在页面上看到的盒子，或者是否应该移除它通常会创建的盒子，并将子元素在层面上向上移动以参与其父元素所参与的布局方法。通过一个示例，这将更易于理解。

在下面的实时示例中，我们有一个带有三个子元素的弹性容器。其中的一个弹性元素有两个嵌套在其中的元素，它们通常不会参与弹性布局。弹性布局仅适用于弹性容器的直接子元素。

通过为嵌套元素的包装器添加 `display: contents`，你可以看到该元素已从布局中消失，从而允许两个子元素被布局，就像它们是弹性容器的直接子元素一样。你可以尝试移除 `display: contents` 这行来查看其结果。

请注意，这只会从布局中删除该盒子；子元素并不会以任何其他方式成为直接子元素。你可以看到，我们使用了直接子元素选择器来为弹性元素添加背景和边框，因此这些样式并没有应用到嵌套的子元素上。它们已经被布局为弹性元素，但由于它们不是直接子元素，所以它们不会获得其他样式。

> [!WARNING]
> 大多数浏览器的当前实现会从无障碍树中移除任何具有 `display: contents` 的元素（但会保留其后代）。这将导致屏幕阅读技术不再宣告该元素。根据规范，这是不正确的行为，参见 [`display: contents`](/zh-CN/docs/Web/CSS/Reference/Properties/display#display_contents)。

此外，删除了盒子后，你就无法使用它来——例如——为嵌套的子元素添加背景色。如果你在该实时示例中删除 `display: contents`，你会看到我们要删除属性的元素的直接子元素的背景色为橙色。当盒子消失时，这个背景色也会消失。

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

浏览器对 `display:contents` 的支持是有限的，这个示例需要相应支持才能正常工作。Firefox 已经支持了 `display: contents`，而 Chrome 正在实现该值。一旦有了更好的浏览器支持，这个特性在需要语义标记但又不想显示默认生成的盒子的情况下将非常有用。
