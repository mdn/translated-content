---
title: String.prototype.repeat()
slug: Web/JavaScript/Reference/Global_Objects/String/repeat
---

{{JSRef}}

El método **`repeat()`** construye y devuelve una nueva cadena que contiene el número especificado de copias de la cadena en la cual fue llamada, concatenados.

## Sintáxis

```js
str.repeat(count);
```

### Parámetros

- `count`
  - : Un entero entre 0 y +∞: [0, +∞), indicando el número de veces a repetir la cadena en la nueva cadenada creada que será devuelta.

### Valor devuelto

Un nuevo string que contiene el número especificado de copias del string original.

### Excepciones

- {{jsxref("Errors/Negative_repetition_count", "RangeError")}}: El número de repeticiones no debe ser negativo.
- {{jsxref("Errors/Resulting_string_too_large", "RangeError")}}: El número de repeticiones debe ser menor que infinito y no desbordar el tamaño máximo para un string.

## Ejemplos

```js
"abc".repeat(-1); // RangeError
"abc".repeat(0); // ''
"abc".repeat(1); // 'abc'
"abc".repeat(2); // 'abcabc'
"abc".repeat(3.5); // 'abcabcabc' (count will be converted to integer)
"abc".repeat(1 / 0); // RangeError

({ toString: () => "abc", repeat: String.prototype.repeat }).repeat(2);
// 'abcabc' (repeat() is a generic method)
```

## Polyfill

Este método ha sido añadido a la especificación ECMAScript 6 y tal vez aún no se encuentre disponible en todas las implementaciones de JavaScript. Sin embargo, usted puede establecer `String.prototype.repeat()` con el siguiente fragmento de código:

```js
if (!String.prototype.repeat) {
  String.prototype.repeat = function (count) {
    "use strict";
    if (this == null) {
      throw new TypeError("can't convert " + this + " to object");
    }
    var str = "" + this;
    count = +count;
    if (count != count) {
      count = 0;
    }
    if (count < 0) {
      throw new RangeError("repeat count must be non-negative");
    }
    if (count == Infinity) {
      throw new RangeError("repeat count must be less than infinity");
    }
    count = Math.floor(count);
    if (str.length == 0 || count == 0) {
      return "";
    }
    // Ensuring count is a 31-bit integer allows us to heavily optimize the
    // main part. But anyway, most current (August 2014) browsers can't handle
    // strings 1 << 28 chars or longer, so:
    if (str.length * count >= 1 << 28) {
      throw new RangeError(
        "repeat count must not overflow maximum string size",
      );
    }
    var rpt = "";
    for (;;) {
      if ((count & 1) == 1) {
        rpt += str;
      }
      count >>>= 1;
      if (count == 0) {
        break;
      }
      str += str;
    }
    return rpt;
  };
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
