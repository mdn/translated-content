---
title: WebGLRenderingContext.canvas
slug: Web/API/WebGLRenderingContext/canvas
---

{{APIRef("WebGL")}}

`Свойство WebGLRenderingContext.canvas` доступно только для чтения. Возвращает ссылку на объекты {{domxref("HTMLCanvasElement")}} или {{domxref("OffscreenCanvas")}} связанные с установленным контекстом отрисовки. Если объект {{HTMLElement("canvas")}} или {{domxref("OffscreenCanvas")}} не связан с контекстом, то возвращается значение {{jsxref("null")}}.

## Syntax

```
gl.canvas;
```

### Return value

Either a {{domxref("HTMLCanvasElement")}} or {{domxref("OffscreenCanvas")}} object or {{jsxref("null")}}.

## Examples

### Canvas element

Given this {{HTMLElement("canvas")}} element:

```html
<canvas id="canvas"></canvas>
```

You can get back a reference to it from the `WebGLRenderingContext` using the `canvas` property:

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
gl.canvas; // HTMLCanvasElement
```

### Offscreen canvas

Example using the experimental {{domxref("OffscreenCanvas")}} object.

```js
var offscreen = new OffscreenCanvas(256, 256);
var gl = offscreen.getContext("webgl");
gl.canvas; // OffscreenCanvas
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CanvasRenderingContext2D.canvas")}}
- {{domxref("OffscreenCanvas")}}
