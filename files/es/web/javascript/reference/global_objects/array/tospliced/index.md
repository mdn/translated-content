---
title: Array.prototype.toSpliced()
short-title: toSpliced()
slug: web/javascript/reference/global_objects/array/tospliced
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.toSpliced
sidebar: jsref
---

{{JSRef}}

El método **`toSpliced()`** pertenece a las instancias de {{jsxref("Array")}} y es la versión [copying](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) del método {{jsxref("Array/splice", "splice()")}}. El método `toSpliced()` devuelve un nuevo array con los elementos eliminados y/o reemplazados al índice dado sin alterar el array original.

## Sintaxis

```js-nolint
toSpliced(start)
toSpliced(start, deleteCount)
toSpliced(start, deleteCount, item1)
toSpliced(start, deleteCount, item1, item2)
toSpliced(start, deleteCount, item1, item2, /* …, */ itemN)
```

### Parámetros

- `start`

  - : Índice basado en cero a partir del cual se comienzan a modificar los elementos del array, [convertido en un entero](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Índices negativos cuentan hacia atrás desde el final del array — si `-array.length <= start < 0`, `start + array.length` es usado.
    - Si `start < -array.length` o `start` es omitido, `0` es usado.
    - Si `start >= array.length`, ningún elemento será eliminado, pero el método se comportará como una función de adición, agregando tantos elementos como hayan sido proporcionados.

- `skipCount` {{optional_inline}}

  - : Un entero que indica el número de elementos para eliminar, o s`altear, en el array partiendo de `start`.

    Si `skipCount` es omitido, o si su valor es más grande o igual a la cantidad de elementos después de la posición dada por `start`, entonces todos los elementos desde `start` hasta el fin del array serán eliminados. Sin embargo, si deseas pasar cualquier parámetro `itemN`, deberías pasar `Infinity` como `skipCount` para eliminar todos los elementos luego de `start`, ya que un valor explicito `undefined` es [convertido](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) a `0`.

    Si `skipCount` es `0` o negativo, no se eliminarán elementos.
    En ese caso, debes especificar al menos un nuevo elemento (ver abajo).

- `item1`, …, `itemN` {{optional_inline}}

  - : Los elementos que se añadirán al array, comenzando desde `start`.

    Si no se especifica ningún elemento, `toSpliced()` solo eliminará elementos del array.

### Valor de retorno

Un nuevo array que consta de todos los elementos anteriores a `start`, seguidos de `item1`, `item2`, …, `itemN`, y de todos los elementos posteriores a `start + skipCount`.

## Descripción

El método `toSpliced()`, al igual que `splice()`, realiza múltiples operaciones a la vez: elimina el número especificado de elementos del array a partir del índice dado, y a continuación, inserta los elementos especificados en ese mismo índice. Sin embargo, devuelve un nuevo array en lugar de modificar el original, por lo que los elementos eliminados no se devuelven, sino que permanecen accesibles en el array original.

El método `toSpliced()` nunca produce un [array disperso](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays). Si el array de origen es disperso, los espacios vacíos se reemplazan por `undefined` en el nuevo array.

El método `toSpliced()` es [genérico](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Solo espera que el valor de `this` tenga una propiedad `length` y propiedades indexadas por enteros.

## Ejemplos

### Eliminando, agregando y reemplazando elementos

`toSpliced()` permite eliminar, agregar y reemplazar elementos de un array, y crear uno nuevo de forma más eficiente que usando `slice()` y `concat()`.

```js
const months = ["Jan", "Mar", "Apr", "May"];

// Insertando un elemento en el índice 1
const months2 = months.toSpliced(1, 0, "Feb");
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// Eliminando dos elementos empezando desde el índice 2
const months3 = months2.toSpliced(2, 2);
console.log(months3); // ["Jan", "Feb", "May"]

// Reemplazando un elemento en el índice 1 con dos nuevos elementos
const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// El array original no fue modificado
console.log(months); // ["Jan", "Mar", "Apr", "May"]
```

### Uso de toSpliced() en arrays dispersos

El método `toSpliced()` siempre crea un array denso, reemplazando los huecos por `undefined`.

```js
const arr = [1, , 3, 4, , 6];
console.log(arr.toSpliced(1, 2)); // [1, 4, undefined, 6]
```

### Llamar toSpliced() en objetos que no son arrays

El método `toSpliced()` lee la propiedad `length` de `this`. A continuación, lee las propiedades con claves enteras necesarias y las escribe en el nuevo array.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
console.log(Array.prototype.toSpliced.call(arrayLike, 0, 1, 2, 3));
// [2, 3, undefined, 4]
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Polyfill of `Array.prototype.toSpliced` in `core-js`](https://github.com/zloirock/core-js#change-array-by-copy)
- [es-shims polyfill of `Array.prototype.toSpliced`](https://www.npmjs.com/package/array.prototype.tospliced)
- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("Array.prototype.with()")}}
