---
title: EventSource.onerror
slug: Web/API/EventSource/error_event
tags:
  - API
  - EventSource
  - Server-sent events
  - イベントハンドラ
  - プロパティ
  - リファレンス
translation_of: Web/API/EventSource/onerror
original_slug: Web/API/EventSource/onerror
---
{{APIRef('WebSockets API')}}

{{domxref("EventSource")}} インターフェースの**`onerror`** プロパティは、エラーが発生し、`EventSource` オブジェクトに対して {{event("error")}} が送出されたときに呼び出される {{event("Event_handlers", "event handler")}} です。

## 構文

    eventSource.onerror = function

## 例

```js
evtSource.onerror = function() {
  console.log("EventSource failed.");
};
```

> **Note:** **メモ**: 完全な例を GitHub から見つけることができます — [PHP を用いた簡単な SSE のデモ](https://github.com/mdn/dom-examples/tree/master/server-sent-events) を参照。

## 仕様

| 仕様                                                                                                         | ステータス                       | コメント |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', "comms.html#handler-eventsource-onerror", "onerror")}} | {{Spec2('HTML WHATWG')}} | 初期定義 |

## ブラウザ互換性

{{Compat("api.EventSource.onerror")}}

## 関連情報

- {{domxref("EventSource")}}
