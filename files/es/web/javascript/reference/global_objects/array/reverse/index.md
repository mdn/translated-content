---
title: Array.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/Array/reverse
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

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
