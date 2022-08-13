---
title: EvalError
slug: Web/JavaScript/Reference/Global_Objects/EvalError
tags:
  - EvalError
  - JavaScript
  - Klasa
  - Obiekt
  - Referencja
translation_of: Web/JavaScript/Reference/Global_Objects/EvalError
original_slug: Web/JavaScript/Referencje/Obiekty/EvalError
---
{{JSRef}}

Obiekt **`EvalError`** wskazuje na błąd dotyczący globalnej funkcji {{jsxref("Global_Objects/eval", "eval()")}}. Ten wyjątek nie jest już wywoływany przez JavaScript, jednak obiekt `EvalError` został zachowany ze względu na kompatybilność wsteczną.

## Konstruktor

- [`EvalError()`](/pl/docs/Web/JavaScript/Reference/Global_Objects/EvalError/EvalError)
  - : Tworzy nowy obiekt `EvalError`.

## Własności instancji

- {{jsxref("Error.prototype.message", "EvalError.prototype.message")}}
  - : Treść błędu. Choć ECMA-262 określa, że {{jsxref("EvalError")}} powinien mieć swoją własną wartość `message`, w [SpiderMonkey](/pl/docs/Mozilla/Projects/SpiderMonkey) jest ona dziedziczona z {{jsxref("Error.prototype.message")}}.
- {{jsxref("Error.prototype.name", "EvalError.prototype.name")}}
  - : Nazwa błędu. Dziedziczone z {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "EvalError.prototype.fileName")}}
  - : Ścieżka do pliku, w którym został wywołany błąd. Dziedziczone z {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "EvalError.prototype.lineNumber")}}
  - : Numer linii w pliku, gdzie został wywołany błąd. Dziedziczone z {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "EvalError.prototype.columnNumber")}}
  - : Kolumna w linii, gdzie został wywołany błąd. Dziedziczone z {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "EvalError.prototype.stack")}}
  - : Stos wywołań. Dziedziczone z {{jsxref("Error")}}.

## Przykłady

`EvalError` nie jest używany w obecnej specyfikacji ECMAScript, zatem nie będzie wywoływany podczas wykonania programu – jednakże sam obiekt został zachowany ze względu na wsteczną kompatybilność z wcześniejszymi wersjami specyfikacji.

### Tworzenie EvalError

```js
try {
  throw new EvalError('Hello', 'someFile.js', 10);
} catch (e) {
  console.log(e instanceof EvalError); // true
  console.log(e.message);              // "Hello"
  console.log(e.name);                 // "EvalError"
  console.log(e.fileName);             // "someFile.js"
  console.log(e.lineNumber);           // 10
  console.log(e.columnNumber);         // 0
  console.log(e.stack);                // "@Scratchpad/2:2:9\n"
}
```

## Specyfikacje

| Specyfikacja                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-native-error-types-used-in-this-standard-evalerror', 'EvalError')}} |

## Wsparcie przeglądarek

{{Compat("javascript.builtins.EvalError")}}

## Zobacz też

- {{jsxref("Error")}}
- {{jsxref("Global_Objects/eval", "eval()")}}
