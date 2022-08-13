---
title: Date.prototype.getMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds
original_slug: Web/JavaScript/Referencje/Obiekty/Date/getMilliseconds
---
{{JSRef}}

## Podsumowanie

Zwraca milisekundy określonej daty, stosownie do czasu lokalnego.

## Składnia

    dateObj.getMilliseconds()

### Parametry

Brak.

## Opis

Wartość zwracana przez `getMilliseconds` jest liczbą pomiędzy 0 a 999.

## Przykłady

### Przykład: Zastosowanie `getMilliseconds()`

Następujący przykład przydziela liczbę milisekund aktualnego czasu do zmiennej `ms`.

```js
var today = new Date();
var ms = today.getMilliseconds();
```

## Zobacz także

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
