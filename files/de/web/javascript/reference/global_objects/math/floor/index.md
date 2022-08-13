---
title: Math.floor()
slug: Web/JavaScript/Reference/Global_Objects/Math/floor
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/floor
---
{{JSRef}}

Die **`Math.floor()`** Funktion gibt den größten Integer zurück, der kleiner oder gleich der gegeben Nummer ist. (Abrunden)

{{EmbedInteractiveExample("pages/js/math-floor.html")}}

## Syntax

    Math.floor(x)

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Eine größte ganze Zahl, die kleiner oder gleich der übergebenen Zahl ist.

## Beschreibung

Weil `floor()` eine statische Methode von `Math` ist, wird sie immer als`Math.floor()`aufgerufen und nicht als eine Methode eines erstellten `Math` Objektes (`Math`ist kein Konstruktor).

> **Hinweis:** `Math.floor(null)` gibt 0, aber nicht {{jsxref("NaN")}}, zurück.

## Beispiele

### Einsatz von `Math.floor()`

```js
Math.floor(45.95);   // 45
Math.floor(45.05);   // 45
Math.floor(4);       // 4
Math.floor(-45.05);  // -46
Math.floor(-45.95);  // -46
```

### Dezimale Justierung

```js
/**
 * Decimal adjustment of a number.
 *
 * @param {String}  type  The type of adjustment.
 * @param {Number}  value The number.
 * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
 * @returns {Number} The adjusted value.
 */
function decimalAdjust(type, value, exp) {
  // If the exp is undefined or zero...
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  // If the value is not a number or the exp is not an integer...
  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }
  // Shift
  value = value.toString().split('e');
  value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}

// Decimal round
const round10 = (value, exp) => decimalAdjust('round', value, exp);
// Decimal floor
const floor10 = (value, exp) => decimalAdjust('floor', value, exp);
// Decimal ceil
const ceil10 = (value, exp) => decimalAdjust('ceil', value, exp);

// Round
round10(55.55, -1);   // 55.6
round10(55.549, -1);  // 55.5
round10(55, 1);       // 60
round10(54.9, 1);     // 50
round10(-55.55, -1);  // -55.5
round10(-55.551, -1); // -55.6
round10(-55, 1);      // -50
round10(-55.1, 1);    // -60
// Floor
floor10(55.59, -1);   // 55.5
floor10(59, 1);       // 50
floor10(-55.51, -1);  // -55.6
floor10(-51, 1);      // -60
// Ceil
ceil10(55.51, -1);    // 55.6
ceil10(51, 1);        // 60
ceil10(-55.59, -1);   // -55.5
ceil10(-59, 1);       // -50
```

## Spezifikationen

| Spezifikation                                                                |
| ---------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-math.floor', 'Math.floor')}} |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.floor")}}

## Siehe auch

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
