---
title: WebSocket.extensions
slug: Web/API/WebSocket/extensions
tags:
  - API
  - Eigenschaft
  - Referenz
  - Web API
  - WebSocket
translation_of: Web/API/WebSocket/extensions
---
{{APIRef("Web Sockets API")}}

Die Eigenschaft **`WebSocket.extensions`** gibt die Erweiterungen des Servers zurück. Sie ist nur lesbar.

## Syntax

    var extensions = aWebSocket.extensions;

## Wert

Ein {{domxref("DOMString")}}.

Momentan ist dies entweder ein leerer String oder eine Liste an Erweiterungen, welche zwischen dem Server und dem Client ausgehandelt wurden.

## Spezifikationen

| Spezifikation                                                                                                | Status                           | Kommentar          |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------ |
| {{SpecName('HTML WHATWG', '#dom-websocket-extensions', 'WebSocket: extensions')}} | {{Spec2('HTML WHATWG')}} | Initial definition |

## Browser Kompatibilität

{{Compat("api.WebSocket.extensions")}}
