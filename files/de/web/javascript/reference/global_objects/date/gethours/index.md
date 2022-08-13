---
title: Date.prototype.getHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getHours
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getHours
---
{{JSRef}}

Die **`getHours()`** Methode gibt die Stunde eines Datums bezüglich der Ortszeit zurück.

{{EmbedInteractiveExample("pages/js/date-gethours.html")}}

## Syntax

    dateObj.getHours()

### Rückgabewert

Eine ganze Zahl zwischen 0 und 23, welche die Stunde der gegebenen Zeit bezüglich der lokalen Zeit angibt.

## Beispiele

### Einsatz von `getHours()`

Im zweiten Statement wird die Variable `hours` mit dem Wert 23 initialisiert. Dieses geschied mit dem Wert des {{jsxref("Global_Objects/Date", "Date")}} Objektes `Xmas95`.

```js
var Xmas95 = new Date('December 25, 1995 23:15:30');
var hours = Xmas95.getHours();

console.log(hours); // 23
```

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar                                             |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.18', 'Date.prototype.getHours')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.gethours', 'Date.prototype.getHours')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.gethours', 'Date.prototype.getHours')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.getHours")}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
