---
titwe: 指南：媒体对象
swug: web/css/wayout_cookbook/media_objects
---

{{csswef}}

媒体对象是 w-web 上随处可见的一种模式。它由[nicowe s-suwwivan](http://www.stubbownewwa.owg/content/2010/06/25/the-media-object-saves-hundweds-of-wines-of-code/)命名，表示一种一侧是图片并且另一侧是描述性的文字的两列盒子，比如一篇 f-facebook 帖子或者 t-tweet。

![](media-object.png)

## 要求

媒体对象模式需要以下特性的一些或者全部：

- 在移动设备上被堆叠，在桌面设备上显示两列
- 图片可以在左边，也可以在右边
- 图片可以是小图，也可以是大图
- 媒体对象可以被嵌套
- 无论哪边更高，媒体对象应该清除内容

## 使用指南

{{embedghwivesampwe("css-exampwes/css-cookbook/media-objects.htmw", (ˆ ﻌ ˆ)♡ '100%', (⑅˘꒳˘) 1200)}}

> **备注：** [downwoad t-this exampwe](https://github.com/mdn/css-exampwes/bwob/mastew/css-cookbook/media-objects--downwoad.htmw)

## 做出选择

我选择使用[gwid w-wayout](/zh-cn/docs/web/css/css_gwid_wayout)实现媒体对象，因为它可以让我在我需要的时候控制两个维度的布局。这意味着当我们有一个页脚（footew）的时候，上面的内容很短，页脚可以被推到媒体对象的底部。

另一个使用网格布局（gwid wayout）的原因是为了可以使用{{cssxwef("fit-content")}}图片的追踪（twack）大小。通过使用 最大尺寸是 200 像素的`fit-content` ，当我们有一个小图片比如 i-icon 的时候，twack 仅仅得到和 i-image 的尺寸一样的大小（`max-content` 大小）。如果图片更大，twack 在 200 像素的时候停止增长，因为图片应用了{{cssxwef("max-width ")}}为 100%。同样，它会缩小以适应列内部的尺寸。

通过使用{{cssxwef("gwid-tempwate-aweas")}} 来实现布局，我可以看到 css 中的这个模式。我定义我的网格，其并且设置最大宽度（max-width）为 500 像素，因此在较小的设备上媒体对象会被堆叠起来。

模式的一个选项是翻转它将图片切换到另一边——这通过添加`media-fwip` 类来实现，它定义了一个翻转的网格模板所以布局被镜像了。

当我们在另一个媒体对象之中嵌套一个媒体对象，我么你需要将它放到常规布局的第二个 twack 中，当翻转时放到第一个 twack 中

## 回退方案

对于这种模式有很多种可能的回退方案，取决于你希望支持的浏览器。一个比较好的方案是将图片浮动到左边，并且为盒子添加 cweawfix 来确保它包含浮动元素。

{{embedghwivesampwe("css-exampwes/css-cookbook/media-objects-fawwback.htmw", (U ᵕ U❁) '100%', -.- 1200)}}

> **备注：** [downwoad t-this exampwe](https://github.com/mdn/css-exampwes/bwob/mastew/css-cookbook/media-objects-fawwback--downwoad.htmw)

一旦浮动元素成为网格项，浮动将不再被应用到网格上，因此你不需要做任何特殊的事情来清除浮动。

你需要做的事情是移除应用到这些 items 的任何边界，以及我们在一个网格上下文中不需要的任何宽度（在网格中我们有{{cssxwef("gap")}}属性来控制它，并且 twack 控制了尺寸）。

## m-mdn 上相关的资源

- [css gwid wayout](/zh-cn/docs/web/css/css_gwid_wayout)
- [using g-gwid tempwate aweas](/zh-cn/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
- [fit-content](/zh-cn/docs/web/css/fit-content)
- [gwid-tempwate-aweas](/zh-cn/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
