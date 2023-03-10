---
title: HTMLCanvasElement
slug: Web/API/HTMLCanvasElement
---

{{APIRef("Canvas API")}}

**`HTMLCanvasElement`** 介面提供控制 canvas 元素的屬性和方法. `HTMLCanvasElement` 介面也繼承了 {{domxref("HTMLElement")}} 介面的屬性和方法.

{{InheritanceDiagram}}

## 屬性

_從父代繼承的屬性，{{domxref("HTMLElement")}}._

- {{domxref("HTMLCanvasElement.height")}}
  - : Is a positive `integer` reflecting the {{htmlattrxref("height", "canvas")}} HTML attribute of the {{HTMLElement("canvas")}} element interpreted in CSS pixels. When the attribute is not specified, or if it is set to an invalid value, like a negative, the default value of `150` is used.
- {{domxref("HTMLCanvasElement.mozOpaque")}} {{non-standard_inline}}
  - : Is a {{jsxref("Boolean")}} reflecting the {{htmlattrxref("moz-opaque", "canvas")}} HTML attribute of the {{HTMLElement("canvas")}} element. It lets the canvas know whether or not translucency will be a factor. If the canvas knows there's no translucency, painting performance can be optimized.
- {{domxref("HTMLCanvasElement.width")}}
  - : Is a positive `integer` reflecting the {{htmlattrxref("width", "canvas")}} HTML attribute of the {{HTMLElement("canvas")}} element interpreted in CSS pixels. When the attribute is not specified, or if it is set to an invalid value, like a negative, the default value of `300` is used.
- {{domxref("HTMLCanvasElement.mozPrintCallback")}}{{non-standard_inline}}
  - : Is a `function` that is Initially null, Web content can set this to a JavaScript function that will be called if the page is printed. This function can then redraw the canvas at a higher resolution that is suitable for the printer being used. [See this blog post.](https://blog.mozilla.org/labs/2012/09/a-new-way-to-control-printing-output/)

## 方法

_從父代繼承的方法,_ _{{domxref("HTMLElement")}}._

- {{domxref("HTMLCanvasElement.captureStream()")}} {{experimental_inline}}
  - : Returns a {{domxref("CanvasCaptureMediaStream")}} that is a real-time video capture of the surface of the canvas.
- {{domxref("HTMLCanvasElement.getContext()")}}
  - : Returns a drawing context on the canvas, or null if the context ID is not supported. A drawing context lets you draw on the canvas. Calling getContext with `"2d"` returns a {{domxref("CanvasRenderingContext2D")}} object, whereas calling it with `"experimental-webgl"` (or `"webgl"`) returns a {{domxref("WebGLRenderingContext")}} object. This context is only available on browsers that implement [WebGL](/zh-TW/docs/Web/WebGL).
- {{domxref("HTMLCanvasElement.toDataURL()")}}
  - : Returns a data-URL containing a representation of the image in the format specified by the `type` parameter (defaults to `png`). The returned image is in a resolution of 96dpi.
- {{domxref("HTMLCanvasElement.toBlob()")}}
  - : Creates a {{domxref("Blob")}} object representing the image contained in the canvas; this file may be cached on the disk or stored in memory at the discretion of the user agent.
- {{domxref("HTMLCanvasElement.mozGetAsFile()")}} {{non-standard_inline}} {{deprecated_inline}}
  - : Returns a {{domxref("File")}} object representing the image contained in the canvas; this file is a memory-based file, with the specified `name`. If `type` is not specified, the image type is `image/png`.

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## See also

- HTML element implementing this interface: {{HTMLElement("canvas")}}.
