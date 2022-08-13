---
title: Math.atan2()
slug: Web/JavaScript/Reference/Global_Objects/Math/atan2
tags:
  - JavaScript
  - Math
  - Method
translation_of: Web/JavaScript/Reference/Global_Objects/Math/atan2
original_slug: Web/JavaScript/Referencje/Obiekty/Math/atan2
---
{{JSRef}}

## Podsumowanie

Zwraca kąta (w radianach) utworzony przez oś OX i prostą przechodzącą przez punkt o podanych współrzędnych.

## Składnia

    Math.atan2(y, x)

### Parametry

- `y, x`
  - : liczby.

## Opis

Metoda `atan2` zwraca wartość liczbową pomiędzy -π a π, reprezentującą kąt theta punktu `(x, y)`. Kąt ten, mierzony w radianach, został utworzony przez dodatnią oś OX i punkt `(x,y)`, z obrotem w kierunku przeciwnym do ruchu wskazówek zegara. Należy zwrócić uwagę na to, że pierwszym argumentem tej funkcji jest współrzędna y, a x jest argumentem drugim.

Do metody Math.`atan2`() przekazywane są osobno argumenty `x` i `y`, podczas gdy do metody `atan` przekazywany jest stosunek tych dwóch wartości.

Ponieważ `atan2()` jest statyczną metodą obiektu {{jsxref("Math")}}, zawsze odwołujemy się do niej poprzez `Math.atan2()`, a nie jak do metody instancji obiektu Math utworzonej przez użytkownika.

## Przykłady

### Przykład: Zastosowanie `Math.atan2()`

```js
Math.atan2(90, 15); // 1.4056476493802699
Math.atan2(15, 90); // 0.16514867741462683

Math.atan2(±0, -0);               // ±PI.
Math.atan2(±0, +0);               // ±0.
Math.atan2(±0, -x);               // ±PI for x > 0.
Math.atan2(±0, x);                // ±0 for x > 0.
Math.atan2(-y, ±0);               // -PI/2 for y > 0.
Math.atan2(y, ±0);                // PI/2 for y > 0.
Math.atan2(±y, -Infinity);        // ±PI for finite y > 0.
Math.atan2(±y, +Infinity);        // ±0 for finite y > 0.
Math.atan2(±Infinity, x);         // ±PI/2 for finite x.
Math.atan2(±Infinity, -Infinity); // ±3*PI/4.
Math.atan2(±Infinity, +Infinity); // ±PI/4.
```

## Zobacz także

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
