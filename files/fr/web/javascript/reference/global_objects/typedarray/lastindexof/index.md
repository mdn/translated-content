---
title: TypedArray.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf
---

{{JSRef}}

La méthode **`lastIndexOf()`** renvoie le dernier indice (le plus grand) pour lequel un élément donné est trouvé. Si l'élément cherché n'est pas trouvé, la valeur de retour sera -1. Le tableau typé est parcouru dans l'ordre des indices décroissants (de la fin vers le début) à partir de `indexDépart`. Cette méthode utilise le même algorithme que {{jsxref("Array.prototype.lastIndexOf()")}}. Dans le reste de l'article, _TypedArray_ correspond à l'un des [types de tableaux typés](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#les_objets_typedarray).

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

`lastIndexOf` compare `élémentRecherché` avec les éléments du tableau typé en utilisant l'[égalité stricte](/fr/docs/Web/JavaScript/Reference/Operators#using_the_equality_operators) (celle utilisée par l'opérateur ===).

## Exemples

```js
var uint8 = new Uint8Array([2, 5, 9, 2]);
uint8.lastIndexOf(2); // 3
uint8.lastIndexOf(7); // -1
uint8.lastIndexOf(2, 3); // 3
uint8.lastIndexOf(2, 2); // 0
uint8.lastIndexOf(2, -2); // 0
uint8.lastIndexOf(2, -1); // 3
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
