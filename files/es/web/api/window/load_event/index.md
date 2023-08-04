---
title: load
slug: Web/API/Window/load_event
---

{{ APIRef }}

El evento `load` se dispara cuando un recurso y sus recursos dependientes han terminado de cargar.

## Ejemplos

### Window

```html
<script>
  window.addEventListener("load", function (event) {
    console.log("'Todos los recursos terminaron de cargar!");
  });
</script>
```

### Elemento `script`

```html
<script>
  var script = document.createElement("script");
  script.addEventListener("load", function (event) {
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

| Propiedad                       | Tipo                         | Descripción                                                                            |
| ------------------------------- | ---------------------------- | -------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}     | `{{domxref("EventTarget")}}` | El objetivo del evento (el objetivo superior en el árbol DOM).                         |
| `type` {{readonlyInline}}       | `{{domxref("DOMString")}}`   | El tipo de evento.                                                                     |
| `bubbles` {{readonlyInline}}    | `{{domxref("Boolean")}}`     | Si el elemento normalmente se propaga (bubbles) o no.                                  |
| `cancelable` {{readonlyInline}} | `{{domxref("Boolean")}}`     | Si el evento es cancelable o no.                                                       |
| `view` {{readonlyInline}}       | `{{domxref("WindowProxy")}}` | `{{domxref("Document.defaultView", "document.defaultView")}}` (`window` del documento) |
| `detail` {{readonlyInline}}     | `long` (`float`)             | 0.                                                                                     |

## Especificaciones

{{Specifications}}

## Eventos relacionados

- [`DOMContentLoaded`](/es/docs/Web/Reference/Events/DOMContentLoaded)
- [`readystatechange`](/es/docs/Web/Reference/Events/readystatechange)
- [`load`](/es/docs/Web/Reference/Events/load)
- [`beforeunload`](/es/docs/Web/Reference/Events/beforeunload)
- [`unload`](/es/docs/Web/Reference/Events/unload)
