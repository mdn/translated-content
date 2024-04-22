---
title: Array.prototype.findLastIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findLastIndex
l10n:
  sourceCommit: 50e0b640bbd975e1f21f16fa2ec7bd545b57081c
---

{{JSRef}}

La méthode **`findLastIndex()`** parcourt le tableau en sens inverse et renvoie l'indice du premier élément qui correspond au critère fourni par une fonction de test. Si aucun élément ne correspond à ce critère, c'est `-1` qui est renvoyé.

{{EmbedInteractiveExample("pages/js/array-findlastindex.html","shorter")}}

Voir aussi la méthode [`findLast()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast) qui renvoie la valeur du dernier élément qui satisfait au critère de la fonction de test (plutôt que son indice).

## Syntaxe

```js-nolint
// Fonction fléchée
findLastIndex((element) => { /* … */ } )
findLastIndex((element, index) => { /* … */ } )
findLastIndex((element, index, array) => { /* … */ } )

// Fonction de rappel
findLastIndex(fnRappel)
findLastIndex(fnRappel, thisArg)

// Fonction de rappel en incise
findLastIndex(function(element) { /* … */ })
findLastIndex(function(element, index) { /* … */ })
findLastIndex(function(element, index, array) { /* … */ })
findLastIndex(function(element, index, array) { /* … */ }, thisArg)
```

### Paramètres

- `fnRappel`

  - : Une fonction utilisée pour tester les éléments du tableau.

    La fonction est appelée avec les arguments suivants&nbsp;:

    - `element`
      - : L'élément du tableau en cours de traitement.
    - `index`
      - : L'indice de l'élément courant dans le tableau.
    - `array`
      - : Le tableau sur lequel `findLastIndex()` a été appelée.

    La fonction de rappel doit renvoyer une valeur [équivalente à `true`](/fr/docs/Glossary/Truthy) pour indiquer qu'un élément approprié a été trouvé. Ce sera l'indice de l'élément qui sera renvoyé par `findLastIndex()`.

- `thisArg` {{optional_inline}}
  - : L'objet à utiliser comme valeur pour [`this`](/fr/docs/Web/JavaScript/Reference/Operators/this) lors de l'appel à `fnRappel`.

### Valeur de retour

L'indice du dernier (celui avec l'indice le plus élevé) élément du tableau qui passe le test. Si aucun élément ne correspond, c'est `-1` qui est renvoyé.

## Description

La méthode `findLastIndex()` exécute la fonction `fnRappel` une fois pour chaque élément du tableau, dans l'ordre décroissant des indices, jusqu'à ce que `fnRappel` renvoie une valeur [équivalente à `true`](/fr/docs/Glossary/Truthy). `findLastIndex()` renvoie alors l'indice de l'élément correspondant et arrête le parcours du tableau. Si `fnRappel` ne renvoie jamais de valeur équivalente à `true`, `findLastIndex()` renvoie `-1`.

`fnRappel` est appelée pour _chaque_ indice du tableau et pas uniquement pour ceux pour lesquels une valeur a été affectée. Les emplacements vides des [tableaux creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux) se comportent comme avec `undefined`.

Si un paramètre `thisArg` est fourni à `findLastIndex()`, il sera utilisé comme valeur pour `this` à chaque appel de `fnRappel`. S'il n'est pas fourni, [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) sera utilisé pour `this`.

La méthode `findLastIndex()` ne modifie pas le tableau sur lequel elle est appelée, mais la fonction fournie pour `fnRappel` peut le modifier. Les éléments traités par `findLastIndex()` sont fixés _avant_ le premier appel à `fnRappel`. Ainsi&nbsp;:

- `fnRappel` ne parcourra pas les éléments ajoutés après le début de l'appel à `findLastIndex()`.
- Les éléments qui sont affectés à des indices ayant déjà été visités ne seront pas revus par `fnRappel`.
- Les éléments qui sont affectés à des indices en dehors de l'intervalle du tableau ne seront pas parcourus par `fnRappel`.
- Si un élément existant du tableau et qui n'a pas encore été traité mais est modifié par `fnRappel`, la valeur qui sera passée à `fnRappel` sera la valeur au moment où `findLastIndex()` visite l'indice de l'élément.
- Les éléments qui sont [supprimés avec `delete`](/fr/docs/Web/JavaScript/Reference/Operators/delete) sont tout de même parcourus.

> **Attention :** Les modifications concurrentes comme celles qui sont décrites dans le paragraphe précédent mènent souvent à du code difficilement compréhensible et devraient généralement être évitées.

La méthode `findLastIndex()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_génériques). Elle s'attend uniquement à ce que la valeur `this` ait une propriété `length` et des propriétés dont les clés sont des entiers.

## Exemples

### Trouver l'indice du dernier nombre premier dans le tableau

Dans l'exemple qui suit, on trouve l'indice du dernier élément du tableau qui est un nombre premier (ou on renvoie `-1` si le tableau ne contient pas de nombre premier)&nbsp;:

```js
function estPremier(element) {
  if (element % 2 === 0 || element < 2) {
    return false;
  }
  for (let diviseur = 3; diviseur <= Math.sqrt(element); diviseur += 2) {
    if (element % diviseur === 0) {
      return false;
    }
  }
  return true;
}

console.log([4, 6, 8, 12].findLastIndex(estPremier)); // -1, aucun nombre trouvé
console.log([4, 5, 7, 8, 9, 11, 12].findLastIndex(estPremier)); // 5
```

### Utiliser `findLastIndex()` sur des tableaux creux

En cherchant `undefined` dans un tableau creux, on peut obtenir l'indice d'un emplacement vide.

```js
console.log([1, , 3].findLastIndex((x) => x === undefined)); // 1
```

### Utiliser `findLastIndex()` sur des objets qui ne sont pas des tableaux

La méthode `findLastIndex()` lit la propriété `length` de `this` puis parcourt les propriétés dont les clés sont des nombres entiers.

```js
const semblableTableau = {
  length: 3,
  0: 2,
  1: 7.3,
  2: 4,
};
console.log(
  Array.prototype.findLastIndex.call(semblableTableau, (x) =>
    Number.isInteger(x),
  ),
); // 2
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Une prothèse d'émulation pour `Array.prototype.findLastIndex()` dans la bibliothèque tierce `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [`Array.prototype.findLast()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast)
- [`Array.prototype.find()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [`Array.prototype.indexOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
