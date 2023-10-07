---
title: 指南：媒体对象
slug: Web/CSS/Layout_cookbook/Media_objects
---

{{CSSRef}}

媒体对象是 web 上随处可见的一种模式。它由[Nicole Sullivan](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/)命名，表示一种一侧是图片并且另一侧是描述性的文字的两列盒子，比如一篇 facebook 帖子或者 tweet。

![](media-object.png)

## 要求

媒体对象模式需要以下特性的一些或者全部：

- 在移动设备上被堆叠，在桌面设备上显示两列
- 图片可以在左边，也可以在右边
- 图片可以是小图，也可以是大图
- 媒体对象可以被嵌套
- 无论哪边更高，媒体对象应该清除内容

## 使用指南

{{EmbedGHLiveSample("css-examples/css-cookbook/media-objects.html", '100%', 1200)}}

> **备注：** [Download this example](https://github.com/mdn/css-examples/blob/master/css-cookbook/media-objects--download.html)

## 做出选择

我选择使用[Grid Layout](/zh-CN/docs/Web/CSS/CSS_grid_layout)实现媒体对象，因为它可以让我在我需要的时候控制两个维度的布局。这意味着当我们有一个页脚（footer）的时候，上面的内容很短，页脚可以被推到媒体对象的底部。

另一个使用网格布局（Grid Layout）的原因是为了可以使用{{cssxref("fit-content")}}图片的追踪（track）大小。通过使用 最大尺寸是 200 像素的`fit-content` ，当我们有一个小图片比如 icon 的时候，track 仅仅得到和 image 的尺寸一样的大小（`max-content` 大小）。如果图片更大，track 在 200 像素的时候停止增长，因为图片应用了{{cssxref("max-width ")}}为 100%。同样，它会缩小以适应列内部的尺寸。

通过使用{{cssxref("grid-template-areas")}} 来实现布局，我可以看到 CSS 中的这个模式。我定义我的网格，其并且设置最大宽度（max-width）为 500 像素，因此在较小的设备上媒体对象会被堆叠起来。

模式的一个选项是翻转它将图片切换到另一边——这通过添加`media-flip` 类来实现，它定义了一个翻转的网格模板所以布局被镜像了。

当我们在另一个媒体对象之中嵌套一个媒体对象，我么你需要将它放到常规布局的第二个 track 中，当翻转时放到第一个 track 中

## 回退方案

对于这种模式有很多种可能的回退方案，取决于你希望支持的浏览器。一个比较好的方案是将图片浮动到左边，并且为盒子添加 clearfix 来确保它包含浮动元素。

{{EmbedGHLiveSample("css-examples/css-cookbook/media-objects-fallback.html", '100%', 1200)}}

> **备注：** [Download this example](https://github.com/mdn/css-examples/blob/master/css-cookbook/media-objects-fallback--download.html)

一旦浮动元素成为网格项，浮动将不再被应用到网格上，因此你不需要做任何特殊的事情来清除浮动。

你需要做的事情是移除应用到这些 items 的任何边界，以及我们在一个网格上下文中不需要的任何宽度（在网格中我们有{{cssxref("gap")}}属性来控制它，并且 track 控制了尺寸）。

## MDN 上相关的资源

- [CSS Grid Layout](/zh-CN/docs/Web/CSS/CSS_grid_layout)
- [Progressive Enhancement and Grid Layout](/zh-CN/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_progressive_enhancement)
- [Using Grid Template Areas](/zh-CN/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [fit-content](/zh-CN/docs/Web/CSS/fit-content)
- [Grid-template-areas](/zh-CN/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)

## 浏览器兼容性

{{Compat}}
