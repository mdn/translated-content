---
title: "Array : méthode join()"
short-title: join()
slug: Web/JavaScript/Reference/Global_Objects/Array/join
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`join()`** des instances de {{JSxRef("Array")}} crée et retourne une nouvelle chaîne de caractères en concaténant tous les éléments de ce tableau, séparés par des virgules ou par une chaîne de séparation définie. Si le tableau ne contient qu'un seul élément, cet élément est retourné sans utiliser le séparateur.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.join()")}}

```js interactive-example
const elements = ["Feu", "Air", "Eau"];

console.log(elements.join());
// Résultat attendu : « Feu,Air,Eau »

console.log(elements.join(""));
// Résultat attendu : « FeuAirEau »

console.log(elements.join("-"));
// Résultat attendu : « Feu-Air-Eau »
```

## Syntaxe

```js-nolint
join()
join(separator)
```

### Paramètres

- `separator` {{Optional_Inline}}
  - : Une chaîne de caractères utilisée pour séparer chaque paire d'éléments adjacents du tableau. Si ce paramètre est omis, les éléments du tableau sont séparés par une virgule (",").

### Valeur de retour

Une chaîne de caractères contenant tous les éléments du tableau fusionnés. Si `array.length` vaut 0, une chaîne de caractères vide est retournée.

## Description

Les conversions en chaîne de caractères de tous les éléments du tableau sont jointes en une seule chaîne de caractères. Si un élément vaut `undefined` ou `null`, il est converti en chaîne de caractères vide au lieu de la chaîne de caractères `"null"` ou `"undefined"`.

La méthode `join` est utilisée en interne par [`Array.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) sans argument. Redéfinir `join` sur une instance de tableau redéfinit aussi son comportement `toString`.

`Array.prototype.join` convertit récursivement chaque élément, y compris les tableaux imbriqués, en chaînes de caractères. Comme la chaîne retournée par `Array.prototype.toString` (équivalent à `join()`) ne contient pas de séparateurs, les tableaux imbriqués semblent aplatis. Vous ne pouvez contrôler que le séparateur du premier niveau, les niveaux plus profonds utilisent toujours la virgule par défaut.

```js
const matrice = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrice.join()); // 1,2,3,4,5,6,7,8,9
console.log(matrice.join(";")); // 1,2,3;4,5,6;7,8,9
```

Si un tableau est cyclique (il contient un élément qui fait référence à lui-même), les navigateurs évitent la récursion infinie en ignorant la référence cyclique.

```js
const arr = [];
arr.push(1, [3, arr, 4], 2);
console.log(arr.join(";")); // 1;3,,4;2
```

Lorsqu'elle est utilisée sur un [tableau creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux), la méthode `join()` itère sur les emplacements vides comme s'ils avaient la valeur `undefined`.

La méthode `join()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend uniquement que la valeur de `this` possède une propriété `length` et des propriétés à clés entières.

## Exemples

### Fusionner un tableau de quatre façons différentes

L'exemple suivant crée un tableau, `a`, avec trois éléments, puis joint le tableau à trois reprises&nbsp;: en utilisant le séparateur par défaut, une virgule et un espace, puis un plus, puis avec la chaîne vide.

```js
const a = new Array("Vent", "Pluie", "Feu");
a.join(); // "Vent,Pluie,Feu"
a.join(", "); // "Vent, Pluie, Feu"
a.join(" + "); // "Vent + Pluie + Feu"
a.join(""); // "VentPluieFeu"
```

### Utiliser `join()` sur un tableau creux

`join()` traite les emplacements vides comme des valeurs `undefined` et produit un séparateur supplémentaire&nbsp;:

```js
console.log([1, , 3].join()); // '1,,3'
console.log([1, undefined, 3].join()); // '1,,3'
```

### Appeler `join()` sur des objets qui ne sont pas des tableaux

La méthode `join()` lit la propriété `length` de `this` puis accède à chaque propriété dont la clé est un entier non négatif inférieur à `length`.

```js
const objetSimilaireTableau = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // ignoré par join() car length vaut 3
};
console.log(Array.prototype.join.call(objetSimilaireTableau));
// 2,3,4
console.log(Array.prototype.join.call(objetSimilaireTableau, "."));
// 2.3.4
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("String.prototype.split()")}}
- La méthode {{JSxRef("Array.prototype.toString()")}}
- La méthode {{JSxRef("TypedArray.prototype.join()")}}
- [Prothèse d'émulation de `Array.prototype.join` dans core-js <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
- [Prothèse d'émulation es-shims de `Array.prototype.join` <sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.join)
