---
title: Array.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/Array/concat
tags:
  - Array
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/concat
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/concat
---
{{JSRef}}

La méthode **`concat()`** est utilisée afin de fusionner un ou plusieurs tableaux en les concaténant. Cette méthode ne modifie pas les tableaux existants, elle renvoie un nouveau tableau qui est le résultat de l'opération.

{{EmbedInteractiveExample("pages/js/array-concat.html")}}

## Syntaxe

    let nouveau_tableau = ancien_tableau.concat(valeur1[, valeur2[, ...[, valeurN]]])

### Paramètres

- `valeurN`{{optional_inline}}
  - : Des tableaux et/ou des valeurs à concaténer dans le nouveau tableau. Si tous les arguments `valeurN` valent `undefined`, `concat` renverra une copie superficielle du tableau sur lequel elle est appelée. Voir ci-après pour plus de détails.

### Valeur de retour

Une nouvelle instance de {{jsxref("Array")}}.

## Description

La méthode `concat` permet de créer un nouveau tableau constitué des éléments de l'objet `this` sur lequel elle a été appelée, suivis dans l'ordre par, pour chaque paramètre, les éléments de ce paramètre (s'il s'agit d'un tableau) ou le paramètre lui-même (s'il ne s'agit pas d'un tableau). La concaténation ne « déplie » pas les tableaux imbriqués.

La méthode `concat` ne modifie pas `this` ni aucun des tableaux passés en paramètres, mais renvoie une copie qui contient des copies des mêmes éléments combinées que ceux des tableaux originaux. Les éléments des tableaux originaux sont copiés dans le nouveau tableau comme suit :

- Pour les références à des objets (et non les objets eux-mêmes) : `concat` copie ces références dans le nouveaux tableau. Le tableau original et le nouveau tableau feront référence au même objet. C'est-à-dire que si un objet référencé est modifié, ces changements seront visibles tant dans le nouveau que dans les tableaux originaux.

<!---->

- Pour les chaînes, les booléens et les nombres « primitifs » (c'est-à-dire pas les objets {{jsxref("String", "String")}}, {{jsxref("Boolean")}} et {{jsxref("Number", "Number")}}) : `concat` copie les valeurs des chaînes et des nombres dans le nouveau tableau. (voir [Les types de données en JavaScript](/fr/docs/Web/JavaScript/Structures_de_donn%C3%A9es#Les_types_de_donn%C3%A9es)).

> **Note :** La concaténation n'impactera pas les tableaux originaux. Par la suite, toute opération sur le nouveau tableau n'aura aucun effet sur les tableaux d'origine, et vice versa.

## Exemples

### Concaténer deux tableaux

Le code qui suit concatène deux tableaux :

```js
let alpha = ["a", "b", "c"];
let numerique = [1, 2, 3];

alpha.concat(numerique);
// donne : ["a", "b", "c", 1, 2, 3]
```

### Concaténer trois tableaux

Le code qui suit concatène trois tableaux :

```js
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let num3 = [7, 8, 9];

let nums = num1.concat(num2, num3);

console.log(nums);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Concaténer des valeurs avec un tableau

Le code qui suit ajoute trois valeurs à un tableau :

```js
let alpha = ['a', 'b', 'c'];

let alphanumerique = alpha.concat(1, [2, 3]);

console.log(alphanumerique);
// ['a', 'b', 'c', 1, 2, 3]
```

### Concaténer des tableaux imbriqués

Dans le code qui suit, on concatène deux tableaux qui ont plusieurs dimensions et on illustre la conservation des références :

```js
let num1 = [[1]];
let num2 = [2, [3]];

let nums = num1.concat(num2);

console.log(nums);
// affichera [[1], 2, [3]]

// Ici, on modifie le premier élément de num1
num1[0].push(4);

console.log(nums);
// affichera [[1, 4], 2, [3]]
```

## Spécifications

| Spécification                                                                                                | État                         | Commentaires                                          |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                     | {{Spec2('ES3')}}         | Définition initiale. Implémentée avec JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.4.4.4', 'Array.prototype.concat')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-array.prototype.concat', 'Array.prototype.concat')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-array.prototype.concat', 'Array.prototype.concat')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Array.concat")}}

## Voir aussi

- {{jsxref("Array.push", "push")}} / {{jsxref("Array.pop", "pop")}} qui permettent d'ajouter/retirer des éléments à partir de la fin du tableau
- {{jsxref("Array.unshift", "unshift")}} / {{jsxref("Array.shift", "shift")}} qui permettent d'ajouter/retirer des éléments à partir du début du tableau
- {{jsxref("Array.splice", "splice")}} qui permet d'ajouter/retirer des éléments à un endroit donné du tableau
- {{jsxref("String.prototype.concat()")}}
- {{jsxref("Symbol.isConcatSpreadable")}} (permet de contrôler la façon dont un tableau est ramené à une valeur)
