---
title: 视觉格式化模型
slug: Web/CSS/Guides/Display/Visual_formatting_model
l10n:
  sourceCommit: 6d55eec58e38583da60aa635d41393ad051d1c6d
---

在 CSS 中，**视觉格式化模型**（visual formatting model）描述了用户代理如何获取文档树，并将其处理后显示在视觉媒体上。这包括{{glossary("continuous media", "连续媒体")}}（例如电脑屏幕）和[分页媒体](/zh-CN/docs/Web/CSS/Guides/Paged_media)（例如书籍或浏览器打印功能打印的文档）。大部分信息同样适用于连续媒体和分页媒体。

在视觉格式化模型中，文档树中的每个元素都会根据盒子模型生成一个个盒子。这些盒子的布局由以下因素决定：

- 盒子的尺寸和类型。
- 定位方案（常规流定位、浮动定位和绝对定位）。
- 文档树中元素之间的关系。
- 外部因素（如，视口尺寸、图像的固有尺寸，等）。

CSS2 中定义了许多有关视觉格式化模型的信息，但是不同的 CSS 布局模块已经扩展了这些信息。阅读规范时，你经常会发现对 CSS2 中定义的模型的引用。因此，在阅读其他布局规范时，了解该模型以及 CSS2 中用于描述该模型的术语很有价值。

在本文档中，我们定义了模型并介绍了一些相关的术语和概念，同时链接到更具体的页面以获取更多详细信息。

## 视口的作用

在连续媒体中，{{glossary("viewport", "视口")}}是浏览器窗口的显示区域。当视口的尺寸发生改变时（例如，如果你改变窗口大小，或改变移动设备的屏幕方向），用户代理会改变页面的布局。

如果视口小于文档的大小，那么用户代理需要提供一种方法来滚动到文档中不显示的部分。我们最常看到这种滚动是在**块向维度**上的滚动——在水平、从上到下的语言中的垂直滚动。但是，你可能设计了一些也需要在**行向维度**上滚动的内容。

## 盒子生成

**盒子生成**是 CSS 视觉格式化模型的一部分，用于从文档元素生成盒子。生成的盒子有不同的类型，影响它们视觉格式化的东西也不同。生成的盒子的类型取决于 CSS {{cssxref("display")}} 属性的值。

最初定义于 CSS2 中的 `display` 属性在 [CSS 显示](/zh-CN/docs/Web/CSS/Guides/Display)、[CSS 弹性盒子布局](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout)、[CSS 网格布局](/zh-CN/docs/Web/CSS/Guides/Grid_layout)和 [CSS 旁注布局](/zh-CN/docs/Web/CSS/Guides/Ruby_layout)模块中得到了扩展。此外，自 CSS2 以来，一些与显示有关的术语已经得到更新和澄清。

CSS 获取源文档并将其渲染到画布上。为此，它会生成一个中间结构，即**盒子树**，它表示被渲染文档的格式化结构。盒子树中的每一个盒子都表示画布上特定空间和/或时间点所对应的元素（或伪元素），而盒子树中的每个文本流同样表示其对应文本节点的内容。

然后，对于每个元素，CSS 会根据元素 `display` 属性指定的值生成一个个盒子。

