---
title: Date.prototype.setUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCHours
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCHours
---
{{JSRef}}

Die **`setUTCHours()`** Methode setzt die Stunde eines Datums (mit Zeit) bezüglich der Weltzeit und gibt die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC nach dem Aktualisieren der {{jsxref("Date")}} Instanz zurück-

{{EmbedInteractiveExample("pages/js/date-setutchours.html")}}

## Syntax

    dateObj.setUTCHours(hoursValue[, minutesValue[, secondsValue[, msValue]]])

### Parameter

- `hoursValue`
  - : Eine ganze Zahl zwischen 0 und 23, die die Stunden repräsentiert.
- `minutesValue`
  - : Optional. Eine ganze Zahl zwischen 0 and 59, die die Minuten repräsentiert.
- `secondsValue`
  - : Optional. Eine ganze Zahl zwischen 0 and 59, die die Sekunden repräsentiert. Wenn der `secondsValue` Parameter angegeben wird, muss auch der `minutesValue` Parameter angegeben werden.
- `msValue`
  - : Optional. Eine ganze Zahl zwischen 0 and 999, die die Millisekunden repräsentiert. Wenn der `msValue` Parameter angegeben ist, müssen auch die Parameter `minutesValue` und `secondsValue` angegeben werden.

### Rückgabewert

Die Anzahl der Millisekunden zwischen dem 1. Januar 1970 00:00:00 UTC und dem aktualisierten date Objekte.

## Beschreibung

Wenn die Parameter `minutesValue`, `secondsValue`, und `msValue` nicht angegeben werden, wird für diese der Rückgabewert der Methoden {{jsxref("Date.prototype.getUTCMinutes()", "getUTCMinutes()")}}, {{jsxref("Date.prototype.getUTCSeconds()", "getUTCSeconds()")}}, und {{jsxref("Date.prototype.getUTCMilliseconds()", "getUTCMilliseconds()")}} verwendet.

Wenn ein Parameter außerhalb seiner Grenzen angegeben wird, wird die `setUTCHours()` Methode diese Information beim aktualisieren des {{jsxref("Date")}} Objektes berücksichtigen. Wenn zum Beispiel 100 für den `secondsValue` Parameter genutzt wird, werden die Minuten um 1 inkrementiert (`minutesValue + 1`) und der Wert 40 wird für die Sekunden verwendet.

## Beispiele

### Einsatz von `setUTCHours()`

```js
var theBigDay = new Date();
theBigDay.setUTCHours(8);
```

## Spezifikationen

| Spezifikation                                                                                                        | Status                       | Kommentar                                             |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.35', 'Date.prototype.setUTCHours')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.setutchours', 'Date.prototype.setUTCHours')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.setutchours', 'Date.prototype.setUTCHours')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.setUTCHours")}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
