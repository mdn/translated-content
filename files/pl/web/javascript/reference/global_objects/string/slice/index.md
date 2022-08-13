---
title: String.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/String/slice
tags:
  - JavaScript
  - Method
  - Prototype
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/slice
original_slug: Web/JavaScript/Referencje/Obiekty/String/slice
---
{{JSRef}}

## Podsumowanie

Wydobywa część łańcucha znaków i zwraca go jako nowy łańcuch znaków.

## Składnia

    str.slice(beginSlice[, endSlice])

### Parametry

- `beginSlice`
  - : Oparty na zerze początek indeksu rozpoczynający wyciąganie.

- `endSlice`
  - : Oparty na zerze początek indeksu, który kończy wyciąganie. Jeśli pominięty `slice()` wydobywa do końca łańcuch znaków.

## Opis

`slice()` wyciąga tekst z jednego łańcucha znaków i zwraca nowy łańcuch znaków. Zmiany w treści jednego łańcucha znaków nie mają wpływu na drugi.

`slice()` wyciąga tekst do `endSlice` lecz go nie włącza. `string.slice(1,4)` wyciąga drugi znak aż do czwartego (znaki o indeksach 1, 2 i 3).

Jako ujemny indeks `endSlice` sygnalizuje przesunięcie z końca łańcucha znaków. `str.slice(2,-1)` wyciąga trzeci przez ostatni znak w łańcuchu znaków.

## Przykłady

### Przykład: Zastosowanie `slice()`

Poniższy przykład używa `slice` do stworzenia nowego łańcucha znaków.

```js
var str1 = 'The morning is upon us.';
var str2 = str1.slice(4,-2);

console.log(str2); // OUTPUT: morning is upon u
```
