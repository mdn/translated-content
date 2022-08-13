---
title: Math.SQRT1 2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT1_2
tags:
  - JavaScript
  - Math
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Math/SQRT1_2
original_slug: Web/JavaScript/Referencje/Obiekty/Math/SQRT1_2
---
{{jsref}}

## Podsumowanie

Pierwiastek kwadratowy z liczby 1/2, albo, inaczej mówiąc, odwrotność pierwiastka kwadratowego z liczby 2, w przybliżeniu 0.707.

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.SQRT1_2</mi></mstyle><mo>=</mo><msqrt><mfrac><mn>1</mn><mn>2</mn></mfrac></msqrt><mo>=</mo><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><mo>≈</mo><mn>0.707</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.SQRT1_2}} = \sqrt{\frac{1}{2}} = \frac{1}{\sqrt{2}} \approx 0.707</annotation></semantics></math>

## Opis

Ponieważ `SQRT1_2` jest statyczną własnością obiektu {{jsxref("Math")}}, zawsze odwołujemy się do niej poprzez `Math.SQRT1_2`, a nie jak do własności instancji obiektu Math utworzonej przez użytkownika.

## Przykłady

### Przykład: Zastosowanie `Math.SQRT1_2`

Poniższa funkcja zwraca pierwiastek kwadratowy z 1/2:

```js
function getRoot1_2() {
   return Math.SQRT1_2
}

getRoot1_2(); // 0.7071067811865476
```

## Zobacz także

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
