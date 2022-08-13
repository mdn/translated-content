---
title: Date.prototype.getUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
original_slug: Web/JavaScript/Referencje/Obiekty/Date/getUTCMilliseconds
---
{{JSRef}}

## Podsumowanie

Zwraca milisekundy dla określonej daty stosownie do czasu uniwersalnego.

## Składnia

    dateObj.getUTCMilliseconds()

### Parametry

Brak.

## Opis

Wartość zwracana `getUTCMilliseconds` jest liczbą całkowitą z przedziału od 0 do 999.

## Przykłady

### Przykład: Zastosowanie `getUTCMilliseconds()`

Następujący przykład przypisuje część aktualnej daty określającą liczbę milisekund do zmiennej `ms`.

```js
var today = new Date();
var ms = today.getUTCMilliseconds();
```

## Zobacz także

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
