---
title: "DecompressionStream: propiedad writable"
short-title: writable
slug: Web/API/DecompressionStream/writable
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

La propiedad de solo lectura **`writable`** de la interfaz {{domxref("DecompressionStream")}} devuelve un {{domxref("WritableStream")}}.

## Valor

Un {{domxref("WritableStream")}}.

## Examples

El siguiente ejemplo devuelve un {{domxref("WritableStream")}} desde un `DecompressionStream`.

```js
let stream = new DecompressionStream("gzip");
console.log(stream.writable); // Un WritableStream
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
