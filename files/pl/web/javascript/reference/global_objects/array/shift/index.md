---
title: Array.prototype.shift()
slug: Web/JavaScript/Reference/Global_Objects/Array/shift
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/Array/shift
original_slug: Web/JavaScript/Referencje/Obiekty/Array/shift
---
{{JSRef}}

## Podsumowanie

Usuwa pierwszy element z tablicy i zwraca go. Metoda ta zmienia długość tablicy.

## Składnia

    arr.shift()

## Przykłady

### Przykład: Usuwanie pierwszego elementu tablicy

Następujący kod wyświetli tablicę `myFish`, przed i po usunięciu jej pierwszego elementu. Wyświetli również usunięty element:

```js
// przyjmując że funkcja print jest zdefiniowana
var myFish = ["anioł", "klaun", "mandarynka", "chirurg"];
console.log("myFish przed: " + myFish);
var shifted = myFish.shift();
console.log("myFish po: " + myFish);
console.log("Usunięto element: " + shifted);
```

Przykład wyświetli następujący rezultat:

```js
myFish przed: ["anioł", "klaun", "mandarynka", "chirurg"]
myFish po: ["klaun", "mandarynka", "chirurg"]
//Usunięto element: anioł
```

### Zobacz także

- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.unshift()")}}
