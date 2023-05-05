---
title: MessageEvent
slug: Web/API/MessageEvent
l10n:
  sourceCommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{APIRef("HTML DOM")}}

La interfaz **`MessageEvent`** representa un mensaje recibido por un objeto de destino.

Esto se utiliza para representar mensajes en:

- [Eventos enviados por el servidor](/es/docs/Web/API/Server-sent_events) (ver {{domxref("EventSource.message_event")}}).
- [Web sockets](/es/docs/Web/API/WebSockets_API) (ver la propiedad `onmessage` de la interfaz [WebSocket](/es/docs/Web/API/WebSocket)).
- Mensajes entre documentos (ver {{domxref("Window.postMessage()")}} y {{domxref("Window.message_event")}}).
- [Canal de mensajería](/es/docs/Web/API/Channel_Messaging_API) (ver {{domxref("MessagePort.postMessage()")}} y {{domxref("MessagePort.message_event")}}).
- Mensajes entre _workers_ y/o documentos (consulte las dos entradas anteriores, pero también {{domxref("Worker.postMessage()")}}, {{domxref("Worker.message_event")}}, {{domxref("ServiceWorkerGlobalScope.message_event")}}, etcetera).
- [Canales de difusión](/es/docs/Web/API/Broadcast_Channel_API) (ver {{domxref("Broadcastchannel.postMessage()")}}) y {{domxref("BroadcastChannel.message_event")}}).
- Canales de datos WebRTC (consulte {{domxref("RTCDataChannel.message_event", "onmessage")}}).

La acción desencadenada por este evento se define en un conjunto de funciones como el manejador de eventos para el evento `message` relevante (por ejemplo, usando `onmessage` como se indica arriba).

{{AvailableInWorkers}}
{{InheritanceDiagram}}

## Constructor

- {{domxref("MessageEvent.MessageEvent", "MessageEvent()")}}
  - : Crea un nuevo `MessageEvent`.

## Propiedades de instancia

_Esta interfaz también hereda propiedades de su padre, {{domxref("Event")}}._

- {{domxref("MessageEvent.data")}} {{ReadOnlyInline}}
  - : Los datos enviados por el emisor del mensaje.
- {{domxref("MessageEvent.origin")}} {{ReadOnlyInline}}
  - : Una cadena que representa el origen del emisor del mensaje.
- {{domxref("MessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : Una cadena que representa un ID único para el evento.
- {{domxref("MessageEvent.source")}} {{ReadOnlyInline}}
  - : Un `MessageEventSource` (que puede ser un objeto {{glossary("WindowProxy")}}, {{domxref("MessagePort")}} o {{domxref("ServiceWorker")}}) que representa el emisor del mensaje.
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : Un arreglo de objetos {{domxref("MessagePort")}} que representan los puertos asociados con el canal a través del cual se envía el mensaje (cuando corresponda, por ejemplo, en la mensajería del canal o cuando se envía un mensaje a un _worker_ compartido).

## Métodos de instancia

_Esta interfaz también hereda métodos de su padre, {{domxref("Event")}}._

- {{domxref("MessageEvent.initMessageEvent","initMessageEvent()")}} {{deprecated_inline}}
  - : Inicializa un evento de mensaje. **No uses más esto** — **usa el constructor {{domxref("MessageEvent.MessageEvent", "MessageEvent()")}} en su lugar.**

## Ejemplos

En nuestro [Ejemplo de un _worker_ compartido básico](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([ejecutar _worker_ compartido](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)), tenemos dos páginas HTML, cada una de las cuales usa algo de JavaScript para realizar un cálculo simple. Los diferentes _scripts_ usan el mismo archivo de trabajo para realizar el cálculo; ambos pueden acceder a él, incluso si sus páginas se ejecutan dentro de ventanas diferentes.

El siguiente fragmento de código muestra la creación de un objeto {{domxref("SharedWorker")}} mediante el constructor {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}}. Ambos _scripts_ contienen esto:

```js
const myWorker = new SharedWorker("worker.js");
```

Ambos _scripts_ luego acceden al _worker_ a través de un objeto {{domxref("MessagePort")}} creado usando la propiedad {{domxref("SharedWorker.port")}}. Si el evento `onmessage` se adjunta usando `addEventListener`, el puerto se inicia manualmente usando su método `start()`:

```js
myWorker.port.start();
```

Cuando se inicia el puerto, ambos _scripts_ envían mensajes al _worker_ y manejan los mensajes enviados desde él usando `port.postMessage()` y `port.onmessage`, respectivamente:

```js
first.onchange = () => {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Mensaje publicado al worker");
};

second.onchange = () => {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Mensaje publicado al worker");
};

myWorker.port.onmessage = (e) => {
  result1.textContent = e.data;
  console.log("Mensaje recibido del worker");
};
```

Dentro del _worker_ usamos el manejador {{domxref("SharedWorkerGlobalScope.connect_event", "onconnect")}} para conectarnos al mismo puerto mencionado anteriormente. Se puede acceder a los puertos asociados con ese _worker_ en la propiedad `ports` del evento {{domxref("SharedWorkerGlobalScope/connect_event", "connect")}} — luego usamos {{domxref("MessagePort")}} `start()` para iniciar el puerto, y el manejador `onmessage` para manejar los mensajes enviados desde los hilos principales.

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.addEventListener("message", (e) => {
    const workerResult = `Resultado: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  });

  port.start(); // Requerido cuando se usa addEventListener. De lo contrario, lo llama implícitamente onmessage setter.
};
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("ExtendableMessageEvent")}} — similar a esta interfaz pero utilizada en interfaces que necesitan dar más flexibilidad a los autores.
