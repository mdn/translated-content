---
title: TypedArray.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/slice
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/slice
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/slice
---
{{JSRef}}

La méthode **`slice()`** renvoie une copie superficielle (shallow copy) d'un fragment du tableau typé courant dans un nouveau tableau typé. Cette méthode utilise le même algorithme que {{jsxref("Array.prototype.slice()")}}_._ _TypedArray_ est utilisé par la suite de façon générique pour réprésenter l'un des [types de tableaux typés](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray).

{{EmbedInteractiveExample("pages/js/typedarray-slice.html")}}

## Syntaxe

    typedarray.slice([début[, fin]])

## Paramètres

- `début` {{optional_inline}}
  - : L'indice (compté à partir de zéro) à partir duquel commencer le fragment. Si l'indice fourni est négatif, `début` indiquera le décalage par rapport à la fin de la séquence. Par exemple, `slice(-2)` extrait les deux derniers éléments de la séquence. Par défaut, si `début` n'est pas utilisé, `slice()` commencera à partir de l'indice `0`.
- `fin` {{optional_inline}}
  - : L'indice (compté à partir de zéro) jusqu'auquel extraire le fragment. Le fragment obtenu n'incluera pas l'élément situé à l'indice `fin`. `slice(1,4)` extrait par exemple à partir du deuxième élément et jusqu'au quatrième (c'est-à-dire les éléments dont les indices respectifs sont 1, 2, et 3). Si l'indice utilisé est négatif, `fin` indiquera le décalage par rapport à la fin de la séquence. Ainsi, `slice(2,-1)` extraira à partir du troisième élément et jusqu'à l'avant dernier élément (compris). Par défaut, si `fin` n'est pas utilisé, `slice()` extraira les éléments jusqu'à la fin de la séquence (`arr.length`).

### Valeur de retour

Un nouveau tableau typé qui contient les éléments extraits.

## Description

La méthode `slice()` ne modifie pas le tableau typé courant, elle renvoie une copie superficielle (_shallow copy_) du tableau typé original.

Si un nouvel élément est ajouté à l'un des deux tableaux typés, l'autre ne sera pas impacté.

## Exemples

```js
var uint8 = new Uint8Array([1,2,3]);
uint8.slice(1);   // Uint8Array [ 2, 3 ]
uint8.slice(2);   // Uint8Array [ 3 ]
uint8.slice(-2);  // Uint8Array [ 2, 3 ]
uint8.slice(0,1); // Uint8Array [ 1 ]
```

## Prothèse d'émulation (_polyfill_)

Il n'existe pas d'objet global intitulé _TypedArray_, la prothèse doit donc uniquement être employée si nécessaire :

```js
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.slice
if (!Uint8Array.prototype.slice) {
  Object.defineProperty(Uint8Array.prototype, 'slice', {
    value: function (begin, end){
      return new Uint8Array(Array.prototype.slice.call(this, begin, end));
    }
  });
}
```

De plus cette prothèse n'est pas parfaite car elle renvoie une instance d'`Array` et pas de `Uint8Array`. Elle manque donc des propriétés normalement associées aux objets `TypedArray`.

S'il faut également prendre en charge les moteurs JavaScript qui ne prennent pas en charge la méthode {{jsxref("Object.defineProperty")}}, mieux vaut ne pas ajouter de prothèse du tout pour `TypedArray.prototype` car on ne peut pas les rendre non-énumérables.

## Spécifications

| Spécification                                                                                                                | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-%typedarray%.prototype.slice', '%TypedArray%.prototype.slice')}}     | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.slice', '%TypedArray%.prototype.slice')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.TypedArray.slice")}}

## Voir aussi

- {{jsxref("Array.prototype.slice()")}}
