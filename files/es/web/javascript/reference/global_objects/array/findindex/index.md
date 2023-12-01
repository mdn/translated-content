---
title: Array.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findIndex
---

{{JSRef}}

El método **`findIndex()`** devuelve el **índice** del **primer elemento** de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.

{{EmbedInteractiveExample("pages/js/array-findindex.html","shorter")}}

Vea también el método {{jsxref("Array.find", "find()")}}, que devuelve el **valor** de un elemento encontrado en el array en lugar de su índice.

## Sintaxis

```
arr.findIndex(callback( element[, index[, array]] )[, thisArg])
```

### Parámetros

- `callback`
  - : Función a ejecutar en cada uno de los valores del array hasta que devuelve `true`, indicando que el elemento que la cumple fue encontrado.Recibe tres argumentos:_ `element`
    _ : El elemento actual siendo procesado en el array.
    - `index` {{optional_inline}}
      - : El índice del elemento actual que está siendo procesado en el array.
    - `array` {{optional_inline}}
      - : El array `findIndex()` de donde fue llamado.
- `thisArg` {{optional_inline}}
  - : Objeto opcional para usar como `this` cuando se ejecuta el `callback`.

### Valor devuelto

Un índice en el array si un elemento pasa la prueba; en caso contrario, `-1`.

## Descripción

El método `findIndex()` ejecuta la función de _`callback`_ una vez por cada índice del array hasta que encuentre uno donde _`callback`_ devuelva un valor verdadero (eso es, un valor que [fuerza](/es/docs/Glossary/Type_Conversion) un `true`).

Si dicho elemento es encontrado, `findIndex()` inmediatamente devuelve el índice del elemento. Si la función _`callback`_ nunca devuelve un valor verdadero (o el tamaño del array es 0), `findIndex` devuelve `-1`.

> **Nota:** A diferencia de otros métodos de arrays como {{jsxref("Array.some()")}}, `callback` se ejecuta incluso en índices sin valores asignados.

_`callback`_ se invoca con tres argumentos:

1. El valor del elemento
2. El índice del elemento
3. El Array que será recorrido.

Si el parámetro `thisArg` es provisto a findIndex, entonces será usado como el this para cada invocación del `callback`. Si no es provisto, entonces {{jsxref("undefined")}} será utilizado.

El rango de elementos procesados por `findIndex()` se establece antes de la primera invocación de la función _`callback`_. Los elementos añadidos al array después de que la llamada a `findIndex()` comience no serán visitados por el `callback`. Si un elemento existente que no ha sido visitado en el array es modificado por el _`callback`_, el valor pasado al _`callback`_ que lo visite será el valor en el momento en que `findIndex()` visite el índice del elemento.

Los elementos [eliminados](/es/docs/Web/JavaScript/Referencia/Operadores/delete) aún son visitados.

## Ejemplos

### Encontrar el índice de un número primo en un array

El siguiente ejemplo encuentra el índice de un elemento en el array que sea número primo (o devuelve `-1` si no hay ningún número primo).

```js
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start < 1) {
      return false;
    } else {
      start++;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, no encontrado
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2
```

### Encontrar un índice utilizando funciones flecha

El siguiente ejemplo encuentra el índice de una fruta utilizando funciones flecha.

```js
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex((fruit) => fruit === "blueberries");

console.log(index); // 3
console.log(fruits[index]); // blueberries
```

## Polyfill

```js
// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, "findIndex", {
    value: function (predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== "function") {
        throw new TypeError("predicate must be a function");
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return k.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return k;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return -1.
      return -1;
    },
    configurable: true,
    writable: true,
  });
}
```

Si necesita soporte para motores de JavaScript obsoletos que no soportan [`Object.defineProperty`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/defineProperty) es mejor no emplear polyfills para métodos `Array.prototype`, ya que no puede hacerlos no-enumerables.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.indexOf()")}}
