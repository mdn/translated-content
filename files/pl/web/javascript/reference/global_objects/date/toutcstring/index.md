---
title: Date.prototype.toUTCString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toUTCString
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toUTCString
original_slug: Web/JavaScript/Referencje/Obiekty/Date/toUTCString
---
{{JSRef}}

## Podsumowanie

Konwertuje datę na łańcuch znaków, używając do konwersji czasu uniwersalnego.

## Składnia

    dateObj.toUTCString()

### Parametry

Brak.

## Opis

Wartość zwracana przez `toUTCString()` jest sformatowanym i tylko do odczytu łańcuchem znaków, stosowanym do konwersji UTC. Wartość zwracanego formatu może być określona stosownie do platformy.

## Przykłady

### Przykład: Zastosowanie `toUTCString()`

```js
var today = new Date();
var UTCstring = today.toUTCString();
// Mon, 03 Jul 2006 21:44:38 GMT
```

## Zobacz także

- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toISOString()")}}
