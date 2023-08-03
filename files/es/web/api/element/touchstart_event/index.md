---
title: GlobalEventHandlers.ontouchstart
slug: Web/API/Element/touchstart_event
---

{{APIRef}}

Un {{domxref("GlobalEventHandlers","global event handler")}} para el evento [`touchstart`](/es/docs/Web/Reference/Events/touchstart).

{{SeeCompatTable}}

> **Nota:** Este atributo _no_ ha sido estandarizado formalmente. Está especificado en la especificación [Touch Events – Level 2](https://w3c.github.io/touch-events/) Draft y no en [Touch Events](https://www.w3.org/TR/touch-events/) Recommendation. Este atributo no está totalmente implementado.

## Sintaxis

```js
var startHandler = cualquierElemento.ontouchstart;
```

### Valor devuelto

- `startHandler`
  - : El manejador del evento `touchstart` para el elemento `cualquierElemento`.

## Ejemplo

Este ejemplo muestra dos formas de utilizar `ontouchstart` para establecer un manejador de evento `touchstart`.

```js
<html>
<script>
function startTouch(ev) {
 // Procesar el evento
}
function init() {
 var el=document.getElementById("target1");
 el.ontouchstart = startTouch;
}
</script>
<body onload="init();">
<div id="target1"> Tócame ... </div>
<div id="target2" ontouchstart="startTouch(event)"> Tócame ... </div>
</body>
</html>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [`touchstart`](/es/docs/Web/Reference/Events/touchstart)
