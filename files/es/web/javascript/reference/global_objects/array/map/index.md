---
title: Array.prototype.map()
short-title: map()
slug: Web/JavaScript/Reference/Global_Objects/Array/map
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

El método **`map()`** de las instancias de {{jsxref("Array")}} crea un nuevo array con los resultados de llamar a una función proporcionada para cada elemento del array sobre el que se invoca.

{{InteractiveExample("Demostración de JavaScript: Array.prototype.map()")}}

```js interactive-example
const array = [1, 4, 9, 16];

// Pasa una función a map
const mapped = array.map((x) => x * 2);

console.log(mapped);
// Salida esperada: Array [2, 8, 18, 32]
```

## Sintaxis

```js-nolint
map(callbackFn)
map(callbackFn, thisArg)
```

### Parámetros

- `callbackFn`
  - : Función que se ejecuta para cada elemento del array. Su valor de retorno se añade como un único elemento al nuevo array. La función recibe los siguientes argumentos:
    - `element`
      - : El elemento actual que se está procesando en el array.
    - `index`
      - : El índice del elemento actual que se está procesando en el array.
    - `array`
      - : El array sobre el que se llamó a `map()`.
- `thisArg` {{optional_inline}}
  - : Valor que se utiliza como `this` al ejecutar `callbackFn`. Consulta [métodos iterativos](/es/docs/Web/JavaScript/Reference/Global_Objects/Array).

### Valor de retorno

Un nuevo array en el que cada elemento es el resultado de la función de retorno de llamada.

## Descripción

El método `map()` es un [método iterativo](/es/docs/Web/JavaScript/Reference/Global_Objects/Array). Llama a la función `callbackFn` proporcionada una vez por cada elemento de un array y construye un nuevo array con los resultados. Consulta la sección sobre [métodos iterativos](/es/docs/Web/JavaScript/Reference/Global_Objects/Array) para obtener más información sobre el funcionamiento general de estos métodos.

`callbackFn` se invoca únicamente para los índices del array que tienen valores asignados. No se invoca para los espacios vacíos de los [arrays dispersos](/es/docs/Web/JavaScript/Guide/Indexed_collections).

El método `map()` es [genérico](/es/docs/Web/JavaScript/Reference/Global_Objects/Array). Solo espera que el valor de `this` tenga una propiedad `length` y propiedades con claves enteras.

Como `map` construye un nuevo array, llamarlo sin utilizar el array devuelto es un antipatrón; utiliza {{jsxref("Array/forEach", "forEach")}} o {{jsxref("Statements/for...of", "for...of")}} en su lugar.

## Ejemplos

### Transformar un array de números en un array de raíces cuadradas

El siguiente código toma un array de números y crea un nuevo array con las raíces cuadradas de los números del primer array.

```js
const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

// roots ahora es [1, 2, 3]
// numbers sigue siendo [1, 4, 9]
```

### Usar map para cambiar el formato de los objetos de un array

El siguiente código toma un array de objetos y crea un nuevo array con los objetos en su nuevo formato.

```js
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
console.log(kvArray);
// [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 }
// ]
```

### Usar parseInt() con map()

Es habitual utilizar la función de retorno de llamada con un argumento (el elemento que se recorre). Algunas funciones también suelen utilizarse con un argumento, aunque aceptan argumentos opcionales adicionales. Estas costumbres pueden producir comportamientos confusos. Considera lo siguiente:

```js
["1", "2", "3"].map(parseInt);
```

Aunque cabría esperar `[1, 2, 3]`, el resultado real es `[1, NaN, NaN]`.

{{jsxref("parseInt")}} suele utilizarse con un argumento, pero acepta dos. El primero es una expresión y el segundo es la base numérica. `Array.prototype.map` pasa tres argumentos a la función de retorno de llamada: el elemento, el índice y el array. {{jsxref("parseInt")}} ignora el tercer argumento, ¡pero _no_ el segundo! Este es el origen de la posible confusión.

Este ejemplo resume los pasos de la iteración:

```js
/* Primera iteración (index es 0): */ parseInt("1", 0); // 1
/* Segunda iteración (index es 1): */ parseInt("2", 1); // NaN
/* Tercera iteración (index es 2): */ parseInt("3", 2); // NaN
```

Para solucionarlo, define otra función que solo reciba un argumento:

```js
["1", "2", "3"].map((str) => parseInt(str, 10)); // [1, 2, 3]
```

También puedes utilizar la función {{jsxref("Number")}}, que solo recibe un argumento:

```js
["1", "2", "3"].map(Number); // [1, 2, 3]

// A diferencia de parseInt(), Number() también devuelve decimales o resuelve la notación exponencial:
["1.1", "2.2e2", "3e300"].map(Number); // [1.1, 220, 3e+300]

// Como comparación, si utilizamos parseInt() con el array anterior:
["1.1", "2.2e2", "3e300"].map((str) => parseInt(str, 10)); // [1, 2, 3]
```

