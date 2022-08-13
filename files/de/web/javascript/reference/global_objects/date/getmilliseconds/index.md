---
title: Date.prototype.getMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds
---
{{JSRef}}

Die **`getMilliseconds()`** Methode gibt die Millisekunden eines Datums bezüglich der Ortszeit zurück.

{{EmbedInteractiveExample("pages/js/date-getmilliseconds.html")}}

## Syntax

    dateObj.getMilliseconds()

### Rückgabewert

Eine ganze Zahl zwischen 0 und 999, welche die Millisekunden der gegebenen Zeit bezüglich der lokalen Zeit angibt.

## Beispiele

### Einsatz von `getMilliseconds()`

Im folgenden Beispiel wird die Variable `milliseconds` mit den aktuellen Millisekunden initialisiert:

```js
var today = new Date();
var milliseconds = today.getMilliseconds();
```

## Spezifikationen

| Spezifikation                                                                                                                    | Status                       | Kommentar                                             |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                         | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.24', 'Date.prototype.getMilliseconds')}}                                 | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.getmilliseconds', 'Date.prototype.getMilliseconds')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.getmilliseconds', 'Date.prototype.getMilliseconds')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.getMilliseconds")}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
