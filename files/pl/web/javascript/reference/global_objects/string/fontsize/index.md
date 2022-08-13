---
title: String.prototype.fontsize()
slug: Web/JavaScript/Reference/Global_Objects/String/fontsize
tags:
  - Deprecated
  - JavaScript
  - Method
  - Prototype
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/fontsize
original_slug: Web/JavaScript/Referencje/Obiekty/String/fontsize
---
{{JSRef}}{{ Non-standard_header() }}

## Podsumowanie

Powoduje wyświetlenie łańcucha znaków w określonym rozmiarze czcionki, tak jak to było w znaczniku {{HTMLElement("font")}}.

## Składnia

    str.fontsize(size)

### Parametry

- `size`
  - : Liczba całkowita pomiędzy 1 a 7, łańcuch znaków reprezentujący rozmiar znaku liczby całkowitej między 1 a 7.

## Opis

Kiedy określisz rozmiar jako liczbę całkowitą, ustaw rozmiar `stringName` na jeden z 7 innych rozmiarów. Kiedy określisz `size` łańcucha znaków jako "-2", to dostosujesz rozmiar czcionki `stringName` relatywnie do rozmiaru jaki został ustawiony w znaczniku {{HTMLElement("basefont")}}.

## Przykłady

### Przykład: Zastosowanie **`fontsize()`**

```js
var worldString = "Witaj, Świecie";

console.log(worldString.small());     // <small>Witaj, Świecie</small>
console.log(worldString.big());       // <big>Witaj, Świecie</big>
console.log(worldString.fontsize(7)); // <fontsize=7>Witaj, Świecie</fontsize>
```

## Zobacz także

- {{jsxref("String.prototype.big()")}}
- {{jsxref("String.prototype.small()")}}
