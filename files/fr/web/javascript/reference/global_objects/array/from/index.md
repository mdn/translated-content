---
title: Array.from()
slug: Web/JavaScript/Reference/Global_Objects/Array/from
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/from
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/from
---
{{JSRef}}

La méthode **`Array.from()`** permet de créer une nouvelle instance d'`Array` (une copie superficielle) à partir d'un objet itérable ou semblable à un tableau.

{{EmbedInteractiveExample("pages/js/array-from.html")}}

## Syntaxe

```js
Array.from(arrayLike [, fonctionMap[, thisArg]])
```

### Paramètres

- `arrayLike`
  - : Un objet semblable à un tableau ou bien un objet itérable dont on souhaite créer un tableau, instance d'`Array`.
- `fonctionMap` {{optional_inline}}
  - : Argument optionnel, une fonction à appliquer à chacun des éléments du tableau.
- `thisArg` {{optional_inline}}
  - : Argument optionnel. La valeur à utiliser pour `this` lors de l'exécution de la fonction `fonctionMap`.

### Valeur de retour

Une nouvelle instance de {{jsxref("Array")}}.

## Description

`Array.from()` permet de créer des instances d'`Array` à partir :

- d'objets semblables à des tableaux (qui disposent d'une propriété `length` et d'éléments indexés) ou
- [d'objets itérables](/fr/docs/Web/JavaScript/Guide/iterable) (des objets dont on peut avoir les éléments comme {{jsxref("Map")}} et {{jsxref("Set")}}).

`Array.from()` possède un paramètre optionnel `fonctionMap`, qui permet d'exécuter une fonction {{jsxref("Array.prototype.map", "map")}} sur chacun des éléments du tableau (ou de l'instance de la classe fille) qui est créé. Autrement dit `Array.from(obj, mapFn, thisArg)` correspond exactement à `Array.from(obj).map(mapFn, thisArg)`, sauf qu'il n'y a pas de tableau intermédiaire de créé. Cet aspect est notamment important pour certaines classes filles, comme les [tableaux typés](/fr/docs/JavaScript/Tableaux_typ%C3%A9s) (en effet, un tableau intermédiaire aurait eu ses valeurs tronquées pour qu'elles soient du type approprié).

La propriété `length` de la méthode `from()` est 1.

Avec ES6, la syntaxe de classe permet d'avoir des sous-classes pour les objets natifs comme pour les objets définis par l'utilisateur. Ainsi, les méthodes statiques de classe comme `Array.from()` sont héritées par les sous-classes d'`Array` et créent de nouvelles instances de la sous-classe d'`Array`.

## Exemples

```js
// créer une instance d'Array à partir de l'objet arguments qui est semblable à un tableau
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);
// [1, 2, 3]


// Ça fonctionne avec tous les objets itérables...
// Set
const s = new Set(["toto", "truc", "truc", "bidule"]);
Array.from(s);
// ["toto", "truc", "bidule"]


// Map
const m = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(m);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([["1", "a"], ["2", "b"]]);
Array.from(mapper.values());
// ["a", "b"]

Array.from(mapper.keys());
// ["1", "2"]

// String
Array.from("toto");
// ["t", "o", "t", "o"]


// En utilisant une fonction fléchée pour remplacer map
// et manipuler des éléments
Array.from([1, 2, 3], x => x + x);
// [2, 4, 6]


// Pour générer une séquence de nombres
Array.from({length: 5}, (v, k) => k);
// [0, 1, 2, 3, 4]
```

## Spécifications

| Spécification                                                                | État                         | Commentaires         |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-array.from', 'Array.from')}}     | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-array.from', 'Array.from')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Array.from")}}

## Voir aussi

- {{jsxref("Array")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("TypedArray.from()")}}
