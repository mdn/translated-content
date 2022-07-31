---
title: ET binaire (&)
slug: Web/JavaScript/Reference/Operators/Bitwise_AND
tags:
  - Bitwise operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.bitwise_and
---
{{jsSidebar("Operators")}}

L'opérateur ET binaire (`&`) renvoie un nombre dont la représentation binaire est une séquence de bits où il y a un `1` pour chaque position où les bits des deux opérandes valent `1`.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-and.html")}}

## Syntaxe

```js
a & b
```

## Description

Les opérandes sont convertis en entiers sur 32 bits et exprimés comme une séquence de bits. Les nombres sur plus de 32 bits ont leurs bits en excès écartés. Par exemple, l'entier suivant nécessite plus de 32 bits pour être représenté et il sera converti en un entier sur 32 bits :

```js
Avant:  11100110111110100000000000000110000000000001
Après:              10100000000000000110000000000001
```

Chaque bit du premier opérande est associé avec le bit correspondant du second opérande. Lorsque les deux valent 1, le bit correspondant du résultat sera placé à 1. Le résultat est donc construit binairement.

La table de vérité pour l'opérateur ET est :

| a   | b   | a ET b |
| --- | --- | ------ |
| 0   | 0   | 0      |
| 0   | 1   | 0      |
| 1   | 0   | 0      |
| 1   | 1   | 1      |

```js
     9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 & 9 (base 10) = 00000000000000000000000000001000 (base 2) = 8 (base 10)
```

Utiliser un ET binaire sur n'importe quel nombre `x` d'une part et `0` d'autre part renverra `0`.

## Exemples

### Utiliser l'opérateur ET binaire

```js
// 5: 00000000000000000000000000000101
// 2: 00000000000000000000000000000010
5 & 2; // 0
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les opérateurs binaires dans le guide JavaScript](/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise)
- [L'opérateur ET binaire et d'affectation](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)
