---
title: CSS 的图形（Shape）概览
slug: Web/CSS/Guides/Shapes/Overview
---

[CSS Shapes Level 1 Specification](https://www.w3.org/TR/css-shapes/) 在 CSS 中描述了几何图形的 shape（以下叫做形状）。在“Level 1 of the specification”中定义的形状被设计用来绘制浮动的元素。这篇文章提供关于“你能如何绘制这些形状”的概览。

举个例子：你在左侧设计一个浮动元素，它可以令文本环绕于该浮动元素的右侧和底部，并且以一种矩形的样式。如果你接着指定一个圆形的样式，文本就会以圆形的样式环绕。

事实上，我们有多种方式去创建这类形状，并且我们在指导中将会发现 CSS 形状是怎么工作的，然后就可以跟着感觉走了。

## Specification 定义了什么？

Specification 定义了三种新的权限：

- {{cssxref("shape-outside")}} — 允许定义基本形状。
- {{cssxref("shape-image-threshold")}} — 设定一个渗出阈值。如果一幅图像被用于定义形状，那么只有在大于等于渗出阈值的部分才会显示，其他部分不会显示出来。
- {{cssxref("shape-margin")}} — 在形状外面加上边框。

## 定义基本的形状

`shape-outside` 权限允许定义一个形状，它需要很多参数共同定义而成，这些参数被定义在 {{cssxref("&lt;basic-shape&gt;")}} 数据类型中。下面是一个小例子。

下面的例子中，左侧有一幅浮动的图像，然后使用`shape-outside` 权限定义一个`circle(50%)`属性。结果为文字环绕于图像，并且图像不显示为矩形，而显示为圆形。

```html live-sample___circle
<div class="box">
  <img
    alt="An orange hot air balloon as seen from below"
    src="https://mdn.github.io/shared-assets/images/examples/round-balloon.png" />
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___circle
body {
  font: 1.2em / 1.4 sans-serif;
}

img {
  float: left;
  shape-outside: circle(50%);
}
```

{{EmbedLiveSample("circle", "", "280px")}}

正如这个级别的元素必须被浮动化才能适用`<basic-shape>` 一样，有时候在创建依赖时就会发生副作用。如果在浏览器中不支持形状，那么用户就会看到文本围绕在矩形的图片周围。有了形状支持之后，视觉效果就增强了。

### 基本形状

`circle(50%)` 属性是一个基本形状的例子。它定义了四个 `<basic-shape>` 函数，分别是：

- `inset()`
- `circle()`
- `ellipse()`
- `polygon()`

使用 `inset()` 修饰文本围绕效果时，你还可以增加偏移量，否则就会出现文本过于接近目标对象的情况。

我们已经看到了 `circle()` 如何创建圆形形状。 `ellipse()` 则用来创建椭圆形形状。如果还有特殊要求，使用 `polygon()` 可以创建任意难度的形状。

在我们的 [Guide to Basic Shapes](/zh-CN/docs/Web/CSS/CSS_shapes/Basic_Shapes) 中，我们探索每一种形状，并且学会如何创建它们。

### 含有 Box 参数的形状

形状可以加上 Box 参数，因此你可以创建形状在：

- `border-box`
- `padding-box`
- `content-box`
- `margin-box`

当中。

在下面的例子中你可以改变 `border-box` 参数，然后查看形状靠近或者远离 Box 的效果。

```html live-sample___box
<div class="box">
  <div class="shape"></div>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___box
body {
  font: 1.2em / 1.4 sans-serif;
}

.shape {
  background-color: rebeccapurple;
  height: 150px;
  width: 150px;
  padding: 20px;
  margin: 20px;
  border-radius: 50%;
  float: left;
  shape-outside: border-box;
}
```

{{EmbedLiveSample("box", "", "320px")}}

详见 [Shapes From Box Values](/zh-CN/docs/Web/CSS/Guides/Shapes/From_box_values)。

### 由 Image 创建的形状

有意思的是，可以使用带有 Alpha 通道的图像来创建（形状的）路径——文本将会围绕不透明的图像部分。这个特性允许文本覆盖图像，有时候可以将文本围绕于一幅不可见的图像，达到一种多边形文本显示的效果。

需要注意的是，这种方式必须是 [CORS compatible](/zh-CN/docs/Web/HTTP/Guides/CORS) 的，否则 `shape-outside` 相当于 `none` ，你将不会得到任何形状。

在下面的例子中，我们有一幅全透明的图像，使用如下 URL，并且指定 `shape-outside`. 属性，创建出一个模糊的形状：一幅气球图像。

```html live-sample___image
<div class="box">
  <img
    alt="An orange hot air balloon as seen from below"
    src="https://mdn.github.io/shared-assets/images/examples/round-balloon.png" />
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___image
body {
  font: 1.2em / 1.4 sans-serif;
}

img {
  float: left;
  shape-outside: url(https://mdn.github.io/shared-assets/images/examples/round-balloon.png);
}
```

{{EmbedLiveSample("image", "", "280px")}}

#### `shape-image-threshold`

`shape-image-threshold` 属性用于设定图像透明度的阈值并用来创建形状。如果`shape-image-threshold` 是 `0.0` (缺省值) ，那么图像必须是全透明的。如果是 `1.0` 那么图像必须是模糊的。中间的值就代表了区分图像哪部分透明的阈值，以创建形状。

如果我们使用图像来创建形状，那么你可以看到阈值在起作用。在这么多例子中，如果你改变了阈值大小，形状会随之变化。

```html live-sample___threshold
<div class="box">
  <div class="shape"></div>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___threshold
body {
  font: 1.2em / 1.4 sans-serif;
}

.shape {
  float: left;
  width: 200px;
  height: 200px;
  background-image: linear-gradient(
    45deg,
    rebeccapurple,
    transparent 80%,
    transparent
  );
  shape-outside: linear-gradient(
    45deg,
    rebeccapurple,
    transparent 80%,
    transparent
  );
  shape-image-threshold: 0.4;
}
```

{{EmbedLiveSample("threshold", "", "280px")}}

下面我们进入更深层次的[Shapes from Images](/zh-CN/docs/Web/CSS/Guides/Shapes/From_images)学习。

## `shape-margin` 属性

{{cssxref("shape-margin")}} 属性在 `shape-outside`.周围加上边框。它使得文本的 Box 形状更短了，而且远离了形状本身。

在下面的例子中，我们在基本形状中加入了 `shape-margin` 属性。改变边框的宽度可以将文本的距离增大。

```html live-sample___shape-margin
<div class="box">
  <img
    alt="An orange hot air balloon as seen from below"
    src="https://mdn.github.io/shared-assets/images/examples/round-balloon.png" />
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___shape-margin
body {
  font: 1.2em / 1.4 sans-serif;
}
img {
  float: left;
  shape-outside: circle(50%);
  shape-margin: 5px;
}
```

{{EmbedLiveSample("shape-margin", "", "280px")}}

## 将创建的元素作为浮动元素

在上面的例子中，我们使用图像或者可见元素创建形状，意思是你可以在网页上看到这些图形。或者，你也可以只创建图形（而使图形不可见），这就需要一个浮动元素，在浮动元素的基础上就可以使图形不可见。它可以是插入到文档中的冗余元素，可以是空的{{htmlelement("div")}} 或者 {{htmlelement("span")}} ，但是我们建议用创建好的内容。这就意味着我们可以保留 CSS 中的样式。

在下面的例子中，我们在创建好的内容中插入一个宽高为 150px 的内容。然后，我们可以使用基本基本形状，Box 参数甚至是 Alpha 通道去创建图形，使得文本可以环绕这个图形。

```html live-sample___generated-content
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___generated-content
body {
  font: 1.2em sans-serif;
}

.box::before {
  content: "";
  display: block;
  height: 150px;
  width: 150px;
  padding: 20px;
  margin: 20px;
  border-radius: 50%;
  float: left;
  shape-outside: border-box;
}
```

{{EmbedLiveSample("generated-content", "", "260px")}}

## 和`clip-path`的关系

基本图形和 Box 参数被用来创建图形时，和 {{cssxref("clip-path")}} 参数是等效的。所以如果你想要用图像创建形状的同时剪去部分图像，你可以用如下参数：

下面的图像是一个蓝色背景的方形图像，使用 `shape-outside: ellipse(40% 50%);` 和 `clip-path: ellipse(40% 50%);` 参数去剪去相同的区域，这个区域被定义为形状。

```html live-sample___clip-path
<div class="box">
  <img
    alt="An orange hot air balloon as seen from below"
    src="https://mdn.github.io/shared-assets/images/examples/balloon-small.jpg" />
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___clip-path
body {
  font: 1.2em / 1.4 sans-serif;
}

img {
  float: left;
  shape-outside: ellipse(40% 50%);
  clip-path: ellipse(40% 50%);
}
```

{{EmbedLiveSample("clip-path", "", "280px")}}

## 形状的开发工具

和 CSS 形状的开发工具类似，Firefox 在 Firefox DevTools 中自带 [Shape Path Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) 开发工具。这个工具让你可以查看网页中的任意形状，甚至可以实时显示改变形状之后的效果。如果你的多边形不正确，你可以用 Shapes Editor 调节，然后复制粘贴到 CSS 中。

在 Firefox 60 当中，对于含有 `clip-path`的属性的元素默认启用 Shape Path Editor。你也可以编辑 含有 `shape-outside` 的属性的元素，但前提是开启`layout.css.shape-outside.enabled` 首选项。

## 未来的 CSS 形状特性

形状初始化包括了一个 `shape-inside` 属性，用来在元素中创建形状。这个属性有可能在非浮动元素中创建形状，被移动到了 [level 2](https://drafts.csswg.org/css-shapes-2/) 规则中。由于 `shape-inside` 以前属于 Level 1 规则，你或许可以在网上查到它的详细信息和属性。
