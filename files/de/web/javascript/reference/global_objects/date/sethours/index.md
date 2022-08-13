---
title: Date.prototype.setHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setHours
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setHours
---
{{JSRef}}

Die **`setHours()`** Methode setzt die Stunden für eine Zeit bezüglich der Ortszeit und gibt die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC nachdem die Zeit des {{jsxref("Date")}} geändert wurde.

{{EmbedInteractiveExample("pages/js/date-sethours.html")}}

## Syntax

    dateObj.setHours(hoursValue[, minutesValue[, secondsValue[, msValue]]])

### Versionen vor JavaScript 1.3

    dateObj.setHours(hoursValue)

### Parameter

- `hoursValue`
  - : Eine ganze Zahl zwischen 0 und 23, die die Stunde repräsentiert. Wenn der Wert größer als 23 ist, werden die extra Stunden auf die Zeit addiert.
- `minutesValue`
  - : Optional. Eine ganze Zahl zwischen 0 und 59, die die Minuten repräsentiert. Wenn ein Wert größer als 59 angegeben wird, werden die extra Minuten auf die Zeit addiert.
- `secondsValue`
  - : Optional. Eine ganze Zahl zwischen 0 und 59, die die Sekunden repräsentiert. Wenn der Wert größer als 59 ist, werden die extra Sekunden auf die Zeit addiert. Wenn `secondsValue` angegeben ist, muss auch `minutesValue` angegeben werden.
- `msValue`
  - : Optional. Eine ganze Zahl zwischen 0 und 999, die die Millisekunden repräsentiert. Wenn der Wert größer als 999 ist, werden die extra Millisekunden auf die Zeit addiert. Wenn der `msValue` Parameter angegeben ist, müssen auch die `minutesValue` und `secondsValue` Parameter angegeben werden.

### Rückgabewert

Die Anzahl der Millisekunden zwischen dem 1. Januar 1970 UTC und dem geänderten date Objekte

## Beschreibung

Wenn die Parameter `minutesValue`, `secondsValue`, und `msValue` nicht angegeben werden, werden die Rückgabewerte der Methoden {{jsxref("Date.prototype.getMinutes()", "getMinutes()")}}, {{jsxref("Date.prototype.getSeconds()", "getSeconds()")}} und {{jsxref("Date.prototype.getMilliseconds()", "getMilliseconds()")}} genutzt.

Wenn ein Parameter einen Wert außerhalb seiner Grenzen hat, wird `setHours()` das Informationen im {{jsxref("Date")}} Objekt dementsprechend ändern. Wenn zum Beispiel der Wert 100 für den Parameter `secondsValue` angegeben wird, wird die Minute um 1 inkrementiert und die Sekunden bekommen den Wert 40.

## Beispiele

### Einsatz von `setHours()`

```js
var theBigDay = new Date();
theBigDay.setHours(7);
```

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar                                             |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.34', 'Date.prototype.setHours')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.sethours', 'Date.prototype.setHours')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.sethours', 'Date.prototype.setHours')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.setHours")}}

## Siehe auch

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
