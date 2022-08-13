---
title: Math.sqrt()
slug: Web/JavaScript/Reference/Global_Objects/Math/sqrt
tags:
  - JavaScript
  - Math
  - Method
translation_of: Web/JavaScript/Reference/Global_Objects/Math/sqrt
original_slug: Web/JavaScript/Referencje/Obiekty/Math/sqrt
---
{{JSRef}}

## Podsumowanie

Zwraca pierwiastek kwadratowy danej liczby.

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>≥</mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mi>M</mi><mi>a</mi><mi>t</mi><mi>h</mi><mo>.</mo><mi>s</mi><mi>q</mi><mi>r</mi><mi>t</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msqrt><mi>x</mi></msqrt><mo>=</mo><mtext>the unique</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>≥</mo><mn>0</mn><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \geq 0, \mathtt{Math.sqrt(x)} = \sqrt{x} = \text{the unique} \; y \geq 0 \; \text{such that} \; y^2 = x</annotation></semantics></math>

## Składnia

    Math.sqrt(x)

### Parametry

- `x`
  - : liczba.

## Opis

Jeśli wartość `x` jest ujemna, funkcja `sqrt` zwraca {{jsxref("NaN")}}.

Ponieważ `sqrt()` jest statyczną metodą obiektu {{jsxref("Math")}}, zawsze odwołujemy się do niej poprzez `Math.sqrt()`, a nie jak do metody instancji obiektu {{jsxref("Math")}} utworzonej przez użytkownika.

## Przykłady

### Przykład: Zastosowanie `Math.sqrt()`

```js
Math.sqrt(9); // 3
Math.sqrt(2); // 1.414213562373095

Math.sqrt(1);  // 1
Math.sqrt(0);  // 0
Math.sqrt(-1); // NaN
```
