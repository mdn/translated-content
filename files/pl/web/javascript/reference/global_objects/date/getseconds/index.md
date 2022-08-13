---
title: Date.prototype.getSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getSeconds
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getSeconds
original_slug: Web/JavaScript/Referencje/Obiekty/Date/getSeconds
---
{{JSRef}}

## Podsumowanie

Zwraca sekundy dla określonej daty w zależności od czasu lokalnego.

## Składnia

    dateObj.getSeconds()

### Parametry

Brak.

## Opis

Wartość zwracana przez `getSeconds` jest liczbą całkowitą z przedziału od 0 do 59.

## Przykłady

### Przykład: Zastosowanie `getSeconds()`

Druga instrukcja poniżej przypisuje wartość 30 do zmiennej `secs`, bazując na wartości obiektu `Xmas95` typu `Date`.

```js
var Xmas95 = new Date("December 25, 1995 23:15:30");
var seconds = Xmas95.getSeconds();

console.log(seconds); // 30
```

## Zobacz także

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
