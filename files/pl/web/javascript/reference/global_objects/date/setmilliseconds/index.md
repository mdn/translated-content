---
title: Date.prototype.setMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds
original_slug: Web/JavaScript/Referencje/Obiekty/Date/setMilliseconds
---
{{JSRef}}

## Podsumowanie

Ustawia milisekundy dla określonej daty stosownie do czasu lokalnego.

### Składnia

    dateObj.setMilliseconds(millisecondsValue)

### Parametry

- `millisecondsValue`
  - : Liczba pomiędzy 0 a 999, reprezentująca milisekundy.

## Opis

Jeśli sprecyzujesz liczbę z poza oczekiwanego szeregu, informacje zawarte w obiekcie `Date` będą aktualizowane. Na przykład, jeśli określisz 1005, liczba sekund rośnie o 1, i 5 jest użyte dla milisekund.

## Przykłady

### Przykład: Zastosowanie `setMilliseconds()`

```js
var theBigDay = new Date();
theBigDay.setMilliseconds(100);
```

## Zobacz także

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
