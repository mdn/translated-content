---
title: 布局和包含块
slug: Web/CSS/Containing_block
---

{{CSSRef}}

一个元素的尺寸和位置经常受其**包含块**（containing block）的影响。大多数情况下，包含块就是这个元素最近的祖先[块元素](/zh-CN/docs/Glossary/Block-level_content)的[内容区域](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#内容区域)，但也不是总是这样。在本文中，我们来过一遍确定包含块的所有因素。

当一个客户端代理（比如说浏览器）展示一个文档的时候，对于每一个元素，它都产生了一个盒子。每一个盒子都被划分为四个区域：

1. 内容区
2. 内边距区
3. 边框区
4. 外边距区

![Diagram of the box model](box-model.png)

许多开发者认为一个元素的包含块就是他的父元素的内容区。但事实并非如此。接下来让我们来看看，确定元素包含块的因素都有哪些。

## 包含块的影响

在学习如何确定元素包含块之前，先了解一下它的重要性。

元素的尺寸及位置，常常会受它的包含块所影响。对于一些属性，例如 {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}}，绝对定位元素的偏移值（比如 {{cssxref("position")}} 被设置为 `absolute` 或 `fixed`），当我们对其赋予百分比值时，这些值的计算值，就是通过元素的包含块计算得来。

## 确定包含块

确定一个元素的包含块的过程完全依赖于这个元素的 {{cssxref("position")}} 属性：

1. 如果 position 属性为 **`static`**、**`relative`** **或 `sticky`**，包含块可能由它的最近的祖先**块元素**（比如说 inline-block, block 或 list-item 元素）的内容区的边缘组成，也可能会建立格式化上下文 (比如说 a table container, flex container, grid container, 或者是 the block container 自身)。
2. 如果 position 属性为 **`absolute`** ，包含块就是由它的最近的 position 的值不是 `static` （也就是值为`fixed`, `absolute`, `relative` 或 `sticky`）的祖先元素的内边距区的边缘组成。
3. 如果 position 属性是 **`fixed`**，在连续媒体的情况下 (continuous media) 包含块是 {{glossary("viewport")}} ,在分页媒体 (paged media) 下的情况下包含块是分页区域 (page area)。
4. 如果 position 属性是 **`absolute`** 或 **`fixed`**，包含块也可能是由满足以下条件的最近父级元素的内边距区的边缘组成的：

   1. {{cssxref("transform")}} 或 {{cssxref("perspective")}} 的值不是 `none`
   2. {{cssxref("will-change")}} 的值是 `transform` 或 `perspective`
   3. {{cssxref("filter")}} 的值不是 `none` 或 `will-change` 的值是 `filter`（只在 Firefox 下生效）。
   4. {{cssxref("contain")}} 的值是 `paint`（例如：`contain: paint;`）
   5. {{cssxref("backdrop-filter")}} 的值不是 `none`（例如：`backdrop-filter: blur(10px);`）

> **备注：** 根元素 (\<html>) 所在的包含块是一个被称为**初始包含块**的矩形。他的尺寸是视口 viewport (for continuous media) 或分页媒体 page media (for paged media).

## 根据包含块计算百分值

如上所述，如果某些属性被赋予一个百分值的话，它的计算值是由这个元素的包含块计算而来的。这些属性包括盒模型属性和偏移属性：

1. 要计算 {{cssxref("height")}} {{cssxref("top")}} 及 {{cssxref("bottom")}} 中的百分值，是通过包含块的 `height` 的值。如果包含块的 `height` 值会根据它的内容变化，而且包含块的 `position` 属性的值被赋予 `relative` 或 `static` ，那么，这些值的计算值为 auto。
2. 要计算 {{cssxref("width")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("padding")}}, {{cssxref("margin")}} 这些属性由包含块的 `width` 属性的值来计算它的百分值。

## 示例

接下来的示例，都使用如下 HTML 代码：

```html
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

下面的示例，只有 CSS 不同。

### Example 1

这个示例中，P 标签设置为静态定位，所以它的包含块为 `<section>` ，因为距离最近的父节点即是她的包含块。

```html hidden
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  display: block;
  width: 400px;
  height: 160px;
  background: lightgray;
}

