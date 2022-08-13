---
title: 'RangeError: precision is out of range'
slug: Web/JavaScript/Reference/Errors/Precision_range
tags:
  - Errors
  - JavaScript
  - RangeError
translation_of: Web/JavaScript/Reference/Errors/Precision_range
original_slug: Web/JavaScript/Reference/Fehler/Precision_range
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    RangeError: precision {0} out of range (Firefox)
    RangeError: toExponential() argument must be between 0 and 20 (Chrome)
    RangeError: toFixed() digits argument must be between 0 and 20 (Chrome)
    RangeError: toPrecision() argument must be between 1 and 21 (Chrome)

## Fehlertyp

{{jsxref("RangeError")}}

## Was ist falsch gelaufen?

Das übergebene Argument für die Genauigkeit ist, für einer der folgenden Funktionen, ausserhalb des gültigen Bereiches:

- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}

Der gülitge Bereich für diese Methoden liegt im normal Fall zwischen 0 und 20 (oder 21). Wobei die ECMAScript Spezifikation erlaubt eine Erweiterung de Bereiches.

| Method                                                       | Firefox (SpiderMonkey) | Chrome, Opera (V8) |
| ------------------------------------------------------------ | ---------------------- | ------------------ |
| {{jsxref("Number.prototype.toExponential()")}} | 0 bis 100              | 0 bis 20           |
| {{jsxref("Number.prototype.toFixed()")}}         | -20 bis100             | 0 bis 20           |
| {{jsxref("Number.prototype.toPrecision()")}} | 1 bis 100              | 1 bis 21           |

## Beispiele

### Ungültige Fälle

```js example-bad
77.1234.toExponential(-1);  // RangeError
77.1234.toExponential(101); // RangeError

2.34.toFixed(-100);         // RangeError
2.34.toFixed(1001);         // RangeError

1234.5.toPrecision(-1);     // RangeError
1234.5.toPrecision(101);    // RangeError
```

### Gültige Fälle

```js example-good
77.1234.toExponential(4); // 7.7123e+1
77.1234.toExponential(2); // 7.71e+1

2.34.toFixed(1); // 2.3
2.35.toFixed(1); // 2.4 (zu beachten ist, das in diesem Fall aufgerundet wird)

5.123456.toPrecision(5); // 5.1235
5.123456.toPrecision(2); // 5.1
5.123456.toPrecision(1); // 5
```

## Siehe auch

- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
