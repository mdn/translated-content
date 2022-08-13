---
title: Date.prototype.setDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setDate
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setDate
original_slug: Web/JavaScript/Referencje/Obiekty/Date/setDate
---
{{JSRef}}

## Podsumowanie

Ustawia dzień miesiąca dla określonej daty stosownie do czasu lokalnego.

## Składnia

    dateObj.setDate(dayValue)

### Parametry

- `dayValue`
  - : Liczba całkowita z przedziału od 1 do 31, reprezentująca dzień miesiąca.

## Przykłady

### Przykład: Zastosowanie `setDate()`

Druga instrukcja poniżej zmienia dzień miesiąca dla zmiennej `theBigDay` z jego oryginalnej wartości na 24 lipca.

```js
var theBigDay = new Date("July 27, 1962 23:30:00");
var theBigDay.setDate(24);
```

## Zobacz także

- {{jsxref("Date.prototype.getDate()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
