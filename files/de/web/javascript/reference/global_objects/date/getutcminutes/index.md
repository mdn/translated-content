---
title: Date.prototype.getUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
---
{{JSRef}}

Die **`getUTCMinutes()`** Methode gibt die Minuten eines Datums bezüglich der Weltzeit zurück.

{{EmbedInteractiveExample("pages/js/date-getutcminutes.html")}}

## Syntax

    dateObj.getUTCMinutes()

### Rückgabewert

Eine ganze Zahl wzischen 0 und 59, die die Minuten des gegebenen date Objektes bezüglich der Weltzeit (UTC) angibt.

## Beispiele

### Einsatz von `getUTCMinutes()`

Im Folgenden Beispiel wird der Variablen `minutes` die aktuelle Minute der Weltzeit zugewiesen.

```js
var today = new Date();
var minutes = today.getUTCMinutes();
```

## Spezifikationen

| Spezifikation                                                                                                                | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.21', 'Date.prototype.getUTCMinutes')}}                             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.getutcminutes', 'Date.prototype.getUTCMinutes')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.getutcminutes', 'Date.prototype.getUTCMinutes')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.getUTCMinutes")}}

## Siehe auch

- {{jsxref("Date.prototype.getMinutes()")}}
- {{jsxref("Date.prototype.setUTCMinutes()")}}
