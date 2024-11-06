---
title: L'opérateur virgule
slug: Web/JavaScript/Reference/Operators/Comma_operator
---

{{jsSidebar("Operators")}}

L'opérateur **virgule** permet d'évaluer chacun de ses opérandes (de la gauche vers la droite) et de renvoyer la valeur du dernier opérande.

{{EmbedInteractiveExample("pages/js/expressions-commaoperators.html")}}

## Syntaxe

```js
expr1, expr2, expr3…
```

### Paramètres

- `expr1`, `expr2, expr3…`
  - : Des expressions JavaScript.

## Description

L'opérateur virgule peut être utilisé lorsqu'on souhaite utiliser plusieurs expressions là où la syntaxe n'en attend qu'une seule. Cet opérateur est souvent utilisé dans une boucle {{jsxref("Instructions/for","for")}} afin de fournir plusieurs paramètres.

L'opérateur virgule est à différencier de la virgule utilisée pour séparer les éléments d'un tableau ou les propriétés d'un objet ou encore les arguments d'une fonction.

## Exemples

SI on a un tableau à 2 dimensions appelé `monTableau`, qui possède 10 éléments ayant chacun 10 éléments, on peut utiliser le code suivant avec l'opérateur virgule afin d'incrémenter deux variables (`i` et `j`) à la fois. Attention, la virgule utilisée au sein de l'instruction `var` **n'est pas** l'opérateur virgule (car il ne peut exister au sein d'une expression) ; ici c'est un caractère spécial de l'instruction {{jsxref("Instructions/var","var")}}. Le code qui suit affiche les éléments présents sur la diagonale de cette matrice :

```js
for (var i = 0, j = 9; i <= 9; i++, j--) {
  console.log("monTableau[" + i + "][" + j + "] = " + monTableau[i][j]);
}
```

Dans le code suivant, `a` est défini avec la valeur de `b = 3` (qui est 3) et l'expression `c = 4` est toujours évaluée et c'est ce résultat affiché dans la console du fait de la précédence et de l'associativité des opérateurs.

```js
var a, b, c;
(a = b = 3), (c = 4); // Renvoie 4 dans la console
console.log(a); // 3
```

Pour isoler la précédence de l'opérateur, on peut utiliser des parenthèses :

```js
var x, y, z;
x = ((y = 5), (z = 6)); // Renvoie 6 dans la console
console.log(x); // 6
```

### Effectuer un traitement puis renvoyer une valeur

Un autre exemple consiste à effectuer un certain traitement sur la variable puis à renvoyer le résultat. Par définition, seul le dernier élément sera renvoyé mais les instructions précédentes seront bien exécutées. AInsi, on pourrait avoir :

```js
function maFonction() {
  var x = 0;

  return (x += 1), x; // ce qui revient à renvoyer ++x
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les boucles {{jsxref("Instructions/for","for")}}
