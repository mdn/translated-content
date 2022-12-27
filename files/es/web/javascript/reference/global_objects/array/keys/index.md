---
title: Array.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Array/keys
tags:
  - Array
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Matriz
  - Prototipo
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/Array/keys
original_slug: Web/JavaScript/Referencia/Objetos_globales/Array/keys
---
{{JSRef}}

El método **`keys()`** devuelve un nuevo objeto **`Array Iterator`** que contiene las claves de índice con las que acceder a cada elemento en el array.

{{EmbedInteractiveExample("pages/js/array-keys.html")}}

## Sintaxis

```
arr.keys()
```

### Valor de retorno

Un nuevo objeto iterador {{jsxref("Array")}}.

## Ejemplos

### Uso básico

```js
var arr = ['a', 'b', 'c'];
var iterator = arr.keys();

console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

### El iterador no ignora los huecos

```js
var arr = ['a', , 'c'];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]
```

## Especificaciones

| Especificación                                                                                       | Estado                       | Comentario          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES6', '#sec-array.prototype.keys', 'Array.prototype.keys')}}     | {{Spec2('ES6')}}         | Definición inicial. |
| {{SpecName('ESDraft', '#sec-array.prototype.keys', 'Array.prototype.keys')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilidad con navegadores

{{Compat("javascript.builtins.Array.keys")}}

## Ver también

- {{jsxref("Array.prototype.values()")}}
- {{jsxref("Array.prototype.entries()")}}
- [Protocolos de iteración](/es/docs/Web/JavaScript/Reference/Iteration_protocols)
