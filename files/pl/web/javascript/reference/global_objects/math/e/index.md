---
title: Math.E
slug: Web/JavaScript/Reference/Global_Objects/Math/E
tags:
  - JavaScript
  - Math
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Math/E
original_slug: Web/JavaScript/Referencje/Obiekty/Math/E
---
{{JSRef}}

## Podsumowanie

Stała Eulera stanowiąca podstawę logarytmów naturalnych, w przybliżeniu 2.718.

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.E</mi></mstyle><mo>=</mo><mi>e</mi><mo>≈</mo><mn>2.718</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.E}} = e \approx 2.718</annotation></semantics></math>

## Opis

Ponieważ `E` jest statyczną własnością obiektu `Math`, zawsze odwołujemy się do niej poprzez `Math.E`, a nie jak do własności instancji obiektu Math utworzonej przez użytkownika.

## Przykłady

### Przykład: Zastosowanie `Math.E`

Poniższa funkcja zwraca e:

```js
function getNapier() {
   return Math.E;
}

getNapier(); // 2.718281828459045
```

## Zobacz także

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}} {{experimental_inline}}
