---
title: EventSource.readyState
slug: Web/API/EventSource/readyState
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{APIRef('WebSockets API')}}

**`readyState`** は {{domxref("EventSource")}} インターフェイスの読み取り専用プロパティで、コネクションの状態を表す数値を返します。

## 値

コネクションの状態を表す数値。使用可能な値は以下の通りです。

- `0` — 接続試行中
- `1` — 接続中
- `2` — 接続終了

## 例

```js
const evtSource = new EventSource("sse.php");
console.log(evtSource.readyState);
```

> **メモ:** 完全な例は GitHub で見られます。 [PHP を用いた簡単な SSE のデモ](https://github.com/mdn/dom-examples/tree/main/server-sent-events) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("EventSource")}}
