---
title: Date.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
original_slug: Web/JavaScript/Referencje/Obiekty/Date/toLocaleString
---
{{JSRef}}

## Podsumowanie

Konwertuje datę na łańcuch znakowy, używając aktualnej lokalnej konwersji.

Metoda `toLocaleString` polega na znalezieniu formatu daty w systemie operacyjnym. Konwertuje datę do łańcucha znakowego używając konwencji formatowania systemu operacyjnego, gdzie skrypt jest uruchomiony. Na przykład, w USA, miesiąc pojawia się przed dniem (**04**/15/98), gdzie w Niemczech data wyświetla miesiąc, zaraz po dniu (15.**04**.98). Jeśli system operacyjny nie używa, nie spełnia roku 2000 i nie używa pełnego roku dla lat przed 1900 lub po 2000, `toLocaleString` zwraca łańcuch znakowy, który nie jest uległy wobec roku 2000. `toLocaleString` postępuje podobnie do `toString`, kiedy konwertuje rok, który system operacyjny ma w niewłaściwym formacie.

Metody, takie jak [`getHours`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Obiekty/Date/getHours), [`getMinutes`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Obiekty/Date/getMinutes) i [`getSeconds`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Obiekty/Date/getSeconds) dają więcej przenośnych rezultatów niż `toLocaleString`

## Składnia

    dateObj.toLocaleString([locales[, options]])

### Parametry

Check the [Browser compatibility](/pl/docs/Web/JavaScript/Referencje/Obiekty/Date/toLocaleString$edit#Browser_Compatibility) section to see which browsers support the `locales` and `options` arguments, and the [Example: Checking for support for `locales` and `options` arguments](/pl/docs/Web/JavaScript/Referencje/Obiekty/Date/toLocaleString$edit#Example:_Checking_for_support_for_locales_and_options_arguments) for feature detection.

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat', 'Parameters')}}

The default value for each date-time component property is {{jsxref("Global_Objects/undefined", "undefined")}}, but if the `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second` properties are all {{jsxref("Global_Objects/undefined", "undefined")}}, then `year`, `month`, `day`, `hour`, `minute`, and `second` are assumed to be `"numeric"`.

## Przykłady

### Zastosowanie `toLocaleString()`

W następującym przykładzie, obiekt `today` jest `Date`:

```js
var today = new Date(95,11,18,17,28,35); //miesiące są reprezentowane poprzez liczby od 0 do 11
today.toLocaleString(); // 12/18/95 17:28:35
```

W tym przykładzie, `toLocaleString` zwraca łańcuch znaków, który jest podobny do następującej formy. Dokładnie to taki format, jaki jest w systemie.

## Zobacz także

- {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
