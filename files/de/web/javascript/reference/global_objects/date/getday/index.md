---
title: Date.prototype.getDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDay
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getDay
---
{{JSRef}}

Die **`getDay()`** Methode gibt den Tag der Woche eines Datums gemäß der Ortszeit zurück, wobei Sonntag durch den Wert 0 repräsentiert wird. Für den Tag des Monats gibt es die Methode {{jsxref("Date.prototype.getDate()", "getDate()")}}

{{EmbedInteractiveExample("pages/js/date-getday.html")}}

## Syntax

    dateObj.getDay()

### Rückgabewert

Eine ganze Zahl zwischen 0 und 6, die den Tag der Woche des gegebenden Datums repräsentiert: 0 für Sonntag, 1 für Montag, 2 für Dienstag und so weiter.

## Beispiele

### Einsatz von `getDay()`

Im zweiten Statement wird die Variable `weekday` mit dem Wert 1 initialisiert. Dabei wird der Wert des {{jsxref("Date")}} object `Xmas95` benutzt. 25. Dezember 1995 ist ein Montag.

```js
var Xmas95 = new Date('December 25, 1995 23:15:30');
var weekday = Xmas95.getDay();

console.log(weekday); // 1
```

## Spezifikationen

| Spezifikation                                                                                            |                              |     |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | --- |
| {{SpecName('ESDraft', '#sec-date.prototype.getday', 'Date.prototype.getDay')}} | {{Spec2('ESDraft')}} |     |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.getDay")}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
