---
title: Canvas 教程
slug: Web/API/Canvas_API/Tutorial
---

{{DefaultAPISidebar("Canvas API")}}

[**`<canvas>`**](/zh-CN/docs/Web/HTML/Element/canvas)是一个可以使用脚本 (通常为[JavaScript](/zh-CN/docs/Web/JavaScript)) 来绘制图形的 [HTML](/zh-CN/docs/Web/HTML) 元素。例如，它可以用于绘制图表、制作图片构图或者制作简单的动画。右边的图片展示了一些 `<canvas>` 的实现示例，在这个教程后面我们将看到。

本篇教程从一些基础开始，描述了如何使用\<canvas>元素来绘制 2D 图形。教程中提供的例子，会让你明白可以用 canvas 做什么，也会提供一些代码片段来帮助你开始构建自己的内容。

`<canvas>` 最早由 Apple 引入 WebKit，用于 Mac OS X 的 Dashboard，随后被各个浏览器实现。如今，所有主流的浏览器都支持它。

## 开始之前

使用 `<canvas>` 元素不是非常难，但你需要一些基本的[HTML](/zh-CN/docs/Web/HTML)和[JavaScript](/zh-CN/docs/Web/JavaScript)知识。除一些过时的浏览器不支持`<canvas>` 元素外，所有的新版本主流浏览器都支持它。Canvas 的默认大小为 300 像素 ×150 像素（宽 × 高，像素的单位是 px）。但是，可以使用 HTML 的高度和宽度属性来自定义 Canvas 的尺寸。为了在 Canvas 上绘制图形，我们使用一个 JavaScript 上下文对象，它能动态创建图像（creates graphics on the fly）。

## 本教程包含

- [基本用法](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_usage)
- [绘制图形](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)
- [使用样式与颜色](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
- [绘制文本](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- [使用图像](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Using_images)
- [变形](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Transformations)
- [合成和剪辑](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Compositing)
- [基本动画](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_animations)
- [高级动画](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Advanced_animations)
- [像素处理](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
- [优化 canvas](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas)
- [终曲](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Finale)

## 参见

- [Canvas 专题页](/zh-CN/docs/Web/API/Canvas_API)
- [Adobe Illustrator to Canvas plug-in](http://visitmix.com/labs/ai2canvas/)
- [HTML5 Canvas 教程](https://www.html5canvastutorials.com/)

{{ Next("Web/API/Canvas_API/Tutorial/Basic_usage") }}
