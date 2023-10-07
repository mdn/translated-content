---
title: Element.ongotpointercapture
slug: Web/API/Element/gotpointercapture_event
---

{{ APIRef }}

`ongotpointercapture` es una propiedad [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) de la interfaz {{domxref("Element")}} que devuelve el controlador de eventos (función) para el evento tipo [`gotpointercapture`](/es/docs/Web/Reference/Events/gotpointercapture).

## Síntaxis

```js
var gotCaptureHandler = target.ongotpointercpature;
```

### Valor de Retorno

- `gotCaptureHandler`
  - : El controlador de eventos gotpointercapture para el elemento target.

## Ejemplo

```js
<html>
<script>
function overHandler(ev) {
 // Determine the target event's gotpointercapture handler
 var gotCaptureHandler = ev.target.ongotpointercapture;
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

- [`gotpointercapture`](/es/docs/Web/Reference/Events/gotpointercapture)
