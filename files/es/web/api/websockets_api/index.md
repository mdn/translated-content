---
title: WebSockets
slug: Web/API/WebSockets_API
---

{{DefaultAPISidebar("Websockets API")}}

**WebSockets** es una tecnología avanzada que hace posible abrir una sesión de comunicación interactiva entre el navegador del usuario y un servidor. Con esta API, puede enviar mensajes a un servidor y recibir respuestas controladas por eventos sin tener que consultar al servidor para una respuesta.

## Interfaces

- [`WebSocket`](/es/docs/Web/API/WebSocket)
  - : El interfaz principal para conectar a un servidor Websocket y así enviar y recibir datos a través de la conexión.
- [`CloseEvent`](/es/docs/Web/API/CloseEvent)
  - : El evento enviado por el objeto WebSocket cuando se cierra la conexión.
- [`MessageEvent`](/es/docs/Web/API/MessageEvent)
  - : El evento enviado por el objeto WebSocket cuando se recibe un mensaje enviado desde el servidor.

## Herramientas

- [Socket.IO](http://socket.io): Una poderosa API WebSocket multi-plataforma para [Node.js](http://nodejs.org).
- [WebSocket-Node](https://github.com/Worlize/WebSocket-Node): Un servidor WebSocket API implementado para [Node.js](http://nodejs.org).
- [Total.js](http://www.totaljs.com): Framework para aplicaciones web para [Node.js](http://www.nodejs.org) (Ejemplo: [WebSocket chat](https://github.com/totaljs/examples/tree/master/websocket))
- [Faye](https://www.npmjs.com/package/faye-websocket): Un servidor y cliente [WebSocket](/es/docs/Web/API/WebSockets_API) (conexión bidireccional) y [EventSource](/es/docs/Web/API/EventSource/) (conexión unidireccional) para [Node.js](http://nodejs.org).

## Temas RELACIONADOS

- [AJAX](/es/docs/AJAX), [JavaScript](/es/docs/JavaScript)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [RFC 6455 - The WebSocket Protocol](http://tools.ietf.org/html/rfc6455)
- [WebSocket API Specification](http://www.w3.org/TR/websockets/)
- [Server-Sent Events](/es/docs/Server-sent_events)
