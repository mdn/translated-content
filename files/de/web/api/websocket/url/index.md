---
title: WebSocket.url
slug: Web/API/WebSocket/url
tags:
  - API
  - Eigenschaft
  - Referenz
  - Web API
  - WebSocket
translation_of: Web/API/WebSocket/url
---
{{APIRef("Web Sockets API")}}

Die Eigenschaft **`WebSocket.url`** gibt die absolute URL eines {{domxref("WebSocket")}} zurück, wie sie im Konstruktor angegeben wurde. Sie ist nur lesbar.

## Syntax

    var url = aWebSocket.url;

## Wert

Ein [`DOMString`](/de/docs/Web/API/DOMString "DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String.").

## Spezifikationen

| Spezifikation                                                                            | Status                           | Kommentar          |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName('HTML WHATWG', '#dom-websocket-url', 'WebSocket: url')}} | {{Spec2('HTML WHATWG')}} | Initial definition |

## Browser Kompatibilität

{{Compat("api.WebSocket.url")}}
