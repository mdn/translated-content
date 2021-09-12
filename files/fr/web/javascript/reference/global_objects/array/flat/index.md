---
title: Array.prototype.flat()
slug: Web/JavaScript/Reference/Global_Objects/Array/flat
tags:
  - Array
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/flat
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/flat
---
{{JSRef}}

La méthode **`flat()`** permet de créer un nouveau tableau contenant les éléments des sous-tableaux du tableau passé en argument, qui sont concaténés récursivement pour atteindre une profondeur donnée.

## Syntaxe

    var nouveauTableau = monTableau.flat([profondeur]);

### Paramètres

- `profondeur` {{optional_inline}}
  - : Le niveau de profondeur en termes d'imbrication de tableau. Autrement dit, jusqu'à quel niveau d'imbrication un tableau imbriqué doit il être aplati. La valeur par défaut est 1.

### Valeur de retour

Un nouveau tableau qui contient la concaténation des éléments des sous-tableaux du tableau passé en argument.

## Exemples

### Aplatir des tableaux imbriqués

```js
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]
```

### Aplatir et combler les trous

La méthode `flat()` permet également de retirer les « trous » d'un tableau :

```js
var arr4 = [1, 2, , 4, 5];
arr4.flat();
// [1, 2, 4, 5]
```

## Équivalent

### `reduce` et `concat`

```js
var arr = [1, 2, [3, 4]];

// pour un tableau avec un seul niveau de profondeur
arr.flat();
// est équivalent à
arr.reduce((acc, val) => acc.concat(val), []);
// [1, 2, 3, 4]

// avec la décomposition et les compositions flechées, on peut écrire :
const flat = arr => [].concat(...arr);
```

### `reduce` + `concat` + `isArray` + récursivité

```js
var arr = [1, 2, [3, 4, [5, 6]]];

// Pour gérer plusieurs niveaux, on pourra utiliser
// une méthode récursive avec reduce et concat
function flatDeep(arr) {
   return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val) : val), []);
};

flatDeep(arr);
// [1, 2, 3, 4, 5, 6]
```

### Utiliser une pile

```js
var arr = [1, 2, [3, 4]];

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
  // à l 'ordre de l'entrée
  return res.reverse();
}

flatStack(arr);
// [1, 2, 3, 4]
```

## Spécifications

| Spécification                                                                                           | État     | Commentaires         |
| ------------------------------------------------------------------------------------------------------- | -------- | -------------------- |
| [ECMAScript 2019](https://www.ecma-international.org/ecma-262/10.0/index.html#sec-array.prototype.flat) | Finalisé | Proposition initiale |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Array.flat")}}

## Voir aussi

- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Array.prototype.concat()")}}
