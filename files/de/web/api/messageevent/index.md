---
title: MessageEvent
slug: Web/API/MessageEvent
tags:
  - API
  - Channels
  - Interface
  - Nachrichten
  - Referenz
  - WebSockets
  - Window
  - Workers
  - messaging
translation_of: Web/API/MessageEvent
---
{{APIRef("HTML DOM")}}

Das **`MessageEvent`** Interface representiert eine Nachricht die von einem Zielobjekt empfangen wurde.

Es wird verwendet in in:

- [Server-sent events](/de/docs/Web/API/Server-sent_events) (siehe {{domxref("EventSource.onmessage")}}).
- [Web sockets](/de/docs/Web/API/WebSockets_API) (siehe `onmessage` Eigentschaft des [WebSocket](/de/docs/Web/API/WebSocket) Interface).
- Cross-document messaging (siehe {{domxref("Window.postMessage()")}} und {{domxref("Window.onmessage")}}).
- [Channel messaging](/de/docs/Web/API/Channel_Messaging_API) (siehe {{domxref("MessagePort.postMessage()")}} und {{domxref("MessagePort.onmessage")}}).
- Cross-worker/document messaging (wie in den oberen beiden Einträgen, aber auch in {{domxref("Worker.postMessage()")}}, {{domxref("Worker.onmessage")}}, {{domxref("ServiceWorkerGlobalScope.onmessage")}}, usw.)
- [Broadcast channels](/de/docs/Web/API/Broadcast_Channel_API) (siehe {{domxref("Broadcastchannel.postMessage()")}}) und {{domxref("BroadcastChannel.onmessage")}}).
- WebRTC data channels (siehe {{domxref("RTCDataChannel.onmessage")}}).

Welche Aktion durch dieses Event ausgeführt wird, entscheidet die Funktion die als entsprechender Eventhandler für das {{event("message")}} Event definiert wurde. Beispielsweise durch das setzen eines `onmessage` handlers.

{{AvailableInWorkers}}

## Constructor

- {{domxref("MessageEvent.MessageEvent", "MessageEvent()")}}
  - : Creates a new `MessageEvent`.

## Eigenschaften

_Dieses Interface erbt auch Eigenschaften seines parents, {{domxref("Event")}}._

- {{domxref("MessageEvent.data")}} {{readonlyInline}}
  - : Die Daten die vom message emitter gesendet wurden.
- {{domxref("MessageEvent.origin")}} {{readonlyInline}}
  - : Ein {{domxref("USVString")}} der den Ursprung (Origin) des message emitters repräsentiert.
- {{domxref("MessageEvent.lastEventId")}} {{readonlyInline}}
  - : Ein {{domxref("DOMString")}} der die einzigartige ID des Events repräsentiert.
- {{domxref("MessageEvent.source")}} {{readonlyInline}}
  - : Eine `MessageEventSource` (welch ein {{domxref("WindowProxy")}}, {{domxref("MessagePort")}}, or {{domxref("ServiceWorker")}} Objekt sein kann) welche den message emitter repräsentiert.
- {{domxref("MessageEvent.ports")}} {{readonlyInline}}
  - : Ein Array bestehend aus {{domxref("MessagePort")}} Objekten, welche die Ports repräsentieren, welche mit dem channel verbunden sind durch die die Nachricht gesendet wurde (Bespielsweise in channel messaging oder wenn eine Nachricht zu einem shared worker gesendet wird).

## Methoden

_Dieses Interface erbt auch Methoden von seinem parent, {{domxref("Event")}}._

- {{domxref("MessageEvent.initMessageEvent()")}} {{deprecated_inline}}
  - : Initialisiert ein Message Objekt. **Bitte nicht mehr benutzen** — **benutzen Sie bitte den {{domxref("MessageEvent.MessageEvent", "MessageEvent()")}} constructor stattdessen.**

## Examples

In unserem [Grundlegenden Shared Worker Beispiel](https://github.com/mdn/simple-shared-worker) ([Shared Worker ausführen](http://mdn.github.io/simple-shared-worker/)), haben wir zwei HTML Seiten, von denen jede eine einfache Berechnung ausführt. Die unterschiedlichen Skripte benutzen die gleiche Worker Datei um die Berechnungen auszuführen — sie können beide darauf zugreifen, selbst wenn sich ihre Seiten in verschiedenen Fenstern befinden.

Der folgende Ausschnitt zeigt wie man ein `SharedWorker` Objekt mit dem {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} constructor erzeugen kann. Beide Skripte enthalten dies:

```js
var myWorker = new SharedWorker('worker.js');
```

Beide Skripte greifen durch ein {{domxref("MessagePort")}} Objekt auf den Worker zu, welcher mit der {{domxref("SharedWorker.port")}} Eigenschaft erstellt wurde. Wenn das onmessage event mittels addEventListener hinzugefügt wird, wird der port automatisch mittels seiner `start()` Methode gestartet:

```js
myWorker.port.start();
```

Wenn der Port gestartet wurde, senden beide Skripte Nachrichten zu dem Worker und verarbeiten die Nachrichten welche vom Worker empfangen werden mittels `port.postMessage()` und `port.onmessage`:

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

In dem Worker benutzen wir den {{domxref("SharedWorkerGlobalScope.onconnect")}} Handler um uns mit dem oben erwähnten Port zu verbinden. Die mit dem Worker verbundenen Ports sind durch die `ports` Eigenschaft des {{event("connect")}} Events erreichbar — dann benutzen wir die {{domxref("MessagePort")}} `start()` Methode um den Port zu starten, und den `onmessage` Handler um die Nachrichten die von den Hauptthreads gesendet wurden zu verarbeiten.

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

## Specifikationen

| Specification                                                                    | Status                           | Comment |
| -------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', "#messageevent", "MessageEvent")}} | {{Spec2('HTML WHATWG')}} |         |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ExtendableMessageEvent")}} — ist diesem Interface sehr ähnlich, wird aber in Interfaces genutzt die Authoren mehr Flexibilität geben möchten.
