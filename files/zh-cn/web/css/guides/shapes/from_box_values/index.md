---
title: 使用 box 值指定形状
slug: Web/CSS/Guides/Shapes/From_box_values
l10n:
  sourceCommit: e1b6d7d2d02a07f7e86268c81678713fad4d9a5d
---

创建形状的一个简单方法是使用 CSS 盒模型中的值。本文将解释如何执行此操作

允许作为形状值的 [box 值](https://drafts.csswg.org/css-shapes-1/#shapes-from-box-values)为：

- `content-box`
- `padding-box`
- `border-box`
- `margin-box`

box 值还支持 `border-radius` 值，这意味着你的页面中可以有带曲线边框的内容，并且你的形状可以跟随创建的形状。

## CSS 盒模型

上面列出的值对应于 CSS 盒模型的各个部分。CSS 中的盒子具有内容、外边距、边框和内边距。

![包含外边距、边框、内边距和内容盒子的盒模型](box-model.png)

通过对形状使用 box 值，我们可以将内容环绕在这些值定义的边上。在下面的所有示例中，我都使用了一个元素，该元素具有外边距、边框和内边距，以便你可以看到内容的不同流动方式。

### margin-box

`margin-box` 是由外部边界边定义的形状，包括形状的角半径（如果 {{cssxref("border-radius")}} 已用于定义元素）。

在下面的示例中，我们有一个圆形的紫色项，它是一个带有高度、宽度和背景色的 {{htmlelement("div")}} 项。通过设置 `border-radius` 属性为 `border-radius: 50%` 属性，创建了一个圆形。由于元素具有外边距，你可以看到内容围绕圆形流动，并且应用了圆形的外边距。

```html live-sample___margin-box
<div class="box">
  <div class="shape"></div>
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

```css live-sample___margin-box
body {
  font: 1.2em sans-serif;
}

.shape {
  background-color: rebeccapurple;
  height: 80px;
  width: 80px;
  padding: 20px;
  margin: 20px;
  border: 10px solid black;
  border-radius: 50%;
  float: left;
  shape-outside: margin-box;
}
```

{{EmbedLiveSample("margin-box", "", "200px")}}

### border-box

`border-box` 值是由外部边框边缘定义的形状。此形状遵循边框外部的所有常规边框半径形状规则。即使没有使用 CSS {{cssxref("border")}} 属性，仍然有边框。在这种情况下，它将与由外部填充边定义的形状 `padding-box` 相同。

在下面的示例中，你可以看到文本现在是如何遵循由边框创建的行的。改变边框大小，内容也会随之改变。

```html hidden live-sample___border-box
<div class="box">
  <div class="shape"></div>
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

```css live-sample___border-box
body {
  font: 1.2em sans-serif;
}
.box {
  width: 70%;
}

.shape {
  background-color: rebeccapurple;
  height: 80px;
  width: 80px;
  padding: 20px;
  margin: 20px;
  border: 10px solid black;
  border-radius: 50%;
  float: left;
  shape-outside: border-box;
}
```

{{EmbedLiveSample("border-box", "", "240px")}}

### padding-box

`padding-box` 值定义由外边距边缘包围的形状。此形状遵循边框内部的所有常规边框半径形状规则。如果没有外边距，则 `padding-box` 与 `content-box` 相同。

```html hidden live-sample___padding-box
<div class="box">
  <div class="shape"></div>
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

```css live-sample___padding-box
body {
  font: 1.2em / 1.2 sans-serif;
}
.box {
  width: 70%;
}

.shape {
  background-color: rebeccapurple;
  height: 80px;
  width: 80px;
  padding: 20px;
  margin: 20px;
  border: 10px solid black;
  border-radius: 50%;
  float: left;
  shape-outside: padding-box;
}
```

{{EmbedLiveSample("padding-box", "", "260px")}}

### content-box

`content-box` 值定义由外部内容边缘包围的形状。此框的每个角半径都是 0 或 border-radius、border-width、padding 中的较大值。这意味着这里不可能有负值。

```html hidden live-sample___content-box
<div class="box">
  <div class="shape"></div>
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

```css live-sample___content-box
body {
  font: 1.2em / 1.2 sans-serif;
}
.box {
  width: 70%;
}

.shape {
  background-color: rebeccapurple;
  height: 80px;
  width: 80px;
  padding: 20px;
  margin: 20px;
  border: 10px solid black;
  border-radius: 50%;
  float: left;
  shape-outside: content-box;
}
```

{{EmbedLiveSample("content-box", "", "250px")}}

## 什么时候使用 box 值

使用 box 值是创建形状的一种简单方法，但这本质上只适用于可以使用受良好支持的 `border-radius` 属性定义的非常简单的形状。上面显示的示例显示了一个这样的用法。可以使用边框半径创建圆形，然后在其周围绘制文本。

不过，只需使用这种简单的技术，你就能创造出一些有趣的效果。在本节的最后一个示例中，我左右浮动了两个元素，在最靠近文字的方向上，每个元素的边框半径都是 100%。

```html live-sample___bottom-margin-box
<div class="box">
  <div class="shape-left"></div>
  <div class="shape-right"></div>
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

```css live-sample___bottom-margin-box
body {
  font: 1.2em / 1.5 sans-serif;
}

.box {
  text-align: justify;
}

.shape-left,
.shape-right {
  height: 100px;
  width: 100px;
}

.shape-left {
  margin: 0 20px 20px 0;
  border-bottom-right-radius: 100%;
  float: left;
  shape-outside: margin-box;
}
.shape-right {
  margin: 0 20px 20px;
  border-bottom-left-radius: 100%;
  float: right;
  shape-outside: margin-box;
}
```

{{EmbedLiveSample("bottom-margin-box", "", "240px")}}

对于更复杂的形状，你需要使用[基本形状](/zh-CN/docs/Web/CSS/Guides/Shapes/Using_shape-outside)中的一种作为值，或者根据本节其他指南中涉及的图像定义你的形状。
