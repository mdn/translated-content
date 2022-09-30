---
title: Array.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toString
tags:
  - Array
  - JavaScript
  - Prototipo
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/Array/toString
original_slug: Web/JavaScript/Referencia/Objetos_globales/Array/toString
---
{{JSRef}}

El método **`toString()`** devuelve una cadena de caracteres representando el array especificado y sus elementos.

{{EmbedInteractiveExample("pages/js/array-tostring.html")}}

## Sintaxis

```
arr.toString()
```

### Valor devuelto

Una cadena de caracteres representando los elementos del array.

## Descripción

El objeto {{jsxref("Array")}} sustituye al método `toString` de {{jsxref("Object")}}. Para los objetos `Array`, el método `toString` une el array y devuelve una cadena de caracteres que contiene cada elemento del array separado por comas.

JavaScript llama al método `toString` automáticamente cuando un array va a ser representado como un valor de texto o cuando se referencia a un array en una concatenación de caracteres.

### Semántica de ECMAScript 5

Desde JavaScript 1.8.5 (Firefox 4), y consistente con la 5ª edición de semántica de ECMAScript, el método `toString()` es genérico y puede ser usado con cualquier objeto. {{jsxref("Object.prototype.toString()")}} será llamado y devolverá el valor resultante.

## Especificaciones

| Especificación                                                                                                   | Estado                       | Comentario                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                         | {{Spec2('ES1')}}         | Definición inicial. Implementado en JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.4.4.2', 'Array.prototype.toString')}}                         | {{Spec2('ES5.1')}}     |                                                     |
| {{SpecName('ES6', '#sec-array.prototype.tostring', 'Array.prototype.toString')}}     | {{Spec2('ES6')}}         |                                                     |
| {{SpecName('ESDraft', '#sec-array.prototype.tostring', 'Array.prototype.toString')}} | {{Spec2('ESDraft')}} |                                                     |

## Compatibilidad con navegadores

{{Compat("javascript.builtins.Array.toString")}}

\>

## Vea también

- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Object.prototype.toSource()")}}
