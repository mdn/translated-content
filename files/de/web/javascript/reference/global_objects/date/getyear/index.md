---
title: Date.prototype.getYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getYear
tags:
  - Date
  - Deprecated
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getYear
---
{{JSRef}} {{deprecated_header}}

Die **`getYear()`** Methode gibt das Jahr eines Datums bezüglich der Ortszeit zurück. Weil `getYear()` nicht das ganze Jahr zurück gibt (das "Jahr 2000 Problem"), wird es nicht weiter eingesetzt und wird von der Methode {{jsxref("Date.prototype.getFullYear", "getFullYear()")}} ersetzt.

## Syntax

    dateObj.getYear()

### Rückgabewert

Eine Zahl, welche das Jahr minus 1900 des gegebenen Datums bezüglich der lokalen Zeit angibt.

## Beschreibung

- Für Jahre größer oder gleich 2000 ist der Rückgabewert von `getYear()` 100 oder größer. Zum Beispiel wird für das Jahr 2026 der Wert 126 zurück gegeben.
- Für Jahre zwischen 1900 und 1999 ist der Rückgabewert von `getYear()` zwischen 0 und 99. Zum Beispiel wird für das Jahr 1976 der Wert 76 zurückgegeben.
- Für Jahre kleiner als 1900 ist der Rückgabewert von `getYear()` kleiner 0. Zum Beispiel wird für das Jahr 1800 der Wert -100 zurück gegeben.

Um mit Jahren vor und nach 2000 umgehen zu können, sollte stattdessen die Methode {{jsxref("Date.prototype.getFullYear", "getFullYear()")}} eingesetzt werden. Diese gibt das vollständige Jahr zurück.

## Rückwärtskompatibilität

### Verhalten in JavaScript 1.2 und früher

Die `getYear()` Methode gibt entweder ein 2-stelliges oder 4-stelliges Jahr zurück.

- Für Jahre zwischen 1900 (inklusiv) und 1999 (inklusiv) gibt `getYear()` das Jahr minus 1900 zurück. Zum Beispiel wird für das Jahr 1976 der Wert 76 zurückgegeben.
- Für Jahre kleiner als 1900 oder größer als 1999 gibt die `getYear()` eine 4-stellige Jahreszahl zurück. Zum Beispiel wird für das Jahr 1856 der Wert 1856 zurückgegeben. Für das Jahr 2026 wird der Wert 2026 zurückgegeben.

## Beispiele

### Jahre zwischen 1900 und 1999

Das zweite Statement initialisiert die Variable `year` mit dem Wert 95.

```js
var Xmas = new Date('December 25, 1995 23:15:00');
var year = Xmas.getYear(); // returns 95
```

### Jahre nach 1999

Das zweite Statement initialisiert die Variable `year` mit dem Wert 100.

```js
var Xmas = new Date('December 25, 2000 23:15:00');
var year = Xmas.getYear(); // returns 100
```

### Jahre vor 1900

Das zweite Statement initialisiert die Variable `year` mit dem Wert -100.

```js
var Xmas = new Date('December 25, 1800 23:15:00');
var year = Xmas.getYear(); // returns -100
```

### Setzen und bekommen von Jahren zwischen 1900 und 1999

Das zweite Statement initialisiert die Variable `year` mit dem Wert 95, was für das Jahr 1995 steht.

```js
var Xmas = new Date('December 25, 2015 23:15:00');
Xmas.setYear(95);
var year = Xmas.getYear(); // returns 95
```

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------------------------------ |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.3.                          |
| {{SpecName('ES5.1', '#sec-B.2.4', 'Date.prototype.getYear')}}                             | {{Spec2('ES5.1')}}     | Definiert in dem (informativen) Kompatibilitäts-Anhang                         |
| {{SpecName('ES6', '#sec-date.prototype.getyear', 'Date.prototype.getYear')}}         | {{Spec2('ES6')}}         | Definiert in dem (normativ) Anhang für zusätzliche Funktionen für Web-Browser. |
| {{SpecName('ESDraft', '#sec-date.prototype.getyear', 'Date.prototype.getYear')}} | {{Spec2('ESDraft')}} |                                                                                |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.getYear")}}

## Siehe auch

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setYear()")}}
