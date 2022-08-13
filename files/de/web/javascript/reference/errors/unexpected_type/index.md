---
title: 'TypeError: "x" is (not) "y"'
slug: Web/JavaScript/Reference/Errors/Unexpected_type
tags:
  - Errors
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Unexpected_type
original_slug: Web/JavaScript/Reference/Fehler/Unexpected_type
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    TypeError: "x" is (not) "y"

    Examples:
    TypeError: "x" is undefined
    TypeError: "x" is null
    TypeError: "undefined" is not an object
    TypeError: "x" is not an object or null
    TypeError: "x" is not a symbol

## Fehlertyp

{{jsxref("TypeError")}}.

## Was ist falsch gelaufen?

Der Typ einer Variable ist unpassend. Dieser Fall tritt oft bei {{jsxref("undefined")}}- oder {{jsxref("null")}}-Werten auf.

Außerdem benötigen bestimmte Metodhen wie {{jsxref("Object.create()")}} oder {{jsxref("Symbol.keyFor()")}} einen bestimmten Typ, der bereitgestellt werden muss.

## Beispiele

### Ungültige Fälle

```js example-bad
// Undefinierte und null-Fälle, bei denen die Substring-Methode nicht funktioniert
var foo = ;
foo.substring(1); // TypeError: foo is undefined

var foo = null;
foo.substring(1); // TypeError: foo is null


// Bestimmte Methoden erfordern einen bestimmten Typ
var foo = {}
Symbol.keyFor(foo); // TypeError: foo is not a symbol

var foo = 'bar'
Object.create(foo); // TypeError: "foo" is not an object or null
```

### Den Fehler beheben?

Um den Nullzeiger auf `undefined`- oder `null`-Werte zu beheben, kann z. B. der "typeof"-Operator verwendt werden.

```js
if (typeof foo !== 'undefined') {
  // Nun wissen wir, dass foo definiert ist, und können weitermachen.
}
```

## Siehe auch

- {{jsxref("undefined")}}
- {{jsxref("null")}}
