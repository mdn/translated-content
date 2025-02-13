---
title: TypedArray.BYTES_PER_ELEMENT
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT
---

{{JSRef}}

La propriété **`TypedArray.BYTES_PER_ELEMENT`** représente la taille, exprimée en octets, de chaque élément du tableau typé.

{{InteractiveExample("JavaScript Demo: TypedArray.BYTES_PER_ELEMENT")}}

```js interactive-example
console.log(Float64Array.BYTES_PER_ELEMENT);
// Expected output: 8

console.log(Int8Array.BYTES_PER_ELEMENT);
// Expected output: 1
```

{{js_property_attributes(0,0,0)}}

## Syntaxe

```js
TypedArray.BYTES_PER_ELEMENT;
```

## Description

La taille des éléments d'un tableau typé varie en fonction du type de `TypedArray` utilisé. Le nombre d'octets utilisé pour un élément sera différent en fonction du type de tableau. La propriété `BYTES_PER_ELEMENT` permet de savoir le nombre d'octets contenus dans chaque élément du tableau typé courant.

## Exemples

```js
Int8Array.BYTES_PER_ELEMENT; // 1
Uint8Array.BYTES_PER_ELEMENT; // 1
Uint8ClampedArray.BYTES_PER_ELEMENT; // 1
Int16Array.BYTES_PER_ELEMENT; // 2
Uint16Array.BYTES_PER_ELEMENT; // 2
Int32Array.BYTES_PER_ELEMENT; // 4
Uint32Array.BYTES_PER_ELEMENT; // 4
Float32Array.BYTES_PER_ELEMENT; // 4
Float64Array.BYTES_PER_ELEMENT; // 8
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
