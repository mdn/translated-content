---
title: performance.now()
slug: Web/API/Performance/now
---

{{APIRef("High Resolution Timing")}}

El método **`performance.now()`** devuelve un {{domxref("DOMHighResTimeStamp")}}, medido en milisegundos, con una precisión de cinco milésimas de segundo (5 microsegundos).

El valor devuelto representa el tiempo transcurrido desde el **tiempo de origen** (la propiedad {{domxref("PerformanceTiming.navigationStart")}}). En un web worker, el tiempo de origen es el momento en que se crea su contexto de ejecución (ej. hilo o proceso). En una ventana, es el momento en que el usuario navegó (o confirmó la navegación, si la confirmación fue necesaria) al documento actual. Tenga en cuenta los siguientes puntos:

- En los workers dedicados creados desde un contexto {{domxref("Window")}}, el valor del worker será inferior a `performance.now()` en la pestaña que generó el worker. Solía ser igual que `t0` del contexto principal, pero fue cambiado.
- En service workers compartidos, el valor en el worker podría ser superior al del contexto principal debido a que la ventana puede ser creada después de esos workers.

## Sintaxis

```
t = performance.now();
```

## Ejemplo

```js
var t0 = performance.now();
hacerAlgo();
var t1 = performance.now();
console.log("La llamada a hacerAlgo tardó " + (t1 - t0) + " milisegundos.");
```

A diferencia de otros datos de tiempo disponibles en JavaScript (por ejemplo [`Date.now`](/es/docs/JavaScript/Reference/Global_Objects/Date/now)), las marcas de tiempo devueltas por `Performance.now()` no se limitan a resoluciones de un milisegundo. En su lugar, representan tiempos como números en punto flotante con hasta una precisión de microsegundos.

También a diferencia de `Date.now()`, los valores devueltos por `Performance.now()`siempre se incrementan a un ritmo constante, independientemente del sistema de reloj (que podría estar ajustado manualmente o manipulado por software como NTP). De todos modos, `performance.timing.navigationStart + performance.now()`será aproximadamente igual a `Date.now()`.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- [When milliseconds are not enough: performance.now()](http://updates.html5rocks.com/2012/08/When-milliseconds-are-not-enough-performance-now)de HTML5 Rocks.
