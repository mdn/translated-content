---
title: Array.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/Array/filter
---

{{JSRef}}

El método **`filter()`** crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

{{EmbedInteractiveExample("pages/js/array-filter.html")}}

## Sintaxis

```
var newArray = arr.filter(callback(currentValue[, index[, array]])[, thisArg])
```

### Parámetros

- `callback`

  - : Función que **comprueba cada elemento** del array para ver si cumple la condición (también llamada predicado). Retorna `true` si el elemento la cumple o en caso contrario retornará `false`. Acepta tres parámetros:

    - `currentValue`
      - : El elemento actual del array que está siendo procesado.
    - `index` {{optional_inline}}
      - : El índice del elemento actual del array que está siendo procesado.
    - `array` {{optional_inline}}
      - : El array sobre el que se ha llamado `filter`.

- `thisArg` {{optional_inline}}
  - : Opcional. Valor a utilizar como `this` cuando se ejecuta `callback`.

### Valor devuelto

Un nuevo array con los elementos que cumplen la condición. Si ningún elemento cumple la condición, se devolverá un array vacío.

## Descripción

`filter()` llama a la función `callback` sobre cada elemento del array, y construye un nuevo array con todos los valores para los cuales `callback` devuelve un valor verdadero. `callback` es invocada sólo para índices del array que tengan un valor asignado. No se invoca sobre índices que hayan sido borrados o a los que no se les haya asignado algún valor. Los elementos del array que no cumplan la condición `callback` simplemente los salta, y no son incluidos en el nuevo array.

`callback` se invoca con tres argumentos:

1. El valor de cada elemento
2. El índice del elemento
3. El objeto Array que se está recorriendo

Si se proporciona un parámetro `thisArg` a `filter()`, este será pasado a `callback` cuando sea invocado, para usarlo como valor `this`. De lo contrario, se pasará el valor `undefined` como valor `this`. El valor `this` dentro del `callback` se determina conforme a las [las normas habituales para determinar el _this_ visto por una función.](/es/docs/Web/JavaScript/Reference/Operators/this)

`filter()` no hace mutar el array sobre el cual es llamado.

El rango de elementos procesados por `filter()` se establece antes de la primera invocación de `callback`. Los elementos que se añadan al array después de que comience la llamada a `filter()` no serán visitados por `callback`. Si se modifica o elimina un elemento existente del array, cuando pase su valor a `callback` será el que tenga cuando `filter()` lo recorra; los elementos que son eliminados no son recorridos.

## Ejemplos

### Filtrando todos los valores pequeños

El siguiente ejemplo usa `filter()` para crear un array filtrado que excluye todos los elementos con valores inferiores a 10.

```js
function esSuficientementeGrande(elemento) {
  return elemento >= 10;
}
var filtrados = [12, 5, 8, 130, 44].filter(esSuficientementeGrande);
// filtrados es [12, 130, 44]
```

### Filtrando entradas inválidas desde un JSON

El siguiente ejemplo emplea `filter()` para crear un json filtrado con todos lo elementos que tengan id numérico distinto de cero.

```js
var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
];

var entradasInvalidas = 0;
// Si el elemento tiene un atributo id, y su valor correspondiente es un numero
// Y no es el valor NaN, entonces es una entrada válida
function filtrarPorID(obj) {
  if ("id" in obj && typeof obj.id === "number" && !isNaN(obj.id)) {
    return true;
  } else {
    entradasInvalidas++;
    return false;
  }
}

var arrPorID = arr.filter(filtrarPorID);

console.log("Array Filtrado\n", arrPorID);
// [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]

console.log("Número de Entradas Invalidas = ", entradasInvalidas);
// 4
```

### Búsqueda en el arreglo

El siguiente ejemplo emplea filter() para filtrar el contendio de un arreglo en función de un criterio de búsqueda.

```js
var fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filtra la matríz en función de un criterio de búsqueda (query)
 */
function filterItems(query) {
  return fruits.filter(function (el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  });
}

console.log(filterItems("ap")); // ['apple', 'grapes']
console.log(filterItems("an")); // ['banana', 'mango', 'orange']
```

### Implementación en ES2015

```js
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filtra la matríz en función de un criterio de búsqueda (query)
 */
const filterItems = (query) => {
  return fruits.filter(
    (el) => el.toLowerCase().indexOf(query.toLowerCase()) > -1,
  );
};

console.log(filterItems("ap")); // ['apple', 'grapes']
console.log(filterItems("an")); // ['banana', 'mango', 'orange']
```

## Polyfill

`filter()` se añadió a la norma ECMA-262 en la 5ta edición; como tal puede no estar presente en todas las implementaciones de la norma. Puedes sobrellevarlo insertando el siguiente código al comienzo de su programa, para permitir el uso de `filter()` en implementaciones de ECMA-262 que no lo soporten de forma nativa. Este algoritmo es exactamente el especificado en ECMA-262, 5ta edición, supone que `fn.call` evalua al valor original de {{jsxref("Function.prototype.call")}}, y que {{jsxref("Array.prototype.push")}} tiene su valor original.

```
if (!Array.prototype.filter){
  Array.prototype.filter = function(func, thisArg) {
    'use strict';
    if ( ! ((typeof func === 'Function' || typeof func === 'function') && this) )
        throw new TypeError();

    var len = this.length >>> 0,
        res = new Array(len), // preallocate array
        t = this, c = 0, i = -1;

    var kValue;
    if (thisArg === undefined){
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          kValue = t[i]; // in case t is changed in callback
          if (func(t[i], i, t)){
            res[c++] = kValue;
          }
        }
      }
    }
    else{
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          kValue = t[i];
          if (func.call(thisArg, t[i], i, t)){
            res[c++] = kValue;
          }
        }
      }
    }

    res.length = c; // shrink down array to proper size
    return res;
  };
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.reduce()")}}
