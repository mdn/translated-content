---
title: Date.prototype.getUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth
---
{{JSRef}}

Die **`getUTCMonth()`** Methode gibt den Monat eines Datums bezüglich der Weltzeit zurück. Dieser Wert ist 0-basierend (0 steht für den ersten Monat im Jahr).

{{EmbedInteractiveExample("pages/js/date-getutcmonth.html")}}

## Syntax

    dateObj.getUTCMonth()

### Rückgabewert

Eine ganze Zahl zwischen 0 und 11, die den Monat des gegebenen Datums bezüglich der Weltzeit (UTC) angibt. 0 steht für Januar, 1 für Februar, 2 für März und so weiter.

## Beispiele

### Einsatz von `getUTCMonth()`

Das folgende Beispiel weist der `month` Variable den aktuellen Monat zu.

```js
var today = new Date();
var month = today.getUTCMonth();
```

## Spezifikationen

| Spezifikation                                                                                                        | Status                       | Kommentar                                             |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.13', 'Date.prototype.getUTCMonth')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.getutcmonth', 'Date.prototype.getUTCMonth')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.getutcmonth', 'Date.prototype.getUTCMonth')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.getUTCMonth")}}

## Siehe auch

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
