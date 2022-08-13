---
title: Math.round()
slug: Web/JavaScript/Reference/Global_Objects/Math/round
tags:
  - JavaScript
  - Math
  - Method
  - Number
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/round
---
{{JSRef}}
Die **`Math.round()`** Funktion gibt die nächstgelegenen Ganzzahl einer Zahl zurück.

{{EmbedInteractiveExample("pages/js/math-round.html")}}

## Syntax

    Math.round(x)

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Den Wert der gegebenen Zahl, der zur nächsten ganzen Zahl gerundet wird.

## Beschreibung

Wenn der Nachkommateil des Argumentes größer als 0.5 ist, wird das Argument zur nächsten ganzen Zahl, deren Absolutwert größer ist, gerundet. Wenn der Nachkommateil kleiner als 0.5 ist, wird auf die nächsten ganzen Zahl, deren Absolutwert kleiner ist, gerundet. Wenn der Nachkommateil genau 0.5 ist, wird auf die nächst größere ganze Zahl aufgerundet (in Richtung +∞). **Das Verhalten bei 0.5 ist anders als bei vielen anderen Programmiersprachen, welche in der Regel zur nächsten ganzen Zahl, welche weiter entfernt von 0 liegt, runden** (das kann zu unterschiedlichen Ergebnissen bei negativen Zahlen mit einem exakten Nachkommateil von 0.5 führen).

Weil `round()` eine statische Methode von `Math` ist, benutzt man als Aufruf immer `Math.round()` und nicht in dem man zunächst ein `Math`-Objekt erzeugt um anschliessend die `round()`-Methode aufzurufen (`Math` ist kein Konstruktor).

## Beispiele

```js
Math.round(20.49);  // 20
Math.round(20.5);   // 21
Math.round(42);     // 42
Math.round(-20.5);  // -20
Math.round(-20.51); // -21
```

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| ECMAScript 1st Edition.                                                      | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.15', 'Math.round')}}     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.round', 'Math.round')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.round', 'Math.round')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.round")}}

## Siehe auch

- {{jsxref("Number.toPrecision()")}}
- {{jsxref("Number.toFixed()")}}
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
