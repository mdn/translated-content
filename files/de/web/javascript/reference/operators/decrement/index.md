---
title: Dekrement (--)
slug: Web/JavaScript/Reference/Operators/Decrement
tags:
  - Dekrement
  - Dekrement-Operator
  - Dekrementieren
translation_of: Web/JavaScript/Reference/Operators/Decrement
original_slug: Web/JavaScript/Reference/Operators/Dekrement
---
{{jsSidebar("Operators")}}

Der Dekrement-Operator (--) dekrementiert den Operanden um eins, zieht als eins vom Operanden ab und gibt einen Wert zurück.

{{EmbedInteractiveExample("pages/js/expressions-decrement.html")}}

## Syntax

    Operator: x-- or --x

## Description

Wenn der Dekrement-Operator als Postfix benutzt wird, also der Operator hinter dem Operanden steht (z.B. x--), wird der Operand um eins reduziert aber der Wert vor dem Dekrementieren zurückgegeben.

Wird der Dekrement-Operator als Präfix genutzt, steht also der Operator vor dem Operanden (z. B. --x), wird der Operator um eins reduziert und der Wert nach dieser Dekrementierung zurückgegeben.

## Examples

### Postfix decrement

```js
let x = 3;
y = x--;

// y = 3
// x = 2
```

### Prefix decrement

```js
let a = 2;
b = --a;

// a = 1
// b = 1
```

## Specifications

| Specification                                                                                                |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-postfix-decrement-operator', 'Decrement operator')}} |

## Browser compatibility

{{Compat("javascript.operators.decrement")}}

## See also

- [Addition operator](/de/docs/Web/JavaScript/Reference/Operators/Addition)
- [Subtraction operator](/de/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division operator](/de/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplication operator](/de/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Remainder operator](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation operator](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment operator](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Unary negation operator](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus operator](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
