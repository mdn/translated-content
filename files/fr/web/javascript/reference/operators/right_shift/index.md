---
title: Décalage binaire à droite (>>)
slug: Web/JavaScript/Reference/Operators/Right_shift
tags:
  - Bitwise operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.right_shift
---
{{jsSidebar("Operators")}}

L'opérateur de **décalage binaire à droite (`>>`)** décale la séquence de bits représentée par le premier opérande d'autant de bits vers la droite que le nombre indiqué par le second opérande. Les bits en excès à droite sont écartés. Pour le remplissage des bits par la gauche, c'est le bit le plus à gauche initialement qui est recopié autant de fois que nécessaire. Aussi, le bit le plus à gauche dans le résultat sera le même que le bit le plus à gauche de l'opérande et les deux valeurs auront donc le même signe.

{{EmbedInteractiveExample("pages/js/expressions-right-shift.html")}}

## Syntaxe

```js
a >> b
```

## Description

Cet opérateur décale les bits de la valeur fournie par le premier opérande d'autant de fois qu'indiqué par le deuxième opérande. Les bits en excès à droite sont écartés et pour les bits les plus à gauche, c'est le bit initialement le plus à gauche qui est dupliqué. On garde ainsi le même signe entre la valeur du premier opérande et la valeur fournie par le résultat.

Ainsi, `9 >> 2` donnera `2` :

```js
       9 (base 10): 00000000000000000000000000001001 (base 2)
                    --------------------------------
  9 >> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
```

De même, `-9 >> 2` donnera `-3`, car le signe est préservé :

```js
       -9 (base 10): 11111111111111111111111111110111 (base 2)
                     --------------------------------
  -9 >> 2 (base 10): 11111111111111111111111111111101 (base 2) = -3 (base 10)
```

## Exemples

### Utiliser le décalage à droite

```js
 9 >> 2; //  2
-9 >> 2; // -3
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les opérateurs binaires dans le guide JavaScript](/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise)
- [L'opérateur de décalage binaire à droite et d'affectation](/fr/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)
