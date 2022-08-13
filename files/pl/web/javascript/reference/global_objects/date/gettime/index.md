---
title: Date.prototype.getTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTime
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getTime
original_slug: Web/JavaScript/Referencje/Obiekty/Date/getTime
---
{{JSRef}}

## Podsumowanie

Zwraca liczbę reprezentującą czas dla określonej daty stosownie do czasu uniwersalnego.

Może być wykorzystana do przypisania daty i czasu do innego obiektu {{jsxref("Date")}}. Ta metoda jest funkcjonalnie równoważna metodzie {{jsxref("Date.valueof", "valueOf()")}}.

## Składnia

    dateObj.getTime()

### Parametry

Brak.

## Opis

Wartość zwracana przez metodę `getTime` jest liczbą milisekund liczoną od 1 stycznia 1970 00:00:00.

## Przykłady

### Przykład: Zastosowanie `getTime()`

Następująca instrukcja przypisuje wartość daty `theBigDay` do `sameAsBigDay`:

```js
var theBigDay = new Date("July 1, 1999");
var sameAsBigDay = new Date();
sameAsBigDay.setTime(theBigDay.getTime());
```

## Zobacz także

- {{jsxref("Date.prototype.setTime()")}}
- {{jsxref("Date.prototype.valueOf()")}}
