---
title: Eventos enviados por el servidor
slug: Web/API/Server-sent_events
l10n:
  sourceCommit: c2274293475b0a5b4febf85a49c1f91bf43ebac7
---

{{DefaultAPISidebar("Server Sent Events")}}

Tradicionalmente, una página web tiene que enviar una solicitud al servidor para recibir nuevos datos; es decir, la página solicita datos del servidor. Con los eventos enviados por el servidor, es posible que un servidor envíe nuevos datos a una página web en cualquier momento, enviando mensajes a la página web. Estos mensajes entrantes pueden ser tratados como _[Eventos](/es/docs/Web/API/Event) + datos_ dentro de la página web.

{{AvailableInWorkers}}

> **Nota:** Firefox actualmente no admite el uso de eventos enviados por el servidor en _service workers_ (sí los admite en trabajadores dedicados y compartidos). Ver [error 1681218, en Firefox](https://bugzil.la/1681218).

## Conceptos y uso

Para saber cómo usar los eventos enviados por el servidor, consulta nuestro artículo [Usar eventos enviados por el servidor](/es/docs/Web/API/Server-sent_events/Using_server-sent_events).

## Interfaces

- {{domxref("EventSource")}}
  - : Define todas las características que manejan conección a un servidor, recibir eventos/datos, errores, cerrar una conexión, etc.

## Ejemplos

- [Demostración simple de SSE usando PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events)

## Especificaciones

{{Specifications}}

## Véase también

### Herramientas

- [Mercure: un protocolo de comunicación en tiempo real (publicación-suscripción) construido sobre SSE](https://mercure.rocks)
- [Polyfill de EventSource para Node.js](https://github.com/EventSource/eventsource)
- [Polyfill de EventSource](https://github.com/remy/polyfills/blob/master/EventSource.js) de Remy Sharp
- [Polyfill de EventSource](https://github.com/Yaffle/EventSource) de Yaffle
- Rick Waldron's [jquery plugin](https://github.com/rwaldron/jquery.eventsource)
- El [complemento de jquery](https://github.com/rwaldron/jquery.eventsource) de Rick Waldron
- intercooler.js [soporte SSE declarativo](https://intercoolerjs.org/docs.html#sse)

### Temas relacionados

- [AJAX](/es/docs/Web/Guide/AJAX)
- [JavaScript](/es/docs/Web/JavaScript)
- [WebSockets](/es/docs/Web/API/WebSockets_API)

### Otros recursos

- Una [aplicación similar a Twitter](https://hacks.mozilla.org/2011/06/a-wall-powered-by-eventsource-and-server-sent-events/) impulsada por eventos enviados por el servidor y [su código en GitHub](https://github.com/mozilla/webowonder-demos/tree/master/demos/friends%20timeline).
- [HTML5 y eventos enviados por el servidor](https://dsheiko.com/weblog/html5-and-server-sent-events/)
