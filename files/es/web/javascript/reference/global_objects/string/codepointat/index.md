---
title: String.prototype.codePointAt()
slug: Web/JavaScript/Reference/Global_Objects/String/codePointAt
---

{{JSRef}}

El método **`codePointAt()`** devuelve un entero no negativo que equivale al valor Unicode code point del carácter.

## Sintaxis

```
str.codePointAt(indice)
```

### Parámetros

- `indice`
  - : Índice del carácter en la cadena del que se quiere obtener el valor del Unicode code point.

### Valor de retorno

Un número que equivale al valor code point del carácter especificado en el índice de la cadena; devuelve {{jsxref("undefined")}} si no se encuentra carácter en la posición especifica.

## Description

If there is no element at the specified position, {{jsxref("undefined")}} is returned. If no UTF-16 surrogate pair begins at `pos`, the code unit at `pos` is returned.

## Examples

### Using `codePointAt()`

```js
"ABC".codePointAt(1); // 66
"\uD800\uDC00".codePointAt(0); // 65536

"XYZ".codePointAt(42); // undefined
```

## Polyfill

The following extends Strings to include the `codePointAt()` function as specified in ECMAScript 2015 for browsers not supporting it natively.

```js
/*! http://mths.be/codepointat v0.1.0 by @mathias */
if (!String.prototype.codePointAt) {
  (function () {
    "use strict"; // needed to support `apply`/`call` with `undefined`/`null`
    var codePointAt = function (position) {
      if (this == null) {
        throw TypeError();
      }
      var string = String(this);
      var size = string.length;
      // `ToInteger`
      var index = position ? Number(position) : 0;
      if (index != index) {
        // better `isNaN`
        index = 0;
      }
      // Account for out-of-bounds indices:
      if (index < 0 || index >= size) {
        return undefined;
      }
      // Get the first code unit
      var first = string.charCodeAt(index);
      var second;
      if (
        // check if it’s the start of a surrogate pair
        first >= 0xd800 &&
        first <= 0xdbff && // high surrogate
        size > index + 1 // there is a next code unit
      ) {
        second = string.charCodeAt(index + 1);
        if (second >= 0xdc00 && second <= 0xdfff) {
          // low surrogate
          // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
          return (first - 0xd800) * 0x400 + second - 0xdc00 + 0x10000;
        }
      }
      return first;
    };
    if (Object.defineProperty) {
      Object.defineProperty(String.prototype, "codePointAt", {
        value: codePointAt,
        configurable: true,
        writable: true,
      });
    } else {
      String.prototype.codePointAt = codePointAt;
    }
  })();
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.charAt()")}}
