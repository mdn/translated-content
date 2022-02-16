---
title: TypedArray.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/toLocaleString
---
{{JSRef}}

La méthode **`toLocaleString()`** renvoie une chaîne de caractères uqi représente les éléments du tableau typé. Les éléments sont convertis en chaînes de caractères et séparés par une chaîne de caractères qui est fonction de la locale (la virgule « , » par exemple). Cette méthode utilise le même algorithme que {{jsxref("Array.prototype.toLocaleString()")}} et vu que les éléments d'un tableau typé sont des nombres, elle utilise le même algorithme que {{jsxref("Number.prototype.toLocaleString()")}} pour chaque élément. Dans la suite de cet article, _TypedArray_ fait référence à [l'un des types de tableau typé listés ici](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray).

## Syntaxe

    typedarray.toLocaleString([locales [, options]]);

### Paramètres

{{page('/fr/docs/Web/JavaScript/Référence/Objets_globaux/NumberFormat', 'Paramètres')}}

### Valeur de retour

Une chaîne de caractères qui représente les éléments du tableau typé.

## Exemples

```js
var uint = new Uint32Array([2000, 500, 8123, 12, 4212]);

uint.toLocaleString();
// Si on utilise la locale de-DE
// "2.000,500,8.123,12,4.212"

uint.toLocaleString("en-US");
// "2,000,500,8,123,12,4,212"

uint.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });
// "￥2,000,￥500,￥8,123,￥12,￥4,212"
```

## Spécifications

| Spécification                                                                                                                                    | État                         | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-%typedarray%.prototype.tolocalestring', 'TypedArray.prototype.toLocaleString')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.tolocalestring', 'TypedArray.prototype.toLocaleString')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.TypedArray.toLocaleString")}}

## Voir aussi

- {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
