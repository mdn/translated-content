---
title: Date.prototype.setSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setSeconds
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setSeconds
---
{{JSRef}}

Die **`setSeconds()`** Methode setzt die Sekunden eines Datums bezüglich der Ortzseit.

{{EmbedInteractiveExample("pages/js/date-setseconds.html")}}

## Syntax

    dateObj.setSeconds(secondsValue[, msValue])

### Versionen vor JavaScript 1.3

    dateObj.setSeconds(secondsValue)

### Parameter

- `secondsValue`
  - : Eine ganze Zahl zwischen 0 und 59, die die Sekunden repräsentiert.
- `msValue`
  - : Optional. Eine ganze Zahl zwischen 0 und 999, die die Millisekunden repräsentiert.

### Rückgabewert

Die Anzahl der Millisekunden zwischen dem 1. Januar 1970 00:00:00 UTC und dem geänderten date Objekt.

## Beschreibung

Wenn der Parameter `msValue` nicht gesetzt ist, wird der Rückgabewert der Methode {{jsxref("Date.prototype.getMilliseconds()", "getMilliseconds()")}} eingesetzt.

Wenn der Wert eines Parameters seine Grenzen überschreitet, wird die `setSeconds()` Methode diese Information in dem {{jsxref("Date")}} Objekt berücksichtigen. Wenn zum Beispiel für den Parameter `secondsValue` der Wert 100 benutzt wird, werden die Minuten um 1 inkrementiert und und für die Sekunden wird der Wert 40 benutzt.

## Beispiele

### Einsatz von `setSeconds()`

```js
var theBigDay = new Date();
theBigDay.setSeconds(30);
```

## Spezifikationen

| Spezifikation                                                                                                        | Status                       | Kommentar                                             |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.30', 'Date.prototype.setSeconds')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.setseconds', 'Date.prototype.setSeconds')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.setseconds', 'Date.prototype.setSeconds')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.setSeconds")}}

## Siehe auch

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
