---
title: "Array : méthode toSpliced()"
short-title: toSpliced()
slug: Web/JavaScript/Reference/Global_Objects/Array/toSpliced
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`toSpliced()`** des instances de {{JSxRef("Array")}} est la version [copiante](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_copie_et_méthodes_de_mutation) de la méthode {{JSxRef("Array/splice", "splice()")}}. Elle retourne un nouveau tableau avec certains éléments supprimés et/ou remplacés à un indice donné.

## Syntaxe

```js-nolint
toSpliced(start)
toSpliced(start, skipCount)
toSpliced(start, skipCount, item1)
toSpliced(start, skipCount, item1, item2)
toSpliced(start, skipCount, item1, item2, /* …, */ itemN)
```

### Paramètres

- `start`
  - : Indice (à partir de zéro) à partir duquel commencer à modifier le tableau, [converti en entier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Un indice négatif compte à rebours depuis la fin du tableau — si `-array.length <= start < 0`, on utilise `start + array.length`.
    - Si `start < -array.length` ou si `start` est omis, on utilise `0`.
    - Si `start >= array.length`, aucun élément ne sera supprimé, mais la méthode agira comme une fonction d'ajout, ajoutant autant d'éléments que fourni.

- `skipCount` {{Optional_Inline}}
  - : Un entier indiquant le nombre d'éléments à supprimer (ou à ignorer) à partir de `start`.

    Si `skipCount` est omis, ou si sa valeur est supérieure ou égale au nombre d'éléments après la position spécifiée par `start`, alors tous les éléments de `start` à la fin du tableau seront supprimés. Cependant, si vous souhaitez passer un paramètre `itemN`, vous devez passer `Infinity` comme valeur de `skipCount` pour supprimer tous les éléments après `start`, car un `undefined` explicite est [converti](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) en `0`.

    Si `skipCount` vaut `0` ou est négatif, aucun élément n'est supprimé.
    Dans ce cas, vous devez définir au moins un nouvel élément (voir ci-dessous).

- `item1`, …, `itemN` {{Optional_Inline}}
  - : Les éléments à ajouter au tableau, à partir de `start`.

    Si vous ne définissez aucun élément, `toSpliced()` ne fera que supprimer des éléments du tableau.

### Valeur de retour

Un nouveau tableau composé de tous les éléments avant `start`, puis `item1`, `item2`, …, `itemN`, puis tous les éléments après `start + skipCount`.

## Description

La méthode `toSpliced()`, comme `splice()`, effectue plusieurs opérations à la fois&nbsp;: elle supprime le nombre d'éléments indiqué à partir d'un indice donné, puis insère les éléments fournis au même indice. Cependant, elle retourne un nouveau tableau au lieu de modifier le tableau d'origine. Les éléments supprimés ne sont donc pas retournés par cette méthode, mais ils restent accessibles dans le tableau d'origine.

La méthode `toSpliced()` ne produit jamais de [tableau creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableau_creux). Si le tableau source est creux, les cases vides seront remplacées par `undefined` dans le nouveau tableau.

La méthode `toSpliced()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend seulement que la valeur de `this` possède une propriété `length` et des propriétés à indices entiers.

## Exemples

### Suppression, ajout et remplacement d'éléments

Vous pouvez utiliser `toSpliced()` pour supprimer, ajouter et remplacer des éléments dans un tableau et créer un nouveau tableau plus efficacement qu'avec `slice()` et `concat()`.

```js
const months = ["Jan", "Mar", "Apr", "May"];

// Insertion d'un élément à l'indice 1
const months2 = months.toSpliced(1, 0, "Feb");
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// Suppression de deux éléments à partir de l'indice 2
const months3 = months2.toSpliced(2, 2);
console.log(months3); // ["Jan", "Feb", "May"]

// Remplacement d'un élément à l'indice 1 par deux nouveaux éléments
const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// Le tableau d'origine n'est pas modifié
console.log(months); // ["Jan", "Mar", "Apr", "May"]
```

### Utilisation de `toSpliced()` sur des tableaux creux

La méthode `toSpliced()` crée toujours un tableau dense.

```js
const arr = [1, , 3, 4, , 6];
console.log(arr.toSpliced(1, 2)); // [1, 4, undefined, 6]
```

### Appel de `toSpliced()` sur des objets qui ne sont pas des tableaux

La méthode `toSpliced()` lit la propriété `length` de `this`. Elle lit ensuite les propriétés à indices entiers nécessaires et les écrit dans le nouveau tableau.

```js
const objetSimilaireTableau = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
console.log(Array.prototype.toSpliced.call(objetSimilaireTableau, 0, 1, 2, 3));
// [2, 3, undefined, 4]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Array.prototype.splice()")}}
- La méthode {{JSxRef("Array.prototype.toReversed()")}}
- La méthode {{JSxRef("Array.prototype.toSorted()")}}
- La méthode {{JSxRef("Array.prototype.with()")}}
- [Prothèse d'émulation de `Array.prototype.toSpliced` dans core-js <sup>(angl.)</sup>](https://github.com/zloirock/core-js#change-array-by-copy)
- [Prothèse d'émulation es-shims de `Array.prototype.toSpliced` <sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.tospliced)
