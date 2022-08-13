---
title: Number.POSITIVE INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY
tags:
  - JavaScript
  - Number
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY
original_slug: Web/JavaScript/Referencje/Obiekty/Number/POSITIVE_INFINITY
---
{{JSRef}}

## Podsumowanie

Wartość reprezentująca dodatnią nieskończoność.

{{js_property_attributes(0, 0, 0)}}

## Opis

Wartość własności `Number.POSITIVE_INFINITY` jest taka sama jak wartość własności {{jsxref("Infinity")}} obiektu globalnego.

Wartość ta zachowuje się nieco inaczej niż matematyczna nieskończoność:

- Dowolna dodatnia wartość, włączając `POSITIVE_INFINITY`, pomnożona przez `POSITIVE_INFINITY` jest równa `POSITIVE_INFINITY`.
- Dowolna ujemna wartość, włączając {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}, pomnożona przez `POSITIVE_INFINITY` jest równa {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}.
- Zero pomnożone przez `POSITIVE_INFINITY` zwraca wartość {{jsxref("Obiekty/NaN", "NaN")}}.
- NaN pomnożone przez `POSITIVE_INFINITY` zwraca wartość {{jsxref("Obiekty/NaN", "NaN")}}.
- Wartość `POSITIVE_INFINITY` podzielona przez dowolną wartość ujemną za wyjątkiem {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}} jest równa {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}.
- Wartość `POSITIVE_INFINITY` podzielona przez dowolną wartość dodatnią za wyjątkiem `POSITIVE_INFINITY` jest równa `POSITIVE_INFINITY`.
- Wartość `POSITIVE_INFINITY` podzielona przez {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}} lub `POSITIVE_INFINITY` zwraca wartość {{jsxref("Obiekty/NaN", "NaN")}}.
- Dowolna liczba podzielona przez `POSITIVE_INFINITY` jest równa `0`.

Niektóre metody JavaScript (takie jak konstruktor `Number`, `parseFloat` i `parseInt`) zwracają wartość `NaN`, jeśli wartość określona w parametrze znacznie przewyższa wartość `Number.MAX_VALUE`.

Własności `Number.POSITIVE_INFINITY` można użyć do wskazania błędu warunku, który zwraca liczbę skończoną w przypadku powodzenia. Należy jednak zauważyć, że funkcja {{jsxref("Obiekty/isFinite", "isFinite")}} będzie w tym wypadku bardziej odpowiednia.

## Przykład

W poniższym przykładzie do zmiennej largeNumber została przypisana wartość większa niż wartość maksymalna. Gdy zostaje wykonana instrukcja {{jsxref("Polecenia/if...else", "if")}}, largeNumber posiada wartość `Infinity`, więc przed kontynuowaniem do zmiennej `bigNumber` jest przypisywana bardziej wykonywalna wartość.

```js
var bigNumber = Number.MAX_VALUE * 2;

if (bigNumber == Number.POSITIVE_INFINITY) {
 bigNumber = returnFinite();
}
```

## Zobacz także

- {{jsxref("Number.NEGATIVE_INFINITY")}}
- {{jsxref("Number.isFinite()")}}
- {{jsxref("Infinity")}}
- {{jsxref("Obiekty/isFinite", "isFinite()")}}
