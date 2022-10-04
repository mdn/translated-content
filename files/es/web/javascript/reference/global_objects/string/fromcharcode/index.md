---
title: String.fromCharCode()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCharCode
tags:
  - JavaScript
  - Method
  - String
  - Unicode
translation_of: Web/JavaScript/Reference/Global_Objects/String/fromCharCode
original_slug: Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode
---
{{JSRef("Objetos_globales", "String")}}

## Resumen

El **`String.fromCharCode()`** método estático que devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.

## Sintaxis

```
String.fromCharCode(num1, ..., numN)
```

### Parámetros

- `num1, ..., numN`
  - : Secuencia de números con los valores Unicode.

## Descripción

Este método devuelve una cadena y no un objeto `String`.

Debido a que `fromCharCode` es un método estático de `String`, usted siempre lo usará como `String.fromCharCode()`, en vez de un método de un objeto `String` creado por usted.

## Ejemplos

### Ejemplo: Usando `fromCharCode`

El siguiene ejemplo devuelve la cadena "ABC".

```js
String.fromCharCode(65,66,67)
```

## Especificaciónes

| Especificación                                                                                   | Estatus                  | Comentario                                        |
| ------------------------------------------------------------------------------------------------ | ------------------------ | ------------------------------------------------- |
| ECMAScript 1st Edition.                                                                          | Estándar                 | Primera definicíon Implementada en JavaScript 1.2 |
| {{SpecName('ES5.1', '#sec-15.5.3.2', 'StringfromCharCode')}}                 | {{Spec2('ES5.1')}} |                                                   |
| {{SpecName('ES6', '#sec-string.fromcharcodes', 'String.fromCharCode')}} | {{Spec2('ES6')}}     |                                                   |

## Compatibilidad de navegadores

{{Compat("javascript.builtins.String.fromCharCode")}}

## Vea También

- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.prototype.codePointAt()")}}
