---
title: ImageBitmap
slug: Web/API/ImageBitmap
tags:
  - API
  - Canvas
  - Imagen de mapa de bits
  - Referencia
translation_of: Web/API/ImageBitmap
---
{{APIRef("Canvas API")}}

The **`ImageBitmap`** interface represents a bitmap image which can be drawn to a {{HTMLElement("canvas")}} without undue latency. It can be created from a variety of source objects using the {{domxref("ImageBitmapFactories.createImageBitmap", "createImageBitmap()")}} factory method. `ImageBitmap` provides an asynchronous and resource efficient pathway to prepare textures for rendering in WebGL.

## Properties

- {{domxref("ImageBitmap.height")}} {{readonlyInline}}
  - : Is an `unsigned` `long` representing the height, in CSS pixels, of the `ImageData`.
- {{domxref("ImageBitmap.width")}} {{readonlyInline}}
  - : Is an `unsigned` `long` representing the width, in CSS pixels, of the `ImageData`.

## Methods

- {{domxref("ImageBitmap.close()")}}
  - : Disposes of all graphical resources associated with an `ImageBitmap`.

## Specifications

| Specification                                                                                    | Status                           | Comment |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', "webappapis.html#imagebitmap", "ImageBitmap")}} | {{Spec2('HTML WHATWG')}} |         |

## Browser compatibility

{{Compat("api.ImageBitmap")}}

## See also

- {{domxref("ImageBitmapFactories.createImageBitmap()")}}
- {{domxref("CanvasRenderingContext2D.drawImage()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("OffScreenCanvas.transferToImageBitmap()")}}
