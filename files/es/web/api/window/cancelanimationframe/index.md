---
title: window.cancelAnimationFrame()
slug: Web/API/Window/cancelAnimationFrame
---

{{APIRef}}{{SeeCompatTable}}

## Resumen

Cancela la petición de animación previamente programada a través de {{domxref("window.requestAnimationFrame()")}}.

## Sintaxis

```js
window.cancelAnimationFrame(requestID);
```

> **Nota:** Antes de Firefox 23, la función es independiente del proveedor con el prefijo `window.mozCancelAnimationFrame()`. Consulte la tabla de compatibilidad, a continuación, para otras implementaciones de navegador.

### Parámetros

- `ID de la petición`
  - : El valor del ID regresado por la llamada a {{domxref("window.requestAnimationFrame()")}} que solicitó una llamada de vuelta.

## Ejemplos

```js
var requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

var cancelAnimationFrame =
  window.cancelAnimationFrame || window.mozCancelAnimationFrame;

var start = window.mozAnimationStartTime; // Only supported in FF. Other browsers can use something like Date.now().

var myReq;

function step(timestamp) {
  var progress = timestamp - start;
  d.style.left = Math.min(progress / 10, 200) + "px";
  if (progress < 2000) {
    myReq = requestAnimationFrame(step);
  }
}
myReq = requestAnimationFrame(step);

window.cancelAnimationFrame(myReq);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{domxref("window.mozAnimationStartTime")}}
- {{domxref("window.requestAnimationFrame()")}}
