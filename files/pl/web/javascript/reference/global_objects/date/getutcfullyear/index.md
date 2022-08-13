---
title: Date.prototype.getUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
original_slug: Web/JavaScript/Referencje/Obiekty/Date/getUTCFullYear
---
{{JSRef}}

## Podsumowanie

Zwraca rok dla określonej daty stosownie do czasu uniwersalnego.

## Składnia

    dateObj.getUTCFullYear()

### Parametry

Brak.

## Opis

Wartością zwracaną przez `getUTCFullYear` jest dodatnia liczba całkowita, zgodna z rokiem 2000, na przykład 1995.

## Przykłady

### Przykład: Zastosowanie `getUTCFullYear()`

Następujący przykład przypisuje czterocyfrową liczbę aktualnego roku do zmiennej `yr`.

```js
var today = new Date();
var year = today.getUTCFullYear();
```

## Zobacz także

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
