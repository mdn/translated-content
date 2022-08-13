---
title: Date.prototype.getDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDate
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getDate
original_slug: Web/JavaScript/Referencje/Obiekty/Date/getDate
---
{{JSRef}}

## Podsumowanie

Zwraca dzień miesiąca dla określonej daty stosownie do czasu lokalnego.

## Składnia

    dateObj.getDate()

### Parametry

Brak.

## Opis

Wartość zwracana przez `getDate` to liczby całkowite z przedziału liczb pomiędzy 1 a 31.

## Przykłady

### Przykład: Zastosowanie `getDate()`

Druga instrukcja poniżej przydziela wartość 25 do zmiennej `dzien`, wartość oparta na `Date`, obiektu `Xmas95`.

```js
var Xmas95 = new Date("December 25, 1995 23:15:00");
var dzien = Xmas95.getDate();

console.log(dzien), // 25
```

## Zobacz także

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
