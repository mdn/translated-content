---
title: Affectation après ET binaire (&=)
slug: Web/JavaScript/Reference/Operators/Bitwise_AND_assignment
tags:
  - Assignment operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.bitwise_and_assignment
---
{{jsSidebar("Operators")}}

L'opérateur d'affectation après ET binaire (`&=`) utilise la représentation binaire des deux opérandes, applique un ET logique entre chaque puis affecte le résultat de l'opération à la variable représentée par l'opérande gauche.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-and-assignment.html")}}

## Syntaxe

```js
Opérateur : x &= y
Signification :  x  = x & y
```

## Exemples

### Utiliser l'affectation après ET binaire

```js
let a = 5;
// 5:     00000000000000000000000000000101
// 2:     00000000000000000000000000000010
a &= 2; // 0
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les opérateurs d'affectation dans le guide JavaScript](/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment)
- [L'opérateur ET binaire](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)
