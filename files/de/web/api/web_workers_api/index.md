---
title: Web Worker API
slug: Web/API/Web_Workers_API
translation_of: Web/API/Web_Workers_API
---
{{DefaultAPISidebar("Web Workers API")}}

**Web Workers** ermöglichen Entwicklern Skripte in einem Hintergrundthread getrennt vom Haupthread auszuführen. Dies hat den Vorteil, dass rechenintensive Operationen in einem gesonderten Thread ausgeführt werden können und somit der Hauptthread, der für gewöhnlich das UI bereitstellt, arbeiten kann ohne verlangsamt oder blockiert zu werden.

## Web Workers Konzepte und Anwendung

Ein Worker ist ein Objekt das mit einem Konstruktor erzeugt wird (beispielsweise {{domxref("Worker.Worker", "Worker()")}}) und eine JavaScript Datei mit Namen ausführt. In dieser Datei ist der Code enthalten der im Worker-Thread ausgeführt wird. Worker arbeiten in einem eigenen globalen Kontext, der vom aktuellen Hauptkontext {{domxref("window")}} verschieden ist. Dieser Kontext ist durch das Objekt {{domxref("DedicatedWorkerGlobalScope")}} repräsentiert, falls es sich um einen dedizierten Worker handelt (also einen Worker der nur von einem Skript genutzt wird, was der Standard ist.). Shared Workers benutzen das Objekt {{domxref("SharedWorkerGlobalScope")}}.

Man kann bis auf einige Ausnahmen beliebige Anweisungen ausführen. Beispielsweise kann man das DOM nicht direkt ändern und auch einige Standardmethoden und -attribute von {{domxref("window")}} können nicht genutzt werden. Viele andere Elemente von `window` können allerdings schon genutzt werden, unter anderem [WebSockets](/de/docs/WebSockets) und Datenspeicher, wie [IndexedDB](/de/docs/Web/API/IndexedDB_API) und die Firefox-OS-only [Data Store API](/de/docs/Web/API/Data_Store_API). Unter [Functions and classes available to workers](/de/docs/Web/API/Worker/Functions_and_classes_available_to_workers) finden Sie mehr Details.

Daten werden zwischen den Workern und dem Hauptthread mithilfe eines Nachrichtensystems verschickt — beide Seiten verschicken ihre Nachrichten mit der `postMessage()` Methode und antworten mit dem `onmessage` Event Handler (die empfangene Nachricht ist im `data` Attribut {{event("Message")}} des Events enthalten). Die Daten werden kopiert und nicht geteilt.

Worker können neue Worker erzeugen, solange diese vom selben Ursprung gehosted werden wie die Ursprungsseite. Außerdem können Worker [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) für Netzwerk I/O benutzen mit der Ausnahme, dass die `responseXML` und `channel` Attribute von `XMLHttpRequest` stets `null` zurückgeben.

Neben dedizierten Workern gibt es noch andere Typen:

