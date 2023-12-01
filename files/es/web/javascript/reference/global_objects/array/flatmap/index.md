---
title: Array.prototype.flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Array/flatMap
---

{{JSRef}} {{SeeCompatTable}}

El método **`flatMap()`** primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en una nueva matriz. Es idéntico a un [map](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map) seguido de un [flatten](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/flatten)de profundidad 1, pero `flatMap` es a menudo útil y la fusión de ambos en un método es ligeramente más eficiente.

{{EmbedInteractiveExample("pages/js/array-flatmap.html")}}

La fuente de este ejemplo interactivo, se almacena en un repositorio de GitHub. Si desea contribuir al proyecto de ejemplos interactivos, clone <https://github.com/mdn/interactive-examples> y envíenos una solicitud de extracción.

## Sintaxis

```
var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])
```

### Parámetros

- `callback`

  - : Función que produce un elemento de la nueva matriz, tomando tres argumentos:

    - `currentValue`

      - : El elemento actual que se procesa en la matriz.

    - `index`{{optional_inline}}
      - : El índice del elemento actual que se procesa en la matriz.
    - `array`{{optional_inline}}
      - : La matriz `map` fue llamada.

- `thisArg`{{optional_inline}}
  - : Valor para usar como `this` al ejecutar `callback`.

### Valor de retorno

Una nueva matriz con cada elemento es el resultado de la función de devolución de llamada y se aplana a una profundidad de 1.

## Descripción

Ver {{jsxref("Array.prototype.map()")}} para una descripción detallada de la función de devolución de llamada. El método `flatMap` es idéntico a [`map`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map) seguido de una llamada a [`flatten`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/flatten) de profundidad 1.

## Ejemplos

### `map` y `flatMap`

```js
var arr1 = [1, 2, 3, 4];

arr1.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

// solo un nivel es aplanado
arr1.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]
```

//=> \[1, 2, 3, 4, 5, 6, 7, 8, 9]

## Alternativa

### `reduce` y `concat`

```js
var arr1 = [1, 2, 3, 4];

arr1.flatMap((x) => [x * 2]);
// es equivalente a
arr1.reduce((acc, x) => acc.concat([x * 2]), []);
// [2, 4, 6, 8]
```

//=> \[1, 2, 3, 4, 5, 6, 7, 8, 9]

## Polyfill

Este polyfill necesita [Array.prototype.flat polyfill](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

```js
if (!Array.prototype.flatMap) {
  Array.prototype.flatMap = function () {
    return Array.prototype.map.apply(this, arguments).flat(1);
  };
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Array.prototype.flatten()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Array.prototype.concat()")}}
