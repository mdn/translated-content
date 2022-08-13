---
title: Modulo (%)
slug: Web/JavaScript/Reference/Operators/Remainder
tags:
  - Division mit Rest
  - Divisionsalgorithmus
  - Restwert
  - Restwertberechnung
translation_of: Web/JavaScript/Reference/Operators/Remainder
original_slug: Web/JavaScript/Reference/Operators/Modulo
---
{{jsSidebar("Operators")}}

Der Modulo-Operator (%) gibt den Restwert zurück, der übrig bleibt wenn ein Operand durch einen anderen geteilt wird. Das Vorzeichen ergibt sich aus der Wahl der Quotienten.

{{EmbedInteractiveExample("pages/js/expressions-remainder.html")}}

## Syntax

    Operator: var1 % var2

## Examples

### Remainder with positive dividend

```js
 12 % 5  //  2
 1 % -2 //  1
 1 % 2  //  1
 2 % 3  //  2
5.5 % 2 // 1.5
```

### Remainder with negative dividend

```js
-12 % 5 // -2
-1 % 2  // -1
-4 % 2  // -0
```

### Remainder with NaN

```js
NaN % 2 // NaN
```

## Specifications

| Specification                                                                                            |
| -------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-multiplicative-operators', 'Remainder operator')}} |

## Browser compatibility

{{Compat("javascript.operators.remainder")}}

## See also

- [Addition operator](/de/docs/Web/JavaScript/Reference/Operators/Addition)
- [Subtraction operator](/de/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division operator](/de/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplication operator](/de/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Exponentiation operator](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment operator](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement operator](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation operator](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus operator](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
