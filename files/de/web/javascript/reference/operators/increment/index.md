---
title: Inkrement (++)
slug: Web/JavaScript/Reference/Operators/Increment
tags:
  - Inkrement
  - Inkrement-Operator
  - Inkrementieren
translation_of: Web/JavaScript/Reference/Operators/Increment
original_slug: Web/JavaScript/Reference/Operators/Inkrement
---
{{jsSidebar("Operators")}}

Der Inkrement-Operator (++) inkrementiert einen Operanden, addiert also eins hinzu und gibt einen Wert zurück.

{{EmbedInteractiveExample("pages/js/expressions-increment.html")}}

## Syntax

    Operator: x++ or ++x

## Description

Wird der Inkrement-Operator als Postfix benutzt, wobei der Operator hinter dem Operanden steht (z.B. x++), wird der Operand um eins erhöht und der Wert vor dem Inkrementieren zurück gegeben.

Wird der Inkrement-Operator als Prefix benutzt, wobei der Operator vor dem Operanden steht (z.B. ++x), wird der Operand um eins erhöht und der Wert nach dem Inkrementieren zurück gegeben.

## Examples

### Postfix increment

```js
let x = 3;
y = x++;

// y = 3
// x = 4
```

### Prefix increment

```js
let a = 2;
b = ++a;

// a = 3
// b = 3
```

## Specifications

| Specification                                                                                                |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-postfix-increment-operator', 'Increment operator')}} |

## Browser compatibility

{{Compat("javascript.operators.increment")}}

## See also

- [Addition operator](/de/docs/Web/JavaScript/Reference/Operators/Addition)
- [Subtraction operator](/de/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division operator](/de/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplication operator](/de/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Remainder operator](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation operator](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Decrement operator](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation operator](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus operator](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
