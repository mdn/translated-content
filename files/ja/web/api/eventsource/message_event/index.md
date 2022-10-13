---
title: EventSource.onmessage
slug: Web/API/EventSource/message_event
original_slug: Web/API/EventSource/onmessage
---

{{APIRef('WebSockets API')}}

{{domxref("EventSource")}} インターフェースの **`onmessage`** プロパティは、メッセージイベントが受信されたとき、つまりソースからメッセージが送信されたときに呼び出される {{event("Event_handlers", "event handler")}} です。

`onmessage` イベントハンドラのイベントオブジェクトの型は {{domxref("MessageEvent")}} です。

## 構文

```
eventSource.onmessage = function
```

## 例

```js
evtSource.onmessage = function(e) {
  var newElement = document.createElement("li");

  newElement.textContent = "message: " + e.data;
  eventList.appendChild(newElement);
}
```

> **メモ:** 完全な例を GitHub から見つけることができます — [PHP を用いた簡単な SSE のデモ](https://github.com/mdn/dom-examples/tree/master/server-sent-events) を参照。

## 仕様

| 仕様                                                                                                             | ステータス                       | コメント |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', "comms.html#handler-eventsource-onmessage", "onmessage")}} | {{Spec2('HTML WHATWG')}} | 初期定義 |

## ブラウザ互換性

{{Compat("api.EventSource.onmessage")}}

## 関連情報

- {{domxref("EventSource")}}
