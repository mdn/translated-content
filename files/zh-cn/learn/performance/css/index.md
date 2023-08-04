---
title: CSS 性能优化
slug: Learn/Performance/CSS
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/html", "Learn/Performance/business_case_for_performance", "Learn/Performance")}}

页面在样式没有渲染完毕的情况下被绘制，在样式渲染完毕后又被刷新，这大概是很糟糕的用户体验。因此，除非浏览器知道当前不需要该 CSS，否则该 CSS 将阻止渲染。浏览器一旦下载了 CSS 并建立了 CSS 对象模型，就可以绘制页面。浏览器遵循特定的渲染路径：绘制只发生在布局之后，而布局发生在渲染树创建之后，这又需要 DOM 和 CSSOM 树。为了优化 CSSOM 的构建，要删除不必要的样式，对其进行最小化、压缩和缓存，并将页面加载时不需要的 CSS 分割到其他文件中，以减少 CSS 渲染阻塞。

### 阻塞渲染优化

CSS 可以使用媒体查询将样式应用在特定条件下。媒体查询对于响应式 Web 设计非常重要，可以帮助我们优化关键渲染路径。浏览器会阻塞渲染，直到它解析完全部的样式，但不会阻塞渲染它认为不会使用的样式，例如打印样式表。通过基于媒体查询将 CSS 分成多个文件，可以防止在下载未使用的 CSS 期间阻止渲染。为了创建非阻塞 CSS 链接，将不会立即使用的样式（例如打印样式）移动到单独的文件中，将 [`<link>`](/zh-CN/docs/Web/HTML/Element/link) 元素添加到 HTML 中，并添加媒体查询，在这种情况下说明它是打印样式表。

```html
<!-- 加载和解析 styles.css 是阻塞渲染的 -->
<link rel="stylesheet" href="styles.css" />

<!-- 加载和解析 print.css 是非阻塞渲染的 -->
<link rel="stylesheet" href="print.css" media="print" />

<!-- 加载和解析 mobile.css 在大型屏幕上是非阻塞渲染的 -->
<link
  rel="stylesheet"
  href="mobile.css"
  media="screen and (max-width: 480px)" />
```

默认情况下，浏览器假设每个指定的样式表都是阻塞渲染的。通过添加 `media` 属性附加[媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries)，告诉浏览器何时应用样式表。当浏览器看到一个它知道只会用于特定场景的样式表时，它仍会下载样式，但不会阻塞渲染。通过将 CSS 分成多个文件，主要的阻塞渲染文件（本例中为 `styles.css`）的大小变得更小，从而减少了渲染被阻塞的时间。

### 在 GPU 上渲染动画

浏览器针对处理 CSS 动画进行了优化，可以很好地处理触发重排（因此也导致重绘）的动画属性。为了提高性能，可以将被动画化的节点从主线程移到 GPU 上。将导致合成的属性包括 3D 变换（[`transform: translateZ()`](/zh-CN/docs/Web/CSS/transform)、[`rotate3d()`](/zh-CN/docs/Web/CSS/transform-function/rotate3d) 等）、动画变换、[`opacity`](/zh-CN/docs/Web/CSS/opacity)、[`position: fixed`](/zh-CN/docs/Web/CSS/position)、[`will-change`](/zh-CN/docs/Web/CSS/will-change) 和 [`filter`](/zh-CN/docs/Web/CSS/filter)。一些元素，例如 [`<video>`](/zh-CN/docs/Web/HTML/Element/video)、[`<canvas>`](/zh-CN/docs/Web/HTML/Element/canvas) 和 [`<iframe>`](/zh-CN/docs/Web/HTML/Element/iframe)，也位于各自的图层上。将元素提升为图层（也称为合成）时，动画转换属性将在 GPU 中完成，从而改善性能，尤其是在移动设备上。

### `will-change` 属性

CSS [`will-change`](/zh-CN/docs/Web/CSS/will-change) 属性告诉浏览器元素的哪些属性需要修改，使浏览器能够在元素实际更改之前设置优化，通过在实际更改前执行耗时的工作以提升性能。

> **备注：** `will-change` 是作为最后的手段来处理现有的性能问题的。它不应该被用来预测性能问题。

```css
will-change: opacity, transform;
```

### `font-display` 属性

根据 [@font-face](/zh-CN/docs/Web/CSS/@font-face) 规则，[font-display](/zh-CN/docs/Web/CSS/@font-face/font-display) 属性定义了浏览器如何加载和显示字体文件，允许文本在字体加载或加载失败时显示回退字体。可以通过依靠折中无样式文本闪现使文本可见替代白屏来提高性能。

```css
@font-face {
  font-family: someFont;
  src: url(/path/to/fonts/someFont.woff) format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

### `contain` 属性

CSS 属性 {{cssxref('contain')}} 允许作者表示一个元素及其内容尽可能*独立*于文档树的其他部分。这允许浏览器为 DOM 的有限区域而不是整个页面重新计算布局、样式、绘画、尺寸或它们的任何组合。

## 总结

{{PreviousMenuNext("Learn/Performance/html", "Learn/Performance/business_case_for_performance", "Learn/Performance")}}

## 参见

- [CSS 动画性能](/zh-CN/docs/Web/Performance/CSS_JavaScript_animation_performance)
