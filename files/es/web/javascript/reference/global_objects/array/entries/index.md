---
title: Array.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Array/entries
---

{{JSRef}}El método **`entries()`** retorna un nuevo objeto **`Array Iterator`** que contiene los pares clave/valor para cada índice de la matriz.

{{InteractiveExample("JavaScript Demo: Array.entries()")}}

```js interactive-example
const array1 = ["a", "b", "c"];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// Expected output: Array [0, "a"]

console.log(iterator1.next().value);
// Expected output: Array [1, "b"]
```

## Sintaxis

```
arr.entries()
```

### Valor de retorno

Un nuevo objeto iterador {{jsxref("Array")}}.

## Ejemplos

### Usando un bucle [for…of](/es/docs/Web/JavaScript/Reference/Statements/for...of)

```js
var a = ["a", "b", "c"];
var iterator = a.entries();

for (let e of iterator) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.values()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- [for...of](/es/docs/Web/JavaScript/Reference/Statements/for...of)
- [Protocolos de iteración](/es/docs/Web/JavaScript/Reference/Iteration_protocols)
