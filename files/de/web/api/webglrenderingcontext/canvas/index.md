---
title: WebGLRenderingContext.canvas
slug: Web/API/WebGLRenderingContext/canvas
tags:
  - Schreibgeschützt
  - WebGL
  - WebGLRenderingContext
translation_of: Web/API/WebGLRenderingContext/canvas
---
{{APIRef("WebGL")}}

Die Eigenschaft **`WebGLRenderingContext.canvas`** ist eine schreibgeschütze Referenz auf das {{domxref("HTMLCanvasElement")}} oder das {{domxref("OffscreenCanvas")}} Objekt, welches mit dem Context verknüpft ist. Es kann auch den Wert {{jsxref("null")}} annehmen, wenn es keinem {{HTMLElement("canvas")}} Element oder {{domxref("OffscreenCanvas")}} Objekt zugeordnet ist.

## Syntax

    gl.canvas;

### Rückgabewert

Entweder ein {{domxref("HTMLCanvasElement")}}, ein {{domxref("OffscreenCanvas")}} Objekt oder {{jsxref("null")}}.

## Beispiele

### Canvas Element

Gegeben ist ein {{HTMLElement("canvas")}} Element:

```html
<canvas id="canvas"></canvas>
```

Du kannst die Eigenschaft `canvas` aus dem `WebGLRenderingContext` auslesen um eine Referenz darauf zu erhalten.

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
gl.canvas; // HTMLCanvasElement
```

### Offscreen Canvas

Beispiel des experimentellen {{domxref("OffscreenCanvas")}} Objektes.

```js
var offscreen = new OffscreenCanvas(256, 256);
var gl = offscreen.getContext('webgl');
gl.canvas; // OffscreenCanvas
```

## Spezifikationen

| Specification                                                                                                            | Status                   | Comment                   |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------ | ------------------------- |
| {{SpecName('WebGL', "#DOM-WebGLRenderingContext-canvas", "WebGLRenderingContext.canvas")}} | {{Spec2('WebGL')}} | Ursprüngliche Definition. |

## Browserkompatibilität

{{Compat("api.WebGLRenderingContext.canvas")}}

## Siehe auch

- {{domxref("CanvasRenderingContext2D.canvas")}}
- {{domxref("OffscreenCanvas")}}
