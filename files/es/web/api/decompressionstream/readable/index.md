---
title: "DecompressionStream: propiedad readable"
short-title: readable
slug: Web/API/DecompressionStream/readable
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

La propiedad de solo lectura **`readable`** de la interfaz {{domxref("DecompressionStream")}} devuelve un {{domxref("ReadableStream")}}.

## Valor

Un {{domxref("ReadableStream")}}.

## Examples

El siguiente ejemplo devuelve un {{domxref("ReadableStream")}} desde un `DecompressionStream`.

```js
const stream = new DecompressionStream("gzip");
console.log(stream.readable); // Un ReadableStream
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
