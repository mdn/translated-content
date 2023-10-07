---
title: String.prototype.charCodeAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charCodeAt
---

{{JSRef("Objetos_globales", "String")}}

## Resumen

El **`charCodeAt()`** método devuelve un número indicando el valor Unicode del carácter en el índice proporcionado.

## Sintaxis

```
cadena.charCodeAt(indice);
```

### Parámetros

- `indice`
  - : Un entero entre 0 y 1 menos que la longitud de la cadena; si no se especifica, su valor predeterminado es 0.

## Descripción

El rango del código Unicode va del 0 al 1,114,1110x10FFFF. Los primeros 128 códigos de Unicode encajan directamente con los códigos de caractéres de la codificación ASCII. Para información sobre Unicode, vea la [Guía de JavaScript](/es/docs/Web/JavaScript/Guide/Valores,_variables_y_literales#Unicode). Observe que `charCodeAt` siempre devolverá un valor menor de 65.536.

`charCodeAt` devuelve {{jsxref("NaN")}} si el indice proporcionado no está entre 0 y 1 menos de la longitud de la cadena.

En JavaScript 1.2 el método `charCodeAt` devuelve un número indicando el valor de la hoja de códigos ISO-Latin-1 del carácter correspondiente al índice proporcionado. El rango de la hoja de códigos ISO-Latin-1 va del 0 al 255. Del 0 al 127 encajan directamente con la hoja de códigos ASCII.

## Ejemplos

### Ejemplo: Usando `charCodeAt`

El siguiente ejemplo devuelve 65, el valor Unicode para A.

```js
"ABC".charCodeAt(0); // returns 65
```

El siguiente ejemplo devuelve 83.

```js
"AaSdas".charCodeAt(2); // returns 83
```

teniendo en cuenta que 2 es la posicion de la letra. Si "S" fuera minuscula, el Unicode es diferente

```js
"Aasdas".charCodeAt(2); // returns 115
```

## Vea También

- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.prototype.codePointAt()")}}
