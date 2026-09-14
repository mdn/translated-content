---
title: "CompressionStream: propiedad readable"
short-title: readable
slug: Web/API/CompressionStream/readable
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

La propiedad de solo lectura **`readable`** de la interfaz {{domxref("CompressionStream")}} devuelve un {{domxref("ReadableStream")}}.

## Valor

Un {{domxref("ReadableStream")}}.

## Ejemplos

El siguiente ejemplo devuelve un {{domxref("ReadableStream")}} desde un `CompressionStream`.

```js
let stream = new CompressionStream("gzip");
console.log(stream.readable); // Un ReadableStream
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
