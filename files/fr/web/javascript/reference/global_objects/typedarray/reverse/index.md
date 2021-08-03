---
title: TypedArray.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reverse
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/reverse
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/reverse
---
{{JSRef}}

La méthode **`reverse()`** inverse les éléments d'un tableau. Le premier élément du tableau typé devient le dernier, le dernier élément devient le premier et ainsi de suite. Cette méthode utilise le même algorithme que {{jsxref("Array.prototype.reverse()")}}_._ Dans le reste de cet article _TypedArray_ correspond à un des [types de tableaux typés](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray).

{{EmbedInteractiveExample("pages/js/typedarray-reverse.html")}}

## Syntaxe

    typedarray.reverse();

### Valeur de retour

Le tableau typé dont les éléments ont été inversés.

## Exemples

```js
var uint8 = new Uint8Array([1, 2, 3]);
uint8.reverse();

console.log(uint8); // Uint8Array [3, 2, 1]
```

## Spécifications

| Spécification                                                                                                                | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-%typedarray%.prototype.reverse', 'TypedArray.prototype.reverse')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.reverse', 'TypedArray.prototype.reverse')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.TypedArray.reverse")}}

## Voir aussi

- {{jsxref("Array.prototype.reverse()")}}
