---
title: TypedArray.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/sort
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/sort
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/sort
---
{{JSRef}}

La méthode **`sort()`** permet de trier numériquement les éléments d'un tableau typé, à même ce tableau. Cette méthode utilise le même algorithme que {{jsxref("Array.prototype.sort()")}} en triant les valeurs par ordre numérique plutôt que par ordre lexicographique*.* Par la suite, _TypedArray_ désigne l'un des [types de tableau typé](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray) here.

{{EmbedInteractiveExample("pages/js/typedarray-sort.html")}}

## Syntaxe

    typedarray.sort([fonctionComparaison])

### Paramètres

- `fonctionComparaison` {{optional_inline}}
  - : Cette fonction définit l'ordre de tri à appliquer.

### Valeur de retour

Le tableau typé trié.

## Exemples

Pour plus d'exemples, voir la page sur la méthode {{jsxref("Array.prototype.sort()")}}.

```js
var nombres = new Uint8Array([40, 1, 5, 200]);
nombres.sort();
// Uint8Array [ 1, 5, 40, 200 ]
// Contrairement aux tableaux classiques (Array), une fonction
// de comparaison n'est pas nécessaire pour les nombres

var nombres2 = [40, 1, 5, 200];
nombres2.sort();
// Les éléments d'un tableau classique sont triés comme des chaînes
// [1, 200, 40, 5]

function comparaisonNombres(a, b) {
  return a - b;
}

nombres.sort(comparaisonNombres);
// [ 1, 5, 40, 200 ]
```

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-%typedarray%.prototype.sort', 'TypedArray.prototype.sort')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.sort', 'TypedArray.prototype.sort')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.TypedArray.sort")}}

## Voir aussi

- {{jsxref("Array.prototype.sort()")}}
