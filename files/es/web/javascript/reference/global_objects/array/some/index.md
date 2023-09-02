---
title: Array.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/Array/some
---

{{JSRef}}

El método **`some()`** comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.

> **Nota:** Este método devuelve `false` para cualquier condición puesta en un array vacío.

{{EmbedInteractiveExample("pages/js/array-some.html")}}

## Sintaxis

```
arr.some(callback(element[, index[, array]])[, thisArg])
```

### Parámetros

- `callback`
  - : Función que verifica cada elemento, toma tres argumentos:_ `element`
    _ : El elemento actual siendo procesado en el array.
    - `index` {{Optional_inline}}
      - : El índice del elemento del array que se está procesando.
    - `array` {{Optional_inline}}
      - : El array sobre el que ha sido llamada la función `some()`.
- `thisArg` {{Optional_inline}}
  - : Valor a usar como `this` cuando se ejecute `callback`.

### Valor devuelto

**`true`** si la función `callback` devuelve un valor {{Glossary("truthy")}} para cualquier elemento del array; en caso contrario, **`false`**.

## Descripción

`some()` ejecuta la función `callback` una vez por cada elemento presente en el array hasta que encuentre uno donde `callback` retorna un valor verdadero (true). Si se encuentra dicho elemento, `some()` retorna `true` inmediatamente. Si no, `some()` retorna `false`. `callback` es invocada sólo para los índices del array que tienen valores asignados; no es invocada para índices que han sido borrados o a los que nunca se les han asignado valores.

`callback` es invocada con tres argumentos: el valor del elemento, el índice del elemento, y el objeto array sobre el que se itera.

Si se indica un parámetro `thisArg` a `some()`, se pasará a `callback` cuando es invocada, para usar como valor `this`. Si no, el valor {{jsxref("undefined")}} será pasado para usar como valor `this`. El valor `this` value observable por `callback` se determina de acuerdo a [las reglas habituales para determinar el `this` visible por una función](/es/docs/Web/JavaScript/Reference/Operators/this).

`some()` no modifica el array con el cual fue llamada.

El rango de elementos procesados por `some()` es configurado antes de la primera invocación de `callback`. Los elementos anexados al array luego de que comience la llamada a `some()` no serán visitados por `callback`. Si un elemento existente y no visitado del array es alterado por `callback`, su valor pasado al `callback` será el valor al momento que `some()` visita el índice del elemento; los elementos borrados no son visitados.

## Ejemplos

### Verificando el valor de los elementos de un array

El siguiente ejemplo verifica si algún elemento del array es mayor a 10.

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10); // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

### Verificando los elementos de un array usando funciones flecha

[Las funciones flecha (Arrow functions)](/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions) brindan una sintáxis más corta para el mismo test.

```js
[2, 5, 8, 1, 4].some((elem) => elem > 10); // false
[12, 5, 8, 1, 4].some((elem) => elem > 10); // true
```

### Comprobando si un elemento existe en un array

Para imitar la función del método `includes()`, esta función personalizada devuelve `true` si el elemento existe en el array:

```js
var fruits = ["apple", "banana", "mango", "guava"];

function checkAvailability(arr, val) {
  return arr.some(function (arrVal) {
    return val === arrVal;
  });
}

checkAvailability(fruits, "kela"); // false
checkAvailability(fruits, "banana"); // true
```

### Comprobando si un elemento existe en un array con funciones flecha

```js
var fruits = ["apple", "banana", "mango", "guava"];

function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}

checkAvailability(fruits, "kela"); // false
checkAvailability(fruits, "banana"); // true
```

### Convirtiendo cualquier valor a Boolean

```js
var TRUTHY_VALUES = [true, "true", 1];

function getBoolean(value) {
  "use strict";

  if (typeof value === "string") {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some(function (t) {
    return t === value;
  });
}

getBoolean(false); // false
getBoolean("false"); // false
getBoolean(1); // true
getBoolean("true"); // true
```

## Polyfill

`some()` fue agregado al estándar ECMA-262 en la 5ta edición; por ello, puede no estar presente en todas las implementaciones del estándar. Puedes trabajar sobre esto insertando el siguiente código al comienzo de tus scripts, permitiendo el uso de `some()` en implementaciones que no tienen soporte nativo. Este algoritmo es exactamente el mismo especificado en ECMA-262, 5ta edición, asumiendo que {{jsxref("Global_Objects/Object", "Object")}} y {{jsxref("Global_Objects/TypeError", "TypeError")}} tienen sus valores originales y que `fun.call` evalúa el valor original de{{jsxref("Function.prototype.call()")}}.

```js
// Pasos de producción de ECMA-262, Edición 5, 15.4.4.17
// Referencia: http://es5.github.io/#x15.4.4.17
if (!Array.prototype.some) {
  Array.prototype.some = function (fun /*, thisArg*/) {
    "use strict";

    if (this == null) {
      throw new TypeError("Array.prototype.some called on null or undefined");
    }

    if (typeof fun !== "function") {
      throw new TypeError();
    }

    var t = Object(this);
    var len = t.length >>> 0;

    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
      if (i in t && fun.call(thisArg, t[i], i, t)) {
        return true;
      }
    }

    return false;
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
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("TypedArray.prototype.some()")}}
