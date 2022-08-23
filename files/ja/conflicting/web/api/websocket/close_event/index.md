---
title: WebSocket.onclose
slug: conflicting/Web/API/WebSocket/close_event
translation_of: Web/API/WebSocket/onclose
original_slug: Web/API/WebSocket/onclose
---
{{APIRef("Web Sockets API")}}

**`WebSocket.onclose`** プロパティは、WebSocket コネクションの {{domxref("WebSocket.readyState","readyState")}} が {{domxref("WebSocket.readyState","CLOSED")}} に変わったときに呼ばれる {{event("Event_handlers", "event handler")}} です。{{domxref("CloseEvent")}} と一緒に呼び出されます。

## 構文

```
aWebSocket.onclose = function(event) {
  console.log("WebSocket is closed now.");
};
```

## 値

{{domxref("EventListener")}}.

## 仕様書

| Specification                                                                                            | Status                           | Comment            |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName('HTML WHATWG', '#handler-websocket-onclose', 'WebSocket: onclose')}} | {{Spec2('HTML WHATWG')}} | Initial definition |
