---
title: Array.prototype.findLast()
slug: Web/JavaScript/Reference/Global_Objects/Array/findLast
l10n:
  sourceCommit: 50e0b640bbd975e1f21f16fa2ec7bd545b57081c
---

{{JSRef}}

La méthode **`findLast()`** parcourt un tableau dans le sens inverse et renvoie le premier élément rencontré qui correspond au critère fourni par la fonction passée en argument. Si aucun élément ne correspond au critère de la fonction de test, ce sera, [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) qui sera renvoyé.

{{EmbedInteractiveExample("pages/js/array-findlast.html","shorter")}}

Si vous souhaitez trouver&nbsp;:

- Le _premier_ élément du tableau qui correspond, utilisez [`find()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find),
- L'_indice_ du dernier élément du tableau qui correspond, utilisez [`findLastIndex()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex).
- L'_indice d'une valeur_, utilisez [`indexOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf). Cette méthode est semblable à [`findIndex()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex), mais compare chaque élément du tableau avec la valeur indiquée plutôt que d'utiliser une fonction de test.
- Si une valeur _existe_ dans un tableau, utilisez [`includes()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/includes). Là encore, cette méthode compare chaque élément du tableau pour une égalité avec la valeur indiquée plutôt que d'utiliser une fonction de test.
- Si un élément quelconque du tableau respecte le critère d'une fonction de test, utilisez [`some()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/some).

## Syntaxe

```js-nolint
// Fonction fléchée
findLast((element) => { /* … */ } )
findLast((element, index) => { /* … */ } )
findLast((element, index, array) => { /* … */ } )

// Fonction de rappel
findLast(fnRappel)
findLast(fnRappel, thisArg)

// Fonction de rappel en incise
findLast(function(element) { /* … */ })
findLast(function(element, index) { /* … */ })
findLast(function(element, index, array) { /* … */ })
findLast(function(element, index, array) { /* … */ }, thisArg)
```

### Paramètres

- `fnRappel`

  - : Une fonction utilisée pour tester les éléments du tableau. Elle est appelée avec les arguments suivants&nbsp;:

    - `element`
      - : L'élément courant du tableau.
    - `index`
      - : L'indice, c'est-à-dire la position, de l'élément courant dans le tableau.
    - `array`
      - : Le tableau sur lequel `findLast()` a été appelé.

    La fonction de rappel doit renvoyer une valeur [équivalente à `true`](/fr/docs/Glossary/Truthy) pour indiquer qu'un élément approprié a été trouvé. Ce sera la valeur de l'élément qui sera renvoyée par `findLast()`.

- `thisArg` {{optional_inline}}
  - : L'objet à utiliser comme valeur pour [`this`](/fr/docs/Web/JavaScript/Reference/Operators/this) lors de l'appel à `fnRappel`.

### Valeur de retour

La valeur de l'élément du tableau avec l'indice le plus haut et qui correspond à la fonction de test fournie, ou [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) si aucun élément correspondant n'a été trouvé.

## Description

La méthode `findLast()` exécute la fonction `fnRappel` une fois pour chaque élément du tableau, dans l'ordre décroissant des indices, jusqu'à ce que `fnRappel` renvoie une valeur [équivalente à `true`](/fr/docs/Glossary/Truthy). `findLast()` renvoie alors la valeur de l'élément correspondant et arrête le parcours du tableau. Si `fnRappel` ne renvoie jamais de valeur équivalente à `true`, `findLast()` renvoie [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined).

`fnRappel` est appelée pour _chaque_ indice du tableau et pas uniquement pour ceux pour lesquels une valeur a été affectée. Les emplacements vides des [tableaux creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux) se comportent comme avec `undefined`.

Si un paramètre `thisArg` est fourni à `findLast()`, il sera utilisé comme valeur pour `this` à chaque appel de `fnRappel`. S'il n'est pas fourni, [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) sera utilisé pour `this`.

La méthode `findLast()` ne modifie pas le tableau sur lequel elle est appelée, mais la fonction fournie pour `fnRappel` peut le modifier. Les éléments traités par `findLast()` sont fixés _avant_ le premier appel à `fnRappel`. Ainsi&nbsp;:

- `fnRappel` ne parcourra pas les éléments ajoutés après le début de l'appel à `findLast()`.
- Les éléments qui sont affectés à des indices ayant déjà été visités ne seront pas revus par `fnRappel`.
- Les éléments qui sont affectés à des indices en dehors de l'intervalle du tableau ne seront pas parcourus par `fnRappel`.
- Si un élément existant du tableau et qui n'a pas encore été traité mais est modifié par `fnRappel`, la valeur qui sera passée à `fnRappel` sera la valeur au moment où `findLast()` visite l'indice de l'élément.
- Les éléments qui sont [supprimés avec `delete`](/fr/docs/Web/JavaScript/Reference/Operators/delete) sont tout de même parcourus.

