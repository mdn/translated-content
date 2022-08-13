---
title: Date.prototype.getDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDay
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getDay
original_slug: Web/JavaScript/Referencje/Obiekty/Date/getDay
---
{{JSRef("Global_Objects", "Date")}}

## Podsumowanie

Zwraca dzień tygodnia określonej daty, stosownie do czasu lokalnego.

## Składnia

    dateObj.getDay()

### Parametry

Brak.

## Opis

Wartością zwracaną przez `getDay` jest liczba całkowita, odnosząca się do dnia tygodnia: 0 dla niedzieli, 1 dla poniedziałku, 2 dla wtorku, i tak dalej.

## Przykłady

### Przykład: Zastosowanie `getDay()`

Druga instrukcja poniżej przydziela wartość 1 do `dzienTyg`, opierając się o wartość `Date`, obiektu `Xmas95`. 25 grudnia 1995 roku wypadał w poniedziałek.

```js
var Xmas95 = new Date("December 25, 1995 23:15:00");
var weekday = Xmas95.getDay();

console.log(weekday); // 1
```

## Zobacz także

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
