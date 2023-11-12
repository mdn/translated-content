---
title: Uint8Array
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array
---

{{JSRef}}

Los **`Uint8Array`** representan un array de enteros sin signo de 8 bits. El contenido se inicializa a 0. Una vez establecido, puedes hacer referencia a un elemento usando los métodos del objeto o usando la sintaxis de array estándar (esto es, usando la notación de corchetes).

## Sintaxis

```
new Uint8Array(tamaño);
new Uint8Array(typedArray);
new Uint8Array(objeto);
new Uint8Array(buffer [, byteOffset [, tamaño]]);
```

Para más información acerca de la sintaxis del constructor y sus parámetros, mire _[TypedArray](/es/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax)_.

## Propiedades

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Uint8Array.BYTES_PER_ELEMENT")}}
  - : Retorna un número con el valor del tamaño del elemento. `1` en el caso del `Uint8Array`.
- Uint8Array.length
  - : Propiedad estática de tamaño cuyo valor es 3. Para el tamaño actual (número d elementos), mire {{jsxref("TypedArray.prototype.length", "Uint8Array.prototype.length")}}.
- {{jsxref("TypedArray.name", "Uint8Array.name")}}
  - : Devuelve el nombre del constructor en un string. En el caso de `Uint8Array` devuelve: "Uint8Array".
- {{jsxref("TypedArray.prototype", "Uint8Array.prototype")}}
  - : Prototipo para los objetos _TypedArray_ .

## Métodos

