---
title: "TextDecoderStream: readable プロパティ"
slug: Web/API/TextDecoderStream/readable
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("Encoding API")}}

**`readable`** は {{domxref("TextDecoderStream")}} インターフェイスの読み取り専用プロパティで、{{domxref("ReadableStream")}} を返します。

## 値

{{domxref("ReadableStream")}} です。

## 例

次の例は、{{domxref("ReadableStream")}} を `TextDecoderStream` オブジェクトから返す方法を示しています。

```js
stream = new TextDecoderStream();
console.log(stream.readable); //a ReadableStream
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
