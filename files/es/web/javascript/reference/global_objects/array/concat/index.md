---
title: Array.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/Array/concat
---

{{JSRef}}

El método **`concat()`** se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

{{EmbedInteractiveExample("pages/js/array-concat.html","shorter")}}

## Sintaxis

```
var nuevo_array = viejo_array.concat(valor1[, valor2[, ...[, valorN]]])
```

### Parámetros

- `valorN` {{optional_inline}}
  - : Arrays y/o valores a concatenar en el nuevo array. Ver la descripción posterior para más detalles.

### Valor devuelto

Una nueva instancia de {{jsxref("Array")}}.

## Descripción

El método `concat` crea un nuevo array que consta de los elementos del objeto que lo llama, seguido, en orden de ingreso, por los elementos de cada parámetro (en caso de que el parámetro sea un array), o el parámetro mismo (en caso de que no sea un array). No se aplica de forma recursiva a parámetros con arreglos anidados.

El método `concat` no altera `this` el array original, ni ninguno de los que fueron ingresados como parámetros, sino que devuelve una copia superficial que contiene copias de los mismos elementos de los arrays originales combinados. Los elementos de los arrays originales son copiados en el nuevo array de la siguiente manera:

- Referencias a Objetos (no el objeto real): `concat` copia las referencias de objetos en el nuevo array. Ambos, el array original y el nuevo refieren al mismo objeto. Es decir, si un objeto referenciado es modificado, los cambios serán visibles tanto en el array nuevo como en el antiguo.
- Tipo de de datos como cadenas, números y boleanos (no objetos {{jsxref("Global_Objects/String", "String")}}, {{jsxref("Global_Objects/Number", "Number")}} o {{jsxref("Global_Objects/Boolean", "Boolean")}} objects): `concat` copia los valores de los strings y numeros en el nuevo array.

> **Nota:** Al concatenar arrays o valores no se modificarán los originales. Además, las operaciones en el nuevo array (excepto las operaciones en elementos que son referencias a objetos) no tendrán efecto en el array original, y viceversa.

## Ejemplos

### Concatenando dos arrays

En el siguiente código se concatenan dos arrays:

```js
const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];

letters.concat(numbers);
// result in ['a', 'b', 'c', 1, 2, 3]
```

### Concatenando tres arrays

En el siguiente código se concatenan tres arrays:

```js
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Concatenando valores a un array

En el siguiente código se concatenan tres valores a un array:

```js
var alpha = ["a", "b", "c"];

var alphaNumeric = alpha.concat(1, [2, 3]);

console.log(alphaNumeric);
// Da como resultado: ['a', 'b', 'c', 1, 2, 3]
```

### Concatenando arrays anidados

En el siguiente código concatena arrays anidados y demuestra retención de referencias:

```js
var num1 = [[1]];
var num2 = [2, [3]];

var nums = num1.concat(num2);

console.log(nums);
// Da como resultado: [[1], 2, [3]]

// modifica el primer elemento de num1
num1[0].push(4);

console.log(nums);
// Da como resultado: [[1, 4], 2, [3]]
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Array.push", "push")}} / {{jsxref("Array.pop", "pop")}} — añadir/eliminar elementos desde el fin del array
- {{jsxref("Array.unshift", "unshift")}} / {{jsxref("Array.shift", "shift")}} — añadir/eliminar elementos desde el comienzo del array
- {{jsxref("Array.splice", "splice")}} — añadir/eliminar elementos desde una posición específica del array
- {{jsxref("String.prototype.concat()")}}
- {{jsxref("Symbol.isConcatSpreadable")}} – controla el flattening (aplanamiento).
