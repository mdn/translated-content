---
title: "CompressionStream: constructor de CompressionStream()"
short-title: CompressionStream()
slug: Web/API/CompressionStream/CompressionStream
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

El constructor de **`CompressionStream()`** crea un nuevo objeto {{domxref("CompressionStream")}} que comprime un flujo de datos.

## Sintaxis

```js-nolint
new CompressionStream(format)
```

### Parámetros

- `format`
  - : Uno de los siguientes formatos de compresión soportados:
    - `"gzip"`
      - : Comprime el flujo usando el formato [GZIP](https://www.rfc-editor.org/rfc/rfc1952).
    - `"deflate"`
      - : Comprime el flujo usando el algoritmo [DEFLATE](https://www.rfc-editor.org/rfc/rfc1950) en ZLIB Compressed Data Format.
        El formato ZLIB incluye una cabecera con información sobre el método de compresión y el tamaño sin comprimir de los datos, y una suma de verificación al final para verificar la integridad de los datos.
    - `"deflate-raw"`
      - : Comprime el flujo usando el algoritmo [DEFLATE](https://www.rfc-editor.org/rfc/rfc1951) sin cabecera ni suma de verificación al final.

### Excepciones

- {{jsxref("TypeError")}}
  - : Lanzado si el formato pasado al constructor no está soportado.

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
