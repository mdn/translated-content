---
title: DecompressionStream
slug: Web/API/DecompressionStream
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

La interfaz **`DecompressionStream`** de {{domxref('Compression Streams API','','',' ')}} es una API para descomprimir un flujo de datos.

## Constructor

- {{domxref("DecompressionStream.DecompressionStream", "DecompressionStream()")}}
  - : Crea un nuevo `DecompressionStream`

## Propiedades de la instancia

- {{domxref("DecompressionStream.readable")}}
  - : Devuelve la instancia de {{domxref("ReadableStream")}} controlada por este objeto.
- {{domxref("DecompressionStream.writable")}}
  - : Devuelve la instancia de {{domxref("WritableStream")}} controlada por este objeto.

## Ejemplos

En este ejemplo, un blob es descomprimido usando la compresión gzip.

```js
const ds = new DecompressionStream("gzip");
const decompressedStream = blob.stream().pipeThrough(ds);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
