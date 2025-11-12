---
title: "Array : méthode findLast()"
short-title: findLast()
slug: Web/JavaScript/Reference/Global_Objects/Array/findLast
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`findLast()`** des instances de {{JSxRef("Array")}} parcourt le tableau en ordre inverse et retourne la valeur du premier élément qui satisfait la fonction de test fournie.
Si aucun élément ne satisfait la fonction de test, {{JSxRef("undefined")}} est retourné.

Si vous souhaitez&nbsp;:

- le _premier_ élément correspondant, utilisez {{JSxRef("Array/find", "find()")}}.
- l'_indice_ du dernier élément correspondant dans le tableau, utilisez {{JSxRef("Array/findLastIndex", "findLastIndex()")}}.
- l'_indice d'une valeur_, utilisez {{JSxRef("Array/indexOf", "indexOf()")}}.
  (Cette méthode est semblable à {{JSxRef("Array/findIndex", "findIndex()")}}, mais compare chaque élément à la valeur indiquée au lieu d'utiliser une fonction de test.)
- savoir si une valeur _existe_ dans un tableau, utilisez {{JSxRef("Array/includes", "includes()")}}.
  Là encore, chaque élément est comparé à la valeur indiquée au lieu d'utiliser une fonction de test.
- savoir si un élément satisfait la fonction de test fournie, utilisez {{JSxRef("Array/some", "some()")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.findLast()", "shorter")}}

```js interactive-example
const array = [5, 12, 50, 130, 44];

const found = array.findLast((element) => element > 45);

console.log(found);
// Résultat attendu : 130
```

## Syntaxe

```js-nolint
findLast(callbackFn)
findLast(callbackFn, thisArg)
```

### Paramètres

- `callbackFn`
  - : La fonction à exécuter pour chaque élément du tableau. Elle doit renvoyer une valeur [équivalente à `true`](/fr/docs/Glossary/Truthy) pour indiquer qu'un élément correspondant a été trouvé, et une valeur [équivalente à `false`](/fr/docs/Glossary/Falsy) sinon. La fonction est appelée avec les arguments suivants&nbsp;:
    - `element`
      - : La valeur de l'élément courant du tableau en cours de traitement.
    - `index`
      - : L'indice de l'élément courant du tableau en cours de traitement.
    - `array`
      - : Le tableau sur lequel la méthode `findLast()` a été appelée.
- `thisArg` {{Optional_Inline}}
  - : La valeur à utiliser comme `this` lors de l'exécution de `callbackFn`. Voir [les méthodes itératives](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives).

### Valeur de retour

Le dernier élément du tableau (celui avec l'indice le plus élevé) qui satisfait la fonction de test fournie&nbsp;; {{JSxRef("undefined")}} si aucun élément correspondant n'est trouvé.

## Description

La méthode `findLast()` est une [méthode itérative](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives). Elle appelle la fonction fournie `callbackFn` une fois pour chaque élément d'un tableau dans l'ordre décroissant des indices, jusqu'à ce que `callbackFn` retourne une valeur [vrai](/fr/docs/Glossary/Truthy). `findLast()` retourne alors cet élément et arrête l'itération du tableau. Si `callbackFn` ne retourne jamais de valeur vrai, `findLast()` retourne {{JSxRef("undefined")}}. Lisez la section [méthodes itératives](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives) pour plus d'informations sur le fonctionnement général de ces méthodes.

`callbackFn` est appelée pour _chaque_ indice du tableau, pas seulement ceux ayant une valeur affectée. Les emplacements vides des [tableaux creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux) se comportent comme `undefined`.

La méthode `findLast()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend uniquement que la valeur `this` possède une propriété `length` et des propriétés à clés entières.

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

L'exemple précédent peut être écrit à l'aide d'une fonction fléchée et [une décomposition d'objet](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring#décomposer_un_objet)&nbsp;:

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
function estPremier(n) {
  if (n < 2) {
    return false;
  }
  if (n % 2 === 0) {
    return n === 2;
  }
  for (let diviseur = 3; diviseur * diviseur <= n; diviseur += 2) {
    if (n % diviseur === 0) {
      return false;
    }
  }
  return true;
}

console.log([4, 6, 8, 12].findLast(estPremier)); // undefined, aucun trouvé
console.log([4, 5, 7, 8, 9, 11, 12].findLast(estPremier)); // 11
```

> [!NOTE]
> L'implémentation de `estPremier()` est uniquement à des fins de démonstration. Pour une application réelle, il est préférable d'utiliser un algorithme fortement mémoïsé comme le [crible d'Ératosthène](https://fr.wikipedia.org/wiki/Crible_d%27%C3%89ratosth%C3%A8ne) afin d'éviter les calculs répétés.

### Utiliser le troisième argument de `callbackFn`

L'argument `array` est utile si vous souhaitez accéder à un autre élément du tableau, en particulier lorsque vous n'avez pas de variable existante qui fait référence au tableau. L'exemple suivant utilise d'abord `filter()` pour extraire les valeurs positives puis utilise `findLast()` pour trouver le dernier élément qui est inférieur à ses voisins.

```js
const nombres = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const dernierCreux = nombres
  .filter((num) => num > 0)
  .findLast((num, idx, arr) => {
    // Sans l'argument arr, il n'y a pas de moyen simple d'accéder
    // au tableau intermédiaire sans le stocker dans une variable.
    if (idx > 0 && num >= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && num >= arr[idx + 1]) return false;
    return true;
  });
console.log(dernierCreux); // 2
```

### Utiliser `findLast()` sur des tableaux creux

Les emplacements vides d'un tableau _sont_ parcourus. Ils sont traités comme s'ils avaient la valeur `undefined`.

```js
// On déclare un tableau sans élément pour les indices 2, 3, et 4
const tableau = [0, 1, , , , 5, 6];

// Le parcourt suivant montre tous les indices et pas uniquement
// ceux avec des valeurs affectées
tableau.findLast((valeur, index) => {
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
tableau.findLast((value, index) => {
  // On supprime l'élément 5 à la première itération
  if (index === 6) {
    console.log(`Suppression de array[5] avec la valeur ${tableau[5]}`);
    delete tableau[5];
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
  3: 3, // ignoré par findLast() car length vaut 3
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

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.find()")}}
- La méthode {{JSxRef("Array.prototype.findIndex()")}}
- La méthode {{JSxRef("Array.prototype.findLastIndex()")}}
- La méthode {{JSxRef("Array.prototype.includes()")}}
- La méthode {{JSxRef("Array.prototype.filter()")}}
- La méthode {{JSxRef("Array.prototype.every()")}}
- La méthode {{JSxRef("Array.prototype.some()")}}
- La méthode {{JSxRef("TypedArray.prototype.findLast()")}}
- [Prothèse d'émulation pour Array.prototype.findLast dans la bibliothèque core-js <sup>(angl.)</sup>](https://github.com/zloirock/core-js#array-find-from-last)
- [Prothèse d'émulation es-shims pour Array.prototype.findLast <sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.findlast)
