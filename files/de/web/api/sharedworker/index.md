---
title: SharedWorker
slug: Web/API/SharedWorker
tags:
  - API
  - Interface
  - Reference
  - SharedWorker
  - WebWorkers
  - Workers
translation_of: Web/API/SharedWorker
---
{{APIRef("Web Workers API")}}

Das **`SharedWorker`** Interface repräsentiert eine spezielle Art von Worker, auf welchen durch mehrere Kontexte zugegeriffen werden kann. Hier kann es sich um verschiedene Tabs, iFrames oder auch Worker handeln. Diese implementieren ein anderes Interface als dedicated Worker und haben einen anderen Global Scope {{domxref("SharedWorkerGlobalScope")}}.

> **Note:** Wenn auf einen SharedWorker von mehreren Browser Kontexten aus zugegriffen wird müssen all diese denselben Urpsrung haben. (Dasselbe Protocol, Host und Port)

## Konstruktoren

- {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}}
  - : Erstellt einen Shared Web Worker, der ein Script zu einer angegebenen URL ausführt.

## Eigenschaften

_Erbt Eigenschaften von dem Parent {{domxref("EventTarget")}} und implementiert Eigenschaften von {{domxref("AbstractWorker")}}._

- {{domxref("AbstractWorker.onerror")}}
  - : Ist ein{{domxref("EventListener")}} der immer aufgerufen wird wenn ein {{domxref("ErrorEvent")}} vom Typ `error` durch den Worker läuft.
- {{domxref("SharedWorker.port")}} {{readonlyInline}}
  - : Returnt ein {{domxref("MessagePort")}} Objekt, welches zum Kommunizieren und Kontrollieren des Shared Workers verwendet wird.

<!---->

## Methoden

_Erbt Methoden von dem Parent {{domxref("EventTarget")}} und implementiert Methoden von {{domxref("AbstractWorker")}}._

## Beispiel

In unserem [Grundlegenden Shared Worker Beispiel](https://github.com/mdn/simple-shared-worker) ([Shared Worker ausführen](http://mdn.github.io/simple-shared-worker/)), haben wir zwei HTML Seiten, von denen beide etwas JavaScript verwenden um simple Kalkulationen auszuführen. Die verschiedenen Skripte verwenden dasselbe Worker File um die Kalkulation durchzuführen. Beide können auf dieses zugreifen, auch wenn diese in verschiedenen Fenstern ausgeführt werden.

Das folgende Code Beispiel zeigt das Erstellen eines `SharedWorker` Objekts unter der Verwendung des {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} Konstruktors. Beide Skripte enthalten:

```js
var myWorker = new SharedWorker('worker.js');
```

Beide Skripte greifen dann auf den Worker durch ein {{domxref("MessagePort")}} Objekt zu, welches mithilfe von {{domxref("SharedWorker.port")}} erstellt wurde. Wenn das onmessage Event mithilfe von addEventListener angehängt wurde, wird der Port automatisch gestartet mittels der `start()` Methode:

```js
myWorker.port.start();
```

Wenn der Port gestartet ist senden beide Skripte Nachrichten an den Worker und behandeln die empfangenen Nachrichten von `port.postMessage()` und `port.onmessage`:

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

Innerhalb des Workers verwenden wird den {{domxref("SharedWorkerGlobalScope.onconnect")}} Handler um uns an den oben genannten Port zu verbinden. Die mit dem Worker verbundenen Ports sind durch die Eigenschaft `ports im` {{event("connect")}} Event zugänglich. Anschließend verwenden wir die {{domxref("MessagePort")}} `start()` Methode um den Port zu starten und verwenden den `onmessage` Handler um die Nachrichten aus dem Main Thread zu behandeln.

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

## Spezifikationen

| Spezifikation                                                                    | Status                           | Kommentar                                                |
| -------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "#sharedworker", "SharedWorker")}} | {{Spec2('HTML WHATWG')}} | Keine Änderung von {{SpecName("Web Workers")}}. |

## Browser Kompatibilität

{{Compat("api.SharedWorker")}}

## Siehe auch

- {{domxref("Worker")}}
- [Web Worker verwenden](/de/docs/Web/Guide/Performance/Using_web_workers)
