---
title: TypedArray.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/includes
tags:
  - ECMAScript 2016
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/includes
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/includes
---
{{JSRef}}

La méthode **`includes()`** détermine si un tableau typé possède un certain élément et renvoie `true` ou `false` selon le cas de figure. Cette méthode utilise le même algorithme que la méthode {{jsxref("Array.prototype.includes()")}}. Dans le reste de l'article _TypedArray_ fait référence à un des [types de tableau typé](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray).

{{EmbedInteractiveExample("pages/js/typedarray-includes.html")}}

## Syntaxe

```js
typedarray.includes(élémentRecherché[, indiceDébut]);
```

### Paramètres

- `élémentRecherché`
  - : L'élément qu'on cherche au sein du tableau typé.
- `indiceDébut`
  - : Paramètre optionnel qui correspond à la position du tableau à partir de laquelle effectuer la recherche. La valeur par défaut est 0.

### Valeur de retour

Un booléen indiquant la présence de l'élément (`true` s'il y est, `false` sinon).

## Exemples

```js
var uint8 = new Uint8Array([1,2,3]);
uint8.includes(2);     // true
uint8.includes(4);     // false
uint8.includes(3, 3);  // false

// Gestion de NaN (vrai uniquement pour Float32 et Float64)
new Uint8Array([NaN]).includes(NaN); // false car NaN est converti en 0 par le constructeur
new Float32Array([NaN]).includes(NaN); // true;
new Float64Array([NaN]).includes(NaN); // true;
```

## Spécifications

| Spécification                                                                                                                    | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES7', '#sec-%typedarray%.prototype.includes', 'TypedArray.prototype.includes')}}     | {{Spec2('ES7')}}         | Définition initiale. |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.includes', 'TypedArray.prototype.includes')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.TypedArray.includes")}}

## Voir aussi

- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
