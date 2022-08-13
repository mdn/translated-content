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
{{ ApiRef("DOM") }}

`ongotpointercapture` es una propiedad {{event("Event_handlers", "event handler")}} de la interfaz {{domxref("Element")}} que devuelve el controlador de eventos (función) para el evento tipo {{event("gotpointercapture")}}.

## Síntasix

    var gotCaptureHandler = target.ongotpointercpature;

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

| Especificación                                                                                                           | Estado                                   | Comentario          |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------- |
| {{SpecName('Pointer Events 2','#widl-Element-ongotpointercapture', 'ongotpointercapture')}} | {{Spec2('Pointer Events 2')}} | Versión no estable. |
| {{SpecName('Pointer Events', '#widl-Element-ongotpointercapture', 'ongotpointercapture')}} | {{Spec2('Pointer Events')}}     | Definición inicial. |

## Compatibilidad en los Navegadores

{{Compat("api.GlobalEventHandlers.ongotpointercapture")}}

## Ver también

- {{ event("gotpointercapture") }}
