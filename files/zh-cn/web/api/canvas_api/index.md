---
title: Canvas
slug: Web/API/Canvas_API
---

{{DefaultAPISidebar("Canvas API")}}

**Canvas API** 提供了一个通过[JavaScript](/zh-CN/docs/Web/JavaScript) 和 [HTML](/zh-CN/docs/Web/HTML)的{{HtmlElement("canvas")}}元素来绘制图形的方式。它可以用于动画、游戏画面、数据可视化、图片编辑以及实时视频处理等方面。

Canvas API 主要聚焦于 2D 图形。而同样使用`<canvas>`元素的 [WebGL API](/zh-CN/docs/Web/WebGL) 则用于绘制硬件加速的 2D 和 3D 图形。

## 基础示例

这个简单的例子在画布绘制一个绿色的长方形。

### HTML

```html
<canvas id="canvas"></canvas>
```

### JavaScript

{{domxref("Document.getElementById()")}} 方法获取 HTML `<canvas>` 元素的引用。接着，{{domxref("HTMLCanvasElement.getContext()")}} 方法获取这个元素的 context——图像稍后将在此被渲染。

由 {{domxref("CanvasRenderingContext2D")}} 接口完成实际的绘制。{{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} 属性让长方形变成绿色。{{domxref("CanvasRenderingContext2D.fillRect()", "fillRect()")}} 方法将它的左上角放在 (10, 10)，把它的大小设置成宽 150 高 100。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);
```

### 结果

{{ EmbedLiveSample('基础示例', 700, 180) }}

## 参考

- {{domxref("HTMLCanvasElement")}}
- {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasGradient")}}
- {{domxref("CanvasImageSource")}}
- {{domxref("CanvasPattern")}}
- {{domxref("ImageBitmap")}}
- {{domxref("ImageData")}}
- {{domxref("RenderingContext")}}
- {{domxref("TextMetrics")}}
- {{domxref("OffscreenCanvas")}}{{experimental_inline}}
- {{domxref("Path2D")}}{{experimental_inline}}
- {{domxref("ImageBitmapRenderingContext")}}{{experimental_inline}}

> **备注：** 与 `WebGLRenderingContext` 有关的接口请参考 [WebGL](/zh-CN/docs/Web/WebGL)。

{{domxref("CanvasCaptureMediaStream")}} 也与之相关。

## 教程与指导

- [Canvas 教程](/zh-CN/docs/Web/Guide/HTML/Canvas_tutorial)
  - : 一个综合性教程，包括了\<canvas>的基本用法与高级功能。
- [代码片段：Canvas](/zh-CN/Add-ons/Code_snippets/Canvas)
  - : 一些面向开发者的 \<canvas> 代码片段。
- [深入 HTML5 Canvas](http://joshondesign.com/p/books/canvasdeepdive/title.html)
  - : 一个手把手的、长度与书本相若的 Canvas API 和 WebGL 介绍。
- [使用 canvas 绘制视频](/zh-CN/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
  - : 结合{{HTMLElement("video")}}和 {{HTMLElement("canvas")}}来实现实时操作视频数据。

## 库

Canvas API 是非常强大的，但不总是很容易使用。以下列出的库能够使创建基于 canvas 的项目更快和更简单。

- [EaselJS](http://www.createjs.com/easeljs) 使制作游戏、创作类艺术和其他侧重图形项目更容易的开源 canvas 库
- [Fabric.js](http://fabricjs.com) 具有 SVG 解析功能的开源 canvas 库
- [heatmap.js](https://www.patrick-wied.at/static/heatmapjs/) 基于 canvas 的热点图的开源库
- [JavaScript InfoVis Toolkit](http://thejit.org/) 创建交互式的 2D Canvas 数据可视化
- [Konva.js](https://konvajs.github.io/) 用于桌面端和移动端应用的 2D canvas 库
- [p5.js](https://p5js.org/) 包含给艺术家、设计师、教育者、初学者使用的完整的 canvas 绘制功能
- [Paper.js](http://paperjs.org/) 运行于 HTML5 Canvas 上的开源矢量图形脚本框架
- [Phaser](https://phaser.io/) 用于基于 Canvas 和 WebGL 的浏览器尤其的快速、自由、有趣的开源框架
- [Processing.js](http://processingjs.org) 用于处理可视化语言
- [Pts.js](https://ptsjs.org/) 在 canvas 和 SVG 中进行创意性代码写作和可视化的库
- [Rekapi](https://github.com/jeremyckahn/rekapi) 关键帧动画库
- [Scrawl-canvas](http://scrawl.rikweb.org.uk/) 用来创建和编辑 2D 图形的开源库
- [ZIM](http://zimjs.com/) 框架为 canvas 上的代码创意性提供方便性、组件和可控性，包括可用性和数百个色彩缤纷的教程

> **备注：** 与 WebGL 有关的 2D 和 3D 的库请参考 [WebGL](/zh-CN/docs/Web/WebGL)。

## 标准

{{Specifications}}

## 浏览器兼容性

Mozilla 程序从 Gecko 1.8 ([Firefox 1.5](/zh-CN/docs/Firefox_1.5_for_developers)) 开始支持 `<canvas>`。它首先是由 Apple 引入的，用于 OS X Dashboard 和 Safari。Internet Explorer 从 IE9 开始支持`<canvas>` ，更旧版本的 IE 中，页面可以通过引入 Google 的 [Explorer Canvas](https://github.com/arv/explorercanvas) 项目中的脚本来获得`<canvas>`支持。Google Chrome 和 Opera 9+ 也支持 `<canvas>`。

## 其他相关

- [WebGL](/zh-CN/docs/Web/WebGL)
