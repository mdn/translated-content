---
title: DecompressionStream
slug: Web/API/DecompressionStream
l10n:
  sourceCommit: 5f80944f03f785c729c12ac143cf88a1c12e72cd
---

{{APIRef("Compression Streams API")}}

{{domxref('Compression Streams API','','',' ')}} の **`DecompressionStream`** インターフェイスは、データのストリームの展開を行うAPIです。

## コンストラクター

- {{domxref("DecompressionStream.DecompressionStream", "DecompressionStream()")}}
  - : 新しい `DecompressionStream` を生成します。

## インスタンスプロパティ

- {{domxref("DecompressionStream.readable")}}
  - : このオブジェクトの制御下にある {{domxref("ReadableStream")}} のインスタンスを返します。
- {{domxref("DecompressionStream.writable")}}
  - : このオブジェクトの制御下にある {{domxref("WritableStream")}} のインスタンスを返します。

## 例

この例では、blob を gzip 圧縮を用いて展開します。

```js
const ds = new DecompressionStream("gzip");
const decompressedStream = blob.stream().pipeThrough(ds);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
