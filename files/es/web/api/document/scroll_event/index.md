---
title: scroll
slug: Web/API/Document/scroll_event
---

{{ ApiRef() }}

El evento **`scroll`** se produce cuando la vista del documento o un elemento es deslizado.

## Información General

- Interfaz
  - : UIEvent
- Bubbles
  - : No en elementos, pero burbujea a la vista default cuando se ejecuta en el documento
- Cancelable
  - : No
- Objetivo
  - : defaultView, Document, Element
- Acción por defecto
  - : Ninguna

## Propiedades

| Property                        | Type                                          | Description                                                                                |
| ------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `target` {{readonlyInline}}     | [`EventTarget`](/es/docs/Web/API/EventTarget) | El objetivo de evento (el objetivo superior en el árbol DOM).                              |
| `type` {{readonlyInline}}       | [`DOMString`](/es/docs/Web/API/DOMString)     | El tipo de evento.                                                                         |
| `bubbles` {{readonlyInline}}    | [`Boolean`](/es/docs/Web/API/Boolean)         | Si el evento burbujea o no.                                                                |
| `cancelable` {{readonlyInline}} | [`Boolean`](/es/docs/Web/API/Boolean)         | Si el evento puede ser cancelado o no.                                                     |
| `view` {{readonlyInline}}       | [`WindowProxy`](/es/docs/Web/API/WindowProxy) | [`document.defaultView`](/es/docs/Web/API/Document/defaultView) (`window` de el documento) |
| `detail` {{readonlyInline}}     | `long` (`float`)                              | 0.                                                                                         |

## Ejemplo

Dado que los eventos `scroll` pueden ejecutarse a un ritmo elevado, el _event handler_ no debería ejecutar operaciones computacionalmente costosas como modificaciones en el DOM. En cambio, se recomienda acelerar el evento utilizando [requestAnimationFrame](/es/docs/DOM/window.requestAnimationFrame), [setTimeout](/es/docs/Web/API/WindowTimers/setTimeout) or [customEvent](/es/docs/Web/API/CustomEvent), de este modo:

#### Optimización de Scroll con window\.requestAnimationFrame

```js
// Referencia: http://www.html5rocks.com/en/tutorials/speed/animations/

var last_known_scroll_position = 0;
var ticking = false;

function doSomething(scroll_pos) {
  // Hacer algo con la posición del scroll
}

window.addEventListener("scroll", function (e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function () {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
});
```

Más ejemplos se pueden ver en el evento [resize](/es/docs/Web/Events/resize#Example).

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}
