---
title: TypedArray.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/indexOf
---
{{JSRef}}

La méthode **`indexOf()`** renvoie le premier indice (le plus petit) auquel on peut trouver un élément donné dans le tableau typé. Si l'élément n'est pas trouvé, la valeur de retour sera -1. L'algorithme utilisé pour cette méthode est le même que celui pour {{jsxref("Array.prototype.indexOf()")}}. Pour le reste de l'article _TypedArray_ correspond à l'un des [types de tableau typé](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray).

{{EmbedInteractiveExample("pages/js/typedarray-indexof.html")}}

## Syntaxe

```js
typedarray.indexOf(élémentRecherché[, indiceDébut = 0])
```

### Paramètres

- `élémentRecherché`
  - : L'élément qu'on souhaite situer dans le tableau typé.
- `indiceDébut`
  - : Paramètre optionnel représentant l'indice à partir duquel commencer la recherche de l'élément. Si l'indice est supérieur ou égal à la longueur du tableau, la méthode renverra -1 et le tableau typé ne sera pas parcouru. Si la valeur fournie est négative, la recherche commencera à partir de l'élément situé à l'indice `length-indiceDébut`. Note : même si la valeur fournie est négative, le parcours du tableau typé s'effectuera toujours du plus petit index vers le plus grand. Si la valeur calculée pour l'indice de début est inférieure à 0, l'ensemble du tableau typé sera parcouru. La valeur par défaut de ce paramètre est 0 (tout le tableau est parcouru).

### Valeur de retour

Le premier indice du tableau pour lequel l'élément a été trouvé, `-1` s'il n'a pas été trouvé.

## Description

`indexOf` compare `élémentRecherché` aux éléments du tableau typé en utilisant l'[égalité stricte](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#Using_the_Equality_Operators) (celle utilisée par l'opérateur ===).

## Exemples

```js
var uint8 = new Uint8Array([2, 5, 9]);
uint8.indexOf(2);     // 0
uint8.indexOf(7);     // -1
uint8.indexOf(9, 2);  // 2
uint8.indexOf(2, -1); // -1
uint8.indexOf(2, -3); // 0
```

## Spécifications

| Spécification                                                                                                                | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-%typedarray%.prototype.indexof', 'TypedArray.prototype.indexOf')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.indexof', 'TypedArray.prototype.indexOf')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.TypedArray.indexOf")}}

## Notes de compatibilité

- À partir de Firefox 47 ({{geckoRelease(47)}}), cette méthode ne renverra plus `-0`. Ainsi, `new Uint8Array([0]).indexOf(0, -0)` renverra toujours `+0` (cf. {{bug(1242043)}}).

## Voir aussi

- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.indexOf()")}}
