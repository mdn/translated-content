---
title: String.fromCharCode()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCharCode
---

{{JSRef("Objetos_globales", "String")}}

## Resumen

El **`String.fromCharCode()`** método estático que devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.

## Sintaxis

```
String.fromCharCode(num1, ..., numN)
```

### Parámetros

- `num1, ..., numN`
  - : Secuencia de números con los valores Unicode.

## Descripción

Este método devuelve una cadena y no un objeto `String`.

Debido a que `fromCharCode` es un método estático de `String`, usted siempre lo usará como `String.fromCharCode()`, en vez de un método de un objeto `String` creado por usted.

## Ejemplos

### Ejemplo: Usando `fromCharCode`

El siguiene ejemplo devuelve la cadena "ABC".

```js
String.fromCharCode(65, 66, 67);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea También

- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.prototype.codePointAt()")}}
