---
title: String.prototype.charCodeAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charCodeAt
tags:
  - JavaScript
  - Method
  - Prototype
  - String
  - Unicode
translation_of: Web/JavaScript/Reference/Global_Objects/String/charCodeAt
original_slug: Web/JavaScript/Referencje/Obiekty/String/charCodeAt
---
{{JSRef}}

## Podsumowanie

Zwraca liczbę oznaczającą wartość Unicode znaku o podanym indeksie.

## Składnia

    str.charCodeAt(index)

### Parametry

- `index`
  - : Liczba całkowita z przedziału od 0 do liczby o 1 mniejszej od długości łańcucha.

## Opis

Wartości Unicode mieszczą się w zakresie od 0 do 65535. Pierwsze 128 wartości Unicode jest takie same jak w zbiorze znaków ASCII. Aby dowiedzieć się więcej o Unicode, zobacz [Przewodnik po języku JavaScript](/pl/docs/Web/JavaScript/Guide/Grammar_and_types#Unicode).

Zgodność wsteczna: JavaScript 1.2 — Metoda `charCodeAt` zwraca liczbę wskazującą wartość ze zbioru kodowania ISO-Latin-1 znaku o podanym indeksie. Zbiór kodowania ISO-Latin-1 posiada zakres od 0 do 255. Znaki od 0 do 127 są identyczne, co te w zbiorze znaków ASCII.

## Przykłady

### Przykład: Zastosowanie `charCodeAt()`

Następujący przykład zwróci 65, wartość A w Unicode.

```js
"ABC".charCodeAt(0); // zwróci 65
```
