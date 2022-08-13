---
title: Math.LN2
slug: Web/JavaScript/Reference/Global_Objects/Math/LN2
tags:
  - JavaScript
  - Math
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Math/LN2
original_slug: Web/JavaScript/Referencje/Obiekty/Math/LN2
---
{{JSRef}}

## Podsumowanie

Logarytm naturalny liczby 2, w przybliżeniu 0.693

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LN2</mi></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>≈</mo><mn>0.693</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LN2}} = \ln(2) \approx 0.693</annotation></semantics></math>

## Opis

Ponieważ `LN2` jest statyczną własnością obiektu `Math`, zawsze odwołujemy się do niej poprzez `Math.LN2`, a nie jak do własności instancji obiektu Math utworzonej przez użytkownika.

## Przykłady

### Przykład: Zastosowanie `Math.LN2`

Poniższa funkcja zwraca logarytm naturalny liczby 2:

```js
function getNatLog2() {
   return Math.LN2;
}

getNatLog2(); // 0.6931471805599453
```

## Zobacz także

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log2()")}} {{experimental_inline}}
