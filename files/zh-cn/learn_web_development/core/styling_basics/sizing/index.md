---
title: 在 CSS 中调整大小
slug: Learn_web_development/Core/Styling_basics/Sizing
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}

在前面的课程中你已经看到了几种使用 CSS 为页面中元素设定尺寸的方法。在我们设计网页的时候，需要理解这些不同方法之间的差异。在本课程中，我们将总结设定元素尺寸的方法，并定义几个术语，这些内容将会在未来对你有所帮助。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基本的电脑知识、<a
          href="/zh-CN/Learn/Getting_started_with_the_web/Installing_basic_software"
          >安装了必要的软件</a
        >、<a
          href="/zh-CN/Learn/Getting_started_with_the_web/Dealing_with_files"
          >处理文件</a
        >的基础知识、HTML 基础（学习<a
          href="/zh-CN/docs/Learn_web_development/Core/Structuring_content"
          >Introduction to HTML</a
        >）、理解 CSS 如何工作（学习 <a href="/zh-CN/docs/Learn_web_development/Core/Styling_basics"
          >CSS 入门</a
        >）。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>理解在 CSS 中约束物体大小的不同方式。</td>
    </tr>
  </tbody>
</table>

## 原始尺寸，或固有尺寸

在受 CSS 设置影响之前，HTML 元素有其原始的尺寸。一个直观的例子就是图像。一幅图像的长和宽由这个图像文件自身确定。这个尺寸就是固有尺寸。

如果你把图片放置在网页中的时候没有在 `<img>` 标签或 CSS 中设置其尺寸，那么将使用其固有尺寸显示。我们给下面的示例图像绘制了一个边框，以便你看出图像文件的长宽。

```html live-sample___intrinsic-image
<img
  alt="star"
  src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
```

```css live-sample___intrinsic-image
img {
  border: 5px solid darkblue;
}
```

{{EmbedLiveSample("intrinsic-image")}}

一个空的 {{htmlelement("div")}} 是没有尺寸的。如果你在你的 HTML 文件中添加一个空 {{htmlelement("div")}} 并给予其边框（就像刚才我们为图像做的那样），你会在页面上看到一条线。这是边框被压缩后的效果——它内部没有内容。在我们下面的例子中，边框宽度扩展到整个容器宽度，因为它是块级元素，而块级元素的行为就是这样的。它没有高度，或者说高度为 0，因为内部没有内容。

```html live-sample___intrinsic-text
<div class="box"></div>
```

```css live-sample___intrinsic-text
.box {
  border: 5px solid darkblue;
}
```

{{EmbedLiveSample("intrinsic-text")}}

在上面的例子中，试着在空元素内部添加些内容。现在边框内包含一些文字了，因为元素的高度由其所含内容高度确定。再强调一次，这就是元素的固有尺寸——由其所包含的内容决定。

## 设置具体的尺寸

我们当然可以给设计中的元素指定具体大小。当给元素指定尺寸（然后其内容需要适合该尺寸）时，我们将其称为**外部尺寸**。以上面例子中的 `<div>` 举例——我们可以给它一个具体的 {{cssxref("width")}} 和 {{cssxref("height")}} 值，然后不论我们放什么内容进去它都是该尺寸。正如我们在[上一课](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Overflow)有关溢出的内容中所发现的，如果内容的数量超出了元素可容纳的空间，则设置的高度会导致内容溢出。

```html live-sample___height
<div class="wrapper">
  <div class="box"></div>
  <div class="box">
    These boxes both have a height set, this box has content in it which will
    need more space than the assigned height, and so we get overflow.
  </div>
</div>
```

```css live-sample___height
body {
  font: 1.2em sans-serif;
}
.wrapper {
  display: flex;
}

.wrapper > * {
  margin: 20px;
}

.box {
  border: 5px solid darkblue;
  height: 100px;
  width: 200px;
}
```

{{EmbedLiveSample("height", "", "200px")}}

由于存在溢出问题，在网络上使用长度或百分比固定元素的高度需要非常小心。

### 使用百分比

