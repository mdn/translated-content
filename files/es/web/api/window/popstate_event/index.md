---
title: WindowEventHandlers.onpopstate
slug: Web/API/Window/popstate_event
---

{{APIRef}}

La propiedad **`onpopstate`** del [mixin](/es/docs/Glossary/Mixin) {{domxref("WindowEventHandlers")}} es el [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) para procesar eventos [`popstate`](/es/docs/Web/API/Window/popstate_event) de la ventana.

Se envía un evento `popstate` a la ventana cada vez que la entrada activa de la historia cambia entre otra otras dos entradas del mismo documento. Si la entrada de la historia fue creada al llamar a `history.pushState()`, o fue afectada por una llamada a `history.replaceState()`, la propiedad `state` del evento `popstate` contendrá una copia del objeto de estado de la entrada de la hisotria.

> **Nota:** Llamar a `history.pushState()` o a `history.replaceState()` no dispararán un evento `popstate`. El evento `popstate` solamente se dispará realizando una acción de navegador, tal como pulsar el botón volver (o llamando a `history.back()` en JavaScript), mientras se navega entre dos entradas de la historia de un mismo documento.

## Sintaxis

```js
window.onpopstate = funcRef;
```

- `funcRef` es una función manejadora (handler).

## El evento popstate

Por ejemplo, la página en `http://example.com/example.html` ejecutando el código siguiente, generará alertas como se indica.:

```js
window.onpopstate = function (event) {
  alert(
    "location: " +
      document.location +
      ", state: " +
      JSON.stringify(event.state),
  );
};

history.pushState({ page: 1 }, "title 1", "?page=1");
history.pushState({ page: 2 }, "title 2", "?page=2");
history.replaceState({ page: 3 }, "title 3", "?page=3");
history.back(); // alerts "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // alerts "location: http://example.com/example.html, state: null
history.go(2); // alerts "location: http://example.com/example.html?page=3, state: {"page":3}
```

Tenga en cuenta que, a pesar de que la entrada original (para `http://example.com/example.html`) no tiene un objeto de estado asociado, el evento `popstate` se dispara igualemente cuando se activa la entrada después de la segunda llamada a `history.back()`.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{domxref("window.history")}}
- [Manipulando la historia del navegador](/es/docs/Web/Guide/DOM/Manipulating_the_browser_history)
- [Ejemplo de navegación con Ajax](/es/docs/Web/Guide/DOM/Manipulating_the_browser_history/Example)
