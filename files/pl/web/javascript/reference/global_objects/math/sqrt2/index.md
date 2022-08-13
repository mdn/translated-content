---
title: Math.SQRT2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT2
tags:
  - JavaScript
  - Math
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Math/SQRT2
original_slug: Web/JavaScript/Referencje/Obiekty/Math/SQRT2
---
{{JSRef}}

## Podsumowanie

Pierwiastek kwadratowy z liczby 2, w przybliżeniu 1.414.

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.SQRT2</mi></mstyle><mo>=</mo><msqrt><mn>2</mn></msqrt><mo>≈</mo><mn>1.414</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.SQRT2}} = \sqrt{2} \approx 1.414</annotation></semantics></math>

{{js_property_attributes(0, 0, 0)}}

## Opis

Ponieważ `SQRT2` jest statyczną własnością obiektu {{jsxref("Math")}}, zawsze odwołujemy się do niej poprzez {{jsxref("Math")}}`.SQRT2`, a nie jak do własności instancji obiektu Math utworzonej przez użytkownika.

## Przykłady

### Przykład: Zastosowanie `Math.SQRT2`

Poniższa funkcja zwraca pierwiastek kwadratowy z liczby 2:

```js
function getRoot2() {
   return Math.SQRT2;
}

getRoot2(); // 1.4142135623730951
```

## Zobacz także

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
