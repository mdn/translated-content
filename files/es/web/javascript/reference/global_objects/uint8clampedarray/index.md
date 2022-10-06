---
title: Uint8ClampedArray
slug: Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray
tags:
  - Clase
  - Uint8ClampedArray
  - JavaScript
  - TypedArray
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.Uint8ClampedArray
---

{{JSRef}}

El arreglo con tipo **`Uint8ClampedArray`** representa un arreglo de enteros sin signo de 8 bits sujetos a 0-255; si especificaste un valor que está fuera del rango de \[0,255], se establecerá 0 o 255 en su lugar; si especificas un valor no entero, se establecerá el entero más cercano. El contenido se inicializa a `0`. Una vez establecido, puedes hacer referencia a los elementos del arreglo usando los métodos del objeto o usando la sintaxis de índice de arreglo estándar (es decir, usando la notación de corchetes).

## Constructor

- {{jsxref("Global_Objects/Uint8ClampedArray/Uint8ClampedArray", "Uint8ClampedArray()")}}
  - : Crea un nuevo objeto `Uint8ClampedArray`.

## Propiedades estáticas

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Uint8ClampedArray.BYTES_PER_ELEMENT")}}
  - : Devuelve un valor numérico del tamaño del elemento. `1` en el caso de `Uint8ClampedArray`.
- {{jsxref("TypedArray.name", "Uint8ClampedArray.name")}}
  - : Devuelve el valor de cadena del nombre del constructor. En el caso del tipo `Uint8ClampedArray`: `"Uint8ClampedArray"`.

## Métodos estáticos

