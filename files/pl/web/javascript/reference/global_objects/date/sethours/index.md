---
title: Date.prototype.setHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setHours
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setHours
original_slug: Web/JavaScript/Referencje/Obiekty/Date/setHours
---
{{JSRef}}

## Podsumowanie

Ustawia godziny dla określonej daty stosownie do czasu lokalnego.

## Składnia

    dateObj.setHours(hoursValue[, minutesValue[, secondsValue[, msValue]]])

### Do wersji JavaScript 1.3

    dateObj.setHours(hoursValue)

## Parametry

- `hoursValue`
  - : Liczba całkowita pomiędzy 0 i 23, reprezentująca godziny.

- `minutesValue`
  - : Liczba całkowita pomiędzy 0 i 59, reprezentująca minuty.

- `secondsValue`
  - : Liczba całkowita pomiędzy 0 i 59, reprezentująca sekundy. Jeśli określisz parametr `secondsValue`, musisz także określić `minutesValue`.

- `msValue`
  - : A Liczba pomiędzy 0 i 999, reprezentująca milisekundy. Jeśli określisz parametr `msValue`, musisz także określić `minutesValue` i `secondsValue`.

## Opis

Jeśli nie określisz parametrów `minutesValue`, `secondsValue` i `msValue`, wartość zwracana użytych metod {{jsxref("Date.prototype.getMinutes()", "getMinutes()")}}, {{jsxref("Date.prototype.getSeconds()", "getSeconds()")}} i {{jsxref("Date.prototype.getMilliseconds()", "getMilliseconds()")}}.

Jeśli Twój parametr jest określony z poza szeregu, `setHours` próbuje zaktualizować informacje o dacie w obiekcie {{jsxref("Date")}}. Na przykład, jeśli użyjesz wartości 100 dla `secondsValue`, minuty będą wzrastać o 1 (min + 1), i wartość 40 będzie użyta dla sekund.

## Przykłady

### Przykład: Zastosowanie `setHours()`

```js
var the BigDay = new Date();
theBigDay.setHours(7);
```

## Zobacz także

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
