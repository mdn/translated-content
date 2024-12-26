---
title: TypedArray.prototype.byteOffset
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset
---

{{JSRef}}

La propriété **`byteOffset`** est un accesseur qui représente le décalage, exprimé en octets, entre le début du tableau typé par rapport au début du {{jsxref("ArrayBuffer")}} correspondant.

## Syntaxe

```js
typedarray.byteOffset;
```

## Description

La propriété `byteOffset` est un accesseur dont le mutateur correspondant vaut `undefined`, ce qui signifie qu'elle n'est accessible qu'en lecture seule. La valeur de cette propriété est déterminée lors de la construction du _TypedArray_ et ne peut pas être modifiée. _TypedArray_ est l'un des objets [TypedArray](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#les_objets_typedarray).

## Exemples

```js
var tampon = new ArrayBuffer(8);

var uint8 = new Uint8Array(tampon);
uint8.byteOffset; // 0 (aucun décalage n'a été défini)

var uint8 = new Uint8Array(tampon, 3);
uint8.byteOffset; // 3 (correspond au décalage défini lors de la construction du Uint8Array)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
