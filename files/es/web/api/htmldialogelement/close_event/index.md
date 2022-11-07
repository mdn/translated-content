---
title: GlobalEventHandlers.onclose
slug: Web/API/HTMLDialogElement/close_event
tags:
  - Propiedad
  - Referencia
translation_of: Web/API/GlobalEventHandlers/onclose
original_slug: Web/API/GlobalEventHandlers/onclose
---

{{ApiRef("HTML DOM")}}

Un gestor de eventos para los eventos de cerrar enviados a la ventana. (No disponible con Firefox 2 o Safari)

## Sintaxis

```
window.onclose = funcRef;
```

### Parámetros

- `funcRef` es una referencia a una función.

## Ejemplo

```js
window.onclose = resetThatServerThing;
```

## Especificaciones

| Especificación                                                                                   | Estado                           | Comentario |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ---------- |
| {{SpecName('HTML WHATWG','webappapis.html#handler-onclose','onclose')}} | {{Spec2('HTML WHATWG')}} |            |

## Compatibilidad con Navegadores

{{Compat("api.GlobalEventHandlers.onclose")}}
