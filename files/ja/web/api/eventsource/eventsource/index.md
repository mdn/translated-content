---
title: EventSource()
slug: Web/API/EventSource/EventSource
---

{{APIRef('WebSockets API')}}

**`EventSource()`** コンストラクタは、リモートリソースを表す新しく作成された {{domxref("EventSource")}} を返します。

## 構文

```
eventSource = new EventSource(url, configuration);
```

### 引数

- `url`
  - : イベント/メッセージを処理するリモートリソースの場所を表す{{domxref("USVString")}}。
- `configuration` {{optional_inline}}

  - : 新しい接続を構成するオプションを提供します。可能なエントリは次のとおりです:

    `withCredentials` 、デフォルトは `false` で、CORS に証明書を`含める`かどうかを指定します。

## 例

```js
var evtSource = new EventSource('sse.php');
var eventList = document.querySelector('ul');

evtSource.onmessage = function(e) {
  var newElement = document.createElement("li");

  newElement.textContent = "message: " + e.data;
  eventList.appendChild(newElement);
}
```

> **メモ:** 完全な例を GitHub から見つけることができます — [PHP を用いた簡単な SSE のデモ](https://github.com/mdn/dom-examples/tree/master/server-sent-events) を参照。

## 仕様

| 仕様                                                                                                 | ステータス                       | Comment  |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', "comms.html#dom-eventsource", "EventSource()")}} | {{Spec2('HTML WHATWG')}} | 初期定義 |

## ブラウザ互換性

{{Compat("api.EventSource.EventSource")}}

## 関連情報

- {{domxref("EventSource")}}
