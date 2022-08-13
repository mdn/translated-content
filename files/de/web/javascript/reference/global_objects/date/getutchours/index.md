---
title: Date.prototype.getUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
---
{{JSRef}}

Die **`getUTCHours()`** Methode gibt die Stunden eines Datums bezüglich der Weltzeit zurück.

{{EmbedInteractiveExample("pages/js/date-getutchours.html")}}

## Syntax

    dateObj.getUTCHours()

### Rückgabewert

Eine ganze Zahl zwischen 0 und 23, die die Stunde des gegebenen date Objektes bezüglich der Weltzeit (UTC) angibt.

## Beispiele

### Einsatz von `getUTCHours()`

Im folgenden Beispiel wird der Variablen `hours` die aktuelle Stunde der Weltzeit zugewiesen.

```js
var today = new Date();
var hours = today.getUTCHours();
```

## Spezifikationen

| Spezifikation                                                                                                        | Status                       | Kommentar                                             |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.19', 'Date.prototype.getUTCHours')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.getutchours', 'Date.prototype.getUTCHours')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.getutchours', 'Date.prototype.getUTCHours')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.getUTCHours")}}

## Siehe auch

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
