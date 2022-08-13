---
title: Array.prototype.unshift()
slug: Web/JavaScript/Reference/Global_Objects/Array/unshift
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/Array/unshift
original_slug: Web/JavaScript/Referencje/Obiekty/Array/unshift
---
{{JSRef}}

## Podsumowanie

Dodaje jeden lub więcej elementów na początek tablicy i zwraca jej nową długość.

## Składnia

    arr.unshift([element1[, ...[, elementN]]])

### Parametry

- `elementN`
  - : Elementy do dodania na początek tablicy.

## Przykłady

### Przykład: Dodawanie elementów do tablicy

Następujący kod wyświetli tablicę `myFish` przed i po dodaniu do niej elementów.

```js
myFish = ["anioł", "klaun"];
console.log("myFish przed: " + myFish);
unshifted = myFish.unshift("bęben", "lew");
console.log("myFish po: " + myFish);
console.log("Nowa długość tablicy: " + unshifted);
```

Powyższy przykład wyświetli:

    myFish przed: ["anioł", "klaun"]
    myFish po: ["bęben", "lew", "anioł", "klaun"]
    Nowa długość tablicy: 4

## Zobacz także

- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
