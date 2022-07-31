---
title: Array.of()
slug: Web/JavaScript/Reference/Global_Objects/Array/of
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/of
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/of
---
{{JSRef}}

La methode **`Array.of()`** permet de créer une nouvelle instance d'objet `Array` à partir d'un nombre variable d'arguments, quels que soient leur nombre ou leur type.

La différence entre **`Array.of()`** et le constructeur **`Array`** se situe dans la gestion de d'arguments entiers : **`Array.of(7)`** crée un tableau avec un seul élément, 7, tandis que **`Array(7)`** produit un tableau avec 7 éléments vides (à ne pas confondre avec des éléments qui auraient explicitement la valeur [`undefined`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/undefined)).

```js
Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // un tableau avec 7 emplacements vides
Array(1, 2, 3);    // [1, 2, 3]
```

## Syntaxe

```js
Array.of(element0[, element1[, ...[, elementN]]])
```

### Paramètres

- _`element0`, `element1`, ..., `elementN`_
  - : Les éléments avec lesquels on souhaite construire le nouveau tableau.

### Valeur de retour

Une nouvelle instance de {{jsxref("Array")}}.

## Description

Cette fonction fait partie du standard ECMAScript 2015. Pour plus d'informations, voir les pages sur [la proposition pour `Array.of` et `Array.from`](https://gist.github.com/rwaldron/1074126) ainsi que la page sur le [fragment d'émulation pour `Array.of`](https://gist.github.com/rwaldron/3186576).

```js
Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]
```

## Exemples

```js
Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]
```

## Prothèse d'émulation (_polyfill_)

Exécuter ce code avant tout autre code permettra de créer la méthode **`Array.of()`** si elle n'est pas prise en charge nativement.

```js
if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments);
  };
}
```

## Spécifications

| Spécification                                                        | État                         | Commentaires         |
| -------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-array.of', 'Array.of')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-array.of', 'Array.of')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Array.of")}}

## Voir aussi

- {{jsxref("Array", "Array")}}
- {{jsxref("Array/from", "Array.from")}}
- {{jsxref("TypedArray.of()")}}
