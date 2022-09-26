---
title: load
slug: Web/API/Window/load_event
tags:
  - Evento
translation_of: Web/API/Window/load_event
original_slug: Web/Events/load
---
{{ APIRef }}

El evento `load` se dispara cuando un recurso y sus recursos dependientes han terminado de cargar.

## Ejemplos

### Window

```html
<script>
  window.addEventListener("load", function(event) {
    console.log("'Todos los recursos terminaron de cargar!");
  });
</script>
```

### Elemento `script`

```html
<script>
  var script = document.createElement("script");
  script.addEventListener("load", function(event) {
    console.log("Script terminó de cargarse y ejecutarse");
  });
  script.src = "http://example.com/example.js";
  script.async = true;
  document.getElementsByTagName("script")[0].parentNode.appendChild(script);
</script>
```

## Información general

- Especificación
  - : [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-load)
- Interfaz
  - : UIEvent
- Propagación
  - : No
- Cancelable
  - : No
- Objetivo
  - : Window,Document,Element
- Por defecto Acción
  - : None.

## Propiedades

| Propiedad                             | Tipo                                   | Descripción                                                                                                 |
| ------------------------------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}     | `{{domxref("EventTarget")}}` | El objetivo del evento (el objetivo superior en el árbol DOM).                                              |
| `type` {{readonlyInline}}       | `{{domxref("DOMString")}}`     | El tipo de evento.                                                                                          |
| `bubbles` {{readonlyInline}}    | `{{domxref("Boolean")}}`         | Si el elemento normalmente se propaga (bubbles) o no.                                                       |
| `cancelable` {{readonlyInline}} | `{{domxref("Boolean")}}`         | Si el evento es cancelable o no.                                                                            |
| `view` {{readonlyInline}}       | `{{domxref("WindowProxy")}}` | `{{domxref("Document.defaultView", "document.defaultView")}}` (`window` del documento) |
| `detail` {{readonlyInline}}     | `long` (`float`)                       | 0.                                                                                                          |

## Especificaciones

| Especificación                                                                                       | Estado                           | Comentario                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('UI Events', '#event-type-load', 'load')}}                             | {{Spec2('UI Events')}}     |                                                                                                                                                                                                                                                                                                                                                                           |
| {{SpecName('HTML WHATWG', 'parsing.html#the-end:event-load', 'Load event')}} | {{Spec2('HTML WHATWG')}} | Esto enlaza con la sección en los pasos que se llevan a cabo al final de cargar un documento. Los eventos 'load' también se disparan a muchos elementos. Y tenga en cuenta que hay muchos lugares en la especificación que hacen referencia a cosas que pueden "[retrasar el evento de carga](https://html.spec.whatwg.org/multipage/parsing.html#delay-the-load-event)". |

## Eventos relacionados

- {{event("DOMContentLoaded")}}
- {{event("readystatechange")}}
- {{event("load")}}
- {{event("beforeunload")}}
- {{event("unload")}}
