---
title: DecompressionStream.writable
slug: Web/API/DecompressionStream/writable
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{APIRef("Compression Streams API")}}

{{domxref("DecompressionStream")}} インターフェイスの読み取り専用プロパティ **`writable`** は、{{domxref("WritableStream")}} を返します。

## 値

{{domxref("WritableStream")}} です。

## 例

この例では、`DecompressionStream` から {{domxref("WritableStream")}} を返します。

```js
let stream = new DecompressionStream("gzip");
console.log(stream.writeable); // WritableStream
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
