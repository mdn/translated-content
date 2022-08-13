---
title: Boolean.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Boolean/toString
tags:
  - Boolean
  - JavaScript
  - Method
  - Non-standard
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Boolean/toSource
original_slug: Web/JavaScript/Reference/Global_Objects/Boolean/toSource
---
{{JSRef}} {{non-standard_header}}

## Podsumowanie

Zwraca łańcuch znaków z kodem źródłowym obiektu.

## Składnia

    booleanObj.toSource()
    Boolean.toSource()

### Parametry

Brak.

## Opis

Metoda `toSource` zwraca następujące wartości:

- dla wbudowanego obiektu `Boolean` metoda `toSource` zwraca następujący łańcuch znaków, oznaczający, że kod źródłowy nie jest dostępny:

  ```js
  function Boolean() {
     [native code]
  }
  ```

<!---->

- dla instancji obiektu `Boolean` metoda `toSource` zwraca łańcuch znaków reprezentujący kod źródłowy.

Metoda ta jest zwykle stosowana wewnętrznie przez interpreter JavaScriptu, a nie bezpośrednio w kodzie programów.

## Zobacz także

- {{jsxref("Object.prototype.toSource()")}} {{non-standard_inline}}
