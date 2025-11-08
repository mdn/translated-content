---
title: "Array : méthodelastIndexOf()"
short-title: lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`lastIndexOf()`** des instances de {{JSxRef("Array")}} retourne le dernier index auquel un élément donné peut être trouvé dans le tableau, ou -1 s'il n'est pas présent. Le tableau est parcouru à l'envers, en commençant à `fromIndex`.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.lastIndexOf()")}}

```js interactive-example
const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

console.log(animals.lastIndexOf("Dodo"));
// Résultat attendu : 3

console.log(animals.lastIndexOf("Tiger"));
// Résultat attendu : 1
```

## Syntaxe

```js-nolint
lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)
```

### Paramètres

- `searchElement`
  - : L'élément à rechercher dans le tableau.
- `fromIndex` {{Optional_Inline}}
  - : L'index de départ (basé sur zéro) à partir duquel commencer la recherche à rebours, [converti en entier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_entière).
    - Un index négatif compte à rebours depuis la fin du tableau — si `-array.length <= fromIndex < 0`, on utilise `fromIndex + array.length`.
    - Si `fromIndex < -array.length`, le tableau n'est pas parcouru et `-1` est retourné. On peut considérer conceptuellement que la recherche commence à une position inexistante avant le début du tableau et recule à partir de là. Aucun élément n'est rencontré, donc `searchElement` n'est jamais trouvé.
    - Si `fromIndex >= array.length` ou si `fromIndex` est omis ou vaut `undefined`, on utilise `array.length - 1`, ce qui fait parcourir tout le tableau. On peut considérer conceptuellement que la recherche commence à une position inexistante après la fin du tableau et recule à partir de là. Elle atteint finalement la vraie fin du tableau, puis commence à parcourir les éléments réels à rebours.

### Valeur de retour

Le dernier index de l'élément `searchElement` dans le tableau ; `-1` si l'élément n'est pas trouvé.

## Description

La méthode `lastIndexOf()` compare l'élément `searchElement` aux éléments du tableau en utilisant [l'égalité stricte](/fr/docs/Web/JavaScript/Reference/Operators/Strict_equality) (le même algorithme que l'opérateur `===`). Les valeurs [`NaN`](/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN) ne sont jamais considérées comme égales, donc `lastIndexOf()` retourne toujours `-1` lorsque l'élément recherché est `NaN`.

La méthode `lastIndexOf()` ignore les emplacements vides dans [un tableau creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux).

La méthode `lastIndexOf()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend uniquement que la valeur de `this` possède une propriété `length` et des propriétés à clés entières.

## Exemples

### Utiliser `lastIndexOf()`

Dans l'exemple suivant, on utilise `lastIndexOf()` afin de situer une valeur dans un tableau.

```js
var tableau = [2, 5, 9, 2];
tableau.lastIndexOf(2); // 3
tableau.lastIndexOf(7); // -1
tableau.lastIndexOf(2, 3); // 3
tableau.lastIndexOf(2, 2); // 0
tableau.lastIndexOf(2, -2); // 0
tableau.lastIndexOf(2, -1); // 3
```

Vous ne pouvez pas utiliser `lastIndexOf()` pour rechercher la valeur `NaN`.

```js
const tableau = [NaN];
tableau.lastIndexOf(NaN); // -1
```

### Trouver toutes les occurrences d'un élément

L'exemple suivant utilise `lastIndexOf` pour trouver tous les index (`indices`) d'un élément dans un tableau donné, en utilisant {{JSxRef("Array.prototype.push", "push()")}} pour les ajouter dans un autre tableau quand ils sont trouvés.

```js
var indices = [];
var tableau = ["a", "b", "a", "c", "a", "d"];
var élément = "a";
var idx = tableau.lastIndexOf(élément);
while (idx !== -1) {
  indices.push(idx);
  idx = idx > 0 ? tableau.lastIndexOf(élément, idx - 1) : -1;
}

console.log(indices);
// [4, 2, 0]
```

Remarquez que nous avons dû traiter le cas de `idx === 0` séparément (`idx > 0`) parce que l'élément sera toujours trouvé, indépendamment du paramètre de `fromIndex`, si c'est le premier élément du tableau. C'est une différence avec la méthode {{JSxRef("Array.prototype.indexOf", "indexOf()")}}.

### Utiliser `lastIndexOf()` sur un tableau creux

Vous ne pouvez pas utiliser `lastIndexOf()` pour rechercher des emplacements vides dans un tableau creux.

```js
console.log([1, , 3].lastIndexOf(undefined)); // -1
```

### Appeler `lastIndexOf()` sur des objets qui ne sont pas des tableaux

La méthode `lastIndexOf()` lit la propriété `length` de `this` puis accède à chaque propriété dont la clé est un entier non négatif inférieur à `length`.

```js
const objetSimilaireTableau = {
  length: 3,
  0: 2,
  1: 3,
  2: 2,
  3: 5, // ignoré par lastIndexOf() car length vaut 3
};
console.log(Array.prototype.lastIndexOf.call(objetSimilaireTableau, 2));
// 2
console.log(Array.prototype.lastIndexOf.call(objetSimilaireTableau, 5));
// -1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.findIndex()")}}
- La méthode {{JSxRef("Array.prototype.findLastIndex()")}}
- La méthode {{JSxRef("Array.prototype.indexOf()")}}
- La méthode {{JSxRef("TypedArray.prototype.lastIndexOf()")}}
- La méthode {{JSxRef("String.prototype.lastIndexOf()")}}
- [Prothèse d'émulation de `Array.prototype.lastIndexOf` dans core-js <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
- [Prothèse d'émulation es-shims de `Array.prototype.lastIndexOf` <sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.lastindexof)
