---
title: Math.sign()
slug: Web/JavaScript/Reference/Global_Objects/Math/sign
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/sign
---
{{JSRef}}

Die **`Math.sign()`** Funktion gibt das Vorzeichen einer Zahl zurück, welches angibt, ob eine Zahl positiv, negativ oder 0 ist.

{{EmbedInteractiveExample("pages/js/math-sign.html")}}

## Syntax

    Math.sign(x)

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Eine Zahl, die das Vorzeichen des übergebenen Wertes repräsentiert. Wenn der Parameter eine positive Zahl ist, eine negative Zahl ist oder eine Null (0) ist, wird die Funktion `1`, `-1`, `0` oder `-0` zurückgeben. Andernfalls wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Weil `sign()` eine statische Funktion von `Math` ist, wird sie immer als `Math.sign()` eingesetzt, jedoch nicht als Methode eines erzeugten `Math` Objektes (`Math` ist kein Konstruktor).

Diese Funktion hat die 5 möglichen Rückgabewerte `1`, `-1`, `0`, `-0` und `NaN`, welche "positive Zahlen", "negative Zahlen", "positiv 0", "negativ 0" und {{jsxref("NaN")}} repräsentieren.

Der Übergebeparameter dieser Funktion wird implizit zu einem `number`-Type konvertiert.

## Beispiele

### Einsatz von `Math.sign()`

```js
Math.sign(3);     //  1
Math.sign(-3);    // -1
Math.sign('-3');  // -1
Math.sign(0);     //  0
Math.sign(-0);    // -0
Math.sign(NaN);   // NaN
Math.sign('foo'); // NaN
Math.sign();      // NaN
```

## Polyfill

```js
if (!Math.sign) {
  Math.sign = function(x) {
    // If x is NaN, the result is NaN.
    // If x is -0, the result is -0.
    // If x is +0, the result is +0.
    // If x is negative and not -0, the result is -1.
    // If x is positive and not +0, the result is +1.
    return ((x > 0) - (x < 0)) || +x;
    // A more aesthetical persuado-representation is shown below
    //
    // ( (x > 0) ? 0 : 1 )  // if x is negative then negative one
    //          +           // else (because you cant be both - and +)
    // ( (x < 0) ? 0 : -1 ) // if x is positive then positive one
    //         ||           // if x is 0, -0, or NaN, or not a number,
    //         +x           // Then the result will be x, (or) if x is
    //                      // not a number, then x converts to number
  };
}
```

In diesem Polyfill ist keine weitere Typumwandlung nötig, um aus `(x > 0)` oder `(x < 0)` Zahlen zu machen, weil das Subtrahieren voneinander eine Typkonvertierung von boolean zu Zahlen erzwingt.

## Spezifikationen

| Spezifikation                                                            | Status                       | Comment              |
| ------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-math.sign', 'Math.sign')}}     | {{Spec2('ES6')}}         | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-math.sign', 'Math.sign')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.sign")}}

## Siehe auch

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.trunc()")}}
