---
title: Array.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/Array/reverse
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/Array/reverse
original_slug: Web/JavaScript/Referencje/Obiekty/Array/reverse
---
{{JSRef}}

## Podsumowanie

Odwraca kolejność elementów w tablicy: pierwszy staje się ostatnim, ostatni pierwszym.

## Składnia

    arr.reverse()

### Parametry

Brak.

## Opis

Metoda `reverse` zmienia zawartość tablicy, odwracając kolejność jej elementów.

## Przykłady

### Przykład: Odwracanie kolejności elementów w tablicy

Poniższy przykład tworzy tablicę mojaTablica, posiadającą trzy elementy, następnie odwraca ich kolejność.

```js
mojaTablica = new Array("jeden", "dwa", "trzy")
mojaTablica.reverse()
```

W wyniku działania powyższego kodu:

- `mojaTablica[0]` ma wartość "trzy"
- `mojaTablica[1]` ma wartość "dwa"
- `mojaTablica[2]` ma wartość "jeden"

## Zobacz także

- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
