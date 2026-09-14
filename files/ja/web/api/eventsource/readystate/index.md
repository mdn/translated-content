---
title: "EventSource: readyState プロパティ"
short-title: readyState
slug: Web/API/EventSource/readyState
l10n:
  sourceCommit: a166ba48ceb8bccb37c67a0a8856b0e5b12e0135
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

**`readyState`** は {{domxref("EventSource")}} インターフェイスの読み取り専用プロパティで、コネクションの状態を表す数値を返します。

## 値

数値で、 {{domxref("EventSource")}} インターフェイス上で定義されている 3 つの状態定数のいずれかです。

- `EventSource.CONNECTING` (0)
  - : コネクションはまだ開いていません。
- `EventSource.OPEN` (1)
  - : コネクションが開いており、通信の準備ができています。
- `EventSource.CLOSED` (2)
  - : コネクションが閉じているか、開けません。

## 例

```js
const evtSource = new EventSource("sse.php");
console.log(evtSource.readyState);
```

> [!NOTE]
> 完全な例は GitHub で見られます。 [PHP を用いた簡単な SSE のデモ](https://github.com/mdn/dom-examples/tree/main/server-sent-events) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("EventSource")}}
