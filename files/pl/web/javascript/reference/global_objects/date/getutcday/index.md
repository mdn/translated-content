---
title: Date.prototype.getUTCDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
original_slug: Web/JavaScript/Referencje/Obiekty/Date/getUTCDay
---
{{JSRef}}

## Podsumowanie

Zwraca dzień tygodnia dla określonej daty stosownie do czasu uniwersalnego.

## Składnia

    dateObj.getUTCDay()

### Parametry

Brak.

## Opis

Wartość zwracana przez `getUTCDay` jest liczbą całkowitą określającą dzień tygodnia: 0 dla niedzieli, 1 dla poniedziałku, 2 dla wtorku itd.

## Przykłady

### Przykład: Zastosowanie `getUTCDay()`

Następujący przykład przypisuje aktualny dzień tygodnia do zmiennej `weekday`.

```js
var today = new Date();
var weekday = today.getUTCDay();
```

## Zobacz także

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
