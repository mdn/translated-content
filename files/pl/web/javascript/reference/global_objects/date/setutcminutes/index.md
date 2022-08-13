---
title: Date.prototype.setUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMinutes
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCMinutes
original_slug: Web/JavaScript/Referencje/Obiekty/Date/setUTCMinutes
---
{{JSRef}}

## Podsumowanie

Ustawia minuty dla określonej daty stosownie do czasu uniwersalnego.

## Składnia

    dateObj.setUTCMinutes(minutesValue[, secondsValue[, msValue]])

### Parametry

- `minutesValue`
  - : Liczba całkowita pomiędzy 0 i 59, reprezentująca minuty.

- `secondsValue`
  - : Liczba całkowita pomiędzy 0 i 59, reprezentująca sekundy. Jeśli określisz parametr `secondsValue`, musisz także określić `minutesValue`.

- `msValue`
  - : Liczba pomiędzy 0 i 999, reprezentująca milisekundy. Jeśli określisz parametr `msValue`, musisz także określić `minutesValue` i `secondsValue`.

## Opis

Jeśli nie określono parametrów `secondsValue` i `msValue`, są użyte wartości zwracanych metod {{jsxref("Date.prototype.getUTCSeconds()", "getUTCSeconds()")}} i {{jsxref("Date.prototype.getUTCMilliseconds()", "getUTCMilliseconds()")}}.

Jeśli Twój parametr jest określony z poza szeregu, `setUTCMinutes()` próbuje zaktualizować informacje o dacie w obiekcie {{jsxref("Date")}}. Na przykład, jeśli użyjesz wartości 100 dla `secondsValue`, minuty (`minutesValue`) będą wzrastać o 1 (`minutesValue` + 1) i wartość 40 będzie użyta dla sekund.

## Przykłady

### Przykład: Zastosowanie `setUTCMinutes()`

```js
var theBigDay = new Date();
theBigDay.setUTCMinutes(43);
```

## Zobacz także

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}
