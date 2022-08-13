---
title: Date.prototype.setYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setYear
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setYear
original_slug: Web/JavaScript/Referencje/Obiekty/Date/setYear
---
{{jSRef}}{{ Deprecated_header() }}

## Podsumowanie

Ustawia rok dla określonej daty stosownie do czasu lokalnego. Aby móc korzystać z roczników przed i po roku 2000, powinieneś użyć metody {{jsxref("Date.prototype.setFullYear()", "setFullYear()")}} zawierającej `setYear()`, która rok potrafi określić w pełni.

## Składnia

    dateObj.setYear(yearValue)

### Parametry

- `yearValue`
  - : Liczba całkowita.

## Opis

Jeśli `yearValue` jest liczbą pomiędzy 0 a 99 (inclusive), to rok dla `dateObjectName` jest ustawiany - 1900 + `yearValue`. W innym przypadku, rok dla `dateObjectName` jest ustawiany w postaci wyświetlenia `yearValue`.

## Przykłady

### Przykład: Zastosowanie `setYear()`

Dwie pierwsze linie ustawiają rok w dacie na 1996. Trzecia ustawia rok na 2000.

```js
var theBigDay = new Date();

theBigDay.setYear(96)
theBigDay.setYear(1996)
theBigDay.setYear(2000)
```

## Zobacz także

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
- {{jsxref("Date.prototype.setUTCFullYear()")}}
