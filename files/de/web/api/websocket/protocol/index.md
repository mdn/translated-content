---
title: WebSocket.protocol
slug: Web/API/WebSocket/protocol
tags:
  - API
  - Eigenschaft
  - Referenz
  - Web API
  - WebSocket
translation_of: Web/API/WebSocket/protocol
---
{{APIRef("Web Sockets API")}}

Die Eigenschaft **`WebSocket.protocol`** gibt den Namen des Unterprotokolls zurück, welches der Server ausgewählt hat. Sie ist nur lesbar.

## Syntax

    var protocol = aWebSocket.protocol;

## Wert

A [`DOMString`](/Web/API/DOMString "DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String.").

Entweder ist der String leer, oder enthält den Namen eines der Protokolle, welche im {{domxref("WebSocket")}} Konstruktor mit dem Parameter `protocols` übergeben wurden.

[Siehe hier.](/de/docs/Web/API/WebSocket/WebSocket#Parameters)

## Spezifikationen

| Spezifikation                                                                                            | Status                           | Kommentar          |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName('HTML WHATWG', '#dom-websocket-protocol', 'WebSocket: protocol')}} | {{Spec2('HTML WHATWG')}} | Initial definition |

## Browser Kompatibilität

{{Compat("api.WebSocket.protocol")}}
