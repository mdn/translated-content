---
title: Array.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/Array/reverse
tags:
  - Array
  - JavaScript
  - Prototipo
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/Array/reverse
original_slug: Web/JavaScript/Referencia/Objetos_globales/Array/reverse
---
{{JSRef}}

El método **`reverse()`** invierte el orden de los elementos de un array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_. El primer elemento pasa a ser el último y el último pasa a ser el primero.

{{EmbedInteractiveExample("pages/js/array-reverse.html")}}

## Sintaxis

```
reverse()
```

### Valor devuelto

El array invertido.

## Descripción

El método `reverse` cruza los elementos del objeto matriz invocados en su lugar, mutando la matriz, y retornando una referencia a la misma.

## Ejemplos

### Colocar al revés los elementos de un array

El siguiente ejemplo crea un array `a` que contiene tres elementos y luego lo invierte.
La llamada a `reverse()` devuelve una referencia al array `a` invertido.

```js
const a = [1, 2, 3];

console.log(a); // [1, 2, 3]

a.reverse();

console.log(a); // [3, 2, 1]
```

## Especificaciones

| Especificación                                                                                               | Estado                       | Comentario                                          |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | --------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Definición inicial. Implementado en JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.4.4.8', 'Array.prototype.reverse')}}                     | {{Spec2('ES5.1')}}     |                                                     |
| {{SpecName('ES6', '#sec-array.prototype.reverse', 'Array.prototype.reverse')}}     | {{Spec2('ES6')}}         |                                                     |
| {{SpecName('ESDraft', '#sec-array.prototype.reverse', 'Array.prototype.reverse')}} | {{Spec2('ESDraft')}} |                                                     |

## Compatibilidad en navegadores

{{Compat("javascript.builtins.Array.reverse")}}

## Ver también

- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
