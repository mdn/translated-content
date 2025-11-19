---
title: "Array : méthode splice()"
short-title: splice()
slug: Web/JavaScript/Reference/Global_Objects/Array/splice
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`splice()`** des instances de {{JSxRef("Array")}} modifie le contenu d'un tableau en supprimant ou remplaçant des éléments existants et/ou en ajoutant de nouveaux éléments [en place](https://fr.wikipedia.org/wiki/Algorithme_en_place).

Pour créer un nouveau tableau avec un segment supprimé et/ou remplacé sans modifier le tableau d'origine, utilisez {{JSxRef("Array/toSpliced", "toSpliced()")}}. Pour accéder à une partie d'un tableau sans le modifier, consultez {{JSxRef("Array/slice", "slice()")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.splice()")}}

```js interactive-example
const months = ["Jan", "Mars", "Avril", "Juin"];
months.splice(1, 0, "Fév");
// Insère à l'indice 1
console.log(months);
// Résultat attendu : Array ["Jan", "Fév", "Mars", "Avril", "Juin"]

months.splice(4, 1, "Mai");
// Remplace 1 élément à l'indice 4
console.log(months);
// Résultat attendu : Array ["Jan", "Fév", "Mars", "Avril", "Mai"]
```

## Syntaxe

```js-nolint
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)
```

### Paramètres

- `start`
  - : L'indice (commençant à zéro) à partir duquel commencer à modifier le tableau, [converti en entier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_entière).
    - Un indice négatif compte à rebours depuis la fin du tableau — si `-array.length <= start < 0`, on utilise `start + array.length`.
    - Si l'indice `start` est inférieur à `-array.length`, on utilise `0`.
    - Si l'indice `start` est supérieur ou égal à `array.length`, aucun élément ne sera supprimé, mais la méthode se comportera comme une fonction d'ajout, ajoutant autant d'éléments que fourni.
    - Si l'indice `start` est omis (et que `splice()` est appelé sans argument), rien n'est supprimé. Cela diffère du passage de `undefined`, qui est converti en `0`.

- `deleteCount` {{Optional_Inline}}
  - : Un entier indiquant le nombre d'éléments à supprimer à partir de l'indice `start`.

    Si le paramètre `deleteCount` est omis, ou si sa valeur est supérieure ou égale au nombre d'éléments après la position indiquée par l'indice `start`, alors tous les éléments de l'indice `start` à la fin du tableau seront supprimés. Cependant, si vous souhaitez passer un paramètre `itemN`, vous devez passer `Infinity` comme valeur de `deleteCount` pour supprimer tous les éléments après l'indice `start`, car un `undefined` explicite est [converti](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_entière) en `0`.

    Si le paramètre `deleteCount` vaut `0` ou une valeur négative, aucun élément n'est supprimé.
    Dans ce cas, vous devez spécifier au moins un nouvel élément (voir ci-dessous).

- `item1`, …, `itemN` {{Optional_Inline}}
  - : Les éléments à ajouter au tableau, à partir de l'indice `start`.

    Si vous ne spécifiez aucun élément, `splice()` ne fera que supprimer des éléments du tableau.

### Valeur de retour

Un tableau contenant les éléments supprimés.

Si un seul élément est supprimé, un tableau contenant cet unique élément est retourné.

Si aucun élément n'est supprimé, un tableau vide est retourné.

## Description

La méthode `splice()` est une [méthode mutante](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_copie_et_méthodes_mutantes). Elle peut modifier le contenu de `this`. Si le nombre d'éléments à insérer diffère du nombre d'éléments supprimés, la propriété `length` du tableau sera également modifiée. En même temps, elle utilise [`[Symbol.species]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species) pour créer une nouvelle instance de tableau à retourner.

Si la portion supprimée est un [tableau creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux), le tableau retourné par `splice()` sera également creux, avec les indices correspondants vides.

La méthode `splice()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_génériques_de_tableau). Elle attend seulement que la valeur de `this` possède une propriété `length` et des propriétés à clés entières. Bien que les chaînes de caractères soient aussi assimilables à des tableaux, cette méthode ne leur est pas adaptée, car les chaînes sont immuables.

## Exemples

### Supprimer 0 élément avant l'indice 2 et insérer « tambour »

```js
const myFish = ["ange", "clown", "mandarin", "esturgeon"];
const removed = myFish.splice(2, 0, "tambour");

// myFish vaut ["angel", "clown", "tambour", "mandarin", "sturgeon"]
// removed vaut [], aucun élément supprimé
```

### Supprimer 0 élément avant l'indice 2 et insérer « tambour » et « guitare »

```js
const myFish = ["ange", "clown", "mandarin", "esturgeon"];
const removed = myFish.splice(2, 0, "tambour", "guitare");

// myFish vaut ["angel", "clown", "tambour", "guitare", "mandarin", "sturgeon"]
// removed vaut [], aucun élément supprimé
```

### Supprimer 0 élément à l'indice 0 et insérer « ange »

`splice(0, 0, ...éléments)` insère des éléments au début du tableau comme {{JSxRef("Array/unshift", "unshift()")}}.

```js
const myFish = ["clown", "mandarin", "esturgeon"];
const removed = myFish.splice(0, 0, "ange");

// myFish vaut ["angel", "clown", "mandarin", "sturgeon"]
// aucun élément supprimé
```

### Supprimer 0 élément au dernier indice et insérer « esturgeon »

`splice(array.length, 0, ...éléments)` insère des éléments à la fin du tableau comme {{JSxRef("Array/push", "push()")}}.

```js
const myFish = ["ange", "clown", "mandarin"];
const removed = myFish.splice(myFish.length, 0, "esturgeon");

// myFish vaut ["angel", "clown", "mandarin", "esturgeon"]
// aucun élément supprimé
```

### Supprimer 1 élément à l'indice 3

```js
const myFish = ["ange", "clown", "tambour", "mandarin", "esturgeon"];
const removed = myFish.splice(3, 1);

// myFish vaut ["angel", "clown", "tambour", "esturgeon"]
// removed vaut ["mandarin"]
```

### Supprimer 1 élément à l'indice 2 et insérer « trompette »

```js
const myFish = ["ange", "clown", "tambour", "esturgeon"];
const removed = myFish.splice(2, 1, "trompette");

// myFish vaut ["angel", "clown", "trompette", "esturgeon"]
// removed vaut ["tambour"]
```

### Supprimer 2 éléments à partir de l'indice 0 et insérer « perroquet », « anémone » et « bleu »

```js
const myFish = ["ange", "clown", "trompette", "esturgeon"];
const removed = myFish.splice(0, 2, "perroquet", "anémone", "bleu");

// myFish vaut ["perroquet", "anémone", "bleu", "trompette", "esturgeon"]
// removed vaut ["angel", "clown"]
```

### Supprimer 2 éléments à partir de l'indice 2

```js
const myFish = ["perroquet", "anémone", "bleu", "trompette", "esturgeon"];
const removed = myFish.splice(2, 2);

// myFish vaut ["perroquet", "anémone", "esturgeon"]
// removed vaut ["bleu", "trompette"]
```

### Supprimer 1 élément à partir de l'indice -2

```js
const myFish = ["ange", "clown", "mandarin", "esturgeon"];
const removed = myFish.splice(-2, 1);

// myFish vaut ["angel", "clown", "esturgeon"]
// removed vaut ["mandarin"]
```

### Supprimer tous les éléments à partir de l'indice 2

```js
const myFish = ["ange", "clown", "mandarin", "esturgeon"];
const removed = myFish.splice(2);

// myFish vaut ["angel", "clown"]
// removed vaut ["mandarin", "esturgeon"]
```

### Utiliser `splice()` sur des tableaux creux

La méthode `splice()` préserve le caractère creux du tableau.

```js
const arr = [1, , 3, 4, , 6];
console.log(arr.splice(1, 2)); // [empty, 3]
console.log(arr); // [1, 4, empty, 6]
```

### Utiliser `splice()` sur des objets qui ne sont pas des tableaux

La méthode `splice()` lit la propriété `length` de `this`. Elle met ensuite à jour les propriétés à clés entières et la propriété `length` si nécessaire.

```js
const objetSimilaireTableau = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
console.log(Array.prototype.splice.call(objetSimilaireTableau, 0, 1, 2, 3));
// [ 5 ]
console.log(objetSimilaireTableau);
// { '0': 2, '1': 3, '3': 4, length: 4, unrelated: 'foo' }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.concat()")}}
- La méthode {{JSxRef("Array.prototype.push()")}}
- La méthode {{JSxRef("Array.prototype.pop()")}}
- La méthode {{JSxRef("Array.prototype.shift()")}}
- La méthode {{JSxRef("Array.prototype.slice()")}}
- La méthode {{JSxRef("Array.prototype.toSpliced()")}}
- La méthode {{JSxRef("Array.prototype.unshift()")}}
