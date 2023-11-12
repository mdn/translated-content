---
title: Array.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Array/entries
---

{{JSRef}}El método **`entries()`** retorna un nuevo objeto **`Array Iterator`** que contiene los pares clave/valor para cada índice de la matriz.

{{EmbedInteractiveExample("pages/js/array-entries.html")}}

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
