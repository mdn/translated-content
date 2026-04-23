---
title: "CompressionStream: propiedad writable"
short-title: writable
slug: Web/API/CompressionStream/writable
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

La propiedad de solo lectura **`writable`** de la interfaz {{domxref("CompressionStream")}} devuelve un {{domxref("WritableStream")}}.

## Valor

Un {{domxref("WritableStream")}}.

## Ejemplos

El siguiente ejemplo devuelve un {{domxref("WritableStream")}} desde un `CompressionStream`.

```js
let stream = new CompressionStream("gzip");
console.log(stream.writable); // Un WritableStream
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
