---
title: String.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/String/includes
---

{{JSRef}}

El método **`includes()`** determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, devolviendo **`true`** o **`false`** según corresponda.

{{EmbedInteractiveExample("pages/js/string-includes.html", "shorter")}}

## Sintaxis

```
str.includes(searchString[, position])
```

### Parametros

- `searchString`
  - : Una cadena a buscar en el texto _`str`_.
- `position` {{optional_inline}}
  - : La posición dentro de la cadena en la cual empieza la búsqueda de `searchString` (Por defecto este valor es 0).

### Valor devuelto

**`true`** si la cadena de texto contiene la cadena buscada; en caso contrario, **`false`**.

## Descripción

Este método permite determinar si una cadena de texto se encuentra incluida dentro de la otra.

### Sensibilidad a Mayúsculas/Minúsculas

El método `includes()` es "case sensitive" (tiene en cuenta mayúsculas y minúsculas). Por ejemplo, la siguiente expresión devolverá `false`:

```js
"Ballena azul".includes("ballena"); // devuelve false
```

## Polyfill

Este método ha sido agregado a la especificación ECMAScript 2015 y puede no estar disponible en toda las implementaciones de JavaScript.

Sin embargo, puedes usar este método como polyfill:

```js
if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    "use strict";

    if (search instanceof RegExp) {
      throw TypeError("first argument must not be a RegExp");
    }
    if (start === undefined) {
      start = 0;
    }
    return this.indexOf(search, start) !== -1;
  };
}
```

## Ejemplos

### Usando `includes()`

```js
const str = "To be, or not to be, that is the question.";

console.log(str.includes("To be")); // true
console.log(str.includes("question")); // true
console.log(str.includes("nonexistent")); // false
console.log(str.includes("To be", 1)); // false
console.log(str.includes("TO BE")); // false
console.log(str.includes("")); // true
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.endsWith()")}}
