---
title: EventSource.onopen
slug: Web/API/EventSource/open_event
---

{{APIRef('WebSockets API')}}

La propiedad **`onopen`** de la interfaz {{domxref("EventSource")}} es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) llamado cuando un evento [`open`](/es/docs/Web/Reference/Events/open) es recibido, esto pasa cuando la conexión fue solo abierta.

## Syntax

```
eventSource.onopen = function
```

## Ejemplos

```js
evtSource.onopen = function () {
  console.log("Connection to server opened.");
};
```

> **Nota:** Tu puedes encontrar un ejemplo completo en GitHub — ve [Simple SSE demo using PHP.](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- {{domxref("EventSource")}}
