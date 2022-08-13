---
title: Array.prototype.length
slug: Web/JavaScript/Reference/Global_Objects/Array/length
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/Array/length
original_slug: Web/JavaScript/Referencje/Obiekty/Array/length
---
{{JSRef("Global_Objects", "Array")}}

## Podsumowanie

32-bitowa liczba całkowita bez znaku określająca liczbę elementów w tablicy.

{{js_property_attributes(1, 0, 0)}}

## Składnia

    arr.length

## Opis

Wartością własności `length` jest dodatnia liczba całkowita mniejsza niż 2 do potęgi 32 (232).

W dowolnej chwili możesz ustalić wartość `length` w celu zmniejszenia rozmiaru tablicy. Ustawienie wartości `length` na większą niż rozmiar tablicy nie zwiększy liczby elementów, np. jeżeli ustawisz `length` na 3, podczas gdy obecną wartością jest liczba 2, tablica nadal będzie zawierać tylko 2 elementy.

## Przykłady

### Przykład: Iteracja przez wszystkie elementy tablicy

W poniższym przykładzie ilość elementów w tablicy `numbers` jest określana w instrukcji iteracyjnej na podstawie wartości `length`, następnie wartość każdego elementu jest podwajana.

```js
var numbers = [1,2,3,4,5];
for (var i = 0; i < numbers.length; i++) {
  numbers[i] *= 2;
}
// zawartość tablicy to teraz [2,4,6,8,10];
```

### Przykład: Skracanie tablicy

Poniższy przykład zmniejsza rozmiar tablicy `statesUS` do 50, jeżeli przekracza on tę wartość.

```js
if (statesUS.length > 50) {
   statesUS.length=50
}
```
