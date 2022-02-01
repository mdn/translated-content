---
title: Affectation après décalage à droite non signé (>>>=)
slug: Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment
tags:
  - Assignment operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.unsigned_right_shift_assignment
---
{{jsSidebar("Operators")}}

L'opérateur de décalage à droite non signé et d'affectation (_`>>>=`_) décale la séquence de bits fournie par l'opérande gauche vers la droite, d'autant de bits qu'indiqués par l'opérande droit, puis affecte le résultat de l'opération à la variable indiquée par l'opérande gauche.

{{EmbedInteractiveExample("pages/js/expressions-unsigned-right-shift-assignment.html")}}

## Syntax

```js
Opérateur : x >>>= y
Signification :  x    = x >>> y
```

## Exemples

### Utiliser l'opérateur de décalage à droite non signé et d'affectation

```js
let a = 5; //   (00000000000000000000000000000101)
a >>>= 2;  // 1 (00000000000000000000000000000001)

let b = -5; // (-00000000000000000000000000000101)
b >>>= 2;   // 1073741822 (00111111111111111111111111111110)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les opérateurs d'affectation dans le guide JavaScript](/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment)
- [L'opérateur de décalage à droite](/fr/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)
