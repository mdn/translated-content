---
title: Array.prototype.groupToMap()
slug: Web/JavaScript/Reference/Global_Objects/Map/groupBy
---

{{JSRef}} {{SeeCompatTable}}

La méthode **`groupToMap()`** permet de grouper les éléments du tableau appelant selon les valeurs renvoyées par la fonction de test passée en argument. L'objet [`Map`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map) renvoyé utilise les valeurs uniques fournies par la fonction de test comme clés, et les valeurs correspondantes sont des tableaux avec les éléments du groupe correspondant.

<!-- {{EmbedInteractiveExample("pages/js/array-groupbytomap.html")}} -->

Cette méthode est notamment utile lorsqu'on veut grouper des éléments associés avec un objet, notamment lorsque cet objet évolue avec le temps. Si cet objet ne varie, vous pouvez à la place utiliser une chaîne de caractères comme clé de regroupement et utiliser la méthode [`Array.prototype.group()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/group).

## Syntaxe

```js-nolint
// Fonction fléchée
groupToMap((element) => { /* … */ } )
groupToMap((element, index) => { /* … */ } )
groupToMap((element, index, array) => { /* … */ } )

// Fonction de rappel
groupToMap(fnRappel)
groupToMap(fnRappel, thisArg)

// Fonction de rappel en incise
groupToMap(function(element) { /* … */ })
groupToMap(function(element, index) { /* … */ })
groupToMap(function(element, index, array) { /* … */ })
groupToMap(function(element, index, array) { /* … */ }, thisArg)
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
      - : Le tableau sur lequel `groupToMap()` a été appelée.

    La valeur (que ce soit un objet ou une valeur primitive) renvoyée par la fonction de rappel indique le groupe de l'élément courant.

- `thisArg` {{optional_inline}}

  - : L'objet à utiliser comme valeur pour [`this`](/fr/docs/Web/JavaScript/Reference/Operators/this) pour `fnRappel`.

    Cet argument est ignoré pour les fonctions fléchées qui disposent de leur propre portée lexicale, utilisée à la place. Sinon, si `thisArg` n'est pas fourni, c'est la valeur `this` de la portée d'exécution qui est appelée, ou `undefined` si la fonction est appelée en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode).

### Valeur de retour

Un objet [`Map`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map) avec une clé pour chaque groupe, et la valeur qui correspond à chaque clé qui est un tableau contenant les éléments du tableau appelant pour ce groupe.

### Exceptions

- `TypeError`
  - : La fonction de rappel fournie en argument n'est pas appelable.

## Description

La méthode `group()` exécute la fonction `fnRappel` une fois pour chaque indice du tableau. La fonction de rappel renvoie une valeur indiquant le groupe de l'élément correspondant. Les valeurs renvoyées par `fnRappel` sont utilisées comme clés pour l'objet [`Map`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map) renvoyé par `groupToMap()`. Chaque clé a comme valeur un tableau contenant les éléments pour lesquels la fonction de rappel a renvoyé la même valeur.

`fnRappel` est appelée pour _chaque_ indice du tableau et pas uniquement pour ceux pour lesquels une valeur a été affectée. Les emplacements vides des [tableaux creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux) se comportent comme avec `undefined`.

`fnRappel` est appelée avec la valeur de l'élément courant, l'indice de cet élément, ainsi que le tableau complet. Bien que les groupes dépendent souvent de la valeur de l'élément courant, il est possible d'implémenter des stratégies de groupement basées sur les valeurs des autres éléments du tableau.

Si un paramètre `thisArg` est fourni à la méthode `groupToMap()`, il sera utilisé comme valeur pour [`this`](/fr/docs/Web/JavaScript/Reference/Operators/this) à chaque appel de `fnRappel`. Si ce paramètre n'est pas fourni, c'est [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) qui sera utilisé.

La méthode `groupToMap()` est [une méthode de copie](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_copie_et_de_modification). Elle ne modifie pas le tableau courant (`this`) mais renvoie un objet `Map` dont les valeurs des clés contiennent les mêmes éléments que ceux du tableau d'origine. On notera donc que la `Map` renvoyée référence les _mêmes_ éléments que ceux du tableau original et pas des [copies profondes](/fr/docs/Glossary/Deep_copy). Modifier la structure interne de ces éléments se reflètera sur le tableau original et sur la `Map` renvoyée.

La méthode `groupToMap()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_génériques). Elle s'attend uniquement à ce que la valeur `this` ait une propriété `length` et des propriétés dont les clés sont des entiers.

