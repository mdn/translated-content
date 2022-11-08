---
title: Element.ongotpointercapture
slug: Web/API/Element/gotpointercapture_event
tags:
  - API
  - Controlador
  - DOM
  - Elemento
  - Eventos Puntero
  - Propiedad
  - Referencia
translation_of: Web/API/GlobalEventHandlers/ongotpointercapture
translation_of_original: Web/API/Element/ongotpointercapture
original_slug: Web/API/GlobalEventHandlers/ongotpointercapture
---

{{ APIRef }}

`ongotpointercapture` es una propiedad {{event("Event_handlers", "event handler")}} de la interfaz {{domxref("Element")}} que devuelve el controlador de eventos (función) para el evento tipo {{event("gotpointercapture")}}.

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

- {{ event("gotpointercapture") }}
