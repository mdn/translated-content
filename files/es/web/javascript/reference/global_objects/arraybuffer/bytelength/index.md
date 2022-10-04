---
title: ArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
tags:
  - ArrayBuffer
  - JavaScript
  - Propiedad
  - Prototipo
translation_of: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
original_slug: Web/JavaScript/Referencia/Objetos_globales/ArrayBuffer/byteLength
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

| Especificación                                                                                                                               | Estado                           | Comentario                              |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------- |
| {{SpecName('Typed Array')}}                                                                                                         | {{Spec2('Typed Array')}} | Reemplazado por ECMAScript 2015.        |
| {{SpecName('ES2015', '#sec-get-arraybuffer.prototype.bytelength', 'ArrayBuffer.prototype.byteLength')}}     | {{Spec2('ES2015')}}         | Definición inicial en un estándar ECMA. |
| {{SpecName('ESDraft', '#sec-get-arraybuffer.prototype.bytelength', 'ArrayBuffer.prototype.byteLength')}} | {{Spec2('ESDraft')}}     |                                         |

## Compatibilidad con navegadores

{{Compat("javascript.builtins.ArrayBuffer.byteLength")}}

## Ver también

- {{jsxref("ArrayBuffer")}}
