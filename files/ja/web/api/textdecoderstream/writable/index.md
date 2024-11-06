---
title: "TextDecoderStream: writable プロパティ"
slug: Web/API/TextDecoderStream/writable
l10n:
  sourceCommit: cb904d0a6e21bd40f31b31d71c0c3bd85622c01c
---

{{APIRef("Encoding API")}}

**`writable`** は {{domxref("TextDecoderStream")}} インターフェイスの読み取り専用プロパティで、{{domxref("WritableStream")}} を返します。

## 値

{{domxref("WritableStream")}} です。

## 例

次の例は、{{domxref("WritableStream")}} を `TextDecoderStream` オブジェクトから返す方法を示しています。

```js
stream = new TextDecoderStream();
console.log(stream.writable); // WritableStream
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
