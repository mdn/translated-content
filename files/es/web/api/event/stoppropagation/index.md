---
title: Event.stopPropagation()
slug: Web/API/Event/stopPropagation
---

{{APIRef("DOM")}}

El método `stopPropagation()` de la interfaz {{domxref("Event")}} evita la propagación adicional del evento actual en las fases de captura y _bubbling_.

## Sintaxis

```
event.stopPropagation();
```

## Ejemplo

Ver ejemplo 5: [Propagación del evento](/es/docs/DOM/DOM_Reference/Examples#Example_5:_Event_Propagation) en el capítulo de Ejemplos para un ejemplo mas detallado de este método y la propagación del evento en el DOM.

## Notas

Ver las [Especificaciones del DOM](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-capture) para la explicación del flujo del eventos. (El [Borrador de eventos del DOM nivel 3](http://www.w3.org/TR/DOM-Level-3-Events/#event-flow) tiene una ilustración.)

[preventDefault](/es/docs/Web/API/event.preventDefault) es un método complementario que puede ser usado para prevenir la acción default del evento cuando este ocurre.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
