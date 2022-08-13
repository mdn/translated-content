---
title: 'RangeError: invalid date'
slug: Web/JavaScript/Reference/Errors/Invalid_date
tags:
  - Errors
  - JavaScript
  - RangeError
translation_of: Web/JavaScript/Reference/Errors/Invalid_date
original_slug: Web/JavaScript/Reference/Fehler/Invalid_date
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    RangeError: invalid date (Firefox)
    RangeError: invalid time value (Chrome)
    RangeError: Provided date is not in valid range (Chrome)

## Fehlertyp

{{jsxref("RangeError")}}

## Was ist schief gelaufen?

Eine Zeichenfolge, die ein ungültiges Datum enthält, wurde {{jsxref("Date")}} oder {{jsxref("Date.parse()")}} übergeben.

## Beispiele

### Nicht valide Fälle

Nicht erkennbare Strings oder Daten, welche nicht erlaubte Elementewerte im ISO formatierten String enthalten, geben gewöhnlich {{jsxref("NaN")}} zurück. Abhängig von der Implementierung kann es auch sein, dass nicht valide ISO Formate, einen `RangeError: invalid date` erzeugen, wie die folgenden Fällen in Firefox:

```js example-bad
new Date('foo-bar 2014');
new Date('2014-25-23').toISOString();
new Date('foo-bar 2014').toString();
```

Das folgende gibt in Firefox {{jsxref("NaN")}} zurück.

```js example-bad
Date.parse('foo-bar 2014'); // NaN
```

Für mehr Details, sollte die {{jsxref("Date.parse()")}} Dokumentation angesehen werden.

### Valide Fälle

```js example-good
new Date('05 October 2011 14:48 UTC');
```

## Siehe auch

- {{jsxref("Date")}}
- {{jsxref("Date.prototype.parse()")}}
- {{jsxref("Date.prototype.toISOString()")}}