p {
  width: 50%; /* == 400px * .5 = 200px */
  height: 25%; /* == 160px * .25 = 40px */
  margin: 5%; /* == 400px * .05 = 20px */
  padding: 5%; /* == 400px * .05 = 20px */
  background: cyan;
}
```

{{EmbedLiveSample('Example_1','100%','300')}}

### Example 2

在这个示例中，P 标签的包含块为 `<body>` 元素，因为 `<section>` 不再是一个块容器，所以并没有形成一个格式上下文。

```html hidden
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  display: inline;
  background: lightgray;
}

p {
  width: 50%; /* == half the body's width */
  height: 200px; /* Note: a percentage would be 0 */
  background: cyan;
}
```

{{EmbedLiveSample('Example_2','100%','300')}}

### Example 3

这个示例中，P 元素的包含块是 `<section`>，因为 `<section>` 的 `position` 为 `absolute` 。P 元素的百分值会受其包含块的 `padding` 所影响。不过，如果包含块的 {{cssxref("box-sizing")}} 值设置为 `border-box` ，就没有这个问题。

```html hidden
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  position: absolute;
  left: 30px;
  top: 30px;
  width: 400px;
  height: 160px;
  padding: 30px 20px;
  background: lightgray;
}

p {
  position: absolute;
  width: 50%; /* == (400px + 20px + 20px) * .5 = 220px */
  height: 25%; /* == (160px + 30px + 30px) * .25 = 55px */
  margin: 5%; /* == (400px + 20px + 20px) * .05 = 22px */
  padding: 5%; /* == (400px + 20px + 20px) * .05 = 22px */
  background: cyan;
}
```

{{EmbedLiveSample('Example_3','100%','300')}}

### Example 4

这个示例中，P 元素的 `position` 为 `fixed`，所以它的包含块就是初始包含块（在屏幕上，也就是 viewport）。这样的话，P 元素的尺寸大小，将会随着浏览器窗框大小的变化，而变化。

```html hidden
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  width: 400px;
  height: 480px;
  margin: 30px;
  padding: 15px;
  background: lightgray;
}

p {
  position: fixed;
  width: 50%; /* == (50vw - (width of vertical scrollbar)) */
  height: 50%; /* == (50vh - (height of horizontal scrollbar)) */
  margin: 5%; /* == (5vw - (width of vertical scrollbar)) */
  padding: 5%; /* == (5vw - (width of vertical scrollbar)) */
  background: cyan;
}
```

{{EmbedLiveSample('Example_4','100%','300')}}

### Example 5

这个示例中，P 元素的 `position` 为 `absolute`，所以它的包含块是 `<section>`，也就是距离它最近的一个 `transform` 值不为 none 的父元素。

```html hidden
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  transform: rotate(0deg);
  width: 400px;
  height: 160px;
  background: lightgray;
}

p {
  position: absolute;
  left: 80px;
  top: 30px;
  width: 50%; /* == 200px */
  height: 25%; /* == 40px */
  margin: 5%; /* == 20px */
  padding: 5%; /* == 20px */
  background: cyan;
}
```

{{EmbedLiveSample('Example_5','100%','300')}}

## 参见

- CSS 重要概念：

  - [CSS 语法](/zh-CN/docs/Web/CSS/Syntax)
  - [@ 规则](/zh-CN/docs/Web/CSS/At-rule)
  - [注释](/zh-CN/docs/Web/CSS/Comments)
  - [优先级](/zh-CN/docs/Web/CSS/Specificity)
  - [继承](/zh-CN/docs/Web/CSS/inheritance)
  - [盒模型](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [布局模式](/zh-CN/docs/Web/CSS/Layout_mode)
  - [视觉格式化模型](/zh-CN/docs/Web/CSS/Visual_formatting_model)
  - [外边距合并](/zh-CN/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - 值

    - [初始值](/zh-CN/docs/Web/CSS/initial_value)
    - [计算值](/zh-CN/docs/Web/CSS/computed_value)
    - [解析值](/zh-CN/docs/Web/CSS/resolved_value)
    - [指定值](/zh-CN/docs/Web/CSS/specified_value)
    - [应用值](/zh-CN/docs/Web/CSS/used_value)
    - [实际值](/zh-CN/docs/Web/CSS/actual_value)

  - [属性值定义语法](/zh-CN/docs/Web/CSS/Value_definition_syntax)
  - [简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties)
  - [可替换元素](/zh-CN/docs/Web/CSS/Replaced_element)

- {{cssxref("all")}} 属性可将所有 CSS 声明重置为它所指定的状态
