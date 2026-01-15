---
title: Object.groupBy()
slug: Web/JavaScript/Reference/Global_Objects/Object/groupBy
l10n:
  sourceCommit: eb061bd719102c148cf87d12fd7056ed0c5071c8
---

{{JSRef}}

> [!NOTE]
> Dans certaines versions de navigateurs, cette méthode fut implémentée avec `Array.prototype.group()`. Suite à des problèmes de compatibilité web, elle est désormais implémentée comme une méthode statique. Voir [le tableau de compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus de détails.

La méthode statique **`Object.groupBy()`** groupe les éléments d'un itérable donné selon la chaîne de caractères obtenue par la fonction de rappel fournie. L'objet renvoyé possède différentes propriétés pour chaque groupe, contenant des tableaux avec les éléments du groupe.

Cette méthode devrait être utilisée lorsque les noms des groupes peuvent être représentés par des chaînes de caractères. S'il vous faut grouper des éléments selon une clé qui peut être une valeur arbitraire, privilégiez la méthode [`Map.groupBy()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map/groupBy).

{{InteractiveExample("JavaScript Demo: Object.groupBy()", "taller")}}

```js interactive-example
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

const restock = { restock: true };
const sufficient = { restock: false };
const result = Object.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? "restock" : "sufficient",
);
console.log(result.restock);
// [{ name: "bananas", type: "fruit", quantity: 5 }]
```

## Syntaxe

```js-nolint
Object.groupBy(items, fnRappel)
```

### Paramètres

- `items`
  - : Un [itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_») (comme un [tableau (`Array`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)) dont les éléments seront groupés.
- `fnRappel`
  - : Une fonction à exécuter pour chaque élément de l'itérable. Cette fonction devrait renvoyer une valeur qui peut être convertie en une clé de propriété (c'est-à-dire une chaîne de caractères ou un [symbole](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol)) indiquant le groupe de l'élément courant. Cette fonction est appelée avec les arguments suivants&nbsp;:
    - `element`
      - : L'élément courant qui est traité.
    - `index`
      - : L'indice de l'élément courant qui est traité.

### Valeur de retour

Un [objet avec un prototype `null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#objets_avec_prototype_null) avec une propriété pour chaque groupe, qui contient un tableau des éléments du groupe correspondant.

## Description

`Object.groupBy()` appelle une fonction de rappel `fnRappel()` sur chaque élément de l'itérable. Cette fonction renvoie alors une chaîne de caractères ou un symbole (sinon la valeur est [convertie en chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#conversion_en_chaîne_de_caractères)) qui indique le groupe de l'élément. Les valeurs renvoyées par `fnRappel()` sont utilisées comme clés pour l'objet renvoyé par `Object.groupBy()`. La valeur de chaque propriété est un tableau dont les éléments sont ceux pour lesquels la fonction de rappel a renvoyé la même valeur.

Les éléments de l'objet renvoyé et de l'itérable original sont les mêmes (il ne s'agit pas de [copies profondes](/fr/docs/Glossary/Deep_copy)). Modifier la structure interne des éléments sera reflété à la fois sur l'itérable original et sur l'objet renvoyé.

## Exemples

### Utiliser `Object.groupBy()`

Pour commencer, on définit un tableau contenant un inventaire d'aliments. Chaque aliment possède un nom, un type et une quantité.

```js
const inventaire = [
  { nom: "asperges", type: "légumes", quantite: 5 },
  { nom: "bananes", type: "fruit", quantite: 0 },
  { nom: "agneau", type: "viande", quantite: 23 },
  { nom: "cerises", type: "fruit", quantite: 5 },
  { nom: "poisson", type: "viande", quantite: 22 },
];
```

L'instruction suivante groupera les éléments selon leur propriété `type`.

```js
const resultat = Object.groupBy(inventaire, ({ type }) => type);

/* Le résultat sera :
{
  légumes: [
    { nom: 'asperges', type: 'légumes', quantite: 5 },
  ],
  fruit: [
    { nom: "bananes", type: "fruit", quantite: 0 },
    { nom: "cerises", type: "fruit", quantite: 5 }
  ],
  viande: [
    { nom: "agneau", type: "viande", quantite: 23 },
    { nom: "poisson", type: "viande", quantite: 22 }
  ]
}
*/
```

La fonction fléchée renvoie la valeur de `type` pour chaque élément du tableau. On notera que l'argument `{ type }` est un exemple [de la syntaxe de décomposition d'objet pour les arguments de fonction](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring#décomposer_les_propriétés_dobjets_passés_en_arguments). Cela extrait la propriété `type` d'un objet passé en paramètre et affecte la valeur à une variable nommée `type` dans le corps de la fonction. On peut ainsi écrire succinctement l'accès aux propriétés d'un élément dans une fonction.

On pourrait également créer des groupes selon les valeurs d'une ou plusieurs propriétés de l'élément. Dans l'exemple qui suit, on place les aliments dans deux groupes `ok` ou `restock` selon la valeur de leur propriété `quantite`.

```js
function maFonctionDeRappel({ quantite }) {
  return quantite > 5 ? "ok" : "restock";
}

const resultat2 = Object.groupBy(inventaire, maFonctionDeRappel);

/* Le résultat sera :
{
  restock: [
    { nom: "asperges", type: "légumes", quantite: 5 },
    { nom: "bananes", type: "fruit", quantite: 0 },
    { nom: "cerises", type: "fruit", quantite: 5 }
  ],
  ok: [
    { nom: "agneau", type: "viande", quantite: 23 },
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

- [Une prothèse d'émulation (<i lang="en">polyfill</i>) de `Object.groupBy()` dans la bibliothèque tierce `core-js`](https://github.com/zloirock/core-js#array-grouping)
- [Le guide sur les collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- [`Array.prototype.reduce()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [`Object.fromEntries()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)
- [`Map.groupBy()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map/groupBy)
