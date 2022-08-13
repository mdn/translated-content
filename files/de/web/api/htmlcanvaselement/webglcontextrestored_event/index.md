---
title: webglcontextrestored
slug: Web/API/HTMLCanvasElement/webglcontextrestored_event
tags:
  - Event
  - WebGL
  - WebGLContextEvent
translation_of: Web/API/HTMLCanvasElement/webglcontextrestored_event
---
{{APIRef}}

Das **`webglcontextrestored`** Event der [WebGL API](/de/docs/Web/API/WebGL_API) wird ausgelöst, wenn der User-Agent den Drawing Buffer das {{domxref("WebGLRenderingContext")}}-Objekts wiederhergestellt hat.

Wenn der Context wiederhergestellt wurde, sind alle zuvor erzeugten WebGL-Ressourcen wie Texturen und Buffer nicht mehr gültig. Die WebGL-Applikation muss dann neu initalisiert und alle Ressourcen neu erstellt werden.

| Bubbles    | Yes                                          |
| ---------- | -------------------------------------------- |
| Cancelable | Yes                                          |
| Zielobjekt | {{domxref("HTMLCanvasElement")}} |
| Interface  | {{domxref("WebGLContextEvent")}} |

## Beispiel

Mit der Hilfe der {{domxref("WEBGL_lose_context")}} Extension kann das `webglcontextrestored` Event simuliert werden:

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");

canvas.addEventListener("webglcontextrestored", function(e) {
  console.log(e);
}, false);

gl.getExtension('WEBGL_lose_context').restoreContext();

// "webglcontextrestored" event is logged.
```

## Vererbung

Das `webglcontextrestored` Event implementiert das {{domxref("WebGLContextEvent")}} Interface, welches die Eigenschaften und Methoden von {{domxref("Event")}} erbt.

{{InheritanceDiagram('','','', 'WebGLContextEvent')}}

## Spezifikationen

| Spezifikation                                                                | Status                   | Hinweis                  |
| ---------------------------------------------------------------------------- | ------------------------ | ------------------------ |
| {{SpecName('WebGL', '#5.15.3', 'webglcontextrestored')}} | {{Spec2('WebGL')}} | Grundlegende Definition. |

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLContextEvent")}}
- {{domxref("WebGLRenderingContext.isContextLost()")}}
- {{domxref("WEBGL_lose_context")}}, {{domxref("WEBGL_lose_context.loseContext()")}}, {{domxref("WEBGL_lose_context.restoreContext()")}}
