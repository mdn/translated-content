---
title: "Array : méthode entries()"
short-title: entries()
slug: Web/JavaScript/Reference/Global_Objects/Array/entries
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`entries()`** des instances de {{JSxRef("Array")}} retourne un nouvel objet _[itérateur de tableau](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ qui contient les paires clé/valeur pour chaque indice du tableau.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.entries()")}}

```js interactive-example
const array = ["a", "b", "c"];

const iterator = array.entries();

console.log(iterator.next().value);
// Sortie attendue : Array [0, "a"]

console.log(iterator.next().value);
// Sortie attendue : Array [1, "b"]
```

## Syntaxe

```js-nolint
entries()
```

### Paramètres

Aucun.

### Valeur de retour

Un nouvel objet [d'itération](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Description

Lorsqu'elle est utilisée sur des [tableaux creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux), la méthode `entries()` itère sur les cases vides comme si elles avaient la valeur `undefined`.

La méthode `entries()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend seulement que la valeur de `this` possède une propriété `length` et des propriétés à clés entières.

## Exemples

### Parcourir un tableau avec ses index et éléments

```js
const arr = ["a", "b", "c"];

for (const [index, element] of arr.entries()) {
  console.log(index, element);
}

// 0 "a"
// 1 "b"
// 2 "c"
```

### Boucle `for...of`

```js
const array = ["a", "b", "c"];
const arrayEntries = array.entries();

for (const element of arrayEntries) {
  console.log(element);
}

// [0, 'a']
// [1, 'b']
// [2, 'c']
```

### Itération sur des tableaux creux

`entries()` parcourt les cases vides comme si elles valaient `undefined`.

```js
for (const element of [, "a"].entries()) {
  console.log(element);
}
// [0, undefined]
// [1, 'a']
```

### Appel de `entries()` sur des objets qui ne sont pas des tableaux

La méthode `entries()` lit la propriété `length` de `this` puis accède à chaque propriété dont la clé est un entier non négatif inférieur à `length`.

```js
const objetSimilaireTableau = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: "d", // ignoré par entries() car length vaut 3
};
for (const entry of Array.prototype.entries.call(objetSimilaireTableau)) {
  console.log(entry);
}
// [ 0, 'a' ]
// [ 1, 'b' ]
// [ 2, 'c' ]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.keys()")}}
- La méthode {{JSxRef("Array.prototype.values()")}}
- [`Array.prototype[Symbol.iterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- La méthode {{JSxRef("TypedArray.prototype.entries()")}}
- [Protocoles d'itération](/fr/docs/Web/JavaScript/Reference/Iteration_protocols)
- [Prothèse d'émulation de `Array.prototype.entries` dans `core-js`<sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
- [Prothèse d'émulation es-shims de `Array.prototype.entries`<sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.entries)
