---
title: RegExp.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/toString
---

{{JSRef}}

El método **`toString()`** devuelve una cadena que representa el patrón de la expresión regular.

## Sintaxis

```
regexObj.toString();
```

### Valor de Retorno

Una cadena que representa el objeto dado.

## Descripción

El objeto {{jsxref("RegExp")}} reemplaza el método `toString()` del objeto {{jsxref("Object")}}; no hereda de {{jsxref("Object.prototype.toString()")}}. Para objetos {{jsxref("RegExp")}}, el método `toString()` retorna una cadena que representa el patrón de la expresión regular.

## Ejemplos

### Usando `toString()`

El siguiente ejemplo muestra la cadena de representación de un objeto {{jsxref("RegExp")}}:

```js
var myExp = new RegExp("a+b+c");
console.log(myExp.toString()); // '/a+b+c/'

var foo = new RegExp("bar", "g");
console.log(foo.toString()); // '/bar/g'
```

### Expresiones regulares vacías y escapado

A partir de ECMAScript 5, una expresión regular vacía devuelve la cadena "/(?:)/" y los terminadores de línea tales como "\n" son escapados:

```js
new RegExp().toString(); // "/(?:)/"

new RegExp("\n").toString() === "/\n/"; // true, antes de ES5
new RegExp("\n").toString() === "/\\n/"; // true, desde ES5
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{jsxref("Object.prototype.toString()")}}
