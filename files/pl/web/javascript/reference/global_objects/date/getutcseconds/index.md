---
title: Date.prototype.getUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
original_slug: Web/JavaScript/Referencje/Obiekty/Date/getUTCSeconds
---
{{JSRef}}

## Podsumowanie

Zwraca sekundy dla określonej daty stosownie do czasu uniwersalnego.

## Składnia

    dateObj.getUTCSeconds()

### Parametry

Brak.

## Opis

Wartość zwracana przez `getUTCSeconds()` jest liczbą całkowitą z przedziału od 0 do 59.

## Przykłady

### Przykład: Zastosowanie `getUTCSeconds()`

Następujący przykład przypisuje część aktualnej daty określającą liczbę sekund do zmiennej `sec`.

```js
var today = new Date();
var sec = today.getUTCSeconds();
```

## Zobacz także

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
