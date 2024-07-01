---
title: Array.prototype.flat()
slug: Web/JavaScript/Reference/Global_Objects/Array/flat
---

{{JSRef}} {{SeeCompatTable}}

El método **`flat()`** crea una nueva matriz con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.

\\{{EmbedInteractiveExample("pages/js/array-flat.html")}}

## Sintaxis

```
var newArray = arr.flat([depth]);
```

### Parámetros

- `depth` {{optional_inline}}
  - : El nivel de profundidad que especifica qué tan profunda debe aplanarse una estructura de matriz anidada. El valor predeterminado es 1.

### Valor de retorno

Una nueva matriz con los elementos de la sub-matriz concatenados en ella.

## Ejemplos

### Aplanar matrices anidadas

```js
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]
```

### Aplanamiento y huecos de matriz

El método de aplanar elimina las ranuras vacías en las matrices:

```js
var arr4 = [1, 2, , 4, 5];
arr4.flat();
// [1, 2, 4, 5]
```

## Alternativa

### `reduce` y `concat`

```js
var arr1 = [1, 2, [3, 4]];
arr1.flat();

//aplanar una matriz de nivel único
arr1.reduce((acc, val) => acc.concat(val), []); // [1, 2, 3, 4]

//o
const flatSingle = (arr) => [].concat(...arr);
```

```js
//para permitir el aplanamiento a nivel profundo use recursión con reduce y concat
var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];

function flattenDeep(arr1) {
  return arr1.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
    [],
  );
}
flattenDeep(arr1); // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
```

```js
//aplanamiento profundo no recursivo usando un stack
var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];
function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // elimina ultimo valor del stack
    const next = stack.pop();
    if (Array.isArray(next)) {
      // agrega de nuevo los items al array, sin modificar la entrada original
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  //invierte para restaurar el orden de entrada
  return res.reverse();
}
flatten(arr1); // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
```

```js
//Aplanamiento profundo recursivo
function flatten(array) {
  var flattend = [];
  !(function flat(array) {
    array.forEach(function (el) {
      if (Array.isArray(el)) flat(el);
      else flattend.push(el);
    });
  })(array);
  return flattend;
}
```

## Polyfill

```js
if (!Array.prototype.flat) {
  Array.prototype.flat = function (depth) {
    var flattend = [];
    (function flat(array, depth) {
      for (let el of array) {
        if (Array.isArray(el) && depth > 0) {
          flat(el, depth - 1);
        } else {
          flattend.push(el);
        }
      }
    })(this, Math.floor(depth) || 1);
    return flattend;
  };
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Array.prototype.concat()")}}
