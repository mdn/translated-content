---
title: WebSocket
slug: Web/API/WebSocket
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

El objeto `WebSocket` proporciona la API para crear y gestionar una conexión [WebSocket](/es/docs/Web/API/WebSockets_API) a un servidor, así como para enviar y recibir datos a través de dicha conexión.

Para construir un `WebSocket`, usa el constructor [`WebSocket()`](/es/docs/Web/API/WebSocket/WebSocket).

> [!NOTE]
> La API de `WebSocket` no tiene forma de aplicar [backpressure](/es/docs/Web/API/Streams_API/Concepts), por lo tanto, cuando los mensajes llegan más rápido de lo que la aplicación puede procesarlos, esta saturará la memoria del dispositivo al almacenarlos en el búfer, dejará de responder debido a un uso del 100% de la CPU, o ambas cosas. Si necesitas una alternativa que ofrezca backpressure automáticamente, consulta {{domxref("WebSocketStream")}}.

{{InheritanceDiagram}}

## Constructor

- {{domxref("WebSocket.WebSocket", "WebSocket()")}}
  - : Devuelve un objeto `WebSocket` recién creado.

## Propiedades de instancia

- {{domxref("WebSocket.binaryType")}}
  - : El tipo de datos binarios que usa la conexión.
- {{domxref("WebSocket.bufferedAmount")}} {{ReadOnlyInline}}
  - : El número de bytes de datos en cola.
- {{domxref("WebSocket.extensions")}} {{ReadOnlyInline}}
  - : Las extensiones que ha seleccionado el servidor.
- {{domxref("WebSocket.protocol")}} {{ReadOnlyInline}}
  - : El subprotocolo que ha seleccionado el servidor.
- {{domxref("WebSocket.readyState")}} {{ReadOnlyInline}}
  - : El estado actual de la conexión.
- {{domxref("WebSocket.url")}} {{ReadOnlyInline}}
  - : La URL absoluta del WebSocket.

## Métodos de instancia

- {{domxref("WebSocket.close()")}}
  - : Cierra la conexión.
- {{domxref("WebSocket.send()")}}
  - : Pone en cola los datos para transmitirlos.

## Eventos

Escucha estos eventos con `addEventListener()` o asignando un detector de eventos a la propiedad `oneventname` de esta interfaz.

- {{domxref("WebSocket/close_event", "close")}}
  - : Se dispara cuando se cierra una conexión con un `WebSocket`.
    También está disponible mediante la propiedad `onclose`.
- {{domxref("WebSocket/error_event", "error")}}
  - : Se dispara cuando se cierra una conexión con un `WebSocket` debido a un error, por ejemplo, cuando no se han podido enviar algunos datos.
    También está disponible mediante la propiedad `onerror`.
- {{domxref("WebSocket/message_event", "message")}}
  - : Se dispara cuando se reciben datos a través de un `WebSocket`.
    También está disponible mediante la propiedad `onmessage`.
- {{domxref("WebSocket/open_event", "open")}}
  - : Se dispara cuando se abre una conexión con un `WebSocket`.
    También está disponible mediante la propiedad `onopen`.

## Ejemplos

```js
// Crea la conexión WebSocket.
const socket = new WebSocket("ws://localhost:8080");

// La conexión se ha abierto
socket.addEventListener("open", (event) => {
  socket.send("¡Hola, servidor!");
});

// Escucha los mensajes
socket.addEventListener("message", (event) => {
  console.log("Mensaje del servidor ", event.data);
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Escribir aplicaciones cliente de WebSocket](/es/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
