---
title: 'EventSource: error イベント'
slug: Web/API/EventSource/error_event
original_slug: Web/API/EventSource/onerror
---

{{APIRef}}

{{domxref("EventSource")}} インターフェースの **`onerror`** プロパティは、エラーが発生し、`EventSource` オブジェクトに対して {{event("error")}} が送出されたときに呼び出される {{event("Event_handlers", "event handler")}} です。

## 構文

```
eventSource.onerror = function
```

## 例

```js
evtSource.onerror = function() {
  console.log("EventSource failed.");
};
```

> **メモ:** 完全な例を GitHub から見つけることができます — [PHP を用いた簡単な SSE のデモ](https://github.com/mdn/dom-examples/tree/master/server-sent-events) を参照。

## 仕様

| 仕様                                                                                                         | ステータス                       | コメント |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', "comms.html#handler-eventsource-onerror", "onerror")}} | {{Spec2('HTML WHATWG')}} | 初期定義 |

## ブラウザ互換性

{{Compat("api.EventSource.onerror")}}

## 関連情報

{{Compat}}

## See also

- [Using server-sent events](/ja/docs/Web/API/Server-sent_events/Using_server-sent_events)
- [`open`](/ja/docs/Web/API/EventSource/open_event)
- [`message`](/ja/docs/Web/API/EventSource/message_event)
