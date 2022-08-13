---
title: Date.prototype.setFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setFullYear
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setFullYear
original_slug: Web/JavaScript/Referencje/Obiekty/Date/setFullYear
---
{{JSRef}}

## Podsumowanie

Ustawia kompletny rok dla określonej daty stosownie do czasu lokalnego.

## Składnia

    dateObj.setFullYear(yearValue[, monthValue[, dayValue]])

### Parametry

- `yearValue`
  - : Liczba całkowita określająca wartość numeryczną roku, na przykład; 1995.

<!---->

- `monthValue`
  - : Liczba całkowita z przedziału od 0 do 11 (reprezentująca miesiące od stycznia do grudnia).

<!---->

- `dayValue`
  - : Liczba całkowita z przedziału od 1 do 31 reprezentująca dzień miesiąca. Jeśli zostaje podany parametr `dayValue`, należzy również podać `monthValue`.

## Opis

Jeśli nie zostały podane parametry `monthValue` i `dayValue`, biblioteka pobierze te dane z metod {{jsxref("Date.prototype.getMonth()", "getMonth()")}} i {{jsxref("Date.prototype.getDate()", "getDate()")}}.

Jeżeli określony parametr jest poza oczekiwanym zakresem, `setFullYear()` spróbuje zaktualizować informacje o dacie w obiekcie `Date`. Przykładowo, jeśli zostanie podana wartość 15 dla `monthValue` to rok zostanie zwiększony o 1 (rok+1), a miesiąc zostanie ustawiony na wartość 3.

## Przykłady

### Przykład: Zastosowanie `setFullYear()`

```js
var theBigDay = new Date();
theBigDay.setFullYear(1997);
```

## Zobacz także

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setUTCFullYear()")}}
- {{jsxref("Date.prototype.setYear()")}}
