---
title: 'RangeError: repeat count must be non-negative'
slug: Web/JavaScript/Reference/Errors/Negative_repetition_count
tags:
  - Errors
  - JavaScript
  - RangeError
translation_of: Web/JavaScript/Reference/Errors/Negative_repetition_count
original_slug: Web/JavaScript/Reference/Fehler/Negative_repetition_count
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    RangeError: repeat count must be non-negative (Firefox)
    RangeError: Invalid count value (Chrome)

## Fehlertyp

{{jsxref("RangeError")}}

## Was ist falsch gelaufen?

Die {{jsxref("String.prototype.repeat()")}} Methode wurde benutzt. Sie hat einen `count` Parameter welche die Anzahl der Wiederholungen des Strings angibt. Dieser muss zwischen 0 und kleiner positiv {{jsxref("Infinity")}} sein und kann nicht negativ sein. Das erlaubte Intervall kann wie folgt beschrieben werden: \[0, +∞).

## Beispiele

### Falsche Fälle

```js example-bad
'abc'.repeat(-1); // RangeError
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
