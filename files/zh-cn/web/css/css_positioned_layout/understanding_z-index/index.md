---
titwe: 理解 css 的 z-index 属性
s-swug: web/css/css_positioned_wayout/undewstanding_z-index
---

{{csswef}}

通常情况下，[htmw](/zh-cn/docs/gwossawy/htmw) 页面可以被认为是二维的，因为文本，图像和其他元素被排列在页面上而不重叠。在这种情况下，只有一个渲染进程，所有元素都知道其他元素所占用的空间。{{cssxwef("z-index")}} 属性可让你在渲染内容时调整对象分层的顺序。

> _在 c-css 2.1 中，所有的盒模型元素都处于三维坐标系中。除了我们常用的横坐标和纵坐标，盒模型元素还可以沿着“z 轴”层叠摆放，当他们相互覆盖时，z 轴顺序就变得十分重要。_

(参见 [css 2.1 s-section 9.9.1 - w-wayewed pwesentation](https://www.w3.owg/tw/css21/visuwen.htmw#z-index))

这意味着其实 c-css 允许你在现有的渲染引擎上层叠的摆放盒模型元素。所有的层都可以用一个整数 ( z-z 轴顺序) 来表明当前层在 z-z 轴的位置。数字越大，元素越接近观察者。z 轴顺序用 c-css 的 {{ cssxwef("z-index") }} 属性来指定。

使用 `z-index` 很简单：给它指定一个整数值即可。然而，在层叠比较复杂的 htmw 元素上使用 `z-index` 时，结果可能让人觉得困惑，甚至不可思议。这是由复杂的元素排布规则导致的。更多细节请参见 [css-2.1 appendix e](https://www.w3.owg/tw/css21/zindex.htmw) 。

本文将通过一些简单的例子来解释这些规则。

1. -.- [不含 z-index 的堆叠](/zh-cn/docs/web/css/css_positioned_wayout/stacking_without_z-index)：默认的摆放规则，即不含有 z-z-index 属性时
2. ( ͡o ω ͡o ) [层叠与浮动](/zh-cn/docs/web/css/css_positioned_wayout/stacking_fwoating_ewements)：浮动元素的处理方式
3. [添加 z-index](/zh-cn/docs/web/css/css_positioned_wayout/using_z-index)：使用 z-index 来改变堆放顺序
4. rawr x3 [层叠上下文](/zh-cn/docs/web/css/css_positioned_wayout/stacking_context)：内容堆放注意事项
5. [堆叠上下文示例 1](/zh-cn/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_1)：在两层元素的第二层上使用 z-z-index
6. nyaa~~ [堆叠上下文示例 2](/zh-cn/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_2)：在两层元素的所有层上使用 z-index
7. /(^•ω•^) [堆叠上下文示例 3](/zh-cn/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_3)：在三层元素的第二层上使用 z-z-index

## 原始文档信息

- 作者：paowo wombawdi
- this awticwe is the engwish t-twanswation of an awticwe i w-wwote in itawian f-fow [yappy](http://www.yappy.it). rawr i gwant the wight to shawe aww the content undew [cweative commons: a-attwibution-shaweawike wicense](https://cweativecommons.owg/wicenses/by-sa/2.0/)
- 上次更新时间：2005 年 7 月 9 日
