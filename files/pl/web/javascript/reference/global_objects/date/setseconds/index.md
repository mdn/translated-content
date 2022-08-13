---
title: Date.prototype.setSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setSeconds
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setSeconds
original_slug: Web/JavaScript/Referencje/Obiekty/Date/setSeconds
---
{{JSRef}}

## Podsumowanie

Ustawia sekundy dla określonej daty stosownie do czasu lokalnego.

## Składnia

    dateObj.setSeconds(secondsValue[, msValue])

### Do wersji JavaScript 1.3

    dateObj.setSeconds(secondsValue)

## Parametry

- `secondsValue`
  - : Liczba całkowita z przedziału 0 i 59.

- `msValue`
  - : Liczba z przedziału 0 i 999, reprezentująca milisekundy.

## Opis

Jeśli nie określisz parametru `msValue`, wartość zwracana użytej metody {{jsxref("Date.prototype.getMilliseconds()", "getMilliseconds()")}}.

Jeśli Twój parametr jest określony z poza szeregu, `setSeconds()` próbuje zaktualizować informacje o dacie w obiekcie {{jsxref("Date")}}. Na przykład, jeśli użyjesz wartości 100 dla `secondsValue`, minuty zawarte w obiekcie {{jsxref("Date")}} będą wzrastać o 1 i wartość 40 będzie użyta dla sekund.

## Przykłady

### Przykład: Zastosowanie `setSeconds()`

```js
var theBigDay = new Date();
theBigDay.setSeconds(30);
```

## Zobacz także

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
