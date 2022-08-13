---
title: Date.prototype.setUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth
original_slug: Web/JavaScript/Referencje/Obiekty/Date/setUTCMonth
---
{{JSRef}}

## Podsumowanie

Ustawia miesiąc dla określonej daty stosownie do czasu uniwersalnego.

## Składnia

    dateObj.setUTCMonth(monthValue[, dayValue])

### Parametry

- `monthValue`
  - : Liczba całkowita pomiędzy 0 a 11, reprezentująca nazwy miesięcy od stycznia do grudnia.

<!---->

- `dayValue`
  - : Liczba całkowita od 1 do 31, reprezentująca dzień miesiąca.

## Opis

Jeśli nie określisz parametru `dayValue`, zostanie zwrócona wartość użytej metody {{jsxref("Date.prototype.getUTCDate()", "getUTCDate()")}}.

Jeśli Twój parametr jest określony z poza szeregu, `setUTCMonth()` próbuje zaktualizować informacje o dacie w obiekcie {{jsxref("Date")}}. Na przykład, jeśli użyjesz wartości 15 dla `monthValue`, rok wzrośnie o 1 (rok + 1) i 3, które pozostało będzie użyte dla miesiąca.

## Przykłady

### Przykład: Zastosowanie `setUTCMonth()`

```js
var theBigDay = new Date();
theBigDay.setUTCMonth(11);
```

## Zobacz także

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}
