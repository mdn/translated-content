---
title: Array.prototype.flat()
slug: Web/JavaScript/Reference/Global_Objects/Array/flat
l10n:
  sourceCommit: f6fe4043bfc7ace3b8caa757547b7d0cb3ad5cc1
---

{{JSRef}}

La méthode **`flat()`** permet de créer un nouveau tableau contenant les éléments des sous-tableaux du tableau passé en argument, qui sont concaténés récursivement pour atteindre une profondeur donnée.

{{EmbedInteractiveExample("pages/js/array-flat.html")}}

## Syntaxe

```js
flat();
flat(profondeur);
```

### Paramètres

- `profondeur` {{optional_inline}}
  - : Le niveau de profondeur en termes d'imbrication de tableau. Autrement dit, jusqu'à quel niveau d'imbrication un tableau imbriqué il doit être aplati. La valeur par défaut est 1.

### Valeur de retour

Un nouveau tableau qui contient la concaténation des éléments des sous-tableaux du tableau passé en argument.

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

### Aplatir et combler les trous

La méthode `flat()` permet également de retirer les «&nbsp;trous&nbsp;» d'un tableau&nbsp;:

```js
const arr4 = [1, 2, , 4, 5];
arr4.flat();
// [1, 2, 4, 5]
```

## Équivalents

### `reduce()` et `concat()`

```js
const arr = [1, 2, [3, 4]];

// pour un tableau avec un seul niveau de profondeur
arr.flat();
// est équivalent à
arr.reduce((acc, val) => acc.concat(val), []);
// [1, 2, 3, 4]

// avec la décomposition et les compositions fléchées, on peut écrire :
const aplati = (arr) => [].concat(...arr);
```

### `reduce()` + `concat()` + `isArray()` + récursivité

```js
const arr = [1, 2, [3, 4, [5, 6]]];

// Pour gérer plusieurs niveaux, on pourra utiliser
// une méthode récursive avec reduce et concat
function flatDeep(arr, d = 1) {
  if (!Array.isArray(val)) {
    return val;
  }
  return d > 0
    ? arr.reduce((acc, val) => acc.concat(flatDeep(val, d - 1)), [])
    : arr.slice();
}

flatDeep(arr, Infinity);
// [1, 2, 3, 4, 5, 6]
```

### Utiliser une pile

```js
// Version non récursive utilisant une pile
function flatStack(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // On sort une valeur de la pile
    const next = stack.pop();
    if (Array.isArray(next)) {
      // On place les éléments qui sont des tableaux dans
      // la pile sans modifier l'entrée
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  // On inverse le résultat pour revenir
  // à l'ordre de l'entrée
  return res.reverse();
}

const arr = [1, 2, [3, 4, [5, 6]]];
flatStack(arr);
// [1, 2, 3, 4, 5, 6]
```

### Avec une fonction génératrice

```js
function* flatten(array, depth) {
  if (depth === undefined) {
    depth = 1;
  }

  for (const item of array) {
    if (Array.isArray(item) && depth > 0) {
      yield* flatten(item, depth - 1);
    } else {
      yield item;
    }
  }
}

const arr = [1, 2, [3, 4, [5, 6]]];
const flattened = [...flatten(arr, Infinity)];
// [1, 2, 3, 4, 5, 6]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Array.prototype.flatMap()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)
- [`Array.prototype.map()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [`Array.prototype.reduce()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [`Array.prototype.concat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
- Prothèses d'émulation (<i lang="en">polyfills</i>)&nbsp;:
  - [Dans la bibliothèque in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
  - [Dans une collection de prothèses de behnammodi](https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js)
