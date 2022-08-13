---
title: Date.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Date/valueOf
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/valueOf
original_slug: Web/JavaScript/Referencje/Obiekty/Date/valueOf
---
{{JSRef}}

## Podsumowanie

Zwraca prymitywną wartość obiektu `Date`.

## Składnia

    dateObj.valueOf()

### Parametry

Brak.

### Opis

Metoda `valueOf` zwraca wartość prymitywną obiektu {{jsxref("Date")}} jako typ danych liczbowych, czyli liczbę milisekund od północy 1 stycznia 1970 UTC.

Ta metoda jest funkcyjnie równoważna do metody {{jsxref("Date.prototype.getTime()")}}.

Ta metoda często jest nazywana wewnętrzną metodą JavaScriptu i nie jest wyraźna w kodzie.

## Przykłady

### Przykład: Zastosowanie `valueOf()`

```js
var x = new Date(56, 6, 17);
var myVar = x.valueOf();      // przydziela -424713600000 do myVar
```

## Zobacz także

- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Date.prototype.getTime()")}}
