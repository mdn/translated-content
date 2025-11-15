---
title: "Array : méthode includes()"
short-title: includes()
slug: Web/JavaScript/Reference/Global_Objects/Array/includes
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`includes()`** des instances de {{JSxRef("Array")}} détermine si un tableau contient une certaine valeur parmi ses éléments, et retourne `true` ou `false` selon le cas.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.includes()")}}

```js interactive-example
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Résultat attendu : true

const pets = ['chat', 'chien', 'chauve-souris'];

console.log(pets.includes('chat'));
// Résultat attendu : true

console.log(pets.includes('at'));
// Résultat attendu : false
```

## Syntaxe

```js-nolint
includes(searchElement)
includes(searchElement, fromIndex)
```

### Paramètres

- `searchElement`
  - : La valeur à rechercher.
- `fromIndex` {{Optional_Inline}}
  - : La position (en partant de 0) dans le tableau à partir de laquelle commencer la recherche. Cette valeur est [convertie en entier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_entière).
    - Un indice négatif compte à rebours depuis la fin du tableau — si `-array.length <= fromIndex < 0`, `fromIndex + array.length` est utilisé. Cependant, le tableau est tout de même parcouru de l'avant vers l'arrière dans ce cas.
    - Si `fromIndex < -array.length` ou si `fromIndex` est omis, `0` est utilisé, ce qui fait que tout le tableau est parcouru.
    - Si `fromIndex >= array.length`, le tableau n'est pas parcouru et `false` est retourné.

### Valeur de retour

Une valeur booléenne qui vaut `true` si la valeur `searchElement` est trouvée dans le tableau (ou dans la partie du tableau indiquée par l'indice `fromIndex`, si précisé).

## Description

La méthode `includes()` compare un `searchElement` aux éléments du tableau en utilisant l'algorithme [SameValueZero](/fr/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#égalité_de_valeurs_nulles). Les valeurs nulles sont toutes considérées comme égales, quel que soit leur signe&nbsp;: ainsi, `-0` est égal à `0`, mais `false` n'est _pas_ considéré comme équivalent à `0`. [`NaN`](/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN) peut être recherché correctement.

Lorsqu'elle est utilisée sur un [tableau creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux), la méthode `includes()` parcourt les emplacements vides comme s'ils avaient la valeur `undefined`.

La méthode `includes()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthode_générique)&nbsp;: elle attend uniquement que la valeur de `this` possède une propriété `length` et des propriétés à clés entières.

## Exemples

### Utilisation d'`includes()`

```js
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
["1", "2", "3"].includes(3); // false
```

### `fromIndex` supérieur ou égal à la longueur du tableau

Si `fromIndex` est supérieur ou égal à la longueur du tableau, `false` est retourné. Le tableau ne sera pas parcouru.

```js
const arr = ["a", "b", "c"];

arr.includes("c", 3); // false
arr.includes("c", 100); // false
```

### L'indice calculé est inférieur à 0

Si `fromIndex` est négatif, l'indice calculé est utilisé comme position dans le tableau à partir de laquelle commencer la recherche de `searchElement`. Si l'indice calculé est inférieur ou égal à `0`, tout le tableau sera parcouru.

```js
// la longueur du tableau est 3
// fromIndex vaut -100
// l'indice calculé vaut 3 + (-100) = -97

const arr = ["a", "b", "c"];

arr.includes("a", -100); // true
arr.includes("b", -100); // true
arr.includes("c", -100); // true
arr.includes("a", -2); // false
```

### Utilisation de `includes()` sur un tableau creux

Vous pouvez rechercher `undefined` dans un tableau creux et obtenir `true`.

```js
console.log([1, , 3].includes(undefined)); // true
```

### Appel de `includes()` sur des objets qui ne sont pas des tableaux

La méthode `includes()` lit la propriété `length` de `this` puis accède à chaque propriété dont la clé est un entier non négatif inférieur à `length`.

```js
const objetSimilaireTableau = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 1, // ignoré par includes() car length vaut 3
};
console.log(Array.prototype.includes.call(objetSimilaireTableau, 2));
// true
console.log(Array.prototype.includes.call(objetSimilaireTableau, 1));
// false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.indexOf()")}}
- La méthode {{JSxRef("Array.prototype.find()")}}
- La méthode {{JSxRef("Array.prototype.findIndex()")}}
- La méthode {{JSxRef("TypedArray.prototype.includes()")}}
- La méthode {{JSxRef("String.prototype.includes()")}}
- [Prothèse d'émulation de `Array.prototype.includes` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
- [Prothèse d'émulation es-shims de `Array.prototype.includes` <sup>(angl.)</sup>](https://www.npmjs.com/package/array-includes)
