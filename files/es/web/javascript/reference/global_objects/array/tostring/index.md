---
title: Array.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toString
---

{{JSRef}}

El método **`toString()`** devuelve una cadena de caracteres representando el array especificado y sus elementos.

{{InteractiveExample("JavaScript Demo: Array.toString()")}}

```js interactive-example
const array1 = [1, 2, "a", "1a"];

console.log(array1.toString());
// Expected output: "1,2,a,1a"
```

## Sintaxis

```
arr.toString()
```

### Valor devuelto

Una cadena de caracteres representando los elementos del array.

## Descripción

El objeto {{jsxref("Array")}} sustituye al método `toString` de {{jsxref("Object")}}. Para los objetos `Array`, el método `toString` une el array y devuelve una cadena de caracteres que contiene cada elemento del array separado por comas.

JavaScript llama al método `toString` automáticamente cuando un array va a ser representado como un valor de texto o cuando se referencia a un array en una concatenación de caracteres.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Object.prototype.toSource()")}}
