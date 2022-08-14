---
title: Worker
slug: Web/API/Worker
translation_of: Web/API/Worker
---
{{APIRef("Web Workers API")}}

Das **`Worker`** Interface der [Web Workers API](/de/docs/Web/API/Web_Workers_API) beschreibt eine im Hintergrund ausgeführte Programmlogik, die leicht erstellt werden kann und Nachrichten mit dem Ersteller austauschen. Einen Worker erzeugen erfolgt einfach über den Aufruf des `Worker()` Konstruktors unter Angabe eines Scripts, welches in dem Worker Thread ausgeführt werden soll.

Worker selbst können zudem weitere (sog. "verschachtelte") Worker erzeugen, solange diese in demselben [origin](/de/docs/Web/Security/Same-origin_policy) wie die übergeordnete Seite liegen (Achtung: verschachtelte Worker sind [aktuell nicht in Blink implementiert](https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/5R3B4RN4GHU)). Zusätzlich können Worker das [`XMLHttpRequest`](/en/DOM/XMLHttpRequest "En/XMLHttpRequest") nutzen, um auf Netzwerk I/O zuzugreifen, unter der Voraussetzung, dass die Attribute `responseXML` und `channel` des `XMLHttpRequest` immer den Wert `null `zurück liefern.

[Nicht alle Interfaces und Funktionen sind verfügbar](/En/DOM/Worker/Functions_available_to_workers "En/DOM/Worker/Functions available to workers") für das mit dem `Worker` assoziierte Script.

Zur Verwendung eines `Worker`s mit Zugriff auf [js-ctypes](/en/js-ctypes "en/js-ctypes") in Browser-Erweiterungen (Extension) für den Firefox bitte das {{ domxref("ChromeWorker") }} Objekt nutzen.

## Constructors

- {{domxref("Worker.Worker", "Worker()")}}
  - : Erzeugt einen neuen Web Worker, der das über seine URL referenzierte Script ausführt. Worker können auch über [Blobs](/de/docs/Web/API/Blob) erzeugt werden.

## Properties

_Erbt die Eigenschaften seines parents, {{domxref("EventTarget")}}, und implementiert die Eigenschaften von {{domxref("AbstractWorker")}}._

### Event handlers

- {{domxref("AbstractWorker.onerror")}}
  - : Ein {{ domxref("EventListener") }}, welcher jedesmal dann aufgerufen wird, wenn ein {{domxref("ErrorEvent")}} des Typs `error` den Worker erreicht. Dies ist geerbt von {{domxref("AbstractWorker")}}.
- {{domxref("Worker.onmessage")}}
  - : Ein {{ domxref("EventListener") }}, welcher jedesmal dann aufgerufen wird, wenn ein {{domxref("MessageEvent")}} des Typs `message` den Worker erreicht — d.h. der Worker erhält eine Nachricht von seinem übergeordneten document via {{domxref("DedicatedWorkerGlobalScope.postMessage")}}. Diese Nachricht wird innerhalb des Events in der {{domxref("MessageEvent.data", "data")}} Eigenschaft gespeichert.
- {{domxref("Worker.onmessageerror")}}
  - : Der {{event("Event_handlers", "event handler")}}, dessen Code aufgerufen werden soll, wenn es zu einem {{event("messageerror")}} Event kommt.

<!---->

## Methods

_Erbt die Methoden seines parents, {{domxref("EventTarget")}}, und implementiert die Methoden von {{domxref("AbstractWorker")}}._

- {{domxref("Worker.postMessage()")}}
  - : Sendet eine Nachricht an den Worker. Diese kann dabei aus einem `beliebigen` JavaScript Objekt bestehen.
- {{domxref("Worker.terminate()")}}
  - : Beendet den Worker unmittelbar. Hierüber besteht dabei nicht die Möglichkeit, dem Worker die Gelegenheit für ein geordnetes Beenden von laufenden Operationen zu geben. Vielmehr wird der Worker sofort beendet. ServiceWorker Instanzen unterstützen diese Methode nicht.

## Example

Das nachfolgende Beispiel zeigt wie ein {{domxref("Worker")}} mittels des {{domxref("Worker.Worker", "Worker()")}} Konstruktors erzeugt und verwendet wird:

```js
var myWorker = new Worker('worker.js');
var first = document.querySelector('#number1');
var second = document.querySelector('#number2');

first.onchange = function() {
  myWorker.postMessage([first.value,second.value]);
  console.log('Message posted to worker');
}
```

Ein vollständiges Beispiel findet sich hier: [Basic dedicated worker example](https://github.com/mdn/simple-web-worker) ([run dedicated worker](http://mdn.github.io/simple-web-worker/)).

## Specifications

| Specification                                                    | Status                           | Comment |
| ---------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', "#worker", "Worker")}} | {{Spec2('HTML WHATWG')}} |         |

## Browser compatibility

Die Unterstützung der einzelnen Worker ist abhängig vom Typ und variiert. Wie ein Worker konkret unterstützt wird, kann der Seite zu dem Worker Typ entnommen werden.

{{Compat}}

### Cross-origin worker error behaviour

In früheren Browserversionen kam es zu einem `SecurityError` bei dem Versuch ein Script für einen cross-origin worker zu laden. In neueren Browsern wird, aufgrund einer Änderung der Spezifikation, stattdessen ein {{event("error")}} Event erzeugt.

## See also

- [Using web workers](/En/Using_web_workers "en/Using DOM workers")
- [Functions available to workers](/En/DOM/Worker/Functions_available_to_workers "https://developer.mozilla.org/En/DOM/Worker/Functions_available_to_workers")
- Andere Workers Typen {{ domxref("SharedWorker") }} und [ServiceWorker](/de/docs/Web/API/ServiceWorker_API).
- Nicht Standard, die Gecko-spezifischen Workers {{ domxref("ChromeWorker") }}, für Browser-Erweiterungen.
