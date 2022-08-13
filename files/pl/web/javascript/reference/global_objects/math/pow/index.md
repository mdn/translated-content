---
title: Math.pow()
slug: Web/JavaScript/Reference/Global_Objects/Math/pow
tags:
  - JavaScript
  - Math
  - Method
translation_of: Web/JavaScript/Reference/Global_Objects/Math/pow
original_slug: Web/JavaScript/Referencje/Obiekty/Math/pow
---
{{JSRef}}

## Podsumowanie

Zwraca liczbę `podstawa` podniesioną do potęgi o wykładniku `wykładnik`, tj. `podstawawykładnik`.

### Składnia

    Math.pow(podstawa, wykładnik)

### Parametry

- `podstawa`
  - : liczba podnoszona do potęgi.

- `wykładnik`
  - : wykładnik potęgi, do której podnoszona jest liczba `podstawa`.

## Opis

Ponieważ `pow` jest statyczną metodą obiektu {{jsxref("Math")}}, zawsze odwołujemy się do niej poprzez `Math.pow()`, a nie jak do metody instancji obiektu {{jsxref("Math")}} utworzonej przez użytkownika.

## Przykłady

### Przykład: Zastosowanie `Math.pow()`

```js
Math.pow(7, 2); // 49
```

## Zobacz także

- {{jsxref("Math.cbrt()")}} {{experimental_inline}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.sqrt()")}}
