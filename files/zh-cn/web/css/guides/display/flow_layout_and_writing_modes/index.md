---
title: 流式布局和书写模式
slug: Web/CSS/Guides/Display/Flow_layout_and_writing_modes
---

CSS 2.1 规范详细描述了正常流的行为，它采用了水平书写模式。[布局](/zh-CN/docs/Web/CSS/Guides/Display/Block_and_inline_layout)属性在垂直写入模式中的工作方式应该相同。在本指南中，我们将研究流式布局在与不同的文档写入模式一起使用时的行为。

这不是 CSS 中书写模式使用的全面指南，这里的目的是以可能未预料到的方式记录流式布局与书写模式交互的区域。本文档的[参见](#参见)章节链接了更多书写模式的资源。

## 书写模式规范

CSS 编写模式级别 3 规范定义了文档编写模式更改对流式布局的影响。在书写模式介绍中，[规范提到](https://drafts.csswg.org/css-writing-modes-3/#text-flow)：

> “CSS 中的书写模式由 {{cssxref("writing-mode")}}、{{cssxref("direction")}} 和 {{cssxref("text-orientation")}} 属性决定。它主要是根据其内联基础方向和块流方向来定义的。”

规范将*行基本方向*定义为内容在行上的排序方向。这定义了内联方向的开始和结束。开始是句子开始的地方，结束是一行文本在开始换行之前结束的地方。

*块流方向*是框（例如段落）以该写入模式堆叠的方向。CSS 写入模式属性控制块流方向。如果要将页面或页面的一部分更改为 `vertical-lr`，则可以在元素上设置 `writing-mode: vertical-lr`，这将更改块的方向，因此也会更改行的方向。

虽然某些语言将使用特定的书写模式或文本方向，但我们也可以使用这些属性来产生创造性效果，例如垂直运行标题。

```html live-sample___creative-use
<div class="box">
  <h1>A heading</h1>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery.
  </p>
</div>
```

```css live-sample___creative-use
body {
  font: 1.2em sans-serif;
}
h1 {
  writing-mode: vertical-lr;
  float: left;
}
```

{{EmbedLiveSample("creative-use", "", "220px")}}

## `writing-mode` 属性和块流

{{cssxref("writing-mode")}} 属性接受以下值：`horizontal-tb`、`vertical-rl` 和 `vertical-lr`。这些值控制阻止页面流动的方向。初始值是 `horizontal-tb`，这是一个顶部到底部的块流方向，具有水平的行方向。从左到右的语言，如英语和从右到左的语言。如阿拉伯语，都是 `horizontal-tb`。

下面的示例显示了使用 `horizontal-tb` 的块。

```html live-sample___horizontal-tb
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery.
  </p>
  <p>
    Before that night—a memorable night, as it was to prove—hundreds of millions
    of people had watched the rising smoke-wreaths of their fires without
    drawing any special inspiration from the fact.
  </p>
</div>
```

```css live-sample___horizontal-tb
body {
  font: 1.2em sans-serif;
}
.box {
  writing-mode: horizontal-tb;
}
```

{{EmbedLiveSample("horizontal-tb", "", "240px")}}

`vertical-rl` 值为你提供了一个从右到左的块向和一个垂直的行向，如下一个示例所示。

```html hidden live-sample___vertical-rl
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery.
  </p>
  <p>
    Before that night—a memorable night, as it was to prove—hundreds of millions
    of people had watched the rising smoke-wreaths of their fires without
    drawing any special inspiration from the fact.
  </p>
</div>
```

```css live-sample___vertical-rl
body {
  font: 1.2em sans-serif;
}
.box {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("vertical-rl", "", "300px")}}

最后一个示例演示了第三个可能的 `writing-mode` 值——`vertical-lr`。这将为你提供一个从左到右的块流方向和一个垂直的行方向。

```html hidden live-sample___vertical-lr
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery.
  </p>
  <p>
    Before that night—a memorable night, as it was to prove—hundreds of millions
    of people had watched the rising smoke-wreaths of their fires without
    drawing any special inspiration from the fact.
  </p>
</div>
```

```css live-sample___vertical-lr
body {
  font: 1.2em sans-serif;
}
.box {
  writing-mode: vertical-lr;
}
```

{{EmbedLiveSample("vertical-lr", "", "300px")}}

## 对父级具有不同写入模式的框

当一个嵌套框被分配给它的父级的不同的写入模式时，一个行级别的框将显示，就好像它有 `display: inline-block` 一样。

```html live-sample___inline-change-mode
<div class="box">
  <p>
    One <span>November</span> night in the year 1782, so the story runs, two
    brothers sat over their winter fire in the little French town of Annonay,
    watching the grey smoke-wreaths from the hearth curl up the wide chimney.
    Their names were Stephen and Joseph Montgolfier, they were papermakers by
    trade, and were noted as possessing thoughtful minds and a deep interest in
    all scientific knowledge and new discovery.
  </p>
</div>
```

```css live-sample___inline-change-mode
body {
  font: 1.2em sans-serif;
}
.box {
  writing-mode: vertical-rl;
}
.box span {
  writing-mode: horizontal-tb;
  padding: 10px;
  border: 1px solid rebeccapurple;
}
```

{{EmbedLiveSample("inline-change-mode", "", "240px")}}

块级别的框将建立一个新的块格式上下文，这意味着如果其内部显示类型为 `flow`，则它将获得 `flow-root` 的计算显示类型。这在下一个示例中显示，其中显示为 `horizontal-tb` 的框包含一个浮动，该浮动是由于其父级建立了一个新的 BFC 而包含的。

```html live-sample___block-change-mode
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney.
  </p>

  <div>
    <div class="float"></div>
    This box should establish a new BFC.
  </div>

  <p>
    Their names were Stephen and Joseph Montgolfier, they were papermakers by
    trade, and were noted as possessing thoughtful minds and a deep interest in
    all scientific knowledge and new discovery.
  </p>
</div>
```

```css live-sample___block-change-mode
body {
  font: 1.2em sans-serif;
}
.box {
  writing-mode: vertical-rl;
}
.box > div {
  writing-mode: horizontal-tb;
  padding: 10px;
  border: 1px solid rebeccapurple;
}
.float {
  width: 100px;
  height: 150px;
  background-color: rebeccapurple;
  float: left;
}
```

{{EmbedLiveSample("block-change-mode", "", "500px")}}

## 替换的元素

替换的元素（如图像）不会根据“写入模式”属性更改其方向。但是，替换的元素（如包含文本的表单控件）应与使用中的写入模式匹配。

```html live-sample___replaced
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney.
  </p>

  <img
    alt="a colorful hot air balloon against a clear sky"
    src="https://mdn.github.io/shared-assets/images/examples/balloon.jpg" />

  <p>
    Their names were Stephen and Joseph Montgolfier, they were papermakers by
    trade, and were noted as possessing thoughtful minds and a deep interest in
    all scientific knowledge and new discovery.
  </p>
</div>
```

```css live-sample___replaced
body {
  font: 1.2em sans-serif;
}
.box {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("replaced", "", "340px")}}

## 逻辑属性和值

一旦你在书写模式（而不是 `horizontal-tb`）时，许多映射到屏幕物理维度的属性和值看起来很奇怪。例如，如果为一个框提供 100px 的宽度，以水平 tb 表示，它将控制行方向的大小。在 `vertical-lr` 中，它控制块方向的大小，因为它不随文本旋转。

```html live-sample___width
<div class="box">
  <div class="box1">Box 1</div>
  <div class="box2">Box 2</div>
</div>
```

```css live-sample___width
body {
  font: 1.2em sans-serif;
}
.box1 {
  writing-mode: horizontal-tb;
  border: 5px solid rebeccapurple;
  width: 100px;
  margin: 10px;
}
.box2 {
  writing-mode: vertical-lr;
  border: 5px solid rebeccapurple;
  width: 100px;
  margin: 10px;
}
```

{{EmbedLiveSample("width")}}

因此，我们有了 {{cssxref("block-size")}} 和 {{cssxref("inline-size")}} 的新属性。如果我们给块一个 100px 的 `inline-size`，不管我们是处于水平还是垂直写入模式，`inline-size` 总是指行方向的大小。

```html live-sample___inline-size
<div class="box">
  <div class="box1">Box 1</div>
  <div class="box2">Box 2</div>
</div>
```

```css live-sample___inline-size
body {
  font: 1.2em sans-serif;
}
.box1 {
  writing-mode: horizontal-tb;
  border: 5px solid rebeccapurple;
  inline-size: 100px;
  margin: 10px;
}
.box2 {
  writing-mode: vertical-lr;
  border: 5px solid rebeccapurple;
  inline-size: 100px;
  margin: 10px;
}
```

{{EmbedLiveSample("inline-size", "", "200px")}}

[CSS 逻辑属性和值](/zh-CN/docs/Web/CSS/Guides/Logical_properties_and_values)规范包括用于控制页边距、填充和边框的属性的逻辑版本，以及用于我们通常使用物理方向指定的内容的其他映射。

## 总结

在大多数情况下，流程布局的工作方式与你在更改文档或文档部分的写入模式时所期望的一样。这可以用于正确排版垂直语言或出于创造性的原因。CSS 通过引入逻辑属性和值使这变得更容易，这样在垂直写入模式下工作时，大小调整可以基于元素的内联和块大小。这在创建可以在不同写入模式下工作的组件时很有用。

## 参见

- [书写模式](/zh-CN/docs/Web/CSS/Guides/Writing_modes)
- [书写模式和 CSS 布局](https://www.smashingmagazine.com/2019/08/writing-modes-layout/)
- [CSS 书写模式](https://24ways.org/2016/css-writing-modes/)
