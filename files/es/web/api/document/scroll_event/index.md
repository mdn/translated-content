---
title: scroll
slug: Web/API/Document/scroll_event
translation_of: Web/API/Document/scroll_event
---
{{ ApiRef() }}

El evento **`scroll`** se produce cuando la vista del documento o un elemento es deslizado.

## Información General

- Especificación
  - : [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-scroll), [CSSOM View](http://www.w3.org/TR/cssom-view/#scrolling-0)
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

| Property                              | Type                                                                                                                                                         | Description                                                                                                                                                                                                        |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `target` {{readonlyInline}}     | [`EventTarget`](/es/docs/Web/API/EventTarget "EventTarget is an interface implemented by objects that can receive events and may have listeners for them.")  | El objetivo de evento (el objetivo superior en el árbol DOM).                                                                                                                                                      |
| `type` {{readonlyInline}}       | [`DOMString`](/es/docs/Web/API/DOMString "DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String.") | El tipo de evento.                                                                                                                                                                                                 |
| `bubbles` {{readonlyInline}}    | [`Boolean`](/es/docs/Web/API/Boolean "The Boolean object is an object wrapper for a boolean value.")                                                         | Si el evento burbujea o no.                                                                                                                                                                                        |
| `cancelable` {{readonlyInline}} | [`Boolean`](/es/docs/Web/API/Boolean "The Boolean object is an object wrapper for a boolean value.")                                                         | Si el evento puede ser cancelado o no.                                                                                                                                                                             |
| `view` {{readonlyInline}}       | [`WindowProxy`](/es/docs/Web/API/WindowProxy "The documentation about this has not yet been written; please consider contributing!")                         | [`document.defaultView`](/es/docs/Web/API/Document/defaultView "In browsers, document.defaultView returns the window object associated with a document, or null if none is available.") (`window` de el documento) |
| `detail` {{readonlyInline}}     | `long` (`float`)                                                                                                                                             | 0.                                                                                                                                                                                                                 |

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

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
});
```

Más ejemplos se pueden ver en el evento [resize](/es/docs/Web/Events/resize#Example).

## Compatibilidad en navegadores

### iOS UIWebView

En iOS UIWebViews, los eventos `scroll` no se ejecutan mientras el _escroleo/deslizamiento_ se lleva a cabo; solo son ejecutados cuando el deslizamiento terminó. Ver [Bootstrap issue #16202](https://github.com/twbs/bootstrap/issues/16202). Safari y WKWebViews no se ven afectados por este bug.
