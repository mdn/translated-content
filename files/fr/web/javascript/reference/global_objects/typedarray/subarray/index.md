---
title: TypedArray.prototype.subarray()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/subarray
tags:
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArray
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/subarray
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/subarray
---
{{JSRef}}

La méthode `subarray()` permet de renvoyer un nouvel objet _TypedArray_ basé sur le même {{jsxref("ArrayBuffer")}} et dont les éléments sont du même type que l'objet _TypedArray_ courant. Le paramètre `début` est à considérer au sens large et le paramètre `end` est à considérer au sens strict. _TypedArray_ est l'un des types de [tableaux typés](/fr/docs/Web/JavaScript/Tableaux_typés#Les_objets_TypedArray).

{{EmbedInteractiveExample("pages/js/typedarray-subarray.html")}}

## Syntaxe

    typedarray.subarray([début[,fin]])

### Paramètres

- `début`{{optional_inline}}
  - : L'élément à partir duquel commencer le nouveau tableau typé. Cet élément initial sera inclus dans le nouveau tableau (sens large). Si la valeur n'est pas définie, tout le tableau sera inclus dans la nouvelle vue.
- `fin`{{optional_inline}}
  - : L'élément auquel finir le nouveau tableau typé. Cet élément ne fera pas partie du nouveau tableau (sens strict). Si ce paramètre n'est pas utilisé, tous les éléments contenus à partir de `début` jusqu'à la fin du tableau courant seront inclus dans la nouvelle vue.

### Valeur de retour

Un nouvel objet {{jsxref("TypedArray")}}.

## Description

L'intervalle défini par `début` et `fin` est redimensionné si besoin pour être un intervalle valide en regard du tableau courant. Si la longueur du nouveau tableau est négative, elle est ramenée à zéro. Si `début` ou `fin` a une valeur négative, on prendra en compte la position à partir de la fin du tableau et non à partir du début de celui-ci.

On notera que cette méthode permet de créer un nouvelle vue sur le tampon (_buffer_) existant, tous les changements apportés via le nouvel objet impacteront le tableau typé initial et vice versa.

## Exemples

```js
var buffer = new ArrayBuffer(8);
var uint8 = new Uint8Array(buffer);
uint8.set([1,2,3]);

console.log(uint8); // Uint8Array [ 1, 2, 3, 0, 0, 0, 0, 0 ]

var sub = uint8.subarray(0,4);

console.log(sub);   // Uint8Array [ 1, 2, 3, 0 ]
```

## Spécifications

| Spécification                                                                                                                    | État                             | Commentaires                                    |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------- |
| {{SpecName('Typed Array')}}                                                                                             | {{Spec2('Typed Array')}} | Remplacée par ECMAScript 6.                     |
| {{SpecName('ES6', '#sec-%typedarray%.prototype.subarray', 'TypedArray.prototype.subarray')}}     | {{Spec2('ES6')}}             | Définition initiale au sein d'un standard ECMA. |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.subarray', 'TypedArray.prototype.subarray')}} | {{Spec2('ESDraft')}}     |                                                 |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.TypedArray.subarray")}}

## Voir aussi

- [Les tableaux typés JavaScript](/fr/docs/Web/JavaScript/Tableaux_typés)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
