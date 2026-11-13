---
title: Array.prototype.toSorted()
slug: Web/JavaScript/Reference/Global_Objects/Array/toSorted
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

El método **`toSorted()`** devuelve un nuevo array con sus elementos ordenados en orden ascendente sin alterar el array original. Forma parte del objeto {{jsxref("Array")}} y es la versión
[copying](/es/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) del método {{jsxref("Array/sort", "sort()")}}.

## Sintaxis

```js-nolint
toSorted()
toSorted(compareFn)
```

### Parámetros

- `compareFn`
  - : Opcional. Una función que determina el orden de los elementos. Si es omitida, los elementos del array son convetidos en string y ordenados por su valor Unicode. Ver {{jsxref("Array/sort", "sort()")}} para más información.

### Valor devuelto

Un nuevo array con sus elementos ordenados de manera ascendente.

## Descripción

Ver {{jsxref("Array/sort", "sort()")}} para más información del parametro `compareFn`.

Cuando se usa en [arrays dispersos](/es/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), el método `toSorted()` itera las posiciones vacías del array como si tuvieran el valor de `undifined`.

El método `toSorted()` es [genérico](/es/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Solo requiere que el valor de `this` tenga una propiedad `length` y propiedades indexadas por enteros.

## Ejemplos

### Ordenando un array

```js
const months = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months.toSorted();
console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(months); // ['Mar', 'Jan', 'Feb', 'Dec']

const values = [1, 10, 21, 2];
const sortedValues = values.toSorted((a, b) => a - b);
console.log(sortedValues); // [1, 2, 10, 21]
console.log(values); // [1, 10, 21, 2]
```

Para más ejemplos de uso, ver {{jsxref("Array/sort", "sort()")}}.

### Usando toSorted() en arrays dispersos

Las posiciones vacías son ordenadas como si tuvieran el valor `undefined`. Siempre son ubicadas al final del array y no se invoca `compareFn` para ellas.

```js
console.log(["a", "c", , "b"].toSorted()); // ['a', 'b', 'c', undefined]
console.log([, undefined, "a", "b"].toSorted()); // ["a", "b", undefined, undefined]
```

### Llamar a toSorted() en objetos que no son arrays

El método `toSorted()` lee la propiedad `length` de `this`. Luego recopila todas las propiedades existentes indexadas por enteros en el rango de 0 a length - 1, las ordena y las escribe en un nuevo array.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
  3: 3, // ignorado por toSorted() dado que length es 3
};
console.log(Array.prototype.toSorted.call(arrayLike));
// [4, 5, undefined]
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Polyfill of `Array.prototype.toSorted` in `core-js`](https://github.com/zloirock/core-js#change-array-by-copy)
- [Indexed collections](/es/docs/Web/JavaScript/Guide/Indexed_collections) guía
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
