---
title: close
slug: Web/API/WebSocket/close_event
---

{{APIRef("WebSockets API")}}

El manejador `close` es ejecutado cuando una conexión con un websocket es cerrada.

## General info

- Specification
  - : [WebSocket](https://www.w3.org/TR/websockets/)
- Interface
  - : Event
- Bubbles
  - : No
- Cancelable
  - : No
- Target
  - : [WebSocket](/es/docs/Web/API/WebSocket)
- Default Action
  - : None

## Properties

| Property                        | Type                       | Description                                                    |
| ------------------------------- | -------------------------- | -------------------------------------------------------------- |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | El objetivo del evento (el objetivo superior en el árbol DOM). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | El tipo de evento.                                             |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Si el evento normalmente burbujea o no.                        |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Si el evento es cancelable o no.                               |

## Related Events

- [`open`](/es/docs/Web/Reference/Events/open)
- [`close`](/es/docs/Web/Reference/Events/close)
- [`error`](/es/docs/Web/API/HTMLElement/error_event)
- [`message`](/es/docs/Web/Reference/Events/message)

## See also

- [Writing WebSocket client applications](/es/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
