---
title: "DecompressionStream: constructor de DecompressionStream()"
short-title: DecompressionStream()
slug: Web/API/DecompressionStream/DecompressionStream
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

El constructor de **`DecompressionStream()`** crea un nuevo objeto {{domxref("DecompressionStream")}} que descomprime un flujo de datos.

## Sintaxis

```js-nolint
new DecompressionStream(format)
```

### Parámetros

- `format`
  - : Uno de los siguientes formatos de compresión:
    - `"gzip"`
      - : Descomprime el flujo usando el formato [GZIP](https://www.rfc-editor.org/rfc/rfc1952).
    - `"deflate"`
      - : Descomprime el flujo usando el algoritmo [DEFLATE](https://www.rfc-editor.org/rfc/rfc1950) en ZLIB Compressed Data Format.
        El formato ZLIB incluye una cabecera con información sobre el método de compresión y el tamaño sin comprimir de los datos, y una suma de verificación al final para verificar la integridad de los datos.
    - `"deflate-raw"`
      - : Descomprime el flujo usando el algoritmo [DEFLATE](https://www.rfc-editor.org/rfc/rfc1951) sin cabecera ni suma de verificación al final.

### Excepciones

- {{jsxref("TypeError")}}
  - : Lanzado si el formato pasado al constructor no está soportado.

## Ejemplos

En este ejemplo, un blob comprimido con gzip es descomprimido.

```js
const ds = new DecompressionStream("gzip");
const decompressedStream = blob.stream().pipeThrough(ds);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
