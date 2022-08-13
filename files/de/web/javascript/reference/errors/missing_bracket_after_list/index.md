---
title: 'SyntaxError: missing ] after element list'
slug: Web/JavaScript/Reference/Errors/Missing_bracket_after_list
tags:
  - Errors
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_bracket_after_list
original_slug: Web/JavaScript/Reference/Fehler/Missing_bracket_after_list
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    SyntaxError: missing ] after element list

## Fehlertyp

{{jsxref("SyntaxError")}}.

## Was ist falsch gelaufen?

Der Syntax der Array-Initialisierung enthält einen Fehler. Wahrscheinlich fehlt eine schließende eckige Klammer ("`]`") oder ein Komma ("`,`").

## Beispiele

### Unvollständige Arrayinitialisierung

```js example-bad
var list = [1, 2,

var instruments = [
  'Ukulele',
  'Guitar',
  'Piano'
};

var data = [{foo: 'bar'} {bar: 'foo'}];
```

Richtig wäre:

```js example-good
var list = [1, 2];

var instruments = [
 'Ukulele',
 'Guitar',
 'Piano'
];

var data = [{foo: 'bar'}, {bar: 'foo'}];
```

## Siehe auch

- {{jsxref("Array")}}
