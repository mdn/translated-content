---
title: "Map : méthode groupBy()"
short-title: groupBy()
slug: Web/JavaScript/Reference/Global_Objects/Map/groupBy
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

> [!NOTE]
> Dans certaines versions de certains navigateurs, cette méthode a été implémentée sous le nom `Array.prototype.groupToMap()`. En raison de problèmes de compatibilité web, elle est désormais implémentée comme une méthode statique. Consultez le [tableau de compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus de détails.

La méthode statique **`Map.groupBy()`** regroupe les éléments d'un itérable donné en utilisant les valeurs retournées par une fonction de rappel fournie. L'objet {{JSxRef("Map")}} retourné utilise les valeurs uniques de la fonction de test comme clés, qui permettent d'obtenir le tableau des éléments de chaque groupe.

Cette méthode est principalement utile pour regrouper des éléments associés à un objet, en particulier lorsque cet objet peut évoluer au fil du temps. Si l'objet est invariant, il est possible de le représenter par une chaîne de caractères et de regrouper les éléments avec {{JSxRef("Object.groupBy()")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Map.groupBy()", "taller")}}

```js interactive-example
const inventory = [
  { name: "asperge", type: "legumes", quantity: 9 },
  { name: "banane", type: "fruit", quantity: 5 },
  { name: "chevre", type: "viande", quantity: 23 },
  { name: "cerises", type: "fruit", quantity: 12 },
  { name: "poisson", type: "viande", quantity: 22 },
];

const restock = { restock: true };
const sufficient = { restock: false };
const result = Map.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? restock : sufficient,
);
console.log(result.get(restock));
// [{ name: "banane", type: "fruit", quantity: 5 }]
```

## Syntaxe

```js-nolint
Map.groupBy(items, callbackFn)
```

### Paramètres

- `items`
  - : Un [itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_») (comme un objet {{JSxRef("Array")}}) dont les éléments seront groupés.
- `callbackFn`
  - : Une fonction à exécuter pour chaque élément de l'itérable. Elle doit retourner une valeur ({{Glossary("object", "objet")}} ou {{Glossary("primitive", "valeur primitive")}}) indiquant le groupe de l'élément courant. La fonction est appelée avec les arguments suivants&nbsp;:
    - `element`
      - : L'élément courant en cours de traitement.
    - `index`
      - : L'indice de l'élément courant en cours de traitement.

### Valeur de retour

Un objet {{JSxRef("Map")}} avec une clé pour chaque groupe, chacune associée à un tableau contenant les éléments du groupe correspondant.

## Description

`Map.groupBy()` appelle la fonction `callbackFn` fournie une fois pour chaque élément d'un itérable. La fonction de rappel doit retourner une valeur indiquant le groupe de l'élément associé. Les valeurs retournées par `callbackFn` sont utilisées comme clés pour l'objet {{JSxRef("Map")}} retourné par `Map.groupBy()`. Chaque clé est associée à un tableau contenant tous les éléments pour lesquels la fonction de rappel a retourné la même valeur.

Les éléments de l'objet {{JSxRef("Map")}} retourné et de l'itérable d'origine sont les mêmes (il ne s'agit pas de {{Glossary("deep copy","copies profondes")}}). Toute modification de la structure interne des éléments sera répercutée à la fois dans l'itérable d'origine et dans l'objet {{JSxRef("Map")}} retourné.

Cette méthode est utile lorsque vous devez regrouper des informations associées à un objet particulier qui peut potentiellement changer au fil du temps. En effet, même si l'objet est modifié, il continuera de fonctionner comme clé pour la `Map` retournée. Si vous créez plutôt une représentation sous forme de chaîne de caractères pour l'objet et que vous l'utilisez comme clé de regroupement dans {{JSxRef("Object.groupBy()")}}, vous devrez maintenir la correspondance entre l'objet original et sa représentation lorsque l'objet change.

> [!NOTE]
> Pour accéder aux groupes dans la `Map` retournée, vous devez utiliser le même objet que celui qui a été initialement utilisé comme clé dans la `Map` (même si vous pouvez modifier ses propriétés). Vous ne pouvez pas utiliser un autre objet qui aurait simplement le même nom et les mêmes propriétés.

`Map.groupBy` ne lit pas la valeur de `this`. Elle peut être appelée sur n'importe quel objet et une nouvelle instance de {{JSxRef("Map")}} sera retournée.

## Exemples

### Utiliser `Map.groupBy()`

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

Le code ci-dessous utilise `Map.groupBy()` avec une fonction fléchée qui retourne les objets clés nommés `restock` ou `sufficient`, selon que l'élément a `quantity < 6`. L'objet `result` retourné est une `Map`, il faut donc appeler `get()` avec la clé pour obtenir le tableau.

```js
const restock = { restock: true };
const suffisant = { restock: false };
const resultat = Map.groupBy(inventaire, ({ quantite }) =>
  quantite < 6 ? restock : suffisant,
);
console.log(resultat.get(restock));
// résultat attendu : Array [Object { nom: "banane", type: "fruit", quantite: 5 }]
```

Ici, l'argument `{ quantite }` passé à la fonction est un exemple de [décomposition objet pour les arguments d'une fonction](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring#décomposer_les_propriétés_dobjets_passés_en_arguments). Cela récupère la propriété `quantite` de l'objet passé en paramètre et affecte cette valeur à une variable nommée `quantite` dans le corps de la fonction. Il s'agit d'une écriture concise pour accéder aux valeurs des propriétés pertinentes d'un objet dans une fonction.

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

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Map.groupBy` dans `core-js <sup>(angl.)</sup>`](https://github.com/zloirock/core-js#array-grouping)
- [Prothèse d'émulation es-shims de `Map.groupBy <sup>(angl.)</sup>`](https://www.npmjs.com/package/map.groupby)
- Le guide [des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- La méthode {{JSxRef("Array.prototype.reduce()")}}
- La méthode {{JSxRef("Map/Map", "Map()")}}
- La méthode {{JSxRef("Object.groupBy()")}}
