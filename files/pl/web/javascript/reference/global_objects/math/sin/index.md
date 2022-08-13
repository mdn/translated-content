---
title: Math.sin()
slug: Web/JavaScript/Reference/Global_Objects/Math/sin
tags:
  - JavaScript
  - Math
  - Method
translation_of: Web/JavaScript/Reference/Global_Objects/Math/sin
original_slug: Web/JavaScript/Referencje/Obiekty/Math/sin
---
{{JSRef}}

## Podsumowanie

Zwraca sinus danej liczby.

## Składnia

    Math.sin(x)

### Parametry

- `x`
  - : liczba.

## Opis

Metoda `sin` zwraca wartość numeryczną większą lub równą -1 i mniejszą lub równą 1, stanowiącą sinus argumentu.

Ponieważ `sin` jest statyczną metodą obiektu {{jsxref("Math")}}, zawsze odwołujemy się do niej poprzez `Math.sin()`, a nie jak do metody instancji obiektu {{jsxref("Math")}} utworzonej przez użytkownika.

## Przykłady

### Przykład: Zastosowanie `Math.sin()`

```js
Math.sin(0);           // 0
Math.sin(1);           // 0.8414709848078965

Math.sin(Math.PI / 2); // 1
```

## Zobacz także

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.tan()")}}
