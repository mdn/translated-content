---
title: Math.log10()
slug: Web/JavaScript/Reference/Global_Objects/Math/log10
tags:
  - ECMAScript 2015
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/log10
---
{{JSRef}}Die **`Math.log10()`** Funktion gibt den Logarithmus zur Basis`10` zurück. Das bedeutet

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log10</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext></mtext><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>so das</mtext><mspace width="thickmathspace"></mspace><msup><mn>10</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0, \mathtt{\operatorname{Math.log10}(x)} = \log_10(x) = \text{the unique} \; y \; \text{such that} \; 10^y = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log10.html")}}

## Syntax

    Math.log10(x)

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Den Logarithmus zur Basis 10 der gegebenen Zahl. Wenn die Zahl negativ ist, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Wenn der Wert von `x` negativ ist, so gibt die Funktion immer [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN "Die globale NaN Eigenschaft ist ein Wert, der Not-A-Number (keine Zahl) repräsentiert.") zurück.

Weil `log10()` eine statische Funktion von `Math` ist, wird es immer als `Math.log10()` eingesetzt`,` jedoch nicht als Methode eines erzeugten `Math` Objektes (`Math` ist kein Konstruktor).

Diese Funktion ist äquivalent zu Math.log(x) / Math.log(10). Für log10(e) gibt es die Konstante {{jsxref("Math.LOG10E")}} welche 1 / {{jsxref("Math.LN10")}} ist.

## Beispiele

### Einsatz von `Math.log10()`

```js
Math.log10(2);      // 0.3010299956639812
Math.log10(1);      // 0
Math.log10(0);      // -Infinity
Math.log10(-2);     // NaN
Math.log10(100000); // 5
```

### Polyfill

Diese Funktion kann folgendermaßen emitiert werden:

```js
Math.log10 = Math.log10 || function(x) {
  return Math.log(x) * Math.LOG10E;
};
```

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar            |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-math.log10', 'Math.log10')}}     | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-math.log10', 'Math.log10')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.log10")}}

## Siehe auch

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
