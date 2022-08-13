---
title: String.prototype.substr()
slug: Web/JavaScript/Reference/Global_Objects/String/substr
tags:
  - JavaScript
  - Method
  - Prototype
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/substr
original_slug: Web/JavaScript/Referencje/Obiekty/String/substr
---
{{JSRef}}

## Podsumowanie

Zwraca określoną liczbę początkowych znaków w łańcuchu znaków w określonej lokalizacji.

## Składnia

    str.substr(start[, length])

## Parametry

- `start`
  - : Lokalizacja, w której rozpoczyna się wyciąganie znaków (wartość liczbowa pomiędzy 0, a jeden znak mniej niż długość łańcucha znaków).

- `length`
  - : Liczba znaków do wyciągnięcia.

## Opis

`start` jest indeksem znaków. Pierwszym znakiem w indeksie jest 0 i ostatnim znakiem w indeksie jest liczba o 1 mniejsza niż długość łańcucha znaków. `substr()` rozpoczyna wyciąganie znaków w `start` i ściąga liczbę `length` znaków.

Jeśli `start` jest dodatnie i jest długością łańcucha znaków lub dłuższą wartością, `substr()` nie zwraca znaków.

Jeśli `start` jest ujemne, `substr()` stosuje to jako indeks znaków z końca łańcucha znaków. Jeśli `start` jest ujemne i `abs(start)` jest większe niż długość łańcucha znaków to `substr()` stosuje 0 jako początek indeksu.

Jeśli `length` jest 0 lub ujemne, `substr()` nie zwróci znaków. Jeśli `length` jest opuszczone, `substr()` wyciągnie znaki aż do końca łańcucha znaków.

## Przykłady

### Przykład: Zastosowanie `substr()`

Rozpatrz poniższy skrypt:

```js
var str = 'abcdefghij';

console.log('(1, 2): ' + str.substr(1, 2)); // '(1, 2): bc'
console.log('(-3, 2): ' + str.substr(-3, 2)); // '(-3, 2): hi'
console.log('(-3): ' + str.substr(-3)); // '(-3): hij'
console.log('(1): ' + str.substr(1)); // '(1): bcdefghij'
console.log('(-20, 2): ' + str.substr(-20, 2)); // '(-20, 2): ab'
console.log('(20, 2): ' + str.substr(20, 2)); // '(20, 2): '
```

## Zobacz także



- {{jsxref("String.prototype.slice()")}}
- {{jsxref("String.prototype.substring()")}}
