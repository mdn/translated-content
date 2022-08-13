---
title: Date.prototype.getMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMonth
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getMonth
---
{{JSRef}}

Die **`getMonth()`** Methode gibt den Monat eines Datums bezüglich der Ortszeit zurück. Diese Monat ist ein 0 basierter Wert (wobei 0 den ersten Monat des Jahres beschreibt).

{{EmbedInteractiveExample("pages/js/date-getmonth.html")}}

## Syntax

    dateObj.getMonth()

### Rückgabewert

Eine ganze Zahl zwischen 0 und 11, welche den Monat des gegebenen Datums bezüglich der lokalen Zeit angibt. 0 steht für Januar, 1 für Februar und so weiter.

## Beispiele

### Einsatz von `getMonth()`

Im zweiten Statement wird der Variablen `month` der Wert 11 zugewiesen. Dieses geschiet auf Basis des {{jsxref("Date")}} Objektes `Xmas95`.

```js
var Xmas95 = new Date('December 25, 1995 23:15:30');
var month = Xmas95.getMonth();

console.log(month); // 11
```

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar                                             |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.12', 'Date.prototype.getMonth')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.getmonth', 'Date.prototype.getMonth')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.getmonth', 'Date.prototype.getMonth')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.getMonth")}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}
