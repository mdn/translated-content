---
title: Date.prototype.getUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
original_slug: Web/JavaScript/Referencje/Obiekty/Date/getUTCMinutes
---
{{JSRef}}

## Podsumowanie

Zwraca minuty dla określonej daty stosownie do czasu uniwersalnego.

## Składnia

    dateObj.getUTCMinutes()

### Parametry

Brak.

## Opis

Wartość zwracana przez `getUTCMinutes()` jest liczbą całkowitą z przedziału od 0 do 59.

## Przykłady

### Przykład: Zastosowanie `getUTCMinutes()`

Następujący przykład przypisuje część aktualnej daty określającą minuty do zmiennej `min`.

```js
var today = new Date();
var min = today.getUTCMinutes();
```

## Zobacz także

- {{jsxref("Date.prototype.getMinutes()")}}
- {{jsxref("Date.prototype.setUTCMinutes()")}}
