---
title: webglcontextlost
slug: Web/API/HTMLCanvasElement/webglcontextlost_event
tags:
  - Event
  - WebGL
  - WebGLContextEvent
translation_of: Web/API/HTMLCanvasElement/webglcontextlost_event
---
{{APIRef}}

Das **`webglcontextlost`** Event der [WebGL API](/de/docs/Web/API/WebGL_API) wird ausgelöst, wenn der User-Agent feststellt, dass der mit dem {{domxref("WebGLRenderingContext")}}-Objekt verknüpften Drawing Buffer verloren gegangen ist.

| Bubbles    | Ja                                           |
| ---------- | -------------------------------------------- |
| Cancelable | Ja                                           |
| Zielobjekt | {{domxref("HTMLCanvasElement")}} |
| Interface  | {{domxref("WebGLContextEvent")}} |

## Beispiel

Mit der Hilfe der {{domxref("WEBGL_lose_context")}} Extension kann das `webglcontextlost` Event simuliert werden:

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");

canvas.addEventListener("webglcontextlost", function(e) {
  console.log(e);
}, false);

gl.getExtension('WEBGL_lose_context').loseContext();

// "webglcontextlost" event is logged.
```

## Vererbung

Das `webglcontextlost` Event implementiert das {{domxref("WebGLContextEvent")}} Interface, welches die Eigenschaften und Methoden von {{domxref("Event")}} erbt.

{{InheritanceDiagram('','','', 'WebGLContextEvent')}}

## Spezifikationen

| Spezifikation                                                        | Status                   | Hinweis                  |
| -------------------------------------------------------------------- | ------------------------ | ------------------------ |
| {{SpecName('WebGL', '#5.15.2', 'webglcontextlost')}} | {{Spec2('WebGL')}} | Grundlegende Definition. |

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLContextEvent")}}
- {{domxref("WebGLRenderingContext.isContextLost()")}}
- {{domxref("WEBGL_lose_context")}}, {{domxref("WEBGL_lose_context.loseContext()")}}, {{domxref("WEBGL_lose_context.restoreContext()")}}
