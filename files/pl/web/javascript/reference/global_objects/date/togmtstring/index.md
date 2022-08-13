---
title: Date.prototype.toGMTString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toGMTString
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toGMTString
original_slug: Web/JavaScript/Referencje/Obiekty/Date/toGMTString
---
{{JSRef}}{{ Deprecated_header() }}

## Podsumowanie

Konwertuje datę na łańcuch znaków używając konwersji czasu GMT. Dokładny format zwracanych wartości `toGMTString()` różni się w zależności platformy.

> **Note:** Metoda `toGMTString` jest nie długo używana i została ona zastąpiona metodą {{jsxref("Date.prototype.toUTCString()", "toUTCString()")}}. Powinieneś używać {{jsxref("Date.prototype.toUTCString()", "toUTCString()")}} zamiast `toGMTSTring`().

## Składnia

    dateObj.toGMTString()

## Przykłady

### Przykład: Zastosowanie `toGMTString()`

W następującym przykładzie jest dzisiejsza data obiektu `Date`:

```js
var today = new Date();
var str = today.toGMTString();

console.log(str); // Mon, 18 Dec 1995 17:28:35 GMT
```

W tym przykładzie metoda `toGMTString` konwertuje datę w czasie GMT (UTC) używanego przez system operacyjny w odpowiedniej strefie czasowej i zwraca wartość łańcucha znaków, która jest podobna do następującej formy. Format jest w pełni zależny od platformy.

## Zobacz także

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
