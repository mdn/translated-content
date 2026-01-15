---
title: "Array : méthode flatMap()"
short-title: flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Array/flatMap
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`flatMap()`** des instances de {{JSxRef("Array")}} retourne un nouveau tableau créé en appliquant une fonction de rappel à chaque élément du tableau, puis en aplatissant le résultat d'un niveau. Elle est identique à une {{JSxRef("Array/map", "map()")}} suivi d'un {{JSxRef("Array/flat", "flat()")}} de profondeur 1 (`arr.map(...args).flat()`), mais légèrement plus efficace que d'appeler ces deux méthodes séparément.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.flatMap()", "shorter")}}

```js interactive-example
const arr = [1, 2, 1];

const result = arr.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result);
// sortie attendue : Array [1, 2, 2, 1]
```

## Syntaxe

```js-nolint
flatMap(callbackFn)
flatMap(callbackFn, thisArg)
```

### Paramètres

- `callbackFn`
  - : La fonction à exécuter pour chaque élément du tableau. Elle doit retourner un tableau contenant les nouveaux éléments du nouveau tableau, ou une seule valeur qui n'est pas un tableau à ajouter au nouveau tableau. La fonction est appelée avec les arguments suivants&nbsp;:
    - `element`
      - : L'élément en cours de traitement dans le tableau.
    - `index`
      - : L'indice de l'élément en cours de traitement dans le tableau.
    - `array`
      - : Le tableau sur lequel `flatMap()` a été appelée.
- `thisArg` {{Optional_Inline}}
  - : La valeur à utiliser comme `this` lors de l'exécution de `callbackFn`. Voir [les méthodes itératives](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives).

### Valeur de retour

Un nouveau tableau avec chaque élément étant le résultat de la fonction de rappel (<i lang="en">callback</i> en anglais) et aplati d'un niveau.

## Description

La méthode `flatMap()` est une [méthode itérative](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives). Voir {{JSxRef("Array.prototype.map()")}} pour une description détaillée de la fonction de rappel. La méthode `flatMap()` est identique à [`map(callbackFn, thisArg)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map) suivie de [`flat(1)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)&nbsp;: pour chaque élément, elle produit un tableau de nouveaux éléments et concatène les tableaux résultants pour former un nouveau tableau. Lire la section [méthodes itératives](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives) pour plus d'informations sur le fonctionnement général de ces méthodes.

La méthode `flatMap()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend seulement que la valeur de `this` possède une propriété `length` et des propriétés à clés entières. Cependant, la valeur retournée par `callbackFn` doit être un tableau pour être aplatie.

### Alternative

#### Pré-allouer et itérer explicitement

```js
const arr = [1, 2, 3, 4];

arr.flatMap((x) => [x, x * 2]);
// est équivalent à
const n = arr.length;
const acc = new Array(n * 2);
for (let i = 0; i < n; i++) {
  const x = arr[i];
  acc[i * 2] = x;
  acc[i * 2 + 1] = x * 2;
}
// [1, 2, 2, 4, 3, 6, 4, 8]
```

Notez que dans ce cas particulier, l'approche avec `flatMap` est plus lente que l'approche avec une boucle for — en raison de la création de tableaux temporaires qui doivent être collectés par le ramasse-miettes, et parce que le tableau retourné n'a pas besoin d'être redimensionné fréquemment. Cependant, `flatMap` peut rester la solution appropriée dans les cas où sa flexibilité et sa lisibilité sont souhaitées.

## Exemples

### `map()` et `flatMap()`

```js
var arr1 = [1, 2, 3, 4];

arr1.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

// seul un niveau est aplati
arr1.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]
```

Bien que ce qui précède aurait pu être obtenu en utilisant simplement `map`, voici un exemple qui met mieux en valeur l'utilisation de `flatMap()`.

Générons une liste de mots à partir d'une liste de phrases.

```js
let tableau = ["Coucou comment", "", "ça va ?"];

tableau.map((x) => x.split(" "));
// [["Coucou", "comment"], [""], ["ça", "va", "?"]]

