---
title: DedicatedWorkerGlobalScope
slug: Web/API/DedicatedWorkerGlobalScope
translation_of: Web/API/DedicatedWorkerGlobalScope
---
{{APIRef("Web Workers API")}}

Auf das **`DedicatedWorkerGlobalScope`** Objekt (Der globale Scope des {{domxref("Worker")}}) kann durch das Schlüsselwort {{domxref("window.self","self")}} zugegriffen werden. Einzelne weitere globale Funktionen, namespace Objekte und Konstruktoren, die nicht typischerweise mit dem Scope des Workers in Verbindung stehen, jedoch darauf verfügbar sind, können in der [JavaScript Reference](/de/docs/Web/JavaScript/Reference) gefunden werden. Siehe auch: [Functions available to workers](/de/docs/Web/Guide/Needs_categorization/Functions_available_to_workers).

## Eigenschaften

_Dieses Interface erbt seine Eigenschaften aus dem Interface _{{domxref("WorkerGlobalScope")}} und seinem übergeordneten Interface {{domxref("EventTarget")}}. Deshalbt implementiert es die Eigenschaften {{domxref("WindowTimers")}}, {{domxref("WindowBase64")}}, und {{domxref("WindowEventHandlers")}}.\_\_

- {{domxref("DedicatedWorkerGlobalScope.name")}} {{readOnlyinline}}
  - : Der dem {{domxref("Worker")}} (optional) gegebene Name, als er im Konstruktor {{domxref("Worker.Worker", "Worker()")}} erzeugt wurde. Hauptsächlich nützlich für Debuggin.

### Von WorkerGlobal Scope geerbte Eigenschaften

- {{domxref("WorkerGlobalScope.self")}}
  - : Gibt eine Objektreferenz auf das `DedicatedWorkerGlobalScope` Objekt selbst zurück.
- {{domxref("WorkerGlobalScope.console")}} {{readOnlyinline}}
  - : Gibt das mit dem Worker verbundene {{domxref("Console")}} Objekt zurück.
- {{domxref("WorkerGlobalScope.location")}} {{readOnlyinline}}
  - : Gibt das mit dem Worker verbundene {{domxref("WorkerLocation")}} Objekt zurück. Bei `WorkerLocation` handelt es sich um ein spezifisches location Objekt, welches aus Teilen des {{domxref("Location")}} Objekts des Browserscope besteht, jedoch für den Worker angepasst wurde.
- {{domxref("WorkerGlobalScope.navigator")}} {{readOnlyinline}}
  - : Git das mit dem Worker verbundene {{domxref("WorkerNavigator")}} Objekt zurück. Bei `WorkerNavigator `handelt es sich um ein spezifisches navigations Objekt, welches aus Teilen des {{domxref("Navigator")}} Objekts des Browserscope besteht, jedoch für den Worker angepasst wurde.
- {{domxref("WorkerGlobalScope.performance")}} {{readOnlyinline}} {{Non-standard_inline}}
  - : Git das mit dem Worker verbunde {{domxref("Performance")}} Objekt zurück. Dabei handelt es sich um ein reguläres performance Objekt, welches jedoch nur teile der Eigenschaften und Methoden umfasst.

### Eventhandler

_Dieses Interface erbt seine Eventhandler aus dem Interface {domxref("WorkerGlobalScope")}} und seinen übergeordneten Interface {{domxref("EventTarget")}}. Deshalb sind Eventhandler {{domxref("WindowTimers")}}, {{domxref("WindowBase64")}}, und {{domxref("WindowEventHandlers")}} implementiert._

- {{domxref("DedicatedWorkerGlobalScope.onmessage")}}
  - : Der entsprechende Code eines {{event("Event_handlers", "event handler")}} der beim Aufruf des Events {{event("message")}} aufgerufen wird. Diese Events sind vom Typ {{domxref("MessageEvent")}} und werden aufgerufen, wenn der Worker eine Nachricht aus dem Dokument erhält, welcher Ihn gestartet hat (Beispiel: {{domxref("Worker.postMessage")}} Methode.)
- {{domxref("DedicatedWorkerGlobalScope.onmessageerror")}}
  - : Der entsprechende Code eines {{event("Event_handlers", "event handler")}} der beim Aufruf des Events {{event("messageerror")}} aufgerufen wird.

## Methoden

_Dieses Interface erbt seine Methoden aus dem Interface {{domxref("WorkerGlobalScope")}} und seinen übergordneten Interface {{domxref("EventTarget")}}. Dementsprechend implementiert es Methoden von {{domxref("WindowTimers")}}, {{domxref("WindowBase64")}}, und {{domxref("WindowEventHandlers")}}._

- {{domxref("DedicatedWorkerGlobalScope.close()")}}
  - : Verwirft alle im `WorkerGlobalScope`'s Eventloop eingereihten Aufgaben und schließt den entsprechenden Scope.
- {{domxref("DedicatedWorkerGlobalScope.postMessage()")}}
  - : Sendet eine Nachricht — welche aus Javascript Objecten vom Typ `any` bestehen — zum übergeordneten Dokument, welches den Worker gestartet hat.

### Geerbt vom WorkerGlobalScope

- {{domxref("WorkerGlobalScope.dump()")}} {{non-standard_inline}}
  - : Gibt eine Nachricht in der Konsole aus.
- {{domxref("WorkerGlobalScope.importScripts()")}}
  - : Importiert ein oder mehrere Skripte in den Worker Scope. Es ist möglich beliebig viele, durch Kommas getrennt, zu spezifizieren. Beispiel: `importScripts('foo.js', 'bar.js');`

### Aus verschiedenen Orten implementiert

- {{domxref("WindowBase64.atob()")}}
  - : Dekodiert einen String von Daten welcher mit base-64 codiert wurde.
- {{domxref("WindowBase64.btoa()")}}
  - : Erzeugt einen base-64 codierten ASCII String aus einem String von Binärdaten.
- {{domxref("WindowTimers.clearInterval()")}}
  - : Bricht die wiederholte Ausführung mit {{domxref("WindowTimers.setInterval()")}} ab.
- {{domxref("WindowTimers.clearTimeout()")}}
  - : Bricht die wiederholte Ausführung mit {{domxref("WindowTimers.setTimeout()")}} ab.
- {{domxref("WindowTimers.setInterval()")}}
  - : Plant die Ausführung einer Funktion alle X Millisekunden
- {{domxref("WindowTimers.setTimeout()")}}
  - : Setzt eine X Millisekunden Verzögerung für die Ausführung einer Funktion

## Spezifikationen

| Specification                                                                                                        | Status                           | Comment |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', '#dedicatedworkerglobalscope', 'DedicatedWorkerGlobalScope')}} | {{Spec2('HTML WHATWG')}} |         |

## Browser Kompatibilität

{{Compat("api.DedicatedWorkerGlobalScope")}}

## Siehe auch

- {{domxref("Worker")}}
- {{domxref("WorkerGlobalScope")}}
- [Using web workers](/de/docs/Web/Guide/Performance/Using_web_workers)
- [Functions available to workers](/de/docs/Web/Guide/Needs_categorization/Functions_available_to_workers)
