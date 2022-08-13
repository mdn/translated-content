---
title: 'TypeError: invalid ''instanceof'' operand ''x'''
slug: Web/JavaScript/Reference/Errors/invalid_right_hand_side_instanceof_operand
tags:
  - Error
  - Errors
  - JavaScript
  - Reference
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/invalid_right_hand_side_instanceof_operand
original_slug: Web/JavaScript/Reference/Fehler/invalid_right_hand_side_instanceof_operand
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    TypeError: invalid 'instanceof' operand "x" (Firefox)
    TypeError: "x" is not a function (Firefox)
    TypeError: Right-hand side of 'instanceof' is not an object (Chrome)
    TypeError: Right-hand side of 'instanceof' is not callable (Chrome)

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist falsch gelaufen?

Der [`instanceof` Operator](/de/docs/Web/JavaScript/Reference/Operators/instanceof) erwartet als rechten Operand einen Konstruktorobjekt, z. B. ein Objekt, welches eine `prototype` Eigenschaft hat und aufrufbar ist.

## Beispiele

```js example-bad
"test" instanceof ""; // TypeError: invalid 'instanceof' operand ""
42 instanceof 0;      // TypeError: invalid 'instanceof' operand 0

function Foo() {}
var f = Foo();        // Foo() is called and returns undefined
var x = new Foo();

x instanceof f;       // TypeError: invalid 'instanceof' operand f
x instanceof x;       // TypeError: x is not a function
```

Um diesen Fehler zu beheben, kann entweder der [`instanceof` Operator](/de/docs/Web/JavaScript/Reference/Operators/instanceof) durch einen [`typeof` Operator](/de/docs/Web/JavaScript/Reference/Operators/typeof) ersetzt werden, oder man muss sicher stellen, dass ein Funktionsname statt einem Resultat seines Aufrufes benutzt werden.

```js example-good
typeof "test" == "string"; // true
typeof 42 == "number"      // true

function Foo() {}
var f = Foo;               // Do not call Foo.
var x = new Foo();

x instanceof f;            // true
x instanceof Foo;          // true
```

## Siehe auch

- [`instanceof` Operator](/de/docs/Web/JavaScript/Reference/Operators/instanceof)
- [`typeof` Operator](/de/docs/Web/JavaScript/Reference/Operators/typeof)
