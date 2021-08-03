---
title: Décalage binaire à gauche (<<)
slug: Web/JavaScript/Reference/Operators/Left_shift
tags:
  - Bitwise operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.left_shift
---
{{jsSidebar("Operators")}}

L'opérateur de **décalage binaire à gauche (`<<`)** décale la séquence de bits représentée par le premier opérande d'autant de bits vers la gauche que le nombre indiqué par le second opérande. Les bits en excès à gauche sont écartés et des bits à zéro sont introduits à droite.

{{EmbedInteractiveExample("pages/js/expressions-left-shift.html")}}

## Syntaxe

```js
a << b
```

## Description

Cet opérateur décale les bits du premier opérande vers la gauche, d'autant que le nombre indiqué par le second opérande. Les bits qui dépassent à gauche sont abandonnés et des zéros sont introduits à droite.

Ainsi, `9 << 2` donnera la valeur 36 (en base 10) :

```js
       9 (base 10): 00000000000000000000000000001001 (base 2)
                    --------------------------------
  9 << 2 (base 10): 00000000000000000000000000100100 (base 2) = 36 (base 10)
```

Le décalage binaire de tout nombre `x` de `y` bits vers la gauche donnera comme résultat `x * 2 ** y`. Par exemple, `9 << 3` pourra être reformulé en `9 * (2 ** 3) = 9 * (8) = 72`.

## Exemples

### Utiliser le décalage binaire à gauche

```js
9 << 3; // 72

// 9 * (2 ** 3) = 9 * (8) = 72
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les opérateurs binaires dans le guide JavaScript](/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise)
- [L'opérateur de décalage binaire à gauche et d'affectation](/fr/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)