tableau.flatMap((x) => x.split(" "));
// ["Coucou", "comment", "", "ça", "va", "?"]
```

On notera que la longueur de la liste obtenue avec `flatMap` est différente de la longueur de la liste originale.

### Ajouter et supprimer des éléments lors d'un `map()`

`flatMap` peut être utilisé pour ajouter et supprimer des éléments (modifier le nombre d'éléments) lors d'un `map`. Autrement dit, cela permet de faire correspondre _plusieurs éléments à plusieurs éléments_ (en traitant chaque élément d'entrée séparément), plutôt que toujours _un-à-un_. En ce sens, cela fonctionne comme l'opposé de [filter](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter). Retournez un tableau à 1 élément pour conserver l'élément, un tableau à plusieurs éléments pour en ajouter, ou un tableau à 0 élément pour le supprimer.

```js
// Supposons que nous voulons supprimer tous les nombres négatifs
// et découper les nombres impairs en un nombre pair et un 1
const a = [5, 4, -3, 20, 17, -33, -4, 18];
//         |\  \  x   |  | \   x   x   |
//        [4,1, 4,   20, 16, 1,       18]

const resultat = a.flatMap((n) => {
  if (n < 0) {
    return [];
  }
  return n % 2 === 0 ? [n] : [n - 1, 1];
});
console.log(resultat); // [4, 1, 4, 20, 16, 1, 18]
```

### Utiliser le troisième argument de `callbackFn`

L'argument `array` est utile si vous souhaitez accéder à un autre élément du tableau, en particulier lorsque vous n'avez pas de variable existante qui fait référence au tableau. L'exemple suivant utilise d'abord `filter()` pour extraire les stations en service puis utilise `flatMap()` pour créer un nouveau tableau où chaque élément contient une station et la station suivante. Pour la dernière station, il retourne un tableau vide afin de l'exclure du tableau final.

```js
const stations = ["New Haven", "West Haven", "Milford (fermé)", "Stratford"];
const line = stations
  .filter((name) => !name.endsWith("(fermé)"))
  .flatMap((name, idx, arr) => {
    // Sans l'argument arr, il n'y a aucun moyen d'accéder facilement
    // au tableau intermédiaire sans le stocker dans une variable.
    if (idx === arr.length - 1) return []; // la dernière station n'a pas de suivante
    return [`${name} - ${arr[idx + 1]}`];
  });
console.log(line); // ['New Haven - West Haven', 'West Haven - Stratford']
```

L'argument `array` n'est _pas_ le tableau en cours de construction — il n'existe aucun moyen d'accéder au tableau en cours de construction depuis la fonction de rappel.

### Utiliser `flatMap()` sur des tableaux creux

`callbackFn` ne sera pas appelée pour les trous dans le tableau source car `map()` ne le fait pas, tandis que `flat()` ignore les trous dans les tableaux retournés.

```js
console.log([1, 2, , 4, 5].flatMap((x) => [x, x * 2])); // [1, 2, 2, 4, 4, 8, 5, 10]
console.log([1, 2, 3, 4].flatMap((x) => [, x * 2])); // [2, 4, 6, 8]
```

### Appeler `flatMap()` sur des objets qui ne sont pas des tableaux

La méthode `flatMap()` lit la propriété `length` de `this` puis accède à chaque propriété dont la clé est un entier non négatif inférieur à `length`. Si la valeur de retour de la fonction de rappel n'est pas un tableau, elle est toujours ajoutée directement au tableau résultat.

```js
const objetSimilaireTableau = {
  length: 3,
  0: 1,
  1: 2,
  2: 3,
  3: 4, // ignoré par flatMap() car length vaut 3
};
console.log(
  Array.prototype.flatMap.call(objetSimilaireTableau, (x) => [x, x * 2]),
);
// [1, 2, 2, 4, 3, 6]

// Les objets de type tableau retournés par la fonction de rappel ne seront pas aplatís
console.log(
  Array.prototype.flatMap.call(objetSimilaireTableau, (x) => ({
    length: 1,
    0: x,
  })),
);
// [ { '0': 1, length: 1 }, { '0': 2, length: 1 }, { '0': 3, length: 1 } ]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.concat()")}}
- La méthode {{JSxRef("Array.prototype.flat()")}}
- La méthode {{JSxRef("Array.prototype.map()")}}
- La méthode {{JSxRef("Array.prototype.reduce()")}}
- [Prothèse d'émulation de `Array.prototype.flatMap` dans core‑js <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
- [Prothèse d'émulation de `Array.prototype.flatMap` dans es‑shims <sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.flatmap)
