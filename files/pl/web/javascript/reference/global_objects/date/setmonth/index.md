---
title: Date.prototype.setMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMonth
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setMonth
original_slug: Web/JavaScript/Referencje/Obiekty/Date/setMonth
---
{{JSRef}}

## Podsumowanie

Ustawia nazwę miesiąca dla określonej daty stosownie do czasu lokalnego.

## Składnia

    dateObj.setMonth(monthValue[, dayValue])

### Do wersji JavaScript 1.3

    dateObj.setMonth(monthValue)

### Parametry

- `monthValue`
  - : Liczba całkowita z przedziału 0 i 11 (reprezentuje miesiące od stycznia do grudnia).

- `dayValue`
  - : Liczba całkowita z przedziału 1 i 31, reprezentuje dzień miesiąca.

## Opis

Jeśli nie określisz parametru `dayValue`, zostanie zwrócona wartość użytej metody `getDate`.

Jeśli Twój parametr jest określony z poza szeregu, `setMonth()` próbuje zaktualizować informacje o dacie w obiekcie `Date`. Na przykład, jeśli użyjesz wartości 15 dla `monthValue`, rok wzrośnie o 1 (year + 1) i 3 będzie użyte dla miesiąca.

## Przykłady

### Przykład: Zastosowanie `setMonth()`

```js
var theBigDay = new Date;
theBigDay.setMonth(6);
```

## Zobacz także

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
