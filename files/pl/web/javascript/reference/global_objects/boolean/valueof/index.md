---
title: Boolean.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/valueOf
tags:
  - Boolean
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Boolean/valueOf
original_slug: Web/JavaScript/Referencje/Obiekty/Boolean/valueOf
---
{{JSRef}}

## Podsumowanie

Zwraca wartość prostą obiektu {{jsxref("Boolean")}}.

## Składnia

    bool.valueOf()

### Parametry

Brak.

## Opis

Metoda `valueOf` obiektu {{jsxref("Boolean")}} zwraca wartość prostą obiektu {{jsxref("Boolean")}} lub literału {{jsxref("Boolean")}} jako typ Boolean.

Metoda ta jest zwykle wywoływana wewnętrznie przez interpreter JavaScriptu, a nie w typowym kodzie w JavaScripcie.

## Przykłady

### Przykład: Zastosowanie `valueOf`

```js
var x = new Boolean();
myVar = x.valueOf()      // przypisuje myVar wartość false
```

## Zobacz także

- {{jsxref("Object.prototype.valueOf()")}}
