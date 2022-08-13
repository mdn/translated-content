---
title: Date.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Date/valueOf
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/valueOf
---
{{JSRef}}

Die **`valueOf()`** Methode gibt den primitiven Wert eines {{jsxref("Date")}} Objektes zurück.

{{EmbedInteractiveExample("pages/js/date-valueof.html")}}

## Syntax

    dateObj.valueOf()

### Rückgabewert

Die Anzahl der Millisekunden zwischen dem 1. Januar 1970 00:00:00 UTC und dem gegebenen date Objekt.

## Beschreibung

Die `valueOf()` Methode gibt den primitiven Wert eines {{jsxref("Date")}} Objektes als Nummern-Datentyp (number) zurück. Diese Nummer entspricht der Anzahl der Millisekunden seit dem 1. Januar 1970 UTC.

Diese Methode hat den gleiche Funktionsumfang wie die {{jsxref("Date.prototype.getTime()")}} Methode.

Diese Methode wird intern von JavaScript aufgerufen und muss nicht explizit im Quelltext verwendet werden.

## Beispiele

### Einsatz von `valueOf()`

```js
var x = new Date(56, 6, 17);
var myVar = x.valueOf();      // schreibt -424713600000 auf myVar
```

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar                                             |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.9.5.8', 'Date.prototype.valueOf')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.valueof', 'Date.prototype.valueOf')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.valueof', 'Date.prototype.valueOf')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.valueOf")}}

## Siehe auch

- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Date.prototype.getTime()")}}
