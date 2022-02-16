---
title: TypedArray.prototype.buffer
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/buffer
tags:
  - JavaScript
  - Propriété
  - Prototype
  - Reference
  - TypedArray
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/buffer
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/buffer
---
{{JSRef}}

La propriété **`buffer`** est un accesseur représentant l'{{jsxref("ArrayBuffer")}} représenté par le _TypedArray_ lors de la construction de l'objet.

{{EmbedInteractiveExample("pages/js/typedarray-buffer.html")}}

## Syntaxe

    typedArray.buffer

## Description

La propriété `buffer` est un accesseur dont le mutateur correspondant vaut `undefined`. Cela signifie que cette propriété n'est accessible qu'en lecture seule. La valeur de la propriété est déterminée lors de la construction du _TypedArray_ et ne peut pas être modifiée. _TypedArray_ est un des objets [TypedArray](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray).

## Exemples

```js
var buffer = new ArrayBuffer(8);
var uint16 = new Uint16Array(buffer);
uint16.buffer; // ArrayBuffer { byteLength: 8 }
```

## Spécifications

| Spécification                                                                                                                    | Statut                       | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-get-%typedarray%.prototype.buffer', 'TypedArray.prototype.buffer')}}     | {{Spec2('ES6')}}         | Définition initiale. |
| {{SpecName('ESDraft', '#sec-get-%typedarray%.prototype.buffer', 'TypedArray.prototype.buffer')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.TypedArray.buffer")}}

## Voir aussi

- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Tableaux_typés)
- {{jsxref("TypedArray")}}
