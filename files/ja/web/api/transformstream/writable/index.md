---
title: "TransformStream: writable プロパティ"
short-title: writable
slug: Web/API/TransformStream/writable
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("Streams")}}

**`writable`** は {{domxref("TransformStream")}} インターフェイスの読み取り専用プロパティで、この `TransformStream` が制御する {{domxref("WritableStream")}} インスタンスを返します。

## 値

{{domxref("WritableStream")}} です。

## 例

次の例は、新しい {{domxref("TransformStream")}} を `textEncoderStream` として作成し、 `writable` の値をコンソールに出力します。

```js
const textEncoderStream = new TransformStream();
console.log(textEncoderStream.writable); // a WritableStream
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
