---
title: 'RangeError: invalid date'
slug: Web/JavaScript/Reference/Errors/Invalid_date
tags:
  - Błąd
  - Error
  - JavaScript
  - RangeError
translation_of: Web/JavaScript/Reference/Errors/Invalid_date
---
{{jsSidebar("Errors")}}

Wyjątek JavaScript „invalid date” (_niewłaściwa data_) zdarza się, gdy ciąg znaków zawierający niepoprawną datę jest przekazany do {{jsxref("Date")}} lub {{jsxref("Date.parse()")}}.

## Wiadomość

    RangeError: invalid date (Edge)
    RangeError: invalid date (Firefox)
    RangeError: invalid time value (Chrome)
    RangeError: Provided date is not in valid range (Chrome)

## Rodzaj błędu

{{jsxref("RangeError")}}

## Co poszło nie tak?

Ciąg znaków przekazany do {{jsxref("Date")}} lub {{jsxref("Date.parse()")}} prowadzi do niepoprawnej daty.

## Przykłady

### Niepoprawne przypadki

Ciągi znaków, w których nie można rozpoznać daty, lub które zawierają elementy niezgodne ze standardem ISO w większości przypadków spowodują zwrócenie {{jsxref("NaN")}}. Jednakże — w zależności od implementacji — niektóre wartości niezgodne z formatem ISO mogą także spowodować błąd `RangeError: invalid date`, tak jak następujące przypadki w przeglądarce Firefox:

```js example-bad
new Date('foo-bar 2014');
new Date('2014-25-23').toISOString();
new Date('foo-bar 2014').toString();
```

Jednocześnie poniższy przykład zwróci w Firefoksie wartość {{jsxref("NaN")}}:

```js example-bad
Date.parse('foo-bar 2014'); // NaN
```

Więcej szczegółów znajduje się w dokumentacji {{jsxref("Date.parse()")}}.

### Poprawne przypadki

```js example-good
new Date('05 October 2011 14:48 UTC');
new Date(1317826080); // Timestamp Unix dla daty 5 października 2011 14:48:00 UTC
```

## Zobacz też

- {{jsxref("Date")}}
- {{jsxref("Date.prototype.parse()")}}
- {{jsxref("Date.prototype.toISOString()")}}