Consulta [A JavaScript optional argument hazard](https://wirfs-brock.com/allen/posts/166), de Allen Wirfs-Brock, para obtener más información.

### El array resultante contiene undefined

Cuando se devuelve {{jsxref("undefined")}} o no se devuelve nada, el array resultante contiene `undefined`. Si quieres eliminar el elemento, encadena una llamada al método {{jsxref("Array/filter", "filter()")}}, o utiliza el método {{jsxref("Array/flatMap", "flatMap()")}} y devuelve un array vacío para indicar su eliminación.

```js
const numbers = [1, 2, 3, 4];
const filteredNumbers = numbers.map((num, index) => {
  if (index < 3) {
    return num;
  }
});

// index comienza en 0, por lo que filteredNumbers contiene 1, 2, 3 y undefined.
// filteredNumbers es [1, 2, 3, undefined]
// numbers sigue siendo [1, 2, 3, 4]
```

### Transformación con efectos secundarios

La función de retorno de llamada puede tener efectos secundarios.

```js
const cart = [5, 15, 25];
let total = 0;
const withTax = cart.map((cost) => {
  total += cost;
  return cost * 1.2;
});
console.log(withTax); // [6, 18, 30]
console.log(total); // 45
```

Esto no se recomienda, porque los métodos que crean copias se aprovechan mejor con funciones puras. En este caso, podemos optar por recorrer el array dos veces.

```js
const cart = [5, 15, 25];
const total = cart.reduce((acc, cost) => acc + cost, 0);
const withTax = cart.map((cost) => cost * 1.2);
```

A veces este patrón se lleva al extremo y lo _único_ útil que hace `map()` es producir efectos secundarios.

```js
const products = [
  { name: "sports car" },
  { name: "laptop" },
  { name: "phone" },
];

products.map((product) => {
  product.price = 100;
});
```

Como se mencionó antes, esto es un antipatrón. Si no utilizas el valor de retorno de `map()`, utiliza `forEach()` o un bucle `for...of` en su lugar.

```js
products.forEach((product) => {
  product.price = 100;
});
```

O, si prefieres crear un nuevo array:

```js
const productsWithPrice = products.map((product) => ({
  ...product,
  price: 100,
}));
```

### Usar el tercer argumento de callbackFn

El argumento `array` resulta útil si quieres acceder a otro elemento del array, especialmente cuando no tienes una variable existente que haga referencia a él. El siguiente ejemplo utiliza primero `filter()` para extraer los valores positivos y luego `map()` para crear un nuevo array en el que cada elemento es la media de sus vecinos y de sí mismo.

```js
const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const averaged = numbers
  .filter((num) => num > 0)
  .map((num, idx, arr) => {
    // Sin el argumento arr, no es fácil acceder al array
    // intermedio sin guardarlo en una variable.
    const prev = arr[idx - 1];
    const next = arr[idx + 1];
    let count = 1;
    let total = num;
    if (prev !== undefined) {
      count++;
      total += prev;
    }
    if (next !== undefined) {
      count++;
      total += next;
    }
    const average = total / count;
    // Conserva dos decimales
    return Math.round(average * 100) / 100;
  });
console.log(averaged); // [2, 2.67, 2, 3.33, 5, 5.33, 5.67, 4]
```

El argumento `array` _no_ es el array que se está construyendo: no hay forma de acceder a ese array desde la función de retorno de llamada.

### Usar map() con arrays dispersos

Un array disperso sigue siendo disperso después de `map()`. Los índices de los espacios vacíos siguen vacíos en el array devuelto, y la función de retorno de llamada no se invoca para ellos.

```js
console.log(
  [1, , 3].map((x, index) => {
    console.log(`Visit ${index}`);
    return x * 2;
  }),
);
// Visit 0
// Visit 2
// [2, empty, 6]
```

### Llamar a map() sobre objetos que no son arrays

El método `map()` lee la propiedad `length` de `this` y luego accede a cada propiedad cuya clave sea un entero no negativo menor que `length`.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // map() lo ignora porque length es 3
};
console.log(Array.prototype.map.call(arrayLike, (x) => x ** 2));
// [ 4, 9, 16 ]
```

Este ejemplo muestra cómo recorrer una colección de objetos obtenidos mediante `querySelectorAll()` y devolver un array con los valores de todos los elementos `option` seleccionados. Como `querySelectorAll()` devuelve un `NodeList`, que es un objeto similar a un array sin el método `map()`, utilizamos `Array.prototype.map.call()`, pasando `elems` como valor de `this` y la función de retorno de llamada como segundo argumento.

```js
const elems = document.querySelectorAll("select option:checked");
const values = Array.prototype.map.call(elems, ({ value }) => value);
```

También puedes utilizar {{jsxref("Array.from()")}} para transformar `elems` en un array y acceder después al método `map()`.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `Array.prototype.map` en `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill de `Array.prototype.map` de es-shims](https://www.npmjs.com/package/array.prototype.map)
- Guía de [colecciones indexadas](/es/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("Map")}}
