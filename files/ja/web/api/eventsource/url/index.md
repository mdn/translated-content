---
title: "EventSource: url プロパティ"
short-title: url
slug: Web/API/EventSource/url
l10n:
  sourceCommit: a166ba48ceb8bccb37c67a0a8856b0e5b12e0135
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

**`url`** は {{domxref("EventSource")}} インターフェイスの読み取り専用プロパティで、ソースの URL を表す文字列を返します。

## 値

ソースの URL を表す文字列です。

## 例

```js
const evtSource = new EventSource("sse.php");
console.log(evtSource.url);
```

> [!NOTE]
> 完全な例は GitHub で見られます。 [PHP を用いた簡単な SSE のデモ](https://github.com/mdn/dom-examples/tree/main/server-sent-events) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("EventSource")}}
