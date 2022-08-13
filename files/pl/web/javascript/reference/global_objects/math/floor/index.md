---
title: Math.floor()
slug: Web/JavaScript/Reference/Global_Objects/Math/floor
tags:
  - JavaScript
  - Math
  - Method
translation_of: Web/JavaScript/Reference/Global_Objects/Math/floor
original_slug: Web/JavaScript/Referencje/Obiekty/Math/floor
---
{{JSRef}}

## Podsumowanie

Zwraca największą liczbę całkowitą mniejszą od lub równą danej.

## Składnia

    Math.floor(x)

### Parametry

- `x`
  - : liczba.

## Opis

Ponieważ `floor` jest statyczną metodą obiektu {{jsxref("Math")}}, zawsze odwołujemy się do niej poprzez `Math.floor()`, a nie jak do metody instancji obiektu {{jsxref("Math")}} utworzonej przez użytkownika.

## Przykłady

### Przykład: Zastosowanie `Math.floor()`

```js
Math.floor( 45.95); //  45
Math.floor(-45.95); // -46
```

## Zobacz także

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}} {{experimental_inline}}
- {{jsxref("Math.trunc()")}} {{experimental_inline}}
