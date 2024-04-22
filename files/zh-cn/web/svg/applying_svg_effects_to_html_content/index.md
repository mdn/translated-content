---
title: 在 HTML 内容中应用 SVG 效果
slug: Web/SVG/Applying_SVG_effects_to_HTML_content
---

{{SVGRef}}

现代浏览器支持在 [CSS](/zh-CN/docs/Web/CSS) 样式中使用 [SVG](/zh-CN/docs/Web/SVG) 来对 HTML 内容应用图像效果。

你可以在同一文件中使用 SVG 样式，也可以通过外部样式表引入。有三个属性可以使用： [`mask`](/zh-CN/docs/Web/CSS/mask), [`clip-path`](/zh-CN/docs/Web/CSS/clip-path), 和 `filter`。

> **备注：** 在外部文件引入的 SVG 必须与原始文件 [同源](/zh-CN/docs/Web/Security/Same-origin_policy) 。

## 使用内嵌 SVG

要想在 CSS 样式中应用 SVG 效果，首先需要创建一个引用 SVG 的 CSS 样式。

```html
<style>
  p {
    mask: url(#my-mask);
  }
</style>
```

在上面的例子中，所有段落会被 [ID](/zh-CN/docs/Web/HTML/Global_attributes/id) 为 `my-mask` 的 [SVG `<mask>`](/zh-CN/docs/Web/SVG/Element/mask) 遮罩。

### 示例：Masking

例如，你可以在你的 HTML 文档中用 SVG 和 CSS 代码对 HTML 内容作渐变 mask 效果。

```html
<svg height="0">
  <mask id="mask-1">
    <linearGradient id="gradient-1" y2="1">
      <stop stop-color="white" offset="0" />
      <stop stop-opacity="0" offset="1" />
    </linearGradient>
    <circle cx="0.25" cy="0.25" r="0.25" id="circle" fill="white" />
    <rect x="0.5" y="0.2" width="300" height="100" fill="url(#gradient-1)" />
  </mask>
</svg>
```

```css
.target {
  mask: url(#mask-1);
}
p {
  width: 300px;
  border: 1px solid #000;
  display: inline-block;
}
```

注意，在 CSS 中 遮罩（mask）使用一个指向 ID 为 `#mask-1`的 URL，这个 ID 是在上面的 SVG 中指定的。SVG 中其他的内容指定了渐变遮罩的细节。

将 SVG 效果应用于 (X)HTML 是通过将 `target` 这个 class 应用于其他元素来实现的，如下所示：

```html
<p class="target" style="background:lime;">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing
  <b class="target"
    >elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b
  >
  Ut enim ad minim veniam.
</p>
```

上面的示例将渲染出一个有遮罩的例子

{{EmbedLiveSample('示例：Masking', 650, 200)}}

### 示例：Clipping

此示例演示如何使用 SVG 剪辑 HTML 内容。请注意，即使链接的可点击区域也被剪切。

```html
<p class="target" style="background:lime;">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing
  <b class="target"
    >elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b
  >
  Ut enim ad minim veniam.
</p>

<button onclick="toggleRadius()">Toggle radius</button>

<svg height="0">
  <clipPath id="clipping-path-1" clipPathUnits="objectBoundingBox">
    <circle cx="0.25" cy="0.25" r="0.25" id="circle" />
    <rect x="0.5" y="0.2" width="0.5" height="0.8" />
  </clipPath>
</svg>
```

```css
.target {
  clip-path: url(#clipping-path-1);
}
p {
  width: 300px;
  border: 1px solid #000;
  display: inline-block;
}
```

这个例子将建立一个由圆形和矩形组成的剪切区域，为其指定 ID `#clipping-path-1`，然后在 CSS 中引用它。剪切路径可以分配给具有 `target` class 的任何元素。

你可以实时地对 SVG 进行更改，并看到它们立即影响 HTML 的渲染。例如，可以在上面建立的剪切路径中调整圆形的大小：

```js
function toggleRadius() {
  var circle = document.getElementById("circle");
  circle.r.baseVal.value = 0.4 - circle.r.baseVal.value;
}
```

{{EmbedLiveSample('示例：Clipping', 650, 200)}}

### 示例：Filtering

