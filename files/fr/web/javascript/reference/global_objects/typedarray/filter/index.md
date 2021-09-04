---
title: TypedArray.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/filter
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/filter
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/filter
---
{{JSRef}}

La méthode **`filter()`** crée un nouveau tableau qui contient l'ensemble des éléments qui remplissent une condition fournie par la fonction de test passée en argument. Cette méthode utilise le même algorithme que {{jsxref("Array.prototype.filter()")}}_._ _TypedArray_ est utilisé ici de façon générique pour représenter [l'un des types de tableaux typés possibles](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray).

{{EmbedInteractiveExample("pages/js/typedarray-filter.html")}}

## Syntaxe

    typedarray.filter(callback[, thisArg])

### Paramètres

- `callback`
  - : Une fonction qui est utilisée pour tester chacun des éléments du tableau typé. Cette fonction est appelée avec trois arguments `(élément, index, tableautypé)`. La fonction renvoie `true` si on souhaite conserver l'élément, `false` sinon.
- `thisArg {{optional_inline}}`
  - : La valeur à utiliser pour `this` lors de l'appel à `callback`.

### Valeur de retour

Un nouveau tableau typé contenant les éléments qui remplissent la condition donnée par la fonction de rappel.

## Description

La méthode `filter()` appelle une fonction `callback` appelée une fois pour chaque élément du tableau typé. Elle construit un nouveau tableau typé constitué des valeurs du tableau original pour lesquelles `callback` a renvoyé `true`. `callback` est appelée uniquement pour les éléments du tableau auxquels on a affecté une valeur, elle n'est pas appelé pour les éléments supprimés ou ceux qui n'ont jamais reçu de valeurs. Les éléments du tableau typé qui ne passent pas le test de la fonction ne sont pas inclus dans le nouveau tableau typé.

`callback` est appelée avec trois arguments :

1.  la valeur de l'élément
2.  l'indice de l'élément
3.  le tableau typé courant

Si le paramètre `thisArg` est fourni, il sera utilisé comme objet `this` lors de l'appel de la fonction `callback`. Sinon, la valeur `undefined` sera utilisée à la place. Par ailleurs, la valeur de `this` accessible depuis la fonction `callback` est déterminée selon [les règles usuelles déterminant la valeur this au sein d'une fonction](/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_this).

`filter()` ne modifie pas le tableau typé sur lequel elle a été appelée.

La liste des éléments parcourus par `filter()` est définie avant la première invocation de la fonction `callback`. Les éléments qui sont ajoutés au tableau typé après le début de l'appel de `filter()` (grâce à la fonction `callback` par exemple) ne seront pas visités. Si des éléments existants du tableau typé ont modifiés ou supprimés, la valeur fournie à la fonction `callback` sera leur valeur au moment où `filter()` les visite - les éléments supprimés ne seront pas traités par la fonction.

## Exemples

### Filtrer les valeurs inférieures à un seuil

Dans l'exemple qui suit, on utilise `filter()` pour créer un nouveau tableau typé qui contient uniquement les éléments supérieurs à 10.

```js
function supSeuil(élément, indice, tableauTypé) {
  return élément >= 10;
}
new Uint8Array([12, 5, 8, 130, 44]).filter(supSeuil);
// Uint8Array [ 12, 130, 44 ]
```

### Filtrer les éléments d'un tableau typé avec les fonctions fléchées

[Les fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fléchées) permettent d'utiliser une syntaxe plus concise pour réaliser le même test que montré précédemment :

```js
new Uint8Array([12, 5, 8, 130, 44]).filter(élém => élém >= 10);
// Uint8Array [ 12, 130, 44 ]
```

## Spécifications

| Spécification                                                                                                                | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-%typedarray%.prototype.filter', 'TypedArray.prototype.filter')}}     | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.filter', 'TypedArray.prototype.filter')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.TypedArray.filter")}}

## Voir aussi

- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("Array.prototype.filter()")}}
