---
title: Date.prototype.setMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds
---
{{JSRef}}

Die **`setMilliseconds()`** Methode setzt die Millisekunden einer Zeit bezüglich der Ortszeit.

{{EmbedInteractiveExample("pages/js/date-setmilliseconds.html")}}

## Syntax

    dateObj.setMilliseconds(millisecondsValue)

### Parameter

- `millisecondsValue`
  - : Eine ganze Zahl zwischen 0 und 999, welche die Millisekunden repräsentiert.

### Rückgabewert

Die Anzahl der Millisekunden zwischen dem 1. Januar 1970 00:00:00 UTC und dem geänderten date Objekt.

## Beschreibung

Wenn der Parameter außerhalb seiner Grenzen definiert wird, wird diese Information bei der änderung des {{jsxref("Date")}} Objektes beachtet. Wenn zum Beispiel 1005 übergeben wird, wird die Sekunde um 1 inkrementiert und die Millisekunden werden auf 5 gesetzt.

## Beispiele

### Einsatz von `setMilliseconds()`

```js
var theBigDay = new Date();
theBigDay.setMilliseconds(100);
```

## Spezifikationen

| Spezifikation                                                                                                                    | Status                       | Kommentar                                             |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                         | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.28', 'Date.prototype.setMilliseconds')}}                                 | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.setmilliseconds', 'Date.prototype.setMilliseconds')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.setmilliseconds', 'Date.prototype.setMilliseconds')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.setMilliseconds")}}

## Siehe auch

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
