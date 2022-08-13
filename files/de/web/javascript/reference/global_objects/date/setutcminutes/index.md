---
title: Date.prototype.setUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMinutes
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCMinutes
---
{{JSRef}}

Die **`setUTCMinutes()`** Methode setzt die Minuten eines Datums bezüglich der Weltzeit.

{{EmbedInteractiveExample("pages/js/date-setutcminutes.html")}}

## Syntax

    dateObj.setUTCMinutes(minutesValue[, secondsValue[, msValue]])

### Parameter

- `minutesValue`
  - : Eine ganze Zahl zwischen 0 und 59, die die Minuten repräsentiet.
- `secondsValue`
  - : Optional. Eine ganze Zahl zwischen 0 und 59, die die Sekunden repräsentiert.
- `msValue`
  - : Optional. Eine ganze Zahl zwischen 0 und 999, die die Millisekunden repräsentiert. Wenn der Parameter `msValue` angegeben wird, muss auch der Parameter `secondsValue` gesetzt werden.

### Rückgabewert

Die Anzahl der Millisekunden zwischen dem 1. Januar 1970 00:00:00 UTC und dem aktualisierten date Objekte.

## Beschreibung

Wenn die Parameter `secondsValue` und `msValue` nicht angegeben werden, so werden für diese die Rückgabewerte der Methoden {{jsxref("Date.prototype.getUTCSeconds()", "getUTCSeconds()")}} und {{jsxref("Date.prototype.getUTCMilliseconds()", "getUTCMilliseconds()")}} benutzt.

Wenn ein Parameter außerhalb seiner spezifizierten Grenzen liegt, berücksichtigt die ` setUTCMinutes``() ` Methode diese Information beim aktualisieren eines {{jsxref("Date")}} Objektes. Wenn zum Beispiel 100 für `secondsValue` angegeben wird, so werden die Minuten um 1 inkrementiert (`minutesValue + 1`) und die Sekunden werden auf 40 gesetzt.

## Beispiele

### Einsatz von `setUTCMinutes()`

```js
var theBigDay = new Date();
theBigDay.setUTCMinutes(43);
```

## Spezifikationen

| Spezifikation                                                                                                                | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.33', 'Date.prototype.setUTCMinutes')}}                             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.setutcminutes', 'Date.prototype.setUTCMinutes')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.setutcminutes', 'Date.prototype.setUTCMinutes')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.setUTCMinutes")}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}
