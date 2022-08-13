---
title: Date.prototype.setUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
---
{{JSRef}}

Die **`setUTCDate()`** Methode setzt den Monatstag eines Datums bezüglich der Weltzeit.

{{EmbedInteractiveExample("pages/js/date-setutcdate.html")}}

## Syntax

    dateObj.setUTCDate(dayValue)

### Parameter

- `dayValue`
  - : Eine ganze Zahl zwischen 1 und 31, die die Date eines Monats repräsentiert.

### Rückgabewert

Die Anzahl der Millisekunden zwischen dem 1. Januar 1970 00:00:00 UTC und dem aktualisierten date Objekte.

## Beschreibung

Wenn ein Parameter außerhalb seiner spezifizierten Grenzen liegt, berücksichtigt die `setUTCDate()` Methode diese Information beim aktualisieren eines {{jsxref("Date")}} Objektes. Wenn zum Beispiel 40 für `dayValue` angegeben wird, so wird ein {{jsxref("Date")}} Objekt mit dem Monat Juni auf den Tag 10 und den Monat Juli (Monat um 1 inkrementiert) aktualisiert.

## Beispiele

### Einsatz von `setUTCDate()`

```js
var theBigDay = new Date();
theBigDay.setUTCDate(20);
```

## Spezifikationen

| Spezifikation                                                                                                        | Status                       | Kommentar                                             |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.37', 'Date.prototype.setUTCDate')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.setutcdate', 'Date.prototype.setUTCDate')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.setutcdate', 'Date.prototype.setUTCDate')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.setUTCDate")}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.setDate()")}}
