---
title: Array.prototype.pop()
slug: Web/JavaScript/Reference/Global_Objects/Array/pop
---

{{JSRef}}

El método **`pop()`** elimina el **último** elemento de un array y lo devuelve. Este método cambia la longitud del array.

{{EmbedInteractiveExample("pages/js/array-pop.html")}}

## Sintaxis

```
arr.pop()
```

### Valor devuelto

El elemento que ha sido eliminado del array; {{jsxref("undefined")}} si el array está vacío.

## Descripción

El método `pop` elimina el último elemento de un array y devuelve su valor al método que lo llamó.

`pop` es intencionadamente genérico; este método puede ser {{jsxref("Function.call", "called", "", 1)}} o {{jsxref("Function.apply", "applied", "", 1)}} en objectos similares a un array. En objetos que no contengan una propiedad `length`, que refleje su forma en una serie de propiedades numéricas consecutivas en base cero, puede no comportarse de manera significativa.

Si se llama a `pop()` en un array vacío, devuelve {{jsxref("undefined")}}.

## Ejemplos

### Eliminando el último elemento de un array

El siguiente código crea el array `myFish`, que contiene cuatro elementos, a continuación, elimina su último elemento.

```js
var myFish = ["angel", "clown", "mandarin", "sturgeon"];

var popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
