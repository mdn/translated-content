---
title: CompressionStream.readable
slug: Web/API/CompressionStream/readable
---

{{APIRef("Compression Streams API")}}

{{domxref("CompressionStream")}} インターフェイスの読み取り専用プロパティ **`readable`** は、{{domxref("ReadableStream")}} を返します。

## 値

{{domxref("ReadableStream")}} です。

## 例

この例では、`CompressionStream` から {{domxref("ReadableStream")}} を返します。

```js
let stream = new CompressionStream("gzip");
console.log(stream.readable); // ReadableStream
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
