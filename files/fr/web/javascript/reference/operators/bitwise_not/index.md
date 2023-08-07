---
title: NON binaire (~)
slug: Web/JavaScript/Reference/Operators/Bitwise_NOT
---

{{jsSidebar("Operators")}}

L'opérateur binaire NON (`~`) prend l'opposé de chaque bit de son opérande et fournit la valeur ainsi obtenue. À l'instar des autres opérateurs binaires, il convertit son opérande en un entier signé sur 32 bits.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-not.html")}}

## Syntaxe

```js
~a;
```

## Description

L'opérande est converti en un entier signé sur 32 bits. Les nombres avec plus de 32 bits voient leurs bits les plus significatifs être tronqués. Voici un exemple où l'entier qui suit est supérieur à une valeur pouvant être exprimée sur 32 bits : la conversion écrête la valeur pour obtenir un entier signé sur 32 bits :

```plain
Avant : 11100110111110100000000000000110000000000001
Après :             10100000000000000110000000000001
```

Pour former le résultat, chaque bit qui compose l'opérande est inversé.

La table de vérité pour l'opération `NON` est :

| a   | NON a |
| --- | ----- |
| 0   | 1     |
| 1   | 0     |

```js
 9 (base 10) = 00000000000000000000000000001001 (base 2)
               --------------------------------

~9 (base 10) = 11111111111111111111111111110110 (base 2) = -10 (base 10)
```

L'entier signé sur 32 bits est inversé selon [le complément à deux](https://fr.wikipedia.org/wiki/Complément_à_deux). Autrement dit, la présence du bit le plus significatif est utilisée pour exprimer des entiers négatifs.

Appliquer un NON binaire sur n'importe quel nombre `x` fournira la valeur `-(x + 1)`. Ainsi, `~-5` renverra `4`.

Étant donné l'utilisation d'une représentation sur 32 bits, `~-1` et `~4294967295` (2^32 - 1) donneront tous les deux `0`.

## Exemples

### Utiliser le NON binaire

```js
~0; // -1
~-1; // 0
~1; // -2
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les opérateurs binaires dans le guide JavaScript](/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise)