许多时候，百分比是长度单位，正如我们在[值和单位这节课中讨论的那样](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Values_and_units#百分比)，它们常常可与长度互换。当使用百分比时，你需要清楚，它是**什么**东西的百分比。对于一个处于另外一个容器当中的盒子，如果你给予了子盒子一个百分比作为宽度，那么它指的是父容器宽度的百分比。

```html live-sample___percent-width
<div class="box">I have a percentage width.</div>
```

```css live-sample___percent-width
body {
  font: 1.2em sans-serif;
}

.box {
  border: 5px solid darkblue;
  width: 50%;
}
```

{{EmbedLiveSample("percent-width")}}

这是因为百分比是以包含盒子的块为根据解析的。如果我们的 `<div>` 没有被指定百分比的值，那么它会占据 100% 的可用空间，因为它是块级别的元素。如果我们给了它一个百分比作为宽度，那么这就是它原来情况下可以占据空间的百分比。

### 把百分比作为内外边距

如果你把 `margins` 和 `padding` 设置为百分比的话，你会注意到一些奇怪的表现。在下面的例子里，我们有一个盒子，我们给了里面的盒子 10% 的 {{cssxref("margin")}} 以及 10% 的 {{cssxref("padding")}}。盒子底部和顶部的内外边距，和左右外边距有同样的大小。

```html live-sample___percent-mp
<div class="box">I have margin and padding set to 10% on all sides.</div>
```

```css live-sample___percent-mp
body {
  font: 1.2em sans-serif;
}
.box {
  border: 5px solid darkblue;
  width: 200px;
  margin: 10%;
  padding: 10%;
}
```

{{EmbedLiveSample("percent-mp", "", "380px")}}

或许，你期望元素的上下外边距是其高度的百分比，元素的左右外边距是其宽度的百分比。但情况并非如此！

使用百分比作为元素外边距（margin）或填充（padding）的单位时，值是以包含块的**内联尺寸**进行计算的，也就是元素的水平宽度。在我们的示例中，所有的外边距或填充都是宽度的 10%。请记住一个事实，当你使用百分比作为元素外边距或填充的单位时，你将得到一个相同尺寸的外边距或填充。

## min- 和 max- 尺寸

除了让万物都有一个确定的大小以外，我们可以让 CSS 给定一个元素的最大或最小尺寸。如果你有一个包含了变化容量的内容的盒子，而且你总是想让它**至少**有个确定的高度，你应该给它设置一个 {{cssxref("min-height")}} 属性。盒子就会一直保持大于这个最小高度，但是如果有比这个盒子在最小高度状态下所能容纳的更多内容，那么盒子就会变大。

在以下的示例中，你可以看到两个盒子，两个都有 150 像素的确定高度，左边的盒子有 150 像素高，右边的盒子有需要更多空间才能装下的内容，所以它变得比 150 像素高。

```html live-sample___min-height
<div class="wrapper">
  <div class="box"></div>
  <div class="box">
    These boxes both have a min-height set, this box has content in it which
    will need more space than the assigned height, and so it grows from the
    minimum.
  </div>
</div>
```

```css live-sample___min-height
body {
  font: 1.2em sans-serif;
}
.wrapper {
  display: flex;
  align-items: flex-start;
}

.wrapper > * {
  margin: 20px;
}

.box {
  border: 5px solid darkblue;
  min-height: 100px;
  width: 200px;
}
```

{{EmbedLiveSample("min-height", "", "220px")}}

这在避免溢出的同时并处理变化容量的内容的时候是很有用的。

{{cssxref("max-width")}} 的常见用法为，在没有足够空间以原有宽度展示图像时，让图像缩小，同时确保它们不会比这一宽度大。

作为示例，如果你设定一个图像的属性为 `width: 100%`，而且它的原始宽度小于容器，图像会被强制拉伸以变大，看起来像素更加明显。如果它的原始宽度大于容器，它则会溢出。两种情形都不是你想要看到的。

如果你使用了 `max-width: 100%`，那么图像可以变得比原始尺寸更小，但是不会大于原始尺寸的 100%。

在下面的示例里，我们使用了两次相同的图片。第一次使用，属性值已设为 `width: 100%`，位于比图片大的容器里，因此图片拉伸到了与容器相同的宽度；第二次的属性值则设为 `max-width: 100%`，因此它并没有拉伸到充满容器；第三个盒子再一次包含了相同的图片，同时设定了 `max-width: 100%` 属性，这时你能看到它是怎样缩小来和盒子大小相适应的。

```html live-sample___max-width
<div class="wrapper">
  <div class="box">
    <img
      alt="star"
      class="width"
      src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
  </div>
  <div class="box">
    <img
      alt="star"
      class="max"
      src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
  </div>
  <div class="mini-box">
    <img
      alt="star"
      class="max"
      src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
  </div>
</div>
```

```css hidden live-sample___max-width
.wrapper {
  display: flex;
  align-items: flex-start;
}

.wrapper > * {
  margin: 20px;
}

.box,
.mini-box {
  border: 5px solid darkblue;
}
```

```css live-sample___max-width
.box {
  width: 200px;
}
.mini-box {
  width: 50px;
}
.width {
  width: 100%;
}
.max {
  max-width: 100%;
}
```

{{EmbedLiveSample("max-width", "", "260px")}}

这个技术是用来让图片**可响应**的，所以在更小的设备上浏览的时候，它们会合适地缩放。你无论怎样都不应该用这个技术先载入大原始尺寸的图片，再对它们在浏览器中进行缩放。图像应该合适地调整尺寸，以使它们不会比预计中展示时所需要的最大尺寸大。下载过大的图像会造成你的网站变慢，如果用户使用按量收费的网络连接，会让用户花更多钱。

> [!NOTE]
> 了解更多关于[响应式图片技术](/zh-CN/docs/Web/HTML/Guides/Responsive_images)的事情。

## 视口单位

视口，即你在浏览器中看到的部分页面，也是有尺寸的。在 CSS 中，我们有与视口尺寸相关的度量单位，即意为视口宽度的 `vw` 单位，以及意为视口高度的 `vh` 单位。使用这些单位，你可以把一些东西做得随用户的视口改变大小。

`1vh` 等于视口高度的 1%，`1vw` 则为视口宽度的 1%。你可以用这些单位约束盒子的大小，还有文字的大小。在下面的示例里，我们有一个大小被设为 20vh 和 20vw 的盒子。这个盒子里面有一个字母 `A`，其 {{cssxref("font-size")}} 属性被设成了 10vh。

```html live-sample___vw-vh
<div class="box">A</div>
```

```css live-sample___vw-vh
body {
  font-family: sans-serif;
}

.box {
  border: 5px solid darkblue;
  width: 20vw;
  height: 20vh;
  font-size: 10vh;
}
```

{{EmbedLiveSample("vw-vh")}}

如果你改变了 `vh` 和 `vw` 的对应值，盒子和字体的大小也会改变；视口大小的变化也会让它们的大小变化，因为它们是依照视口来定大小的。想看到随着你改变视口大小的时候示例的变化的话，你需要在一个新浏览器视窗里面载入此示例，因为你可以控制该视窗的大小，同时上面示例所在的嵌入的 `<iframe>` 的大小即是对上面示例而言的视口。[打开此示例](https://mdn.github.io/css-examples/learn/sizing/vw-vh.html)，调整浏览器视窗的大小，观察在盒子和文本的大小上所发生的事情。

在你的设计中，根据视口改变物件的大小是很有用的。例如，如果你想要在你其他内容之前，有一个充满整个视口的视觉宣传段落，让你的页面的那个部分有 100vh 高的话，会把剩下的内容推到视口的下面，只有向下滚动文档的时候它们才会出现。

## 小结

本节课，你已经得到了一个对于你可能在约束网站上的内容大小的时候，会遇到的一些关键问题的详细介绍。当你继续学习 [CSS 布局](/zh-CN/docs/Learn_web_development/Core/CSS_layout)的时候，约束大小会成为掌握不同布局途径的非常重要的基础，所以在继续之前有必要在这里理解这些概念。

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}
