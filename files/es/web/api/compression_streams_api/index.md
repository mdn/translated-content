---
title: API de Compression Streams
slug: Web/API/Compression_Streams_API
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{DefaultAPISidebar("Compression Streams API")}}{{AvailableInWorkers}}

La **API de Compression Streams** proporciona una API de JavaScript para comprimir y descomprimir flujos de datos usando los formatos gzip o deflate.

La compresión incorporada significa que las aplicaciones de JavaScript no necesitarán incluir una biblioteca de compresión, lo que hace que el tamaño de descarga de la aplicacion sea más pequeño.

## Interfaces

- {{domxref("CompressionStream")}}
  - : Comprime un flujo de datos.
- {{domxref("DecompressionStream")}}
  - : Descomprime un flujo de datos.

## Ejemplos

En este ejemplo, un flujo se comprime usando la compresión gzip.

```js
const compressedReadableStream = inputReadableStream.pipeThrough(
  new CompressionStream("gzip"),
);
```

En el siguiente ejemplo, una funcion descomprime un blob usando gzip.

```js
async function DecompressBlob(blob) {
  const ds = new DecompressionStream("gzip");
  const decompressedStream = blob.stream().pipeThrough(ds);
  return await new Response(decompressedStream).blob();
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
