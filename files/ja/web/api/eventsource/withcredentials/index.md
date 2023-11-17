---
title: EventSource.withCredentials
slug: Web/API/EventSource/withCredentials
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{APIRef('WebSockets API')}}

**`withCredentials`** は {{domxref("EventSource")}} インターフェイスの読み取り専用プロパティで、この `EventSource` オブジェクトが CORS 資格情報が設定してインスタンス化されたかどうかを示す論理値を返します。

## 値

この `EventSource` オブジェクトが CORS 資格情報を設定してインスタンス化されたのか (`true`) あるいはそうでないのか (`false`、既定値) を示す論理値です。

## 例

```js
const evtSource = new EventSource("sse.php");
console.log(evtSource.withCredentials);
```

> **メモ:** 完全な例は GitHub で見られます。 [PHP を用いた簡単な SSE のデモ](https://github.com/mdn/dom-examples/tree/main/server-sent-events) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("EventSource")}}
