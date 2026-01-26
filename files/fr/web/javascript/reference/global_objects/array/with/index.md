---
title: "Array : méthode with()"
short-title: with()
slug: Web/JavaScript/Reference/Global_Objects/Array/with
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`with()`** des instances de {{JSxRef("Array")}} est la version [sans mutations](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_copie_et_méthodes_mutantes) de l'utilisation de la [notation entre crochets](/fr/docs/Web/JavaScript/Reference/Operators/Property_accessors#notation_avec_crochets) pour modifier la valeur à un indice donné. Elle retourne un nouveau tableau dans lequel l'élément à l'indice donné est remplacé par la valeur fournie.

## Syntaxe

```js-nolint
arrayInstance.with(index, value)
```

### Paramètres

- `index`
  - : Indice (à partir de zéro) à modifier dans le tableau, [converti en entier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_en_entier).
    - Un indice négatif compte à rebours depuis la fin du tableau — si `-array.length <= index < 0`, `index + array.length` est utilisé.
    - Si l'indice après normalisation est hors limites, une exception {{JSxRef("RangeError")}} est levée.
- `value`
  - : Toute valeur à affecter à l'indice donné.

### Valeur de retour

Un nouveau tableau dans lequel l'élément à `index` est remplacé par `value`.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si `index >= array.length` ou `index < -array.length`.

## Description

La méthode `with()` modifie la valeur à un indice donné dans le tableau, en retournant un nouveau tableau dans lequel l'élément à cet indice est remplacé par la valeur fournie. Le tableau d'origine n'est pas modifié. Cela permet d'enchaîner les méthodes de tableau lors des manipulations.

En combinant `with()` avec {{JSxRef("Array/at", "at()")}}, vous pouvez lire et écrire (respectivement) dans un tableau en utilisant des indices négatifs.

La méthode `with()` ne produit jamais de [tableau creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux). Si le tableau source est creux, les cases vides seront remplacées par `undefined` dans le nouveau tableau.

La méthode `with()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend seulement que la valeur de `this` possède une propriété `length` et des propriétés à indices entiers.

## Exemples

### Créer un nouveau tableau avec un seul élément modifié

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]
```

### Méthodes de tableau chaînées

Avec la méthode `with()`, vous pouvez mettre à jour un élément d'un tableau puis appliquer d'autres méthodes de tableau.

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6).map((x) => x ** 2)); // [1, 4, 36, 16, 25]
```

### Utilisation de `with()` sur des tableaux creux

La méthode `with()` crée toujours un tableau dense.

```js
const arr = [1, , 3, 4, , 6];
console.log(arr.with(0, 2)); // [2, undefined, 3, 4, undefined, 6]
```

### Appeler `with()` sur des objets qui ne sont pas des tableaux

La méthode `with()` crée et retourne un nouveau tableau. Elle lit la propriété `length` de `this` puis accède à chaque propriété dont la clé est un entier non négatif inférieur à `length`. À chaque accès, l'élément du tableau à l'indice correspondant est défini à la valeur de la propriété. Enfin, la valeur à `index` est définie à `value`.

```js
const objetSimilaireTableau = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
  3: 3, // ignoré par with() car length vaut 3
};
console.log(Array.prototype.with.call(objetSimilaireTableau, 0, 1));
// [ 1, undefined, 4 ]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- La méthode {{JSxRef("Array.prototype.toReversed()")}}
- La méthode {{JSxRef("Array.prototype.toSorted()")}}
- La méthode {{JSxRef("Array.prototype.toSpliced()")}}
- La méthode {{JSxRef("Array.prototype.at()")}}
- La méthode {{JSxRef("TypedArray.prototype.with()")}}
- [Prothèse d'émulation de `Array.prototype.with` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#change-array-by-copy)
- [Prothèse d'émulation es-shims de `Array.prototype.with` <sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.with)