- Shared (geteilte) Worker können von mehreren Skripten, die auch in unterschiedlichen Fenstern, IFrames, etc. laufen genutzt werden, solange sie alle in der selben Domain arbeiten. Sie sind etwas komplizierter als dedizierte Worker — Skripte müssen über einen aktiven Port kommunizieren. Unter {{domxref("SharedWorker")}} finden Sie mehr Details.
- [ServiceWorker](/de/docs/Web/API/ServiceWorker_API) arbeiten als Proxy Server zwischen Webanwendungen, dem Browser und dem Netzwerk. Sie sollen (zusammen mit anderen Technologien) das Erstellen von effektiven offline-Anwendungen ermöglichen, Netzwerkabfragen abfangen und je nach Verfügbarkeit einer Netzwerkverbindung ensprechend reagieren und den Server über Änderungen informieren. Zudem erlauben sie Push-Benachrichtigungen zu senden und im Hintergrund APIs zu synchronisieren.
- Chrome Worker ist ein Firefox-only Workertyp für die Add-On Entwicklung mit Zugriff auf [js-ctypes](https://developer.mozilla.org/en/js-ctypes) in Ihrem Worker. Unter {{domxref("ChromeWorker")}} finden Sie weitere Informationen.
- [Audio Worker](/de/docs/Web/API/Web_Audio_API#Audio_Workers) bieten die Möglichkeit Audioverarbeitung mit Skripten in einem Worker auszuführen.

> **Note:** As per the [Web workers Spec](https://html.spec.whatwg.org/multipage/workers.html#runtime-script-errors-2), worker error events should not bubble (see {{bug(1188141)}}. This has been implemented in Firefox 42.

## Web Worker interfaces

- {{domxref("AbstractWorker")}}
  - : Abstrakte Attribute und Methoden für alle Worker (z.B. {{domxref("Worker")}} oder {{domxref("SharedWorker")}}).
- {{domxref("Worker")}}
  - : Repräsentiert einen laufenden Workerthread. Erlaubt das Senden von Nachrichten an den Code im Worker.
- {{domxref("WorkerLocation")}}
  - : Definiert die absolute Quelle des Skripts das im [`Worker`](/de/docs/Web/API/Worker "The Worker interface of the Web Workers API represents a background task that can be easily created and can send messages back to its creator. Creating a worker is as simple as calling the Worker() constructor and specifying a script to be run in the worker thread.") ausgeführet wird.

- {{domxref("SharedWorker")}}
  - : Repräsentiert einen speziellen Worker, auf den von verschiedenen Fenstern, IFrames oder sogar Workern zugegrifffen werden kann.
- {{domxref("WorkerGlobalScope")}}
  - : Repräsentiert den generischen Scope jedes Workers (dies entspricht dem {{domxref("Window")}} objekt für normale Webinhalte). Andere Worker haben Scopes die von diesem vererbt werden und spezifische Eigenschaften hinzufügen.
- {{domxref("DedicatedWorkerGlobalScope")}}
  - : Repräsentiert den von {{domxref("WorkerGlobalScope")}} vererbten Scope eines dedizierten Workers. Fügt besondere Eigenschaften hinzu.
- {{domxref("SharedWorkerGlobalScope")}}
  - : Repräsentiert den von {{domxref("WorkerGlobalScope")}} vererbten Scope eines Shared Workers. Fügt besondere Eigenschaften hinzu.
- {{domxref("WorkerNavigator")}}
  - : Repräsentiert die Identität und den Zustand des User Agents (dem client).

## Beispiele

Sie finden ein paar einfache Beispiele, die die Benutzung veranschaulichen unter diesen Links:

- [Basic dedicated worker example](https://github.com/mdn/simple-web-worker) ([run dedicated worker](http://mdn.github.io/simple-web-worker/)).
- [Basic shared worker example](https://github.com/mdn/simple-shared-worker) ([run shared worker](http://mdn.github.io/simple-shared-worker/)).

Unter [Using web workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) finden Sie mehr Informationen wie diese Demos funktionieren.

## Specifications

| Specification                                        | Status                           | Comment |
| ---------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', '#workers')}} | {{Spec2('HTML WHATWG')}} |         |

## Browser compatibility

{{Compat}}

\[1] As `webkitURL`.

## Weiterführend

- [Using Web Workers](/de/docs/Web/API/Web_Workers_API/basic_usage)
- [Worker Interface](/de/docs/Web/API/Worker)
- [SharedWorker interface](/de/docs/Web/API/SharedWorker)
- [ServiceWorker API](/de/docs/Web/API/ServiceWorker_API)
- [Functions and classes available to workers](/de/docs/Web/API/Worker/Functions_and_classes_available_to_workers)
- [Advanced concepts and examples](/de/docs/Web/API/Web_Workers_API/Advanced_concepts_and_examples)
- [ChromeWorker](/de/docs/Web/API/ChromeWorker): Um worker mit privilegierten/chrome Code zu nutzen