> [!NOTE]
> 盒子通常按其显示类型来指代——例如，由带有 `display: block` 的元素生成的盒子称为“区块盒子”或简称为“区块”。但请注意，区块盒子、块级盒子和区块容器之间具有细微的差异；有关更详细的信息，请参阅下面的[区块盒子](#区块盒子)部分。

### 主盒子

当一个元素生成了一个或多个盒子时，其中的一个盒子是**主盒子**（在盒子树中包含它的后代盒子和生成的内容，它同时也是任何定位方案中涉及的盒子）。

一些元素可能会生成除主盒子以外的其他盒子，例如 `display: list-item` 会生成多个盒子（例如，一个**主区块盒子**和一个**子标记盒子**）。而一些值（例如 `none` 或 `contents`）会导致元素及其后代不生成任何盒子。

### 匿名盒子

当没有 HTML 元素被用于盒子时，会创建**匿名盒子**。例如，当你在父元素上声明 `display: flex`，且其中直接包含一串未包裹在其他元素中的文本时，会发生这种情况。为了修复盒子树，会围绕这一串文本创建匿名盒子。它会表现得像一个弹性元素，但是，由于没有定位的元素，其无法像常规的盒子那样被选中并添加样式。

```html live-sample___anonymous-flex
<div class="flex">
  我被包装在一个匿名盒子中
  <p>我在段落中</p>
  我被包装在一个匿名盒子中。
</div>
```

```css live-sample___anonymous-flex
body {
  font: 1.2em sans-serif;
  margin: 20px;
}

.flex {
  display: flex;
}

.flex > * {
  background-color: rebeccapurple;
  color: white;
}
```

{{EmbedLiveSample("anonymous-flex")}}

当文本穿插到块级元素中时，也会发生同样的事情。在下一个示例中，`<div>` 中有一个字符串；字符串之间是一个包含部分文本的 `<p>` 元素。

```html live-sample___anonymous-block
<div class="example">
  我被包装在一个匿名盒子中
  <p>我在段落中</p>
  我被包装在一个匿名盒子中。
</div>
```

```css live-sample___anonymous-block
body {
  font: 1.2em sans-serif;
  margin: 20px;
}

.example > * {
  background-color: rebeccapurple;
  color: white;
}
```

{{EmbedLiveSample("anonymous-block")}}

在盒子树中，字符串被分割到了三个盒子中。段落元素之前的字符串部分被包裹到一个匿名盒子中，然后 `<p>` 会生成一个盒子，然后是另一个匿名盒子。

关于这些匿名盒子需要考虑的一点是，它们从其直接父级继承样式，但你无法通过定位匿名盒子来修改它们的外观。在我们的示例中，我们使用直接子元素选择器来定位容器中的子元素。这不会改变匿名盒子，因为它们本身不是“元素”。

**行内匿名盒子**（inline anonymous box）是在字符串被行级元素分割时创建的，例如，一段文本中包含一个被 `<em></em>` 包裹的句子。这会将句子分割成三个行内盒子——强调（em）部分之前的行内匿名盒子、在 `<em>` 元素中包裹的部分，以及最后的行内匿名盒子。与匿名区块盒子一样，行内匿名盒子不能像 `<em>` 那样单独设置样式，它们只能继承容器的样式。

其他格式化上下文也会创建匿名盒子。[网格布局](/zh-CN/docs/Web/CSS/Guides/Grid_layout)的表现与上述[弹性盒](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout)的示例相同，会将文本字符串转换为带有匿名盒子的网格元素。[多列](/zh-CN/docs/Web/CSS/Guides/Multicol_layout)布局会在对列创建匿名列盒子，这些盒子也无法设置样式或被定位。[表格布局](/zh-CN/docs/Web/CSS/Guides/Table)会添加匿名盒子以创建适当的表格结构——例如，如果没有具有 `display: table-row` 的盒子，则会添加匿名表格行。

### 行内盒子

**行内盒子**是包裹每一行文本的盒子。如果你浮动一个元素，然后在其后跟一个具有背景颜色的块，则可以看到行内盒子与其包含区块之间的区别。

在下面的示例中，浮动的 `<div>` 后面的行内盒子被缩短，以包裹浮动。盒子的背景延伸到浮动的后面，因为浮动元素已脱离流。

```html live-sample___line-boxes
<div class="float"></div>
<p class="following">
  此文本跟随浮动，行内盒子被缩短以便为浮动腾出空间，但元素的盒子仍然在常规流中。
</p>
```

```css live-sample___line-boxes
body {
  font: 1.2em sans-serif;
  margin: 20px;
}

.float {
  float: left;
  width: 150px;
  height: 150px;
  background-color: rebeccapurple;
  margin: 20px;
}

.following {
  background-color: #ccc;
}
```

{{EmbedLiveSample("line-boxes", "", "250px")}}

## 定位方案以及应用流和脱离流的元素

在 CSS 中，盒子可以按照三种定位方案进行布局：**常规流**、**浮动**和**绝对定位**。

### 常规流

在 CSS 中，常规流包含块级盒子的区块格式化、行内盒子的行内格式化，也包含块级和行内盒子的相对和粘性定位。

阅读有关 CSS [流式布局](/zh-CN/docs/Web/CSS/Guides/Display/Flow_layout)的更多信息。

### 浮动

在浮动模型中，盒子首先按照常规流的方式进行布局，然后从常规流中脱离并进行定位，通常位于左侧或右侧。内容可以沿着浮动的一侧进行排列。

查看有关[浮动](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Floats)的更多信息。

### 绝对定位

在绝对定位模型（也包含 `fixed` 定位）中，盒子会从常规流中完全移除，并分配一个相对于包含区块（在固定定位的情况下为视口）或 [CSS 锚点定位](/zh-CN/docs/Web/CSS/Guides/Anchor_positioning)中的一个或多个锚点元素的位置。

如果元素是浮动或绝对定位的，或是根元素，则该元素被称为是**脱离流**的。如果元素没有脱离流，那么元素被称为是**应用流**的。

阅读有关 [CSS 定位布局](/zh-CN/docs/Web/CSS/Guides/Positioned_layout)的信息。

## 格式化上下文和 display 属性

盒子可以描述为具有 `block` 或 `inline` **外部显示类型**。外部显示类型指明盒子如何与其他元素在页面上进行交互。

盒子还具有内部显示类型，指明其子元素的行为。对于常规区块和行内布局，或常规流布局，显示类型为 `flow`。这意味着子元素也将是 `block` 或 `inline`。

但是，内部显示类型可能是 `grid` 或 `flex`，在这种情况下，直接子元素将显示为网格或弹性元素。这种情况下的元素被描述为创建了网格或弹性[格式化上下文](/zh-CN/docs/Web/CSS/Guides/Display/Formatting_contexts)。在许多方面，这类似于区块格式化上下文，但是，子元素的行为是弹性或网格元素，而不是常规流中的元素。

{{cssxref("display")}} 属性参考中描述了块级盒子和行级盒子之间的交互。

此外，display 具体值的参考解释了这些格式化上下文在盒子布局中如何工作。

- [CSS 网格布局](/zh-CN/docs/Web/CSS/Guides/Grid_layout)模块
- [CSS 弹性盒子布局](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout)模块
- [CSS 多列布局](/zh-CN/docs/Web/CSS/Guides/Multicol_layout)模块
- [CSS 表格](/zh-CN/docs/Web/CSS/Guides/Table)模块
- [CSS 列表和计数器](/zh-CN/docs/Web/CSS/Guides/Lists)模块

### 独立格式化上下文

元素要么参与其包含区块的格式化上下文，要么建立独立的格式化上下文。例如，网格容器为其子元素创建新的**网格格式化上下文**。

**独立格式化上下文**包含浮动，且外边距不会跨过格式化上下文的边界被折叠。因此，创建新的区块格式化上下文可以确保浮动与外边距保留在盒子内。要实现这一点，请将 `display: flow-root` 添加到希望创建新的[区块格式化上下文](/zh-CN/docs/Web/CSS/Guides/Display/Block_formatting_context)的盒子上。

以下示例展示了 `display: flow-root` 的效果。带有黑色背景的盒子看起来会将浮动元素和文本包装在一起。如果删除 `display: flow-root`，则浮动元素会从盒子底部弹出，因为它不再被包含在盒子中。

```html live-sample___block-flow-root
<div class="container">
  <div class="item">浮动</div>
  <p>跟随浮动的文本。</p>
</div>
```

```css hidden live-sample___block-flow-root
body {
  font: 1.2em sans-serif;
  margin: 20px;
}
.container {
  background-color: #333;
  color: #fff;
}

.item {
  background-color: #fff;
  border: 1px solid #999;
  color: #333;
  width: 100px;
  height: 100px;
  padding: 10px;
}
```

```css live-sample___block-flow-root
.container {
  display: flow-root;
}

.item {
  margin: 10px;
  float: left;
}
```

{{EmbedLiveSample("block-flow-root", "", "250px")}}

### 区块盒子

在规范中，区块盒子（block box）、块级盒子（block-level box）以及区块容器（block container）在某些地方都被称为**区块盒子**。它们有一些不同，只有在没有歧义的情况下才应使用区块盒子这个术语。

#### 区块容器

**区块容器**要么仅包含行级盒子，参与行内格式化上下文；要么仅包含块级盒子，参与区块格式化上下文。因此，我们看到了上面解释的行为，其中，引入了匿名盒子以确保所有元素都可以参与区块或行内格式化上下文。只有当元素包含块级或行级盒子时，它才是区块容器。

#### 行级和块级盒子

它们是包含在区块容器内的盒子，分别参与行内或区块布局。

#### 区块盒子

区块盒子是一种块级盒子，它也是一种区块容器。如 CSS `display` 中所描述的，盒子可以是块级盒子，但不能同时是区块容器（例如，它可以是弹性或网格容器）。

## 参见

- [CSS 语法](/zh-CN/docs/Web/CSS/Guides/Syntax/Introduction)指南
- [注释](/zh-CN/docs/Web/CSS/Guides/Syntax/Comments)
- [优先级](/zh-CN/docs/Web/CSS/Guides/Cascade/Specificity)
- [继承](/zh-CN/docs/Web/CSS/Guides/Cascade/Inheritance)
- [层叠上下文](/zh-CN/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- [区块格式化上下文](/zh-CN/docs/Web/CSS/Guides/Display/Block_formatting_context)
- [盒子模型](/zh-CN/docs/Web/CSS/Guides/Box_model/Introduction)
- [布局模式](/zh-CN/docs/Glossary/Layout_mode)
- [外边距折叠](/zh-CN/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- {{glossary("Replaced elements", "可替换元素")}}
- {{DOMxRef("VisualViewport")}} 接口
- {{glossary("Scroll container", "滚动容器")}}
