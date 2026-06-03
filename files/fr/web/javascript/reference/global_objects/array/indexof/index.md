---
title: "Array : méthode indexOf()"
short-title: indexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/indexOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`indexOf()`** des instances de {{JSxRef("Array")}} retourne le premier indice auquel un élément donné peut être trouvé dans le tableau, ou -1 s'il n'est pas présent.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.indexOf()")}}

```js interactive-example
const beasts = ["fourmi", "bison", "chameau", "canard", "bison"];

console.log(beasts.indexOf("bison"));
// Résultat attendu : 1

// À partir de l'indice 2
console.log(beasts.indexOf("bison", 2));
// Résultat attendu : 4

console.log(beasts.indexOf("girafe"));
// Résultat attendu : -1
```

## Syntaxe

```js-nolint
indexOf(searchElement)
indexOf(searchElement, fromIndex)
```

### Paramètres

- `searchElement`
  - : L'élément à rechercher dans le tableau.
- `fromIndex` {{Optional_Inline}}
  - : L'indice à partir duquel commencer la recherche, [converti en entier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_entière).
    - Un indice négatif compte à rebours depuis la fin du tableau — si `-array.length <= fromIndex < 0`, `fromIndex + array.length` est utilisé. À noter&nbsp;: le tableau est toujours parcouru de l'avant vers l'arrière dans ce cas.
    - Si `fromIndex < -array.length` ou si `fromIndex` est omis, `0` est utilisé, ce qui fait que tout le tableau est parcouru.
    - Si `fromIndex >= array.length`, le tableau n'est pas parcouru et `-1` est retourné.

### Valeur de retour

Le premier indice de `searchElement` dans le tableau&nbsp;; `-1` si la valeur n'est pas trouvée.

## Description

La méthode `indexOf()` compare `searchElement` aux éléments du tableau en utilisant une [égalité stricte](/fr/docs/Web/JavaScript/Reference/Operators/Strict_equality) (le même algorithme que celui utilisé par l'opérateur `===`). Les valeurs [`NaN`](/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN) ne sont jamais considérées comme égales, donc `indexOf()` retourne toujours `-1` lorsque `searchElement` vaut `NaN`.

La méthode `indexOf()` ignore les emplacements vides dans les [tableaux creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux).

La méthode `indexOf()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend seulement que la valeur de `this` possède une propriété `length` et des propriétés à clés entières.

## Exemples

### Utiliser `indexOf()`

L'exemple suivant utilise `indexOf()` pour localiser des valeurs dans un tableau.

```js
const tableau = [2, 9, 9];
tableau.indexOf(2); // 0
tableau.indexOf(7); // -1
tableau.indexOf(9, 2); // 2
tableau.indexOf(2, -1); // -1
tableau.indexOf(2, -3); // 0
```

Vous ne pouvez pas utiliser `indexOf()` pour rechercher `NaN`.

```js
const tableau = [NaN];
tableau.indexOf(NaN); // -1
```

### Trouver toutes les occurences d'un élément

```js
const indices = [];
const tableau = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = tableau.indexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = tableau.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
```

### Trouver si un élément existe et l'ajouter dans le tableau si ce n'est pas le cas

```js
function mettreAJourLegumes(legumes, legume) {
  if (legumes.indexOf(legume) === -1) {
    legumes.push(legume);
    console.log("Le nouveau tableau est : " + legumes);
  } else if (legumes.indexOf(legume) > -1) {
    console.log(legume + " existe déjà dans le tableau.");
  }
}

const legumes = ["pomme de terre", "tomate", "poivron"];

mettreAJourLegumes(legumes, "épinard");
// Le nouveau tableau est : pomme de terre,tomate,poivron,épinard
mettreAJourLegumes(legumes, "épinard");
// épinard existe déjà dans le tableau.
```

### Utiliser `indexOf()` sur des tableaux creux

Vous ne pouvez pas utiliser `indexOf()` pour rechercher des emplacements vides dans des tableaux creux.

```js
console.log([1, , 3].indexOf(undefined)); // -1
```

### Appeler `indexOf()` sur des objets ressemblant à des tableaux

La méthode `indexOf()` lit la propriété `length` de `this` puis accède à chaque propriété dont la clé est un entier non négatif inférieur à `length`.

```js
const objetSimilaireTableau = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // ignoré par indexOf() car length vaut 3
};
console.log(Array.prototype.indexOf.call(objetSimilaireTableau, 2));
// 0
console.log(Array.prototype.indexOf.call(objetSimilaireTableau, 5));
// -1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.findIndex()")}}
- La méthode {{JSxRef("Array.prototype.findLastIndex()")}}
- La méthode {{JSxRef("Array.prototype.lastIndexOf()")}}
- La méthode {{JSxRef("TypedArray.prototype.indexOf()")}}
- La méthode {{JSxRef("String.prototype.indexOf()")}}
- [Prothèse d'émulation de `Array.prototype.indexOf` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
- [Prothèse d'émulation es-shims de `Array.prototype.indexOf` <sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.indexof)
