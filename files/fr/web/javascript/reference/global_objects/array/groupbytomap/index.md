---
title: Array.prototype.groupByToMap()
slug: Web/JavaScript/Reference/Global_Objects/Array/groupByToMap
translation_of: Web/JavaScript/Reference/Global_Objects/Array/groupByToMap
browser-compat: javascript.builtins.Array.groupByToMap
---
{{JSRef}} {{SeeCompatTable}}

La méthode **`groupByToMap()`** permet de grouper les éléments du tableau appelant en utilisant les valeurs renvoyées par une fonction de test passée en argument. La valeur renvoyée est un objet [`Map`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map) dont les clés sont les valeurs uniques fournies par la fonction de test et les valeurs associés à ces clés sont des tableaux contenant les éléments de chaque groupe.

<!-- {{EmbedInteractiveExample("pages/js/array-groupbytomap.html")}} -->

Cette méthode est principalement utile pour regrouper des éléments associés à un objet, notamment quand cet objet peut évoluer au cours du temps. Si l'objet est invariant, on pourra plutôt utiliser la clé de regroupement avec une chaîne de caractères et regrouper les éléments en utilisant la méthode [`Array.prototype.groupBy()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/groupBy).

## Syntaxe

```js
// Fonction fléchée
groupByToMap((element) => { /* … */ } )
groupByToMap((element, index) => { /* … */ } )
groupByToMap((element, index, array) => { /* … */ } )

// Fonction de rappel (callback)
groupByToMap(callbackFn)
groupByToMap(callbackFn, thisArg)

// Fonction de rappel en incise
groupByToMap(function(element) { /* … */ })
groupByToMap(function(element, index) { /* … */ })
groupByToMap(function(element, index, array){ /* … */ })
groupByToMap(function(element, index, array) { /* … */ }, thisArg)
```

### Paramètres

