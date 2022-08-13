---
title: Math.abs()
slug: Web/JavaScript/Reference/Global_Objects/Math/abs
tags:
  - JavaScript
  - Math
  - Method
translation_of: Web/JavaScript/Reference/Global_Objects/Math/abs
original_slug: Web/JavaScript/Referencje/Obiekty/Math/abs
---
{{JSRef}}

## Podsumowanie

Zwraca wartość bezwzględną danej liczby.

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.abs</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mrow><mo stretchy="false">|</mo><mi>x</mi><mo stretchy="false">|</mo></mrow><mo>=</mo><mrow><mo>{</mo><mtable columnalign="left left"><mtr><mtd><mi>x</mi></mtd><mtd><mtext>if</mtext><mspace width="1em"></mspace><mi>x</mi><mo>></mo><mn>0</mn></mtd></mtr><mtr><mtd><mi>0</mi></mtd><mtd><mtext>if</mtext><mspace width="1em"></mspace><mi>x</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd><mo>-</mo><mi>x</mi></mtd><mtd><mtext>if</mtext><mspace width="1em"></mspace><mi>x</mi><mo>&#x3C;</mo><mn>0</mn></mtd></mtr></mtable></mrow></mrow><annotation encoding="TeX">{\mathtt{\operatorname{Math.abs}(x)}} = {|x|} = \begin{cases} x &#x26; \text{if} \quad x \geq 0 \\ -x &#x26; \text{if} \quad x &#x3C; 0 \end{cases}</annotation></semantics></math>

## Składnia

    Math.abs(x)

### Parametry

- `x`
  - : liczba.

## Opis

Ponieważ `abs` jest statyczną metodą obiektu {{jsxref("Math")}}, zawsze odwołujemy się do niej poprzez `Math.abs()`, a nie jak do metody instancji obiektu {{jsxref("Math")}} utworzonej przez użytkownika.

## Przykłady

### Przykład: Zastosowanie `Math.abs()`

Poniższa funkcja zwraca wartość bezwzględną zmiennej `x`:

```js
Math.abs('-1'); // 1
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs('string'); // NaN
Math.abs(); // NaN
```

## Zobacz także

- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}} {{experimental_inline}}
- {{jsxref("Math.trunc()")}} {{experimental_inline}}
