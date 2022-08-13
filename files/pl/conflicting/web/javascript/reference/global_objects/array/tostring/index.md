---
title: Array.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Array/toString
tags:
  - Array
  - JavaScript
  - Method
  - Non-standard
  - Prototype
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/Array/toSource
original_slug: Web/JavaScript/Reference/Global_Objects/Array/toSource
---
{{JSRef}} {{non-standard_header}}

## Podsumowanie

Zwraca łańcuch znaków reprezentujący kod źródłowy tablicy.

## Składnia

    arr.toSource()

### Parametry

Brak.

## Opis

Metoda `toSource` zwraca następujące wartości:

This shouldn't be here, but until reorganization where pages are moved to their proper places, the title of this article is ambiguous, so it can stay. After reorganization, this should be removed.

- Dla wbudowanego obiektu `Array`, `toSource` zwraca następujący łańcuch znaków sygnalizując, że kod źródłowy jest niedostępny:

  ```js
  function Array() {
      [natywny kod]
  }
  ```

- Dla instancji {{jsxref("Array")}}, `toSource` zwraca łańcuch znaków reprezentujący kod źródłowy.

Metoda ta jest zazwyczaj wywoływana wewnętrznie przez JavaScript, a nie bezpośrednio w kodzie. Możliwe jest wywołanie `toSource` podczas debugowania, aby zbadać zawartość tablicy.

## Przykłady

### Przykład: Sprawdzanie kodu źródłowego tablicy

Do sprawdzania kodu źródłowego tablicy:

```js
var alpha = new Array("a", "b", "c");

alpha.toSource() //zwraca ["a", "b", "c"]
```

## Zobacz także

- {{jsxref("Object.prototype.toSource()")}}
- {{jsxref("Array.prototype.toString()")}}
