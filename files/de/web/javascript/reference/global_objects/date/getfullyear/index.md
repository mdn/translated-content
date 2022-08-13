---
title: Date.prototype.getFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getFullYear
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getFullYear
---
{{JSRef}}

Die **`getFullYear()`** Methode gibt das Jahr eines Datums bezüglich der Ortszeit zurück.

Diese Methode wird anstatt der {{jsxref("Date.prototype.getYear()", "getYear()")}} eingesetzt.

{{EmbedInteractiveExample("pages/js/date-getfullyear.html")}}

## Syntax

    dateObj.getFullYear()

### Rückgabewert

Eine Zahl, die das Jahr des gegebenen Datums bezüglich der lokalen Zeit angibt.

## Beschreibung

Der von `getFullYear()` zurückgegebene Wert ist eine absolute Zahl. Für Daten zwischen den Jahren 1000 und 9999 gibt `getFullYear()` eine vier ziffrige Nummer zurück (z. B. 1995). Diese Methode wird eingesetzt, um sicherzustellen, dass auch Jahre nach 2000 richtig zurückgegeben werden.

## Beispiele

### Einsatz von `getFullYear()`

Im folgenden Beispiel wird die Variable `year` mit dem aktuellen Jahr (4 Ziffern) initialisiert.

```js
var today = new Date();
var year = today.getFullYear();
```

## Spezifikationen

| Spezifikation                                                                                                        | Status                       | Kommentar                                             |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.10', 'Date.prototype.getFullYear')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.getfullyear', 'Date.prototype.getFullYear')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.getfullyear', 'Date.prototype.getFullYear')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.getFullYear")}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
- {{jsxref("Date.prototype.getYear()")}}
