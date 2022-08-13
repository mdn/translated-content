---
title: Math.LN10
slug: Web/JavaScript/Reference/Global_Objects/Math/LN10
tags:
  - JavaScript
  - Math
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Math/LN10
original_slug: Web/JavaScript/Referencje/Obiekty/Math/LN10
---
{{JSRef}}

## Podsumowanie

Logarytm naturalny liczby 10, w przybliżeniu 2.302.

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LN10</mi></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo>≈</mo><mn>2.302</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LN10}} = \ln(10) \approx 2.302</annotation></semantics></math>

{{js_property_attributes(0, 0, 0)}}

## Opis

Ponieważ `LN10` jest statyczną własnością obiektu `Math`, zawsze odwołujemy się do niej poprzez `Math.LN10`, a nie jak do własności instancji obiektu Math utworzonej przez użytkownika.

## Przykłady

### Przykład: Zastosowanie `Math.LN10`

Poniższa funkcja zwraca logarytm naturalny liczby 10:

```js
function getNatLog10() {
   return Math.LN10;
}

getNatLog10(); // 2.302585092994046
```

## Zobacz także

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}} {{experimental_inline}}
