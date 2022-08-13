---
title: NaN
slug: Web/JavaScript/Reference/Global_Objects/NaN
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/NaN
original_slug: Web/JavaScript/Referencje/Obiekty/NaN
---
{{jsSidebar("Obiekty")}}

## Podsumowanie

Wartość reprezentująca
_Not-A-Number_
, tj. nie będąca liczbą.

## Składnia

    NaN

## Opis

`NaN` jest własnością najwyższego rzędu i nie jest powiązana z żadnym obiektem.

Wartością początkową `NaN` jest `NaN`.

`NaN` nigdy nie jest równa innej liczbie, nie jest równa nawet samej sobie. Nie jest możliwe sprawdzenie, czy dana wartość jest NaN przez porównanie z {{jsxref("Number.NaN")}} – należy zamiast tego stosować funkcję {{jsxref("Obiekty.isNaN", "isNaN()")}}.

Wiele metod języka JavaScript (m. in. konstruktor `Number`, `parseFloat` i `parseInt`) zwracają `NaN`, jeśli wartość ich parametrów nie jest liczbą lub nie daje się na liczbę skonwertować.

`NaN` można zastosować do zasygnalizowania błędu w funkcji, która zazwyczaj zwraca poprawną liczbę.

## Zobacz także

- {{jsxref("Number.NaN")}}
- {{jsxref("Number.isNaN()")}}
- {{jsxref("Obiekty.isNaN", "isNaN()")}}
