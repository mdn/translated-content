---
title: Date.prototype.getUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth
original_slug: Web/JavaScript/Referencje/Obiekty/Date/getUTCMonth
---
{{JSRef}}

## Podsumowanie

Zwraca miesiąc dla określonej daty stosownie do czasu uniwersalnego.

## Składnia

    dateObj.getUTCMonth()

### Parametry

Brak.

## Opis

Wartość zwracana przez `getUTCMonth()` jest liczbą całkowitą z przedziału od 0 do 11 odpowiadającą miesiącowi: 0 dla stycznia, 1 dla lutego, 2 dla marca, i tak dalej.

## Przykłady

### Przykład: Zastosowanie `getUTCMonth()`

Następujący przykład przypisuje aktualny miesiąc do zmiennej `mon`.

```js
var today = new Date();
var mon = today.getUTCMonth();
```

## Zobacz także

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
