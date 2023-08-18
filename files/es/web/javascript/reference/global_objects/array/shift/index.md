---
title: Array.prototype.shift()
slug: Web/JavaScript/Reference/Global_Objects/Array/shift
---

{{JSRef}}

El método **`shift()`** elimina el **primer** elemento del array y lo retorna. Este método modifica la longitud del array.

## Sintaxis

```
arr.shift()
```

## Descripción

El método `shift` elimina el elemento en el índice cero y desplaza los valores consecutivos hacia abajo, devolviendo el valor eliminado. Si la propiedad {{jsxref("Array.length", "length")}} es 0, devuelve {{jsxref("undefined")}}.

`shift` es genérico; este método puede utilizarse con {{jsxref("Function.call", "call", "", 1)}} o {{jsxref("Function.apply", "apply", "", 1)}} a objetos simliares a arrays. Los objetos que no tengan una propiedad `length` que refleje el último elemento de una serie consecutiva de propiedades numéricas con índice base cero pueden no comportarse de manera significativa.

## Ejemplos

### Eliminando un elemento de un array

El siguiente código muestra el contenido del array `miPescado` antes y después de eliminar el primer elemento. También muestra el elemento eliminado:

```js
var miPescado = ["ángel", "payaso", "mandarín", "cirujano"];

console.log("miPescado antes: " + miPescado);
// "miPescado antes: ángel,payaso,mandarín,cirujano"

var eliminado = miPescado.shift();

console.log("miPescado después: " + miPescado);
// "miPescado after: payaso,mandarín,cirujano"

console.log("Elemento eliminado: " + eliminado);
// "Elemento eliminado: ángel"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.unshift()")}}
