---
title: Array.prototype.push()
slug: Web/JavaScript/Reference/Global_Objects/Array/push
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/Array/push
original_slug: Web/JavaScript/Referencje/Obiekty/Array/push
---
{{JSRef}}

## Podsumowanie

Dodaje jeden lub więcej elementów na koniec tablicy i zwraca jej nową długość. Metoda ta zmienia długość tablicy.

## Składnia

    arr.push(element1, ..., elementN)

### Parametry

- `elementN`
  - : Elementy dodawane na końcu tablicy.

## Opis

Zachowanie metody `push` jest analogiczne do funkcji `push` w języku Perl 4. Uwaga: jej zachowanie różni się w języku Perl 5.

## Przykłady

### Przykład: Dodawanie elementów do tablicy

Następujący kod tworzy tablicę `myFish` zawierającą dwa elementy, następnie dodaje do niej dwa kolejne. Po wykonaniu kodu, `pushed` zawiera wartość 4 (w JavaScript 1.2 po wykonaniu kodu zmienna `pushed` zawiera wartość "lew").

```js
myFish = ["anioł", "klaun"];
pushed = myFish.push("bęben", "lew");
```

## Zobacz także

- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
