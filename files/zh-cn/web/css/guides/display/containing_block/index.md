---
title: 布局和包含块
slug: Web/CSS/Guides/Display/Containing_block
---

一个元素的尺寸和位置经常受其**包含块**（containing block）的影响。大多数情况下，包含块就是这个元素最近的祖先[块元素](/zh-CN/docs/Glossary/Block-level_content)的[内容区域](/zh-CN/docs/Web/CSS/Guides/Box_model/Introduction#内容区域)，但也不是总是这样。在本文中，我们来过一遍确定包含块的所有因素。

当一个客户端代理（比如说浏览器）展示一个文档的时候，对于每一个元素，它都产生了一个盒子。每一个盒子都被划分为四个区域：

1. 内容区
2. 内边距区
3. 边框区
4. 外边距区

![Diagram of the box model](box-model.png)

许多开发者认为一个元素的包含块就是他的父元素的内容区，但这不一定正确。接下来让我们来看看，确定元素包含块的因素都有哪些。

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
   4. {{cssxref("contain")}} 的值是 `layout`、`paint`、`strict` 或 `content`（例如：`contain: paint;`）
   5. {{cssxref("backdrop-filter")}} 的值不是 `none`（例如：`backdrop-filter: blur(10px);`）

> [!NOTE]
> 根元素（{{HTMLElement("html")}}）所在的包含块是一个被称为**初始包含块**的矩形。它具有视口（对于连续媒体）或页面区域（对于分页媒体）的尺寸。

> [!NOTE]
> `perspective` 和 `filter` 属性对形成包含块的作用存在浏览器之间的不一致性。

## 根据包含块计算百分值

如上所述，当某些属性被赋予一个百分比值时，它的计算值取决于这个元素的包含块。以这种方式工作的属性包括**盒模型属性**和**偏移属性**：

1. {{cssxref("height")}}、{{cssxref("top")}} 及 {{cssxref("bottom")}} 属性根据包含块的 `height` 计算百分比值。
2. {{cssxref("width")}}、{{cssxref("left")}}、{{cssxref("right")}}、{{cssxref("padding")}} 和 {{cssxref("margin")}} 属性根据包含块的 `width` 计算百分比值。

> [!NOTE]
> 一个**块容器**（比如 inline-block、block 或 list-item 元素）要么只包含参与行级格式化上下文的行级盒子，要么只包含参与块级格式化上下文的块级盒子。只有包含块级或行级盒子的元素才是块容器。

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

### 示例 1

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

{{EmbedLiveSample('示例 1','100%','300')}}

### 示例 2

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

{{EmbedLiveSample('示例 2','100%','300')}}

### 示例 3

这个示例中，P 元素的包含块是 `<section>`，因为 `<section>` 的 `position` 为 `absolute` 。P 元素的百分值会受其包含块的 `padding` 所影响。不过，如果包含块的 {{cssxref("box-sizing")}} 值设置为 `border-box` ，就没有这个问题。

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

{{EmbedLiveSample('示例 3','100%','300')}}

### 示例 4

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

{{EmbedLiveSample('示例 4','100%','300')}}

### 示例 5

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

{{EmbedLiveSample('示例 5','100%','300')}}

## 参见

- CSS 重要概念：
  - [CSS 语法](/zh-CN/docs/Web/CSS/Guides/Syntax/Introduction)
  - [@ 规则](/zh-CN/docs/Web/CSS/Guides/Syntax/At-rules)
  - [注释](/zh-CN/docs/Web/CSS/Guides/Syntax/Comments)
  - [优先级](/zh-CN/docs/Web/CSS/Guides/Cascade/Specificity)
  - [继承](/zh-CN/docs/Web/CSS/Guides/Cascade/Inheritance)
  - [盒模型](/zh-CN/docs/Web/CSS/Guides/Box_model/Introduction)
  - [布局模式](/zh-CN/docs/Glossary/Layout_mode)
  - [视觉格式化模型](/zh-CN/docs/Web/CSS/Guides/Display/Visual_formatting_model)
  - [外边距合并](/zh-CN/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
  - 值
    - [初始值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#初始值)
    - [计算值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#计算值)
    - [解析值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#解析值)
    - [指定值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#指定值)
    - [应用值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#应用值)
    - [实际值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#实际值)

  - [属性值定义语法](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
  - [简写属性](/zh-CN/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
  - {{glossary("Replaced elements", "可替换元素")}}

- {{cssxref("all")}} 属性可将所有 CSS 声明重置为它所指定的状态
