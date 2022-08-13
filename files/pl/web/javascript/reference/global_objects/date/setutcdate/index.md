---
title: Date.prototype.setUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
original_slug: Web/JavaScript/Referencje/Obiekty/Date/setUTCDate
---
{{JSRef}}

## Podsumowanie

Ustawia dzień miesiąca dla określonej daty stosownie do czasu uniwersalnego.

## Składnia

    dateObj.setUTCDate(dayValue)

### Parametry

- `dayValue`
  - : Liczba całkowita od 1 do 31, reprezentująca dni miesiąca.

## Opis

Jeśli Twój parametr jest określony z poza szeregu, `setUTCDate()` próbuje zaktualizować informacje o dacie w obiekcie {{jsxref("Date")}}. Na przykład, jeśli użyjesz wartości 40 dla `dayValue`, i nazwa miesiąca jaki jest w danym momencie przechowywany w obiekcie {{jsxref("Date")}} będzie czerwcem, to do dni przypiszemy wartość 10, ale wyświetlaną nazwą miesiąca będzie już lipiec.

## Przykłady

### Przykład: Zastosowanie `setUTCDate()`

```js
var theBigDay = new Date();
theBigDay.setUTCDate(20);
```

## Zobacz także

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.setDate()")}}
