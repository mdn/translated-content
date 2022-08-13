---
title: 'RangeError: repeat count must be less than infinity'
slug: Web/JavaScript/Reference/Errors/Resulting_string_too_large
tags:
  - Errors
  - JavaScript
  - RangeError
translation_of: Web/JavaScript/Reference/Errors/Resulting_string_too_large
original_slug: Web/JavaScript/Reference/Fehler/Resulting_string_too_large
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    RangeError: repeat count must be less than infinity and not overflow maximum string size (Firefox)

    RangeError: Invalid count value (Chrome)

## Fehlertyp

{{jsxref("RangeError")}}

## Was ist falsch gelaufen?

Die {{jsxref("String.prototype.repeat()")}} Methode wurde benutzt. Sie hat einen `count` Parameter welche die Anzahl der Wiederholungen des Strings angibt. Dieser muss zwischen 0 und kleiner positiv {{jsxref("Infinity")}} sein und kann nicht negativ sein. Das erlaubte Intervall kann wie folgt beschrieben werden: \[0, +∞).

Der Ergebnisstring kann zudem nicht länger als die maximale Stringlänge sein, welche sich je nach JavaScript-Umgebung unterscheiden kann. In Firefox (SpiderMonkey) ist die maximale Stringlänge 228 -1 (`0xFFFFFFF`).

## Beispiele

### Falsche Fälle

```js example-bad
'abc'.repeat(Infinity); // RangeError
'a'.repeat(2**28);      // RangeError
```

### Richtige Fälle

```js example-good
'abc'.repeat(0);    // ''
'abc'.repeat(1);    // 'abc'
'abc'.repeat(2);    // 'abcabc'
'abc'.repeat(3.5);  // 'abcabcabc' (count will be converted to integer)
```

## Siehe auch

- {{jsxref("String.prototype.repeat()")}}
