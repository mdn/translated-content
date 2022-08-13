---
title: Date.prototype.getHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getHours
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getHours
original_slug: Web/JavaScript/Referencje/Obiekty/Date/getHours
---
{{JSRef}}

## Podsumowanie

Zwraca godzinę określonej daty, stosownie do czasu lokalnego.

## Składnia

    dateObj.getHours()

### Parametry

Brak.

## Opis

Wartość zwracana przez `getHours` jest liczbą całkowitą z przedziału od 0 do 23.

## Przykłady

### Przykład: Zastosowanie `getHours()`

Druga instrukcja poniżej przydziela wartość liczby 23 zmiennej `hours`, opartej o wartość `Date` obiektu `Xmas95`.

```js
var Xmas95 = new Date("December 25, 1995 23:15:00");
var hours = Xmas95.getHours();

console.log(hours); // 23
```

## Zobacz także

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
