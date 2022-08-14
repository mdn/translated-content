---
title: Date.prototype.getUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDate
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCDate
original_slug: Web/JavaScript/Referencje/Obiekty/Date/getUTCDate
---
{{JSRef}}

## Podsumowanie

Zwraca dzień (datę) miesiąca dla określonej daty stosownie do czasu uniwersalnego.

## Składnia

    dateObj.getUTCDate()

### Parametry

Brak.

## Opis

Wartością zwracaną przez `getUTCDate` jest liczba całkowita z przedziału od 1 do 31.

## Przykłady

### Przykład: Zastosowanie `getUTCDate()`

Następujący przykład przypisuje aktualny dzień miesiąca do zmiennej `d`.

```js
var today = new Date();
var d = today.getUTCDate();
```

## Zobacz także

- {{jsxref("Date.prototype.getDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
