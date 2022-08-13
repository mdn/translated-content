---
title: Date.prototype.getUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDate
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCDate
---
{{JSRef}}

Die **`getUTCDate()`** Methode gibt den Tag des Monats eines Datums bezüglich der Weltzeit zurück.

{{EmbedInteractiveExample("pages/js/date-getutcdate.html")}}

## Syntax

    dateObj.getUTCDate()

### Rückgabewert

Eine ganze Zahl zwischen 1 und 31, die den Tag des Monats des gegebenen Datums bezüglich der Weltzeit (UTC) angibt.

## Beispiele

### Einsatz von `getUTCDate()`

Das folgende Beispiel weißt der Variablen `day` den Tag des aktullen Datums zu.

```js
var today = new Date();
var day = today.getUTCDate();
```

## Spezifikationen

| Spezifikation                                                                                                        | Status                       | Kommentar                                             |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.15', 'Date.prototype.getUTCDate')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.getutcdate', 'Date.prototype.getUTCDate')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.getutcdate', 'Date.prototype.getUTCDate')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.getUTCDate")}}

## Siehe auch

- {{jsxref("Date.prototype.getDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
