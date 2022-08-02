---
title: Array.prototype.flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Array/flatMap
tags:
  - Array
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/flatMap
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/flatMap
---
{{JSRef}}

La méthode **`flatMap()`** permet d'appliquer une fonction à chaque élément du tableau puis d'aplatir le résultat en un tableau. Cela correspond à l'enchaînement de {{jsxref("Array.prototype.map()")}} suivi de {{jsxref("Array.prototype.flat()")}} de profondeur 1. `flatMap` est plus efficace que la combinaison de ces deux opérations, souvent réalisées conjointement.

## Syntaxe

```js
var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])
```

### Paramètres

- `callback`

  - : La fonction qui produit un élément du nouveau tableau et qui prend trois arguments :

    - `currentValue`
      - : La valeur du tableau qui est traitée.
    - `index`{{optional_inline}}
      - : L'indice de l'élément du tableau qui est traitée.
    - `array`{{optional_inline}}
      - : Le tableau sur lequel `flatMap` a été appelée.

- `thisArg`{{optional_inline}}
  - : La valeur à utiliser comme contexte `this` lors de l'exécution de `callback`.

### Valeur de retour

Un nouveau tableau composé d'éléments résultants de la fonction de rappel (_callback_) et aplati d'un niveau de profondeur.

## Description

Pour la fonction de rappel, voir {{jsxref("Array.prototype.map()")}}. La méthode `flatMap()` est identique à un appel de {{jsxref("Array.prototype.map()")}} suivi d'un appel de {{jsxref("Array.prototype.flat()")}} avec la profondeur 1.

## Exemples

### `map()` et `flatMap()`

```js
var arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// seul un niveau est aplati
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]
```

On peut utiliser un autre exemple où on génère une liste de mots à partir d'une liste de phrases :

```js
let tableau1 = ["Coucou comment", "", "ça va ?"];

tableau1.map(x => x.split(" "));
// [["Coucou", "comment"], [""], ["ça", "va", "?"]]

tableau1.flatMap(x => x.split(" "));
// ["Coucou", "comment", "", "ça", "va", "?"]
```

On notera que la longueur de la liste obtenue avec `flatMap` est différente de la longueur de la liste originale.

```
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Équivalent

### `reduce()` et `concat()`

```js
var arr = [1, 2, 3, 4];

arr.flatMap(x => [x, x * 2]);
// est équivalent à
arr.reduce((acc, x) => acc.concat([x, x * 2]), []);
// [1, 2, 2, 4, 3, 6, 4, 8]
```

## Spécifications

| Spécification                                                                                              | État     | Commentaires         |
| ---------------------------------------------------------------------------------------------------------- | -------- | -------------------- |
| [ECMAScript 2019](https://www.ecma-international.org/ecma-262/10.0/index.html#sec-array.prototype.flatmap) | Finalisé | Proposition initiale |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Array.flatMap")}}

## Voir aussi

- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Array.prototype.concat()")}}
