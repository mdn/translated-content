---
title: Date.prototype.getFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getFullYear
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getFullYear
original_slug: Web/JavaScript/Referencje/Obiekty/Date/getFullYear
---
{{JSRef}}

## Podsumowanie

Zwraca rok określonej daty, stosownie do czasu lokalnego.

## Składnia

    dateObj.getFullYear()

### Parametry

Brak.

## Opis

Wartość `getFullYear` zwracana jest jako pełna liczba. Dla dat liczba lat zawiera się pomiędzy 1000 i 9999, `getFullYear` zwraca czterocyfrową liczbę, na przykład: 1995. Użyj tej funkcji, aby być pewnym, że wyświetlona będzie pełna data po roku 2000.

Użyj tej metody zamiast metody `getYear`.

## Przykłady

### Przykład: Zastosowanie `getFullYear`

Następujący przykład przydziela czterocyfrową wartość aktualnego roku do zmiennej `yr`.

```js
var today = new Date();
var yr = today.getFullYear();
```

## Zobacz także

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
- {{jsxref("Date.prototype.getYear()")}}
