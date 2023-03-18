---
title: MessageEvent
slug: Web/API/MessageEvent
---

{{APIRef("HTML DOM")}}

La interface **`MessageEvent`** representa un mensaje recibido por un objeto de destino.

Este es usado para representar mensajes en :

- [Eventos enviados por el servidor](/es/docs/Web/API/Server-sent_events)(ver {{domxref("EventSource.onmessage")}}).
- [Web sockets](/es/docs/Web/API/WebSockets_API) (ver la propiedad `onmessage` de la interface [WebSocket](/es/docs/Web/API/WebSocket) ).
- Mensajeria cruzada(ver {{domxref("Window.postMessage()")}} y {{domxref("Window.onmessage")}}).
- [Mensajes de canal](/es/docs/Web/API/Channel_Messaging_API)(ver {{domxref("MessagePort.postMessage()")}} y {{domxref("MessagePort.onmessage")}}).
- Trabajo cruzado / Mensajes de texto (vea las dos entradas anteriores, pero también {{domxref("Worker.postMessage()")}}, {{domxref("Worker.onmessage")}}, {{domxref("ServiceWorkerGlobalScope.onmessage")}}, etc.)
- [Canales de Transmisión](/es/docs/Web/API/Broadcast_Channel_API)(ver{{domxref("Broadcastchannel.postMessage()")}}) y {{domxref("BroadcastChannel.onmessage")}}).
- Canal de datos WebRTC (ver {{domxref("RTCDataChannel.onmessage")}}).

La acción desencadenada por este evento es definida en una función establecida como el controlador de eventos para el evento pertinente [`message`](/es/docs/Web/Reference/Events/message) ( es decir : Usando un manejador de `onmessage` como se lista arriba).

{{AvailableInWorkers}}

## Constructor

- {{domxref("MessageEvent.MessageEvent", "MessageEvent()")}}
  - : Crear un nuevo `MessageEvent`.

## Propiedades

_Esta interface tambien herada propiedadesde desde su padre {{domxref("Evento")}}._

- {{domxref("MessageEvent.data")}} {{readonlyInline}}
  - : La información enviada por el emisor del mensaje.
- {{domxref("MessageEvent.origin")}} {{readonlyInline}}
  - : {{domxref("USVString")}} es una representacion del origen del emisor del mensaje.
- {{domxref("MessageEvent.lastEventId")}} {{readonlyInline}}
  - : {{domxref("DOMString")}} es una representación de una ID unico para el evento.
- {{domxref("MessageEvent.source")}} {{readonlyInline}}
  - : El `MessageEventSource` (El cual puede ser un {{domxref("WindowProxy")}}, {{domxref("MessagePort")}}, or {{domxref("ServiceWorker")}} object) es ima representación del mensaje emitido.
- {{domxref("MessageEvent.ports")}} {{readonlyInline}}
  - : Un array de objetos {{domxref("MessagePort")}} representa los puertos asociados al canal, el mensaje se esta enviado a traves de (donde sea apropiado, por ejemplo, en mensajes de canal o al enviar un mensaje a un trabajador compartido).

## Metodos

_Esta interface tambien herada propiedadesde desde su padre, {{domxref("Evento")}}._

- {{domxref("MessageEvent.initMessageEvent()")}} {{deprecated_inline}}
  - : Inicializar un vento de mensaje. **No use esto mas** — en vez de eso use el constructor **{{domxref("MessageEvent.MessageEvent", "MessageEvent()")}} .**

## Ejemplos

En nuestro [Ejemplo basico de trabajador compartido](https://github.com/mdn/simple-shared-worker)([Ejecutar trabajador compartdo](http://mdn.github.io/simple-shared-worker/)), Tenemos dos paginas HTML, cada una de las cuales usa algo de JavaScript para mejorar un calculo simple. Los diferentes scripts estan usando el mismo archivo de trabajo para mejorar el calculo — Ambos pueden accederlo, Incluso si sus paginas esta corriendo n diferentes ventanas.

The following code snippet shows creation of a `SharedWorker` object using the {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} constructor. Both scripts contain this:

```js
var myWorker = new SharedWorker('worker.js');
```

Both scripts then access the worker through a {{domxref("MessagePort")}} object created using the {{domxref("SharedWorker.port")}} property. If the onmessage event is attached using addEventListener, the port is manually started using its `start()` method:

```js
myWorker.port.start();
```

When the port is started, both scripts post messages to the worker and handle messages sent from it using `port.postMessage()` and `port.onmessage`, respectively:

```js
first.onchange = function() {
  myWorker.port.postMessage([first.value,second.value]);
  console.log('Message posted to worker');
}

second.onchange = function() {
  myWorker.port.postMessage([first.value,second.value]);
  console.log('Message posted to worker');
}

myWorker.port.onmessage = function(e) {
  result1.textContent = e.data;
  console.log('Message received from worker');
}
```

Inside the worker we use the {{domxref("SharedWorkerGlobalScope.onconnect")}} handler to connect to the same port discussed above. The ports associated with that worker are accessible in the [`connect`](/es/docs/Web/Reference/Events/connect) event's `ports` property — we then use {{domxref("MessagePort")}} `start()` method to start the port, and the `onmessage` handler to deal with messages sent from the main threads.

```js
onconnect = function(e) {
  var port = e.ports[0];

  port.addEventListener('message', function(e) {
    var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
    port.postMessage(workerResult);
  });

  port.start(); // Required when using addEventListener. Otherwise called implicitly by onmessage setter.
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver tambien

- {{domxref("ExtendableMessageEvent")}} — similar to this interface but used in interfaces that needs to give more flexibility to authors.
