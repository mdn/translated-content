---
title: Function.length
slug: Web/JavaScript/Reference/Global_Objects/Function/length
tags:
  - Function
  - JavaScript
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Function/length
original_slug: Web/JavaScript/Referencje/Obiekty/Function/length
---
{{JSRef}}

## Podsumowanie

Określa liczbę argumentów oczekiwanych przez funkcję.

## Opis

Obiekt `length` znajduje się na zewnątrz funkcji i określa jak wiele argumentów ma oczekiwać funkcja, i.e. liczbę oficjalnych parametrów. W przeciwieństwie do obiektu {{jsxref("arguments.length")}}, który znajduje się wewnątrz funkcji, określa liczbę argumentów faktycznie przekazywanych do funkcji.

## Przykład

### Przykład: Zastosowanie `Function.length` i `arguments.length`

Następujący przykład pokazuje w jaki należy zastosować `Function.length` i `arguments.length`.

```js
function addNumbers(x, y){
   if (arguments.length == addNumbers.length) {
      return (x + y);
   }
   else
      return 0;
}
```

Jeśli podamy więcej niż dwa argumenty do tej funkcji, funkcja zwróci 0:

    addNumbers(3,4,5)   // zwraca 0
    addNumbers(3,4)     // zwraca 7
    addNumbers(103,104) // zwraca 207
