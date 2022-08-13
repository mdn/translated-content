---
title: Math.tan()
slug: Web/JavaScript/Reference/Global_Objects/Math/tan
tags:
  - JavaScript
  - Math
  - Method
translation_of: Web/JavaScript/Reference/Global_Objects/Math/tan
original_slug: Web/JavaScript/Referencje/Obiekty/Math/tan
---
{{JSRef}}

## Podsumowanie

Zwraca tangens danej liczby.

## Składnia

    Math.tan(x)

### Parametry

- `x`
  - : liczba.

## Opis

Metoda `tan` zwraca wartość numeryczną reprezentującą tangens kąta.

Ponieważ `tan()` jest statyczną metodą obiektu {{jsxref("Math")}}, zawsze odwołujemy się do niej poprzez `Math.tan()`, a nie jak do metody instancji obiektu {{jsxref("Math")}} utworzonej przez użytkownika.

## Przykłady

#### Przykład: Zastosowanie `Math.tan()`

Poniższa funkcja zwraca tangens zmiennej `x`:

```js
function getTan(x) {
   return Math.tan(x)
}
```

## Zobacz także

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
