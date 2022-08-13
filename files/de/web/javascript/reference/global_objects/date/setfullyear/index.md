---
title: Date.prototype.setFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setFullYear
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setFullYear
---
{{JSRef}}

Die **`setFullYear()`** Methode stellt das ganze Jahr eines Datums bezüglich der Ortszeit ein und gibt einen neuen Zeitstempel zurück.

{{EmbedInteractiveExample("pages/js/date-setfullyear.html")}}

## Syntax

    dateObj.setFullYear(yearValue[, monthValue[, dateValue]])

### Parameter

- `yearValue`
  - : Eine ganze Zahl, welche den nummerischen Wert des Jahres angibt (z. B. 1995).
- `monthValue`
  - : Optional. Eine ganze Zahl zwischen 0 und 11, welche den Monat von Januar bis Dezember angibt.
- `dateValue`
  - : Optional. Eine ganze Zahl zwischen 1 und 31, welche den Tag des Monats angibt. Wenn der `dateValue` Parameter angegeben wird, muss auch der `monthValue` Parameter angegeben werden.

### Rückgabewert

Die Anzahl der Millisekunden zwischen dem 1. Januar 1970 00:00:00 UTC und dem geänderten date Objekt.

## Beschreibung

Wenn die Parameter `monthValue` und `dateValue` nicht gesetzt sind, werden die Rückgabewerte der Methoden {{jsxref("Date.prototype.getMonth()", "getMonth()")}} und {{jsxref("Date.prototype.getDate()", "getDate()")}} eingesetzt.

Wenn ein gesetzter Parameter außerhalb seiner erwarteten Grenzen ist, ändert `setFullYear()` entsprechenden die anderen Parameter und die Informationen im {{jsxref("Date")}} Objekt. Wird zum Beispiel 15 für `monthValue` Übergeben, so wird das Jahr um 1 inkrementiert und der Wert 3 wird für den Monat genutzt.

## Beispiele

### Einsatz von `setFullYear()`

```js
var theBigDay = new Date();
theBigDay.setFullYear(1997);
```

## Spezifikationen

| Spezifikation                                                                                                        | Status                       | Kommentar                                             |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.40', 'Date.prototype.setFullYear')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.setfullyear', 'Date.prototype.setFullYear')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.setfullyear', 'Date.prototype.setFullYear')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.setFullYear")}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setUTCFullYear()")}}
- {{jsxref("Date.prototype.setYear()")}}