- {{jsxref("TypedArray.from", "Uint8ClampedArray.from()")}}
  - : Crea un nuevo `Uint8ClampedArray` a partir de un objeto iterable o similar a un arreglo. Consulta también {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of", "Uint8ClampedArray.of()")}}
  - : Crea un nuevo `Uint8ClampedArray` a partir de un número variable de argumentos. Consulta también {{jsxref("Array.of()")}}.

## Propiedades de la instancia

- {{jsxref("TypedArray.prototype.buffer", "Uint8ClampedArray.prototype.buffer")}}
  - : Devuelve el {{jsxref("ArrayBuffer")}} al que hace referencia `Uint8ClampedArray`. Se corrigió en el momento de la construcción y, por lo tanto, **read only**.
- {{jsxref("TypedArray.prototype.byteLength", "Uint8ClampedArray.prototype.byteLength")}}
  - : Devuelve la longitud (en bytes) de `Uint8ClampedArray` desde el inicio de su {{jsxref("ArrayBuffer")}}. Se corrigió en el momento de la construcción y, por lo tanto, **read only**.
- {{jsxref("TypedArray.prototype.byteOffset", "Uint8ClampedArray.prototype.byteOffset")}}
  - : Devuelve el desplazamiento (en bytes) de `Uint8ClampedArray` desde el inicio de su {{jsxref("ArrayBuffer")}}. Se corrigió en el momento de la construcción y, por lo tanto, **read only**.
- {{jsxref("TypedArray.prototype.length", "Uint8ClampedArray.prototype.length")}}
  - : Devuelve el número de elementos contenidos en `UintClamped8Array`. Se corrigió en el momento de la construcción y, por lo tanto, **read only**.

## Métodos de instancia

- {{jsxref("TypedArray.copyWithin", "Uint8ClampedArray.prototype.copyWithin()")}}
  - : Copia una secuencia de elementos de arreglo dentro del arreglo. Consulta también {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.entries", "Uint8ClampedArray.prototype.entries()")}}
  - : Devuelve un nuevo objeto _array iterator_ que contiene los pares clave/valor para cada índice en el arreglo. Consulta también {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.every", "Uint8ClampedArray.prototype.every()")}}
  - : Comprueba si todos los elementos del arreglo pasan la prueba proporcionada por una función. Consulta también {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.fill", "Uint8ClampedArray.prototype.fill()")}}
  - : Rellena todos los elementos de un arreglo desde un índice inicial hasta un índice final con un valor estático. Consulta también {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.filter", "Uint8ClampedArray.prototype.filter()")}}
  - : Crea un nuevo arreglo con todos los elementos de este arreglo para los que la función de filtrado proporcionada devuelve `true`. Consulta también {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.find", "Uint8ClampedArray.prototype.find()")}}
  - : Devuelve el valor encontrado en el arreglo, si un elemento del arreglo satisface la función de prueba proporcionada o `undefined` si no se encuentra. Consulta también {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.findIndex", "Uint8ClampedArray.prototype.findIndex()")}}
  - : Devuelve el índice encontrado en el arreglo, si un elemento del arreglo satisface la función de prueba proporcionada o `-1` si no se encuentra. Consulta también {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.forEach", "Uint8ClampedArray.prototype.forEach()")}}
  - : Llama a una función por cada elemento del arreglo. Consulta también {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.includes", "Uint8ClampedArray.prototype.includes()")}}
  - : Determina si un arreglo tipado incluye un determinado elemento, devolviendo `true` o `false` según corresponda. Consulta también {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.indexOf", "Uint8ClampedArray.prototype.indexOf()")}}
  - : Devuelve el primer (menor) índice de un elemento dentro del arreglo igual al valor especificado, o `-1` si no se encuentra ninguno. Ver también {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.join", "Uint8ClampedArray.prototype.join()")}}
  - : Une todos los elementos de un arreglo en una cadena. Consulta también {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.keys", "Uint8ClampedArray.prototype.keys()")}}
  - : Devuelve un nuevo _array iterator_ que contiene las claves para cada índice del arreglo. Consulta también {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.lastIndexOf", "Uint8ClampedArray.prototype.lastIndexOf()")}}
  - : Devuelve el último (mayor) índice de un elemento dentro del arreglo igual al valor especificado, o `-1` si no se encuentra ninguno. Consulta también {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.map", "Uint8ClampedArray.prototype.map()")}}
  - : Crea una nuevo arreglo con los resultados de llamar a una función proporcionada en cada elemento de este arreglo. Consulta también {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.reduce", "Uint8ClampedArray.prototype.reduce()")}}
  - : Aplica una función contra un acumulador y cada valor del arreglo (de izquierda a derecha) para reducirlo a un solo valor. Consulta también {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reduceRight", "Uint8ClampedArray.prototype.reduceRight()")}}
  - : Aplica una función contra un acumulador y cada valor del arreglo (de derecha a izquierda) para reducirlo a un solo valor. Consulta también {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.reverse", "Uint8ClampedArray.prototype.reverse()")}}
  - : Invierte el orden de los elementos de un arreglo: el primero se convierte en el último y el último en el primero. Consulta también {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.set", "Uint8ClampedArray.prototype.set()")}}
  - : Almacena múltiples valores en el arreglo tipado, leyendo los valores de entrada de un arreglo especificado.
- {{jsxref("TypedArray.slice", "Uint8ClampedArray.prototype.slice()")}}
  - : Extrae una sección de un arreglo y devuelve un nuevo arreglo. Consulta también {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.some", "Uint8ClampedArray.prototype.some()")}}
  - : Devuelve `true` si al menos un elemento de este arreglo satisface la función de prueba proporcionada. Consulta también {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.sort", "Uint8ClampedArray.prototype.sort()")}}
  - : Ordena los elementos de un arreglo en su lugar y devuelve el arreglo. Consulta también {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.subarray", "Uint8ClampedArray.prototype.subarray()")}}
  - : Devuelve un nuevo `Uint8ClampedArray` a partir del índice de elemento inicial y final dado.
- {{jsxref("TypedArray.values", "Uint8ClampedArray.prototype.values()")}}
  - : Devuelve un nuevo objeto _array iterator_ que contiene los valores para cada índice en el arreglo. Consulta también {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.toLocaleString", "Uint8ClampedArray.prototype.toLocaleString()")}}
  - : Devuelve una cadena localizada que representa el arreglo y sus elementos. Consulta también {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.toString", "Uint8ClampedArray.prototype.toString()")}}
  - : Devuelve una cadena que representa el arreglo y sus elementos. Consulta también {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.@@iterator", "Uint8ClampedArray.prototype[@@iterator]()")}}
  - : Devuelve un nuevo objeto _array iterator_ que contiene los valores para cada índice en el arreglo.

## Ejemplos

### Diferentes formas de crear un Uint8ClampedArray

```js
// De una longitud
const uintc8 = new Uint8ClampedArray(2);
uintc8[0] = 42;
uintc8[1] = 1337;
console.log(uintc8[0]); // 42
console.log(uintc8[1]); // 255 (clamped)
console.log(uintc8.length); // 2
console.log(uintc8.BYTES_PER_ELEMENT); // 1

// De un arreglo
const x = new Uint8ClampedArray([21, 31]);
console.log(x[1]); // 31

// Desde otro TypedArray
const y = new Uint8ClampedArray(x);
console.log(y[0]); // 21

// Desde un ArrayBuffer
const buffer = new ArrayBuffer(8);
const z = new Uint8ClampedArray(buffer, 1, 4);
console.log(z.byteOffset); // 1

// Desde un iterable
const iterable = function*() { yield* [1, 2, 3]; }();
const uintc8FromIterable = new Uint8ClampedArray(iterable);
console.log(uintc8FromIterable);
// Uint8ClampedArray [1, 2, 3]
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `Uint8ClampedArray` en `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [Arreglos con tipo JavaScript](/en-US/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
