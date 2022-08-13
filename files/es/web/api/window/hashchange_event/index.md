---
title: hashchange
slug: Web/API/Window/hashchange_event
tags:
  - Referencia
  - URL
  - Web
translation_of: Web/API/Window/hashchange_event
---
El evento `hashchange` es ejecutado cuando el fragmento identificador de la URL ha cambiado (la parte de la URL que continúa despues del simbolo #, incluyendo el símbolo #).

| Burbujas              | Si                                       |
| --------------------- | ---------------------------------------- |
| Cancelable            | No                                       |
| Objetivo              | {{domxref("Window")}}             |
| Interface             | {{domxref("HashChangeEvent")}} |
| Acción predeterminada | Ninguna                                  |

## Propiedades

| Property                              | Type                                 | Description                                           |
| ------------------------------------- | ------------------------------------ | ----------------------------------------------------- |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The browsing context (`window`).                      |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}     | The type of event.                                    |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}         | Whether the event normally bubbles or not.            |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}         | Whether the event is cancellable or not.              |
| `oldURL` {{readonlyInline}}     | {{jsxref("String")}}         | The previous URL from which the window was navigated. |
| newURL {{readonlyInline}}       | {{jsxref("String")}}         |                                                       |

En [esta página](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills) se enlistan algunos scripts de ejemplo. Básicamente estos scripts revisan el `location.hash` en un intervalo regular. Aquí se muestra una versión que permite que solo un controlador sea ligado a la propiedad `window.onhashchange`:

```js
;(function(window) {

  // salir si el navegador implementa el evento
  if ("onhashchange" in window) { return; }

  var location = window.location,
    oldURL = location.href,
    oldHash = location.hash;

  // revisa el hash cada 100ms
  setInterval(function() {
    var newURL = location.href,
      newHash = location.hash;

    // si el hash ha cambiado y un controlador ha sido ligado...
    if (newHash != oldHash && typeof window.onhashchange === "function") {
      // ejecuta el controlador
      window.onhashchange({
        type: "hashchange",
        oldURL: oldURL,
        newURL: newURL
      });

      oldURL = newURL;
      oldHash = newHash;
    }
  }, 100);

})(window);
```

## Especificaciones

| Especificacion                                                                                       | Estado                           | Comentario         |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName('HTML WHATWG', 'indices.html#event-hashchange', 'hashchange')}} | {{Spec2('HTML WHATWG')}} | Definición inicial |

## Compatibilidad con navegadores

{{Compat("api.Window.hashchange_event")}}

## Ver también

- [`popstate`](/es/docs/Mozilla_event_reference/popstate)
- [WindowEventHandlers.onhashchange](/es/docs/Web/API/WindowEventHandlers/onhashchange)
