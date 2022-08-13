---
title: 'SyntaxError: Unexpected token'
slug: Web/JavaScript/Reference/Errors/Unexpected_token
tags:
  - Fehler
  - JavaScript
  - Syntaxfehler
translation_of: Web/JavaScript/Reference/Errors/Unexpected_token
original_slug: Web/JavaScript/Reference/Fehler/Unexpected_token
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    SyntaxError: expected expression, got "x"
    SyntaxError: expected property name, got "x"
    SyntaxError: expected target, got "x"
    SyntaxError: expected rest argument name, got "x"
    SyntaxError: expected closing parenthesis, got "x"
    SyntaxError: expected '=>' after argument list, got "x"

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist falsch gelaufen?

Es wurde eine bestimmte Sprachenstruktur erwartet, aber etwas anderes wurde übermittelt. Es kann sich dabei um einen einfachen Tippfehler handeln.

## Beispiele

### Expression expected (Ausdruck erwartet)

Zum Beispiel sind Kommas am Ende eines Befehls nicht erlaubt.

```js example-bad
for (let i = 0; i < 5,; i++) {
  console.log(i);
}
// SyntaxError: expected expression, got ')'
```

Richtig wäre das Komma auszulassen oder ein weiteren Ausdruck hinzuzufügen:

```js example-good
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```
