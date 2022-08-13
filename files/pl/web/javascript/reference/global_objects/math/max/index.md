---
title: Math.max()
slug: Web/JavaScript/Reference/Global_Objects/Math/max
tags:
  - JavaScript
  - Math
  - Method
translation_of: Web/JavaScript/Reference/Global_Objects/Math/max
original_slug: Web/JavaScript/Referencje/Obiekty/Math/max
---
{{JSRef}}

## Podsumowanie

Zwraca największą z podanych liczb.

### Składnia

    Math.max([value1[, value2[, ...]]])

### Parametry

- `value1, value2, ...`
  - : liczby.

## Opis

Ponieważ `max` jest statyczną metodą obiektu {{jsxref("Math")}}, zawsze odwołujemy się do niej poprzez Math.max(), a nie jak do metody instancji obiektu {{jsxref("Math")}} utworzonej przez użytkownika.

## Przykłady

### Przykład: Zastosowanie `Math.max()`

```js
Math.max(10, 20);   //  20
Math.max(-10, -20); // -10
Math.max(-10, 20);  //  20
```

## Zobacz także

- {{jsxref("Math.min()")}}
