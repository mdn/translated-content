---
title: Date.prototype.setUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds
original_slug: Web/JavaScript/Referencje/Obiekty/Date/setUTCSeconds
---
{{JSRef}}

## Podsumowanie

Ustawia sekundy dla określonej daty stosownie do czasu uniwersalnego.

## Składnia

    dateObj.setUTCSeconds(secondsValue[, msValue])

### Parametry

- `secondsValue`
  - : Liczba całkowita pomiędzy 0 a 59.

<!---->

- `msValue`
  - : Liczba pomiędzy 0 a 999, reprezentująca milisekundy.

## Opis

Jeśli nie określisz parametru `msValue`, wartość zwracana jest z użytej metody {jsxref("Date.prototype.getUTCMilliseconds()", "getUTCMilliseconds()")}}.

Jeśli Twój parametr jest określony z poza szeregu, `setUTCSeconds()` próbuje zaktualizować informacje o dacie w obiekcie {{jsxref("Date")}}. Na przykład, jeśli użyjesz wartości 100 dla `secondsValue`, minuty zawarte w obiekcie {{jsxref("Date")}} będą wzrastać o 1 i wartość 40 będzie użyta dla sekund.

## Przykłady

### Przykład: Zastosowanie `setUTCSeconds()`

```js
var theBigDay = new Date();
theBigDay.setUTCSeconds(20);
```

## Zobacz także

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
