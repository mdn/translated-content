---
title: Date.prototype.setUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear
---
{{JSRef}}

Die **`setUTCFullYear()`** Methode setzt das volle Jahr für ein Datum bezüglich der Weltzeit.

{{EmbedInteractiveExample("pages/js/date-setutcfullyear.html")}}

## Syntax

    dateObj.setUTCFullYear(yearValue[, monthValue[, dayValue]])

### Parameter

- `yearValue`
  - : Eine ganze Zahl, die das Jahr repräsentiert (z. B. 1995).
- `monthValue`
  - : Optional. Eine ganze Zahl zwischen 0 und 11, die die Monate Januar bis Dezember repräsentiert.
- `dayValue`
  - : Optional. Eine ganze Zahl zwischen 1 und 31, die den Tag eines Monats repräsentiert. Wenn `dayValue` benutzt wird, muss auch der Parameter `monthValue` benutzt werden.

### Rückgabewert

Die Anzahl der Millisekunden zwischen dem 1. Januar 1970 00:00:00 UTC und dem aktualisierten date Objekte.

## Beschreibung

Wenn die Parameter `monthValue` und `dayValue` nicht angegeben werden, so werden für diese die Rückgabewerte der Methoden {{jsxref("Date.prototype.getUTCMonth()", "getUTCMonth()")}} und {{jsxref("Date.prototype.getUTCDate()", "getUTCDate()")}} benutzt.

Wenn ein Parameter außerhalb seiner spezifizierten Grenzen liegt, berücksichtigt die `setUTCFullYear()` Methode diese Information beim aktualisieren eines {{jsxref("Date")}} Objektes. Wenn zum Beispiel 15 für `monthValue` angegeben wird, so wird das Jahr um 1 inkrementiert (`yearValue + 1`) und der Monat wird auf 3 gesetzt.

## Beispiele

### Einsatz von `setUTCFullYear()`

```js
var theBigDay = new Date();
theBigDay.setUTCFullYear(1997);
```

## Spezifikationen

| Spezifikation                                                                                                                | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.41', 'Date.prototype.setUTCFullYear')}}                             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.setutcfullyear', 'Date.prototype.setUTCFullYear')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.setutcfullyear', 'Date.prototype.setUTCFullYear')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.setUTCFullYear")}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
