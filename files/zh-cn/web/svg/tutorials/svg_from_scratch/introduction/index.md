---
title: 引言
slug: Web/SVG/Tutorials/SVG_from_scratch/Introduction
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch", "Web/SVG/Tutorials/SVG_from_scratch/Getting_started") }}

[SVG](/zh-CN/docs/Web/SVG) 是一种 [XML](/zh-CN/docs/Web/XML) 语言，类似 [XHTML](/zh-CN/docs/Glossary/XHTML)，可以用来绘制矢量图形，例如下面展示的图形。SVG 可以通过定义必要的线和形状来创建一个图形，也可以修改已有的位图，或者将这两种方式结合起来创建图形。图形和其组成部分可以形变（be transformed）、合成、或者通过滤镜完全改变外观。

![Mozilla dino logo](dino.svg)

SVG 诞生于 1999 年，之前有几个相互竞争的格式规范被提交到 [W3C](https://www.w3.org)，但是都没有获得批准。主流浏览器均支持 SVG。加载慢是 SVG 的一个缺点。但是 SVG 也有自身的优点，比如它实现了 DOM 接口（比 Canvas 方便），不需要安装第三方扩展。当然，是否使用 SVG 还要取决于你要实现什么。

## 基本要素

HTML 提供了定义标题、段落、表格等等内容的元素。与此类似，SVG 也提供了一些元素，用于定义圆形、矩形、简单或复杂的曲线。一个简单的 SVG 文档由 {{ SVGElement('svg') }} 根元素和基本的形状元素构成。另外还有一个`g`元素，它用来把若干个基本形状编成一个组。

从这些开始，SVG 可以变得更加复杂。SVG 支持渐变、旋转、动画、滤镜效果、与 JavaScript 交互等等功能，但是所有这些额外的语言特性，都需要在一个定义好的图形区域内实现。

## 开始之前

包括 [Inkscape](https://www.inkscape.org/)在内的很多免费应用原生支持 SVG 格式的文件。但是本教程建议在学习过程中使用 XML 或文本编辑器，因为想要理解 SVG 内部的原理，最好的方法就是动手写一些 SVG 的标记。你需要注意到你的最终目标。各种 SVG 浏览器是有差异的，因此很可能你制作了一个 SVG 图形，并且用一个工具调试正常后，却在另外一个浏览器中无法正常显示。这是因为不同的浏览器支持 SVG 标准的程度不同，另外，如果你将其他技术和 SVG 一起使用（比如 [JavaScript](/zh-CN/docs/Web/JavaScript)和 [CSS](/zh-CN/docs/Web/CSS)），也会出现类似的情况。

所有的现代浏览器都支持 SVG，在某些情况下甚至几个版本都支持 SVG。[Can I use](https://caniuse.com/#feat=svg)上有一份比较详细的支持 SVG 的浏览器列表，Firefox 1.5 以后的版本支持 SVG 的部分内容，并且支持的程度越来越高。希望通过这份教程，MDN 能帮助开发者理解 Gecko 内核和其他一些主要编译器之间的差异。

正式开始之前，你需要基本掌握 XML 和其他标记语言比如说 HTML，如果你不是很熟悉 XML，这里有几个重点一定要记住：

- SVG 的元素和属性必须按标准格式书写，因为 XML 是区分大小写的（这一点和 HTML 不同）
- SVG 里的属性值必须用引号引起来，就算是数值也必须这样做。

SVG 是一个庞大的规范，本教程主要涵盖基础内容。掌握了这些内容之后，你就有能力使用[元素参考](/zh-CN/docs/Web/SVG/Reference/Element)和[接口参考](/zh-CN/docs/Web/API/Document_Object_Model#svg_接口)，学习其他你需要知道的内容。

## SVG 的种类

自从 2003 年成为 W3C 推荐标准以来，最接近的“完整版”SVG 版本是 1.1 版，它基于 1.0 版，并且增加了更多便于实现的模块化内容，SVG1.1 的第二个版本在 2011 年成为推荐标准，完整的 SVG1.2 本来是下一个标准版本，但它又被 SVG2.0 取代。SVG2.0 正在制定当中，它采用了类似 CSS3 的制定方法，通过若干松散耦合的组件形成一套标准。

除了完整的 SVG 推荐标准，W3C 工作组还在 2003 年推出了 SVG Tiny 和 SVG Basic。这两个配置文件主要瞄准移动设备。首先 SVG Tiny 主要是为性能低的小设备生成图元，而 SVG Basic 实现了完整版 SVG 里的很多功能，只是舍弃了难以实现的大型渲染（比如动画）。2008 年，SVG Tiny1.2 成为 W3C 推荐标准。

另外还有一些关于 SVG 打印规格的项目，增加对多页面和颜色管理的支持，但是这项工作已经终止。

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch", "Web/SVG/Tutorials/SVG_from_scratch/Getting_started") }}
