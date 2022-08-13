---
title: 'ReferenceError: can''t access lexical declaration`X'' before initialization'
slug: Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init
tags:
  - Errors
  - JavaScript
  - ReferenceError
translation_of: Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init
original_slug: Web/JavaScript/Reference/Fehler/Cant_access_lexical_declaration_before_init
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    ReferenceError: can't access lexical declaration `X' before initialization (Firefox)
    ReferenceError: 'x' is not defined (Chrome)

## Fehlertyp

{{jsxref("ReferenceError")}}

## Was ist falsch gelaufen?

Auf eine lexikalische Variable wurde zugegriffen bevor sie deklariert wurde. Das passiert in Blockstatements, in denen auf [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) Variablen zugegriffen wird, bevor sie definiert wurden.

## Beispiele

### Falsche Fälle

In diesem Fall wird die Variable "foo" in einem Blockstatement mit `let` neu deklariert.

```js example-bad
function test() {
  let foo = 33;
  if (true) {
    let foo = (foo + 55);
    // ReferenceError: can't access lexical
    // declaration `foo' before initialization
  }
}
test();
```

### Richtige Fälle

Um "foo" im if-Statement zu ändern, muss `let` entfernt werden, welche die Neudeklaration verursacht.

```js example-good
function test(){
   let foo = 33;
   if (true) {
      foo = (foo + 55);
   }
}
test();
```

## Siehe auch

- [Temporal Dead Zone and errors with let](/de/docs/Web/JavaScript/Reference/Statements/let#Zeitweilig_tote_Zonen_und_Fehler_mit_let)
