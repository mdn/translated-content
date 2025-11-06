---
title: "Array : méthode push()"
short-title: push()
slug: Web/JavaScript/Reference/Global_Objects/Array/push
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`push()`** des instances {{JSxRef("Array")}} ajoute les éléments définis à la fin d'un tableau et retourne la nouvelle longueur du tableau.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.push()")}}

```js interactive-example
const animals = ["cochons", "chèvres", "moutons"];

const count = animals.push("vaches");
console.log(count);
// Résultat attendu : 4
console.log(animals);
// Résultat attendu : Array ["cochons", "chèvres", "moutons", "vaches"]

animals.push("poules", "chats", "chiens");
console.log(animals);
// Résultat attendu : Array ["cochons", "chèvres", "moutons", "vaches", "poules", "chats", "chiens"]
```

## Syntaxe

```js-nolint
push()
push(element1)
push(element1, element2)
push(element1, element2, /* …, */ elementN)
```

### Paramètres

- `element1`, …, `elementN`
  - : Les éléments à ajouter à la fin du tableau.

### Valeur de retour

La nouvelle propriété {{JSxRef("Array/length", "length")}} de l'objet sur lequel la méthode a été appelée.

## Description

La méthode `push()` ajoute des valeurs à un tableau.

{{JSxRef("Array.prototype.unshift()")}} a un comportement similaire à `push()`, mais appliqué au début d'un tableau.

La méthode `push()` est une [méthode de mutation](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_copie_et_méthodes_de_mutation). Elle modifie la longueur et le contenu de `this`. Si vous souhaitez que la valeur de `this` reste identique mais retourner un nouveau tableau avec des éléments ajoutés à la fin, vous pouvez utiliser [`arr.concat([element0, element1, /* ... ,*/ elementN])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) à la place. Remarquez que les éléments sont placés dans un tableau supplémentaire — sinon, si l'élément est lui-même un tableau, il serait décomposé au lieu d'être ajouté comme un seul élément à cause du comportement de `concat()`.

La méthode `push()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_génériques_de_tableau). Elle attend seulement que la valeur de `this` possède une propriété `length` et des propriétés à clés entières. Bien que les chaînes de caractères ressemblent aussi à des tableaux, cette méthode ne leur convient pas car elles sont immuables.

## Exemples

### Ajouter des éléments à un tableau

Le code suivant crée un tableau `sports` contenant deux éléments, puis ajoute deux éléments supplémentaires. La variable `total` contient la nouvelle longueur du tableau.

```js
const sports = ["football", "baseball"];
const total = sports.push("tennis", "natation");

console.log(sports); // ['football', 'baseball', 'tennis', 'natation']
console.log(total); // 4
```

### Fusionner deux tableaux

Cet exemple utilise la {{JSxRef("Operators/Spread_syntax", "syntaxe de décomposition", "", 1)}} pour ajouter tous les éléments d'un second tableau au premier.

```js
const legumes = ["panais", "pomme de terre"];
const autresLegumes = ["céleri", "betterave"];

// On fusionne le second tableau dans le premier
legumes.push(...autresLegumes);

console.log(legumes); // ['panais', 'pomme de terre', 'céleri', 'betterave']
```

La fusion de deux tableaux peut aussi se faire avec la méthode {{JSxRef("Array/concat", "concat()")}}.

### Appeler `push()` sur des objets non tableaux

La méthode `push()` lit la propriété `length` de `this`. Elle définit ensuite chaque index de `this` à partir de `length` avec les arguments passés à `push()`. Enfin, elle définit la propriété `length` à l'ancienne valeur plus le nombre d'éléments ajoutés.

```js
const objetSimilaireTableau = {
  length: 3,
  sansRapport: "toto",
  2: 4,
};
Array.prototype.push.call(objetSimilaireTableau, 1, 2);
console.log(objetSimilaireTableau);
// { '2': 4, '3': 1, '4': 2, length: 5, sansRapport: 'toto' }

const objetSimple = {};
// Il n'y a pas de propriété length, donc la longueur est 0
Array.prototype.push.call(objetSimple, 1, 2);
console.log(objetSimple);
// { '0': 1, '1': 2, length: 2 }
```

### Utiliser un objet comme un tableau

Comme mentionné précédemment, `push` est volontairement générique, ce qui peut être utilisé à notre avantage. `Array.prototype.push` fonctionne très bien sur un objet, comme le montre cet exemple.

Notez que nous ne créons pas un tableau pour stocker une collection d'objets. À la place, nous stockons la collection sur l'objet lui-même et utilisons `call` sur `Array.prototype.push` pour faire croire à la méthode que nous manipulons un tableau — et cela fonctionne, grâce à la façon dont JavaScript permet d'établir le contexte d'exécution comme on le souhaite.

```js
const obj = {
  length: 0,

  ajoutElem(elem) {
    // obj.length est automatiquement incrémenté
    // à chaque ajout d'un élément.
    [].push.call(this, elem);
  },
};

// Ajoutons quelques objets vides pour illustrer.
obj.ajoutElem({});
obj.ajoutElem({});
console.log(obj.length); // 2
```

Notez que même si `obj` n'est pas un tableau, la méthode `push` a bien incrémenté la propriété `length` de `obj` comme si nous manipulions un véritable tableau.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.pop()")}}
- La méthode {{JSxRef("Array.prototype.shift()")}}
- La méthode {{JSxRef("Array.prototype.unshift()")}}
- La méthode {{JSxRef("Array.prototype.concat()")}}
- La méthode {{JSxRef("Array.prototype.splice()")}}
- [Prothèse d'émulation de `Array.prototype.push` dans `core-js` avec corrections de cette méthode <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
- [Prothèse d'émulation es-shims de `Array.prototype.push` <sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.push)
