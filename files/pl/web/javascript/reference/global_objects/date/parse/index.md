---
title: Date.parse()
slug: Web/JavaScript/Reference/Global_Objects/Date/parse
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/Date/parse
original_slug: Web/JavaScript/Referencje/Obiekty/Date/parse
---
{{JSRef}}

## Podsumowanie

Analizuje łańcuch znaków reprezentujący datę i zwraca liczbę milisekund, które upłynęły od 1 stycznia 1970, 00:00:00 UTC.

## Składnia

    Date.parse(dateString)

### Parametry

- `dateString`
  - : Łańcuch znaków reprezentujący datę.

## Opis

Metoda `parse` pobiera łańcuch znaków daty (na przykład: "`Dec 25, 1995`") i zwraca liczbę milisekund, które upłynęły od 1 stycznia 1970, 00:00:00 UTC. Gdy parametr nie zawiera informacji na temat strefy czasowej, domyślnie używana jest lokalna strefa czasowa. Ta funkcja jest przydatna do ustawiania wartości daty w oparciu o wartość łańcucha znaków, przykładowo w połączeniu z metodą {{jsxref("Date.prototype.setTime()", "setTime()")}} oraz obiektem {{jsxref("Date")}}.

Dla podanego łańcucha znaków reprezentującego czas, `parse` zwraca wartość czasu. Akceptuje składnię standardu daty - IETF: "`Mon, 25 Dec 1995 13:30:00 GMT`". Rozpoznaje skróty kontynentalnej strefy czasowej US, lecz w ogólnym zastosowaniu używa się przesunięć dla strefy czasowej, na przykład: "`Mon, 25 Dec 1995 13:30:00 GMT+0430`" (4 godziny i 30 minut na zachód od południka Greenwich). Jeśli nie określono strefy czasowej, domyślna jest strefa lokalna. GMT i UTC są rozpatrywane jako równoważne.

Mimo iż specyfikatory strefy czasowej są brane pod uwagę podczas analizy łańcucha znaków do prawidłowej interpretacji argumentu, nie wpływają one jednak na zwracaną wartość, którą zawsze jest ilość milisekund pomiędzy 1 stycznia 1970 roku, 00:00:00 UTC a punktem w czasie reprezentowanym przez argument.

Ponieważ `parse` jest metodą statyczną obiektu `Date`, używamy jej jako `Date.parse()`, raczej niż jako wywołanie metody utworzonego przez nas obiektu `Date`.

## Przykłady

### Przykład: Zastosowanie `parse`

Jeśli `IPOdate` jest istniejącym obiektem `Date`, możemy przypisać mu wartość 9 sierpnia 1995 (czasu lokalnego) w następujący sposób:

```js
IPOdate.setTime(Date.parse("Aug 9, 1995")) ;
```

Kilka innych przykładów:

```js
// Zwraca 807937200000 w strefie czasowej GMT-0300, i inne wartości dla innych stref
// czasowych, ponieważ argument nie specyfikuje strefy czasowej.
Date.parse("Aug 9, 1995");
```

```js
// Zwraca 807926400000 niezależnie od lokalnej strefy czasowej.
Date.parse("Wed, 09 Aug 1995 00:00:00 GMT");
```

```js
// Zwraca 807937200000 w strefie czasowej GMT-0300, a inne wartości w innych
// strefach czasowych, ponieważ strefa nie jest wyspecyfikowana w argumencie.
Date.parse("Wed, 09 Aug 1995 00:00:00");
```

```js
// Zwraca 0 niezależnie od lokalnej strefy czasowej.
Date.parse("Thu, 01 Jan 1970 00:00:00 GMT");
```

```js
// Zwraca 14400000 w strefie czasowej GMT-0400, a inne wartości w innych
// strefach czasowych, ponieważ strefa nie jest podana w argumencie.
Date.parse("Thu, 01 Jan 1970 00:00:00");
```

```js
// Zwraca 14400000 niezależnie od lokalnej strefy czasowej.
Date.parse("Thu, 01 Jan 1970 00:00:00 GMT-0400");
```

## Zobacz także

- {{jsxref("Date.UTC()")}}
