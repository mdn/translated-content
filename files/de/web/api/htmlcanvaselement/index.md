---
title: HTMLCanvasElement
slug: Web/API/HTMLCanvasElement
tags:
  - API
  - Canvas
  - Graphiken
  - WebGL
translation_of: Web/API/HTMLCanvasElement
---
{{APIRef("Canvas API")}}

Das **`HTMLCanvasElement`** interface bietet Eigenschaften und Methoden zum Manipulieren des Layouts und der Darstellung des `<canvas>`-Elements. Das `HTMLCanvasElement` interface erbt außerdem Eigenschaften und Methoden des {{domxref("HTMLElement")}} interface.

## Eigenschaften

_Erbt Eigenschaften von seinem Elternelement,_ _{{domxref("HTMLElement")}}._

- {{domxref("HTMLCanvasElement.height")}}
  - : Ein positiver `integer`, der das {{htmlattrxref("height", "canvas")}} HTML-Attribut des {{HTMLElement("canvas")}} Elements in CSS-Pixeln repräsentiert. Wenn nicht definiert oder wenn es auf einen nicht erlaubten Wert (z.B. einen negativen Wert) gesetzt wird, wird der Standardwert **150** verwendet.
- {{domxref("HTMLCanvasElement.mozOpaque")}} {{non-standard_inline}}
  - : Ein {{jsxref("Boolean")}}, der das {{htmlattrxref("moz-opaque", "canvas")}} HTML-Attribut des {{HTMLElement("canvas")}} Elements repräsentiert. Es sagt dem canvas, ob auf Transparenz verzichtet werden soll. Falls `true`, kann das Zeichnen auf dem canvas beschleunigt werden.
- {{domxref("HTMLCanvasElement.width")}}
  - : Ein positiver `integer`, der das {{htmlattrxref("width", "canvas")}} HTML-Attribut des {{HTMLElement("canvas")}} Elements in CSS-Pixeln anzeigt. Wenn nicht definiert oder wenn es auf einen nicht erlaubten Wert (z.B. einen negativen Wert) gesetzt wird, wird der Standardwert **300** verwendet.

## Methoden

_Erbt Eigenschaften von seinem Elternelement,_ _{{domxref("HTMLElement")}}._

- {{domxref("HTMLCanvasElement.captureStream()")}} {{experimental_inline}}
  - : Gibt ein {{domxref("CanvasCaptureMediaStream")}} zurück, dieses ist ein Echtzeit-Video der Oberfläche des canvas.
- {{domxref("HTMLCanvasElement.getContext()")}}
  - : Gibt einen context des canvas zurück oder `null`, falls die context-ID nicht unterstützt wird. Ein context ermöglicht es, auf dem canvas zu zeichnen. Der Aufruf dieser Methode mit `"2d"` gibt ein {{domxref("CanvasRenderingContext2D")}} Objekt zurück, während er mit `"experimental-webgl"` oder `"webgl"` ein {{domxref("WebGLRenderingContext")}} Objekt zurückgibt. Dieser context ist nur bei Browsern möglich, die [WebGL](/de/docs/Web/WebGL) unterstützen.
- {{domxref("HTMLCanvasElement.toDataURL()")}}
  - : Returns a data-URL containing a representation of the image in the format specified by the `type` parameter (defaults to `png`). The returned image is in a resolution of 96dpi.
- {{domxref("HTMLCanvasElement.toBlob()")}}
  - : Creates a {{domxref("Blob")}} object representing the image contained in the canvas; this file may be cached on the disk or stored in memory at the discretion of the user agent.
- {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}} {{experimental_inline}}
  - : Transfers control to an {{domxref("OffscreenCanvas")}} object, either on the main thread or on a worker.
- {{domxref("HTMLCanvasElement.mozGetAsFile()")}} {{non-standard_inline}} {{deprecated_inline}}
  - : Returns a {{domxref("File")}} object representing the image contained in the canvas; this file is a memory-based file, with the specified `name`. If `type` is not specified, the image type is `image/png`.

## Spezifikationen

| Spezifikation                                                                                                                                        | Status                                               | Kommentar                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Media Capture DOM Elements', '#html-media-element-media-capture-extensions', 'HTMLCanvasElement')}} | {{Spec2('Media Capture DOM Elements')}} | Adds the method `captureStream()`.                                                                                                                                                                                      |
| {{SpecName('HTML WHATWG', "#the-canvas-element", "HTMLCanvasElement")}}                                                     | {{Spec2('HTML WHATWG')}}                     | The method `getContext()` now returns a {{domxref("RenderingContext")}} rather than an opaque `object`. The methods `probablySupportsContext()`, `setContext()` and `transferControlToProxy()`have been added. |
| {{SpecName('HTML5.1', "scripting-1.html#the-canvas-element", "HTMLCanvasElement")}}                                     | {{Spec2('HTML5.1')}}                         |                                                                                                                                                                                                                         |
| {{SpecName('HTML5 W3C', "scripting-1.html#the-canvas-element", "HTMLCanvasElement")}}                                     | {{Spec2('HTML5 W3C')}}                         | Initial definition.                                                                                                                                                                                                     |

## Browserkompatibilität

{{Compat}}

\[1] Opera Mini 5.0 and later has partial support.

\[2] Support for the third parameter, has been added in Gecko 25 only: when used with the `"image/jpeg"` type, this argument specifies the image quality.

\[3] This feature is behind a feature preference setting. In about:config, set `gfx.offscreencanvas.enabled` to `true`.

## Siehe auch

- HTML element implementing this interface: {{HTMLElement("canvas")}}.
