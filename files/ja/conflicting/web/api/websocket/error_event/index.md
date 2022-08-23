---
title: WebSocket.onerror
slug: conflicting/Web/API/WebSocket/error_event
tags:
  - API
  - Connection
  - Error
  - Error Handler
  - Networking
  - Property
  - Reference
  - Web API
  - WebSocket
  - onerror
  - プロパティ
translation_of: Web/API/WebSocket/onerror
original_slug: Web/API/WebSocket/onerror
---
{{APIRef("Web Sockets API")}}

{{domxref("WebSocket")}} インターフェイスの **`onerror`** イベントハンドラープロパティは、 WebSocket でエラーが発生したときに呼び出される関数です。

`error` イベントハンドラーは {{domxref("EventTarget.addEventListener", "addEventListener()")}} で追加することもできます。

## 構文

```
webSocket.onerror = eventHandler;
```

### 値

関数または {{event("Event_handlers", "event handler")}} で、 WebSocket コネクションで `error` イベントが発生するたびに呼び出されるものです。

## 例

```js
webSocket.onerror = function(event) {
  console.error("WebSocket error observed:", event);
};
```

## 仕様書

| 仕様書                                                                                                   | 状態                             | 備考     |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', '#handler-websocket-onerror', 'WebSocket: onerror')}} | {{Spec2('HTML WHATWG')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.WebSocket.onerror")}}
