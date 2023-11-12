---
title: Décalage binaire à droite non-signé (>>>)
slug: Web/JavaScript/Reference/Operators/Unsigned_right_shift
---

{{jsSidebar("Operators")}}

L'opérateur de **décalage binaire à droite non-signé (`>>>`)** décale la séquence de bits formée par le premier opérande d'autant de bits vers la droite que la valeur indiquée par le second opérande. Les bits en excès à droite sont écartés et ce sont des zéros qui sont ajoutés à gauches. Le bit de signe devient alors nécessairement `0` et le résultat est donc positif. À la différence des autres opérateurs binaires, cet opérateur renvoie un entier non-signé sur 32 bits.

{{EmbedInteractiveExample("pages/js/expressions-unsigned-right-shift.html")}}

## Syntaxe

```js
a >>> b;
```

## Description

Ce opérateur décale les bits du premier opérande vers la droite, selon la valeur du deuxième opérande. Les bits dépassant à droite sont éliminés tandis que des zéros sont ajoutés à gauche. Le bit de signe vaut alors `0` et en conséquence le résultat est positif. La valeur fournie par cet opérateur, à la différence des autres opérateurs binaires, est une valeur entière sur 32 bits non-signée.

Pour les nombres positifts, le décalage binaire à droite et le décalage binaire à droite non-signés renverront le même résultat. Par exemple, `9 >>> 2` renvoie 2, également renvoyé par `9 >> 2`:

```js
        9 (base 10): 00000000000000000000000000001001 (base 2)
                     --------------------------------
  9 >>> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
```

Toutefois, ce n'est pas le cas pour les nombres négatifs : `-9 >>> 2` renverra 1073741821, qui est différent de `-9 >> 2` (qui renvoie `-3`) :

```js
        -9 (base 10): 11111111111111111111111111110111 (base 2)
                      --------------------------------
  -9 >>> 2 (base 10): 00111111111111111111111111111101 (base 2) = 1073741821 (base 10)
```

## Exemples

### Utiliser le décalage à droite non-signé

```js
9 >>> 2; // 2
-9 >>> 2; // 1073741821
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les opérateurs binaires dans le guide JavaScript](/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise)
- [L'opérateur de décalage binaire à droite non-signé et d'affectation](/fr/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment)
