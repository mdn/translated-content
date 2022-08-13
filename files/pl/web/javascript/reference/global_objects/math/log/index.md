---
title: Math.log()
slug: Web/JavaScript/Reference/Global_Objects/Math/log
tags:
  - JavaScript
  - Math
  - Method
translation_of: Web/JavaScript/Reference/Global_Objects/Math/log
original_slug: Web/JavaScript/Referencje/Obiekty/Math/log
---
{{JSRef}}

## Podsumowanie

Zwraca logarytm naturalny (o podstawie {{jsxref("Math.E", "e")}}) z danej liczby.

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0, \mathtt{\operatorname{Math.log}(x)} = \ln(x) = \text{the unique} \; y \; \text{such that} \; e^y = x</annotation></semantics></math>

## Składnia

    Math.log(x)

### Parametry

- `x`
  - : liczba.

## Opis

Jeśli wartość liczby `x` jest ujemna, zwracaną wartością jest zawsze {{jsxref("NaN")}}.

Ponieważ `log()` jest statyczną metodą obiektu {{jsxref("Math")}}, zawsze odwołujemy się do niej poprzez `Math.log()`, a nie jak do metody instancji obiektu Math utworzonej przez użytkownika.

## Przykłady

### Przykład: Zastosowanie `Math.log()`



```js
Math.log(-1); // NaN, out of range
Math.log(0);  // -Infinity
Math.log(1);  // 0
Math.log(10); // 2.302585092994046
```

## Zobacz także

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log1p()")}} {{experimental_inline}}
- {{jsxref("Math.log10()")}} {{experimental_inline}}
- {{jsxref("Math.log2()")}} {{experimental_inline}}
- {{jsxref("Math.pow()")}}
