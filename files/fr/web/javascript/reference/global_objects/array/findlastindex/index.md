---
title: "Array : méthode findLastIndex()"
short-title: findLastIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findLastIndex
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`findLastIndex()`** des instances de {{JSxRef("Array")}} parcourt le tableau dans l'ordre inverse et retourne l'indice du premier élément qui satisfait la fonction de test fournie.
Si aucun élément ne satisfait la fonction de test, `-1` est retourné.

Voir aussi la méthode {{JSxRef("Array/findLast", "findLast()")}}, qui retourne la valeur du dernier élément qui satisfait la fonction de test (plutôt que son indice).

{{InteractiveExample("JavaScript Demo: Array.prototype.findLastIndex()", "shorter")}}

```js interactive-example
const array = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(array.findLastIndex(isLargeNumber));
// Résultat attendu: 3
// Indice de l'élément dont la valeur est: 130
```

## Syntaxe

```js-nolint
findLastIndex(callbackFn)
findLastIndex(callbackFn, thisArg)
```

### Paramètres

- `callbackFn`
  - : Une fonction à exécuter pour chaque élément du tableau. Elle doit retourner un [équivalent à vrai](/fr/docs/Glossary/Truthy) pour indiquer qu'un élément correspondant a été trouvé, et un [équivalent à faux](/fr/docs/Glossary/Falsy) sinon. La fonction est appelée avec les arguments suivants&nbsp;:
    - `element`
      - : L'élément courant en cours de traitement dans le tableau.
    - `index`
      - : L'indice de l'élément courant en cours de traitement dans le tableau.
    - `array`
      - : Le tableau sur lequel `findLastIndex()` a été appelé.
- `thisArg` {{Optional_Inline}}
  - : Une valeur à utiliser comme `this` lors de l'exécution de `callbackFn`. Voir [méthodes itératives](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives).

### Valeur de retour

Retourne l'indice du dernier élément (ayant l'indice le plus élevé) du tableau qui satisfait le test fourni. Sinon, retourne `-1` si aucun élément correspondant n'est trouvé.

## Description

La méthode `findLastIndex()` est une méthode itérative. Elle appelle la fonction fournie `callbackFn` une fois pour chaque élément du tableau, dans l'ordre décroissant des indices, jusqu'à ce que `callbackFn` retourne un [équivalent à vrai](/fr/docs/Glossary/Truthy). `findLastIndex()` retourne alors l'indice de cet élément et cesse d'itérer sur le tableau. Si `callbackFn` ne retourne jamais un [équivalent à vrai](/fr/docs/Glossary/Truthy), `findLastIndex()` retourne `-1`. Consultez la section [méthodes itératives](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives) pour plus d'informations sur le fonctionnement général de ces méthodes.

`callbackFn` est invoquée pour _chaque_ indice du tableau, pas seulement pour ceux qui ont une valeur assignée. Les emplacements vides dans les [tableaux creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux) se comportent comme `undefined`.

La méthode `findLastIndex()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend seulement que la valeur `this` possède une propriété `length` et des propriétés indexées par des clés entières.

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

> [!NOTE]
> L'implémentation de `estPremier()` est fournie à titre d'exemple seulement. Pour une application réelle, préférez un algorithme fortement mémoïsé tel que le [Crible d'Ératosthène](https://fr.wikipedia.org/wiki/Crible_d%27%C3%89ratosth%C3%A8ne) afin d'éviter des calculs répétés.

### Utiliser le troisième argument de `callbackFn`

L'argument `array` est utile si vous voulez accéder à un autre élément du tableau, en particulier lorsque vous ne disposez pas d'une variable qui référence déjà ce tableau. L'exemple suivant utilise d'abord `filter()` pour extraire les valeurs positives, puis `findLastIndex()` pour trouver le dernier élément qui est inférieur à ses voisins.

```js
const nombres = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const dernierCreux = nombres
  .filter((num) => num > 0)
  .findLastIndex((num, idx, arr) => {
    // Sans l'argument arr, il est impossible d'accéder facilement au
    // tableau intermédiaire sans le sauvegarder dans une variable.
    if (idx > 0 && num >= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && num >= arr[idx + 1]) return false;
    return true;
  });
console.log(dernierCreux); // 6
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
  3: 3, // ignored by findLastIndex() since length is 3
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

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections) guide
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.find()")}}
- La méthode {{JSxRef("Array.prototype.findIndex()")}}
- La méthode {{JSxRef("Array.prototype.findLast()")}}
- La méthode {{JSxRef("Array.prototype.indexOf()")}}
- La méthode {{JSxRef("Array.prototype.lastIndexOf()")}}
- La méthode {{JSxRef("TypedArray.prototype.findLastIndex()")}}
- [Prothèse d'émulation de `Array.prototype.findLastIndex` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#array-find-from-last)
- [Prothèse d'émulation es-shims de `Array.prototype.findLastIndex` <sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.findlastindex)
