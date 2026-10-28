---
title: Array.prototype.keys()
short-title: keys()
slug: Web/JavaScript/Reference/Global_Objects/Array/keys
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

El método **`keys()`** de las instancias de {{jsxref("Array")}} devuelve un nuevo objeto _[iterador de arreglo](/es/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ que contiene las claves de cada índice del arreglo.

{{InteractiveExample("JavaScript Demo: Array.prototype.keys()")}}

```js interactive-example
const array = ["a", "b", "c"];
const iterator = array.keys();

for (const key of iterator) {
  console.log(key);
}

// Expected output: 0
// Expected output: 1
// Expected output: 2
```

## Sintaxis

```js-nolint
keys()
```

### Parámetros

Ninguno.

### Valor de retorno

Un nuevo [objeto iterador iterable](/es/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Descripción

Cuando se usa en [arreglos dispersos](/es/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), el método `keys()` itera las ranuras vacías como si tuvieran el valor `undefined`.

El método `keys()` es [genérico](/es/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Solo espera que el valor de `this` tenga una propiedad `length` y propiedades con claves enteras.

## Ejemplos

### Usar keys() en arreglos dispersos

A diferencia de {{jsxref("Object.keys()")}}, que solo incluye las claves que realmente existen en el arreglo, el iterador `keys()` no ignora los huecos que representan propiedades faltantes.

```js
const arr = ["a", , "c"];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys); // [0, 1, 2]
```

### Llamar a keys() en objetos que no son arreglos

El método `keys()` lee la propiedad `length` de `this` y luego produce todos los índices enteros entre 0 y `length - 1`. En realidad no se accede a ningún índice.

```js
const arrayLike = {
  length: 3,
};
for (const entry of Array.prototype.keys.call(arrayLike)) {
  console.log(entry);
}
// 0
// 1
// 2
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `Array.prototype.keys` en `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill de `Array.prototype.keys` de es-shims](https://www.npmjs.com/package/array.prototype.keys)
- Guía de [colecciones indexadas](/es/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.values()")}}
- [`Array.prototype[Symbol.iterator]()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- {{jsxref("TypedArray.prototype.keys()")}}
- [Protocolos de iteración](/es/docs/Web/JavaScript/Reference/Iteration_protocols)
