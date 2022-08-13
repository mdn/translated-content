---
title: EventSource
slug: Web/API/EventSource
tags:
  - API
  - Interface
  - Referenz
  - Server-sent events
translation_of: Web/API/EventSource
---
{{APIRef("Websockets API")}}

Das **EventSource**-Interface erlaubt das Empfangen von Server-Sent Events. Es erlaubt den Zugriff auf Events im `text/event-stream` Format über eine persistente HTTP-Verbindung.

## Properties

_Diese Interface erbt weitere Properties von seinem Parent-Object {{domxref("EventTarget")}}._

- {{domxref("EventSource.onerror")}}
  - : Ist eine {{event("Event_handlers", "event handler")}}-Instanz. Diese wird aufgerufen, wenn ein Fehler auftritt und das {{event("error")}}-Event auf diesem Object ausgelöst wird.
- {{domxref("EventSource.onmessage")}}
  - : Ist eine {{event("Event_handlers", "event handler")}}-Instanz. Diese wir aufgerufen, wenn ein {{event("message")}}-event empfangen wird. Dies ist immer dann der Fall, wenn die Event-Quelle eine neue Nachricht erzeugt hat.
- {{domxref("EventSource.onopen")}}
  - : Ist eine {{event("Event_handlers", "event handler")}}-Instanz. Diese wird immer dann aufgerufen, wenn die Verbindung geöffnet wurde, also ein {{event("open")}}-Event empfangen wurde.
- {{domxref("EventSource.readyState")}} {{readonlyinline}}
  - : Ein `unsigned short`, welcher den aktuellen Status der Verbindung repräsentiert. Gültige werte sind `CONNECTING` (`0`), `OPEN` (`1`), or `CLOSED` (`2`).
- {{domxref("EventSource.url")}} {{readonlyinline}}
  - : Ein {{domxref("DOMString")}}, welcher die URL der Event-Quelle beinhaltet.

## Methods

_Diese Interface erbt weitere Methoden von seinem Parent-Object {{domxref("EventTarget")}}._

- {{domxref("EventSource.close()")}}
  - : Schließt die Verbindung, soweit geöffnet, und setzt den Status (`readyState`) auf CLOSED. Auf bereits geschlossenen Verbindungen hat diese Methode keinen Effekt.

## Spezifikationen

| Spezifikation                                                                                                | Status                           | Kommentar |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', "comms.html#the-eventsource-interface", "EventSource")}} | {{Spec2('HTML WHATWG')}} |           |

## Browser Kompatiblität

{{Compat}}

## Siehe auch

- [Using server-sent events](/en/Server-sent_events/Using_server-sent_events "en/Server-sent events/Using server-sent events")
