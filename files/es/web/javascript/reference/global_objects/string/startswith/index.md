---
title: String.prototype.startsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/startsWith
---

{{JSRef}}

El método **`startsWith()`** indica si una cadena de texto comienza con los caracteres de una cadena de texto concreta, devolviendo `true` o `false` según corresponda.

{{EmbedInteractiveExample("pages/js/string-startswith.html")}}

## Sintaxis

```
str.startsWith(stringBuscada[, posicion])
```

### Parámetros

- `stringBuscada`
  - : Los caracteres a ser buscados al inicio de la cadena de texto.
- `posicion` {{optional_inline}}
  - : La posición de `str` en la cual debe comenzar la búsqueda de `stringBuscada`. El valor por defecto es `0`.

### Valor devuelto

**`true`** si los caracteres dados se encuentran al inicio de la cadena de texto; **`false`** en cualquier otro caso.

## Descripción

Este método te permite saber si una cadena de texto comienza o no con otra cadena de texto. Este método distingue entre mayúsculas y minúsculas.

## Polyfill

Este método se ha añadido a la especificación ECMAScript 2015 y podría no estar disponible aún en todas las implementaciones de JavaScript. Sin embargo, puedes utilizar un _polyfill_ de `String.prototype.startsWith()` con el siguiente fragmento de código:

```js
if (!String.prototype.startsWith) {
  Object.defineProperty(String.prototype, "startsWith", {
    value: function (search, rawPos) {
      var pos = rawPos > 0 ? rawPos | 0 : 0;
      return this.substring(pos, pos + search.length) === search;
    },
  });
}
```

Un _polyfill_ más robusto (totalmente compatible con la especificación ES2015), pero con menos rendimiento y menos compacto está disponible [en GitHub, por Mathias Bynens](https://github.com/mathiasbynens/String.prototype.startsWith).

## Ejemplos

### Usando `startsWith()`

```js
//startswith
var str = "Ser, o no ser. ¡Esa es la cuestión!";

console.log(str.startsWith("Ser")); // true
console.log(str.startsWith("no ser")); // false
console.log(str.startsWith("Esa es la", 16)); // true
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("String.prototype.endsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
