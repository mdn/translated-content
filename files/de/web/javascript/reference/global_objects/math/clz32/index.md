---
title: Math.clz32()
slug: Web/JavaScript/Reference/Global_Objects/Math/clz32
tags:
  - ECMAScript 2015
  - Java
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/clz32
---
{{JSRef}}

Die **`Math.clz32()`** Funktion zählt die führenden Nullbits in der 32-Bit binär Repräsentation einer Nummer.

{{EmbedInteractiveExample("pages/js/math-clz32.html")}}

## Syntax

    Math.clz32(x)

### Parameter

- `x`
  - : Eine Nummer.

### Rückgabewert

Die Anzahl der führenden Nullbits in der 32-Bit binör Repräsentation der übergebenen Zahl.

## Beschreibung

"`clz32`" steht für `CountLeadingZeroes32 (AnzahlFührenderNullen32)`.

Wenn `x` keine Nummer ist, wird `x` in eine Nummer konvertiert. Danach wird diese Nummer in einen 32-Bit vorzeichenlose Ganzzahl (unsigned integer) konvertiert.

Wenn die konvertierte 32-Bit vorzeichenlose Zahl `0` ist, so wird die Funktion 32 zurück geben, weil alle Bits `0` sind.

Diese Funktion ist nützlich für Systeme, die in zu JavaScript kompilieren (z. B. [Emscripten](/de/docs/Emscripten)).

## Beispiele

### Einsatz von `Math.clz32()`

```js
Math.clz32(1);                // 31
Math.clz32(1000);             // 22
Math.clz32();                 // 32

[NaN, Infinity, -Infinity, 0, -0, null, undefined, 'foo', {}, []].filter(
function(n) {
  return Math.clz32(n) !== 32
});                           // []

Math.clz32(true);             // 31
Math.clz32(3.5);              // 30
```

## Polyfill

Der folgende Polyfill ist der effizienteste.

```js
if (!Math.clz32) {
  Math.clz32 = function(x) {
    // Let n be ToUint32(x).
    // Let p be the number of leading zero bits in
    // the 32-bit binary representation of n.
    // Return p.
    if (x == null || x === 0) {
      return 32;
    }
    return 31 - Math.floor(Math.log(x >>> 0) * Math.LOG2E);
  };
}
```

## Spezifikationen

| Specification                                                                | Status                       | Comment              |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-math.clz32', 'Math.clz32')}}     | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-math.clz32', 'Math.clz32')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.clz32")}}

## Siehe auch

- {{jsxref("Math")}}
- {{jsxref("Math.imul")}}
