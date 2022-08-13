---
title: 'RangeError: argument is not a valid code point'
slug: Web/JavaScript/Reference/Errors/Not_a_codepoint
tags:
  - Errors
  - JavaScript
  - RangeError
translation_of: Web/JavaScript/Reference/Errors/Not_a_codepoint
original_slug: Web/JavaScript/Reference/Fehler/Not_a_codepoint
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    RangeError: {0} is not a valid code point (Firefox)
    RangeError: Invalid code point {0} (Chrome)

## Fehlertyp

{{jsxref("RangeError")}}

## Was ist falsch gelaufen?

Die {{jsxref("String.fromCodePoint()")}} Methode erwartet gültige Codepoint.

Ein [Codepoint](https://de.wikipedia.org/wiki/Codepoint) ist ein Wert im Unicode Coderaum, der als Integer im Wertebereich zwischen `0` und `0x10FFFF liegt`.

Die Verwendung von {{jsxref("NaN")}} , negativen Integern (`-1`), nicht Integern (`3.14`) und Werten die größer als `0x10FFFF` (`1114111`) sind, werden einen Fehler bei dieser Methode produzieren.

## Beispiele

### Ungültige Fälle

```js example-bad
String.fromCodePoint('_');      // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1);       // RangeError
String.fromCodePoint(3.14);     // RangeError
String.fromCodePoint(3e-2);     // RangeError
String.fromCodePoint(NaN);      // RangeError
```

### Gültige Fälle

```js example-good
String.fromCodePoint(42);       // "*"
String.fromCodePoint(65, 90);   // "AZ"
String.fromCodePoint(0x404);    // "\u0404"
String.fromCodePoint(0x2F804);  // "\uD87E\uDC04"
String.fromCodePoint(194564);   // "\uD87E\uDC04"
String.fromCodePoint(0x1D306, 0x61, 0x1D307) // "\uD834\uDF06a\uD834\uDF07"
```

## Siehe auch

- {{jsxref("String.fromCodePoint()")}}
