---
title: "Array : méthode every()"
short-title: every()
slug: Web/JavaScript/Reference/Global_Objects/Array/every
l10n:
  sourceCommit: 4bfeb5a89c1528da7cb7847a9ccb93f9b00290f0
---

La méthode **`every()`** des instances de {{JSxRef("Array")}} retourne `false` si elle trouve un élément du tableau qui ne satisfait pas la fonction de test fournie. Sinon, elle retourne `true`.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.every()", "shorter")}}

```js interactive-example
const isBelowThreshold = (currentValue) => currentValue < 40;

const array = [1, 30, 39, 29, 10, 13];

console.log(array.every(isBelowThreshold));
// Sortie attendue : true
```

## Syntaxe

```js-nolint
every(callbackFn)
every(callbackFn, thisArg)
```

### Paramètres

- `callbackFn`
  - : La fonction à exécuter pour chaque élément du tableau. Elle doit retourner une valeur [équivalente à vrai](/fr/docs/Glossary/Truthy) pour indiquer que l'élément passe le test, et une valeur [équivalente à faux](/fr/docs/Glossary/Falsy) sinon. La fonction est appelée avec les arguments suivants&nbsp;:
    - `element`
      - : L'élément en cours de traitement dans le tableau.
    - `index`
      - : L'indice de l'élément en cours de traitement dans le tableau.
    - `array`
      - : Le tableau sur lequel `every()` a été appelée.
- `thisArg` {{Optional_Inline}}
  - : Une valeur à utiliser comme `this` lors de l'exécution de `callbackFn`. Voir [méthodes itératives](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives).

### Valeur de retour

`true` sauf si `callbackFn` retourne une valeur {{Glossary("falsy", "équivalente à faux")}} pour un élément du tableau, auquel cas `false` est immédiatement retourné.

## Description

La méthode `every()` est une [méthode itérative](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives). Elle appelle la fonction `callbackFn` fournie une fois pour chaque élément du tableau, jusqu'à ce que `callbackFn` retourne une valeur [équivalente à faux](/fr/docs/Glossary/Falsy). Si un tel élément est trouvé, `every()` retourne immédiatement `false` et arrête l'itération. Sinon, si `callbackFn` retourne une valeur [équivalente à vrai](/fr/docs/Glossary/Truthy) pour tous les éléments, `every()` retourne `true`. Consultez la section [méthodes itératives](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives) pour plus d'informations sur le fonctionnement général de ces méthodes.

`every` agit comme le quantificateur «&nbsp;pour tout&nbsp;» en mathématiques. En particulier, pour un tableau vide, elle retourne `true`. (Il est [trivialement vrai <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Vacuous_truth) que tous les éléments d'un [ensemble vide](https://fr.wikipedia.org/wiki/Ensemble_vide#Propriétés) respectent n'importe quelle condition.)

`callbackFn` n'est appelée que pour les indices du tableau qui ont des valeurs affectées. Elle n'est pas appelée pour les cases vides dans les [tableaux creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux).

La méthode `every()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend seulement que la valeur de `this` possède une propriété `length` et des propriétés à clés entières.

## Exemples

### Tester la valeur des éléments d'un tableau

Dans l'exemple suivant, on teste si tous les éléments du tableau sont supérieurs à 10.

```js
function estAssezGrand(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(estAssezGrand); // false
[12, 54, 18, 130, 44].every(estAssezGrand); // true
```

### Vérifier si un tableau est un sous-ensemble d'un autre tableau

L'exemple suivant teste si tous les éléments d'un tableau sont présents dans un autre tableau.

```js
const estSousEnsemble = (tableau1, tableau2) =>
  tableau2.every((element) => tableau1.includes(element));

console.log(estSousEnsemble([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(estSousEnsemble([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
```

### Utiliser le troisième argument de `callbackFn`

L'argument `array` est utile si vous souhaitez accéder à un autre élément du tableau. L'exemple suivant utilise d'abord `filter()` pour extraire les valeurs positives puis utilise `every()` pour vérifier si le tableau est strictement croissant.

```js
const nombres = [-2, 4, -8, 16, -32];
const estCroissant = nombres
  .filter((num) => num > 0)
  .every((num, idx, arr) => {
    // Sans l'argument arr, il n'y a pas de moyen simple d'accéder
    // au tableau intermédiaire sans le stocker dans une variable.
    if (idx === 0) return true;
    return num > arr[idx - 1];
  });
console.log(estCroissant); // true
```

### Utiliser `every()` sur des tableaux creux

`every()` n'exécutera pas son prédicat sur les cases vides.

```js
console.log([1, , 3].every((x) => x !== undefined)); // true
console.log([2, , 2].every((x) => x === 2)); // true
```

### Appeler `every()` sur des objets qui ne sont pas des tableaux

La méthode `every()` lit la propriété `length` de `this` puis accède à chaque propriété dont la clé est un entier non négatif inférieur à `length` jusqu'à ce qu'elles aient toutes été traitées ou que `callbackFn` retourne `false`.

```js
const objetSimilaireTableau = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: 345, // ignoré par every() car length vaut 3
};
console.log(
  Array.prototype.every.call(
    objetSimilaireTableau,
    (x) => typeof x === "string",
  ),
); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.forEach()")}}
- La méthode {{JSxRef("Array.prototype.some()")}}
- La méthode {{JSxRef("Array.prototype.find()")}}
- La méthode {{JSxRef("TypedArray.prototype.every()")}}
- [Prothèse d'émulation de `Array.prototype.every` dans `core-js`<sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
- [Prothèse d'émulation es-shims de `Array.prototype.every`<sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.every)
