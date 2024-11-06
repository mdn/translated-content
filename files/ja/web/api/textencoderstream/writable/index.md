---
title: "TextEncoderStream: writable プロパティ"
slug: Web/API/TextEncoderStream/writable
l10n:
  sourceCommit: cb904d0a6e21bd40f31b31d71c0c3bd85622c01c
---

{{APIRef("Encoding API")}}

**`writable`** は {{domxref("TextEncoderStream")}} インターフェイスの読み取り専用プロパティで、{{domxref("WritableStream")}} を返します。

## 値

{{domxref("WritableStream")}} です。

## 例

次の例は、`WritableStream` を `TextEncoderStream` オブジェクトから返す方法を示しています。

```js
stream = new TextEncoderStream();
console.log(stream.writable); // WritableStream
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
