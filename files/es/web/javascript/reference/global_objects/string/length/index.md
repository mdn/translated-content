---
title: String.length
slug: Web/JavaScript/Reference/Global_Objects/String/length
tags:
  - JavaScript
  - Propiedad
  - Prototipo
  - Referencia
  - String
  - length
translation_of: Web/JavaScript/Reference/Global_Objects/String/length
original_slug: Web/JavaScript/Referencia/Objetos_globales/String/length
---
{{JSRef}}

La propiedad **`length`** de un objeto {{jsxref("String")}} representa la longitud de una cadena, en unidades de código UTF-16.

## Sintaxis

```
str.length
```

## Descripción

Esta propiedad devuelve el número de caracteres de una cadena. {{interwiki("wikipedia", "UTF-16")}}, el formato usado por JavaScript, usa 16-bit para representar los caracteres más comunes, pero necesita usar dos caracteres para otros menos usados, así que es posible que el valor devuelto por `length` no corresponda al número de caracteres de la cadena.

ECMASCript 2016 (ed. 7) estableció una longitud máxima de `2^53 - 1` elementos. Anteriormente, ninguna longitud máxima era especificada.

Para una cadena vacía, `length` es 0.

La propiedad static `String.length` devuelve 1.

## Ejemplos

### Uso Básico

```js
var x = 'Mozilla';
var empty = '';

console.log('Mozilla is ' + x.length + ' code units long');
/* "Mozilla is 7 code units long" */

console.log('The empty string has a length of ' + empty.length);
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

| Especificación                                                                                                                   | Estatus                      | Comentario                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------- |
| ECMAScript 1st Edition.                                                                                                          | Estándar                     | Primera definicíon. Implementado en JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.5.5.1', 'String.prototype.length')}}                                         | {{Spec2('ES5.1')}}     |                                                     |
| {{SpecName('ES6', '#sec-properties-of-string-instances-length', 'String.prototype.length')}}     | {{Spec2('ES6')}}         |                                                     |
| {{SpecName('ESDraft', '#sec-properties-of-string-instances-length', 'String.prototype.length')}} | {{Spec2('ESDraft')}} |                                                     |

## Compatibilidad con navegadores

{{Compat("javascript.builtins.String.length")}}

## Ver también

- [JavaScript String.length and Internationalizing Web Applications](http://developer.teradata.com/blog/jasonstrimpel/2011/11/javascript-string-length-and-internationalizing-web-applications)
