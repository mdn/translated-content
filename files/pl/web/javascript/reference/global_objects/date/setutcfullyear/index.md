---
title: Date.prototype.setUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear
original_slug: Web/JavaScript/Referencje/Obiekty/Date/setUTCFullYear
---
{{JSRef}}

## Podsumowanie

Ustawia pełen rok dla określonej daty stosownie do czasu uniwersalnego.

## Składnia

    dateObj.setUTCFullYear(yearValue[, monthValue[, dayValue]])

### Parametry

- `yearValue`
  - : Liczba całkowita określająca numerycznie wartość roku, na przykład: 1995.

- `monthValue`
  - : Liczba całkowita pomiędzy 0 a 11, reprezentuje nazwy miesięcy, od stycznia do grudnia.

- `dayValue`
  - : Liczba całkowita pomiędzy 1 a 31, reprezentuje dzień miesiąca. Jeśli określimy parametr `dayValue`, to musimy także sprecyzować `monthValue`.

## Opis

Jeśli nie określisz parametrów `monthValue` i `dayValue`, wartość zwracana metod {{jsxref("Date.prototype.getUTCMonth()", "getUTCMonth()")}} i {{jsxref("Date.prototype.getUTCDate()", "getUTCDate()")}} jest w użyciu.

Jeśli Twój parametr jest określony z poza szeregu, `setUTCFullYear()` próbuje zaktualizować informacje o dacie w obiekcie `Date`. Na przykład, jeśli użyjesz wartości 15 dla `monthValue`, lata będą wzrastać o 1 (rok + 1), i 3 jest użyta jako miesiąc.

## Przykłady

### Przykład: Zastosowanie `setUTCFullYear()`

```js
var theBigDay = new Date();
theBigDay.setUTCFullYear(1997);
```

### Zobacz także

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
