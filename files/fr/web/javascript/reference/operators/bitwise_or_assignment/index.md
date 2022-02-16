---
title: Affectation après OU binaire (|=)
slug: Web/JavaScript/Reference/Operators/Bitwise_OR_assignment
tags:
  - Assignment operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.bitwise_or_assignment
---
{{jsSidebar("Operators")}}

L'opérateur d'affectation après OU binaire (`|=`) utilise la représentation binaire des deux opérandes et effectue un OU logique entre chaque puis affecte le résultat à la variable représentée par l'opérande gauche.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-or-assignment.html")}}

## Syntaxe

```js
Opérateur : x |= y
Signification :  x = x | y
```

## Exemples

### Utiliser l'affectation après OU binaire

```js
let a = 5;
a |= 2; // 7
// 5: 00000000000000000000000000000101
// 2: 00000000000000000000000000000010
// -----------------------------------
// 7: 00000000000000000000000000000111
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les opérateurs d'affectation dans le guide JavaScript](/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment)
- [L'opérateur OU binaire](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)
- [L'opérateur d'affectation après OU logique (`||=`)](/fr/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)
