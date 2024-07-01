---
title: String.prototype.endsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/endsWith
---

{{JSRef}}

El método **`endsWith()`** determina si una cadena de texto termina con los caracteres de una cadena indicada, devolviendo `true` o `false` según corresponda.

{{EmbedInteractiveExample("pages/js/string-endswith.html")}}

## Sintaxis

```
str.endsWith(searchString[, position])
```

### Parámetros

- `searchString`
  - : Los caracteres a buscar hasta el final de la cadena _`str`_.
- `length` {{optional_inline}}
  - : Si se indica, se utiliza como el tamaño de _`str`_. Por defecto se usa `str.length`.

### Valor devuelto

**`true`** si los caracteres proporcionados se encuentran al final de la cadena de texto; en caso contrario, **`false`**.

## Descripción

Este método determina si una cadena de texto termina en otra cadena o no. Este método distingue entre mayúsculas y minúsculas.

## Polyfill

Este método ha sido añadido a la especificación ECMAScript 6 y puede no estar disponible en todas las implementaciones de JavaScript. Sin embargo, puedes implementar el polyfill `String.prototype.endsWith()` con el siguiente fragmento de código:

```js
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (search, this_len) {
    if (this_len === undefined || this_len > this.length) {
      this_len = this.length;
    }
    return this.substring(this_len - search.length, this_len) === search;
  };
}
```

## Ejemplos

### Usando `endsWith()`

```js
let str = "To be, or not to be, that is the question.";

console.log(str.endsWith("question.")); // true
console.log(str.endsWith("to be")); // false
console.log(str.endsWith("to be", 19)); // true
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
