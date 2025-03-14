---
title: String.length
slug: Web/JavaScript/Reference/Global_Objects/String/length
---

{{JSRef}}

La propiedad **`length`** de un objeto {{jsxref("String")}} representa la longitud de una cadena, en unidades de código UTF-16.

## Sintaxis

```
str.length
```

## Descripción

Esta propiedad devuelve el número de caracteres de una cadena. [UTF-16](https://es.wikipedia.org/wiki/UTF-16), el formato usado por JavaScript, usa 16-bit para representar los caracteres más comunes, pero necesita usar dos caracteres para otros menos usados, así que es posible que el valor devuelto por `length` no corresponda al número de caracteres de la cadena.

ECMASCript 2016 (ed. 7) estableció una longitud máxima de `2^53 - 1` elementos. Anteriormente, ninguna longitud máxima era especificada.

Para una cadena vacía, `length` es 0.

La propiedad static `String.length` devuelve 1.

## Ejemplos

### Uso Básico

```js
var x = "Mozilla";
var empty = "";

console.log("Mozilla is " + x.length + " code units long");
/* "Mozilla is 7 code units long" */

console.log("The empty string has a length of " + empty.length);
/* "The empty string has a length of 0" */
```

### Asignando a length

```js
var myString = "bluebells";

// Attempting to assign a value to a string's .length property has no observable effect.
myString.length = 4;
console.log(myString);
/* "bluebells" */
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [JavaScript String.length and Internationalizing Web Applications](http://developer.teradata.com/blog/jasonstrimpel/2011/11/javascript-string-length-and-internationalizing-web-applications)
