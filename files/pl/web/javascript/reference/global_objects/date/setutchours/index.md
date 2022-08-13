---
title: Date.prototype.setUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCHours
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCHours
original_slug: Web/JavaScript/Referencje/Obiekty/Date/setUTCHours
---
{{JSRef}}

## Podsumowanie

Ustawia godzinę dla określonej daty stosownie do czasu uniwersalnego.

## Składnia

    dateObj.setUTCHours(hoursValue[, minutesValue[, secondsValue[, msValue]]])

### Parametry

- `hoursValue`
  - : Liczba całkowita pomiędzy 0 a 23, reprezentująca godzinę.

- `minutesValue`
  - : Liczba całkowita pomiędzy 0 a 59, reprezentująca minutami.

- `secondsValue`
  - : Liczba całkowita pomiędzy 0 a 59, reprezentująca sekundy. Jeśli określisz parametr `secondsValue`, to musisz także określić parametr `minutesValue`.

- `msValue`
  - : Liczba pomiędzy 0 a 999, reprezentująca milisekundy. Jeśli określisz parametr `msValue`, to musisz także określić parametry `minutesValue` i `secondsValue`.

## Opis

Jeśli nie określisz parametrów `minutesValue`, `secondsValue` i `msValue`, wartość zwracana będzie użytych metod {{jsxref("Date.prototype.getUTCMinutes()", "getUTCMinutes()")}}, {{jsxref("Date.prototype.getUTCSeconds()", "getUTCSeconds()")}} i {{jsxref("Date.prototype.getUTCMilliseconds()", "getUTCMilliseconds()")}}.

Jeśli Twój parametr jest określony z poza szeregu, `setUTCHours()` próbuje zaktualizować informacje o dacie w obiekcie `Date`. Na przykład, jeśli użyjesz wartości 100 dla `secondsValue`, minuty zawarte w obiekcie `Date` będą wzrastać o 1 i wartość 40 będzie użyta dla sekund.

## Przykłady

### Przykład: Zastosowanie `setUTCHours()`

```js
var theBigDay = new Date();
theBigDay.setUTCHours(8);
```

## Zobacz także

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
