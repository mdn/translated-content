---
title: WebSocket.onerror
slug: Web/API/WebSocket/error_event
---

{{APIRef("Web Sockets API")}}

La propiedad **`WebSocket.onerror`**, del tipo [`event handler`](/es/docs/Web/Reference/Events/Event_handlers), será llamada cuando se dé un error. Esta llamada recibirá un tipo {{domxref("Event")}} como argumento.

## Sintaxis

```
aWebSocket.onerror = function(event) {
  console.error("Error en el WebSocket detectado:", event);
};
```

## Valor

Un {{domxref("EventListener")}}.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
