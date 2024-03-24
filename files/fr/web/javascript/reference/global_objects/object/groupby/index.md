---
title: Array.prototype.group()
slug: Web/JavaScript/Reference/Global_Objects/Object/groupBy
---

{{JSRef}} {{SeeCompatTable}}

La méthode **`group()`** permet de grouper les éléments du tableau appelant selon les chaînes de caractères renvoyées par la fonction de test passée en argument. L'objet renvoyé par cette méthode aura des propriétés pour chaque groupe ainsi obtenu, qui contiendront un tableau des éléments du groupe.

<!-- {{EmbedInteractiveExample("pages/js/array-groupby.html")}} -->

Cette méthode devrait être utilisée lorsque les noms des groupes peuvent être représentés par des chaînes de caractères. Si vous avez besoin de grouper les éléments avec une clé qui est une valeur arbitraire (et pas nécessairement une chaîne), vous pouvez utiliser [`Array.prototype.groupToMap()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/groupToMap) à la place.

## Syntaxe

```js-nolint
// Fonction fléchée
group((element) => { /* … */ } )
group((element, index) => { /* … */ } )
group((element, index, array) => { /* … */ } )

// Fonction de rappel
group(fnRappel)
group(fnRappel, thisArg)

// Fonction de rappel en incise
group(function(element) { /* … */ })
group(function(element, index) { /* … */ })
group(function(element, index, array) { /* … */ })
group(function(element, index, array) { /* … */ }, thisArg)
```

### Paramètres

- `fnRappel`

  - : La fonction à exécuter pour chaque élément du tableau.

    Elle est appelée avec les arguments suivants&nbsp;:

    - `element`
      - : La valeur de l'élément du tableau en cours de traitement.
    - `index`
      - : L'indice de l'élément courant dans le tableau.
    - `array`
      - : Le tableau sur lequel `group()` a été appelée.

    L'objet renvoyé par la fonction de rappel indique le groupe de l'élément courant. La valeur renvoyée doit pouvoir être convertie en une chaîne de caractères (qui sera alors utilisée comme nom de propriété pour l'objet final).

- `thisArg` {{optional_inline}}

  - : L'objet à utiliser comme valeur pour [`this`](/fr/docs/Web/JavaScript/Reference/Operators/this) pour `fnRappel`.

    Cet argument est ignoré pour les fonctions fléchées qui disposent de leur propre portée lexicale, utilisée à la place. Sinon, si `thisArg` n'est pas fourni, c'est la valeur `this` de la portée d'exécution qui est appelée, ou `undefined` si la fonction est appelée en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode).

### Valeur de retour

Un [objet](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object) avec une propriété pour chaque groupe. Chaque propriété a comme valeur un tableau qui contient les éléments du groupe correspondant. Cette valeur de retour est un objet qui **n'hérite pas** de `Object.prototype`.

### Exceptions

- `TypeError`
  - : La fonction de rappel fournie en argument n'est pas appelable.

## Description

La méthode `group()` exécute la fonction `fnRappel` une fois pour chaque indice du tableau, qui renvoie une chaîne de caractères (ou une valeur qui peut être convertie en une chaîne) indiquant le groupe de l'élément. Une nouvelle propriété ayant comme valeur un tableau est créé dans l'objet résultat pour chaque nom de groupe unique renvoyé par la fonction de rappel. Chaque élément est ajouté au tableau de la propriété qui correspond à son groupe.

`fnRappel` est appelée pour _chaque_ indice du tableau et pas uniquement pour ceux pour lesquels une valeur a été affectée. Les emplacements vides des [tableaux creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux) se comportent comme avec `undefined`.

`fnRappel` est appelée avec la valeur de l'élément courant, l'indice de cet élément, ainsi que le tableau complet. Bien que les groupes dépendent souvent de la valeur de l'élément courant, il est possible d'implémenter des stratégies de groupement basées sur les valeurs des autres éléments du tableau.

Si un paramètre `thisArg` est fourni à la méthode `group()`, il sera utilisé comme valeur pour [`this`](/fr/docs/Web/JavaScript/Reference/Operators/this) à chaque appel de `fnRappel`. Si ce paramètre n'est pas fourni, c'est [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) qui sera utilisé.

La méthode `group()` est [une méthode de copie](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_copie_et_de_modification). Elle ne modifie pas le tableau courant (`this`) mais renvoie un objet dont les propriétés sont des tableaux qui contiennent les mêmes éléments que ceux du tableau d'origine. On notera donc que l'objet renvoyé référence les _mêmes_ éléments que ceux du tableau original et pas des [copies profondes](/fr/docs/Glossary/Deep_copy). Modifier la structure interne de ces éléments se reflètera sur le tableau original et sur l'objet renvoyé.

La méthode `group()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_génériques). Elle s'attend uniquement à ce que la valeur `this` ait une propriété `length` et des propriétés dont les clés sont des entiers.

