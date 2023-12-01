---
title: Array.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Array/@@iterator
---

{{JSRef}}

El valor inicial de la propiedad **`@@iterator`** es el mismo objeto de función que el valor inicial de la propiedad {{jsxref("Array.prototype.values()", "values()")}}.

## Sintaxis

```
arr[Symbol.iterator]()
```

### Valor de retorno

El valor inicial dado por el **iterador** {{jsxref("Array.prototype.values()", "values()")}}. Por defecto, usar `arr[Symbol.iterator]` devolverá la función {{jsxref("Array.prototype.values()", "values()")}}.

## Ejemplos

### Iteración usando el bucle `for...of`

```js
var arr = ["w", "y", "k", "o", "p"];
var eArr = arr[Symbol.iterator]();
// nuestro navegador debe ser compatible con el bucle for..of
// y variables let-scoped en bucles for
for (let letter of eArr) {
  console.log(letter);
}
```

### Iteración alternativa

```js
var arr = ["w", "y", "k", "o", "p"];
var eArr = arr[Symbol.iterator]();
console.log(eArr.next().value); // w
console.log(eArr.next().value); // y
console.log(eArr.next().value); // k
console.log(eArr.next().value); // o
console.log(eArr.next().value); // p
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.values()")}}
