---
title: Date.prototype.setUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth
---
{{JSRef}}

Die **`setUTCMonth()`** Methode setzt den Monat eines Datums bezüglich der Weltzeit.

{{EmbedInteractiveExample("pages/js/date-setutcmonth.html")}}

## Syntax

    dateObj.setUTCMonth(monthValue[, dayValue])

### Parameter

- `monthValue`
  - : Eine ganze Zahl zwischen 0 und 11, die die Monate Januar bis Dezember repräsentiert.
- `dayValue`
  - : Optional. Eine ganze Zahl zwischen 1 und 31, die den Tag eines Monats repräsentiert.

### Rückgabewert

Die Anzahl der Millisekunden zwischen dem 1. Januar 1970 00:00:00 UTC und dem aktualisierten date Objekte.

## Beschreibung

Wenn die Parameter `dayValue` nicht angegeben werden, so wird für diesen der Rückgabewert der Methode {{jsxref("Date.prototype.getUTCDate()", "getUTCDate()")}} benutzt.

Wenn ein Parameter außerhalb seiner spezifizierten Grenzen liegt, berücksichtigt die `setUTCMonth()` Methode diese Information beim aktualisieren eines {{jsxref("Date")}} Objektes. Wenn zum Beispiel 15 für `monthValue` angegeben wird, so wird das Jahr um 1 inkrementiert und der Monat wird auf 3 gesetzt.

## Beispiele

### Einsatz von `setUTCMonth()`

```js
var theBigDay = new Date();
theBigDay.setUTCMonth(11);
```

## Spezifikationen

| Spezifikation                                                                                                        | Status                       | Kommentar                                             |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.39', 'Date.prototype.setUTCMonth')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.setutcmonth', 'Date.prototype.setUTCMonth')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.setutcmonth', 'Date.prototype.setUTCMonth')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.setUTCMonth")}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}