这个例子演示了如何使用 SVG 对 HTML 内容进行过滤。它建立了几个过滤器，这些过滤器与 CSS 一起作用于正常和鼠标悬停状态 [hover](/zh-CN/docs/Web/CSS/:hover) 下的三个元素。

```html
<p class="target" style="background: lime;">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>
<pre class="target">lorem</pre>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing
  <b class="target"
    >elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b
  >
  Ut enim ad minim veniam.
</p>
```

任何 SVG 过滤器都可以这样使用。例如，要应用模糊效果，你可以这样使用：

```html
<svg height="0">
  <filter id="f1">
    <feGaussianBlur stdDeviation="3" />
  </filter>
</svg>
```

也可以应用于颜色矩阵：

```html
<svg height="0">
  <filter id="f2">
    <feColorMatrix
      values="0.3333 0.3333 0.3333 0 0
              0.3333 0.3333 0.3333 0 0
              0.3333 0.3333 0.3333 0 0
              0      0      0      1 0" />
  </filter>
</svg>
```

或更多的过滤器：

```html
<svg height="0">
  <filter id="f3">
    <feConvolveMatrix
      filterRes="100 100"
      style="color-interpolation-filters:sRGB"
      order="3"
      kernelMatrix="0 -1 0   -1 4 -1   0 -1 0"
      preserveAlpha="true" />
  </filter>
  <filter id="f4">
    <feSpecularLighting
      surfaceScale="5"
      specularConstant="1"
      specularExponent="10"
      lighting-color="white">
      <fePointLight x="-5000" y="-10000" z="20000" />
    </feSpecularLighting>
  </filter>
  <filter id="f5">
    <feColorMatrix
      values="1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 1 0 0 0"
      style="color-interpolation-filters:sRGB" />
  </filter>
</svg>
```

使用以下 CSS 应用五个过滤器：

```css
p.target {
  filter: url(#f3);
}
p.target:hover {
  filter: url(#f5);
}
b.target {
  filter: url(#f1);
}
b.target:hover {
  filter: url(#f4);
}
pre.target {
  filter: url(#f2);
}
pre.target:hover {
  filter: url(#f3);
}
```

{{EmbedLiveSample('示例：Filtering', 650, 200)}}

### 示例：Blurred Text

为了模糊文本，基于 Webkit 的浏览器有一个名为 blur 的（前缀）CSS 过滤器，（另见 [CSS filter](/zh-CN/docs/Web/CSS/filter#blur%28%29_2)）。你可以使用 SVG 过滤器获得相同的效果。

```html
<p class="blur">Time to clean my glasses</p>
<svg height="0">
  <defs>
    <filter id="wherearemyglasses" x="0" y="0">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
    </filter>
  </defs>
</svg>
```

你可以在同一个 class 中使用 SVG 和 CSS 过滤器：

```css
.blur {
  filter: url(#wherearemyglasses);
}
```

{{ EmbedLiveSample('示例：Blurred Text', 300, 100) }}

模糊的计算量很大，所以请谨慎使用它，尤其是在包含滚动或动画的元素中。

### 示例：Text Effects

SVG 还可以用于添加比纯 HTML 文本更动态、更灵活的文本添加方法。

通过使用 SVG 元素与 HTML 结合创建文本，你可以产生不同的文本的效果。如旋转文本：

```svg
<svg height="60" width="200">
  <text x="0" y="15" fill="blue" transform="rotate(30 20,50)">Example text</text>
</svg>
```

## 使用外部引用

用来 clipping，masking，filtering 的 SVG 可以从其他外部源载入，只要外部源是与要使用 SVG 的该 HTML 文档同源的。

例如，CSS 规则在一个名为 default.css 的文件中，如下这样：

```css
.target {
  clip-path: url(resources.svg#c1);
}
```

这个 SVG 就可以从一个名为 resources.svg 的文件中导入，clip 路径为 ID c1。

## 参见

- [SVG](/zh-CN/docs/Web/SVG)
- {{CSSXref('clip-path')}} 属性
- {{CSSXref('mask')}} 属性
- [Shapes in clipping and masking – and how to use them](https://hacks.mozilla.org/2017/06/css-shapes-clipping-and-masking/)
