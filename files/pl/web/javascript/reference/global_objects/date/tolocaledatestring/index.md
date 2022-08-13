---
title: Date.prototype.toLocaleDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
original_slug: Web/JavaScript/Referencje/Obiekty/Date/toLocaleDateString
---
{{JSRef}}

## Podsumowanie

Zwraca "date", porcje daty jako łańcuch znaków, używając aktualnych lokalnych konwersji.

Metoda `toLocaleDateString` polega na znalezieniu formatu daty w systemie operacyjnym. Konwertuje datę do łańcucha znakowego używając konwencji formatowania systemu operacyjnego, gdzie skrypt jest uruchomiony. Na przykład, w USA, miesiąc pojawia się przed dniem (04/15/98), gdzie w Niemczech data wyświetla miesiąc po dniu (15.04.98). Jeśli system operacyjny nie używa, nie spełnia roku 2000 i nie używa pełnego roku dla lat przed 1900 lub po 2000, `toLocaleDateString` zwraca łańcuch znakowy, który nie jest uległy wobec roku 2000. `toLocaleDateString` postępuje podobnie do `toString`, kiedy konwertuje rok, który system operacyjny ma w niewłaściwym formacie.

Metody takie jak [`getHours`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Obiekty/Date/getHours), [`getMinutes`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Obiekty/Date/getMinutes) i [`getSeconds`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Obiekty/Date/getSeconds) dają więcej przenośnych rezultatów niż `toLocaleDateString`.

## Składnia

    dateObj.toLocaleDateString([locales [, options]])

### Parametry

Check the [Browser compatibility](#browser_compatibility) section to see which browsers support the `locales` and `options` arguments, and the [Example: Checking for support for `locales` and `options` arguments](/pl/docs/Web/JavaScript/Referencje/Obiekty/Date/toLocaleDateString$edit#Example:_Checking_for_support_for_locales_and_options_arguments) for feature detection.

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat', 'Parameters')}}

The default value for each date-time component property is {{jsxref("Global_Objects/undefined", "undefined")}}, but if the `weekday`, `year`, `month`, `day` properties are all {{jsxref("Global_Objects/undefined", "undefined")}}, then `year`, `month`, and `day` are assumed to be `"numeric"`.

## Przykłady

### Przykład: Zastosowanie `toLocaleDateString()`

Następujący przykład `today` jest obiektem `Date`:

```js
var today = new Date(95,11,18,17,28,35) //miesiąc jest reprezentowany przez liczby od 0 do 11
today.toLocaleDateString()
```

W tym przykładzie, `toLocaleDateString` zwraca łańcuch znakowy, który jest podobny do poniższej formy. Dokładny format, jaki znajduje się na platformie.

    12/18/95

## Zobacz także

- {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
