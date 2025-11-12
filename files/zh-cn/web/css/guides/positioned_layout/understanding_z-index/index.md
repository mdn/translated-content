---
title: 理解 CSS 的 z-index 属性
slug: Web/CSS/Guides/Positioned_layout/Understanding_z-index
---

通常情况下，[HTML](/zh-CN/docs/Glossary/HTML) 页面可以被认为是二维的，因为文本，图像和其他元素被排列在页面上而不重叠。在这种情况下，只有一个渲染进程，所有元素都知道其他元素所占用的空间。{{cssxref("z-index")}} 属性可让你在渲染内容时调整对象分层的顺序。

> _在 CSS 2.1 中，所有的盒模型元素都处于三维坐标系中。除了我们常用的横坐标和纵坐标，盒模型元素还可以沿着“z 轴”层叠摆放，当他们相互覆盖时，z 轴顺序就变得十分重要。_

(参见 [CSS 2.1 Section 9.9.1 - Layered presentation](https://www.w3.org/TR/CSS21/visuren.html#z-index))

这意味着其实 CSS 允许你在现有的渲染引擎上层叠的摆放盒模型元素。所有的层都可以用一个整数 ( z 轴顺序) 来表明当前层在 z 轴的位置。数字越大，元素越接近观察者。Z 轴顺序用 CSS 的 {{ cssxref("z-index") }} 属性来指定。

使用 `z-index` 很简单：给它指定一个整数值即可。然而，在层叠比较复杂的 HTML 元素上使用 `z-index` 时，结果可能让人觉得困惑，甚至不可思议。这是由复杂的元素排布规则导致的。更多细节请参见 [CSS-2.1 Appendix E](https://www.w3.org/TR/CSS21/zindex.html) 。

本文将通过一些简单的例子来解释这些规则。

1. [不含 z-index 的堆叠](/zh-CN/docs/Web/CSS/Guides/Positioned_layout/Stacking_without_z-index)：默认的摆放规则，即不含有 z-index 属性时
2. [层叠与浮动](/zh-CN/docs/Web/CSS/Guides/Positioned_layout/Stacking_floating_elements)：浮动元素的处理方式
3. [添加 z-index](/zh-CN/docs/Web/CSS/Guides/Positioned_layout/Using_z-index)：使用 z-index 来改变堆放顺序
4. [层叠上下文](/zh-CN/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)：内容堆放注意事项
5. [堆叠上下文示例 1](/zh-CN/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_1)：在两层元素的第二层上使用 z-index
6. [堆叠上下文示例 2](/zh-CN/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_2)：在两层元素的所有层上使用 z-index
7. [堆叠上下文示例 3](/zh-CN/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_3)：在三层元素的第二层上使用 z-index

## 原始文档信息

- 作者：Paolo Lombardi
- This article is the English translation of an article I wrote in Italian for [YappY](http://www.yappy.it). I grant the right to share all the content under [Creative Commons: Attribution-Sharealike license](https://creativecommons.org/licenses/by-sa/2.0/)
- 上次更新时间：2005 年 7 月 9 日
