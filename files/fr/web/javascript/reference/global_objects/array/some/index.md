---
title: "Array : méthode some()"
short-title: some()
slug: Web/JavaScript/Reference/Global_Objects/Array/some
l10n:
  sourceCommit: 4bfeb5a89c1528da7cb7847a9ccb93f9b00290f0
---

La méthode **`some()`** des instances {{JSxRef("Array")}} retourne `true` si elle trouve un élément dans le tableau qui satisfait la fonction de test fournie. Sinon, elle retourne `false`.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.some()")}}

```js interactive-example
const array = [1, 2, 3, 4, 5];

// Vérifie si un élément est pair
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Résultat attendu : true
```

## Syntaxe

```js-nolint
some(callbackFn)
some(callbackFn, thisArg)
```

### Paramètres

- `callbackFn`
  - : Une fonction à exécuter pour chaque élément du tableau. Elle doit retourner une valeur [équivalente à vrai](/fr/docs/Glossary/Truthy) pour indiquer que l'élément passe le test, et une valeur [équivalente à faux](/fr/docs/Glossary/Falsy) sinon. La fonction est appelée avec les arguments suivants&nbsp;:
    - `element`
      - : L'élément courant traité dans le tableau.
    - `index`
      - : L'indice de l'élément courant traité dans le tableau.
    - `array`
      - : Le tableau sur lequel `some()` a été appelé.
- `thisArg` {{Optional_Inline}}
  - : Une valeur à utiliser comme `this` lors de l'exécution de `callbackFn`. Voir [méthodes itératives](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives).

### Valeur de retour

`false` si `callbackFn` ne retourne pas une valeur {{Glossary("truthy", "équivalente à vrai")}} pour un élément du tableau&nbsp;; dans le cas contraire, `true` est retourné immédiatement.

## Description

La méthode `some()` est une [méthode itérative](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives). Elle appelle la fonction fournie `callbackFn` une fois pour chaque élément d'un tableau, jusqu'à ce que `callbackFn` retourne une valeur [équivalente à vrai](/fr/docs/Glossary/Truthy). Si un tel élément est trouvé, `some()` retourne immédiatement `true` et cesse d'itérer sur le tableau. Dans le cas contraire, si `callbackFn` retourne une valeur [équivalente à faux](/fr/docs/Glossary/Falsy) pour tous les éléments, `some()` retourne `false`. Consultez la section [méthodes itératives](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives) pour plus d'informations sur le fonctionnement général de ces méthodes.

`some()` correspond à «&nbsp;il existe&nbsp;» en logique mathématique. En particulier, pour un tableau vide, elle retourne `false` pour toute condition.

`callbackFn` n'est invoqué que pour les indices du tableau auxquels des valeurs sont assignées. Il n'est pas invoqué pour les emplacements vides dans les [tableaux creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux).

`some()` ne modifie pas le tableau sur lequel elle est appelée, mais la fonction fournie en tant que `callbackFn` peut le faire. Notez toutefois que la longueur du tableau est enregistrée _avant_ la première invocation de `callbackFn`. Par conséquent&nbsp;:

- `callbackFn` ne visitera aucun élément ajoutés au-delà de la longueur initiale du tableau au moment où l'appel à `some()` a commencé.
- Les modifications apportées aux indices déjà visités ne provoquent pas que `callbackFn` soit invoquée de nouveau pour ces indices.
- Si un élément existant, mais pas encore visité, du tableau est modifié par `callbackFn`, la valeur qui est passée à `callbackFn` sera la valeur au moment où cet élément est visité. Les éléments [supprimés](/fr/docs/Web/JavaScript/Reference/Operators/delete) ne sont pas visités.

> [!WARNING]
> Les modifications concurrentes du type décrit ci‑dessus conduisent souvent à un code difficile à comprendre et doivent généralement être évitées (sauf dans des cas particuliers).

La méthode `some()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle suppose seulement que la valeur `this` possède une propriété `length` et des propriétés indexées par des entiers.

## Exemples

### Tester la valeur des éléments d'un tableau

L'exemple suivant teste si un élément du tableau est supérieur à 10.

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10); // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

### Tester les éléments du tableau avec des fonctions fléchées

[Les fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions) offrent une syntaxe plus concise pour le même test.

```js
[2, 5, 8, 1, 4].some((x) => x > 10); // false
[12, 5, 8, 1, 4].some((x) => x > 10); // true
```

### Vérifier si une valeur est présente dans un tableau

Pour reproduire le comportement de la méthode `includes()`, cette fonction personnalisée retourne `true` si la valeur est présente dans le tableau&nbsp;:

```js
const fruits = ["apple", "banana", "mango", "guava"];

function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}

checkAvailability(fruits, "grapefruit"); // false
checkAvailability(fruits, "banana"); // true
```

### Convertir une valeur en booléen

```js
const TRUTHY_VALUES = [true, "true", 1];

function getBoolean(value) {
  if (typeof value === "string") {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some((t) => t === value);
}

getBoolean(false); // false
getBoolean("false"); // false
getBoolean(1); // true
getBoolean("true"); // true
```

### Utiliser le troisième argument `callbackFn`

L'argument `array` est utile si vous souhaitez accéder à un autre élément du tableau, en particulier lorsque vous n'avez pas de variable qui référence déjà le tableau. L'exemple suivant utilise d'abord `filter()` pour extraire les valeurs positives, puis `some()` pour vérifier si le tableau est strictement croissant.

```js
const numbers = [3, -1, 1, 4, 1, 5];
const isIncreasing = !numbers
  .filter((num) => num > 0)
  .some((num, idx, arr) => {
    // Sans l'argument arr, il est difficile d'accéder
    // au tableau intermédiaire sans le sauvegarder dans une variable.
    if (idx === 0) return false;
    return num <= arr[idx - 1];
  });
console.log(isIncreasing); // false
```

### Utiliser `some()` sur des tableaux creux

`some()` n'exécutera pas son prédicat sur les emplacements vides.

```js
console.log([1, , 3].some((x) => x === undefined)); // false
console.log([1, , 1].some((x) => x !== 1)); // false
console.log([1, undefined, 1].some((x) => x !== 1)); // true
```

### Appeler `some()` sur des objets non-tableaux

La méthode `some()` lit la propriété `length` de `this` puis accède à chaque propriété dont la clé est un entier non négatif inférieur à `length`, jusqu'à ce qu'elles aient toutes été consultées ou que `callbackFn` retourne `true`.

```js
const objetSimilaireTableau = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: 3, // ignoré par some() car length vaut 3
};
console.log(
  Array.prototype.some.call(
    objetSimilaireTableau,
    (x) => typeof x === "number",
  ),
);
// false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.every()")}}
- La méthode {{JSxRef("Array.prototype.forEach()")}}
- La méthode {{JSxRef("Array.prototype.find()")}}
- La méthode {{JSxRef("Array.prototype.includes()")}}
- La méthode {{JSxRef("TypedArray.prototype.some()")}}
- [Prothèse d'émulation de `Array.prototype.some` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
- [Prothèse d'émulation es-shims de `Array.prototype.some` <sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.some)
