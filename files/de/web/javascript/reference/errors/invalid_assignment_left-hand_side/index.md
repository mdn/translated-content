---
title: 'ReferenceError: invalid assignment left-hand side'
slug: Web/JavaScript/Reference/Errors/Invalid_assignment_left-hand_side
tags:
  - Errors
  - JavaScript
  - ReferenceError
translation_of: Web/JavaScript/Reference/Errors/Invalid_assignment_left-hand_side
original_slug: Web/JavaScript/Reference/Fehler/Invalid_assignment_left-hand_side
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    ReferenceError: invalid assignment left-hand side

## Fehlertyp

{{jsxref("ReferenceError")}}.

## Was ist falsch gelaufen?

Es gibt irgendwo eine unerwartete Zuweisung. Das kann zum Beispiel durch eine nicht Übereinstimmung des [Zuweisungsoperators](/de/docs/Web/JavaScript/Reference/Operators/Assignment_Operators) und eines [Vergleichsoperators](/de/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) hervorgerufen werden. Während ein einzelnes "`=`" Zeichen einer Variable einen Wert zuweist, vergleichen "`==`" und "`===`" zwei Werte.

## Beispiele

```js example-bad
if (Math.PI = 3 || Math.PI = 4) {
  console.log('no way!');
}
// ReferenceError: invalid assignment left-hand side

var str = 'Hello, '
+= 'is it me '
+= 'you\'re looking for?';
// ReferenceError: invalid assignment left-hand side
```

In dem `if` Statement wird ein Vergleichsoperator ("==") und für die Stringverkettung ein plus ("+") Operator benötigt.

```js example-good
if (Math.PI == 3 || Math.PI == 4) {
  console.log('no way!');
}

var str = 'Hello, '
+ 'from the '
+ 'other side!';
```

## Siehe auch

- [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)
- [Vergleichsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