- `callbackFn`

  - : Une fonction à exécuter pour chaque élément du tableau

    La fonction est appelée avec les arguments suivants&nbsp;:

    - `element`
      - : La valeur de l'élément courant du tableau.
    - `index`
      - : L'indice de l'élément courant du tableau.
    - `array`
      - : Le tableau sur lequel `groupByToMap()` a été appelée.

    La valeur renvoyée (qu'elle soit [objet](/fr/docs/Glossary/Object) ou [primitive](/fr/docs/Glossary/Primitive)) indique le groupe de l'élément courant.

- `thisArg` {{optional_inline}}
  - : L'objet qui doit être utilisé comme valeur [`this`](/fr/docs/Web/JavaScript/Reference/Operators/this) au sein de `callbackFn`.

     Cet argument est ignoré pour les fonctions fléchées, celles-ci ayant leur propre portée lexicale. Sinon, si `thisArg` n'est pas fourni, c'est le `this` de la portée d'exécution qui est utilisé ou `undefined` si la fonction est appelée en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode).

### Valeur de retour

Un objet [`Map`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map) pour lequel chaque clé correspond à un groupe et contient un tableau des éléments appartenant à ce groupe.

### Exceptions

- `TypeError`
  - : La fonction de rappel passée en argument ne peut pas être appelée.

## Description

La méthode `groupByToMap()` exécute la fonction `callbackFn` pour chaque indice du tableau et renvoie une valeur indiquant le groupe de l'élément à cet indice. Les valeurs renvoyées par `callbackFn` sont utilisées comme clés pour l'objet [`Map`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map) renvoyé par `groupByToMap()`. Chaque clé a comme valeur un tableau qui contient tous les éléments pour lesquels la fonction de rappel a renvoyé la même valeur.

Les éléments contenus dans l'objet [`Map`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map) résultant et dans le tableau d'origine sont les mêmes, (il ne s'agit pas de [copies profondes](/fr/docs/Glossary/Deep_copy)). Toute modification de la structure interne de ces éléments sera visible à la fois sur le tableau original et sur la valeur de retour.

Cette méthode est utile lorsqu'on doit regrouper des informations relatives à un objet qui peut changer au cours du temps. En effet, même si l'objet est modifié, il pourra continuer d'être utilisé comme clé pour `Map`. Si on utilise une chaîne de caractères comme représentation de l'objet et qu'on l'utilise comme clé avec [`Array.prototype.groupBy()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/groupBy), il faudra alors maintenir la correspondance entre l'objet original et cette représentation au fur et à mesure des modifications de l'objet.

> **Note :** Pour accéder aux groupes de l'objet `Map` renvoyé, il faut utiliser le même objet que celui qui utilisé initialement comme clé (même si les propriétés peuvent avoir été changées). Cela ne fonctionnera pas si on utilise un autre objet qui a simplement le même nom et les mêmes propriétés.

`callbackFn` est appelée avec la valeur de l'élément courant, l'indice courant et le tableau lui-même. Bien que les groupes constitués dépendent la plupart du temps de la seule valeur de l'élément, il est possible d'implémenter des méthodes de groupement prenant en compte les valeurs des autres éléments du tableau.

`callbackFn` est appelée pour _chaque_ indice du tableau et pas uniquement ceux pour lesquels des valeurs sont affectées. Cela signifie que cette méthode pour les tableaux peu densément peuplés, contrairement aux méthodes qui visitent uniquement les valeurs affectées.

Si le paramètre `thisArg` est fourni à `groupByToMap()`, il sera utilisé comme valeur pour `this` à chaque appel de `callbackFn`. S'il n'est pas fourni, c'est [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) qui sera utilisé.

### Modifier le tableau via la fonction de rappel

La méthode `groupByToMap()` ne modifie pas le tableau sur lequel elle est appelée, mais la fonction `callbackFn` peut le modifier. On notera toutefois que les éléments traités par `groupByToMap()` sont déterminés _avant_ le premier appel à `callbackFn`.

Ainsi&nbsp;:

- `callbackFn` ne parcourra pas les éléments ajoutés au tableau après le début de l'appel à `groupByToMap()`.
- Les éléments qui sont affectés à des indices déjà parcourus ou à des indices en dehors de ceux du tableau ne seront pas parcourus par `callbackFn`.
- Si un élément existant, mais pas encore parcouru, est modifié par `callbackFn`, la valeur passée à `callbackFn` sera celle de l'élément au moment du parcours de l'indice correspondant.
- Les éléments [supprimés](/fr/docs/Web/JavaScript/Reference/Operators/delete) sont toujours parcourus.

> **Attention :** Ce type de modification concurrente entraîne généralement du code peu compréhensible et devrait être évité (sauf cas particulier).

## Exemples

On définit ici un tableau contenant des objets décrivant un inventaire de différents produits alimentaires. Chaque produit possède une propriété `type` et une propriété `quantite`.

```js
const inventaire = [
  { nom: 'asperges', type: 'legumes', quantite: 9 },
  { nom: 'bananes',  type: 'fruit', quantite: 5 },
  { nom: 'brebis', type: 'viande', quantite: 23 },
  { nom: 'cerises', type: 'fruit', quantite: 12 },
  { nom: 'poisson', type: 'viande', quantite: 22 }
];
```

Le code qui suit utilise la méthode `groupByToMap()` avec une fonction fléchée qui renvoie comme clé l'objet intitulé `restock` ou `suffisant`, selon que l'élément a `quantite < 6` ou non. L'objet obtenu avec `resultat` est un objet `Map` et il faut donc appeler `get()` avec la clé afin d'obtenir le tableau correspondant.

```js
const restock = { restock: true };
const suffisant = { restock: false };
const resultat = inventaire.groupByToMap( ({ quantite }) => quantite < 6 ? restock : suffisant );
console.log(resultat.get(restock));
// Array [Object { nom: "bananes", type: "fruit", quantite: 5 }]
```

La forme de l'argument `{ quantite }` est un exemple de [décomposition d'un objet pour les arguments d'une fonction](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#décomposer_les_propriétés_dobjets_passés_en_arguments). Cela extrait la propriété `quantite` de l'objet passé en paramètre et l'affecte à une variable intitulée `quantite` dans le corps de la fonction. On accède ainsi de façon concise aux propriétés voulues des éléments au sein de la fonction.

La clé de l'objet `Map` peut être modifiée et utilisée par la suite. En revanche, on ne peut pas recréer la clé et utiliser cette nouvelle valeur. Aussi, il est important de conserver une référence aux clés pour chaque utilisation de cette `Map`.

```js
// L'objet clé peut être modifié et encore utilisé après
restock['fast'] = true ;
console.log(resultat.get(restock));
// Array [Object { nom: "bananes", type: "fruit", quantite: 5 }]

// Il n'est pas possible d'utiliser une nouvelle clé,
// même si elle a la même structure !
const restock2 = { restock: true };
console.log(resultat.get(restock2));
// undefined
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Array.prototype.groupBy()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/groupBy)
- [Une prothèse d'émulation pour `Array.prototype.groupByToMap()` avec la bibliothèque `core-js`](https://github.com/zloirock/core-js#array-grouping)
