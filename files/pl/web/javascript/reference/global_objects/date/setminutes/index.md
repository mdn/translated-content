---
title: Date.prototype.setMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMinutes
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setMinutes
original_slug: Web/JavaScript/Referencje/Obiekty/Date/setMinutes
---
{{JSRef}}

## Podsumowanie

Ustawia minuty dla określonej daty stosownie do czasu lokalnego.

## Składnia

    dateObj.setMinutes(minutesValue[, secondsValue[, msValue]])

### Do wersji JavaScript 1.3

    dateObj.setMinutes(minutesValue)

### Parametry

- `minutesValue`
  - : Liczba całkowita pomiędzy 0 i 59, reprezentująca minuty.

- `secondsValue`
  - : Liczba całkowita pomiędzy 0 i 59, reprezentująca sekundy. Jeśli określisz parametr `secondsValue`, musisz także określić `minutesValue`.

- `msValue`
  - : Liczba pomiędzy 0 i 999, reprezentująca milisekundy. Jeśli określisz parametr `msValue`, musisz także określić `minutesValue` i `secondsValue`.

## Opis

Jeśli nie określono parametrów `secondsValue` i `msValue`, są użyte wartości zwracanych metod `getSeconds` i `getMilliseconds`.

Jeśli Twój parametr jest określony z poza szeregu, `setMinutes` próbuje zaktualizować informacje o dacie w obiekcie `Date`. Na przykład, jeśli użyjesz wartości 100 dla `secondsValue`, minuty (`minutesValue`) będą wzrastać o 1 (`minutesValue` + 1) i wartość 40 będzie użyta dla sekund.

## Przykłady

### Przykład: Zastosowanie `setMinutes()`

```js
var theBigDay = new Date();
theBigDay.setMinutes(45);
```

## Zobacz także

- {{jsxref("Date.prototype.getMinutes()")}}
- {{jsxref("Date.prototype.setUTCMinutes()")}}
