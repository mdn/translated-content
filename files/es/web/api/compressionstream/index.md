---
title: CompressionStream
slug: Web/API/CompressionStream
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

La interfaz **`CompressionStream`** de {{domxref('Compression Streams API','','',' ')}} es una API para comprimir un flujo de datos.

## Constructor

- {{domxref("CompressionStream.CompressionStream", "CompressionStream()")}}
  - : Crea un nuevo `CompressionStream`

## Propiedades de la instancia

- {{domxref("CompressionStream.readable")}}
  - : Devuelve la instancia de {{domxref("ReadableStream")}} controlada por este objeto.
- {{domxref("CompressionStream.writable")}}
  - : Devuelve la instancia de {{domxref("WritableStream")}} controlada por este objeto.

## Ejemplos

En este ejemplo, un flujo se comprime usando la compresión gzip.

```js
const compressedReadableStream = inputReadableStream.pipeThrough(
  new CompressionStream("gzip"),
);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
