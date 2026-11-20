---
title: "Array : méthode toSorted()"
short-title: toSorted()
slug: Web/JavaScript/Reference/Global_Objects/Array/toSorted
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode **`toSorted()`** des instances de {{JSxRef("Array")}} est la version [copiante](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_copie_et_méthodes_de_mutation) de la méthode {{JSxRef("Array/sort", "sort()")}}. Elle retourne un nouveau tableau dont les éléments sont triés par ordre croissant.

## Syntaxe

```js-nolint
toSorted()
toSorted(compareFn)
```

### Paramètres

- `compareFn` {{Optional_Inline}}
  - : Une fonction qui définit l'ordre des éléments. Si elle est omise, les éléments du tableau sont convertis en chaînes de caractères, puis triés selon la valeur du point de code Unicode de chaque caractère. Voir {{JSxRef("Array/sort", "sort()")}} pour plus d'informations.

### Valeur de retour

Un nouveau tableau dont les éléments sont triés par ordre croissant.

## Description

Voir {{JSxRef("Array/sort", "sort()")}} pour plus d'informations sur le paramètre `compareFn`.

Lorsqu'elle est utilisée sur un [tableau creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableau_creux), la méthode `toSorted()` parcourt les cases vides comme si elles avaient la valeur `undefined`.

La méthode `toSorted()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend seulement que la valeur de `this` possède une propriété `length` et des propriétés à clés entières.

## Exemples

### Trier un tableau

```js
const mois = ["Mar", "Jan", "Feb", "Dec"];
const moisTries = mois.toSorted();
console.log(moisTries); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(mois); // ['Mar', 'Jan', 'Feb', 'Dec']

const valeurs = [1, 10, 21, 2];
const valeursTriees = valeurs.toSorted((a, b) => a - b);
console.log(valeursTriees); // [1, 2, 10, 21]
console.log(valeurs); // [1, 10, 21, 2]
```

Pour plus d'exemples d'utilisation, voir {{JSxRef("Array/sort", "sort()")}}.

### Utiliser `toSorted()` sur un tableau creux

Les cases vides sont triées comme si elles ont la valeur `undefined`. Elles sont toujours placées à la fin du tableau et `compareFn` n'est pas appelé pour elles.

```js
console.log(["a", "c", , "b"].toSorted()); // ['a', 'b', 'c', undefined]
console.log([, undefined, "a", "b"].toSorted()); // ["a", "b", undefined, undefined]
```

### Appeler `toSorted()` sur un objet qui n'est pas un tableau

La méthode `toSorted()` lit la propriété `length` de `this`. Elle collecte ensuite toutes les propriétés à clé entière existantes dans l'intervalle de `0` à `length - 1`, les trie, puis les écrit dans un nouveau tableau.

```js
const objetSimilaireTableau = {
  length: 3,
  unrelated: "toto",
  0: 5,
  2: 4,
  3: 3, // ignoré par toSorted(), car length vaut 3
};
console.log(Array.prototype.toSorted.call(objetSimilaireTableau));
// [4, 5, undefined]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `Array.prototype.toSorted` dans core-js <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/array)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `Array.prototype.toSorted` <sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.tosorted)
- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- La méthode {{JSxRef("Array.prototype.sort()")}}
- La méthode {{JSxRef("Array.prototype.toReversed()")}}
- La méthode {{JSxRef("Array.prototype.toSpliced()")}}
- La méthode {{JSxRef("Array.prototype.with()")}}
- La méthode {{JSxRef("TypedArray.prototype.toSorted()")}}
