---
title: TypedArray.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/slice
l10n:
  sourceCommit: b2a5f62d66b4e3d71704017d0fab7ad710e68057
---

{{JSRef}}

La méthode **`slice()`** des instances de [`TypedArray`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) renvoie une copie d'un fragment du tableau typé courant dans un nouveau tableau typé. La portion est prise entre les paramètres `début` (inclus) et `fin` (non-inclus) qui correspondent aux indices des éléments du tableau typé courant. Le tableau typé original ne sera pas modifié. Cette méthode utilise le même algorithme que [`Array.prototype.slice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

{{InteractiveExample("JavaScript Demo: TypedArray.slice()", "shorter")}}

```js interactive-example
const uint8 = new Uint8Array([10, 20, 30, 40, 50]);
const array1 = uint8.slice(1, 3);

console.log(array1);
// Expected output: Uint8Array [20, 30]
```

## Syntaxe

```js-nolint
slice()
slice(début)
slice(début, fin)
```

## Paramètres

- `début` {{optional_inline}}
  - : L'indice (compté à partir de zéro), [converti en entier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_entière), à partir duquel commencer le fragment.
- `fin` {{optional_inline}}
  - : L'indice (compté à partir de zéro), [converti en entier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_entière), jusqu'auquel extraire le fragment. Le fragment obtenu n'inclura pas l'élément situé à l'indice `fin`.

### Valeur de retour

Un nouveau tableau typé qui contient les éléments extraits.

## Description

Voir [`Array.prototype.slice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) pour plus détails. Cette méthode n'est pas générique et peut uniquement être appelée sur les instances de tableaux typés.

## Exemples

### Renvoyer un fragment d'un tableau typé existant

```js
const uint8 = new Uint8Array([1, 2, 3]);
uint8.slice(1); // Uint8Array [ 2, 3 ]
uint8.slice(2); // Uint8Array [ 3 ]
uint8.slice(-2); // Uint8Array [ 2, 3 ]
uint8.slice(0, 1); // Uint8Array [ 1 ]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Une prothèse d'émulation (<i lang="en">polyfill</i>) pour `TypedArray.prototype.slice()` dans la bibliothèque `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [Le guide sur les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Guide/Typed_arrays)
- [`TypedArray`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
- [`Array.prototype.slice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [`String.prototype.slice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
