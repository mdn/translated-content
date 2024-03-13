---
title: element.dispatchEvent
slug: Web/API/EventTarget/dispatchEvent
---

{{ ApiRef("DOM Events")}}

### Resumen

Lanza un evento en el sistema de eventos. El evento está sujeto al mismo comportamiento y capacidades que si fuera un evento de lanzamiento directo.

### Sintaxis

```
bool = element.dispatchEvent(event)
```

- `element` es el objetivo (`target` en Inglés) del evento.
- `event` es un objeto de tipo [event](/es/DOM/event) que será lanzado.
- El valor devuelto es `false`, si al menos uno de los negociadores (en Inglés:_handler_ ) que manejan el evento es [preventDefault](/es/DOM/event.preventDefault). En caso contrario, devuelve `true`.

### Notas

Como se ve en el ejemplo anterior, `dispatchEvent` es el último paso en el proceso crear-inicializar-lanzar, que se usa para el lanzamiento manual de eventos en el modelo de implementación de eventos.

El evento puede ser creado mediante el método [document.createEvent](/es/DOM/document.createEvent) e inicializado usando [initEvent](/es/DOM/event.initEvent) u otro método, más específicamente, métodos de inicialización como [initMouseEvent](/es/DOM/event.initMouseEvent) o [initUIEvent](/es/DOM/event.initUIEvent).

Ver también [Event object reference](/es/DOM/event).

### Especificación

[DOM Level 2 Events: dispatchEvent](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget-dispatchEvent)
