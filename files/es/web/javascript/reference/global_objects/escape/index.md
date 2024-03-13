---
title: escape()
slug: Web/JavaScript/Reference/Global_Objects/escape
---

{{Deprecated_header}}

> **Advertencia:** `escape()` no esta estrictamente en desuso("eliminada por los estándares Web"), esta definida en [Anexo B](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-additional-ecmascript-features-for-web-browsers) El estándar ECMA-262 , cuya introducción establece:
>
> > … Todos las características especificas y comportamientos del lenguaje en este anexo tienen mas de una caracterísitca indeseable y en ausencia del legado sera eliminada de esta especificación. …
> >
> > … Los programadores no deben usar o suponer la existencia de estas características y/o comportamientos al escribir nuevo código ECMAScript …

La función obsoleta **`escape()`** crea una nueva cadena de caracteres en los que ciertos caracteres han sido sustituidos por una secuencia hexadecimal de escape.

## Sintaxis

```
escape(str)
```

### Parametros

- `str`
  - : Cadena a codificar.

### Devuelve

Una nueva cadena en la que ciertos caracteres han sido sustituidos.

## Descripción

La función `escape` es una propiedad del _objeto global._ SLos caracteres especiales son codificados a excepción de: `@*_+-./`

La forma hexadecimal de los caracteres cuyo valor es 0xFF o menor, es una secuencia de escape de dos digitos: %xx. Para caracteres un valor superior, se usa el fomato de cuatro digitos: %**u**xxxx.

## Ejemplos

```js
escape("abc123"); // "abc123"
escape("äöü"); // "%E4%F6%FC"
escape("ć"); // "%u0107"

// caracteres especiales
escape("@*_+-./"); // "@*_+-./"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver más

- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
- {{jsxref("unescape")}}
