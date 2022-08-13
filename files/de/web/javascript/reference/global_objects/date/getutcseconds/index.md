---
title: Date.prototype.getUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
---
{{JSRef}}

Die **`getUTCSeconds()`** Methode gibt die Sekunden der Zeit bezüglich der Weltzeit zurück.

{{EmbedInteractiveExample("pages/js/date-getutcseconds.html")}}

## Syntax

    dateObj.getUTCSeconds()

### Rückgabewert

Eine ganze Zahl zwischen 0 und 59, die die Sekunden des gegebenen Date-Objektes bezüglich der Weltzeit (UTC) angibt.

## Beispiele

### Einsatz von `getUTCSeconds()`

Das folgende Beispiel weist der Variablen `seconds` die aktuelle Sekunde zu.

```js
var today = new Date();
var seconds = today.getUTCSeconds();
```

## Spezifikationen

| Spezifikation                                                                                                                | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.23', 'Date.prototype.getUTCSeconds')}}                             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.getutcseconds', 'Date.prototype.getUTCSeconds')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.getutcseconds', 'Date.prototype.getUTCSeconds')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.getUTCSeconds")}}

## Siehe auch

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
