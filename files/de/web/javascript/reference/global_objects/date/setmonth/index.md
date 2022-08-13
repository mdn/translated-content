---
title: Date.prototype.setMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMonth
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setMonth
---
{{JSRef}}

Die **`setMonth()`** Methode setzt den Monat eines Datums bezüglich des aktuellen Jahres.

{{EmbedInteractiveExample("pages/js/date-setmonth.html")}}

## Syntax

    dateObj.setMonth(monthValue[, dayValue])

### Versionen vor JavaScript 1.3

    dateObj.setMonth(monthValue)

### Parameter

- `monthValue`
  - : Eine ganze Zahl zwischen 0 und 11, die die Monate Januar bis Dezember repräsentiert.
- `dayValue`
  - : Optional. Eine ganze Zahl zwischen 1 und 31, die die Tage eines Monats repräsentiert.

### Rückgabewert

Die Anzahl der Millisekunden zwischen dem 1. Januar 1970 00:00:00 UTC und dem geänderten date Objekt.

## Beschreibung

Wenn der `dayValue` Parameter nicht gesetzt wird, bekommt er den Rückgabewert der {{jsxref("Date.prototype.getDate()", "getDate()")}} Methode.

Wenn ein Parameter mit einem Wert außerhalb seiner Grenzen übergebn wird, berücksichtigt die `setMonth()` Methode diese Information in dem {{jsxref("Date")}} Objekt. Wird zum Beispiel der Wert 15 für den `monthValue` Parameter übergeben, so wird das Jahr um 1 inkrementiert und der Monat auf dem Wert 3 gesetzt.

Der aktuelle Tag des Monats hat einen Einfluss auf diese Methode. Konzeptionell wird die Anzahl der Tage des aktuellen Monats hinzugefügt, um zum 1. des neuen Monats zu bekommen. Wird zum Beispiel auf dem 31. August 2016 setMonth mit dem Wert 1 aufgerufen, so wird der 2. März 2016 zurückgegeben. Dieses liegt daran, dass der Februar im Jahr 2016 nur 29 Tage hat.

## Beispiele

### Einsatz von `setMonth()`

```js
var theBigDay = new Date();
theBigDay.setMonth(6);

//Achtet auf die Übergänge am Ende des Monats
var endOfMonth = new Date(2016, 7, 31);
endOfMonth.setMonth(1);
console.log(endOfMonth); //Wed Mar 02 2016 00:00:00
```

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar                                             |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.38', 'Date.prototype.setMonth')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.setmonth', 'Date.prototype.setMonth')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.setmonth', 'Date.prototype.setMonth')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.setMonth")}}

## Siehe auch

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
