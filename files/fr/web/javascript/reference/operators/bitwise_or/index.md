---
title: OU binaire (|)
slug: Web/JavaScript/Reference/Operators/Bitwise_OR
---

{{jsSidebar("Operators")}}

L'opérateur OU binaire (`|`) renvoie un nombre dont la représentation binaire est une séquence de bits où il y a un `1` pour chaque position où au moins un des bits des deux opérandes vaut `1`.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-or.html")}}

## Syntaxe

```js
a | b;
```

## Description

Les opérandes sont convertis en entiers sur 32 bits et exprimés comme une séquence de bits. Les nombres sur plus de 32 bits ont leurs bits en excès écartés. Par exemple, l'entier suivant nécessite plus de 32 bits pour être représenté et il sera converti en un entier sur 32 bits :

```plain
Avant:  11100110111110100000000000000110000000000001
Après:              10100000000000000110000000000001
```

Chaque bit du premier opérande est associé avec le bit correspondant du second opérande. Lorsqu'au moins un de ces bit vaut 1, le bit correspondant du résultat sera placé à 1. Le résultat est donc construit binairement.

La table de vérité pour l'opérateur OU est :

| a   | b   | a OU b |
| --- | --- | ------ |
| 0   | 0   | 0      |
| 0   | 1   | 1      |
| 1   | 0   | 1      |
| 1   | 1   | 1      |

```plain
     9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------

14 | 9 (base 10) = 00000000000000000000000000001111 (base 2) = 15 (base 10)
```

Utiliser le OU binaire avec n'importe quel nombre `x` d'une part et `0` renverra toujours `x`.

## Exemples

### Utiliser l'opérateur OU binaire

```js
// 9  (00000000000000000000000000001001)
// 14 (00000000000000000000000000001110)

14 | 9;
// 15 (00000000000000000000000000001111)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les opérateurs binaires dans le guide JavaScript](/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise)
- [L'opérateur ET binaire et d'affectation](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)
