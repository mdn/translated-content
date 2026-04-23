---
title: "Array : méthode toString()"
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toString
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`toString()`** des instances de {{JSxRef("Array")}} retourne une chaîne de caractères représentant le tableau défini et ses éléments.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.toString()", "shorter")}}

```js interactive-example
const array1 = [1, 2, "a", "1a"];

console.log(array1.toString());
// Résultat attendu : "1,2,a,1a"
```

## Syntaxe

```js-nolint
toString()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères qui représente les éléments du tableau.

## Description

L'objet {{JSxRef("Array")}} redéfinit la méthode `toString` de {{JSxRef("Object")}}. La méthode `toString` des tableaux appelle en interne la méthode {{JSxRef("Array.prototype.join", "join()")}}, qui concatène les éléments du tableau et retourne une chaîne de caractères contenant chaque élément séparé par des virgules. Si la méthode `join` n'est pas disponible ou n'est pas une fonction, {{JSxRef("Object.prototype.toString")}} est utilisée à la place, retournant `[object Array]`.

```js
const arr = [];
arr.join = 1; // réassigne `join` avec une valeur qui n'est pas une fonction
console.log(arr.toString()); // [object Array]

console.log(Array.prototype.toString.call({ join: () => 1 })); // 1
```

JavaScript appelle automatiquement la méthode `toString` lorsqu'un tableau doit être représenté sous forme de valeur texte ou lorsqu'un tableau est utilisé dans une concaténation de chaînes de caractères.

`Array.prototype.toString` convertit récursivement chaque élément, y compris les autres tableaux, en chaînes de caractères. Comme la chaîne retournée par `Array.prototype.toString` ne contient pas de délimiteurs pour les sous-tableaux, les tableaux imbriqués semblent être aplanis.

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.toString()); // 1,2,3,4,5,6,7,8,9
```

Lorsqu'un tableau est cyclique (il contient un élément qui est lui-même), les navigateurs évitent la récursion infinie en ignorant la référence cyclique.

```js
const arr = [];
arr.push(1, [3, arr, 4], 2);
console.log(arr.toString()); // 1,3,,4,2
```

## Exemples

### Utilisation de `toString()`

```js
const array = [1, 2, "a", "1a"];

console.log(array.toString()); // "1,2,a,1a"
```

### Utilisation de `toString()` sur des tableaux creux

Comme pour le comportement de `join()`, `toString()` traite les cases vides comme `undefined` et produit un séparateur supplémentaire&nbsp;:

```js
console.log([1, , 3].toString()); // '1,,3'
```

### Appeler `toString()` sur des objets qui ne sont pas des tableaux

`toString()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend que `this` possède une méthode `join()`&nbsp;; sinon, elle utilise `Object.prototype.toString()` à la place.

```js
console.log(Array.prototype.toString.call({ join: () => 1 }));
// 1 : un nombre
console.log(Array.prototype.toString.call({ join: () => undefined }));
// undefined
console.log(Array.prototype.toString.call({ join: "not function" }));
// "[object Object]"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.join()")}}
- La méthode {{JSxRef("Array.prototype.toLocaleString()")}}
- La méthode {{JSxRef("TypedArray.prototype.toString()")}}
- La méthode {{JSxRef("String.prototype.toString()")}}
