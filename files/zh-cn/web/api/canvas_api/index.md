---
title: Canvas API
slug: Web/API/Canvas_API
l10n:
  sourceCommit: e811fc31b67e145c5882e8e3f128d1938c627a51
---

{{DefaultAPISidebar("Canvas API")}}

**Canvas API** 提供了一个通过 [JavaScript](/zh-CN/docs/Web/JavaScript) 和 [HTML](/zh-CN/docs/Web/HTML) 的 {{HtmlElement("canvas")}} 元素来绘制图形的方式。它可以用于动画、游戏画面、数据可视化、图片编辑以及实时视频处理等方面。

Canvas API 主要聚焦于 2D 图形。而同样使用 `<canvas>` 元素的 [WebGL API](/zh-CN/docs/Web/API/WebGL_API) 则用于绘制硬件加速的 2D 和 3D 图形。

## 基础示例

这个简单示例在画布上绘制一个绿色的长方形。

### HTML

```html
<canvas id="canvas"></canvas>
```

### JavaScript

{{domxref("Document.getElementById()")}} 方法获取 HTML `<canvas>` 元素的引用。接着，{{domxref("HTMLCanvasElement.getContext()")}} 方法获取这个元素的上下文——稍后将在此处渲染绘制的内容。

由 {{domxref("CanvasRenderingContext2D")}} 接口完成实际的绘制。{{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} 属性让长方形变成绿色。{{domxref("CanvasRenderingContext2D.fillRect()", "fillRect()")}} 方法将它的左上角放在 (10, 10)，把它的大小设置成宽 150 个单位高 100 个单位。

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
- {{domxref("CanvasPattern")}}
- {{domxref("ImageBitmap")}}
- {{domxref("ImageData")}}
- {{domxref("TextMetrics")}}
- {{domxref("OffscreenCanvas")}}
- {{domxref("Path2D")}} {{experimental_inline}}
- {{domxref("ImageBitmapRenderingContext")}} {{experimental_inline}}

> [!NOTE]
> [WebGL](/zh-CN/docs/Web/API/WebGL_API) 包含了与 `WebGLRenderingContext` 有关的接口的参考。

> [!NOTE]
> {{domxref("OffscreenCanvas")}} 也在 web worker 中可用。

{{domxref("CanvasCaptureMediaStream")}} 也是一个相关的接口。

## 教程与指导

- [Canvas 教程](/zh-CN/docs/Web/API/Canvas_API/Tutorial)
  - : 一个综合性教程，涵盖了 Canvas API 的基本用法与高级特性。
- [深入 HTML5 Canvas](https://joshondesign.com/p/books/canvasdeepdive/title.html)
  - : 一个手把手的、长度与书本相当的 Canvas API 和 WebGL 介绍。
- [Canvas 手册](https://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html)
  - : Canvas API 的便捷参考。
- [使用 canvas 操控视频](/zh-CN/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
  - : 结合 {{HTMLElement("video")}} 和 {{HTMLElement("canvas")}} 来实现视频数据的实时操控。

## 库

Canvas API 是非常强大的，但不总是很容易使用。以下列出的库能够使创建基于 canvas 的项目更快、更简单。

- [EaselJS](https://www.createjs.com/easeljs)：使制作游戏、创作类艺术和其他侧重图形化的项目更容易的开源 canvas 库。
- [Fabric.js](http://fabricjs.com)：具有 SVG 解析功能的开源 canvas 库。
- [heatmap.js](https://www.patrick-wied.at/static/heatmapjs/)：基于 canvas 的数据热力图的开源库。
- [JavaScript InfoVis Toolkit](https://philogb.github.io/jit/)：创建交互式数据可视化。
- [Konva.js](https://konvajs.org/)：用于桌面端和移动端应用的 2D canvas 库。
- [p5.js](https://p5js.org/)：包含给艺术家、设计师、教育者、初学者使用的完整的 canvas 绘制功能。
- [Paper.js](http://paperjs.org/)：运行于 HTML Canvas 上的开源矢量图形脚本框架。
- [Phaser](https://phaser.io/)：用于基于 Canvas 和 WebGL 的浏览器游戏的快速、自由、有趣的开源框架。
- [Pts.js](https://ptsjs.org)：用于 canvas 和 SVG 的创意编码和可视化的库。
- [Rekapi](https://github.com/jeremyckahn/rekapi)：用于 Canvas 动画关键帧的 API。
- [Scrawl-canvas](https://scrawl.rikweb.org.uk/)：用于创建和操控 2D canvas 元素的开源 JavaScript 库。
- [ZIM](https://zimjs.com)：为在 canvas 上进行创意代码编写提供便利性以及相关组件和控件的框架，包括无障碍和数百个色彩缤纷的教程。
- [Sprig](https://github.com/hackclub/sprig)：使用 Canvas 实现的基于图块的游戏的开发库，适合初学者并且开源。

> [!NOTE]
> 与 WebGL 有关的 2D 和 3D 的库请参见 [WebGL API](/zh-CN/docs/Web/API/WebGL_API)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebGL](/zh-CN/docs/Web/API/WebGL_API)
