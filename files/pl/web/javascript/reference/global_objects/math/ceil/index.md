---
title: Math.ceil()
slug: Web/JavaScript/Reference/Global_Objects/Math/ceil
tags:
  - JavaScript
  - Math
  - Method
translation_of: Web/JavaScript/Reference/Global_Objects/Math/ceil
original_slug: Web/JavaScript/Referencje/Obiekty/Math/ceil
---
{{JSRef}}

## Podsumowanie

Zwraca najmniejszą liczbę całkowitą większą od lub równą danej.

## Składnia

    Math.ceil(x)

### Parametry

- `x`
  - : liczba.

## Opis

Ponieważ `ceil` jest statyczną metodą obiektu {{jsxref("Math")}}, zawsze odwołujemy się do niej poprzez `Math.ceil()`, a nie jak do metody instancji obiektu Math utworzonej przez użytkownika.

### Przykłady

#### Przykład: Zastosowanie `Math.ceil()`

Poniższa funkcja zwraca wartość metody ceil dla zmiennej `x`:

```js
Math.ceil(.95);   // 1
Math.ceil(4);     // 4
Math.ceil(7.004); // 8
```

## Zobacz także

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}} {{experimental_inline}}
- {{jsxref("Math.trunc()")}} {{experimental_inline}}
