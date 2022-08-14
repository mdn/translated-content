---
title: Operator grupowania
slug: Web/JavaScript/Reference/Operators/Grouping
tags:
  - JavaScript
  - Operator
translation_of: Web/JavaScript/Reference/Operators/Grouping
original_slug: Web/JavaScript/Referencje/Operatory/Grouping
---
{{jsSidebar("Operators")}}

Operator grupowania `( )` pozwala na określenie kolejności wykonywania działań w wyrażeniach.

{{EmbedInteractiveExample("pages/js/expressions-groupingoperator.html")}}

## Składnia

     ( )

## Opis

Operator grupowania składa się z pary nawiasów otaczających wyrażenie lub podwyrażenie. Pozwala na nadpisanie standardowego [pierwszeństwa operatorów](/pl/docs/Web/JavaScript/Referencje/Operatory/Pierwsze%C5%84stwo_operator%C3%B3w), tak że wyrażenia z niższym piorytetem mogą być wykonane przed wyrażeniami z wyższym priorytetem. Zgodnie z nazwą, operator ten grupuje wyrażenia znajdujące się w nawiasach.

## Przykłady

Nadpisanie zasady wykonywania mnożenia i dzielenia przed dodawaniem i odejmowaniem w taki sposób, by dodawanie wykonane było jako pierwsze.

```js
var a = 1;
var b = 2;
var c = 3;

// domyślna kolejność
a + b * c     // 7
// wykonywana domyślnie w taki sposób
a + (b * c)   // 7

// zmiana kolejności wykonywania działań
// dodawanie przed mnożeniem
(a + b) * c   // 9

// co odpowiada wyrażeniu
a * c + b * c // 9
```

## Specyfikacje

| Specification                                                                                        | Status                       | Comment                                            |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-grouping-operator', 'The Grouping Operator')}} | {{Spec2('ESDraft')}} |                                                    |
| {{SpecName('ES6', '#sec-grouping-operator', 'The Grouping Operator')}}         | {{Spec2('ES6')}}         |                                                    |
| {{SpecName('ES5.1', '#sec-11.1.6', 'The Grouping Operator')}}                     | {{Spec2('ES5.1')}}     |                                                    |
| {{SpecName('ES1', '#sec-11.1.4', 'The Grouping Operator')}}                     | {{Spec2('ES1')}}         | Initial definition. Implemented in JavaScript 1.0. |

## Wsparcie przeglądarek

{{Compat("javascript.operators.grouping")}}

## Zobacz też

- [Pierwszeństwo operatorów](/pl/docs/Web/JavaScript/Referencje/Operatory/Pierwsze%C5%84stwo_operator%C3%B3w)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/typeof", "typeof")}}
