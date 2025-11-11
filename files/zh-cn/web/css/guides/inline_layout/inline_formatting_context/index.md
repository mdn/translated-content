---
title: 行内格式化上下文
slug: Web/CSS/Guides/Inline_layout/Inline_formatting_context
---

该指南将解释什么是行内格式化上下文（inline formatting context）。

## 核心概念

行内格式化上下文是一个网页的渲染结果的一部分。其中，各行内框（inline box）一个接一个地排列，其排列顺序根据书写模式（writing-mode）的设置来决定：

- 对于水平书写模式，各个框从左边开始水平地排列
- 对于垂直书写模式，各个框从顶部开始水平地排列

在下面给出的例子中，带黑色边框的两个 {{HTMLElement("div")}} 元素组成了一个[区块格式化上下文](/zh-CN/docs/Web/CSS/Guides/Display/Block_formatting_context)，其中的每一个单词都参与一个行内格式化上下文中。水平书写模式下的各个框水平地排列，垂直书写模式下的各个框垂直地排列。

```html live-sample___inline
<div class="example horizontal">One Two Three</div>
<div class="example vertical">Four Five Six</div>
```

```css live-sample___inline
body {
  font: 1.2em sans-serif;
}
.example {
  border: 5px solid black;
  margin: 20px;
}

.horizontal {
  writing-mode: horizontal-tb;
}
.vertical {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("inline", "", "220px")}}

各个框组成了一行，而该行位于一个称为“行框（line box）”的矩形区域之中。该行框的大小将足以包含该行中所有的行内框（inline boxes）；当行内方向上没有剩余空间时，将会创建新行。因此，一个段落实际上是一系列行框的集合，这些行框在块的方向上排列。

一个行内框（inline box）被分割到多行中时，margins, borders, 以及 padding 的设定均不会在断裂处生效。下例中有一个 ({{HTMLElement("span")}}) 元素，它包裹了一系列单词，占据了两行。可以看见在断裂处，`<span>` 的 border 同样发生了断裂。

```html live-sample___break
<div class="example">
  Before that night—
  <span
    >a memorable night, as it was to prove— hundreds of millions of people</span
  >
  had watched the rising smoke-wreaths of their fires without drawing any
  special inspiration from the fact.
</div>
```

```css live-sample___break
body {
  font: 1.2em sans-serif;
}
.example {
  border: 5px solid black;
  margin: 20px;
}

span {
  border: 5px solid rebeccapurple;
}
```

{{EmbedLiveSample("break")}}

Margins, borders, 以及 padding 的设置，在行的方向上是生效的。在下例中，可以看见行内元素 `<span>` 的 margin，border 以及 padding 是被加上了的。

```html live-sample___mbp
<div class="example horizontal">One <span>Two</span> Three</div>
<div class="example vertical">Four <span>Five</span> Six</div>
```

```css live-sample___mbp
body {
  font: 1.2em sans-serif;
}

.example {
  border: 5px solid black;
  margin: 20px;
}

span {
  border: 5px solid rebeccapurple;
  padding-inline-start: 20px;
  padding-inline-end: 40px;
  margin-inline-start: 30px;
  margin-inline-end: 10px;
}
.horizontal {
  writing-mode: horizontal-tb;
}

.vertical {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("mbp", "", "340px")}}

> [!NOTE]
> 此处使用了 logical, flow-relative properties — {{cssxref("padding-inline-start")}}，而不是 {{cssxref("padding-left")}} — so that they work in the inline dimension whether the text is horizontal or vertical. Read more about these properties in [Logical Properties and Values](/zh-CN/docs/Web/CSS/Guides/Logical_properties_and_values).

## 在块的方向上对齐

行内框（Inline boxes）可使用{{cssxref("vertical-align")}}属性，以不同的方式在块的方向上进行对齐（因此在垂直书写模式下，`vertical-align` 中的“vertical”根本是名不副实——此时行内框将在水平方向上进行对齐）。下例中，字号较大的文本使得第一个句子的行框变大，因此 `vertical-align` 能让行内框（inline boxes）分布于上侧或下侧。例子里用的值是 `top`, 可以试试 `middle`, `bottom`, 或 `baseline` 这些值。

```html live-sample___align
<div class="example horizontal">
  Before that night—<span>a memorable night</span>, as it was to prove—hundreds
  of millions of people had watched the rising smoke-wreaths of their fires
  without drawing any special inspiration from the fact.
</div>

<div class="example vertical">
  Before that night—<span>a memorable night</span>, as it was to prove—hundreds
  of millions of people had watched the rising smoke-wreaths of their fires
  without drawing any special inspiration from the fact.
</div>
```

```css live-sample___align
body {
  font: 1.2em sans-serif;
}

span {
  font-size: 200%;
  vertical-align: top;
}

.example {
  border: 5px solid black;
  margin: 20px;
  inline-size: 400px;
}

.horizontal {
  writing-mode: horizontal-tb;
}

.vertical {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("align", "", "640px")}}

## 在行内方向上对齐

如果行内方向上还有额外空间，那么 {{cssxref("text-align")}} 可用于将各行内框（inline boxes）在行框（line box）内对齐。可以试试把 `text-align` 的值改成 `end` 。

```html live-sample___text-align
<div class="example horizontal">One Two Three</div>
<div class="example vertical">Four Five Six</div>
```

```css hidden live-sample___text-align
body {
  font: 1.2em sans-serif;
}

.example {
  border: 5px solid black;
  margin: 20px;
}

.horizontal {
  writing-mode: horizontal-tb;
}

.vertical {
  writing-mode: vertical-rl;
}
```

```css live-sample___text-align
.example {
  text-align: center;
  inline-size: 250px;
}
```

{{EmbedLiveSample("text-align", "", "350px")}}

## 浮动造成的效果

在行内方向上，各行框（Line Boxes）通常具有相同的尺寸，即在水平书写模式下，它们有同样的宽度；在垂直书写模式下，它们有同样的高度。但是，如果同一个块格式化上下文中存在一个 {{cssxref("float")}}，则这个浮动元素将导致包裹了它的各行框变短。

```html live-sample___float
<div class="box">
  <div class="float">I am a floated box!</div>
  <p>I am content inside the container.</p>
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
  width: 250px;
  height: 150px;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("float", "", "200px")}}

## 参见

- [区块格式化上下文](/zh-CN/docs/Web/CSS/Guides/Display/Block_formatting_context)
- [视觉格式化模型](/zh-CN/docs/Web/CSS/Guides/Display/Visual_formatting_model)
