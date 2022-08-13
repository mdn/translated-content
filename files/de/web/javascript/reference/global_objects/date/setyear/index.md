---
title: Date.prototype.setYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setYear
tags:
  - Date
  - Deprecated
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setYear
---
{{JSRef}} {{deprecated_header}}Die **`setYear()`** Methode setzt das Jahr für eine Datum bezüglich der Ortszeit. Weil `setYear()` nicht das volle Jahr setzt ("Jahr 2000 Probem"), wird es nicht länger eingesetzt und wird von der Methode {{jsxref("Date.prototype.setFullYear()", "setFullYear()")}} ersetzt.

## Syntax

    dateObj.setYear(yearValue)

### Parameter

- `yearValue`
  - : Eine ganze Zahl.

### Rückgabewert

Die Anzahl der Millisekunden zwischen dem 1. Januar 1970 00:00:00 UTC und dem geänderten date Objekt.

## Beschreibung

Wenn `yearValue` eine Nummer zwische 0 und 99 (inklusiv) ist, wird das Jahr eines {{jsxref("date")}} Objekt mit dem Wert `1900 + yearValue` gesetzt. Ansernfalls wird das Jahr des Objektes mit dem Wert `yearValue` gesetzt.

## Beispiele

### Einsatz von `setYear()`

Die ersten beiden Zeilen setzen das Jahr auf 1996. Die dritte Zeile setzt das Jahr auf 2000

```js
var theBigDay = new Date();

theBigDay.setYear(96);
theBigDay.setYear(1996);
theBigDay.setYear(2000);
```

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------------------------------ |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0.                          |
| {{SpecName('ES5.1', '#sec-B.2.5', 'Date.prototype.setYear')}}                             | {{Spec2('ES5.1')}}     | Definiert in dem (informativen) Kompatibilitäts-Anhang                         |
| {{SpecName('ES6', '#sec-date.prototype.setyear', 'Date.prototype.setYear')}}         | {{Spec2('ES6')}}         | Definiert in dem (normativ) Anhang für zusätzliche Funktionen für Web-Browser. |
| {{SpecName('ESDraft', '#sec-date.prototype.setyear', 'Date.prototype.setYear')}} | {{Spec2('ESDraft')}} | Definiert in dem (normativ) Anhang für zusätzliche Funktionen für Web-Browser. |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.setYear")}}

## Siehe auch

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
- {{jsxref("Date.prototype.setUTCFullYear()")}}
