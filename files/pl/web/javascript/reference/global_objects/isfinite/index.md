---
title: isFinite()
slug: Web/JavaScript/Reference/Global_Objects/isFinite
tags:
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects/isFinite
original_slug: Web/JavaScript/Referencje/Obiekty/isFinite
---
{{jsSidebar("Objects")}}

## Podsumowanie

Przetwarza argument w celu stwierdzenia czy jest on liczbą skończoną.

## Składnia

    isFinite(liczba)

### Parametry

- `liczba`
  - : Liczba do przetworzenia.

## Opis

`isFinite()` jest funkcją najwyższego poziomu, niepowiązaną z żadnym obiektem.

Można użyć tej metody do określenia czy dana liczba jest skończona. Metoda `isFinite()` sprawdza liczbę podaną jako jej argument. Jeśli argument ma wartość {{jsxref("NaN")}} (nie jest liczbą), jest dodatnią lub ujemną nieskończonością, metoda ta zwraca `false`, w przeciwnym wypadku zwraca wartość `true`.

## Przykłady

```js
isFinite(Infinity);  // false
isFinite(NaN);       // false
isFinite(-Infinity); // false

isFinite(0);         // true
isFinite(2e64);      // true


isFinite("0");       // true, would've been false with the
                     // more robust Number.isFinite("0")
```

## Zobacz także

- {{jsxref("Number.isFinite()")}}
- {{jsxref("Number.NaN()")}}
- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.NEGATIVE_INFINITY")}}
