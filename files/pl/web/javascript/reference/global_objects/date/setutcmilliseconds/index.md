---
title: Date.prototype.UTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds
original_slug: Web/JavaScript/Referencje/Obiekty/Date/setUTCMilliseconds
---
{{JSRef}}

## Podsumowanie

Ustawia milisekundy dla określonej daty stosownie do czasu uniwersalnego.

## Składnia

    dateObj.setUTCMilliseconds(millisecondsValue)

### Parametry

- `millisecondsValue`
  - : Liczba pomiędzy 0 a 999, reprezentująca milisekundy.

## Opis

Jeśli parametr, który określiłeś jest z poza szeregu, `setUTCMilliseconds()` próbuje zaktualizować informacje o dacie w obiekcie {{jsxref("Date")}}. Na przykład, jeśli użyjesz 1100 dla `millisecondsValue`, sekunda przechowana w obiekcie {{jsxref("Date")}} wzrośnie o 1 i wartość 100 będzie użyta dla milisekund.

## Przykłady

#### Przykład: Zastosowanie `setUTCMilliseconds()`

```js
var theBigDay = new Date();
theBigDay.setUTCMilliseconds(500);
```

## Zobacz także

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
