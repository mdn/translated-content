---
title: Date.prototype.setTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/setTime
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setTime
original_slug: Web/JavaScript/Referencje/Obiekty/Date/setTime
---
{{JSRef}}

## Podsumowanie

Ustawia wartość obiektu {{jsxref("Date")}} stosownie do czasu lokalnego.

## Składnia

    dateObj.setTime(timeValue)

### Parametry

- `timeValue`
  - : Liczba całkowita reprezentująca liczbę milisekund liczonych od 1 stycznia 1970, 00:00:00.

## Opis

Użyj metody `setTime()`, aby pomóc przydzielić dacie czas następnego obiektu {{jsxref("Date")}}.

## Przykłady

### Przykład: Zastosowanie `setTime()`

```js
var theBigDay = new Date("July 1, 1999");
var sameAsBigDay = new Date();
sameAsBigDay.setTime(theBigDay.getTime())
```

## Zobacz także

- {{jsxref("Date.prototype.getTime()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
