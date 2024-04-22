---
title: Array.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/Array/concat
---

{{JSRef}}

La méthode **`concat()`** est utilisée afin de fusionner deux ou plusieurs tableaux en les concaténant. Cette méthode ne modifie pas les tableaux existants, elle renvoie un nouveau tableau qui est le résultat de l'opération.

{{EmbedInteractiveExample("pages/js/array-concat.html","shorter")}}

## Syntaxe

```js
concat()
concat(valeur0)
concat(valeur0, valeur1)
concat(valeur0, valeur1, ... , valeurN)
```

### Paramètres

- `valeurN`{{optional_inline}}
  - : Des tableaux et/ou des valeurs à concaténer dans le nouveau tableau. Si aucun argument `valeurN` n'est passé, `concat` renverra une copie superficielle du tableau sur lequel elle est appelée. Voir ci-après pour plus de détails.

### Valeur de retour

Une nouvelle instance de [`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array).

## Description

La méthode `concat` permet de créer un nouveau tableau constitué des éléments de l'objet `this` sur lequel elle a été appelée, suivis dans l'ordre par, pour chaque paramètre, des éléments de ce paramètre (s'il s'agit d'un tableau) ou le paramètre lui-même (s'il ne s'agit pas d'un tableau). La concaténation ne «&nbsp;déplie&nbsp;» pas les tableaux imbriqués.

La méthode `concat` ne modifie pas `this` ni aucun des tableaux passés en paramètres, mais renvoie une copie superficielle qui contient des copies des mêmes éléments combinées que ceux des tableaux originaux. Les éléments des tableaux originaux sont copiés dans le nouveau tableau comme suit&nbsp;:

- Pour les références à des objets (et non les objets eux-mêmes)&nbsp;: `concat` copie ces références dans le nouveau tableau. Le tableau original et le nouveau tableau feront référence au même objet. C'est-à-dire que si un objet référencé est modifié, ces changements seront visibles tant dans le nouveau que dans les tableaux originaux.

- Pour les chaînes, les booléens et les nombres « primitifs » (c'est-à-dire pas les objets [`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String), [`Boolean`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean) et [`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number))&nbsp;: `concat` copie les valeurs des chaînes et des nombres dans le nouveau tableau. (voir [Les types de données en JavaScript](/fr/docs/Web/JavaScript/Structures_de_données#Les_types_de_données)).

> **Note :** La concaténation n'affectera pas les tableaux originaux. Par la suite, toute opération sur le nouveau tableau n'aura aucun effet sur les tableaux d'origine, et vice versa.

## Exemples

### Concaténer deux tableaux

Le code qui suit concatène deux tableaux&nbsp;:

```js
const lettres = ["a", "b", "c"];
const chiffres = [1, 2, 3];

const alphanum = lettres.concat(chiffres);
console.table(alphanum);
// donne : ["a", "b", "c", 1, 2, 3]
```

### Concaténer trois tableaux

Le code qui suit concatène trois tableaux&nbsp;:

```js
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const nums = num1.concat(num2, num3);

console.table(nums);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Concaténer des valeurs avec un tableau

Le code qui suit ajoute trois valeurs à un tableau&nbsp;:

```js
const alpha = ["a", "b", "c"];

const alphanumerique = alpha.concat(1, [2, 3]);

console.table(alphanumerique);
// ['a', 'b', 'c', 1, 2, 3]
```

### Concaténer des tableaux imbriqués

Dans le code qui suit, on concatène deux tableaux qui ont plusieurs dimensions et on illustre la conservation des références&nbsp;:

```js
const num1 = [[1]];
const num2 = [2, [3]];

const nums = num1.concat(num2);

console.table(nums);
// affichera [[1], 2, [3]]

// Ici, on modifie le premier élément de num1
num1[0].push(4);

console.table(nums);
// affichera [[1, 4], 2, [3]]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`push()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/push) / [`pop()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) qui permettent d'ajouter/retirer des éléments à partir de la fin du tableau
- [`unshift()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) / [`shift()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) qui permettent d'ajouter/retirer des éléments à partir du début du tableau
- [`splice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) qui permet d'ajouter/retirer des éléments à un endroit donné du tableau
- [`String.prototype.concat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/concat)
- [`Symbol.isConcatSpreadable`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable) (permet de contrôler la façon dont un tableau est ramené à une valeur)
