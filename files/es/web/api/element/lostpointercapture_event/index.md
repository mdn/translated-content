---
title: Element.onlostpointercapture
slug: Web/API/Element/lostpointercapture_event
tags:
  - API
  - Controlador de Eventos
  - DOM
  - Eventos Puntero
  - Propiedad
  - Referencia
translation_of: Web/API/GlobalEventHandlers/onlostpointercapture
translation_of_original: Web/API/Element/onlostpointercapture
original_slug: Web/API/GlobalEventHandlers/onlostpointercapture
---
{{ ApiRef("DOM") }}

`onlostpointercapture` es una propiedad {{event("Event_handlers", "event handler")}} de la interfaz {{domxref("Element")}} que devuelve el controlador de eventos (función) para el evento tipo {{event("lostpointercapture")}} .

## Síntasix

    var lostCaptureHandler = target.onlostpointercpature;

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

| Especificación                                                                                                               | Estado                                   | Comentario          |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------- |
| {{SpecName('Pointer Events 2','#widl-Element-onlostpointercapture', 'onlostpointercapture')}} | {{Spec2('Pointer Events 2')}} | Versión no estable. |
| {{SpecName('Pointer Events', '#widl-Element-onlostpointercapture', 'onlostpointercapture')}} | {{Spec2('Pointer Events')}}     | Definición inicial. |

## Compatibilidad en los Navegadores

{{Compat("api.GlobalEventHandlers.onlostpointercapture")}}

## Ver también

- {{ event("lostpointercapture") }}
