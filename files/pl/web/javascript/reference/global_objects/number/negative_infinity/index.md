---
title: Number.NEGATIVE INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY
tags:
  - JavaScript
  - Number
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY
original_slug: Web/JavaScript/Referencje/Obiekty/Number/NEGATIVE_INFINITY
---
{{JSRef}}

## Podsumowanie

Wartość reprezentująca ujemną nieskończoność.

## Opis

Wartość własności `Number.NEGATIVE_INFINITY` jest taka sama jak ujemna wartość własności {{jsxref("Infinity")}} obiektu globalnego.

Wartość ta zachowuje się nieco inaczej niż matematyczna nieskończoność:

- Dowolna dodatnia wartość, włączając {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}, pomnożona przez `NEGATIVE_INFINITY` jest równa `NEGATIVE_INFINITY`.
- Dowolna ujemna wartość, włączając `NEGATIVE_INFINITY`, pomnożona przez `NEGATIVE_INFINITY` jest równa {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}.
- Zero pomnożone przez `NEGATIVE_INFINITY` zwraca wartość {{jsxref("Obiekty/NaN", "NaN")}}.
- NaN pomnożone przez `NEGATIVE_INFINITY` zwraca wartość {{jsxref("Obiekty/NaN", "NaN")}}.
- Wartość `NEGATIVE_INFINITY` podzielona przez dowolną wartość ujemną za wyjątkiem `NEGATIVE_INFINITY` jest równa {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}.
- Wartość `NEGATIVE_INFINITY` podzielona przez dowolną wartość dodatnią za wyjątkiem {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}} jest równa `NEGATIVE_INFINITY`.
- Wartość `NEGATIVE_INFINITY` podzielona przez `NEGATIVE_INFINITY` lub {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}} zwraca wartość NaN.
- Dowolna liczba podzielona przez `NEGATIVE_INFINITY` jest równa zero.

Własności `Number.NEGATIVE_INFINITY` można użyć do wskazania błędu warunku, który zwraca liczbę skończoną w przypadku powodzenia. Należy jednak zauważyć, że funkcja {{jsxref("Obiekty/isFinite", "isFinite")}} będzie w tym wypadku bardziej odpowiednia.

## Przykład

W poniższym przykładzie do zmiennej smallNumber została przypisana wartość mniejsza niż wartość minimalna. Gdy zostaje wykonana instrukcja `if`, smallNumber posiada wartość "`-Infinity`", więc przed kontynuowaniem do zmiennej smallNumber jest przypisywana bardziej wykonywalna wartość.

```js
var smallNumber = (-Number.MAX_VALUE) * 2;

if (smallNumber == Number.NEGATIVE_INFINITY) {
 smallNumber = returnFinite();
}
```

## Zobacz także

- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.isFinite()")}}
- {{jsxref("Obiekty/Infinity", "Infinity")}}
- {{jsxref("Obiekty/isFinite", "isFinite()")}}
