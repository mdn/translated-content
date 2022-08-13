---
title: Number.prototype.toFixed()
slug: Web/JavaScript/Reference/Global_Objects/Number/toFixed
tags:
  - JavaScript
  - Method
  - Number
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Number/toFixed
---
{{JSRef}}

Die **`toFixed()`** Methode formatiert eine Zahl in Festkommadarstellung.

{{EmbedInteractiveExample("pages/js/number-tofixed.html")}}

## Syntax

    numObj.toFixed([digits])

### Parameter

- `digits`
  - : Optional: Die Anzahl der Stellen, die nach dem Komma angezeigt werden sollen. Das ist ein Wert zwischen 0 und 20 (inklusiv), jedoch gibt es Implementierungen die optional einen größeren Bereich zulassen. Wenn das Argument nicht angegeben wird, wird der Parameter mit dem Standardwert 0 gesetzt.

### Rückgabewert

Eine String-Repräsentation der gegebenen Zahl in Festkommadarstellung.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Tritt auf, wenn `digits` zu klein oder groß ist. Werte `digits` zwischen 0 und 20 (inklusiv) ist, wird es nicht zu einem {{jsxref("RangeError")}} führen. Manche Implementierungen erlauben es auch kleinere oder größere Wert zu benutzen.
- {{jsxref("TypeError")}}
  - : Wenn die Methode auf einem Objekt, welches nicht vom Typ {{jsxref("Number")}} ist, aufgerufen wird.

## Beschreibung

**`toFixed()`** gibt eine String-Repräsentation von `numObj` zurück, die keine Exponentialdarstellung benutzt und genau `digits` viele Nachkommastellen beseitzt. Wenn es nötig ist, wird eine Zahl gerundet oder fehlende Dezimalstellen werden mit Nullen aufgefüllt, um die gewünschten Nachkommastellen zu erreichen. Wenn `numObj` größer als 1021 ist, ruft diese Methode {{jsxref("Number.prototype.toString()")}} auf und gibt den string in Exponentialdarstellung zurück.

> **Warning:** JavaScript Numbers können nicht alle Zahlen präzise darstellen, was zu unerwarteten Ergebnissen führen kann, wie z. B. `0.1 + 0.2 === 0.3` `false` ergibt.

## Beispiele

### Einsatz von `toFixed`

```js
var numObj = 12345.6789;

numObj.toFixed();       // Rückgabe: '12346': Gerundet, keine Nachkommastellen
numObj.toFixed(1);      // Rückgabe: '12345.7': Gerundet
numObj.toFixed(6);      // Rückgabe: '12345.678900': Nullen hinzugefügt
(1.23e+20).toFixed(2);  // Rückgabe: '123000000000000000000.00'
(1.23e-10).toFixed(2);  // Rückgabe: '0.00'
2.34.toFixed(1);        // Rückgabe: '2.3'
2.35.toFixed(1);        // Rückgabe: '2.4'. Aufgerundet.
2.55.toFixed(1);        // Rückgabe: '2.5'. Abgerundet - siehe die oben stehende Warnung
-2.34.toFixed(1);       // Rückgabe: -2.3 (Negative Nummernliterale geben kein String zurück ...)
(-2.34).toFixed(1);     // Rückgabe: '-2.3' (... außer es werden explizit Klammern verwendet.)
```

## Spezifikationen

| Spezifikation                                                                                                    | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                         | {{Spec2('ES3')}}         | Initiale Definition. Implementiert in JavaScript 1.5. |
| {{SpecName('ES5.1', '#sec-15.7.4.5', 'Number.prototype.toFixed')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-number.prototype.tofixed', 'Number.prototype.toFixed')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-number.prototype.tofixed', 'Number.prototype.toFixed')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Number.toFixed")}}

## Siehe auch

- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toString()")}}
