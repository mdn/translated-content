---
title: TypedArray.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/lastIndexOf
---
{{JSRef}}

La méthode **`lastIndexOf()`** renvoie le dernier indice (le plus grand) pour lequel un élément donné est trouvé. Si l'élément cherché n'est pas trouvé, la valeur de retour sera -1. Le tableau typé est parcouru dans l'ordre des indices décroissants (de la fin vers le début) à partir de `indexDépart`. Cette méthode utilise le même algorithme que {{jsxref("Array.prototype.lastIndexOf()")}}. Dans le reste de l'article, *TypedArray* correspond à l'un des [types de tableaux typés](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray).

{{EmbedInteractiveExample("pages/js/typedarray-lastindexof.html")}}

## Syntaxe

```js
typedarray.lastIndexOf(élémentRecherché[, indiceDépart = typedarray.length])
```

### Paramètres

- `élémentRecherché`
  - : L'élément qu'on souhaite situer dans le tableau.
- `indiceDépart`
  - : Paramètre optionnel qui représente l'indice à partir duquel parcourir le tableau dans le sens inverse. La valeur par défaut correspond à la longueur du tableau (c'est-à-dire que tout le tableau sera parcouru). Si l'indice est supérieur ou égal à la longueur du tableau typé, tout le tableau typé sera parcouru. Si la valeur est négative, le parcours commencera à `length+indiceDépart` (le sens de parcours ne change pas). Si l'indice calculé est négatif, la valeur de retour sera -1 et le tableau ne sera pas parcouru.

### Valeur de retour

Le dernier indice du tableau typé pour lequel l'élément a été trouvé ou `-1` s'il n'a pas été trouvé.

## Description

`lastIndexOf` compare `élémentRecherché` avec les éléments du tableau typé en utilisant l'[égalité stricte](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#Using_the_Equality_Operators) (celle utilisée par l'opérateur ===).

## Exemples

```js
var uint8 = new Uint8Array([2, 5, 9, 2]);
uint8.lastIndexOf(2);     // 3
uint8.lastIndexOf(7);     // -1
uint8.lastIndexOf(2, 3);  // 3
uint8.lastIndexOf(2, 2);  // 0
uint8.lastIndexOf(2, -2); // 0
uint8.lastIndexOf(2, -1); // 3
```

## Spécifications

| Spécification                                                                                                                            | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-%typedarray%.prototype.lastindexof', 'TypedArray.prototype.lastIndexOf')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.lastindexof', 'TypedArray.prototype.lastIndexOf')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.TypedArray.lastIndexOf")}}

## Voir aussi

- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
