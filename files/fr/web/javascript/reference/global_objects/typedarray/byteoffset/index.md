---
title: TypedArray.prototype.byteOffset
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset
tags:
  - JavaScript
  - Propriété
  - Prototype
  - Reference
  - TypedArray
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/byteOffset
---
{{JSRef}}

La propriété **`byteOffset`** est un accesseur qui représente le décalage, exprimé en octets, entre le début du tableau typé par rapport au début du {{jsxref("ArrayBuffer")}} correspondant.

## Syntaxe

    typedarray.byteOffset

## Description

La propriété `byteOffset` est un accesseur dont le mutateur correspondant vaut `undefined`, ce qui signifie qu'elle n'est accessible qu'en lecture seule. La valeur de cette propriété est déterminée lors de la construction du _TypedArray_ et ne peut pas être modifiée. _TypedArray_ est l'un des objets [TypedArray](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray).

## Exemples

```js
var tampon = new ArrayBuffer(8);

var uint8 = new Uint8Array(tampon);
uint8.byteOffset; // 0 (aucun décalage n'a été défini)

var uint8 = new Uint8Array(tampon, 3);
uint8.byteOffset; // 3 (correspond au décalage défini lors de la construction du Uint8Array)
```

## Spécifications

| Spécification                                                                                                                                | Statut                       | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-get-%typedarray%.prototype.byteoffset', 'TypedArray.prototype.byteOffset')}}         | {{Spec2('ES6')}}         | Définition initiale. |
| {{SpecName('ESDraft', '#sec-get-%typedarray%.prototype.byteoffset', 'TypedArray.prototype.byteOffset')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.TypedArray.byteOffset")}}

## Voir aussi

- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Tableaux_typés)
- {{jsxref("TypedArray")}}
