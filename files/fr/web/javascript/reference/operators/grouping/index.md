---
title: Opérateur de groupement
slug: Web/JavaScript/Reference/Operators/Grouping
tags:
  - JavaScript
  - Operator
  - Primary Expressions
translation_of: Web/JavaScript/Reference/Operators/Grouping
original_slug: Web/JavaScript/Reference/Opérateurs/Groupement
---
{{jsSidebar("Operators")}}

L'opérateur de groupement `( )` contrôle la précédence de l'évaluation dans les expressions.

{{EmbedInteractiveExample("pages/js/expressions-groupingoperator.html")}}

## Syntaxe

```js
( )
```

## Description

L'opérateur de groupement consiste en une paire de parenthèses encadrant une expression et permettant de surcharger la [précédence normale des opérateurs](/fr/docs/JavaScript/Reference/Operateurs/Précédence_des_opérateurs) afin que les expressions dont la précédence est plus basse soient évaluées avant.

## Exemples

Normalement, la multiplication et la division sont prises en compte avant l'addition et la soustraction. On peut changer ce comportement avec l'opérateur de groupement.

```js
var a = 1;
var b = 2;
var c = 3;

// précédence normale
a + b * c     // 7
// l'évaluation est effectuée de cette façon
a + (b * c)   // 7

// précédence surchargée avec le groupement
// on additionne avant de multiplier
(a + b) * c   // 9

// mathématiquement, cela est équivalent à
a * c + b * c // 9
```

## Spécifications

| Spécification                                                                                        | Statut                       | Commentaires                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-grouping-operator', 'The Grouping Operator')}} | {{Spec2('ESDraft')}} |                                                       |
| {{SpecName('ES6', '#sec-grouping-operator', 'L\'opérateur de groupement')}} | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ES5.1', '#sec-11.1.6', 'L\'opérateur de groupement')}}             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES1', '#sec-11.1.4','L\'opérateur de groupement')}}                 | {{Spec2('ES1')}}         | Définition initiale, implémentée avec JavaScript 1.0. |

## Compatibilité des navigateurs

{{Compat("javascript.operators.grouping")}}

## Voir aussi

- [Précédence des opérators](/fr/docs/JavaScript/Reference/Operateurs/Précédence_des_opérateurs)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/typeof", "typeof")}}
