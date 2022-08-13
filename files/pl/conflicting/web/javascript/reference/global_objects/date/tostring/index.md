---
title: Date.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Date/toString
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toSource
original_slug: Web/JavaScript/Reference/Global_Objects/Date/toSource
---
{{JSRef}} {{non-standard_header}}

## Podsumowanie

Zwraca łańcuch znaków reprezentujący kod źródłowy obiektu.

## Składnia

    dateObj.toSource()
    Date.toSource()

### Parametry

Brak.

### Opis

Metoda `toSource()` zwraca następującą wartość:

- Dla wewnętrznej budowy obiekt {{jsxref("Date")}}, `toSource()` zwraca następujący łańcuch znaków sygnalizując, który kod źródłowy jest nieosiągalny:

```js
function Date() {
   [native code]
}
```

- Dla instancji {{jsxref("Date")}}, `toSource()` zwraca łańcuch znaków reprezentujący kod źródłowy.

Ta metoda jest często nazywana wewnętrzną metodą JavaScript i jest nie wyraźna w kodzie.

## Zobacz także

- {{jsxref("Object.prototype.toSource()")}}
