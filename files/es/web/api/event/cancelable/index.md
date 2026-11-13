---
title: event.cancelable
slug: Web/API/Event/cancelable
---

{{ ApiRef("DOM") }}

### Resumen

Indica si el elemento puede ser cancelado o no.

### Sintaxis

```
bool =
event.cancelable;
```

`bool` tiene valor `true` o `false`, dependiendo de si el evento puede ser desactivado.

### Notas

Si un evento puede ser cancelado o no, es algo que se determina en el momento en que el evento es inicializado.

Para cancelar un evento, llama al método [preventDefault](/es/docs/Web/API/Event/preventDefault) en el evento. Esto evita que la tarea de implementación ejecute la acción por defecto asociada con el evento.

### Especificación

[DOM Level 2 Events: cancelable](https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-Event-canCancel)
