---
title: TypedArray.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/fill
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArrays
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/fill
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/fill
---
{{JSRef}}

La méthode **`fill()`** remplit les éléments d'un tableau typé contenu entre un indice de début et un indice de fin avec une valeur statique. Cette méthode utilise le même algorithme que {{jsxref("Array.prototype.fill()")}}. Dans le reste de cet article, _TypedArray_ correspond à l'un des [types de tableaux typés](/fr/docs/Web/JavaScript/Tableaux_typés#Les_objets_TypedArray).

{{EmbedInteractiveExample("pages/js/typedarray-fill.html")}}

## Syntaxe

```js
typedarray.fill(valeur[, début = 0[, fin = this.length]])
```

### Paramètres

- `valeur`
  - : La valeur avec laquelle on souhaite remplir le tableau.
- `début`
  - : Paramètre optionnel qui représente l'indice à partir duquel remplir le tableau. La valeur par défaut est 0.
- `fin`
  - : Paramètre optionnel qui représente l'indice jusqu'auquel remplir le tableau. La valeur par défaut est la longueur du tableau (`this.length`).

### Valeur de retour

Le tableau typé, modifié par la fonction.

## Description

L'intervalle d'éléments à modifier est \[`début`, `fin`).

La méthode **`fill`** utilise jusqu'à trois arguments : `valeur`, `début` et `fin`. `début` et `fin` sont optionnels, leurs valeurs par défaut respectives sont `0` et la valeur de la propriété `length` de l'objet `this`.

Si `début` est négatif, on le traite comme `length+début` où `length` représente la longueur du tableau. Si `fin` est négative, on le traite comme `length+fin`.

## Exemples

```js
new Uint8Array([1, 2, 3]).fill(4);         // Uint8Array [4, 4, 4]
new Uint8Array([1, 2, 3]).fill(4, 1);      // Uint8Array [1, 4, 4]
new Uint8Array([1, 2, 3]).fill(4, 1, 2);   // Uint8Array [1, 4, 3]
new Uint8Array([1, 2, 3]).fill(4, 1, 1);   // Uint8Array [1, 2, 3]
new Uint8Array([1, 2, 3]).fill(4, -3, -2); // Uint8Array [4, 2, 3]
```

## Prothèse d'émulation (_polyfill_)

Il n'existe pas d'objet global avec le nom _TypedArray_, la prothèse doit donc être appliquée uniquement si nécessaire, aussi {{jsxref("Array.prototype.fill()")}} pourra éventuellement être utilisé (voire la prothèse de cette dernière).

```js
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.fill
if (!Uint8Array.prototype.fill) {
  Uint8Array.prototype.fill = Array.prototype.fill;
}
```

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-%typedarray%.prototype.fill', 'TypedArray.prototype.fill')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.fill', 'TypedArray.prototype.fill')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.TypedArray.fill")}}

## Voir aussi

- {{jsxref("Array.prototype.fill()")}}
