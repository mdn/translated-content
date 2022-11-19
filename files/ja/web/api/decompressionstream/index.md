---
title: DecompressionStream
slug: Web/API/DecompressionStream
---

{{APIRef("Compression Streams API")}}

{{domxref('Compression Streams API','','',' ')}} の **`DecompressionStream`** インターフェイスは、データのストリームの展開を行うAPIです。

## コンストラクター

- {{domxref("DecompressionStream.DecompressionStream", "DecompressionStream()")}}
  - : 新しい `DecompressionStream` を生成します。

## プロパティ

- {{domxref("DecompressionStream.readable")}}
  - : このオブジェクトの制御下にある {{domxref("ReadableStream")}} のインスタンスを返します。
- {{domxref("DecompressionStream.writable")}}
  - : このオブジェクトの制御下にある {{domxref("WritableStream")}} のインスタンスを返します。

## 例

この例では、blob を gzip 圧縮を用いて展開します。

```js
const ds = new DecompressionStream('gzip');
const decompressedStream = blob.stream().pipeThrough(ds);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
