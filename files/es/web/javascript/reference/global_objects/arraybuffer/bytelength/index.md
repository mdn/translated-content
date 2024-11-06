---
title: ArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
---

{{JSRef}}

La propiedad de acceso **`byteLength`** representa la longitud de {{jsxref("ArrayBuffer")}} en bytes.

{{EmbedInteractiveExample("pages/js/arraybuffer-bytelength.html")}}

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
