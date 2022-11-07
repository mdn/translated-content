---
title: GlobalEventHandlers.ontouchstart
slug: Web/API/Element/touchstart_event
translation_of: Web/API/GlobalEventHandlers/ontouchstart
original_slug: Web/API/GlobalEventHandlers/ontouchstart
---

{{APIRef}}

Un {{domxref("GlobalEventHandlers","global event handler")}} para el evento {{event("touchstart")}}.

{{SeeCompatTable}}

> **Nota:** Este atributo _no_ ha sido estandarizado formalmente. Está especificado en la especificación {{SpecName('Touch Events 2')}} {{Spec2('Touch Events 2')}} y no en {{SpecName('Touch Events')}} {{Spec2('Touch Events')}}. Este atributo no está totalmente implementado.

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

- {{ event("touchstart") }}
