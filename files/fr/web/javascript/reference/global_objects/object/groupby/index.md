---
title: "Object : méthode statique groupBy()"
short-title: groupBy()
slug: Web/JavaScript/Reference/Global_Objects/Object/groupBy
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

> [!NOTE]
> Dans certaines versions de navigateurs, cette méthode fut implémentée avec `Array.prototype.group()`. Suite à des problèmes de compatibilité web, elle est désormais implémentée comme une méthode statique. Voir [le tableau de compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus de détails.

La méthode statique **`Object.groupBy()`** groupe les éléments d'un itérable donné selon la chaîne de caractères obtenue par la fonction de rappel fournie. L'objet retourné possède différentes propriétés pour chaque groupe, contenant des tableaux avec les éléments du groupe.

Cette méthode doit être utilisée lorsque les noms des groupes peuvent être représentés par des chaînes de caractères. S'il vous faut grouper des éléments selon une clé qui peut être une valeur arbitraire, privilégiez la méthode {{JSxRef("Map.groupBy()")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Object.groupBy()", "taller")}}

```js interactive-example
const inventory = [
  { name: "asperges", type: "légumes", quantity: 9 },
  { name: "bananes", type: "fruit", quantity: 5 },
  { name: "chèvre", type: "viande", quantity: 23 },
  { name: "cerises", type: "fruit", quantity: 12 },
  { name: "poisson", type: "viande", quantity: 22 },
];

const result = Object.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? "restock" : "sufficient",
);
console.log(result.restock);
// [{ name: "bananes", type: "fruit", quantity: 5 }]
```

## Syntaxe

```js-nolint
Object.groupBy(items, callbackFn)
```

### Paramètres

- `items`
  - : Un [itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_») (comme un tableau ({{JSxRef("Array")}})) dont les éléments sont groupés.
- `callbackFn`
  - : Une fonction à exécuter pour chaque élément de l'itérable. Cette fonction doit retourner une valeur qui peut être convertie en une clé de propriété (c'est-à-dire une chaîne de caractères ou un [symbole](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol)) indiquant le groupe de l'élément courant. Cette fonction est appelée avec les arguments suivants&nbsp;:
    - `element`
      - : L'élément courant qui est traité.
    - `index`
      - : L'indice de l'élément courant qui est traité.

### Valeur de retour

Un [objet avec un prototype `null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#objets_avec_prototype_null) avec une propriété pour chaque groupe, qui contient un tableau des éléments du groupe correspondant.

## Description

`Object.groupBy()` appelle une fonction de rappel `callbackFn()` sur chaque élément de l'itérable. Cette fonction retourne alors une chaîne de caractères ou un symbole (sinon la valeur est [convertie en chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#conversion_en_chaîne_de_caractères)) qui indique le groupe de l'élément. Les valeurs retournées par `callbackFn()` sont utilisées comme clés pour l'objet retourné par `Object.groupBy()`. La valeur de chaque propriété est un tableau dont les éléments sont ceux pour lesquels la fonction de rappel a retourné la même valeur.

Les éléments de l'objet retourné et de l'itérable original sont les mêmes (il ne s'agit pas de {{Glossary("deep copy", "copies profondes")}}). Modifier la structure interne des éléments est reflété à la fois sur l'itérable original et sur l'objet retourné.

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

L'instruction suivante groupe les éléments selon leur propriété `type`.

```js
const resultat = Object.groupBy(inventaire, ({ type }) => type);

/* Le résultat est :
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

La fonction fléchée retourne la valeur de `type` pour chaque élément du tableau. Notez que l'argument `{ type }` est un exemple [de la syntaxe de décomposition d'objet pour les arguments de fonction](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring#décomposer_les_propriétés_dobjets_passés_en_arguments). Cela extrait la propriété `type` d'un objet passé en paramètre et affecte la valeur à une variable nommée `type` dans le corps de la fonction. On peut ainsi écrire succinctement l'accès aux propriétés d'un élément dans une fonction.

On peut également créer des groupes selon les valeurs d'une ou plusieurs propriétés de l'élément. Dans l'exemple qui suit, on place les aliments dans deux groupes `ok` ou `restock` selon la valeur de leur propriété `quantite`.

```js
function maFonctionDeRappel({ quantite }) {
  return quantite > 5 ? "ok" : "restock";
}

const resultat2 = Object.groupBy(inventaire, maFonctionDeRappel);

/* Le résultat est :
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

- [La prothèse d'émulation de `Object.groupBy()` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#array-grouping)
- [La prothèse d'émulation es-shims de `Object.groupBy` <sup>(angl.)</sup>](https://www.npmjs.com/package/object.groupby)
- Le guide [des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- La méthode statique {{JSxRef("Array.prototype.reduce()")}}
- La méthode statique {{JSxRef("Object.fromEntries()")}}
- La méthode statique {{JSxRef("Map.groupBy()")}}
