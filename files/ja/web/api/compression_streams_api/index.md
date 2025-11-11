---
title: Compression Streams API
slug: Web/API/Compression_Streams_API
l10n:
  sourceCommit: 3a8ddeac2f0957b775b1c6c237f565b266c274c0
---

{{DefaultAPISidebar("Compression Streams API")}}

**Compression Streams API** は、gzip 形式や deflate 形式によるデータのストリームの圧縮や展開を行う JavaScript の API を提供します。

ビルトインの圧縮機能を使うことで、JavaScript のアプリケーションに圧縮ライブラリーを含める必要がなくなり、アプリケーションのダウンロードサイズをより小さくできます。

## インターフェイス

- {{domxref("CompressionStream")}}
  - : データのストリームを圧縮します。
- {{domxref("DecompressionStream")}}
  - : データのストリームを展開します。

## 例

この例では、ストリームを gzip 圧縮により圧縮します。

```js
const compressedReadableStream = inputReadableStream.pipeThrough(
  new CompressionStream("gzip"),
);
```

この例は、blob を gzip により展開する関数です。

```js
async function DecompressBlob(blob) {
  const ds = new DecompressionStream("gzip");
  const decompressedStream = blob.stream().pipeThrough(ds);
  return await new Response(decompressedStream).blob();
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
