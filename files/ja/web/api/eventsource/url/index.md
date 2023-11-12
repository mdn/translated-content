---
title: EventSource.url
slug: Web/API/EventSource/url
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{APIRef('WebSockets API')}}

**`url`** は {{domxref("EventSource")}} インターフェイスの読み取り専用プロパティで、ソースの URL を表す文字列を返します。

## 値

ソースの URL を表す文字列です。

## 例

```js
const evtSource = new EventSource("sse.php");
console.log(evtSource.url);
```

> **メモ:** 完全な例は GitHub で見られます。 [PHP を用いた簡単な SSE のデモ](https://github.com/mdn/dom-examples/tree/main/server-sent-events) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("EventSource")}}