> **Attention :** Les modifications concurrentes comme celles qui sont décrites dans le paragraphe précédent mènent souvent à du code difficilement compréhensible et devraient généralement être évitées.

La méthode `findLast()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_génériques). Elle s'attend uniquement à ce que la valeur `this` ait une propriété `length` et des propriétés dont les clés sont des entiers.

## Exemples

### Trouver le dernier objet d'un tableau dont la propriété correspond

Dans cet exemple, on illustre comment créer un test manipulant les propriétés des éléments du tableau.

```js
const inventaire = [
  { nom: "pommes", quantite: 2 },
  { nom: "bananes", quantite: 0 },
  { nom: "poissons", quantite: 1 },
  { nom: "cerises", quantite: 5 },
];

// Renvoie true si le stock est faible
function pasSuffisant(item) {
  return item.quantite < 2;
}

console.log(inventaire.findLast(pasSuffisant));
// { nom: "poissons", quantite: 1 }
```

#### En utilisant les fonctions fléchées et la décomposition

L'exemple précédent peut être écrit à l'aide d'une fonction fléchée et [une décomposition d'objet](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#décomposer_un_objet)&nbsp;:

```js
const inventaire = [
  { nom: "pommes", quantite: 2 },
  { nom: "bananes", quantite: 0 },
  { nom: "poissons", quantite: 1 },
  { nom: "cerises", quantite: 5 },
];

const resultat = inventaire.findLast(({ quantite }) => quantite < 2);

console.log(resultat);
// { name: "poissons", quantite: 1 }
```

### Trouver le dernier nombre premier d'un tableau

Dans l'exemple suivant, on trouve le dernier élément du tableau qui est un nombre premier (ou on renvoie [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) si le tableau ne contient pas de nombre premier)&nbsp;:

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

console.log([4, 6, 8, 12].findLast(estPremier)); // undefined, pas de nombre premier
console.log([4, 5, 7, 8, 9, 11, 12].findLast(estPremier)); // 11
```

### Utiliser `findLast()` sur des tableaux creux

Les emplacements vides d'un tableau _sont_ parcourus. Ils sont traités comme s'ils avaient la valeur `undefined`.

```js
// On déclare un tableau sans élément pour les indices 2, 3, et 4
const array = [0, 1, , , , 5, 6];

// Le parcourt suivant montre tous les indices et pas uniquement
// ceux avec des valeurs affectées
array.findLast((valeur, index) => {
  console.log(`Parcours de l'index ${index} avec la valeur ${valeur}`);
});
// Parcours de l'index 6 avec la valeur 6
// Parcours de l'index 5 avec la valeur 5
// Parcours de l'index 4 avec la valeur undefined
// Parcours de l'index 3 avec la valeur undefined
// Parcours de l'index 2 avec la valeur undefined
// Parcours de l'index 1 avec la valeur 1
// Parcours de l'index 0 avec la valeur 0

// Tous les indices sont affichés, y compris ceux qui sont
// supprimés
array.findLast((value, index) => {
  // On supprime l'élément 5 à la première itération
  if (index === 6) {
    console.log(`Suppression de array[5] avec la valeur ${array[5]}`);
    delete array[5];
  }
  // L'élément 5 est toujours parcouru, même supprimé
  console.log(`Parcours de l'index ${index} avec la valeur ${value}`);
});
// Suppression de array[5] avec la valeur 5
// Parcours de l'index 6 avec la valeur 6
// Parcours de l'index 5 avec la valeur undefined
// Parcours de l'index 4 avec la valeur undefined
// Parcours de l'index 3 avec la valeur undefined
// Parcours de l'index 2 avec la valeur undefined
// Parcours de l'index 1 avec la valeur 1
// Parcours de l'index 0 avec la valeur 0
```

### Appeler `findLast()` sur des objets qui ne sont pas des tableaux

La méthode `findLast()` lit la propriété `length` de `this` puis parcourt les propriétés dont les clés sont des nombres entiers.

```js
const semblableTableau = {
  length: 3,
  0: 2,
  1: 7.3,
  2: 4,
};
console.log(
  Array.prototype.findLast.call(semblableTableau, (x) => Number.isInteger(x)),
); // 4
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Une prothèse d'émulation pour `Array.prototype.findLast()` dans la bibliothèque tierce `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [`Array.prototype.findLastIndex()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex) qui trouve le dernier élément correspondant et renvoie son indice
- [`Array.prototype.includes()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) qui teste si une valeur existe dans le tableau
- [`Array.prototype.filter()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) qui crée un nouveau tableau ne contenant que les éléments correspondant à un critère
- [`Array.prototype.every()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/every) qui teste si tous les éléments du tableau correspondent à un critère
- [`Array.prototype.some()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/some) qui teste si au moins un élément correspond à un critère
