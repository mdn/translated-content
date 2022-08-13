---
title: Date.prototype.setDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setDate
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setDate
---
{{JSRef}}

Die **`setDate()`** Methode setzt den Tag eines {{jsxref("Date")}} Objektes relativ zum Beginn des aktuellen Monats.

{{EmbedInteractiveExample("pages/js/date-setdate.html")}}

## Syntax

    dateObj.setDate(dayValue)

### Parameter

- `dayValue`
  - : Eine ganze Zahl, die den Tag des Monats repräsentiert.

### Rückgabewert

Die Anzahl der Millisekunden zwischen dem 1. Januar 1970 00:00:00 UTC und dem geänderten {{jsxref("Date")}} Objektes (das Objekt wird auch geändert).

## Beschreibung

Wenn `dayValue` außerhalb des Wertes für einen Tag in einem Monat ist, wird `setDate()` das {{jsxref("Date")}} Objekt dementsprechend ändern. Zum Beispiel wird der Wert 0 für `dayValue` den letzen Tag des vorherigen Monats einstellen.

## Beispiele

### Einsatz von `setDate()`

```js
var theBigDay = new Date(1962, 6, 7); // 1962-07-07
theBigDay.setDate(24);  // 1962-07-24
theBigDay.setDate(32);  // 1962-08-01
theBigDay.setDate(22);  // 1962-08-22
```

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar                                             |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.36', 'Date.prototype.setDate')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.setdate', 'Date.prototype.setDate')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.setdate', 'Date.prototype.setDate')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.setDate")}}

## Siehe auch

- {{jsxref("Date.prototype.getDate()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
