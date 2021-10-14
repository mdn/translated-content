---
title: Affectation après décalage à gauche (<<=)
slug: Web/JavaScript/Reference/Operators/Left_shift_assignment
tags:
  - Assignment operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.left_shift_assignment
---
{{jsSidebar("Operators")}}

L'opérateur de décalage à gauche et d'affectation (`<<=`) décale la séquence de bits représentée par l'opérande gauche d'autant de bits qu'indiqué par l'opérande droit puis affecte le résultat obtenu à la variable représentée par l'opérande gauche.

{{EmbedInteractiveExample("pages/js/expressions-left-shift-assignment.html")}}

## Syntaxe

```js
Opérateur : x <<= y
Signification :  x   = x << y
```

## Exemples

### Utiliser l'opérateur de décalage à gauche et d'affectation

```js
let a = 5;
// 00000000000000000000000000000101

a <<= 2; // 20
// 00000000000000000000000000010100
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les opérateurs d'affectation dans le guide JavaScript](/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment)
- [L'opérateur de décalage à gauche binaire](/fr/docs/Web/JavaScript/Reference/Operators/Left_shift)
