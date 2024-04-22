---
title: String.prototype.padStart()
slug: Web/JavaScript/Reference/Global_Objects/String/padStart
---

{{JSRef}}{{SeeCompatTable}}

El método **`padStart()`** rellena la cadena actual con una cadena dada (repetida eventualmente) de modo que la cadena resultante alcance una longitud dada. El relleno es aplicado desde el inicio (izquierda) de la cadena actual.

## Sintaxis

```
str.padStart(targetLength [, padString])
```

### Parámetros

- `targetLength`
  - : La longitud de la cadena resultante una vez la cadena actual haya sido rellenada. Si este parámetro es más pequeño que la longitud de la cadena actual, la cadena actual será devuelta sin modificar.
- `padString` {{optional_inline}}
  - : La cadena para rellenar la cadena actual. Si esta cadena es muy larga, será recortada y la parte más a la izquierda será aplicada. El valor por defecto para este parámetro es " " (U+0020).

### Valor devuelto

Un {{jsxref("String")}} de la longitud específicada con la cadena de relleno aplicada desde el inicio.

## Ejemplos

```js
"abc".padStart(10); // "       abc"
"abc".padStart(10, "foo"); // "foofoofabc"
"abc".padStart(6, "123465"); // "123abc"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("String.padEnd()")}}
