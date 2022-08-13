---
title: Date.prototype.getMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMonth
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getMonth
original_slug: Web/JavaScript/Referencje/Obiekty/Date/getMonth
---
{{JSRef}}

## Podsumowanie

Zwraca miesiąc dla określonej daty w zależności od czasu lokalnego.

### Składnia

    dateObj.getMonth()

### Parametry

Brak.

## Opis

Wartość zwracana przez `getMonth` jest liczbą całkowitą z przedziału od 0 do 11. 0 reprezentuje styczeń, 1 luty, i tak dalej.

## Przykłady

### Przykład: Zastosowanie `getMonth()`

Druga instrukcja z przykładu poniżej przypisuje wartość 11 zmiennej `month`, bazując na wartości obiektu `Xmas95` typu `Date`.

```js
var Xmas95 = new Date("December 25, 1995 23:15:00");
var month = Xmas95.getMonth();

console.log(month); // 11
```

## Zobacz także

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}
