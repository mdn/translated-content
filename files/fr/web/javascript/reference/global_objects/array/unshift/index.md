---
title: "Array : méthode unshift()"
short-title: unshift()
slug: Web/JavaScript/Reference/Global_Objects/Array/unshift
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`unshift()`** des instances de {{JSxRef("Array")}} ajoute les éléments définis au début d'un tableau et retourne la nouvelle longueur du tableau.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.unshift()")}}

```js interactive-example
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// Résultat attendu : 5

console.log(array1);
// Résultat attendu : Array [4, 5, 1, 2, 3]
```

## Syntaxe

```js-nolint
unshift()
unshift(element1)
unshift(element1, element2)
unshift(element1, element2, /* …, */ elementN)
```

### Paramètres

- `element1`, …, `elementN`
  - : Les éléments à ajouter au début du tableau `arr`.

### Valeur de retour

La nouvelle valeur de la propriété {{JSxRef("Array/length", "length")}} du tableau sur lequel a été appelée la méthode.

## Description

La méthode `unshift()` insère les valeurs fournies au début d'un objet ressemblant à un tableau.

La méthode {{JSxRef("Array.prototype.push()")}} a un comportement similaire à `unshift()`, mais s'applique à la fin d'un tableau.

Veuillez noter que, si plusieurs éléments sont passés en paramètres, ils sont insérés en bloc au début de l'objet, dans le même ordre que celui dans lequel ils ont été passés en paramètres. Ainsi, appeler `unshift()` avec `n` arguments **une fois**, ou l'appeler `n` fois avec **1** argument (par exemple dans une boucle), ne donne pas le même résultat.

Exemple&nbsp;:

```js
let arr = [4, 5, 6];

arr.unshift(1, 2, 3);
console.log(arr);
// [1, 2, 3, 4, 5, 6]

arr = [4, 5, 6]; // réinitialisation du tableau

arr.unshift(1);
arr.unshift(2);
arr.unshift(3);

console.log(arr);
// [3, 2, 1, 4, 5, 6]
```

La méthode `unshift()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend seulement que la valeur de `this` possède une propriété `length` et des propriétés à indices entiers. Bien qu'une chaîne de caractères soit aussi un objet ressemblant à un tableau, cette méthode ne convient pas pour être appliquée sur une chaîne de caractères, car elle est immuable.

## Exemples

### Utilisation de `unshift()`

```js
const arr = [1, 2];

arr.unshift(0); // le résultat de l'appel est 3, qui est la nouvelle longueur du tableau
// arr vaut [0, 1, 2]

arr.unshift(-2, -1); // la nouvelle longueur du tableau est 5
// arr vaut [-2, -1, 0, 1, 2]

arr.unshift([-4, -3]); // la nouvelle longueur du tableau est 6
// arr vaut [[-4, -3], -2, -1, 0, 1, 2]

arr.unshift([-7, -6], [-5]); // la nouvelle longueur du tableau est 8
// arr vaut [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]
```

### Appeler `unshift()` sur des objets qui ne sont pas des tableaux

La méthode `unshift()` lit la propriété `length` de `this`. Elle décale tous les indices dans la plage de `0` à `length - 1` vers la droite du nombre d'arguments (en incrémentant leurs valeurs de ce nombre). Ensuite, elle définit chaque indice à partir de `0` avec les arguments passés à `unshift()`. Enfin, elle définit la propriété `length` à l'ancienne longueur plus le nombre d'éléments ajoutés au début.

```js
const objetSimilaireTableau = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
Array.prototype.unshift.call(objetSimilaireTableau, 1, 2);
console.log(objetSimilaireTableau);
// { '0': 1, '1': 2, '4': 4, length: 5, unrelated: 'foo' }

const plainObj = {};
// Il n'y a pas de propriété length, donc la longueur est 0
Array.prototype.unshift.call(plainObj, 1, 2);
console.log(plainObj);
// { '0': 1, '1': 2, length: 2 }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.push()")}}
- La méthode {{JSxRef("Array.prototype.pop()")}}
- La méthode {{JSxRef("Array.prototype.shift()")}}
- La méthode {{JSxRef("Array.prototype.concat()")}}
- La méthode {{JSxRef("Array.prototype.splice()")}}
- [Prothèse d'émulation de `Array.prototype.unshift` dans core-js <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
- [Prothèse d'émulation es-shims de `Array.prototype.unshift` <sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.unshift)
