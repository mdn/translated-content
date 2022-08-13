---
title: SyntaxError
slug: Web/JavaScript/Reference/Global_Objects/SyntaxError
tags:
  - Błąd składniowy
  - JavaScript
  - Klasa
  - Obiekt
  - Referencja
  - SyntaxError
translation_of: Web/JavaScript/Reference/Global_Objects/SyntaxError
original_slug: Web/JavaScript/Referencje/Obiekty/SyntaxError
---
{{JSRef}}

Obiekt **`SyntaxError`** reprezentuje błąd przy próbie interpretacji kodu niepoprawnego pod względem składni. Jest wyrzucany wtedy, gdy silnik JavaScript podczas interpretacji kodu napotyka znak lub ciąg znaków niezgodny ze składnią języka.

## Konstruktor

- [`SyntaxError()`](/pl/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError/SyntaxError)
  - : Tworzy nowy obiekt `SyntaxError`.

## Właściwości instancji

- {{jsxref("Error.prototype.message", "SyntaxError.prototype.message")}}
  - : Wiadomość błędu. Chociaż ECMA-262 mówi, że {{jsxref("SyntaxError")}} powinien dostarczać własną właściwość `message`, w [SpiderMonkey](/pl/docs/Mozilla/Projects/SpiderMonkey) jest ona dziedziczona z {{jsxref("Error.prototype.message")}}.
- {{jsxref("Error.prototype.name", "SyntaxError.prototype.name")}}
  - : Nazwa błędu. Odziedziczone z {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "SyntaxError.prototype.fileName")}}
  - : Ścieżka do pliku zawierającego błąd. Odziedziczone z {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "SyntaxError.prototype.lineNumber")}}
  - : Numer zawierającej błąd linii w pliku. Odziedziczone z {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "SyntaxError.prototype.columnNumber")}}
  - : Numer zawierającej błąd kolumny w linii kodu. Odziedziczone z {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "SyntaxError.prototype.stack")}}
  - : Stos wywołań. Odziedziczone z {{jsxref("Error")}}.

## Przykłady

### Obsługa `SyntaxError`

```js
try {
  eval('hoo bar');
} catch (e) {
  console.error(e instanceof SyntaxError);
  console.error(e.message);
  console.error(e.name);
  console.error(e.fileName);
  console.error(e.lineNumber);
  console.error(e.columnNumber);
  console.error(e.stack);
}
```

### Tworzenie `SyntaxError`

```js
try {
  throw new SyntaxError('Hej', 'jakisPlik.js', 10);
} catch (e) {
  console.error(e instanceof SyntaxError); // true
  console.error(e.message);                // Hej
  console.error(e.name);                   // SyntaxError
  console.error(e.fileName);               // jakisPlik.js
  console.error(e.lineNumber);             // 10
  console.error(e.columnNumber);           // 0
  console.error(e.stack);                  // @debugger eval code:3:9
}
```

## Specyfikacje

| Specyfikacja                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-native-error-types-used-in-this-standard-syntaxerror', 'SyntaxError')}} |

## Wsparcie przeglądarek

{{Compat("javascript.builtins.SyntaxError")}}

## Zobacz też

- {{jsxref("Error")}}
