---
title: Date.prototype.getMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMinutes
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getMinutes
---
{{JSRef}}

Die **`getMinutes()`** Methode gibt die Minuten eines Datums bezüglich der Ortszeit zurück.

{{EmbedInteractiveExample("pages/js/date-getminutes.html")}}

## Syntax

    dateObj.getMinutes()

### Rückgabewert

Eine ganze Zahl zwischen 0 und 59, welche die Minuten der gegebenen Zeit bezüglich der lokalen Zeit angibt.

## Beispiele

### Einsatz von `getMinutes()`

Im zweiten Statement wird die Variable `minutes` mit dem Wert 15 initialisiert. Dieses wird mit dem Wert des {{jsxref("Global_Objects/Date", "Date")}} Objektes `Xmas95` erreicht.

```js
var Xmas95 = new Date('December 25, 1995 23:15:30');
var minutes = Xmas95.getMinutes();

console.log(minutes); // 15
```

## Spezifikationen

| Spezifikation                                                                                                        | Status                       | Kommentar                                             |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.20', 'Date.prototype.getMinutes')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.getminutes', 'Date.prototype.getMinutes')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.getminutes', 'Date.prototype.getMinutes')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.getMinutes")}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}
