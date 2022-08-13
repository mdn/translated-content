---
title: Addition (+)
slug: Web/JavaScript/Reference/Operators/Addition
tags:
  - JavaScript
  - Operator
  - Referenz
  - Sprachfeature
translation_of: Web/JavaScript/Reference/Operators/Addition
---
{{jsSidebar("Operators")}}

Der Addition-Operator (`+`) erzeugt die Summe nummerischer Operanden oder setzt Zeichenketten zusammen.

{{EmbedInteractiveExample("pages/js/expressions-addition.html")}}

## Syntax

    Operator: x + y

## Beispiele

### Nummerische Addition (Summe)

```js
// Nummer + Nummer -> Addition (Summe)
1 + 2 // 3

// Boolean + Nummer -> Addition (Summe, da true = 1)
true + 1 // 2

// Boolean + Boolean -> Addition (Summe, da false = 0)
false + false // 0
```

### Zeichenkettenzusammensetzung

```js
// String (Zeichenkette) + String (Zeichenkette) -> Zusammensetzung
'foo' + 'bar' // "foobar"

// Nummer + String (Zeichenkette) -> Zusammensetzung
5 + 'foo' // "5foo"

// String (Zeichenkette) + Boolean -> Zusammensetzung
'foo' + false // "foofalse"
```

## Spezifikationen

| Spezifikation                                                                                        |
| ---------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-addition-operator-plus', 'Addition Operator')}} |

## Browserkompatibilität

{{Compat("javascript.operators.addition")}}

## Siehe auch

- [Subtraktion-Operator](/de/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division-Operator](/de/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplikation-Operator](/de/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Rest-Operator](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Potenzierung-Operator](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Inkrement (Erhöhung) Operator](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Dekrement (Verringern) Operator](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Einstellige Negation Operator](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Einstelliger Plus operator](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
