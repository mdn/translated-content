---
title: webglcontextcreationerror
slug: Web/API/HTMLCanvasElement/webglcontextcreationerror_event
tags:
  - Event
  - WebGL
  - WebGLContextEvent
translation_of: Web/API/HTMLCanvasElement/webglcontextcreationerror_event
---
{{APIRef}}

Das **`webglcontextcreationerror`** Event der [WebGL API](/de/docs/Web/API/WebGL_API) wird ausgelöst, wenn der User-Agent nicht in der Lage ist einen {{domxref("WebGLRenderingContext")}} zu erzeugen.

Das Event hat die Eigenschaft {{domxref("WebGLContextEvent.statusMessage")}}, die einen plattformabhängigen String mit weiteren Informationen über den Fehler enthält.

| Bubbles    | Ja                                           |
| ---------- | -------------------------------------------- |
| Cancelable | Ja                                           |
| Zielobjekt | {{domxref("HTMLCanvasElement")}} |
| Interface  | {{domxref("WebGLContextEvent")}} |

## Beispiel

```js
var canvas = document.getElementById("canvas");

canvas.addEventListener("webglcontextcreationerror", function(e) {
  console.log(e.statusMessage || "Unknown error");
}, false);

var gl = canvas.getContext("webgl");
// logs statusMessage or "Unknown error" if unable to create WebGL context
```

## Vererbung

Das `webglcontextcreationerror` Event implementiert das {{domxref("WebGLContextEvent")}} Interface, welches die Eigenschaften und Methoden von {{domxref("Event")}} erbt.

{{InheritanceDiagram('','','', 'WebGLContextEvent')}}

## Spezifikationen

| Spezifikation                                                                    | Status                   | Hinweis                  |
| -------------------------------------------------------------------------------- | ------------------------ | ------------------------ |
| {{SpecName('WebGL', '#5.15.4', 'webglcontextcreationerror')}} | {{Spec2('WebGL')}} | Grundlegende Definition. |

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLContextEvent")}}
- {{domxref("WebGLRenderingContext.isContextLost()")}}
- {{domxref("WEBGL_lose_context")}}, {{domxref("WEBGL_lose_context.loseContext()")}}, {{domxref("WEBGL_lose_context.restoreContext()")}}
