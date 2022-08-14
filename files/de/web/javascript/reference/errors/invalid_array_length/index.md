---
title: 'RangeError: invalid array length'
slug: Web/JavaScript/Reference/Errors/Invalid_array_length
tags:
  - Errors
  - JavaScript
  - RangeError
translation_of: Web/JavaScript/Reference/Errors/Invalid_array_length
original_slug: Web/JavaScript/Reference/Fehler/Invalid_array_length
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    RangeError: invalid array length (Firefox)
    RangeError: Invalid array length (Chrome)
    RangeError: Invalid array buffer length (Chrome)

## Fehlertyp

{{jsxref("RangeError")}}

## Was ist falsch gelaufen?

entweder:

- ein {{jsxref("Array")}} oder ein {{jsxref("ArrayBuffer")}} wurde mit einer negativen oder einer Zahl größer gleich 232 erzeugt, oder
- die {{jsxref("Array.length")}} Eigenschaft wurde auf eine negative oder eine Zahl größer gleich 232 gesetzt.

Warum ist die Länge von Array and `ArrayBuffer` limitiert? Die `length` Eigenschaft von `Array `und `ArrayBuffer `ist mit einem vorzeichenlosen 32-bit Integer definiert, sodass nur Werte von 0 bis 232-1 gültig sind.

Wenn man ein Array mit dem Konstruktor erzeugen möchte, statt mit der Literalnotation, sollte man aufpassem, dass das erste Argument als Länge des Arrays interpretiert wird.

Man sollte die Länge festlegen, bevor man die `length` Eigenschaft setzt, oder mit dem ersten Argument im Konstruktor.

## Beispiele

### Ungültige Fälle

```js example-bad
new Array(Math.pow(2, 40))
new Array(-1)
new ArrayBuffer(Math.pow(2, 32))
new ArrayBuffer(-1)

let a = [];
a.length = a.length - 1;         // length Eigenschaft auf -1 gesetzt

let b = new Array(Math.pow(2, 32) - 1);
b.length = b.length + 1;         // length Eigenschaft auf 2^32 gesetzt
```

### Gültige Fälle

```js example-good
[ Math.pow(2, 40) ]                     // [ 1099511627776 ]
[ -1 ]                                  // [ -1 ]
new ArrayBuffer(Math.pow(2, 32) - 1)
new ArrayBuffer(0)

let a = [];
a.length = Math.max(0, a.length - 1);

let b = new Array(Math.pow(2, 32) - 1);
b.length = Math.min(0xffffffff, b.length + 1);

// 0xffffffff ist die hexadecimal Notation für 2^32 - 1
// kann auch als (-1 >>> 0) geschrieben werden
```

## Siehe auch

- {{jsxref("Array")}}
- {{jsxref("Array.length")}}
- {{jsxref("ArrayBuffer")}}
