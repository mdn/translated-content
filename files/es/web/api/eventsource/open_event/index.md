---
title: EventSource.onopen
slug: Web/API/EventSource/open_event
translation_of: Web/API/EventSource/onopen
original_slug: Web/API/EventSource/onopen
---
{{APIRef('WebSockets API')}}

La propiedad **`onopen`** de la interfaz {{domxref("EventSource")}} es un {{event("Event_handlers", "event handler")}} llamado cuando un evento {{event("open")}} es recibido, esto pasa cuando la conexión fue solo abierta.

## Syntax

    eventSource.onopen = function

## Ejemplos

```js
evtSource.onopen = function() {
  console.log("Connection to server opened.");
};
```

> **Nota:** Tu puedes encontrar un ejemplo completo en GitHub — ve [Simple SSE demo using PHP.](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## Especificaciones

| Especificación                                                                                           | Estado                           | Comentario         |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName('HTML WHATWG', "comms.html#handler-eventsource-onopen", "onopen")}} | {{Spec2('HTML WHATWG')}} | Initial definition |

## Compatibilidad con navegadores

{{Compat("api.EventSource.onopen")}}

## Mira también

- {{domxref("EventSource")}}
