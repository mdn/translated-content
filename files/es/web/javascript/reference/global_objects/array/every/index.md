---
title: Array.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/Array/every
---

{{JSRef}}

Determina si todos los elementos en el array satisfacen una condición.

> **Advertencia:** ¡Llamar este método en un array vacío devuelve `true` para cualquier condición!

{{EmbedInteractiveExample("pages/js/array-every.html")}}

La fuente de este ejemplo interactivo se encuentra en GitHub. Si desea contribuir con el proyecto de ejemplos interactivos, clone <https://github.com/mdn/interactive-examples> y envíenos un*pull* _request_.

## Sintaxis

```
arr.every(callback(element[, index[, array]])[, thisArg])
```

### Parámetros

- `callback`

  - : Una función para probar cada elemento; recibe tres argumentos:

    - `currentValue` (required)
      - : El elemento actual del arreglo que está siendo procesado.
    - `index` {{Optional_inline}}
      - : El índice del elemento actual del arreglo que está siendo procesado.
    - `array` {{Optional_inline}}
      - : El arreglo sobre el cual fue llamado `every`.

- `thisArg` {{Optional_inline}}
  - : Valor por usar como `this` cuando se ejecute `callback`.

### Valor de retorno

`true` si la función de devolución de llamada devuelve un valor de {{Glossary("truthy")}} para cada elemento de matriz; de lo contrario, `false`.

## Descripción

El método `every` ejecuta la función `callback` dada una vez por cada elemento presente en el arreglo hasta encontrar uno que haga retornar un valor falso a `callback` (un valor que resulte falso cuando se convierta a booleano). Si no se encuentra tal elemento, el método `every` de inmediato retorna `false`. O si `callback` retorna verdadero para todos los elementos, `every` retornará `true`. `callback` es llamada sólo para índices del arreglo que tengan valores asignados; no se llama para índices que hayan sido eliminados o a los que no se les haya asignado un valor.

`callback` es llamada con tres argumetos: el valor del elemento, el índice del elemento y el objeto Array que está siendo recorrido.

Si se proporciona un parámetro `thisArg` a `every`, será pasado a la función `callback` cuando sea llamada, usándolo como valor `this`. En otro caso, se pasará el valor `undefined` para que sea usado como valor `this`. El valor `this` observable por parte de `callback` se determina de acuerdo a [las normas usuales para determinar el `this` visto por una función](/es/docs/Web/JavaScript/Reference/Operators/this).

`every` no modifica el arreglo sobre el cual es llamado.

El intervalo de elementos procesados por `every` se establece antes de la primera llamada a `callback`. Los elementos que se agreguen al arreglo después de que la función `every` comience no serán vistos por la función `callback`. Si se modifican elementos existentes en el arreglo, su valor cuando sea pasado a `callback` será el valor que tengan cuando sean visitados; los elementos que se eliminen no serán visitados.

`every` opera como el cuantificador "para todo" en matemáticas. En particular con el arreglo vacío retorna true. (es una [verdad vacua](http://en.wikipedia.org/wiki/Vacuous_truth#Vacuous_truths_in_mathematics) que todos los elementos del [conjunto vacío](http://en.wikipedia.org/wiki/Empty_set#Common_problems) satisfacen una condición dada.)

## Ejemplos

### Probando el tamaño de todos los elementos de un arreglo

El siguiente ejemplo prueba si todos los elementos de un arreglo son mayores que 10.

```js
function esSuficientementeGrande(elemento, indice, arrreglo) {
  return elemento >= 10;
}
[12, 5, 8, 130, 44].every(esSuficientementeGrande); // false
[12, 54, 18, 130, 44].every(esSuficientementeGrande); // true
```

### Usar funciones flecha

Las [funciones flecha](/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions) proveen una sintaxis más corta para la misma prueba.

```js
[12, 5, 8, 130, 44].every((elem) => elem >= 10); // false
[12, 54, 18, 130, 44].every((elem) => elem >= 10); // true
```

## Polyfill

`every` fue añadida a la norma ECMA-262 en la 5ta edición; por lo que podría no estar presente en otras implementaciones de la norma. Puede sobrellevarlo insertando el siguiente código al comienzo de su programa, permitiendo el uso de `every` en implementación que no lo soporten de manera nativa. Este algoritmo es exactamente el especificado en ECMA-262, 5ta edición, suponiendo que `Object` y `TypeError` tienen sus valores originales y que `callbackfn.call` evalua al valor original de {{jsxref("Function.prototype.call")}}

```js
if (!Array.prototype.every) {
  Array.prototype.every = function (callbackfn, thisArg) {
    "use strict";
    var T, k;

    if (this == null) {
      throw new TypeError("this is null or not defined");
    }

    // 1. Let O be the result of calling ToObject passing the this
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal method
    //    of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
    if (typeof callbackfn !== "function") {
      throw new TypeError();
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Let k be 0.
    k = 0;

    // 7. Repeat, while k < len
    while (k < len) {
      var kValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {
        // i. Let kValue be the result of calling the Get internal method
        //    of O with argument Pk.
        kValue = O[k];

        // ii. Let testResult be the result of calling the Call internal method
        //     of callbackfn with T as the this value and argument list
        //     containing kValue, k, and O.
        var testResult = callbackfn.call(T, kValue, k, O);

        // iii. If ToBoolean(testResult) is false, return false.
        if (!testResult) {
          return false;
        }
      }
      k++;
    }
    return true;
  };
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.every()")}}
