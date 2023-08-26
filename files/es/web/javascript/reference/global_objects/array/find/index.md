---
title: Array.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/Array/find
---

{{JSRef}}

El método **`find()`** devuelve el **valor** del **primer elemento** del array que cumple la función de prueba proporcionada.

{{EmbedInteractiveExample("pages/js/array-find.html","shorter")}}

- Si necesitas el **índice** del elemento encontrado en el array, utiliza {{jsxref("Array.findIndex", "findIndex()")}}.
- Si necesitas encontrar el **índice de un elemento**, {{jsxref("Array.prototype.indexOf()")}}. (Es similar a {{jsxref("Array.findIndex", "findIndex()")}}, pero comprueba la igualdad de cada elemento con el valor en lugar de usar una función de prueba.)
- Si necesitas encontrar si un valor **existe** en un array, utiliza {{jsxref("Array.prototype.includes()")}}.
- Si necesitas encontrar si algún elemento cumple la función de prueba proporcionada, usa {{jsxref("Array.prototype.some()")}}.

## Sintaxis

```
arr.find(callback(element[, index[, array]])[, thisArg])
```

### Parámetros

- `callback`
  - : Función que se ejecuta sobre cada valor en el array, tomando tres argumentos:_ `element`
    _ : El elemento actual que se está procesando en el array.
    - `index` {{optional_inline}}
      - : El índice (posición) del elemento actual que se está procesando en el array.
    - `array` {{optional_inline}}
      - : El array desde el que se llama al método `find`.
- `thisArg` {{optional_inline}}
  - : Objeto a usar como [`this`](/es/docs/Web/JavaScript/Referencia/Operadores/this) cuando se ejecuta `callback`.

### Valor devuelto

El **valor** del **primer elemento** del array que cumple la función de prueba proporcionada; de lo contrario, devuelve {{jsxref("undefined")}}.

## Descripción

El método `find` ejecuta la función `callback` una vez por cada índice del array hasta que encuentre uno en el que el `callback` devuelva un valor [verdadero](/es/docs/Glossary/Truthy). Si es así, `find` devuelve inmediatamente el valor del elemento. En caso contrario, `find` devuelve {{jsxref("undefined")}}.

`callback` se invoca con tres argumentos: el valor del elemento, el índice del elemento y el objeto `Array` que está siendo recorrido.

Si un parámetro `thisArg` es proporcionado al método `find`, este será utilizado como `this` para cada invocación del callback. Si no se proporciona el parámetro, entonces se utiliza {{jsxref("undefined")}}.

El método `find` no transforma el array desde el cual es llamado, pero la función proporcionada en `callback` sí. En ese caso, los elementos procesados por `find` son establecidos _antes_ de la primera invocación de `callback`. Por lo tanto:

- `callback` no visitará ningún elemento añadido al array después de que comience la llamada a `find`.
- Si un elemento existente no visitado del array es modificado por `callback`, su valor que se pasa al `callback` que lo visita será el valor en el momento en que `find` visita ese índice del elemento.
- Los elementos que sean {{jsxref("delete", "deleted")}} (eliminados) aún se visitan.

## Ejemplos

### Encontrar un objeto en un array por una de sus propiedades

```js
const inventario = [
  { nombre: "manzanas", cantidad: 2 },
  { nombre: "bananas", cantidad: 0 },
  { nombre: "cerezas", cantidad: 5 },
];

function esCereza(fruta) {
  return fruta.nombre === "cerezas";
}

console.log(inventario.find(esCereza));
// { nombre: 'cerezas', cantidad: 5 }
```

#### Utilizando funciones flecha y destructuring

```js
const inventario = [
  { nombre: "manzanas", cantidad: 2 },
  { nombre: "bananas", cantidad: 0 },
  { nombre: "cerezas", cantidad: 5 },
];

const resultado = inventario.find((fruta) => fruta.nombre === "cerezas");

console.log(resultado); // { nombre: 'cerezas', cantidad: 5 }
```

### Encontrar un número primo en un array

El siguiente ejemplo encuentra un elemento en un array que sea un número primo (o devuelve {{jsxref("undefined")}} si no hay un número primo).

```js
function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, no encontrado
console.log([4, 5, 8, 12].find(isPrime)); // 5
```

Los siguientes ejemplos muestran cómo elementos no existentes o eliminados son visitados y el valor pasado a `callback` es su valor cuando son visitados.

```js
// Declarar un array sin elementos en los índices 2, 3 y 4
const array = [0, 1, , , , 5, 6];

// Muestra todos los índices, no sólo aquellos que tienen valores asignados
array.find(function (value, index) {
  console.log("Visited index " + index + " with value " + value);
});

// Mostrar todos los índices, incluyendo los eliminados
array.find(function (value, index) {
  // Eliminar el elemento 5 en la primera iteración
  if (index == 0) {
    console.log("Deleting array[5] with value " + array[5]);
    delete array[5];
  }
  // El elemento 5 se visita aun habiendo sido eliminado
  console.log("Visited index " + index + " with value " + value);
});
// expected output:
// Deleting array[5] with value 5
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value undefined
// Visited index 6 with value 6
```

## Polyfill

Este método ha sido añadido a la espeficicación ECMAScript 2015 y puede no estar disponible en todas las implementaciones de JavaScript aún. Sin embargo, puedes utilizar el siguiente polyfill de `Array.prototype.find`:

```js
// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, "find", {
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
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    },
    configurable: true,
    writable: true,
  });
}
```

Si necesitas dar soporte a motores de JavaScript realmente obsoletos que no soportan [`Object.defineProperty`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), es mejor no utilizar el polyfill para los métodos `Array.prototype`, ya que no podrás hacerlos no enumerables.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Array.prototype.findIndex()")}} – encuentra y devuelve un índice
- {{jsxref("Array.prototype.includes()")}} – comprueba que un valor existe en el array
- {{jsxref("Array.prototype.filter()")}} – elimina todos los elementos que no coincidan
- {{jsxref("Array.prototype.every()")}} – comprueba todos los elementos
- {{jsxref("Array.prototype.some()")}} – comprueba hasta que un elemento coincide
