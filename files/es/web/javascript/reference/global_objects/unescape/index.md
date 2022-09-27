---
title: unescape()
slug: Web/JavaScript/Reference/Global_Objects/unescape
translation_of: Web/JavaScript/Reference/Global_Objects/unescape
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

## Specifications

| Specification                                                                    | Status                       | Comment                                                                                |
| -------------------------------------------------------------------------------- | ---------------------------- | -------------------------------------------------------------------------------------- |
| {{SpecName('ES1', '#sec-15.1.2.5', 'unescape')}}                 | {{Spec2('ES1')}}         | Initial definition.                                                                    |
| {{SpecName('ES5.1', '#sec-B.2.2', 'unescape')}}                 | {{Spec2('ES5.1')}}     | Defined in the (informative) Compatibility Annex B                                     |
| {{SpecName('ES6', '#sec-unescape-string', 'unescape')}}         | {{Spec2('ES6')}}         | Defined in the (normative) Annex B for Additional ECMAScript Features for Web Browsers |
| {{SpecName('ESDraft', '#sec-unescape-string', 'unescape')}} | {{Spec2('ESDraft')}} | Defined in the (normative) Annex B for Additional ECMAScript Features for Web Browsers |

## Browser compatibility

{{Compat("javascript.builtins.unescape")}}

## See also

- {{jsxref("decodeURI")}}
- {{jsxref("decodeURIComponent")}}
