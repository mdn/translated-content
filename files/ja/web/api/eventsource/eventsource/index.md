---
title: EventSource()
slug: Web/API/EventSource/EventSource
l10n:
  sourceCommit: 4e233c16c6f0d347972c5c762f5b836318a46124
---

{{APIRef('WebSockets API')}}

**`EventSource()`** コンストラクターは、リモートリソースを表す新しく作成された {{domxref("EventSource")}} を返します。

## 構文

```js-nolint
new EventSource(url)
new EventSource(url, options)
```

### 引数

- `url`
  - : 文字列で、イベント/メッセージを処理するリモートリソースの場所を表します。
- `options` {{optional_inline}}

  - : 新しいコネクションを構成するオプションを提供します。可能な項目は次のとおりです。

    - `withCredentials` {{optional_inline}}
      - : 論理値で、既定値は `false` であり、 CORS の資格情報を `include` に設定すべきかどうかを示します。

## 例

```js
const evtSource = new EventSource("sse.php");
const eventList = document.querySelector("ul");

evtSource.onmessage = (e) => {
  const newElement = document.createElement("li");

  newElement.textContent = `message: ${e.data}`;
  eventList.appendChild(newElement);
};
```

> **メモ:** 完全な例は GitHub で見られます。 [PHP を用いた簡単な SSE のデモ](https://github.com/mdn/dom-examples/tree/main/server-sent-events) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("EventSource")}}
