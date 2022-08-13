---
title: Date.prototype.getYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getYear
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getYear
original_slug: Web/JavaScript/Referencje/Obiekty/Date/getYear
---
{{JSRef}}{{ Deprecated_header() }}

## Podsumowanie

Zwraca rok dla określonej daty w zależności od czasu lokalnego. Metoda `getYear` nie jest dłużej wykorzystywana i została zastąpiona metodą {{jsxref("Date.prototype.getFullYear", "getFullYear()")}}.

## Składnia

    dateObj.getYear()

### Parametry

Brak.

## Opis

Metoda `getYear` zwraca rok minus 1900; tak więc:

- Dla lat późniejszych lub równych 2000, wartość zwracana przez `getYear` wynosi 100 lub więcej. Przykładowo, dla roku 2026, `getYear` zwraca 126.

- Dla lat pomiędzy i włącznie z latami 1900 i 1999, wartość zwracana przez `getYear` zawiera się w przedziale od 0 do 99. Na przykład, jeśli mamy rok 1976, `getYear` zwraca 76.

- Dla lat wcześniejszych niż 1900, wartość zwracana przez `getYear` jest mniejsza niż 0. Na przykład, dla roku 1800, `getYear` zwraca -100.

Aby obsłużyć lata zarówno przed jak i po roku 2000, należy zamiast `getYear` użyć metody {{jsxref("Date.prototype.getFullYear", "getFullYear()")}}, która zwraca pełną liczbę określającą rok.

## Kompatybilność wstecz

### JavaScript 1.2 i wersje wcześniejsze

Metoda `getYear()` zwraca rok w formacie 2-cyfrowym lub 4-cyfrowym:

- Dla roczników pomiędzy i włącznie z latami 1900 i 1999, wartość zwracana przez `getYear` jest to rok minus 1900. Na przykład, dla roku 1976 będzie to liczba 76.

- Dla roczników niższych niż 1900 lub wyższych niż 1999, wartość zwracana przez `getYear` jest cztero-cyfrowa. Na przykład, dla roku 1856, wartość jest równa 1856. Dla roku 2026, wartość wynosi 2026.

## Przykłady

### Przykład: Lata pomiędzy 1900 i 1999

Druga instrukcja przypisuje wartość 95 do zmiennej `year`.

```js
var Xmas = new Date("December 25, 1995 23:15:00");
var year = Xmas.getYear(); // zwraca 95
```

### Przykład: Lata powyżej 1999

Druga instrukcja przypisuje wartość 100 do zmiennej `year`.

```js
var Xmas = new Date("December 25, 2000 23:15:00");
var year = Xmas.getYear(); // zwraca 100
```

### Przykład: Lata poniżej 1900

Druga instrukcja przypisuje wartość -100 do zmiennej `year`.

```js
var Xmas = new Date("December 25, 1800 23:15:00");
var year = Xmas.getYear(); // zwraca -100
```

### Przykład: Ustawianie i pobieranie roku pomiędzy 1900 i 1999

Druga instrukcja przypisuje wartość 95 do zmiennej `year`, reprezentując rok 1995.

```js
var Xmas.setYear(95);
var year = Xmas.getYear(); // zwraca 95
```

## Zobacz także

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setYear()")}}
