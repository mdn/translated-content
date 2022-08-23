---
title: WebSocket.onmessage
slug: conflicting/Web/API/WebSocket/message_event
tags:
  - API
  - Property
  - Reference
  - Web API
  - WebSocket
  - プロパティ
translation_of: Web/API/WebSocket/onmessage
original_slug: Web/API/WebSocket/onmessage
---
{{APIRef("Web Sockets API")}}

**`WebSocket.onmessage`** プロパティは、サーバーからメッセージが届いたときに呼び出されるイベントハンドラー ({{event("Event_handlers", "event handler")}}) です。これは {{domxref("MessageEvent")}} で呼び出されます。

## 構文

```
aWebSocket.onmessage = function(event) {
  console.debug("WebSocket message received:", event);
};
```

## 値

{{domxref("EventListener")}} です。

## 仕様書

| 仕様書                                                                                                           | 状態                             | 備考     |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', '#handler-websocket-onmessage', 'WebSocket: onmessage')}} | {{Spec2('HTML WHATWG')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.WebSocket.onmessage")}}
