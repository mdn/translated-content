---
title: TypedArray.BYTES_PER_ELEMENT
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT
tags:
  - JavaScript
  - Propriété
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/BYTES_PER_ELEMENT
---
{{JSRef}}

La propriété **`TypedArray.BYTES_PER_ELEMENT`** représente la taille, exprimée en octets, de chaque élément du tableau typé.

{{EmbedInteractiveExample("pages/js/typedarray-bytes-per-element.html")}}{{js_property_attributes(0,0,0)}}

## Syntaxe

    TypedArray.BYTES_PER_ELEMENT;

## Description

La taille des éléments d'un tableau typé varie en fonction du type de `TypedArray` utilisé. Le nombre d'octets utilisé pour un élément sera différent en fonction du type de tableau. La propriété `BYTES_PER_ELEMENT` permet de savoir le nombre d'octets contenus dans chaque élément du tableau typé courant.

## Exemples

```js
Int8Array.BYTES_PER_ELEMENT;         // 1
Uint8Array.BYTES_PER_ELEMENT;        // 1
Uint8ClampedArray.BYTES_PER_ELEMENT; // 1
Int16Array.BYTES_PER_ELEMENT;        // 2
Uint16Array.BYTES_PER_ELEMENT;       // 2
Int32Array.BYTES_PER_ELEMENT;        // 4
Uint32Array.BYTES_PER_ELEMENT;       // 4
Float32Array.BYTES_PER_ELEMENT;      // 4
Float64Array.BYTES_PER_ELEMENT;      // 8
```

## Spécifications

| Spécification                                                                                                                | Statut                           | Commentaires                                    |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------- |
| {{SpecName('Typed Array')}}                                                                                         | {{Spec2('Typed Array')}} | Spécification englobée par ECMAScript 6.        |
| {{SpecName('ES6', '#sec-typedarray.bytes_per_element', 'TypedArray.BYTES_PER_ELEMENT')}}         | {{Spec2('ES6')}}             | Définition initiale au sein d'un standard ECMA. |
| {{SpecName('ESDraft', '#sec-typedarray.bytes_per_element', 'TypedArray.BYTES_PER_ELEMENT')}} | {{Spec2('ESDraft')}}     |                                                 |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.TypedArray.BYTES_PER_ELEMENT")}}

## Voir aussi

- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Tableaux_typés)
- {{jsxref("TypedArray")}}
