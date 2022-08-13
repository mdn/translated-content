---
title: Date.prototype.setUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds
---
{{JSRef}}

Die **`setUTCSeconds()`** Methode setzt die Sekunden eines Datums bezüglich der Weltzeit.

{{EmbedInteractiveExample("pages/js/date-setutcseconds.html")}}

## Syntax

    dateObj.setUTCSeconds(secondsValue[, msValue])

### Parameter

- `secondsValue`
  - : Eine ganze Zahl zwischen 0 und 59, die die Sekunden repräsentiert.
- `msValue`
  - : Optional. Eine ganze Zahl zwische 0 und 999, die die Millisekunden repräsentiert.

### Rückgabewert

Die Anzahl der Millisekunden zwischen dem 1. Januar 1970 00:00:00 UTC und dem aktualisierten date Objekte.

## Beschreibung

Wenn der Parameter `msValue` nicht angegeben wird, so wird für diesen der Rückgabewert der Methode {{jsxref("Date.prototype.getUTCMilliseconds()", "getUTCMilliseconds()")}} benutzt.

Wenn ein Parameter außerhalb seiner spezifizierten Grenzen liegt, berücksichtigt die ` setUTCSeconds``() ` Methode diese Information beim aktualisieren eines {{jsxref("Date")}} Objektes. Wenn zum Beispiel 100 für `secondsValue` angegeben wird, so werden die Minuten um 1 inkrementiert und die Sekunden werden auf 40 gesetzt.

## Beispiele

### Einsatz von `setUTCSeconds()`

```js
var theBigDay = new Date();
theBigDay.setUTCSeconds(20);
```

## Spezifikationen

| Spezifikation                                                                                                                | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.31', 'Date.prototype.setUTCSeconds')}}                             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.setutcseconds', 'Date.prototype.setUTCSeconds')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.setutcseconds', 'Date.prototype.setUTCSeconds')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.setUTCSeconds")}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
