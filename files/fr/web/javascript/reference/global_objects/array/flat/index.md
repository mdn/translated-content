---
title: "Array : méthode flat()"
short-title: flat()
slug: Web/JavaScript/Reference/Global_Objects/Array/flat
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`flat()`** des instances de {{JSxRef("Array")}} crée un nouveau tableau dans lequel tous les éléments des sous-tableaux sont concaténés récursivement jusqu'à la profondeur définie.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.flat()")}}

```js interactive-example
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// sortie attendue : Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// sortie attendue : Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// sortie attendue : Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// sortie attendue : Array [0, 1, 2, 3, 4, 5]
```

## Syntaxe

```js-nolint
flat()
flat(depth)
```

### Paramètres

- `depth` {{Optional_Inline}}
  - : Le niveau de profondeur qui définit jusqu'à quel point une structure de tableaux imbriqués doit être aplatie. La valeur par défaut est 1.

### Valeur de retour

Un nouveau tableau avec les éléments des sous-tableaux concaténés.

## Description

La méthode `flat()` est une [méthode de copie](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Elle ne modifie pas `this` mais renvoie une [copie superficielle](/fr/docs/Glossary/Shallow_copy) qui contient les mêmes éléments que ceux du tableau d'origine.

La méthode `flat()` retire les cases vides si le tableau à aplatir est [creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux). Par exemple, si `depth` vaut 1, les cases vides du tableau racine et du premier niveau des tableaux imbriqués sont ignorées, mais les cases vides des niveaux plus profonds sont conservées avec les tableaux eux-mêmes.

La méthode `flat()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend seulement que la valeur de `this` possède une propriété `length` et des propriétés à clés entières. Cependant, ses éléments doivent être des tableaux pour être aplatis.

## Exemples

### Aplatir des tableaux imbriqués

```js
const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### Utiliser `flat()` sur des tableaux creux

La méthode `flat()` retire les [cases vides](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux) dans les tableaux :

```js
const arr5 = [1, 2, , 4, 5];
console.log(arr5.flat()); // [1, 2, 4, 5]

const array = [1, , 3, ["a", , "c"]];
console.log(array.flat()); // [ 1, 3, "a", "c" ]

const array2 = [1, , 3, undefined, ["a", , ["d", , "e"]], null];
console.log(array2.flat()); // [ 1, 3, undefined, "a", ["d", vide, "e"], null ]
console.log(array2.flat(2)); // [ 1, 3, undefined, "a", "d", "e", null ]
```

### Utiliser `flat()` sur des objets qui ne sont pas des tableaux

La méthode `flat()` lit la propriété `length` de `this` puis accède à chaque propriété dont la clé est un entier non négatif inférieur à `length`. Si l'élément n'est pas un tableau, il est ajouté directement au résultat. Si l'élément est un tableau, il est aplati selon le paramètre `depth`.

```js
const objetSimilaireTableau = {
  length: 3,
  0: [1, 2],
  // Les objets qui ressemblent à des tableaux ne sont pas aplatis
  1: { length: 2, 0: 3, 1: 4 },
  2: 5,
  3: 3, // ignoré par flat() car length vaut 3
};
console.log(Array.prototype.flat.call(objetSimilaireTableau));
// [ 1, 2, { '0': 3, '1': 4, length: 2 }, 5 ]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.concat()")}}
- La méthode {{JSxRef("Array.prototype.flatMap()")}}
- La méthode {{JSxRef("Array.prototype.map()")}}
- La méthode {{JSxRef("Array.prototype.reduce()")}}
- [Prothèse d'émulation de `Array.prototype.flat` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
- [Prothèse d'émulation es-shims de `Array.prototype.flat` <sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.flat)
