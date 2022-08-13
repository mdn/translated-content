---
title: Date.now()
slug: Web/JavaScript/Reference/Global_Objects/Date/now
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/Date/now
original_slug: Web/JavaScript/Referencje/Obiekty/Date/now
---
{{JSRef}}

## Podsumowanie

Zwraca liczbę milisekund, która upłynęła od 1 stycznia 1970 00:00:00 UTC.

## Składnia

    var timeInMs = Date.now();

### Parametry

Brak.

## Opis

Metoda now zwraca milisekundy, które upłynęły od 1 stycznia 1970 00:00:00 UTC do teraz w postaci obiektu {{jsxref("Number")}}.

## Przykłady

### Przykład: Zastosowanie `now`

Poniższy przykład używa `now` do stworzenia znacznika czasu.

```js
var timestamp = Date.now();
```

## Zobacz także

- {{domxref("Performance.now()")}}
- {{domxref("Console.time()")}} / {{domxref("Console.timeEnd()")}}
