---
title: TypedArray.prototype.buffer
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/buffer
---

{{JSRef}}

La propriété **`buffer`** est un accesseur représentant l'{{jsxref("ArrayBuffer")}} représenté par le _TypedArray_ lors de la construction de l'objet.

{{EmbedInteractiveExample("pages/js/typedarray-buffer.html")}}

## Syntaxe

```js
typedArray.buffer;
```

## Description

La propriété `buffer` est un accesseur dont le mutateur correspondant vaut `undefined`. Cela signifie que cette propriété n'est accessible qu'en lecture seule. La valeur de la propriété est déterminée lors de la construction du _TypedArray_ et ne peut pas être modifiée. _TypedArray_ est un des objets [TypedArray](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray).

## Exemples

```js
var buffer = new ArrayBuffer(8);
var uint16 = new Uint16Array(buffer);
uint16.buffer; // ArrayBuffer { byteLength: 8 }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Tableaux_typés)
- {{jsxref("TypedArray")}}
