---
title: 'RangeError: radix must be an integer'
slug: Web/JavaScript/Reference/Errors/Bad_radix
tags:
  - Errors
  - JavaScript
  - RangeError
translation_of: Web/JavaScript/Reference/Errors/Bad_radix
original_slug: Web/JavaScript/Reference/Fehler/Bad_radix
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    RangeError: radix must be an integer at least 2 and no greater than 36 (Firefox)
    RangeError: toString() radix argument must be between 2 and 36 (Chrome)

## Fehlertyp

{{jsxref("RangeError")}}

## Was ist falsch gelaufen?

Der optionale `radix` Parameter der {{jsxref("Number.prototype.toString()")}} Methode wurde spezifiziert. Dieser Wert muss eine ganze Zahl zwischen 2 und 36 sein, welche die Basis des Zahlensystems des repräsentierten Zahlwertes angibt. Zum Beispiel wird die Dezimalzahl (Basis 10) 169 im Hexadezimalsystem (Basis 16) als A9 repräsentiert.

Warum ist der Parameterwert auf 36 limitiert? Eine Basis größer als 10 nutzt als Ziffern Buchstaben; deswegen kann der Parameter nicht größer als 36 sein, weil das Lateinische Alphabet (welches im Englischen und vielen anderen Sprachen verwendet wird) nur 26 Buchstaben hat.

Die am meisten eingesetzten Basen sind:

- 2 für [Binärzahlen](https://de.wikipedia.org/wiki/Dualsystem)
- 8 für [Oktalzahlen](https://de.wikipedia.org/wiki/Oktalsystem),
- 10 für [Dezimalzahlen](https://de.wikipedia.org/wiki/Dezimalsystem),
- 16 für [Hexadezimalzahlen](https://de.wikipedia.org/wiki/Hexadezimalsystem).

## Beispiele

### Nicht valide Fälle

```js example-bad
(42).toString(0);
(42).toString(1);
(42).toString(37);
(42).toString(150);
// You cannot use a string like this for formatting:
(12071989).toString('MM-dd-yyyy');
```

### Valide Fälle

```js example-good
(42).toString(2);     // "101010" (binary)
(13).toString(8);     // "15"     (octal)
(0x42).toString(10);  // "66"     (decimal)
(100000).toString(16) // "186a0"  (hexadecimal)
```

## Siehe auch

- {{jsxref("Number.prototype.toString()")}}
