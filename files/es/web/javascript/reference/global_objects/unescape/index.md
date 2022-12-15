---
title: unescape()
slug: Web/JavaScript/Reference/Global_Objects/unescape
original_slug: Web/JavaScript/Referencia/Objetos_globales/unescape
---

{{jsSidebar("Objects")}}

La función deprecada **`unescape()`** calcula un nuevo string en el cual secuencia de valores hexadecimales son reemplazados con el caracter que representa. La secuencia de calculo deber{ia ser introducida por una función como {{jsxref("escape")}}. Por que `unescape` está deprecada, usar {{jsxref("decodeURI")}} or {{jsxref("decodeURIComponent")}}.

> **Nota:** Do not use `unescape` to decode URIs, use `decodeURI` instead.

## Sintaxis

```
unescape(str)
```

### Parameters

- `str`
  - : A string to be decoded.

## Description

The `unescape` function is a property of the _global object_.

## Examples

```js
unescape("abc123");     // "abc123"
unescape("%E4%F6%FC");  // "äöü"
unescape("%u0107");     // "ć"
```

## Especificaciones

{{Specifications}}

## Browser compatibility

{{Compat("javascript.builtins.unescape")}}

## See also

- {{jsxref("decodeURI")}}
- {{jsxref("decodeURIComponent")}}
