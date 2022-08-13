---
title: RegExp.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/RegExp/toString
tags:
  - JavaScript
  - Method
  - Prototype
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/toSource
original_slug: Web/JavaScript/Reference/Global_Objects/RegExp/toSource
---
{{JSRef}}{{Non-standard_header}}

## Podsumowanie

Zwraca łańcuch znaków reprezentujący kod źródłowy obiektu.

## Składnia

    regexObj.toSource()

### Parametry

Brak.

## Opis

Metoda `toSource()` zwraca następujące wartości:

- Dla wbudowanego obiektu {{jsxref("RegExp")}}, `toSource()` zwraca następujący łańcuch znaków sygnalizujący, który kod źródłowy nie jest dostępny:

  ```js
  function RegExp() {
     [native code]
  }
  ```

- Dla instancji {{jsxref("RegExp")}}, `toSource()` zwraca łańcuch znaków reprezentujący kod źródłowy.

Ta metoda jest często nazywana wewnętrzną metodą JavaScriptu i nie jest widoczna w kodzie.

## Zobacz także

- {{jsxref("Object.prototype.toSource()")}}
