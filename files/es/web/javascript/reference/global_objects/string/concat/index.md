---
title: String.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/String/concat
---

{{JSRef}}

El método **`concat()`** combina dos o más cadenas de texto y devuelve una cadena de texto nueva.

{{EmbedInteractiveExample("pages/js/string-concat.html")}}

## Sintaxis

```
str.concat(str2 [, ...strN])
```

### Parámetros

- `str2 [, ...strN]`
  - : Cadenas que se concatenarán con `str`.

### Valor devuelto

Una nueva cadena que contiene el texto combinado de las cadenas proporcionadas.

## Descripción

La función `concat()` concatena los argumentos de tipo texto con la cadena de sobre la que se llama a la función y devuelve una nueva cadena de texto. Los cambios en la cadena original o la cadena devuelta no afectan al otro.

Si los argumentos no son de tipo texto, son convertidos a texto antes de concatenarlos

## Rendimiento

Es altamente recomendado que se utilicen {{jsxref("Operators/Assignment_Operators", "operadores de asignación", "", 1)}} (`+`, `+=`) en lugar del método `concat()`.

## Ejemplos

### Usando concat()

El siguiente ejemplo combina cadenas de texto en una nueva.

```js
let hello = "Hello, ";
console.log(hello.concat("Kevin", ". Have a nice day."));
// Hello, Kevin. Have a nice day.

let greetList = ["Hello", " ", "Venkat", "!"];
"".concat(...greetList); // "Hello Venkat!"

"".concat({}); // [object Object]
"".concat([]); // ""
"".concat(null); // "null"
"".concat(true); // "true"
"".concat(4, 5); // "45"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Operators/Assignment_Operators", "Operadores de asignación", "", 1)}}
