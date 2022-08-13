---
title: Math.round()
slug: Web/JavaScript/Reference/Global_Objects/Math/round
tags:
  - JavaScript
  - Math
  - Method
translation_of: Web/JavaScript/Reference/Global_Objects/Math/round
original_slug: Web/JavaScript/Referencje/Obiekty/Math/round
---
{{JSRef}}

## Podsumowanie

Zwraca daną liczbę zaokrągloną do najbliższej liczby całkowitej.

## Składnia

    Math.round(x)

### Parametry

- `x`
  - : liczba.

## Opis

Jeśli część ułamkowa liczby `x` wynosi 0.5 lub więcej, argument jest zaokrąglany do najbliższej większej liczby całkowitej. Jeśli część ułamkowa liczby `x` jest mniejsza niż 0.5, argument jest zaokrąglany do najbliższej mniejszej liczby całkowitej.

Ponieważ `round` jest statyczną metodą obiektu {{jsxref("Math")}}, zawsze odwołujemy się do niej poprzez `Math.round()`, a nie jak do metody instancji obiektu {{jsxref("Math")}} utworzonej przez użytkownika.

## Przykłady

### Przykład: Zastosowanie `Math.round()`

```js
// zwraca 20
x = Math.round(20.49)

// zwraca 21
x = Math.round(20.5)

// zwraca -20
x = Math.round(-20.5)

// zwraca -21
x = Math.round(-20.51)
```
