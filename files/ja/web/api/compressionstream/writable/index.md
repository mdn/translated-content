---
title: CompressionStream.writable
slug: Web/API/CompressionStream/writable
---

{{APIRef("Compression Streams API")}}

{{domxref("CompressionStream")}} インターフェイスの読み取り専用プロパティ **`writable`** は、{{domxref("WritableStream")}} を返します。

## 値

{{domxref("WritableStream")}} です。

## 例

この例では、`CompressionStream` から {{domxref("WritableStream")}} を返します。

```js
let stream = new CompressionStream("gzip");
console.log(stream.writeable); // WritableStream
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
