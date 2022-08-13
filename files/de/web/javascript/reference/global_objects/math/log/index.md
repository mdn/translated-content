---
title: Math.log()
slug: Web/JavaScript/Reference/Global_Objects/Math/log
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/log
---
{{JSRef}}

Die **`Math.log()`** Funktion gibt den natürlichen Logarithmus (Logarithmus zur Basis {{jsxref("Math.E", "e")}}) einer Zahl zurück. Das bedeutet

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>sodass </mtext><mspace width="thickmathspace"></mspace><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0, \mathtt{\operatorname{Math.log}(x)} = \ln(x) = \text{the unique} \; y \; \text{such that} \; e^y = x</annotation></semantics></math>

Die JavaScript Function **`Math.log()` **ist gleichbedeutend zu der mathematischen _Funktion ln(x)_.

{{EmbedInteractiveExample("pages/js/math-log.html")}}

## Syntax

    Math.log(x)

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Der natürliche Logarithmus (Basis {{jsxref("Math.E", "e")}}) der übergebenen Zahl. Wenn die Zahl negativ ist, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Wenn der Wert von `x` negativ ist, so gibt die Funktion immer {{jsxref("NaN")}} zurück.

Weil `log()` eine statische Funktion von `Math` ist, wird es immer als `Math.log()` eingesetzt`,` jedoch nicht als Methode eines erzeugten `Math` Objektes (`Math` ist kein Konstruktor).

Wenn der natürliche Logarithmus von 2 und 10 gebraucht wird, gibt es die Konstanten {{jsxref("Math.LN2")}} und {{jsxref("Math.LN10")}}. Wenn ein Logarithmus zur Basis 2 oder 10 gebracht wird, gibt es die Funktionen {{jsxref("Math.log2()")}} und {{jsxref("Math.log10()")}}. Wenn der Logarithmus zu einer anderen Basis gebraucht wird, benutzt man Math.log(x) / Math.log(andereBasis) wie im Beispiel unten. Manchmal möchte man 1 / Math.log(andereBasis) vorberechnen.

## Beispiele

### Einsatz von `Math.log()`

```js
Math.log(-1); // NaN, weil negativ
Math.log(0);  // -Infinity
Math.log(1);  // 0
Math.log(10); // 2.302585092994046
```

### Einsatz von `Math.log()` mit unterschiedlichen Basen

Die folgende Funktion gibt den Logarithmus von `y` zur Basis `x` zurück (logx y):

```js
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
```

Wenn `getBaseLog(10, 1000)` ausgeführt wird, ist das Ergebnis `2.9999999999999996`. Diese Zahl ist nah an 3 und kommt durch Rundungsfehler bei Fließkommazahlen.

## Spezifikationen

| Spezifikation                                                        | Status                       | Kommentar                                             |
| -------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.10', 'Math.log')}} | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.log', 'Math.log')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.log', 'Math.log')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.log")}}

## Siehe auch

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
