---
title: Date.prototype.setMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMinutes
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setMinutes
---
{{JSRef}}

Die **`setMinutes()`** Methode setzt die Minuten für ein Datum (Zeit) bezüglich der Ortszeit

{{EmbedInteractiveExample("pages/js/date-setminutes.html")}}

## Syntax

    dateObj.setMinutes(minutesValue[, secondsValue[, msValue]])

### Versionen vor JavaScript 1.3

    dateObj.setMinutes(minutesValue)

### Parameter

- `minutesValue`
  - : Eine ganze Zahl zwischen 0 und 59, die die Minuten repräsentiert.
- `secondsValue`
  - : Optional. Eine ganze Zahl zwischen 0 und 59, die die Sekunden repräsentiert.
- `msValue`
  - : Optional. Eine ganze Zahl zwischen 0 und 999, die die Millisekunden repräsentiert. Wenn der Parameter `msValue` angegeben ist, muss auch der Parameter `secondsValue` angegeben werden.

### Rückgabewert

Die Anzahl der Millisekunden zwischen dem 1. Januar 1970 00:00:00 UTC und dem geänderten date Objekt.

## Beschreibung

Wenn die Parameter `secondsValue` and `msValue` nicht angegeben werden, wird die Rückgabewerte der Methoden {{jsxref("Date.prototype.getSeconds()", "getSeconds()")}} und {{jsxref("Date.prototype.getMilliseconds()", "getMilliseconds()")}} eingesetzt.

Wenn der Wert eines Parameters außerhalb seiner Grenzen liegt, wird dieses von der `setMinutes()` Methode berücksichtigt. Wenn zum Beispiel 100 für den Parameter `secondsValue` genutzt wird, werden die Minuten um 1 inkrementiert und die Sekunden werden auf 40 gesetzt.

## Beispiele

### Einsatz von `setMinutes()`

```js
var theBigDay = new Date();
theBigDay.setMinutes(45);
```

## Spezifikationen

| Spezifikation                                                                                                        | Status                       | Kommentar                                             |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.32', 'Date.prototype.setMinutes')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.setminutes', 'Date.prototype.setMinutes')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.setminutes', 'Date.prototype.setMinutes')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.setMinutes")}}

## Siehe auch

- {{jsxref("Date.prototype.getMinutes()")}}
- {{jsxref("Date.prototype.setUTCMinutes()")}}
