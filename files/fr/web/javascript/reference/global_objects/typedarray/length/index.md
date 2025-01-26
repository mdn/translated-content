---
title: TypedArray.prototype.length
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/length
---

{{JSRef}}

La propriété **`length`** est un accesseur qui permet de représenter la longueur, en nombre d'éléments, d'un tableau typé.

{{EmbedInteractiveExample("pages/js/typedarray-length.html")}}

## Syntaxe

```js
typedarray.length;
```

## Description

La propriété `length` est un accesseur dont le mutateur correspondant vaut `undefined`, ce qui signifie qu'elle n'est accessible qu'en lecture. La valeur de la propriété est déterminée lors de la construction du _TypedArray_ et ne peut pas être modifiée. Si le _TypedArray_ n'utilise pas de `byteOffset` ou de `length`, le résultat correspondra à la longueur du {{jsxref("ArrayBuffer")}} correspondant. _TypedArray_ est l'un des objets [TypedArray](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#les_objets_typedarray).

## Exemples

```js
var tampon = new ArrayBuffer(8);

var uint8 = new Uint8Array(tampon);
uint8.length; // 8 (correspond à la longueur du tampon/buffer)

var uint8 = new Uint8Array(tampon, 1, 5);
uint8.length; // 5 (correspond à la longueur définie lors de la construction)

var uint8 = new Uint8Array(tampon, 2);
uint8.length; // 6 (correspond à la longueur en prenant en compte le décalage utilisé)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
