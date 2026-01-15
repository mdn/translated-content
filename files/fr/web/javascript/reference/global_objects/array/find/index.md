---
title: "Array : méthode find()"
short-title: find()
slug: Web/JavaScript/Reference/Global_Objects/Array/find
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`find()`** des instances de {{JSxRef("Array")}} retourne le premier élément du tableau fourni qui satisfait la fonction de test donnée.
Si aucune valeur ne satisfait la fonction de test, {{JSxRef("undefined")}} est retourné.

- Si vous avez besoin de l'**indice** de l'élément trouvé dans le tableau, utilisez {{JSxRef("Array/findIndex", "findIndex()")}}.
- Si vous souhaitez trouver l'**indice d'une valeur**, utilisez {{JSxRef("Array/indexOf", "indexOf()")}}.
  (C'est similaire à {{JSxRef("Array/findIndex", "findIndex()")}}, mais chaque élément est comparé à la valeur pour l'égalité, au lieu d'utiliser une fonction de test.)
- Si vous souhaitez savoir si une valeur **existe** dans un tableau, utilisez {{JSxRef("Array/includes", "includes()")}}.
  Là encore, chaque élément est comparé à la valeur pour l'égalité, au lieu d'utiliser une fonction de test.
- Si vous souhaitez savoir si au moins un élément satisfait la fonction de test, utilisez {{JSxRef("Array/some", "some()")}}.
- Si vous souhaitez obtenir tous les éléments qui satisfont la fonction de test, utilisez {{JSxRef("Array/filter", "filter()")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.find()", "shorter")}}

```js interactive-example
const array = [5, 12, 8, 130, 44];

const found = array.find((element) => element > 10);

console.log(found);
// Résultat attendu : 12
```

## Syntaxe

```js-nolint
find(callbackFn)
find(callbackFn, thisArg)
```

### Paramètres

- `callbackFn`
  - : Une fonction à exécuter pour chaque élément du tableau. Elle doit retourner une valeur [vraie](/fr/docs/Glossary/Truthy) pour indiquer qu'un élément correspondant a été trouvé, et une valeur [fausse](/fr/docs/Glossary/Falsy) sinon. La fonction est appelée avec les arguments suivants&nbsp;:
    - `element`
      - : L'élément actuellement traité dans le tableau.
    - `index`
      - : L'indice de l'élément actuellement traité dans le tableau.
    - `array`
      - : Le tableau sur lequel la méthode `find()` a été appelée.
- `thisArg` {{Optional_Inline}}
  - : Une valeur à utiliser comme `this` lors de l'exécution de `callbackFn`. Voir [méthodes itératives](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives).

### Valeur de retour

Le premier élément du tableau qui satisfait la fonction de test fournie.
Sinon, {{JSxRef("undefined")}} est retourné.

## Description

La méthode `find()` est une [méthode itérative](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives). Elle appelle la fonction `callbackFn` fournie une fois pour chaque élément du tableau, dans l'ordre croissant des indices, jusqu'à ce que `callbackFn` retourne une [valeur vraie](/fr/docs/Glossary/Truthy). `find()` retourne alors cet élément et arrête l'itération. Si `callbackFn` ne retourne jamais de valeur vraie, `find()` retourne {{JSxRef("undefined")}}. Consultez la section [méthodes itératives](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives) pour plus d'informations sur le fonctionnement général de ces méthodes.

`callbackFn` est appelée pour chaque indice du tableau, pas seulement ceux qui ont une valeur assignée. Les cases vides dans les [tableaux creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux) se comportent comme si leur valeur était `undefined`.

La méthode `find()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend seulement que la valeur de `this` possède une propriété `length` et des propriétés à clé entière.

## Exemples

### Trouver un objet dans un tableau grâce à une de ses propriétés

```js
const inventaire = [
  { nom: "pommes", quantité: 2 },
  { nom: "bananes", quantité: 0 },
  { nom: "cerises", quantité: 5 },
];

function estCerises(fruit) {
  return fruit.nom === "cerises";
}

console.log(inventaire.find(estCerises));
// { nom: 'cerises', quantité: 5}
```

#### Utiliser les fonctions fléchées ES6/ES2015

```js
const inventaire = [
  { nom: "pommes", quantité: 2 },
  { nom: "bananes", quantité: 0 },
  { nom: "cerises", quantité: 5 },
];

const resultat = inventaire.find((fruit) => fruit.nom === "cerises");
console.log(resultat);
// { nom: 'cerises', quantité: 5}
```

### Trouver un nombre premier dans un tableau

L'exemple suivant retourne le premier élément du tableau qui est un nombre premier, ou {{JSxRef("undefined")}} s'il n'y en a pas.

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

console.log([4, 6, 8, 12].find(estPremier)); // undefined, rien trouvé
console.log([4, 5, 8, 12].find(estPremier)); // 5
```

> [!NOTE]
> L'implémentation de `estPremier()` est uniquement destinée à la démonstration. Pour une utilisation réelle, il est préférable d'utiliser un algorithme fortement mémoïsé, comme le [crible d'Ératosthène](https://fr.wikipedia.org/wiki/Crible_d%27%C3%89ratosth%C3%A8ne), afin d'éviter des calculs répétés.

### Utiliser le troisième argument de `callbackFn`

L'argument `array` est utile si vous souhaitez accéder à un autre élément du tableau, en particulier lorsque vous n'avez pas de variable existante qui fait référence au tableau. L'exemple suivant utilise d'abord `filter()` pour extraire les valeurs positives, puis `find()` pour trouver le premier élément qui est inférieur à ses voisins.

```js
const nombres = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const premierCreux = nombres
  .filter((num) => num > 0)
  .find((num, idx, arr) => {
    // Sans l'argument arr, il n'y a aucun moyen simple d'accéder
    // au tableau intermédiaire sans le stocker dans une variable.
    if (idx > 0 && num >= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && num >= arr[idx + 1]) return false;
    return true;
  });
console.log(premierCreux); // 1
```

### Utiliser `find()` sur des tableaux creux

Les cases vides dans les tableaux creux _sont_ parcourues et sont traitées comme si leur valeur était `undefined`.

```js
// Déclare un tableau sans éléments aux indices 2, 3 et 4
const array = [0, 1, , , , 5, 6];

// Affiche tous les indices, pas seulement ceux avec une valeur assignée
array.find((value, index) => {
  console.log("Indice visité", index, "avec la valeur", value);
  return false;
});
// Indice visité 0 avec la valeur 0
// Indice visité 1 avec la valeur 1
// Indice visité 2 avec la valeur undefined
// Indice visité 3 avec la valeur undefined
// Indice visité 4 avec la valeur undefined
// Indice visité 5 avec la valeur 5
// Indice visité 6 avec la valeur 6

// Affiche tous les indices, y compris ceux supprimés
array.find((value, index) => {
  // Supprime l'élément 5 lors de la première itération
  if (index === 0) {
    console.log("Suppression de array[5] avec la valeur", array[5]);
    delete array[5];
  }
  // L'élément 5 est tout de même visité même après suppression
  console.log("Indice visité", index, "avec la valeur", value);
  return false;
});
// Suppression de array[5] avec la valeur 5
// Indice visité 0 avec la valeur 0
// Indice visité 1 avec la valeur 1
// Indice visité 2 avec la valeur undefined
// Indice visité 3 avec la valeur undefined
// Indice visité 4 avec la valeur undefined
// Indice visité 5 avec la valeur undefined
// Indice visité 6 avec la valeur 6
```

### Appeler `find()` sur des objets qui ne sont pas des tableaux

La méthode `find()` lit la propriété `length` de `this` puis accède à chaque propriété dont la clé est un entier non négatif inférieur à `length`.

```js
const objetSimilaireTableau = {
  length: 3,
  "-1": 0.1, // ignoré par find() car -1 < 0
  0: 2,
  1: 7.3,
  2: 4,
};
console.log(
  Array.prototype.find.call(objetSimilaireTableau, (x) => !Number.isInteger(x)),
);
// 7.3
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.findIndex()")}}
- La méthode {{JSxRef("Array.prototype.findLast()")}}
- La méthode {{JSxRef("Array.prototype.findLastIndex()")}}
- La méthode {{JSxRef("Array.prototype.includes()")}}
- La méthode {{JSxRef("Array.prototype.filter()")}}
- La méthode {{JSxRef("Array.prototype.every()")}}
- La méthode {{JSxRef("Array.prototype.some()")}}
- La méthode {{JSxRef("TypedArray.prototype.find()")}}
- [Prothèse d'émulation core-js pour `Array.prototype.find` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
- [Prothèse d'émulation es-shims pour `Array.prototype.find` <sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.find)
