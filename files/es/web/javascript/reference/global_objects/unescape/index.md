---
title: unescape()
slug: Web/JavaScript/Reference/Global_Objects/unescape
l10n:
  sourceCommit: c4e3558ee1045803df4a685f11f94dca273cd5fe
---

{{jsSidebar("Objects")}}{{Deprecated_Header}}

> [!NOTE]
> `unescape()` no es una función estándar implementada por los navegadores y solo se estandarizó para la compatibilidad entre motores. No es necesario que todos los motores de JavaScript lo implementen y es posible que no funcione en todas partes. Use {{jsxref("decodeURIComponent()")}} o {{jsxref("decodeURI()")}} si es posible.

La función **`unescape()`** calcula una nueva cadena en la que las secuencias de escape hexadecimales se reemplazan con los caracteres que representan. Las secuencias de escape pueden ser introducidas por una función como {{jsxref("escape()")}}.

## Sintaxis

```js-nolint
unescape(str)
```

### Parámetros

- `str`
  - : Una cadena a decodificar.

### Valor de retorno

Una nueva cadena en la que ciertos caracteres no han sido reemplazados.

## Descripción

`unescape()` es una propiedad de función del objeto global.

La función `unescape()` reemplaza cualquier secuencia de escape con el carácter que representa. Específicamente, reemplaza cualquier secuencia de escape de la forma `%XX` o `%uXXXX` (donde `X` representa un dígito hexadecimal) con el carácter que tiene el valor hexadecimal `XX`/`XXXX`. Si la secuencia de escape no es una secuencia de escape válida (por ejemplo, si "%" va seguido de uno o ningún dígito hexadecimal), se deja como está.

> [!NOTE]
> Esta función se usó principalmente para la codificación de URL y se basa en parte en el formato de escape en {{rfc(1738)}}. La función `unescape()` _no_ evalúa [secuencias de escape](/es/docs/Web/JavaScript/Reference/Global_Objects/String#escape_sequences) en cadenas literales. Puede reemplazar `\xXX` con `%XX` y `\uXXXX` con `%uXXXX` para obtener una cadena que `unescape()` pueda manejar.

## Ejemplos

### Utilizando unescape()

```js
unescape("abc123"); // "abc123"
unescape("%E4%F6%FC"); // "äöü"
unescape("%u0107"); // "ć"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `unescape` en `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("decodeURI")}}
- {{jsxref("decodeURIComponent")}}
- {{jsxref("escape")}}
