---
title: Array.prototype.groupBy()
slug: orphaned/Web/JavaScript/Reference/Global_Objects/Array/groupBy
translation_of: Web/JavaScript/Reference/Global_Objects/Array/groupBy
original_slug: Web/JavaScript/Reference/Global_Objects/Array/groupBy
browser-compat: javascript.builtins.Array.groupBy
---
{{JSRef}} {{SeeCompatTable}}

La méthode **`groupBy()`** regroupe les éléments du tableau courant selon les valeurs des chaînes de caractères fournies par une fonction de test passée en argument. L'objet renvoyé aura une propriété pour chaque groupe et qui contiendra le tableau des éléments de ce groupe.

<!-- {{EmbedInteractiveExample("pages/js/array-groupby.html")}} -->

Cette méthode devrait être utilisée lorsque les noms des groupes peuvent être représentés par des chaînes de caractères. S'il faut regrouper les éléments selon une clé d'un type arbitraire, on utilisera la méthode [`Array.prototype.groupByToMap()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/groupByToMap) à la place.

## Syntaxe

```js
// Fonction fléchée
groupBy((element) => { /* … */ } )
groupBy((element, index) => { /* … */ } )
groupBy((element, index, array) => { /* … */ } )

// Fonction de rappel (callback)
groupBy(callbackFn)
groupBy(callbackFn, thisArg)

// Fonction de rappel en incise
groupBy(function(element) { /* … */ })
groupBy(function(element, index) { /* … */ })
groupBy(function(element, index, array){ /* … */ })
groupBy(function(element, index, array) { /* … */ }, thisArg)
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
      - : Le tableau sur lequel `groupBy()` a été appelée.

    L'objet renvoyé par la fonction de rappel indique le groupe de l'élément courant. Il doit être possible de convertir la valeur fournie par le <i lang="en">callback</i> en une chaîne de caractères (celle-ci étant ensuite utilisée comme le nom d'une propriété de l'objet renvoyé par la méthode).

- `thisArg` {{optional_inline}}
  - : L'objet qui doit être utilisé comme valeur [`this`](/fr/docs/Web/JavaScript/Reference/Operators/this) au sein de `callbackFn`.

     Cet argument est ignoré pour les fonctions fléchées, celles-ci ayant leur propre portée lexicale. Sinon, si `thisArg` n'est pas fourni, c'est le `this` de la portée d'exécution qui est utilisé ou `undefined` si la fonction est appelée en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode).

### Valeur de retour

Un [objet](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object) contenant une propriété pour chacun des groupes. Chaque propriété a pour valeur un tableau contenant les éléments du groupe associé. Cet objet n'hérite pas de `Object.prototype`.

### Exceptions

- `TypeError`
  - : La fonction de rappel passée en argument ne peut pas être appelée.

## Description

La méthode `groupBy()` exécute la fonction `callbackFn` pour chaque indice du tableau et renvoie une chaîne de caractères (ou une valeur pouvant être convertie en chaîne de caractères) qui indique le groupe de l'élément à cet indice. Pour chaque nom de groupe renvoyé par la fonction de rappel, une nouvelle propriété et un nouveau tableau sont créés sur l'objet résultant et chaque élément est ajouté au tableau de la propriété correspondant à son groupe.

On notera que l'objet ainsi créé porte des références vers les _mêmes_ éléments que le tableau original (il ne s'agit pas de [copies profondes](/fr/docs/Glossary/Deep_copy)). Toute modification de la structure interne de ces éléments sera visible à la fois sur le tableau original et sur la valeur de retour.

`callbackFn` est appelée avec la valeur de l'élément courant, l'indice courant et le tableau lui-même. Bien que les groupes constitués dépendent la plupart du temps de la seule valeur de l'élément, il est possible d'implémenter des méthodes de groupement prenant en compte les valeurs des autres éléments du tableau.

`callbackFn` est appelée pour _chaque_ indice du tableau et pas uniquement ceux pour lesquels des valeurs sont affectées. Cela signifie que cette méthode pour les tableaux peu densément peuplés, contrairement aux méthodes qui visitent uniquement les valeurs affectées.

