---
title: Error.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Error/toString
tags:
  - JavaScript
  - Metodă
  - Niestandardowy
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Error/toSource
original_slug: Web/JavaScript/Reference/Global_Objects/Error/toSource
---
{{JSRef}} {{non-standard_header}}

Metoda **`toSource()`** zwraca kod, który możemethod returns code that could eval to the same error.

## Składnia

    e.toSource()

### Zwracana wartość

Łańcuch znaków (_string_) zawierający kod źródłowy błędu.

## Przykłady

### Użycie toSource

Wywołanie metody `toSource` instancji {{jsxref("Error")}} (w tym _[NativeErrors](/pl/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types)_) zwróci łańcuch znaków zawierający kod źródłowy błędu. Zwrócony _string_ może być ewaluowany do utworzenia (w przybliżeniu) takiego samego obiektu. Oczywiście ciąg znaków zawierający kod źródłowy jest zgodny ze strukturą konstruktora {{jsxref("Error")}}. Przykładowo:

```js
(newname(message, nazwaPliku, numerLinii))
```

gdzie wymienione atrybuty odpowiadają właściwym własnościom instancji błędu.

> **Uwaga:** należy pamiętać, że własności używanen przez metodę `toSource` podczas tworzenia tego ciągu znaków są modyfikowalne i mogą nie odzwierciedlać dokładnie funkcji użytej do stworzenia instancji błędu lub nazwy pliku czy numeru linii gdzie wystąpił dany błąd.

## Specyfikacje

Nie należy do żadnego standardu.

## Wsparcie przeglądarek

{{Compat("javascript.builtins.Error.toSource")}}

## Zobacz też

- {{jsxref("Error.prototype.fileName")}}
- {{jsxref("Error.prototype.lineNumber")}}
- {{jsxref("Error.prototype.message")}}
- {{jsxref("Error.prototype.name")}}
- {{jsxref("Object.prototype.toSource()")}}
