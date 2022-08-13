---
title: Error.prototype.fileName
slug: Web/JavaScript/Reference/Global_Objects/Error/fileName
tags:
  - JavaScript
  - Prototyp
  - Prototype
  - Właściwość
  - niestandardowe
translation_of: Web/JavaScript/Reference/Global_Objects/Error/fileName
original_slug: Web/JavaScript/Referencje/Obiekty/Error/fileName
---
{{JSRef}} {{non-standard_header}}

Właściwość **`fileName`** zawiera ścieżkę do pliku, który spowodował błąd.

## Opis

Ta nieopisana w żadnym standardzie właściwość zawiera ścieżkę do pliku, który spowodował błąd. Jeśli jest wywoływana z kontekstu debuggera, jak na przykład Firefox Developer Tools, zwracana jest wartość "debugger eval code".

## Przykłady

### Użycie `fileName`

```js
var e = new Error('Błąd przy parsowaniu wejścia');
throw e;
// wartość e.fileName powinna być czymś podobnym do "file:///C:/example.html"
```

## Specyfikacje

Nie jest częścią żadnego standardu.

## Wsparcie przeglądarek

{{Compat("javascript.builtins.Error.fileName")}}

## Zobacz też

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.columnNumber")}}
- {{jsxref("Error.prototype.lineNumber")}}
