---
title: Date.prototype.getUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
original_slug: Web/JavaScript/Referencje/Obiekty/Date/getUTCHours
---
{{JSRef}}

## Podsumowanie

Zwraca godziny dla określonej daty stosownie do czasu uniwersalnego.

## Składnia

    dateObj.getUTCHours()

### Parametry

Brak.

## Opis

Wartość zwracana przez `getUTCHours` jest liczbą całkowitą z przedziału od 0 do 23.

## Przykłady

### Przykład: Zastosowanie `getUTCHours()`

Następujący przykład przypisuje część aktualnej daty określającą godzinę do zmiennej `hrs`.

```js
var today = new Date();
var hours = today.getUTCHours();
```

## Zobacz także

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
