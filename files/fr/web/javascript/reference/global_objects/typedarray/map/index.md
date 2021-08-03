---
title: TypedArray.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/map
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/map
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/map
---
{{JSRef}}

La méthode **`map()`** crée un nouveau tableau typé dont les éléments sont les images des éléments du tableau typé courant par une fonction donnée. Cette méthode utilise le même algorithme que {{jsxref("Array.prototype.map()")}}_._ _TypedArray_ est utilisé ici de façon générique pour représenter [l'un des types de tableaux typés possibles](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray).

{{EmbedInteractiveExample("pages/js/typedarray-map.html")}}

## Syntaxe

    typedarray.map(callback[, thisArg])

### Paramètres

- `callback`

  - : La fonction qui renvoie l'élément à placer dans le nouveau tableau typé. Cette fonction utilise trois arguments :

    - `valeurCourante`
      - : La valeur de l'élément du tableau typé courant, celui traité par la fonction.
    - `indice`
      - : L'indice de l'élément du tableau typé en cours de traitement.
    - `tableauTypé`
      - : Le tableau typé sur lequel `map()` a été appelée.

- `thisArg`
  - : Paramètre optionnel. La valeur à utiliser pour `this` lors de l'appel à `callback`.

### Valeur de retour

Un nouveau tableau typé.

## Description

La méthode `map()` appelle la fonction `callback()` passée en argument une fois pour chaque élément du tableau typé pour construire un nouveau tableau à partir des résultats de la fonction. Les appels à callback sont effectués dans l'ordre du tableau typé. `callback()` n'est appelée que pour les éléments du tableaux qui ont une valeur, elle n'est pas appelée pour les éléments qui sont indéfinis ou qui ont été supprimés.

`callback()` est appelée avec trois arguments : la valeur de l'élément, l'indice de cet élément et enfin le tableau typé courant.

Si un paramètre `thisArg` est fourni pour `map()`, il sera passé à `callback` pour les différents appels et servira de valeur `this`. Par défaut, la valeur {{jsxref("undefined")}} sera passée à la fonction pour la valeur `this`. Par ailleurs, la valeur de `this` accessible depuis la fonction `callback` est déterminée selon [les règles usuelles déterminant la valeur `this` au sein d'une fonction](/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_this).

`map()` ne modifie pas le tableau typé sur lequel elle a été appelée (indirectement, c'est la fonction `callback` qui pourra éventuellement modifier le tableau).

La liste des éléments parcourus par `map()` est définie avant la première invocation de la fonction `callback`. Les éléments qui sont ajoutés au tableau typé après le début de l'appel de `map()` (grâce à la fonction `callback` par exemple) ne seront pas visités. Si des éléments existants du tableau typé ont modifiés ou supprimés, la valeur fournie à la fonction `callback` sera leur valeur au moment où `map()` les visite - les éléments supprimés ne seront pas traités par la fonction.

## Exemples

### Obtenir un tableau typé des racines carrées des éléments d'un premier tableau typé

Dans l'exemple suivant, on crée un nouveau tableau typé dont les éléments seront les racines carrées respectives des éléments d'un tableau typé existant.

```js
var nombres = new Uint8Array([1, 4, 9]);
var racines = nombres.map(Math.sqrt);
// racines vaut désormais Uint8Array [1, 2, 3],
// nombres vaut toujours Uint8Array [1, 4, 9]
```

### Utiliser `map()` avec une fonction qui prend un argument

Ici, on illustre comment une fonction utilisant un argument peut être utilisée avec `map()`. Cet argument recevra automatiquement la valeur de chaque élément du tableau typé au fur et à mesure du parcours.

```js
var nombres = new Uint8Array([1, 4, 9]);
var doubles = nombres.map(function(num) {
  return num * 2;
});
// doubles vaut désormais Uint8Array [2, 8, 18]
// nombres vaut toujours Uint8Array [1, 4, 9]
```

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-%typedarray%.prototype.map', 'TypedArray.prototype.map')}}     | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.map', 'TypedArray.prototype.map')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.TypedArray.map")}}

## Voir aussi

- {{jsxref("TypedArray.prototype.filter()")}}
- {{jsxref("Array.prototype.map()")}}
