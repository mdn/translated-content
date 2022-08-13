---
title: Date.prototype.getMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMinutes
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getMinutes
original_slug: Web/JavaScript/Referencje/Obiekty/Date/getMinutes
---
{{JSRef}}

## Podsumowanie

Zwraca minuty dla określonej daty w zależności od czasu lokalnego.

## Składnia

    dateObj.getMinutes()

### Parametry

Brak.

## Opis

Wartość zwracana przez `getMinutes` jest liczbą całkowitą z przedziału od 0 do 59.

## Przykłady

### Przykład: Zastosowanie `getMinutes`

Druga instrukcja poniżej przypisuje wartość 15 do zmiennej `minutes`, bazując na wartości obiektu `Xmas95` typu `Date`.

```js
var Xmas95 = new Date("December 25, 1995 23:15:00");
var minutes = Xmas95.getMinutes();

console.log(minutes); // 15
```

## Zobacz także

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}
