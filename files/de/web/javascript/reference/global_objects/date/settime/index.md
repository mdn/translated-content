---
title: Date.prototype.setTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/setTime
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setTime
---
{{JSRef}}

Die Methode **`setTime()`** setzt das {{jsxref("Date")}} Objekt auf die Zeit, die durch eine Anzahl Millisekunden seit dem 1. Januar 1970, 00:00:00 UTC angegeben wird.

{{EmbedInteractiveExample("pages/js/date-settime.html")}}

## Syntax

    dateObj.setTime(timeValue)

### Parameter

- `timeValue`
  - : Ein integer, der die Anzahl Millisekunden seit dem 1. Januar 1970, 00:00:00 UTC angibt.

### Rückgabewert

Die Anzahl der Millisekunden zwischen dem 1. Januar 1970 00:00:00 UTC und dem geänderten date Objekt (effektiv dem Wert des übergebenen Parameters).

## Beschreibung

Die Methode `setTime()` ist hilfreich, um Datum und Zeit einem anderen {{jsxref("Date")}} Objekt zuzuweisen.

## Beispiele

### Einsatz von `setTime()`

```js
var theBigDay = new Date('July 1, 1999');
var sameAsBigDay = new Date();
sameAsBigDay.setTime(theBigDay.getTime());
```

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar                                       |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------- |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Erste Definition. Implementiert JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.27', 'Date.prototype.setTime')}}                     | {{Spec2('ES5.1')}}     |                                                 |
| {{SpecName('ES6', '#sec-date.prototype.settime', 'Date.prototype.setTime')}}         | {{Spec2('ES6')}}         |                                                 |
| {{SpecName('ESDraft', '#sec-date.prototype.settime', 'Date.prototype.setTime')}} | {{Spec2('ESDraft')}} |                                                 |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.setTime")}}

## Siehe auch

- {{jsxref("Date.prototype.getTime()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
