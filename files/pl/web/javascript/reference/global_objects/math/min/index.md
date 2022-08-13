---
title: Math.min()
slug: Web/JavaScript/Reference/Global_Objects/Math/min
tags:
  - JavaScript
  - Math
  - Method
translation_of: Web/JavaScript/Reference/Global_Objects/Math/min
original_slug: Web/JavaScript/Referencje/Obiekty/Math/min
---
{{JSRef}}

## Podsumowanie

Zwraca najmniejszą z podanych liczb.

## Składnia

    Math.min([value1[, value2[, ...]]])

### Parametry

- `value1, value2, ...`
  - : liczby.

## Opis

Ponieważ `min` jest statyczną metodą obiektu {{jsxref("Math")}}, zawsze odwołujemy się do niej poprzez `Math.min()`, a nie jak do metody instancji obiektu {{jsxref("Math")}} utworzonej przez użytkownika.

## Przykłady

### Przykład: Zastosowanie `Math.min()`

Poniższa funkcja porównuje zmienne `x` and `y` i zwraca mniejszą `z` nich:

```js
var x = 10, y = -20;
var z = Math.min(x, y);
```

## Zobacz także

- {{jsxref("Math.max()")}}
