---
title: CompressionStream
slug: Web/API/CompressionStream
---

{{APIRef("Compression Streams API")}}

{{domxref('Compression Streams API','','',' ')}} の **`CompressionStream`** インターフェイスは、データのストリームの圧縮を行う API です。

## コンストラクター

- {{domxref("CompressionStream.CompressionStream", "CompressionStream()")}}
  - : 新しい `CompressionStream` を生成します。

## プロパティ

- {{domxref("CompressionStream.readable")}}
  - : このオブジェクトの制御下にある {{domxref("ReadableStream")}} のインスタンスを返します。
- {{domxref("CompressionStream.writable")}}
  - : このオブジェクトの制御下にある {{domxref("WritableStream")}} のインスタンスを返します。

## 例

この例では、ストリームを gzip 圧縮を用いて圧縮します。

```js
const compressedReadableStream = inputReadableStream.pipeThrough(
  new CompressionStream("gzip")
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
