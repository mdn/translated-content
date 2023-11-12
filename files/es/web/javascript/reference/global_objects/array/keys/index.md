---
title: Array.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Array/keys
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

El método **`keys()`** devuelve un nuevo objeto **Array Iterator** que contiene las claves para cada indice en el arreglo.

{{EmbedInteractiveExample("pages/js/array-keys.html")}}

## Sintaxis

```js-nolint
keys()
```

### Valor de retorno

Un nuevo objeto iterador {{jsxref("Array")}}.

## Descripción

Cuando es usado en [arreglos dispersos](/es/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), el método `keys()` itera las ranuras vacias como si tuvieran el valor `undefined`

El método `keys()` es [generico](/es/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Este solo espera el valor de `this` que tenga un propiedad `length` y propiedades con claves enteras.

## Ejemplos

### Usando keys() en arreglos dispersos

A diferencia de {{jsxref("Object.keys()")}}, el cual únicamente incluye las claves que realmente existen en el arreglo, el iterador `keys()` no ignora los huecos que representan las propiedades faltantes.

```js
const arr = ["a", , "c"];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys); // [0, 1, 2]
```

### Llamando keys() en un objeto que no es un arreglo

El método `keys()` lee la propiedad `length` de `this` y luego produce todos los indices entre 0 y `length - 1`. Realmente no ocurre ningún acceso al índice.

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

- [Polyfill de `Array.prototype.keys` en `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.values()")}}
- {{jsxref("Array.prototype.entries()")}}
- [Protocolos de iteración](/es/docs/Web/JavaScript/Reference/Iteration_protocols)
