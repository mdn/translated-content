---
title: Date.prototype.getUTCDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
---
{{JSRef}}

Die **`getUTCDay()`** Methode gibt den Wochentag eines Datums bezüglich der Weltzeit zurück. 0 steht für Sonntag.

{{EmbedInteractiveExample("pages/js/date-getutcday.html")}}

## Syntax

    dateObj.getUTCDay()

### Rückgabewert

Eine ganze Zahl, die einen Wochentag des gegebenen Datums bezüglich der Weltzeit (UTC) repräsentiert. 0 steht für Sonntag, 1 für Montag, 2 für Dienstag und so weiter.

## Beispiele

### Einsatz von `getUTCDay()`

Im folgenden Beispiel wird der aktuelle Wochentag der Variablen `weekday` zugewiesen.

```js
var today = new Date();
var weekday = today.getUTCDay();
```

## Spezifikationen

| Spezifikation                                                                                                    | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                         | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.17', 'Date.prototype.getUTCDay')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.getutcday', 'Date.prototype.getUTCDay')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.getutcday', 'Date.prototype.getUTCDay')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.getUTCDay")}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
