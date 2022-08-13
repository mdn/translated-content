---
title: Math.log2()
slug: Web/JavaScript/Reference/Global_Objects/Math/log2
tags:
  - ECMAScript 2015
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/log2
---
{{JSRef}}

Die **`Math.log2()`** Funktion gibt den Logarithmus zur Basis`2` zurück. Das bedeutet

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log2</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>2</mn></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext></mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>so das</mtext><mspace width="thickmathspace"></mspace><msup><mn>2</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0, \mathtt{\operatorname{Math.log2}(x)} = \log_2(x) = \text{the unique} \; y \; \text{such that} \; 2^y = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log2.html")}}

## Syntax

    Math.log2(x)

### Parameters

- `x`
  - : Eine Zahl.

### Rückgabewert

Den Logarithmus zur Basis 2 der gegebenen Zahl. Wenn die Zahl negativ ist, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Wenn der Wert von `x` negativ ist, so gibt die Funktion immer [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN "Die globale NaN Eigenschaft ist ein Wert, der Not-A-Number (keine Zahl) repräsentiert.") zurück.

Weil `log2()` eine statische Funktion von `Math` ist, wird es immer als `Math.log2()` eingesetzt`,` jedoch nicht als Methode eines erzeugten `Math` Objektes (`Math` ist kein Konstruktor).

Diese Funktion ist äquivalent zu Math.log(x) / Math.log(2). Für log2(e) gibt es die Konstante {{jsxref("Math.LOG2E")}} welche 1 / {{jsxref("Math.LN2")}} ist.

## Beispiele

### Einsatz von `Math.log2()`

```js
Math.log2(3);    // 1.584962500721156
Math.log2(2);    // 1
Math.log2(1);    // 0
Math.log2(0);    // -Infinity
Math.log2(-2);   // NaN
Math.log2(1024); // 10
```

## Polyfill

Diese Funktion kann mit folgender Funktion emitiert werden. Es kann sein, dass diese Funktion bei einigen eingabewerten ungenau (ungefähr 1 << 29) ist. Schachtel die Funktion in {{jsxref("Math.round()")}} wenn mit Bitmasken gearbeitet wird.

```js
Math.log2 = Math.log2 || function(x) {
  return Math.log(x) * Math.LOG2E;
};
```

## Spezifikationen

| Spezifikation                                                            | Status                       | Kommentar            |
| ------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-math.log2', 'Math.log2')}} | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-math.log2', 'Math.log2')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.log2")}}

## Siehe auch

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.pow()")}}
