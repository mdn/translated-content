---
title: "Array : méthode filter()"
short-title: filter()
slug: Web/JavaScript/Reference/Global_Objects/Array/filter
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`filter()`** des instances de {{JSxRef("Array")}} crée une [copie superficielle](/fr/docs/Glossary/Shallow_copy) d'une portion d'un tableau donné, filtrée pour ne contenir que les éléments du tableau d'origine qui passent le test implémenté par la fonction fournie.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.filter()")}}

```js interactive-example
const words = ["pulvériser", "élite", "exubérant", "destruction", "présent"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Résultat attendu : Array ["exubérant", "destruction", "présent"]
```

## Syntaxe

```js-nolint
filter(callbackFn)
filter(callbackFn, thisArg)
```

### Paramètres

- `callbackFn`
  - : Une fonction à exécuter pour chaque élément du tableau. Elle doit retourner une valeur [vraie](/fr/docs/Glossary/Truthy) pour conserver l'élément dans le tableau résultant, et une valeur [fausse](/fr/docs/Glossary/Falsy) sinon. La fonction est appelée avec les arguments suivants&nbsp;:
    - `element`
      - : L'élément courant traité dans le tableau.
    - `index`
      - : L'indice de l'élément courant traité dans le tableau.
    - `array`
      - : Le tableau sur lequel `filter()` a été appelée.
- `thisArg` {{Optional_Inline}}
  - : Valeur à utiliser comme `this` lors de l'exécution de `callbackFn`. Voir [méthodes itératives](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives).

### Valeur de retour

Une [copie superficielle](/fr/docs/Glossary/Shallow_copy) du tableau donné contenant uniquement les éléments qui passent le test. Si aucun élément ne passe le test, un tableau vide est renvoyé.

## Description

La méthode `filter()` est une [méthode itérative](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives). Elle appelle la fonction `callbackFn` fournie une fois pour chaque élément d'un tableau, et construit un nouveau tableau contenant toutes les valeurs pour lesquelles `callbackFn` retourne une valeur [vraie](/fr/docs/Glossary/Truthy). Les éléments du tableau qui ne passent pas le test de `callbackFn` ne sont pas inclus dans le nouveau tableau. Consultez la section [méthodes itératives](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives) pour plus d'informations sur le fonctionnement général de ces méthodes.

`callbackFn` n'est appelée que pour les indices du tableau qui ont une valeur assignée. Elle n'est pas appelée pour les cases vides dans les [tableaux creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux).

La méthode `filter()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend seulement que la valeur de `this` possède une propriété `length` et des propriétés à clé entière.

## Exemples

### Filtrer toutes les petites valeurs

L'exemple suivant utilise `filter()` pour créer un tableau filtré dans lequel tous les éléments dont la valeur est inférieure à 10 ont été retirés.

```js
function assezGrand(valeur) {
  return valeur >= 10;
}

const filtré = [12, 5, 8, 130, 44].filter(assezGrand);
// filtré vaut [12, 130, 44]
```

### Trouver tous les nombres premiers dans un tableau

L'exemple suivant retourne tous les nombres premiers du tableau&nbsp;:

```js
const tableau = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

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

console.log(tableau.filter(estPremier)); // [2, 3, 5, 7, 11, 13]
```

> [!NOTE]
> L'implémentation de `estPremier()` est uniquement à des fins de démonstration. Pour une application réelle, il serait préférable d'utiliser un algorithme fortement mémoïsé comme le [Crible d'Ératosthène](https://fr.wikipedia.org/wiki/Crible_d%27%C3%89ratosth%C3%A8ne) pour éviter les calculs répétés.

### Filtrer les entrées invalides d'un JSON

L'exemple suivant utilise `filter()` pour créer un JSON filtré contenant tous les éléments dont l'`id` est numérique et non nul.

```js
const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
];

let entréesInvalides = 0;

function filtrerParID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true;
  }
  entréesInvalides++;
  return false;
}

const arrByID = arr.filter(filtrerParID);

console.log("Tableau filtré\n", arrByID);
// Tableau filtré
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log("Nombre d'entrées invalides =", entréesInvalides);
// Nombre d'entrées invalides = 5
```

### Recherche dans un tableau

L'exemple suivant utilise `filter()` pour filtrer le contenu d'un tableau selon un critère de recherche.

```js
const fruits = ["pomme", "banane", "raisin", "mangue", "orange"];

/**
 * Filtrer les éléments du tableau selon un critère de recherche (requête)
 */
function filtrerÉléments(arr, requête) {
  return arr.filter((el) => el.toLowerCase().includes(requête.toLowerCase()));
}

console.log(filtrerÉléments(fruits, "po")); // ['pomme']
console.log(filtrerÉléments(fruits, "an")); // ['banane', 'mangue', 'orange']
```

### Utiliser le troisième argument de `callbackFn`

L'argument `array` est utile si vous souhaitez accéder à un autre élément du tableau, en particulier lorsque vous n'avez pas de variable existante qui fait référence au tableau. L'exemple suivant utilise d'abord `map()` pour extraire l'identifiant numérique de chaque nom puis utilise `filter()` pour sélectionner ceux qui sont supérieurs à leurs voisins.

```js
const noms = ["JC63", "Bob132", "Ursula89", "Ben96"];
const grandsIDs = noms
  .map((nom) => parseInt(nom.match(/\d+/)[0], 10))
  .filter((id, idx, arr) => {
    // Sans l'argument arr, il n'y a pas de moyen simple d'accéder
    // au tableau intermédiaire sans le stocker dans une variable.
    if (idx > 0 && id <= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && id <= arr[idx + 1]) return false;
    return true;
  });
console.log(grandsIDs); // [132, 96]
```

L'argument `array` n'est _pas_ le tableau en cours de construction — il n'est pas possible d'accéder au tableau en cours de construction depuis la fonction de rappel.

### Utiliser `filter()` sur des tableaux creux

`filter()` ignore les cases vides.

```js
console.log([1, , undefined].filter((x) => x === undefined)); // [undefined]
console.log([1, , undefined].filter((x) => x !== 2)); // [1, undefined]
```

### Appeler `filter()` sur des objets qui ne sont pas des tableaux

La méthode `filter()` lit la propriété `length` de `this` puis accède à chaque propriété dont la clé est un entier non négatif inférieur à `length`.

```js
const objetSimilaireTableau = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: "a", // ignoré par filter() car length vaut 3
};
console.log(
  Array.prototype.filter.call(objetSimilaireTableau, (x) => x <= "b"),
);
// [ 'a', 'b' ]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.forEach()")}}
- La méthode {{JSxRef("Array.prototype.every()")}}
- La méthode {{JSxRef("Array.prototype.map()")}}
- La méthode {{JSxRef("Array.prototype.some()")}}
- La méthode {{JSxRef("Array.prototype.reduce()")}}
- La méthode {{JSxRef("TypedArray.prototype.filter()")}}
- [Prothèse d'émulation de `Array.prototype.filter` dans core-js <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
- [Prothèse d'émulation es-shims de `Array.prototype.filter` <sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.filter)