Si le paramètre `thisArg` est fourni à `groupBy()`, il sera utilisé comme valeur pour `this` à chaque appel de `callbackFn`. S'il n'est pas fourni, c'est [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) qui sera utilisé.

### Modifier le tableau via la fonction de rappel

La méthode `groupBy()` ne modifie pas le tableau sur lequel elle est appelée, mais la fonction `callbackFn` peut le modifier. On notera toutefois que les éléments traités par `groupBy()` sont déterminés _avant_ le premier appel à `callbackFn`.

Ainsi&nbsp;:

- `callbackFn` ne parcourra pas les éléments ajoutés au tableau après le début de l'appel à `groupBy()`.
- Les éléments qui sont affectés à des indices déjà parcourus ou à des indices en dehors de ceux du tableau ne seront pas parcourus par `callbackFn`.
- Si un élément existant, mais pas encore parcouru, est modifié par `callbackFn`, la valeur passée à `callbackFn` sera celle de l'élément au moment du parcours de l'indice correspondant.
- Les éléments [supprimés](/fr/docs/Web/JavaScript/Reference/Operators/delete) sont toujours parcourus.

> **Attention :** Ce type de modification concurrente entraîne généralement du code peu compréhensible et devrait être évité (sauf cas particulier).

## Exemples

On définit ici un tableau contenant des objets décrivant un inventaire de différents produits alimentaires. Chaque produit possède une propriété `type` et une propriété `quantite`.

```js
const inventaire = [
  { nom: 'asperges', type: 'legumes', quantite: 5 },
  { nom: 'bananes',  type: 'fruit', quantite: 0 },
  { nom: 'brebis', type: 'viande', quantite: 23 },
  { nom: 'cerises', type: 'fruit', quantite: 5 },
  { nom: 'poisson', type: 'viande', quantite: 22 }
];
```

Le code qui suit permet de regrouper les éléments selon la valeur de leur propriété `type`.

```js
const resultat = inventaire.groupBy( ({type}) => type );

/* resultat vaudra :
{
  legumes: [
    { nom: 'asperges', type: 'legumes', quantite: 5 },
  ],
  fruit: [
    { nom: "bananes", type: "fruit", quantite: 0 },
    { nom: "cerises", type: "fruit", quantite: 5 }
  ],
  viande: [
    { nom: "brebis", type: "viande", quantite: 23 },
    { nom: "poisson", type: "viande", quantite: 22 }
  ]
}
*/
```

La fonction fléchée renvoie uniquement le type de chaque élément du tableau lorsqu'elle est appelée. La forme de l'argument `{ type }` est un exemple de [décomposition d'un objet pour les arguments d'une fonction](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#décomposer_les_propriétés_dobjets_passés_en_arguments). Cela extrait la propriété `type` de l'objet passé en paramètre et l'affecte à une variable intitulée `type` dans le corps de la fonction. On accède ainsi de façon concise aux propriétés voulues des éléments au sein de la fonction.

On peut aussi créer des groupes déterminés à partir des valeurs de plusieurs propriétés des éléments. L'exemple qui suit est similaire au précédent, mais répartir les produits en deux groupes&nbsp;: `ok` ou `restock` en fonction de la valeur portée par la propriété `quantite`.

```js
function maFonctionDeRappel({quantite}) {
  return quantite > 5 ? 'ok' : 'restock';
}

const resultat = inventaire.groupBy(maFonctionDeRappel);

/* resultat vaudra :
{
  restock: [
    { nom: "asperges", type: "legumes", quantite: 5 },
    { nom: "bananes", type: "fruit", quantite: 0 },
    { nom: "cerises", type: "fruit", quantite: 5 }
  ],
  ok: [
    { nom: "brebis", type: "viande", quantite: 23 },
    { nom: "poisson", type: "viande", quantite: 22 }
  ]
}
*/
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Array.prototype.groupByToMap()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/groupByToMap) qui groupe un tableau sous forme d'un objet `Map` où n'importe quelle valeur peut être une clé ou une valeur.
- [Une prothèse d'émulation pour `Array.prototype.groupBy()` avec la bibliothèque `core-js`](https://github.com/zloirock/core-js#array-grouping)
