---
title: Math.log1p()
slug: Web/JavaScript/Reference/Global_Objects/Math/log1p
tags:
  - ECMAScript 2015
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/log1p
---
{{JSRef}}

Die **`Math.log1p()`** Funktion gibt den natürlichen Logarithmus (Logarithmus zur Basis {{jsxref("Math.E", "e")}}) von 1 + x zurück. Das bedeutet

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>></mo><mo>-</mo><mn>1</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log1p</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">\forall x > -1, \mathtt{\operatorname{Math.log1p}(x)} = \ln(1 + x)</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log1p.html")}}

## Syntax

    Math.log1p(x)

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Den natürliche Logarithmus (zur Basis {{jsxref("Math.E", "e")}}) von 1 plus der gegebenen Zahl. Wenn die Zahl kleiner als **-1** ist, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Für sehr kleine Zahlen für `x` kann das Addieren mit 1 zu verlusten in der Präzision führen. Die Zahlen in JavaScript haben eine Genauigkeit von 15 Stellen. `1 + 1e-15 = 1.000000000000001`, aber `1 + 1e-16 = 1.000000000000000` und damit exakt ` 1``.0 ` in dieser Arithmetik, weil Ziffern nach der 15 Stelle gerundet werden.

Wenn `log(1 + x)` berechnet wird, bekommt man ein Ergebnis sehr na an `x`, wenn `x` klein ist (das ist der Grund, warum es 'natürlicher' Logarithmus heißt). Wenn `Math.log(1 + 1.1111111111e-15)` berechnet wird sollte man ein Ergebnis nah an `1.1111111111e-15` bekommt. Stattdessen berechnet man den Logarithmus von `1.00000000000000111022` (die Rundung geschieht im Binärsystem und ist manchmal unschön) un erhält das Ergebnis `1.11022...e-15` mit nur 3 korrekten Stellen. Wenn stattdessen ` Math.log1p(``1.1111111111e-15``) ` berechnet wird, bekommt man ein besseres Ergebnis von `1.1111111110999995e-15` mit 15 korrekten Stellen in der Präzision (aktuell 16 in diesem Fall).

Wenn der Wert von `x` kleiner als -1 ist, gibt die Funktion immer den Wert {{jsxref("NaN")}} zurück.

Weil `log1p()` eine statische Funktion von `Math` ist, wird es immer als `Math.log1p()` eingesetzt`,` jedoch nicht als Methode eines erzeugten `Math` Objektes (`Math` ist kein Konstruktor).

## Beispiele

### Einsatz von `Math.log1p()`

```js
Math.log1p(1);  // 0.6931471805599453
Math.log1p(0);  // 0
Math.log1p(-1); // -Infinity
Math.log1p(-2); // NaN
```

## Polyfill

Diese Funktion kann folgendermaßen emuliert werden:

```js
Math.log1p = Math.log1p || function(x) {
  return Math.log(1 + x);
};
```

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar            |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-math.log1p', 'Math.log1p')}}     | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-math.log1p', 'Math.log1p')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.log1p")}}

## Siehe auch

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
