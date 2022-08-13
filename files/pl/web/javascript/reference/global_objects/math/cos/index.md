---
title: Math.cos()
slug: Web/JavaScript/Reference/Global_Objects/Math/cos
tags:
  - JavaScript
  - Math
  - Method
translation_of: Web/JavaScript/Reference/Global_Objects/Math/cos
original_slug: Web/JavaScript/Referencje/Obiekty/Math/cos
---
{{JSRef}}

## Podsumowanie

Zwraca cosinus danej liczby.

### Składnia

    Math.cos(x)

### Parametry

- `x`
  - : liczba.

## Opis

Metoda `cos` zwraca wartość liczbową pomiędzy -1 a 1, która reprezentuje cosinus kąta.

Ponieważ `cos()` jest statyczną metodą obiektu {{jsxref("Math")}}, zawsze odwołujemy się do niej poprzez `Math.cos()`, a nie jak do metody instancji obiektu Math utworzonej przez użytkownika.

## Przykłady

### Przykład: Zastosowanie `Math.cos()`

```js
Math.cos(0);           // 1
Math.cos(1);           // 0.5403023058681398

Math.cos(Math.PI);     // -1
Math.cos(2 * Math.PI); // 1
```

## Zobacz także

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
