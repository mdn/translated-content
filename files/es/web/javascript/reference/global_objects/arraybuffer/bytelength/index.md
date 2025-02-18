---
title: ArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
---

{{JSRef}}

La propiedad de acceso **`byteLength`** representa la longitud de {{jsxref("ArrayBuffer")}} en bytes.

{{InteractiveExample("JavaScript Demo: ArrayBuffer.byteLength")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8);

// Use byteLength to check the size
const bytes = buffer.byteLength;

console.log(bytes);
// Expected output: 8
```

## Sintaxis

```
arraybuffer.byteLength
```

## Descripción

La propiedad `byteLength` es una propiedad de acceso cuya función de acceso de conjunto es `undefined`, lo que significa que solo puede leer esta propiedad. El valor se establece cuando la matriz se construye y no se puede cambiar. Esta propiedad devuelve `0` si este `ArrayBuffer` ha sido separado.

## Ejemplos

```js
var buffer = new ArrayBuffer(8);
buffer.byteLength; // 8
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("ArrayBuffer")}}
