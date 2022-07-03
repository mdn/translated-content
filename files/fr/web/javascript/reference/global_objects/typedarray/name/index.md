---
title: TypedArray.name
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/name
tags:
  - JavaScript
  - Propriété
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/name
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/name
---
{{JSRef}}

La propriété **`TypedArray.name`** est une chaîne de caractères représentant le nom du constructeur du tableau typé.

{{EmbedInteractiveExample("pages/js/typedarray-name.html")}}{{js_property_attributes(0,0,0)}}

## Syntaxe

```js
TypedArray.name;
```

## Description

Les objets `TypedArray` varient en fonction du nombre d'octets correspondant pour chaque élément du tableau et de la façon dont les octets sont interprétés. La propriété `name` permet de décrire le type de données du tableau. La première partie du nom peut être `Int` pour les tableaux d'entiers (**Int**eger) ou `Uint` pour les tableaux d'entiers non signés (**U**nsigned **Int**eger) ou `Float` pour les nombres décimaux (**float**ing). La deuxième partie correspond au nombre de bits de chaque élément. Enfin, la troisième composante du nom est `Array`, `ClampedArray` étant un cas spécifique. Voir la page {{jsxref("Uint8ClampedArray")}} pour plus d'informations sur ce tableau typé.

## Exemples

```js
Int8Array.name;         // "Int8Array"
Uint8Array.name;        // "Uint8Array"
Uint8ClampedArray.name; // "Uint8ClampedArray"
Int16Array.name;        // "Int16Array"
Uint16Array.name;       // "Uint16Array"
Int32Array.name;        // "Int32Array"
Uint32Array.name;       // "Uint32Array"
Float32Array.name;      // "Float32Array"
Float64Array.name;      // "Float64Array"
```

## Spécifications

| Spécification                                                                                                                | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-properties-of-the-typedarray-constructors', 'TypedArray.name')}}         | {{Spec2('ES6')}}         | Définition initiale. |
| {{SpecName('ESDraft', '#sec-properties-of-the-typedarray-constructors', 'TypedArray.name')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.TypedArray.name")}}

## Voir aussi

- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Tableaux_typés)
- {{jsxref("TypedArray")}}
