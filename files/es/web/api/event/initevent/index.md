---
title: event.initEvent
slug: Web/API/Event/initEvent
---

{{ ApiRef("DOM") }}{{deprecated_header}}

### Resumen

El método `initEvent` se usa para dar valor inicial a un [evento](/es/docs/Web/API/Event) creado mediante [document.createEvent](/es/docs/Web/API/Document/createEvent).

### Sintaxis

```
event.initEvent(type,bubbles,cancelable)
```

- `type`
  - : El tipo de evento.
- `bubbles`
  - : Un valor binario indicando si el evento debe ser recurrente en la cadena de eventos, o no (ver [bubbles](/es/docs/Web/API/Event/bubbles)).
- `cancelable`
  - : Un valor binario indicando si el evento puede ser cancelado o no (ver [cancelable](/es/docs/Web/API/Event/cancelable)).

Nota: Un valor binario puede tener sólo valores 1 y 0. En lógica de Boole, cierto (_true_ ) y falso (_false_ ).

### Ejemplo

```
// crea un evento "click" que puede ser recurrente y
// NO puede ser cancelado.
event.initEvent("click", true, false);
```

### Notas

Los eventos inicializados de esta forma, deben haber sido creados por el método [document.createEvent](/es/docs/Web/API/Document/createEvent). Debemos llamar a `initEvent` para inicializar el evento antes de que pueda ser lanzado con [dispatched](/es/docs/Web/API/EventTarget/dispatchEvent).

### Especificación

[DOM Level 2 Events: Event.initEvent](https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-Event-initEvent)
