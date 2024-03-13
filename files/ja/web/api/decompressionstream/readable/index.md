---
title: DecompressionStream.readable
slug: Web/API/DecompressionStream/readable
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{APIRef("Compression Streams API")}}

{{domxref("DecompressionStream")}} インターフェイスの読み取り専用プロパティ **`readable`** は、{{domxref("ReadableStream")}} を返します。

## 値

{{domxref("ReadableStream")}} です。

## 例

この例では、`DecompressionStream` から {{domxref("ReadableStream")}} を返します。

```js
let stream = new DecompressionStream("gzip");
console.log(stream.readable); // ReadableStream
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
