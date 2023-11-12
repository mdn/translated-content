---
title: Array.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/Array/sort
---

{{JSRef}}

El método **`sort()`** ordena los elementos de un arreglo (array) _localmente_ y devuelve el arreglo ordenado. La ordenación no es necesariamente [estable](https://en.wikipedia.org/wiki/Sorting_algorithm#Stability). El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor [Unicode](https://es.wikipedia.org/wiki/Unicode).

La fuente de este ejemplo interactivo se almacena en un repositorio de GitHub. Si desea contribuir al proyecto de ejemplos interactivos, clone <https://github.com/mdn/interactive-examples> y envíenos una solicitud de extracción (pull request).

## Sintaxis

```
arr.sort([compareFunction])
```

### Parámetros

- `compareFunction`
  - : Opcional. Especifica una función que define el modo de ordenamiento. Si se omite, el array es ordenado atendiendo a la posición del valor [Unicode](/es/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Unicode) de cada caracter, según la conversión a string de cada elemento.
- `firstEl`
  - : El primer elemento a comparar.
- `secondEl`
  - : El segundo elemento a comparar.

### Valor devuelto

El array ordenado.

## Descripción

Si no se provee `compareFunction`, los elementos son ordenados convirtiéndolos a strings y comparando la posición del valor Unicode de dichos strings. Por ejemplo, "Cherry" viene antes que "banana" (porque las mayúsculas van antes que las minúsculas en la codificación Unicode) . En un ordenamiento numérico, 9 está antes que 80, pero dado que los números son convertidos a strings y ordenados según el valor Unicode, el resultado será "80" antes que "9".

```js
const frutas = ["guindas", "manzanas", "bananas"];
frutas.sort(); // ['bananas', 'guindas', 'manzanas']

const puntos = [1, 10, 2, 21];
puntos.sort(); // [1, 10, 2, 21]
// Tenga en cuenta que 10 viene antes que 2
// porque '10' viene antes que '2' según la posición del valor Unicode.

const cosas = ["word", "Word", "1 Word", "2 Words"];
cosas.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// En Unicode, los números vienen antes que las letras mayúsculas
// y estas vienen antes que las letras minúsculas.
```

Si se provee `compareFunction`, los elementos del array son ordenados de acuerdo al valor que retorna dicha función de comparación. Siendo `a` y `b` dos elementos comparados, entonces:

- Si `compareFunction(a, b)` es menor que 0, se sitúa `a` en un indice menor que `b`. Es decir, `a` viene primero.
- Si `compareFunction(a, b)` retorna 0, se deja `a` y `b` sin cambios entre ellos, pero ordenados con respecto a todos los elementos diferentes. Nota: el estandar ECMAscript no garantiza este comportamiento, por esto no todos los navegadores (p.ej. Mozilla en versiones que datan hasta el 2003) respetan esto.
- Si `compareFunction(a, b)` es mayor que 0, se sitúa `b` en un indice menor que `a`.
- `compareFunction(a, b)` siempre debe retornar el mismo valor dado un par especifico de elementos a y b como sus argumentos. Si se retornan resultados inconsistentes entonces el orden de ordenamiento es indefinido.

Entonces, la función de comparación tiene la siguiente forma:

```js
function compare(a, b) {
  if (a es menor que b según criterio de ordenamiento) {
    return -1;
  }
  if (a es mayor que b según criterio de ordenamiento) {
    return 1;
  }
  // a debe ser igual b
  return 0;
}
```

Para comparar números en lugar de strings, la función de comparación puede simplemente restar `b` de `a`. La siguiente función ordena el array de modo ascendente:

```js
const compareNumbers = (a, b) => a - b;
```

El metodo `sort` puede ser usado convenientemente con {{jsxref("Operators/function", "function expressions", "", 1)}} (y [closures](/es/docs/Web/JavaScript/Guide/Closures)):

```js
const numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers); // [1, 2, 3, 4, 5]
```

Los objectos pueden ser ordenados por el valor de una de sus propiedades.

```js
const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];
items.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;
});
```

## Ejemplos

### Ordenando un array

Un array de elementos string, sin especificar una función de comparación:

```js
const arr = ["a", "b", "Z", "Aa", "AA"];
arr.sort(); //[ 'AA', 'Aa', 'Z', 'a', 'b' ]
```

Un array de elementos numéricos, sin función de comparación:

```js
const arr = [40, 1, 5, 200];
arr.sort(); //[ 1, 200, 40, 5 ]
```

Un array de elementos numéricos, usando una función de comparación:

```js
const arr = [40, 1, 5, 200];
function comparar(a, b) {
  return a - b;
}
arr.sort(comparar); // [1, 5, 40, 200]
```

Lo mismo pero usando una función anónima normal:

```js
const arr = [40, 1, 5, 200];
arr.sort(function (a, b) {
  return a - b;
}); // [ 1, 5, 40, 200 ]
```

Lo mismo escrito más compacto mediante una [función flecha](/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions):

```js
const arr = [40, 1, 5, 200];
arr.sort((a, b) => a - b); // [ 1, 5, 40, 200 ]
```

### Creando, mostrando, y ordenando un array

El siguiente ejemplo abunda en la idea de ordenar con y sin función de comparación. Además, ilustra una manera de mostrar un array una vez creado. El método [join](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/join) es usado para convertir el array en una cadena de texto que imprimir. Al no pasarle un argumento que indique el separador, usará la coma por defecto para separar los elementos del array dentro de la cadena.

```js
const arr = ["80", "9", "700", 40, 1, 5, 200];
function comparar(a, b) {
  return a - b;
}

console.log("original:", arr.join());
console.log("ordenado sin función:", arr.sort());
console.log("ordenado con función:", arr.sort(comparar));
```

El ejemplo produce el siguiente resultado. Como muestra la salida, cuando una función de comparación es usada, los números se ordenan correctamente, sean estos valores numéricos o strings numéricos.

```
original: 80,9,700,40,1,5,200
ordenado sin función: 1,200,40,5,700,80,9
ordenado con función: 1,5,9,40,80,200,700
```

### Ordenando caracteres no ASCII

Para ordenar strings con characters no ASCII, i.e. strings con caracteres con acento (e, é, è, a, ä, etc.), strings de lenguajes diferentes al inglés: use {{jsxref("String.localeCompare")}}. Esta función puede comparar esos caracteres para que aparezcan en el orden correcto.

```js
const items = ["réservé", "premier", "cliché", "communiqué", "café", "adieu"];
items.sort(function (a, b) {
  return a.localeCompare(b);
});

// items is ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']
```

### Ordenando con map

La `compareFunction` puede ser invocada múltiples veces por elemento dentro del array. Dependiendo de la naturaleza de `compareFunction`, este puede resultar en una alta penalización de rendimiento. Cuanto más trabajo hace una `compareFunction` y más elementos hay para ordenar, resulta más recomendable usar una función [map](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map) para ordenar. La idea es recorrer el array una sola vez para extraer los valores usados para ordenar en un array temporal, ordenar el array temporal y luego recorrer el array para lograr el orden correcto.

```js
// el array a ordenar
const list = ["Delta", "alpha", "CHARLIE", "bravo"];

// array temporal contiene objetos con posición y valor de ordenamiento
const mapped = list.map(function (el, i) {
  return { index: i, value: el.toLowerCase() };
});

// ordenando el array mapeado que contiene los valores reducidos
mapped.sort(function (a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

// contenedor para el orden resultante
const result = mapped.map(function (el) {
  return list[el.index];
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("String.prototype.localeCompare()")}}
