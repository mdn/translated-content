---
title: "Array : méthode findIndex()"
short-title: findIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findIndex
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`findIndex()`** des instances de {{JSxRef("Array")}} retourne l'indice du premier élément d'un tableau qui satisfait la fonction de test fournie.
Si aucun élément ne satisfait la fonction de test, -1 est retourné.

Voir aussi la méthode {{JSxRef("Array/find", "find()")}}, qui retourne le premier élément qui satisfait la fonction de test (et non son indice).

{{InteractiveExample("Démonstrations JavaScript&nbsp;: Array.prototype.findIndex()", "shorter")}}

```js interactive-example
const array = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array.findIndex(isLargeNumber));
// Résultat attendu : 3
```

## Syntaxe

```js-nolint
findIndex(callbackFn)
findIndex(callbackFn, thisArg)
```

### Paramètres

- `callbackFn`
  - : Une fonction à exécuter pour chaque élément du tableau. Elle doit retourner une valeur [vraie](/fr/docs/Glossary/Truthy) pour indiquer qu'un élément correspondant a été trouvé, et une valeur [fausse](/fr/docs/Glossary/Falsy) sinon. La fonction est appelée avec les arguments suivants&nbsp;:
    - `element`
      - : L'élément actuellement traité dans le tableau.
    - `index`
      - : L'indice de l'élément actuellement traité dans le tableau.
    - `array`
      - : Le tableau sur lequel la méthode `findIndex()` a été appelée.
- `thisArg` {{Optional_Inline}}
  - : Une valeur à utiliser comme `this` lors de l'exécution de `callbackFn`. Voir [méthodes itératives](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives).

### Valeur de retour

Un index d'un élément du tableau qui réussit le test décrit, `-1` sinon.

## Description

La méthode `findIndex()` est une [méthode itérative](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives). Elle appelle la fonction `callbackFn` fournie une fois pour chaque élément du tableau, dans l'ordre croissant des indices, jusqu'à ce que `callbackFn` retourne une [valeur vraie](/fr/docs/Glossary/Truthy). `findIndex()` retourne alors l'indice de cet élément et arrête l'itération. Si `callbackFn` ne retourne jamais de valeur vraie, `findIndex()` retourne `-1`. Consultez la section [méthodes itératives](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives) pour plus d'informations sur le fonctionnement général de ces méthodes.

`callbackFn` est appelée pour chaque indice du tableau, pas seulement ceux qui ont une valeur assignée. Les cases vides dans les [tableaux creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux) se comportent comme si leur valeur était `undefined`.

La méthode `findIndex()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend seulement que la valeur de `this` possède une propriété `length` et des propriétés à clé entière.

## Exemples

### Trouver l'index d'un nombre premier dans un tableau

L'exemple suivant retourne l'indice du premier élément du tableau qui est un nombre premier, ou `-1` s'il n'y en a pas.

```js
function estPremier(n) {
  if (n < 2) {
    return false;
  }
  if (n % 2 === 0) {
    return n === 2;
  }
  for (let facteur = 3; facteur * facteur <= n; facteur += 2) {
    if (n % facteur === 0) {
      return false;
    }
  }
  return true;
}

console.log([4, 6, 8, 9, 12].findIndex(estPremier)); // -1, aucun trouvé
console.log([4, 6, 7, 9, 12].findIndex(estPremier)); // 2 (array[2] vaut 7)
```

> [!NOTE]
> L'implémentation de `estPremier()` est uniquement destinée à la démonstration. Pour une utilisation réelle, il est préférable d'utiliser un algorithme fortement mémoïsé, comme le [crible d'Ératosthène](https://fr.wikipedia.org/wiki/Crible_d%27%C3%89ratosth%C3%A8ne), afin d'éviter des calculs répétés.

### Utiliser le troisième argument de `callbackFn`

L'argument `array` est utile si vous souhaitez accéder à un autre élément du tableau, en particulier lorsque vous n'avez pas de variable existante qui fait référence au tableau. L'exemple suivant utilise d'abord `filter()` pour extraire les valeurs positives, puis `findIndex()` pour trouver le premier élément qui est inférieur à ses voisins.

```js
const nombres = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const premierCreux = nombres
  .filter((num) => num > 0)
  .findIndex((num, idx, arr) => {
    // Sans l'argument arr, il n'y a aucun moyen simple d'accéder
    // au tableau intermédiaire sans le stocker dans une variable.
    if (idx > 0 && num >= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && num >= arr[idx + 1]) return false;
    return true;
  });
console.log(premierCreux); // 1
```

### Utiliser `findIndex()` sur des tableaux creux

Vous pouvez rechercher `undefined` dans un tableau creux et obtenir l'indice d'une case vide.

```js
console.log([1, , 3].findIndex((x) => x === undefined)); // 1
```

### Appeler `findIndex()` sur des objets qui ne sont pas des tableaux

La méthode `findIndex()` lit la propriété `length` de `this` puis accède à chaque propriété dont la clé est un entier non négatif inférieur à `length`.

```js
const objetSimilaireTableauemblantTableau = {
  length: 3,
  "-1": 0.1, // ignoré par findIndex() car -1 < 0
  0: 2,
  1: 7.3,
  2: 4,
};
console.log(
  Array.prototype.findIndex.call(
    objetSimilaireTableauemblantTableau,
    (x) => !Number.isInteger(x),
  ),
); // 1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.find()")}}
- La méthode {{JSxRef("Array.prototype.findLast()")}}
- La méthode {{JSxRef("Array.prototype.findLastIndex()")}}
- La méthode {{JSxRef("Array.prototype.indexOf()")}}
- La méthode {{JSxRef("Array.prototype.lastIndexOf()")}}
- La méthode {{JSxRef("TypedArray.prototype.findIndex()")}}
- [Prothèse d'émulation core-js pour `Array.prototype.findIndex` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
- [Prothèse d'émulation es-shims pour `Array.prototype.findIndex` <sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.findindex)
