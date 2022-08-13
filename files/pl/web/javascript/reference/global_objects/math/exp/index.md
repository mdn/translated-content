---
title: Math.exp()
slug: Web/JavaScript/Reference/Global_Objects/Math/exp
tags:
  - JavaScript
  - Math
  - Method
translation_of: Web/JavaScript/Reference/Global_Objects/Math/exp
original_slug: Web/JavaScript/Referencje/Obiekty/Math/exp
---
{{JSRef}}

## Podsumowanie

Zwraca ex, gdzie `x` to argument, a e to {{jsxref("Math.E", "stała Eulera", "", 1)}}, podstawa logarytmu naturalnego.

## Składnia

    Math.exp(x)

### Parametry

- `x`
  - : liczba.

## Opis

Ponieważ `exp` jest statyczną metodą obiektu {{jsxref("Math")}}, zawsze odwołujemy się do niej poprzez `Math.exp()`, a nie jak do metody instancji obiektu Math utworzonej przez użytkownika.

## Przykłady

### Przykład: Zastosowanie `Math.exp()`

```js
Math.exp(-1); // 0.36787944117144233
Math.exp(0);  // 1
Math.exp(1);  // 2.718281828459045
```

## Zobacz także

- {{jsxref("Math.E")}}
- {{jsxref("Math.expm1()")}} {{experimental_inline}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}} {{experimental_inline}}
- {{jsxref("Math.log1p()")}} {{experimental_inline}}
- {{jsxref("Math.log2()")}} {{experimental_inline}}
- {{jsxref("Math.pow()")}}
