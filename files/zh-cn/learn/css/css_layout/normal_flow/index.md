---
title: 常规流布局
slug: Learn/CSS/CSS_layout/Normal_Flow
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/CSS/CSS_layout/Introduction", "Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout")}}

本文介绍常规流布局，或者说，在你没有改变默认布局规则情况下的页面元素布局方式。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        HTML 基础知识（学习
        <a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 简介</a
        >），以及了解 CSS 如何工作的（学习
        <a href="/zh-CN/docs/Learn/CSS/Introduction_to_CSS"
          >CSS 入门概述</a
        >）。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>在做出改动之前，能够解释浏览器默认的布局方式。</td>
    </tr>
  </tbody>
</table>

如上节对布局的介绍，如果你未曾应用任何 CSS 规则来改变网页中元素的展现方式，那么它们将会按照常规流布局来组织。同样地，正如我们一开始发现的那样，你可以通过调整元素位置，或者完全的移除元素来改变它们的表现效果。从一个简单的、结构良好并且在常规流布局下仍然易读的文档开始，是上手任何网页的最佳方式。这样确保了你的内容的易读性，即便用户使用受限的浏览器或者屏幕阅读设备。此外，由于常规流布局的设计初衷在于构建易读、合理的文档，遵循这样的指引原则，你在对布局做出改动时应该是与文档*协同*，而不是与之*对抗*。

在深入探索不同的布局方式之前，你最好回顾一下在之前模块学习到的关于常规文档流的知识点。

## 元素在默认情况下是如何布局的？

首先，取得元素的内容并将其放在一个独立的元素盒子中，然后在其周边加上内边距、边框和外边距——就是我们所说的**盒子模型**。

默认情况下，一个[块级元素](/zh-CN/docs/Glossary/Block-level_content)会填充其父元素所有的行向空间，并沿着其块向伸长以容纳其内容。[行级元素](/zh-CN/docs/Glossary/Inline-level_content)的大小就是其本身的大小。你可以为某些 {{cssxref("display")}} 属性值默认为 `inline` 的元素（例如 {{HTMLElement("img")}}）设置 {{cssxref("width")}} 或 {{cssxref("height")}}，但其 `display` 仍将保持为 `inline`。

如果你想要控制行级元素的 `display` 属性，请使用 CSS 将其设置为块级元素（例如，使用 `display: block;` 或 `display: inline-block;`，后者混合了两者特性）。

这样解释了独立元素的布局，但是元素之间又是如何相互影响的呢？常规流布局（在布局介绍里提到过）是一套用于在浏览器视口内组织元素如何放置的系统。默认地，块级元素按照基于其父元素的[书写模式](/zh-CN/docs/Web/CSS/writing-mode)（_默认值_：horizontal-tb）的*块流动方向*（block flow direction）放置。每个块级元素会在上一个元素下面另起一行，它们会以指定的外边距分隔。以英语为例（或者其他水平书写、自上而下的书写模式中），块级元素是垂直组织的。

行级（inline）元素的表现有所不同。它们不会另起一行；只要在其父级块级元素的宽度内有足够的空间，它们与其他内联元素、相邻（或换行）的文本内容被安排在同一行。如果空间不够，溢出的内容将下移到新的一行。

如果两个垂直相邻的元素都设置了外边距并且两个外边距相接触，那么更大的外边距会被保留，小的则会消失——这被称为[**外边距折叠**](/zh-CN/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)。外边距折叠仅与**垂直方向**有关。

我们来看一个对全部这些做出解释的简单示例：

```html
<h1>基础文档流</h1>

<p>我是一个基本的块级元素。我的相邻块级元素在我的下方另起一行。</p>

<p>
  默认情况下，我们会占据父元素 100%
  的宽度，并且我们的高度与我们的子元素内容一样高。我们的总宽度和高度是我们的内容
  + 内边距 + 边框宽度/高度。
</p>

<p>
  我们以我们的外边距分隔。由于外边距折叠，我们以其中一个外边距的宽度分隔，而不是两个。
</p>

<p>
  如果在同一行上足够的空间，行级元素（如<span>这个</span>和<span>这个</span>），那么它们将与相邻的文本节点将会一起放置在同一行上。如果行级元素溢出，<span>那么它们将会换行，就像这个包含文本的行级元素一样</span>，或者如果没有足够的空间，那么它们将会换到新的一行，就像这个图片一样：
  <img src="long.jpg" alt="snippet of cloth" />
</p>
```

```css
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: rgba(255, 84, 104, 0.3);
  border: 2px solid rgb(255, 84, 104);
  padding: 10px;
  margin: 10px;
}

span {
  background: white;
  border: 1px solid black;
}
```

{{ EmbedLiveSample('元素在默认情况下是如何布局的？', '100%', 500) }}

## 总结

在本节中，你学习了常规流布局的基础指示——知晓元素的默认 CSS 布局方式。通过了解行级元素、块级元素以及外边距的默认行为，在未来你可以更轻松地修改这些行为。

在下一节，我们将会在这些基础指示的基础上，使用[弹性盒子](/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox)来修改元素的 CSS 布局方式。

{{PreviousMenuNext("Learn/CSS/CSS_layout/Introduction", "Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout")}}
