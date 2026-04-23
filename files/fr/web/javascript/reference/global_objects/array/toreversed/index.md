---
title: "Array : méthode toReversed()"
short-title: toReversed()
slug: Web/JavaScript/Reference/Global_Objects/Array/toReversed
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`toReversed()`** des instances de {{JSxRef("Array")}} est la version [copiante](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_copie_et_méthodes_de_mutation) de la méthode {{JSxRef("Array/reverse", "reverse()")}}. Elle retourne un nouveau tableau avec les éléments dans l'ordre inversé.

## Syntaxe

```js-nolint
toReversed()
```

### Paramètres

Aucun.

### Valeur de retour

Un nouveau tableau contenant les éléments dans l'ordre inversé.

## Description

La méthode `toReversed()` retourne un nouveau tableau dont les éléments sont dans l'ordre inverse de celui du tableau d'origine.

Lorsqu'elle est utilisée sur un [tableau creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableau_creux), la méthode `toReversed()` parcourt les cases vides comme si elles avaient la valeur `undefined`.

La méthode `toReversed()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend seulement que la valeur de `this` possède une propriété `length` et des propriétés à clés entières.

## Exemples

### Inversion des éléments d'un tableau

L'exemple suivant crée un tableau `items` contenant trois éléments, puis crée un nouveau tableau qui est l'inverse de `items`. Le tableau `items` reste inchangé.

```js
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]
```

### Utilisation de `toReversed()` sur un tableau creux

La valeur de retour de `toReversed()` n'est jamais un tableau creux. Les cases vides deviennent `undefined` dans le tableau retourné.

```js
console.log([1, , 3].toReversed()); // [3, undefined, 1]
console.log([1, , 3, 4].toReversed()); // [4, 3, undefined, 1]
```

### Appeler `toReversed()` sur un objet qui n'est pas un tableau

La méthode `toReversed()` lit la propriété `length` de `this`. Elle parcourt ensuite chaque propriété dont la clé est un entier compris entre `length - 1` et `0` (ordre décroissant), et ajoute la valeur de chaque propriété à la fin du tableau retourné.

```js
const objetSimilaireTableau = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
console.log(Array.prototype.toReversed.call(objetSimilaireTableau));
// [4, undefined, undefined]
// Les indices '0' et '1' ne sont pas présents donc deviennent undefined
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- La méthode {{JSxRef("Array.prototype.reverse()")}}
- La méthode {{JSxRef("Array.prototype.toSorted()")}}
- La méthode {{JSxRef("Array.prototype.toSpliced()")}}
- La méthode {{JSxRef("Array.prototype.with()")}}
- La méthode {{JSxRef("TypedArray.prototype.toReversed()")}}
- [Prothèse d'émulation de `Array.prototype.toReversed` dans core-js <sup>(angl.)</sup>](https://github.com/zloirock/core-js#change-array-by-copy)
- [Prothèse d'émulation es-shims de `Array.prototype.toReversed` <sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.toreversed)
