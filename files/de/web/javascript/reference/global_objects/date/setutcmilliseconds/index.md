---
title: Date.prototype.setUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds
---
{{JSRef}}

Die **`setUTCMilliseconds()`** Methode setzt die Millisekunden eines Datums bezüglich der Weltzeit

{{EmbedInteractiveExample("pages/js/date-setutcmilliseconds.html")}}

## Syntax

    dateObj.setUTCMilliseconds(millisecondsValue)

### Parameter

- `millisecondsValue`
  - : Eine Zahl zwischen 0 und 999, die die Millisekunden repräsentiert.

### Rückgabewert

Die Anzahl der Millisekunden zwischen dem 1. Januar 1970 00:00:00 UTC und dem aktualisierten date Objekte.

## Beschreibung

Wenn ein Parameter außerhalb seiner spezifizierten Grenzen liegt, berücksichtigt die ` setUTCMilliseconds``() ` Methode diese Information beim aktualisieren eines {{jsxref("Date")}} Objektes. Wenn zum Beispiel 1100 für `millisecondsValue` angegeben wird, so werden die Sekunden um 1 inkrementiert und die Millisekunden werden auf 100 gesetzt.

## Beispiele

### Einsatz von `setUTCMilliseconds()`

```js
var theBigDay = new Date();
theBigDay.setUTCMilliseconds(500);
```

## Spezifikationen

| Spezifikation                                                                                                                            | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                                 | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.29', 'Date.prototype.setUTCMilliseconds')}}                                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.setutcmilliseconds', 'Date.prototype.setUTCMilliseconds')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.setutcmilliseconds', 'Date.prototype.setUTCMilliseconds')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.setUTCMilliseconds")}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
