---
title: String.fromCharCode()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCharCode
tags:
  - JavaScript
  - Method
  - String
  - Unicode
translation_of: Web/JavaScript/Reference/Global_Objects/String/fromCharCode
original_slug: Web/JavaScript/Referencje/Obiekty/String/fromCharCode
---
{{JSRef}}

## Podsumowanie

Zwraca łańcuch znaków stworzony przez podaną sekwencję kodów Unicode.

## Składnia

    String.fromCharCode(num1[, ...[, numN]])

### Parametry

- `num1, ..., numN `
  - : Sekwencja liczb, które są wartościami Unicode.

## Opis

Ta metoda zwraca łańcuch znaków nie będący {{jsxref("String")}}.

Ponieważ `fromCharCode()` jest metodą statyczną {{jsxref("String")}}, używaj ją zawsze jako `String.fromCharCode()`, a nie jako metodę obiektu {{jsxref("String")}}.

## Przykłady

### Przykład: Zastosowanie `fromCharCode()`

Następujący przykład zwraca łańcuch znaków `"ABC"`.

```js
String.fromCharCode(65,66,67); // "ABC"
```

## Zobacz także

- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
