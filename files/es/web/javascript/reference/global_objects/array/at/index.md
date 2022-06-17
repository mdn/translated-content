---
title: Array.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/Array/at
translation_of: Web/JavaScript/Reference/Global_Objects/Array/at
original_slug: Web/JavaScript/Referencia/Objetos_globales/Array/at
browser-compat: javascript.builtins.Array.at
---
{{JSRef}}

El método **`at()`** recibe un valor numérico entero y devuelve el elemento en esa posición, permitiendo valores positivos y negativos. Los valores negativos contarán desde el último elemento del array.

Esto no sugiere que haya algo mal con usar la notación de corchetes. Por ejemplo, `array[0]` devolvería el primer elemento. Sin embargo, en lugar de usar {{jsxref('Array.prototype.length','array.length')}} para los últimos elementos; ej. `array[array.length-1]` para el último elemento, puede llamar `array.at(-1)`. [(Ver los ejemplos siguientes)](#ejemplos)

{{EmbedInteractiveExample("pages/js/array-at.html")}}

## Sintaxis

```js
at(índice)
```

### Parámetros

- `índice`
  - : El índice (posición) del elemento del array que se devolverá. Soporta el índice relativo desde el final del array cuando se pasa un índice negativo; ej. si se usa un número negativo, el elemento devuelto se encontrará contando hacia atrás desde el final del array.

### Valor de retorno

El elemento en el array que coincide con el índice dado. Devuelve {{jsxref('undefined')}} si el índice dado no se puede encontrar.

## Ejemplos

### Retorna el último valor de un array

El siguiente ejemplo proporciona una función que devuelve el último elemento encontrado en un array especificado.

```js
// Nuestro array con objetos
const carrito = ['manzana', 'plátano', 'pera'];

// Una función que devuelve el último elemento de un array dado
function devolverUltimo(arr) {
  return arr.at(-1);
}

// Obtenemos el último elemento de nuestro array 'carrito'
const objeto1 = devolverUltimo(carrito);
console.log(objeto1); // Muestra: 'pera'

// Añade un elemento a nuestro array 'carrito'
carrito.push('naranja');
const objeto2 = devolverUltimo(carrito);
console.log(objeto2); // Muestra: 'naranja'
```

### Comparando métodos

Este ejemplo compara diferentes maneras de seleccionar el penúltimo (uno antes del último) elemento de un {{jsxref('Array')}}. Mientras todos los métodos mostrados a continuación son válidos, este ejemplo resalta la concisión y la fácil lectura del método `at()`.

```js
// Nuestro array con elementos
const colores = ['rojo', 'verde', 'azul'];

// Usando la propiedad length
const lengthMetodo = colores[colores.length-2];
console.log(lengthMetodo); // Muestra: 'verde'

// Usando el método slice(). Note que se devuelve un array
const sliceMetodo = colores.slice(-2, -1);
console.log(sliceMetodo[0]); // Muestra: 'verde'

// Usando el método at()
const atMetodo = colores.at(-2);
console.log(atMetodo); // Muestra: 'verde'
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `Array.prototype.at` en `core-js`](https://github.com/zloirock/core-js#relative-indexing-method)
- [Un polyfill para el método at()](https://github.com/tc39/proposal-relative-indexing-method#polyfill).
- {{jsxref("Array.prototype.find()")}} – devuelve un valor basado en una prueba dada.
- {{jsxref("Array.prototype.includes()")}} – prueba si un valor existe en el array.
- {{jsxref("Array.prototype.indexOf()")}} – devuelve el índice de un elemento dado.
