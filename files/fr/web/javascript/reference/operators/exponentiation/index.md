---
title: Exponentiation (**)
slug: Web/JavaScript/Reference/Operators/Exponentiation
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.exponentiation
---
{{jsSidebar("Operators")}}

L'opérateur d'exponentiation (`**`) fournit le résultat obtenu lorsqu'on élève le premier opérande à la puissance indiquée par le second. Il est équivalent `Math.pow` exception faite que cet opérateur permet également d'utiliser des valeurs BigInt comme opérandes.

{{EmbedInteractiveExample("pages/js/expressions-exponentiation.html")}}

## Syntaxe

```js
Opérateur : var1 ** var2
```

## Description

L'opérateur d'exponentiation est associatif à droite : `a ** b ** c` est équivalent à `a ** (b ** c)`.

Pour la plupart des langages possédant un opérateur d'exponentiation (ex. PHP, Python, etc.), l'opérateur d'exponentiation possède une précédence plus élevée que les opérateurs unaires (comme l'addition unaire `+` ou la soustraction unaire `-`). Il existe toutefois quelques exceptions comme Bash, où `**` possède une précédence inférieure à celles des opérateurs unaires.

En JavaScript, il est impossible d'écrire une expression d'exponentiation ambigüe : on ne peut pas placer un opérateur unaire (`+/-/~/!/delete/void/typeof`) avant le nombre servant de base, cela provoquera une exception `SyntaxError`.

```js
-2 ** 2;
// 4 en Bash, -4 pour d'autres langages.
// Invalide en JavaScript car l'opération est ambigüe.

-(2 ** 2);
// -4 en JavaScript, les parenthèses évitent l'ambiguité.
```

Attnetion, certains langages de programmation utilisent l'accent circonflexe <kbd>^</kbd> pour exprimer l'exponentiaion mais JavaScript utilise ce symbole pour [l'opérateur binaire OU exclusif (XOR)](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR).

## Exemples

### Exponentiation simple

```js
2 ** 3   // 8
3 ** 2   // 9
3 ** 2.5 // 15.588457268119896
10 ** -1 // 0.1
NaN ** 2 // NaN
```

### Associativité

```js
2 ** 3 ** 2   // 512
2 ** (3 ** 2) // 512
(2 ** 3) ** 2 // 64
```

### Avec les opérateurs unaires

Pour prendre l'opposé du résultat :

```js
-(2 ** 2) // -4
```

Pour forcer le signe de la base en négatif :

```js
(-2) ** 2 // 4
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Opérateur d'addition](/fr/docs/Web/JavaScript/Reference/Operators/Addition)
- [Opérateur de soustraction](/fr/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Opérateur de multiplication](/fr/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Opérateur de division](/fr/docs/Web/JavaScript/Reference/Operators/Division)
- [Opérateur de reste](/fr/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Opérateur d'incrémentation](/fr/docs/Web/JavaScript/Reference/Operators/Increment)
- [Opérateur de décrémentation](/fr/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Opérateur de négation unaire](/fr/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Opérateur plus unaire](/fr/docs/Web/JavaScript/Reference/Operators/Unary_plus)
