---
title: WebSocket.onopen
slug: conflicting/Web/API/WebSocket/open_event
tags:
  - API
  - Property
  - Reference
  - Web API
  - WebSocket
  - プロパティ
translation_of: Web/API/WebSocket/onopen
original_slug: Web/API/WebSocket/onopen
---
{{APIRef("Web Sockets API")}}

**`WebSocket.onopen`** プロパティはイベントハンドラー ({{event("Event_handlers", "event handler")}}) で、 {{domxref("WebSocket")}} のコネクションの {{domxref("WebSocket.readyState","readyState")}} が {{domxref("WebSocket.readyState","1")}} に変化したときに呼び出されます。これは、コネクションでデータを送信したり受信したりする準備ができたことを示します。これは {{domxref("Event")}} を伴って呼び出されます。

## 構文

```
aWebSocket.onopen = function(event) {
  console.log("WebSocket is open now.");
};
```

## 値

{{domxref("EventListener")}} です。

## 仕様書

| 仕様書                                                                                                   | 状態                             | 備考     |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', '#handler-websocket-onopen', 'WebSocket: onopen')}} | {{Spec2('HTML WHATWG')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.WebSocket.onopen")}}
