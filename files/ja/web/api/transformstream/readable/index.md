---
title: "TransformStream: readable プロパティ"
short-title: readable
slug: Web/API/TransformStream/readable
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("Streams")}}

**`readable`** は {{domxref("TransformStream")}} インターフェイスの読み取り専用プロパティで、この `TransformStream` が制御する {{domxref("ReadableStream")}} インスタンスを返します。

## 値

{{domxref("ReadableStream")}} です。

## 例

次の例は、新しい {{domxref("TransformStream")}} を `textEncoderStream` として作成し、 `readable` の値をコンソールに出力します。

```js
const textEncoderStream = new TransformStream();
console.log(textEncoderStream.readable); // a ReadableStream
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
