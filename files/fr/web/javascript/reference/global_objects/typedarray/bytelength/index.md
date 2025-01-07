---
title: TypedArray.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength
---

{{JSRef}}

La propriété **`byteLength`** est un accesseur qui représente la longueur, exprimée en octets, du tableau typé à partir du début de l'{{jsxref("ArrayBuffer")}} correspondant.

{{EmbedInteractiveExample("pages/js/typedarray-bytelength.html")}}

## Syntaxe

```js
typedarray.byteLength;
```

## Description

La propriété `byteLength` est un accesseur dont le mutateur correspondant vaut `undefined`, ce qui signifie qu'elle n'est accessible qu'en lecture. La valeur de la propriété est déterminée lors de la construction du _TypedArray_ et ne peut pas être modifiée. Si l'objet _TypedArray_ n'utilise pas de `byteOffset` ou une `length`, ce sera la propriété `length` de l'`ArrayBuffer` référencé par le tableau qui sera renvoyée. _TypedArray_ est l'un des objets [TypedArray](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#les_objets_typedarray).

## Exemples

```js
var tampon = new ArrayBuffer(8);

var uint8 = new Uint8Array(tampon);
uint8.byteLength; // 8 (correspond au byteLength du tampon correspondant)

var uint8 = new Uint8Array(tampon, 1, 5);
uint8.byteLength; // 5 (correspond à la longueur spécifiée dans le constructeur)

var uint8 = new Uint8Array(tampon, 2);
uint8.byteLength; // 6 (en raison du décalage utilisé pour la construction du Uint8Array)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
