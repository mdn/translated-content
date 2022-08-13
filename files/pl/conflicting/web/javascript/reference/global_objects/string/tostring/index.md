---
title: String.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/String/toString
tags:
  - JavaScript
  - Method
  - Non-standard
  - Prototype
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/toSource
original_slug: Web/JavaScript/Reference/Global_Objects/String/toSource
---
{{JSRef}}{{non-standard_header}}

## Podsumowanie

Zwraca łańcuch znaków reprezentujący kod źródłowy obiektu.

## Składnia

    String.toSource()
    str.toSource()

## Opis

Metoda `toSource()` zwraca następujące wartości:

- Dla wbudowanego obiektu {{jsxref("String")}}, `toSource()` zwraca następujący łańcuch znaków wskazujący, że kod źródłowy nie jest dostępny:

  ```js
  function String() {
     [natywny kod]
  }
  ```

- W przypadku obiektu {{jsxref("String")}} lub łańcuchów znaków, `toSource()` zwraca łańcuch znaków reprezentujący kod źródłowy.

Ta metoda jest w JavaScript wywoływana zazwyczaj wewnętrznie, nie bezpośrednio w kodzie.
