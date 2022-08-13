---
title: Error.prototype.lineNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/lineNumber
tags:
  - JavaScript
  - Prototyp
  - Prototype
  - Referencja
  - Własność
  - niestandardowe
translation_of: Web/JavaScript/Reference/Global_Objects/Error/lineNumber
original_slug: Web/JavaScript/Referencje/Obiekty/Error/lineNumber
---
{{JSRef}} {{non-standard_header}}

Właściwość **`lineNumber`** zawiera numer linii w pliku, gdzie pojawił się błąd.

## Przykłady

### Użycie `lineNumber`

```js
var e = new Error('Błąd przy parsowaniu wejścia');
throw e;
console.log(e.lineNumber) // 2
```

### Alternatywny przykład użycia zdarzenia `error`

```js
window.addEventListener('error', function(e) {
  console.log(e.lineNumber); // 5
});
var e = new Error('Błąd przy parsowaniu wejścia');
throw e;
```

Własność `lineNumber` jest niestandardowa i nie posiada szerokiego wsparcia – zobacz tabelę opisującą wsparcie przeglądarek dla tej własności.

## Specyfikacje

Nie jest częścią żadnego standardu.

## Wsparcie przeglądarek

{{Compat("javascript.builtins.Error.lineNumber")}}

## Zobacz też

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.columnNumber")}}
- {{jsxref("Error.prototype.fileName")}}
