---
title: Array.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Array/values
---

{{JSRef}}

El método **`values()`** devuelve un nuevo objeto **`Array Iterator`** que contiene los valores para cada índice del array.

```js
var a = ["w", "y", "k", "o", "p"];
var iterator = a.values();

console.log(iterator.next().value); // w
console.log(iterator.next().value); // y
console.log(iterator.next().value); // k
console.log(iterator.next().value); // o
console.log(iterator.next().value); // p
```

## Sintaxis

```
arr.values()
```

### Valor devuelto

Un nuevo objeto {{jsxref("Array")}} iterator.

## Ejemplos

### Iteración usando un bucle `for...of`

```js
var arr = ["w", "y", "k", "o", "p"];
var iterador = arr.values();

for (let letra of iterador) {
  console.log(letra);
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
