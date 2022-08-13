---
title: Date.prototype.toLocaleTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
original_slug: Web/JavaScript/Referencje/Obiekty/Date/toLocaleTimeString
---
{{JSRef}}

## Podsumowanie

Zwraca "czas", porcje daty jako łańcuch znaków, używając aktualnych lokalnych konwersji.

Metoda `toLocaleTimeString` polega na znalezieniu formatu daty w systemie operacyjnym. Konwertuje datę do łańcucha znakowego używając konwencji formatowania systemu operacyjnego, gdzie skrypt jest uruchomiony. Na przykład, w USA, miesiąc pojawia się przed dniem (04/15/98), gdzie w Niemczech data wyświetla miesiąc po dniu (15.04.98). Jeśli system operacyjny nie używa, nie spełnia roku 2000 i nie używa pełnego roku dla lat przed 1900 lub po 2000, `toLocaleTimeString` zwraca łańcuch znakowy, który nie jest uległy wobec roku 2000. `toLocaleTimeString` postępuje podobnie do `toString`, kiedy konwertuje rok, który system operacyjny ma w nie właściwym formacie.

Metody takie jak [`getHours`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Obiekty/Date/getHours), [`getMinutes`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Obiekty/Date/getMinutes) i [`getSeconds`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Obiekty/Date/getSeconds) dają więcej podobnych rezultatów niż `toLocaleTimeString`.

## Składnia

    dateObj.toLocaleTimeString([locales[, options]])

### Parametry

Check the [Browser compatibility](/pl/docs/Web/JavaScript/Referencje/Obiekty/Date/toLocaleTimeString$edit#Browser_Compatibility) section to see which browsers support the `locales` and `options` arguments, and the [Example: Checking for support for `locales` and `options` arguments](/pl/docs/Web/JavaScript/Referencje/Obiekty/Date/toLocaleTimeString$edit#Example:_Checking_for_support_for_locales_and_options_arguments) for feature detection.

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat', 'Parameters')}}

The default value for each date-time component property is {{jsxref("Global_Objects/undefined", "undefined")}}, but if the `hour`, `minute`, `second` properties are all {{jsxref("Global_Objects/undefined", "undefined")}}, then `hour`, `minute`, and `second` are assumed to be `"numeric"`.

## Przykłady

#### Zastosowanie `toLocaleTimeString()`

W następującym przykładzie, `today` jest obiektem `Date` object:

```js
var today = new Date(95,11,18,17,28,35); //miesiące są reprezentowane przez liczby od 0 do 11
today.toLocaleTimeString(); // 17:28:35
```

W tym przykładzie, `toLocaleTimeString` zwraca wartość łańcucha znakowego, która jest podobna do następującej formy. Dokładny format, jaki znajduje się na platformie.

## Zobacz także

- {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
