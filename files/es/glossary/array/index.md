---
title: Array
slug: Glossary/Array
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un **array** (arreglo) es una colección ordenada de datos (ya sean {{Glossary("primitive", "primitivos")}} u {{Glossary("object", "objetos")}}, según el lenguaje). Los arrays se usan para almacenar varios valores bajo un solo nombre de variable. Una variable común, por el contrario, solo puede almacenar un valor.

Cada elemento de un array tiene asociado un número, denominado índice numérico, que te permite acceder a él. En JavaScript, los arrays empiezan en el índice cero y se pueden manipular con diversos {{Glossary("Method", "métodos")}}.

Así se ven los arrays en JavaScript:

```js
// Los arrays en JavaScript pueden contener distintos tipos de datos
const myArray = [1, 2, 3, 4];
const barbieDollNamesArray = ["Barbie", "Ken", "Midge", "Allan", "Skipper"];

// Los índices de un array empiezan en 0.
console.log(myArray[0]); // salida: 1
console.log(barbieDollNamesArray[2]); // salida: "Midge"
```

## Véase también

- {{jsxref("Array")}} en JavaScript
