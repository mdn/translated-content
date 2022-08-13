---
title: WebSocket.onclose
slug: Web/API/WebSocket/close_event
tags:
  - API
  - Eigenschaft
  - Referenz
  - Web API
  - WebSocket
translation_of: Web/API/WebSocket/onclose
original_slug: Web/API/WebSocket/onclose
---
{{APIRef("Web Sockets API")}}

Die Eigenschaft **`WebSocket.onclose`** ist ein {{event("Event_handlers", "event handler")}}, der aufgerufen wird, wenn die Eigenschaft {{domxref("WebSocket.readyState","WebSocket.readyState")}} zu {{domxref("WebSocket.readyState","CLOSED")}} geändert bzw. die Verbindung geschlossen wird.

Als Parameter übergeben wird ein {{domxref("CloseEvent")}}.

## Syntax

    aWebSocket.onclose = function(event) {
      console.log("WebSocket is closed now.");
    };

## Wert

Ein {{domxref("EventListener")}}.

## Spezifikationen

| Specification                                                                                            | Status                           | Comment            |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName('HTML WHATWG', '#handler-websocket-onclose', 'WebSocket: onclose')}} | {{Spec2('HTML WHATWG')}} | Initial definition |
