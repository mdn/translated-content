---
title: Math.acosh()
slug: Web/JavaScript/Reference/Global_Objects/Math/acosh
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/acosh
---
{{JSRef}}

Die Funktion **`Math.acosh()`** gibt den hyperbolischen Arkuskosinus einer Zahl zurück:

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>≥</mo><mn>1</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.acosh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="thinmathspace">arcosh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> das Ergebnis </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>≥</mo><mn>0</mn><mspace width="thickmathspace"></mspace><mtext>so </mtext><mtext>dass</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">cosh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \geq 1, \mathtt{\operatorname{Math.acosh}(x)} = \operatorname{arcosh}(x) = \text{ the unique } \; y \geq 0 \; \text{such that} \; \cosh(y) = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-acosh.html")}}

## Syntax

    Math.acosh(x)

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Der hyperbolische Arkuskosinus der übergebenen Zahl. Wenn die Zahl kleiner als **1** ist, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Weil `acosh()` eine statische Methode von `Math` ist, muss diese immer mit `Math.acosh()` genutzt werden, ohne dass ein Objekt von `Math` erstellt wird (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von `Math.acosh()`

```js
Math.acosh(-1); // NaN
Math.acosh(0);  // NaN
Math.acosh(0.5) // NaN
Math.acosh(1);  // 0
Math.acosh(2);  // 1.3169578969248166
```

Für Werte kleiner 1 `Math.acosh()` gibt Math.acosh {{jsxref("NaN")}} zurück.

## Polyfill

Für <math><semantics><mrow><mi>x</mi><mo>≥</mo><mn>1</mn></mrow><annotation encoding="TeX">x \geq 1</annotation></semantics></math> gilt: <math><semantics><mrow><mo lspace="0em" rspace="thinmathspace">arcosh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mrow><mo>(</mo><mrow><mi>x</mi><mo>+</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>1</mn></mrow></msqrt></mrow><mo>)</mo></mrow></mrow><annotation encoding="TeX">\operatorname {arcosh} (x) = \ln \left(x + \sqrt{x^{2} - 1} \right)</annotation></semantics></math>, daher kann dieses mit der folgenden Funktion emuliert werden:

```js
Math.acosh = Math.acosh || function(x) {
  return Math.log(x + Math.sqrt(x * x - 1));
};
```

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar            |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-math.acosh', 'Math.acosh')}}         | {{Spec2('ES6')}}         | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-math.acosh', 'Math.acosh')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.acosh")}}

## Siehe auch

- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
