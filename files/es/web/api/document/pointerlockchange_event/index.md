---
title: pointerlockchange
slug: Web/API/Document/pointerlockchange_event
---

El evento `pointerlockchange` es disparado cuando el cursor del navegador es bloqueado o desbloqueado.

## Información general

- Specification
  - : [Pointer Lock](http://www.w3.org/TR/pointerlock/#pointerlockchange-and-pointerlockerror-events)
- Interface
  - : Event
- Bubbles
  - : Yes
- Cancelable
  - : No
- Target
  - : Document
- Default Action
  - : None

## Propiedades

| Property                        | Type                       | Description                                            |
| ------------------------------- | -------------------------- | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Whether the event is cancellable or not.               |

## Ejemplo

```js
//Ten en cuenta que el nombre del evento, en este caso "pointerlockchange" puede variar según el navegador.
document.addEventListener("pointerlockchange", function (event) {
  // El objetivo, parámetro "target", del objeto "event" es siempre el objeto "document".
  // para recuperar el objeto que recibe el bloqueo/desbloqueo es document.pointerlockElement.
  document.pointerLockElement;
});
```

## Eventos relacionados

- [`pointerlockerror`](/es/docs/Mozilla_event_reference/pointerlockerror)

## Véase también

- [Using Pointer Lock API](/es/docs/API/Pointer_Lock_API)