### Modifier le tableau avec la fonction de rappel

La méthode `group()` ne modifie pas le tableau sur lequel elle est appelée, mais la fonction fournie pour `fnRappel` peut le modifier. Les éléments traités par `group()` sont fixés _avant_ le premier appel à `fnRappel`. Ainsi&nbsp;:

- `fnRappel` ne parcourra pas les éléments ajoutés après le début de l'appel à `group()`.
- Les éléments qui sont affectés à des indices ayant déjà été visités ne seront pas revus par `fnRappel`.
- Les éléments qui sont affectés à des indices en dehors de l'intervalle du tableau ne seront pas parcourus par `fnRappel`.
- Si un élément existant du tableau et qui n'a pas encore été traité mais est modifié par `fnRappel`, la valeur qui sera passée à `fnRappel` sera la valeur au moment où `group()` visite l'indice de l'élément.
- Les éléments qui sont [supprimés avec `delete`](/fr/docs/Web/JavaScript/Reference/Operators/delete) sont tout de même parcourus.

> **Attention :** Les modifications concurrentes comme celles qui sont décrites dans le paragraphe précédent mènent souvent à du code difficilement compréhensible et devraient généralement être évitées.

## Exemples

### Utiliser `group()`

On définit un tableau contenant des objets qui représentent un inventaire alimentaire. Chaque type d'aliment a une propriété `type` et une propriété `quantite`.

```js
const inventaire = [
  { nom: "asperge", type: "legume", quantite: 5 },
  { nom: "banane", type: "fruit", quantite: 0 },
  { nom: "agneau", type: "viande", quantite: 23 },
  { nom: "cerise", type: "fruit", quantite: 5 },
  { nom: "poisson", type: "viande", quantite: 22 },
];
```

Le code qui suit groupe les éléments du tableau selon la valeur de leur propriété `type`.

```js
const resultat = inventaire.group(({ type }) => type);

/* resultat vaut :
{
  legume: [
    { nom: 'asperge', type: 'legume', quantite: 5 },
  ],
  fruit: [
    { nom: "banane", type: "fruit", quantite: 0 },
    { nom: "cerise", type: "fruit", quantite: 5 }
  ],
  viande: [
    { nom: "agneau", type: "viande", quantite: 23 },
    { nom: "poisson", type: "viande", quantite: 22 }
  ]
}
*/
```

La fonction fléchée renvoie la valeur de `type` pour chaque élément du tableau. Ici, l'argument `{ type }` passé à la fonction est un exemple de [décomposition objet pour les arguments d'une fonction](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#décomposer_les_propriétés_dobjets_passés_en_arguments). Cela récupère la propriété `type` de l'objet passé en paramètre et affecte cette valeur à une variable nommée `type` dans le corps de la fonction. Il s'agit d'une écriture concise pour accéder aux valeurs des propriétés pertinentes d'un objet dans une fonction.

On peut aussi créer des groupes selon un critère utilisant plusieurs propriétés des éléments. Dans ce qui suit, on a un exemple semblable qui place les éléments dans un groupe `ok` ou un groupe `restock` selon la valeur de la propriété `quantite`.

```js
function maFonctionDeRappel({ quantite }) {
  return quantite > 5 ? "ok" : "restock";
}

const resultat2 = inventaire.group(maFonctionDeRappel);

/* resultat2 vaut :
{
  restock: [
    { name: "asperge", type: "legume", quantite: 5 },
    { name: "banane", type: "fruit", quantite: 0 },
    { name: "cerise", type: "fruit", quantite: 5 }
  ],
  ok: [
    { name: "agneau", type: "viande", quantite: 23 },
    { name: "poisson", type: "viande", quantite: 22 }
  ]
}
*/
```

### Utiliser `group()` sur des tableaux creux

Lorsqu'on utilise `group()` sur [un tableau creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), les emplacements vides du tableau sont considérés comme ayant la valeur `undefined`.

```js
console.log([1, , 3].group((x) => x)); // { 1: [1], undefined: [undefined], 3: [3] }
```

### Appeler `group()` sur des objets qui ne sont pas des tableaux

La méthode `group()` lit la propriété `length` de `this` puis parcourt les propriétés dont les clés sont des nombres entiers.

```js
const semblableTableau = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.group.call(semblableTableau, (x) => x % 2));
// { 0: [2, 4], 1: [3] }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Array.prototype.groupToMap()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/groupToMap) qui permet de regrouper les éléments d'un tableau en une `Map`, avec n'importe quel type de valeur comme clé.
- [Une prothèse d'émulation de `Array.prototype.group()` dans la bibliothèque tierce `core-js`](https://github.com/zloirock/core-js#array-grouping)
