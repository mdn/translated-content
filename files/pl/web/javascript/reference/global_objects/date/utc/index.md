---
title: Date.UTC()
slug: Web/JavaScript/Reference/Global_Objects/Date/UTC
tags:
  - Date
  - JavaScript
  - Method
translation_of: Web/JavaScript/Reference/Global_Objects/Date/UTC
original_slug: Web/JavaScript/Referencje/Obiekty/Date/UTC
---
{{JSRef}}

## Podsumowanie

Akceptuje te same parametry co najdłuższa forma konstruktora i zwraca liczbę milisekund w obiekcie {{jsxref("Date")}}, które upłynęły od 1 stycznia, 1970, 00:00:00, czasu uniwersalnego.

## Składnia

    Date.UTC(rok, miesiąc[, dzień[, godz[, min[, sek[, ms]]]]])

### Parametry

- `rok`
  - : Rok po 1900.
- `miesiąc`
  - : Liczba całkowita pomiędzy 0 i 11 reprezentująca miesiąc.
- `dzień`
  - : Liczba całkowita pomiędzy 1 i 31 reprezentująca dzień miesiąca.
- `godz`
  - : Liczba całkowita pomiędzy 0 i 23 reprezentująca godziny.
- `min`
  - : Liczba całkowita pomiędzy 0 i 59 reprezentująca minuty.
- `sek`
  - : Liczba całkowita pomiędzy 0 i 59 reprezentująca sekundy.
- `ms`
  - : Liczba całkowita pomiędzy 0 i 999 reprezentująca milisekundy.

## Opis

`UTC` pobiera parametry daty oddzielone za pomocą przecinków i zwraca liczbę milisekund między 1 stycznia, 1970, 00:00:00, czasu uniwersalnego a określoną datą.

Powinno używać się pełnego zapisu roku, na przykład 1998. Jeśli określony jest rok z przedziału pomiędzy 0 a 99, metoda konwertuje go do roku w 20 wieku (1900 + rok); na przykład, jeśli określiłeś go jako 95, zostanie użyty rok 1995.

Metoda `UTC` różni się od konstruktora {{jsxref("Date")}} na dwa sposoby.

- `Date.UTC` używa czasu uniwersalnego zamiast lokalnego.
- `Date.UTC` zwraca wartość czasu jako liczbę zamiast tworzenia obiektu typu {{jsxref("Date")}}.

Jeśli parametr określony jest poza spodziewanym zasięgiem, metoda `UTC` zaktualizuje pozostałe parametry. Na przykład, jeśli użyjesz liczby 15 do określenia miesiąca, wartość parametru `rok` zostanie powiększona o 1 (rok + 1), a 3 zostanie użyte w parametrze `miesiąc`.

Ponieważ `UTC` jest statyczną metodą obiektu {{jsxref("Date")}}, zawsze powinno używać się jej jako `Date.UTC()`, niż jako metodę utworzonego obiektu {{jsxref("Date")}}.

## Przykłady

### Przykład: Zastosowanie `Date.UTC()`

Następująca instrukcja tworzy obiekt `Date` używający GMT (czasu uniwersalnego) zamiast czasu lokalnego:

```js
var utcDate = new Date(Date.UTC(96, 11, 1, 0, 0, 0));
```

## Zobacz także

- {{jsxref("Date.parse()")}}
