---
title: EventSource.close()
slug: Web/API/EventSource/close
l10n:
  sourceCommit: 4e233c16c6f0d347972c5c762f5b836318a46124
---

{{APIRef('WebSockets API')}}

**`close()`** は {{domxref("EventSource")}} インターフェイスのメソッドで、コネクションが構築されていればそれを閉じ、 {{domxref("EventSource.readyState")}} 属性を `2` （接続終了）に設定します。

> **メモ:** コネクションが既に閉じられていた場合、このメソッドは何も行いません。

## 構文

```js-nolint
close()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
const button = document.querySelector("button");
const evtSource = new EventSource("sse.php");

button.onclick = () => {
  console.log("Connection closed");
  evtSource.close();
};
```

> **メモ:** 完全な例は GitHub で見られます。 [PHP を用いた簡単な SSE のデモ](https://github.com/mdn/dom-examples/tree/main/server-sent-events) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("EventSource")}}
