---
title: Date.prototype.getUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
---
{{JSRef}}

Die **`getUTCMilliseconds()`** Methode gibt die Millisekunden eines Datums bezüglich der Weltzeit zurück.

{{EmbedInteractiveExample("pages/js/date-getutcmilliseconds.html")}}

## Syntax

    dateObj.getUTCMilliseconds()

### Rückgabewert

Eine ganze Zahl zwischen 0 und 999, die die Millisekunden des gegebenen date Objektes bezüglich der Weltzeit (UTC) angibt.

## Beispiele

### Einsatz von `getUTCMilliseconds()`

Im folgenden Beispiel wird der Variablen `milliseconds` die aktuellen Millisekunden der Weltzeit zugewiesen.

```js
var today = new Date();
var milliseconds = today.getUTCMilliseconds();
```

## Spezifikationer

| Spezifikation                                                                                                                            | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                                 | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.25', 'Date.prototype.getUTCMilliseconds')}}                                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.getutcmilliseconds', 'Date.prototype.getUTCMilliseconds')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.getutcmilliseconds', 'Date.prototype.getUTCMilliseconds')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.getUTCMilliseconds")}}

## Siehe auch

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
