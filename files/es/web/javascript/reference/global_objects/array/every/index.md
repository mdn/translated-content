---
title: Array.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/Array/every
l10n:
  sourceCommit: 57375b77984037c614982a9327bc96101824db89
---

{{JSRef}}

El método **`every()`** de las instancias de {{jsxref("Array")}} prueba si todos los elementos del arreglo pasan la prueba implementada por la función proporcionada. Devuelve un valor booleano.

{{InteractiveExample("JavaScript Demo: Array.every()", "shorter")}}

```js interactive-example
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true
```

## Sintaxis

```js-nolint
every(callbackFn)
every(callbackFn, thisArg)
```

### Parámetros

- `callbackFn`
  - : Una función que se ejecuta para cada elemento del arreglo. Debe devolver un valor [_truthy_](/es/docs/Glossary/Truthy) para indicar que el elemento pasa la prueba y un valor [_falsy_](/es/docs/Glossary/Falsy) en caso contrario. La función se llama con los siguientes argumentos:
    - `element`
      - : El elemento actual que se está procesando en el arreglo.
    - `index`
      - : El índice del elemento actual que se está procesando en el arreglo.
    - `array`
      - : El arreglo `every()` desde el que fue llamada.
- `thisArg` {{optional_inline}}
  - : Un valor para usar como `this` al ejecutar `callbackFn`. Ver [métodos iterativos](/es/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Valor de retorno

`true` a menos que `callbackFn` devuelva un valor {{Glossary("falsy")}} para un elemento del arreglo, en cuyo caso se devuelve `false` inmediatamente.

## Descripción

El método `every()` es un [método iterativo](/es/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Llama a una función `callbackFn` proporcionada una vez por cada elemento de un arreglo, hasta que `callbackFn` devuelva un valor [_falsy_](/es/docs/Glossary/Falsy). Si se encuentra dicho elemento, `every()` devuelve inmediatamente `false` y deja de iterar por el arreglo. De lo contrario, si `callbackFn` devuelve un valor [_truthy_](/es/docs/Glossary/Truthy) para todos los elementos, `every()` devuelve `true`. Lea la sección [métodos iterativos](/es/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) para obtener más información sobre cómo funcionan estos métodos en general.

`every` actúa como el cuantificador "para todos" en matemáticas. En particular, para un arreglo vacío, devuelve `true`. (Es [vaciamente cierto](https://es.wikipedia.org/wiki/Verdad_vacua) que todos los elementos del [conjunto vacío](https://es.wikipedia.org/wiki/Conjunto_vac%C3%ADo#Propiedades) satisfacen cualquier condición dada).

`callbackFn` se invoca únicamente para índices de arreglos que tienen valores asignados. No se invoca para espacios vacíos en [arreglos dispersos](/es/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays).

El método `every()` es [genérico](/es/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Solo espera que el valor `this` tenga una propiedad `length` y propiedades con claves enteras.

## Ejemplos

### Probar el tamaño de todos los elementos del arreglo

El siguiente ejemplo prueba si todos los elementos del arreglo son 10 o más.

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

### Comprueba si un arreglo es un subconjunto de otro arreglo

El siguiente ejemplo prueba si todos los elementos de un arreglo están presentes en otro arreglo.

```js
const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
```

### Usando el tercer argumento de callbackFn

El argumento `array` es útil si desea acceder a otro elemento del arreglo. El siguiente ejemplo primero utiliza `filter()` para extraer los valores positivos y luego utiliza `every()` para verificar si el arreglo es estrictamente creciente.

```js
const numbers = [-2, 4, -8, 16, -32];
const isIncreasing = numbers
  .filter((num) => num > 0)
  .every((num, idx, arr) => {
    // Sin el argumento arr, no hay forma de acceder fácilmente al
    // arreglo intermedio sin guardarla en una variable.
    if (idx === 0) return true;
    return num > arr[idx - 1];
  });
console.log(isIncreasing); // true
```

### Uso de every() en arreglos dispersos

`every()` no ejecutará su predicado en espacios vacíos.

```js
console.log([1, , 3].every((x) => x !== undefined)); // true
console.log([2, , 2].every((x) => x === 2)); // true
```

### Llamar a every() en objetos que no son arreglos

El método `every()` lee la propiedad `length` de `this` y luego accede a cada propiedad con una clave entera no negativa menor que `length` hasta que se haya accedido a todas o `callbackFn` devuelva `false`.

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: 345, // ignorado por every() ya que la longitud es 3
};
console.log(
  Array.prototype.every.call(arrayLike, (x) => typeof x === "string"),
); // true
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `Array.prototype.every` en `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- Guia de [colecciones indexadas](/es/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("TypedArray.prototype.every()")}}