- {{jsxref("TypedArray.from", "Uint8Array.from()")}}
  - : Crea un nuevo `Uint8Array` desde un array o un objeto iterable. Véase también {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of", "Uint8Array.of()")}}
  - : Crea un `Uint8Array con un número variable de argumentos`. Véase también {{jsxref("Array.of()")}}.

## `Uint8Array` prototype

Todos los objetos `Uint8Array` son heredados de {{jsxref("TypedArray.prototype", "%TypedArray%.prototype")}}.

### Propiedades

- `Uint8Array.prototype.constructor`
  - : Retorna la función que crea una instancia del prototype. Éste es el constructor por defecto de `Uint8Array`.
- {{jsxref("TypedArray.prototype.buffer", "Uint8Array.prototype.buffer")}} {{readonlyInline}}
  - : Retorna el {{jsxref("ArrayBuffer")}} con la referencia del `Uint8Array`. Fijado en el tiempo de construcción y es de **sólo lectura**.
- {{jsxref("TypedArray.prototype.byteLength", "Uint8Array.prototype.byteLength")}} {{readonlyInline}}
  - : Retorna el tamaño (en bytes) del array `Uint8Array`. Fijado en el tiempo de construcción y es de **sólo lectura**.
- {{jsxref("TypedArray.prototype.byteOffset", "Uint8Array.prototype.byteOffset")}} {{readonlyInline}}
  - : Retorna el offset (en bytes) del `Uint8Array` desde el inicio de su {{jsxref("ArrayBuffer")}}. Fijado en el tiempo de construcción y es de **sólo lectura**.
- {{jsxref("TypedArray.prototype.length", "Uint8Array.prototype.length")}} {{readonlyInline}}
  - : Retorna el número de elementos contenidos en el `Uint8Array`. Fijado en el tiempo de construcción y es de **sólo lectura**.

### Métodos

- {{jsxref("TypedArray.copyWithin", "Uint8Array.prototype.copyWithin()")}}
  - : Copia una secuencia de elementos del array dentro del array. Véase también {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.entries", "Uint8Array.prototype.entries()")}}
  - : Retorna un nuevo objeto `Array Iterator` que contiene los pares de valores para cada índice del array. Véase también {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.every", "Uint8Array.prototype.every()")}}
  - : Prueba si todos los elementos del array cumplen las condiciones de una función. Véase también {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.fill", "Uint8Array.prototype.fill()")}}
  - : Llena todos los elementos del array desde el principio hasta el final con un valor dado. Véase también {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.filter", "Uint8Array.prototype.filter()")}}
  - : Crea un nuevo array con todos los elementos del array que satisfacen las condiciones de una función que devuelve verdadero. Véase también {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.find", "Uint8Array.prototype.find()")}}
  - : Devuelve el valor encontrado en el array, si un elemento del array satisface una función dada de prueba o undefined si no es encontrada. Véase también {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.findIndex", "Uint8Array.prototype.findIndex()")}}
  - : Devuelve el índice encontrado en el array, si un elemento del array satisface una función dada de prueba o -1 si no es encontrada. Véase también {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.forEach", "Uint8Array.prototype.forEach()")}}
  - : Llama a una función para cada elemento del array. Véase también {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.includes", "Uint8Array.prototype.includes()")}} {{experimental_inline}}
  - : Determina si un array incluye un cierto elemento, retornando `true` o `false` según corresponda. Véase también {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.indexOf", "Uint8Array.prototype.indexOf()")}}
  - : Devuelve el primer (menor) índice de un elemento dentro del array igual al valor especificado, o -1 si no es encontrado. Véase también {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.join", "Uint8Array.prototype.join()")}}
  - : Une todos los elementos de un array a una cadena. Véase también {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.keys", "Uint8Array.prototype.keys()")}}
  - : Retorna un nuevo `Array Iterator` que contiene las claves para cada índice en el array. Véase también {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.lastIndexOf", "Uint8Array.prototype.lastIndexOf()")}}
  - : Devuelve el último (mayor) índice de un elemento dentro del array igual al valor especificado, o -1 si no fue encontrado. Véase también {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.map", "Uint8Array.prototype.map()")}}
  - : Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos. Véase también {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.move", "Uint8Array.prototype.move()")}} {{non-standard_inline}} {{unimplemented_inline}}
  - : Primera versión no-estandar de {{jsxref("TypedArray.copyWithin", "Uint8Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.reduce", "Uint8Array.prototype.reduce()")}}
  - : Aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor. Véase también {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reduceRight", "Uint8Array.prototype.reduceRight()")}}
  - : Aplica una función a un acumulador y a cada valor de un array (de derecha a izquierda) para reducirlo a un único valor. Véase también {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.reverse", "Uint8Array.prototype.reverse()")}}
  - : Inverte el orden de los elementos de un array, el primero se convierte en el último y el último en el primero. See also {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.set", "Uint8Array.prototype.set()")}}
  - : Almacena múltiples valores en el array, leyendo los valores de entrada de un array específico.
- {{jsxref("TypedArray.slice", "Uint8Array.prototype.slice()")}}
  - : Extrae una porción de un array y devuelve uno nuevo. Véase también {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.some", "Uint8Array.prototype.some()")}}
  - : Devuelve `true` si al menos un elemento de este array satisface la función de prueba proporcionada. Véase también {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.sort", "Uint8Array.prototype.sort()")}}
  - : Ordena los elementos de un array localmente y devuelve el array. Véase también {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.subarray", "Uint8Array.prototype.subarray()")}}
  - : Retorna un nuevo `Uint8Array` desde el índice de elementos iniciales y finales proporcionados.
- {{jsxref("TypedArray.values", "Uint8Array.prototype.values()")}}
  - : Retorna un nuevo objeto `Array Iterator` que contiene los valores para cada índice en el array. Véase también {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.toLocaleString", "Uint8Array.prototype.toLocaleString()")}}
  - : Devuelve una cadena localizada que representa el array y sus elementos. Véase también {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.toString", "Uint8Array.prototype.toString()")}}
  - : Retorna una cadena representando el array sus elementos. Véase también {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.@@iterator", "Uint8Array.prototype[@@iterator]()")}}
  - : Retorna un nuevo objeto `Array Iterator` que contiene los valores para cada índice en el array.

## Ejemplos

```js
// Desde una longitud
var uint8 = new Uint8Array(2);
uint8[0] = 42;
console.log(uint8[0]); // 42
console.log(uint8.length); // 2
console.log(uint8.BYTES_PER_ELEMENT); // 1

// Desde un array
var arr = new Uint8Array([21, 31]);
console.log(arr[1]); // 31

// Desde otro TypedArray
var x = new Uint8Array([21, 31]);
var y = new Uint8Array(x);
console.log(y[0]); // 21

// Desde un ArrayBuffer
var buffer = new ArrayBuffer(8);
var z = new Uint8Array(buffer, 1, 4);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [JavaScript typed arrays](/es/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
