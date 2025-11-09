---
title: "Array : méthode statique of()"
short-title: of()
slug: Web/JavaScript/Reference/Global_Objects/Array/of
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Array.of()`** crée une nouvelle instance de `Array` à partir d'un nombre variable d'arguments, quel que soit le nombre ou le type des arguments.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.of()", "shorter")}}

```js interactive-example
console.log(Array.of("foo", 2, "bar", true));
// Résultat attendu : Array ["foo", 2, "bar", true]

console.log(Array.of());
// Résultat attendu : Array []
```

## Syntaxe

```js-nolint
Array.of()
Array.of(element1)
Array.of(element1, element2)
Array.of(element1, element2, /* …, */ elementN)
```

### Paramètres

- `element1`, …, `elementN`
  - : Éléments utilisés pour créer le tableau.

### Valeur de retour

Une nouvelle instance de {{JSxRef("Array")}}.

## Description

La différence entre `Array.of()` et le constructeur {{JSxRef("Array/Array", "Array()")}} réside dans la gestion d'un seul argument&nbsp;: `Array.of(7)` crée un tableau avec un seul élément, `7`, tandis que `Array(7)` crée un tableau vide avec une propriété `length` de `7`. (Cela signifie un tableau de 7 cases vides, et non des cases contenant réellement la valeur {{JSxRef("undefined")}}.)

```js
Array.of(7); // [7]
Array(7); // tableau de 7 cases vides

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3); // [1, 2, 3]
```

La méthode `Array.of()` est une méthode de fabrique générique. Par exemple, si une sous-classe de `Array` hérite de la méthode `of()`, la méthode héritée retournera de nouvelles instances de la sous-classe au lieu d'instances de `Array`. En fait, la valeur de `this` peut être n'importe quelle fonction constructeur qui accepte un seul argument représentant la longueur du nouveau tableau, et le constructeur sera appelé avec le nombre d'arguments passés à `of()`. La propriété finale `length` sera à nouveau définie une fois que tous les éléments auront été assignés. Si la valeur de `this` n'est pas une fonction constructeur, le constructeur natif `Array` est utilisé à la place.

## Exemples

### Utiliser `Array.of()`

```js
Array.of(1); // [1]
Array.of(1, 2, 3); // [1, 2, 3]
Array.of(undefined); // [undefined]
```

### Appeler `of()` sur des constructeurs qui ne sont pas des tableaux

La méthode `of()` peut être appelée sur n'importe quelle fonction constructeur qui accepte un seul argument représentant la longueur du nouveau tableau.

```js
function PasUnTableau(len) {
  console.log("PasUnTableau appelé avec la longueur", len);
}

console.log(Array.of.call(PasUnTableau, 1, 2, 3));
// PasUnTableau appelé avec la longueur 3
// PasUnTableau { '0': 1, '1': 2, '2': 3, length: 3 }

console.log(Array.of.call(Object)); // [Number: 0] { length: 0 }
```

Lorsque la valeur de `this` n'est pas un constructeur, un objet `Array` standard est retourné.

```js
console.log(Array.of.call({}, 1)); // [ 1 ]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- Le constructeur {{JSxRef("Array/Array", "Array()")}}
- La méthode {{JSxRef("Array.from()")}}
- La méthode {{JSxRef("TypedArray.of()")}}
- [Prothèse d'émulation de `Array.of` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
- [Prothèse d'émulation es-shims de `Array.of` <sup>(angl.)</sup>](https://www.npmjs.com/package/array.of)
