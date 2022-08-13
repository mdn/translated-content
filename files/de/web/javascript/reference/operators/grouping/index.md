---
title: Gruppierungsoperator
slug: Web/JavaScript/Reference/Operators/Grouping
tags:
  - JavaScript
  - Operator
  - Primary Expressions
translation_of: Web/JavaScript/Reference/Operators/Grouping
---
{{jsSidebar("Operators")}}

Der Gruppierungsoperator `( )` kontrolliert die Priorität beim Auswerten von Ausdrücken.

{{EmbedInteractiveExample("pages/js/expressions-groupingoperator.html")}}

## Syntax

     ( )

## Beschreibung

Der Gruppierungsoperator besteht aus einem runden Klammernpaar um einen Ausdruck oder Teilausdruck, um die normale [Operator Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) zu überschreiben, so dass Ausdrücke mit niedriger Priorität vor Ausdrücken mit hoher Priorität ausgewertet werden können. So wie es klingt, gruppiert dieser Operator alles in den Klammern.

## Beispiele

Überschreiben von Multiplikation und Division zu erst, wenn Addition und Subtraktion als erstes ausgewertet werden sollen.

```js
var a = 1;
var b = 2;
var c = 3;

// normale Priorität
a + b * c     // 7
// wird wie folgt ausgewertet
a + (b * c)   // 7

// überschreiben der Priorität
// Addition vor Multiplikation
(a + b) * c   // 9

// was äquivalent zu folgendem ist
a * c + b * c // 9
```

## Spezifikationen

| Spezifikation                                                                                        | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-grouping-operator', 'The Grouping Operator')}} | {{Spec2('ESDraft')}} |                                                       |
| {{SpecName('ES6', '#sec-grouping-operator', 'The Grouping Operator')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ES5.1', '#sec-11.1.6', 'The Grouping Operator')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES1', '#sec-11.1.4', 'The Grouping Operator')}}                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |

## Browserkompatibilität

{{Compat("javascript.operators.grouping")}}

## Siehe auch

- [Operator Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/typeof", "typeof")}}
