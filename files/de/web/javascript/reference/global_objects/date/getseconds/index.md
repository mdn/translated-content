---
title: Date.prototype.getSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getSeconds
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getSeconds
---
{{JSRef}}

Die **`getSeconds()`** Methode gibt die Sekunden eines Datums (Zeit) bezüglich der Ortszeit zurück.

{{EmbedInteractiveExample("pages/js/date-getseconds.html")}}

## Syntax

    dateObj.getSeconds()

### Rückgabewert

Eine ganze Zahl zwischen 0 und 59, welche die Sekunden der gegebenen Zeit bezüglich der lokalen Zeit angibt.

## Beispiele

### Einsatz von `getSeconds()`

Im zweiten Statement wird der Variablen `seconds` der Wert 30 zugewiesen. Dieses geschiet auf Basis des {{jsxref("Date")}} Objektes `Xmas95`.

```js
var Xmas95 = new Date('December 25, 1995 23:15:30');
var seconds = Xmas95.getSeconds();

console.log(seconds); // 30
```

## Spezifikationen

| Spezifikation                                                                                                        | Status                       | Kommentar                                             |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.22', 'Date.prototype.getSeconds')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.getseconds', 'Date.prototype.getSeconds')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.getseconds', 'Date.prototype.getSeconds')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.getSeconds")}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
