---
title: Element.onlostpointercapture
slug: Web/API/Element/lostpointercapture_event
---

{{ APIRef }}

`onlostpointercapture` es una propiedad [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) de la interfaz {{domxref("Element")}} que devuelve el controlador de eventos (función) para el evento tipo [`lostpointercapture`](/es/docs/Web/Reference/Events/lostpointercapture) .

## Síntaxis

```js
var lostCaptureHandler = target.onlostpointercpature;
```

### Valor de Retorno

- `lostCaptureHandler`
  - : El controlador de eventos _lostpointercapture_ para el elemento `target`.

## Ejemplo

```js
<html>
<script>
function overHandler(ev) {
 // Determine the target event's lostpointercapture handler
 var lostCaptureHandler = ev.target.onlostpointercapture;
}
function init() {
 var el=document.getElementById("target");
 el.onpointerover = overHandler;
}
</script>
<body onload="init();">
<div id="target"> Touch me ... </div>
</body>
</html>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [`lostpointercapture`](/es/docs/Web/Reference/Events/lostpointercapture)
