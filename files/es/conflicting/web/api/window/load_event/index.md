---
title: window.onload
slug: conflicting/Web/API/Window/load_event
original_slug: Web/API/GlobalEventHandlers/onload
---

{{ ApiRef() }}

### Sumario

Un evento tipo handler para el evento `load` event de el {{ domxref("window") }}.

### Syntax

```
window.onload = funcRef;
```

- `funcRef` es la función tipo handler function a ser llamada cuando el evento `load` de window se dispara.

### Ejemplos

```js
window.onload = function() {
  init();
  doSomethingElse();
};
```

```html
<!doctype html>
<html>
  <head>
    <title>Ejemplo Onload</title>
    <script>
      function load() {
        alert("evento load detectado!");
      }
      window.onload = load;
    </script>
  </head>
  <body>
    <p>El Evento load se dispara cuando el documento ha terminado de cargarse!</p>
  </body>
</html>
```

### Notas

El evento `load` dispara el evento al final del proceso de carga del documento. En este punto, todos los objetos del documento son DOM, y todas las imágenes y sub-frames han terminado de cargarse.

Existen también los [Eventos DOM Específicos](/en-US/Gecko-Specific_DOM_Events) como `DOMContentLoaded` y `DOMFrameContentLoaded` (los cuales pueden ser manejados usando {{ domxref("element.addEventListener()") }}) y son ejecutados despues de que el DOM de la página ha sido construido, pero no esperear a que otros recursos terminen de cargar.

### Especificación

Este evento tipo handler se encuentra especificado en [HTML](https://www.whatwg.org/html/#handler-window-onload).

### Ver También

- Evento `DOMContentLoaded` en [Escuchando los Evento:Eventos DOM Simples](/en-US/Listening_to_events#simple_dom.c2.a0events)
