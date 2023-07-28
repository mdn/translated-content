---
title: HTMLCanvasElement
slug: Web/API/HTMLCanvasElement
---

{{APIRef("Canvas API")}}

The **`HTMLCanvasElement`** interface provides properties and methods for manipulating the layout and presentation of canvas elements. The `HTMLCanvasElement` interface also inherits the properties and methods of the {{domxref("HTMLElement")}} interface.

{{InheritanceDiagram(600, 120)}}

## Properties

_Inherits properties from its parent,_ _{{domxref("HTMLElement")}}._

- {{domxref("HTMLCanvasElement.height")}}
  - : Is a positive `integer` reflecting the [`height`](/pt-BR/docs/Web/HTML/Element/canvas#height) HTML attribute of the {{HTMLElement("canvas")}} element interpreted in CSS pixels. When the attribute is not specified, or if it is set to an invalid value, like a negative, the default value of `150` is used.
- {{domxref("HTMLCanvasElement.mozOpaque")}} {{non-standard_inline}}
  - : Is a {{jsxref("Boolean")}} reflecting the [`moz-opaque`](/pt-BR/docs/Web/HTML/Element/canvas#moz-opaque) HTML attribute of the {{HTMLElement("canvas")}} element. It lets the canvas know whether or not translucency will be a factor. If the canvas knows there's no translucency, painting performance can be optimized.
- {{domxref("HTMLCanvasElement.width")}}
  - : Is a positive `integer` reflecting the [`width`](/pt-BR/docs/Web/HTML/Element/canvas#width) HTML attribute of the {{HTMLElement("canvas")}} element interpreted in CSS pixels. When the attribute is not specified, or if it is set to an invalid value, like a negative, the default value of `300` is used.
- {{domxref("HTMLCanvasElement.mozPrintCallback")}}{{non-standard_inline}}
  - : Is a `function` that is Initially null, Web content can set this to a JavaScript function that will be called if the page is printed. This function can then redraw the canvas at a higher resolution that is suitable for the printer being used. [See this blog post.](https://blog.mozilla.org/labs/2012/09/a-new-way-to-control-printing-output/)

## Methods

_Inherits methods from its parent,_ _{{domxref("HTMLElement")}}._

- {{domxref("HTMLCanvasElement.captureStream()")}} {{experimental_inline}}
  - : Returns a {{domxref("CanvasCaptureMediaStream")}} that is a real-time video capture of the surface of the canvas.
- {{domxref("HTMLCanvasElement.getContext()")}}
  - : Returns a drawing context on the canvas, or null if the context ID is not supported. A drawing context lets you draw on the canvas. Calling getContext with `"2d"` returns a {{domxref("CanvasRenderingContext2D")}} object, whereas calling it with `"experimental-webgl"` (or `"webgl"`) returns a {{domxref("WebGLRenderingContext")}} object. This context is only available on browsers that implement [WebGL](/pt-BR/docs/Web/WebGL).
- {{domxref("HTMLCanvasElement.toDataURL()")}}
  - : Returns a data-URL containing a representation of the image in the format specified by the `type` parameter (defaults to `png`). The returned image is in a resolution of 96dpi.
- {{domxref("HTMLCanvasElement.toBlob()")}}
  - : Creates a {{domxref("Blob")}} object representing the image contained in the canvas; this file may be cached on the disk or stored in memory at the discretion of the user agent.
- {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}} {{experimental_inline}}
  - : Transfers control to an {{domxref("OffscreenCanvas")}} object, either on the main thread or on a worker.
- {{domxref("HTMLCanvasElement.mozGetAsFile()")}} {{non-standard_inline}} {{deprecated_inline}}
  - : Returns a {{domxref("File")}} object representing the image contained in the canvas; this file is a memory-based file, with the specified `name`. If `type` is not specified, the image type is `image/png`.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- HTML element implementing this interface: {{HTMLElement("canvas")}}.
