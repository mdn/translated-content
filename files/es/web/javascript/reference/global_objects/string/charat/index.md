---
title: String.prototype.charAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charAt
---

{{JSRef("Objetos_globales", "String")}}

## Resumen

El método **`charAt()`** de {{jsxref("String")}} devuelve en un nuevo String el carácter UTF-16 de una cadena.

## Sintaxis

```
str.charAt(indice)
```

### Parámetros

- `indice`
  - : Un entero entre 0 y 1 menos que la longitud de la cadena. Si no se proporciona ningún indice charAt() utilizará 0.

## Descripción

Los caracteres de una cadena se indexan de izquierda a derecha. El índice del primer caracter es 0, y el índice del último caracter en una cadena llamada `nombreCadena` es `nombreCadena.length - 1`. Si el `indice` que usted proporciona está fuera del rango, JavaScript devuelve una cadena vacía.

## Ejemplos

### Ejemplo: Mostrando caracteres de diferentes localizaciones en una cadena

El siguiente ejemplo muestra caracteres de diferentes localizaciones en la cadena "`Brave new world`":

```js
var cualquierCadena = "Brave new world";

console.log(
  "El carácter en el índice 0 es '" + cualquierCadena.charAt(0) + "'",
);
console.log(
  "El carácter en el índice 1 es '" + cualquierCadena.charAt(1) + "'",
);
console.log(
  "El carácter en el índice 2 es '" + cualquierCadena.charAt(2) + "'",
);
console.log(
  "El carácter en el índice 3 es '" + cualquierCadena.charAt(3) + "'",
);
console.log(
  "El carácter en el índice 4 es '" + cualquierCadena.charAt(4) + "'",
);
console.log(
  "El carácter en el índice 999 es '" + cualquierCadena.charAt(999) + "'",
);
```

Estas líneas muestran lo siguiente:

```
El carácter en el índice 0 es 'B'
El carácter en el índice 1 es 'r'
El carácter en el índice 2 es 'a'
El carácter en el índice 3 es 'v'
El carácter en el índice 4 es 'e'
El carácter en el índice 999 es ''
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea También

- {{jsxref("String.prototype.indexOf()")}}, {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.prototype.codePointAt()")}}
