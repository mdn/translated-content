---
title: ArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
---

{{JSRef}}

El objeto **`ArrayBuffer`** se usa para representar un buffer genérico, de datos binarios brutos con una longitud específica.

Es un arreglo de bytes, frecuentemente llamado de esta forma en otros lenguajes de programación. No se puede manipular directamente el contenido de un `ArrayBuffer`; en su lugar, se crea uno de los [objetos de arreglos tipados](/es/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) o un objeto {{jsxref("DataView")}} que representa el buffer en un formato específico, y se usa para leer y escribir el contenido del buffer.

El constructor [`ArrayBuffer`](/es/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer) crea un nuevo `ArrayBuffer` de la longitud especificada en bytes. También se puede obtener un `ArrayBuffer` desde datos existentes, por ejemplo, desde una cadena de caracteres en [Base64](/es/docs/Glossary/Base64) o desde un archivo local.

## Constructor

- {{jsxref("ArrayBuffer.ArrayBuffer", "ArrayBuffer()")}}
  - : Crea un nuevo objeto `ArrayBuffer`.

## Propiedades estáticas

- {{jsxref("ArrayBuffer.@@species", "get ArrayBuffer[@@species]")}}
  - : La función constructora que se usa para crear objetos derivados.

## Métodos estáticos

- {{jsxref("ArrayBuffer.isView", "ArrayBuffer.isView(<var>arg</var>)")}}
  - : Devuelve `true` si `arg` es una de las vistas de `ArrayBuffer`, como [objetos de arreglo tipados](/es/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) o un {{jsxref("DataView")}}. Devuelve `false` en caso contrario.

## Propiedades de instancias

- {{jsxref("ArrayBuffer.prototype.byteLength")}}
  - : Propiedad de solo lectura con la longitud en bytes del `ArrayBuffer`. Se establece cuando el arreglo es construido y no puede ser cambiada.

## Métodos de instancias

- {{jsxref("ArrayBuffer.prototype.slice()")}}
  - : Devuelve un nuevo `ArrayBuffer` que contiene una copia de los bytes de este `ArrayBuffer` desde el comienzo (inclusivo) `begin` hasta el fin (exclusivo) `end`. Si `begin` o `end` son negativos, esto se refiere a un índice desde el final del arreglo, en lugar del comienzo.

## Ejemplos

### Creando un `ArrayBuffer`

En este ejemplo, se crea un buffer de 8 bytes con una vista {{jsxref("Int32Array")}} consultando el buffer.

```js
const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Un polyfill de `ArrayBuffer` está disponible en [`core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [Arraglos tipados en JavaScript](/es/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("SharedArrayBuffer")}}
- [RangeError: longitud de array invalida](/es/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
