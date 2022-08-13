---
title: WebSocket.binaryType
slug: Web/API/WebSocket/binaryType
tags:
  - API
  - Eigenschaft
  - Referenz
  - Web API
  - WebSocket
translation_of: Web/API/WebSocket/binaryType
---
{{APIRef("Web Sockets API")}}

Die Eigenschaft **`WebSocket.binaryType`** gibt den Typ von Binärdaten zurück, der übertragen wird.

## Syntax

    var binaryType = aWebSocket.binaryType;

## Wert

Ein {{DOMXref("DOMString")}}:

- `"blob"`
  - : Wenn {{domxref("Blob")}} Objekte benutzt werden.
- `"arraybuffer"`
  - : Wenn {{jsxref("ArrayBuffer")}} Objekte benutzt werden.

## Spezifikationen

| Spezifikation                                                                                                | Status                           | Kommentar          |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------ |
| {{SpecName('HTML WHATWG', '#dom-websocket-binarytype', 'WebSocket: binaryType')}} | {{Spec2('HTML WHATWG')}} | Initial definition |

## Browser Kompatibilität

{{Compat("api.WebSocket.binaryType")}}
