---
title: WebSocket.readyState
slug: Web/API/WebSocket/readyState
tags:
  - API
  - Eigenschaft
  - Referenz
  - Web API
  - WebSocket
translation_of: Web/API/WebSocket/readyState
---
{{APIRef("Web Sockets API")}}

Die Eigenschaft **`WebSocket.readyState`** gibt den momentanen Status einer {{domxref("WebSocket")}} Verbindung zurück. Sie ist nur lesbar.

## Syntax

    var readyState = aWebSocket.readyState;

## Werte

Einer der folgenden Werte kann vorhanden sein:

| Wert | Status       | Beschreibung                                                                 |
| ---- | ------------ | ---------------------------------------------------------------------------- |
| `0`  | `CONNECTING` | Der Socket wurde erstellt, jedoch besteht noch keine Verbindung.             |
| `1`  | `OPEN`       | Eine Verbindung wurde hergestellt und kann zur Kommunikation genutzt werden. |
| `2`  | `CLOSING`    | Die Verbindung wird beendet.                                                 |
| `3`  | `CLOSED`     | Die Verbindung wurde geschlossen oder konnte nicht geöffnet werden.          |

## Spezifikationen

| Specification                                                                                                | Status                           | Comment            |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------ |
| {{SpecName('HTML WHATWG', '#dom-websocket-readystate', 'WebSocket: readyState')}} | {{Spec2('HTML WHATWG')}} | Initial definition |

## Browser Kompatibilität

{{Compat("api.WebSocket.readyState")}}
