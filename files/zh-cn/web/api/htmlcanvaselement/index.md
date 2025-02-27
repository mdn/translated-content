---
title: HTMLCanvasElement
slug: Web/API/HTMLCanvasElement
---

{{APIRef("Canvas API")}}

**`HTMLCanvasElement`**接口提供用于操纵{{HtmlElement("canvas")}}元素的布局和表示的属性和方法。 **`HTMLCanvasElement`**接口还继承了{{domxref("HTMLElement")}}接口的属性和方法。

{{InheritanceDiagram(600, 120)}}

## 属性

_从其父项{{domxref("HTMLElement")}}继承属性。_

- {{domxref("HTMLCanvasElement.height")}}
  - : 是一个正整数，反映了{{HTMLElement("canvas")}} 元素的[`height`](/zh-CN/docs/Web/HTML/Element/canvas#height) HTML 属性，以 CSS 像素表示。如果未指定属性，或者将其设置为无效值（例如负数），则使用默认值 150。
- {{domxref("HTMLCanvasElement.width")}}
  - : 是一个正整数，反映了{{HTMLElement("canvas")}} 元素的[`width`](/zh-CN/docs/Web/HTML/Element/canvas#width) HTML 属性，以 CSS 像素表示。如果未指定属性，或者将其设置为无效值（例如负数），则使用默认值 300。
- {{domxref("HTMLCanvasElement.mozOpaque")}} {{non-standard_inline}} {{deprecated_inline}}
  - : 是反映 {{HTMLElement("canvas")}}元素的[`moz-opaque`](/zh-CN/docs/Web/HTML/Element/canvas#moz-opaque) 属性的{{jsxref("Boolean")}}。它让画布知道半透明性是否会成为一个因素。如果画布知道没有透明感，则可以优化绘画性能。仅基于 Mozilla 的浏览器支持此功能，可以使用标准化的{{domxref("HTMLCanvasElement.getContext()", "canvas.getContext('2d', { alpha: false })")}} 代替。
- {{domxref("HTMLCanvasElement.mozPrintCallback")}}{{non-standard_inline}}
  - : 是最初为空的函数。Web 内容可以将其设置为 JavaScript 函数，该函数将在打印页面时重新绘制画布时调用。调用时，回调将传递一个实现了[MozCanvasPrintState](https://searchfox.org/mozilla-central/search?q=interface%20MozCanvasPrintState&path=HTMLCanvasElement.webidl)接口的“printState”对象。回调可以从 printState 对象获取要绘制的上下文，然后必须在完成时在其上调用 done() 。 `mozPrintCallback` 的目的是在所使用打印机的分辨率下获得较高分辨率的画布渲染。 [请参阅此博客文章](https://blog.mozilla.org/labs/2012/09/a-new-way-to-control-printing-output/)。

## 方法

_从其父项{{domxref("HTMLElement")}}继承方法。_

- {{domxref("HTMLCanvasElement.captureStream()")}} {{experimental_inline}}
  - : 返回{{domxref("CanvasCaptureMediaStream")}} ，它是对画布表面的实时视频捕获。
- {{domxref("HTMLCanvasElement.getContext()")}}
  - : 返回画布上的绘图上下文；如果不支持上下文 ID，则返回 null。绘图上下文可让你在画布上绘图。调用 getContext 传入`"2d"` 可以返回一个{{domxref("CanvasRenderingContext2D")}}对象，也可以传入`"webgl"`（或`"experimental-webgl"`）返回一个{{domxref("WebGLRenderingContext")}} 对象。此上下文仅在实现[WebGL](/zh-CN/docs/Web/API/WebGL_API)的浏览器上可用。
- {{domxref("HTMLCanvasElement.toDataURL()")}}
  - : 返回一个数据 URL，该 URL 包含由类型参数指定的格式的图像（默认为`png`）。返回的图像分辨率为 96dpi。
- {{domxref("HTMLCanvasElement.toBlob()")}}
  - : 创建一个{{domxref("Blob")}} 对象，表示 canvas 中包含的图像；该文件可以由用户代理决定是否缓存在磁盘上或存储在内存中。
- {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}} {{experimental_inline}}
  - : 将控制权转移到主线程或辅助线程上的 {{domxref("OffscreenCanvas")}}对象。

### 过时的方法

- {{domxref("HTMLCanvasElement.mozGetAsFile()")}} {{non-standard_inline}} {{Deprecated_Inline}}
  - : 返回代表画布中包含的图像的 {{domxref("File")}} 对象；该文件是基于内存的文件，具有指定的名称。如果未指定类型，则图像类型为 image/png。

## 事件

使用[`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener)监听这些事件。

- [`webglcontextcreationerror`](/zh-CN/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
  - : 如果用户代理无法创建`WebGLRenderingContext` 或`WebGL2RenderingContext` 上下文，则触发该事件。
- [`webglcontextlost`](/zh-CN/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
  - : 如果用户代理检测到与`WebGLRenderingContext` 或`WebGL2RenderingContext` 对象关联的绘图缓冲区已丢失，则触发此事件。
- [`webglcontextrestored`](/zh-CN/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)
  - : 如果用户代理为`WebGLRenderingContext` 或`WebGL2RenderingContext` 对象恢复绘图缓冲区，则触发该事件。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
