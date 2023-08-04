---
title: CompressionStream
slug: Web/API/CompressionStream
l10n:
  sourceCommit: 164d2b6e6c9ce32fcb8ad19436fe44766cb5c3eb
---

{{APIRef("Compression Streams API")}}

{{domxref('Compression Streams API','','',' ')}} の **`CompressionStream`** インターフェイスは、データのストリームの圧縮を行う API です。

## コンストラクター

- {{domxref("CompressionStream.CompressionStream", "CompressionStream()")}}
  - : 新しい `CompressionStream` を生成します。

## インスタンスプロパティ

- {{domxref("CompressionStream.readable")}}
  - : このオブジェクトの制御下にある {{domxref("ReadableStream")}} のインスタンスを返します。
- {{domxref("CompressionStream.writable")}}
  - : このオブジェクトの制御下にある {{domxref("WritableStream")}} のインスタンスを返します。

## 例

この例では、ストリームを gzip 圧縮を用いて圧縮します。

```js
const compressedReadableStream = inputReadableStream.pipeThrough(
  new CompressionStream("gzip"),
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