Cette méthode s'avère utile lorsqu'on veut regrouper les informations associées à un objet donné qui peut évoluer au cours du temps. En effet, si l'objet est modifié, il pourra toujours être utilisé comme clé pour la `Map` renvoyée. En revanche, si on utilise une chaîne de caractères comme représentation d'un objet et qu'on l'utilise comme clé de groupement pour [`Array.prototype.group()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/group), il faudra maintenir la correspondance entre l'objet original et sa représentation lorsque l'objet évolue.

> **Note :** Pour accéder aux groupes dans l'objet `Map` renvoyé, il faut utiliser le même objet que celui qui a été initialement utilisé comme clé (même si ses propriétés peuvent être modifiées). On ne peut pas utiliser un autre objet qui aurait seulement le même nom et les mêmes propriétés.

### Modifier le tableau avec la fonction de rappel

La méthode `groupToMap()` ne modifie pas le tableau sur lequel elle est appelée, mais la fonction fournie pour `fnRappel` peut le modifier. Les éléments traités par `groupToMap()` sont fixés _avant_ le premier appel à `fnRappel`. Ainsi&nbsp;:

- `fnRappel` ne parcourra pas les éléments ajoutés après le début de l'appel à `groupToMap()`.
- Les éléments qui sont affectés à des indices ayant déjà été visités ne seront pas revus par `fnRappel`.
- Les éléments qui sont affectés à des indices en dehors de l'intervalle du tableau ne seront pas parcourus par `fnRappel`.
- Si un élément existant du tableau et qui n'a pas encore été traité mais est modifié par `fnRappel`, la valeur qui sera passée à `fnRappel` sera la valeur au moment où `groupToMap()` visite l'indice de l'élément.
- Les éléments qui sont [supprimés avec `delete`](/fr/docs/Web/JavaScript/Reference/Operators/delete) sont tout de même parcourus.

> **Attention :** Les modifications concurrentes comme celles qui sont décrites dans le paragraphe précédent mènent souvent à du code difficilement compréhensible et devraient généralement être évitées.

## Exemples

### Utiliser `groupToMap()`

On définit un tableau contenant des objets qui représentent un inventaire alimentaire. Chaque type d'aliment a une propriété `type` et une propriété `quantite`.

```js
const inventaire = [
  { nom: "asperge", type: "legume", quantite: 9 },
  { nom: "banane", type: "fruit", quantite: 5 },
  { nom: "agneau", type: "viande", quantite: 23 },
  { nom: "cerise", type: "fruit", quantite: 12 },
  { nom: "poisson", type: "viande", quantite: 22 },
];
```

Dans le code qui suit, on utilise `groupToMap()` avec une fonction fléchée qui renvoie les clés nommées `restock` ou `suffisant`, selon que l'élément a une propriété `quantite < 6`.
L'objet `resultat` est une `Map` et il faut donc appeler la méthode `get()` avec la clé correspondante pour avoir le tableau du groupe.

```js
const restock = { restock: true };
const suffisant = { restock: false };
const resultat = inventaire.groupToMap(({ quantite }) =>
  quantite < 6 ? restock : suffisant,
);
console.log(resultat.get(restock));
// résultat attendu : Array [Object { nom: "banane", type: "fruit", quantite: 5 }]
```

Ici, l'argument `{ quantite }` passé à la fonction est un exemple de [décomposition objet pour les arguments d'une fonction](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#décomposer_les_propriétés_dobjets_passés_en_arguments). Cela récupère la propriété `quantite` de l'objet passé en paramètre et affecte cette valeur à une variable nommée `quantite` dans le corps de la fonction. Il s'agit d'une écriture concise pour accéder aux valeurs des propriétés pertinentes d'un objet dans une fonction.

La clé d'un objet `Map` peut être modifiée et continuer d'être utilisée. Toutefois, on ne peut pas recréer un autre objet ayant la même structure que la clé et l'utiliser. Il est donc important que tout ce qui doit utiliser la `Map` garde une référence vers ses clés.

```js
// La clé peut être modifiée et continuer d'être utilisée
restock["rapide"] = true;
console.log(resultat.get(restock));
// résultat attendu : Array [Object { nom: "banane", type: "fruit", quantite: 5 }]

// Une nouvelle clé ne peut pas être utilisée, même si elle a la même structure !
const restock2 = { restock: true };
console.log(resultat.get(restock2));
// résultat attendu : undefined
```

### Utiliser `groupToMap()` sur des tableaux creux

Lorsqu'on utilise `groupToMap()` sur [un tableau creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), les emplacements vides du tableau sont considérés comme ayant la valeur `undefined`.

```js
console.log([1, , 3].groupToMap((x) => x));
// Map { 1 => [1], undefined => [undefined], 3 => [3] }
```

### Appeler `groupToMap()` sur des objets qui ne sont pas des tableaux

La méthode `groupToMap()` lit la propriété `length` de `this` puis parcourt les propriétés dont les clés sont des nombres entiers.

```js
const semblableTableau = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.groupToMap.call(semblableTableau, (x) => x % 2));
// Map { 0 => [2, 4], 1 => [3] }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Array.prototype.group()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/group)
- [Une prothèse d'émulation de `Array.prototype.groupToMap()` dans la bibliothèque tierce `core-js`](https://github.com/zloirock/core-js#array-grouping)
