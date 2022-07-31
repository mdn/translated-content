---
title: TypedArray.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/join
tags:
  - ECMAScript6
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/join
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/join
---
{{JSRef}}

La méthode **`join()`** fusionne l'ensemble des éléments d'un tableau en une chaîne de caractères. Cette méthode utilise le même algorithme que {{jsxref("Array.prototype.join()")}}. Dans le reste de cet article _TypedArray_ fait référence à l'un des [types de tableaux typés](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray).

{{EmbedInteractiveExample("pages/js/typedarray-join.html")}}

## Syntaxe

```js
typedarray.join([séparateur = ',']);
```

### Paramètres

- `séparateur`
  - : Paramètre optionnel qui définit la chaîne de caractères à utiliser pour séparer chaque élément. Si nécessaire, le séparateur sera converti en une chaîne de caractère. La valeur par défaut du paramètre est une virgule (",").

### Valeur de retour

Une chaîne de caractères formée par la concaténation des différents éléments du tableau typé.

## Exemples

```js
var uint8 = new Uint8Array([1,2,3]);
uint8.join();      // '1,2,3'
uint8.join(' / '); // '1 / 2 / 3'
uint8.join('');    // '123'
```

## Prothèse d'émulation (_polyfill_)

Il n'existe pas d'objet global _TypedArray_, il faut donc ajouter une prothèse correspondant à chaque type de tableau typé.

```js
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.join
if (!Uint8Array.prototype.join) {
  Object.defineProperty(Uint8Array.prototype, 'join', {
    value: Array.prototype.join
  });
}
```

Mieux vaut ne pas ajouter de prothèses pour `TypedArray.prototype` si le moteur JavaScript ne prend pas en charge {{jsxref("Object.defineProperty()")}} car on ne peut pas les rendre non-énumérables.

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-%typedarray%.prototype.join', 'TypedArray.prototype.join')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.join', 'TypedArray.prototype.join')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.TypedArray.join")}}

## Voir aussi

- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.join()")}}
