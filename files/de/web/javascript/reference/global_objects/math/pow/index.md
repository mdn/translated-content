---
title: Math.pow()
slug: Web/JavaScript/Reference/Global_Objects/Math/pow
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/pow
---
{{JSRef}}

Die Funktion **`Math.pow()`** gibt die Potenz der `Basis` mit dem `Exponenten` an` `(`BasisExponent`)

{{EmbedInteractiveExample("pages/js/math-pow.html")}}

## Syntax

    Math.pow(Basis, Exponent)

### Parameter

- `Basis`
  - : Basis (auch: die Grundzahl).
- `Exponent`
  - : der Exponent (auch: die Hochzahl).

### Rückgabewert

Eine Zahl, die die Basis potenziert mit dem Exponenten repräsentiert.

## Beschreibung

Weil `pow()` eine statische Funktion von `Math` ist, wird es immer als `Math.pow()` eingesetzt`,` jedoch nicht als Methode eines erzeugten `Math` Objektes (`Math` ist kein Konstruktor).

## Beispiele

### Benutzung von `Math.pow()`

```js
// einfach
Math.pow(7, 2);    // 49
Math.pow(7, 3);    // 343
Math.pow(2, 10);   // 1024
// Brüche als Exponenten
Math.pow(4, 0.5);  // 2 (Wurzel aus 4)
Math.pow(8, 1/3);  // 2 (Kubikwurzel aus 8)
Math.pow(2, 0.5);  // 1.4142135623730951 (Wurzel aus 2)
Math.pow(2, 1/3);  // 1.2599210498948732 (Kubikwurzel aus 2)
// Negative Exponenten
Math.pow(7, -2);   // 0.02040816326530612 (1/49)
Math.pow(8, -1/3); // 0.5
// Negative Basis
Math.pow(-7, 2);   // 49 (Das Quadrat ist positiv)
Math.pow(-7, 3);   // -343 (kann negativ sein)
Math.pow(-7, 0.5); // NaN (negative Zahlen haben keine Quadratwurzel)
// auch wegen Grenzen bei der Gleitkomma Berechnung,
// Negative Basis mit Bruch als Exponent gibt immer NaN zurück
Math.pow(-7, 1/3); // NaN
```

## Spezifikationen

| Spezifikation                                                        | Status                       | Kommentar                                              |
| -------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------ |
| {{SpecName('ES1')}}                                             | {{Spec2('ES1')}}         | Initiale Deffinition, Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.13', 'Math.pow')}} | {{Spec2('ES5.1')}}     |                                                        |
| {{SpecName('ES6', '#sec-math.pow', 'Math.pow')}}     | {{Spec2('ES6')}}         |                                                        |
| {{SpecName('ESDraft', '#sec-math.pow', 'Math.pow')}} | {{Spec2('ESDraft')}} |                                                        |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.pow")}}

## Siehe auch

- {{jsxref("Math.cbrt()")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.sqrt()")}}
- [Exponentiation operator](/de/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Exponentiation "Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value. The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/).") {{experimental_inline}}
