---
title: TypedArray.of()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/of
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Reference
  - TypedArray
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/of
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/of
---
{{JSRef}}

La méthode **`TypedArray.of()`** crée un nouvel objet {{jsxref("TypedArray", "TypedArray", "#Les_objets_TypedArray")}} à partir d'un nombre variable d'arguments. Cette méthode est similaire à {{jsxref("Array.of()")}}.

## Syntaxe

    TypedArray.of(élément0[, élément1[, ...[, élémentN]]])

    où TypedArray est l'un de :

    Int8Array
    Uint8Array
    Uint8ClampedArray
    Int16Array
    Uint16Array
    Int32Array
    Uint32Array
    Float32Array
    Float64Array
    BigInt64Array
    BigUint64Array

### Paramètres

- `élémentN`
  - : Les éléments avec lesquels on souhaite construire le nouveau tableau typé.

### Valeur de retour

Une nouvelle instance de {{jsxref("TypedArray")}}.

## Description

Il existe de légères différences entre {{jsxref("Array.of()")}} et `TypedArray.of()` :

- Si la valeur de `this` passée à `TypedArray.of` n'est pas un constructeur, `TypedArray.of` lèvera une exception {{jsxref("TypeError")}}, tandis que `Array.of` créera un nouvel objet {{jsxref("Array")}}.
- `TypedArray.of` utilise `[[Put]]` tandis que `Array.of` utilise `[[DefineProperty]]`. Ainsi lorsque les arguments sont des objets {{jsxref("Proxy")}} la première méthode appellera {{jsxref("Objets_globaux/Proxy/handler/set", "handler.set")}} pour créer les nouveaux éléments et la seconde appellera {{jsxref("Objets_globaux/Proxy/handler/defineProperty", "handler.defineProperty")}}.

## Exemples

```js
Uint8Array.of(1);            // Uint8Array [ 1 ]
Int8Array.of("1", "2", "3"); // Int8Array [ 1, 2, 3 ]
Float32Array.of(1, 2, 3);    // Float32Array [ 1, 2, 3 ]
Int16Array.of(undefined);    // Int16Array [ 0 ]
```

## Spécifications

| Spécification                                                                            | État                         | Commentaires                                    |
| ---------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------- |
| {{SpecName('ES2015', '#sec-%typedarray%.of', '%TypedArray%.of')}} | {{Spec2('ES2015')}}     | Définition initiale au sein d'un standard ECMA. |
| {{SpecName('ESDraft', '#sec-%typedarray%.of', '%TypedArray%.of')}} | {{Spec2('ESDraft')}} |                                                 |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.TypedArray.of")}}

## Voir aussi

- {{jsxref("TypedArray.from()")}}
- {{jsxref("Array.of()")}}
