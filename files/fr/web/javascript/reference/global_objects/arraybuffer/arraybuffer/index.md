---
title: Constructeur ArrayBuffer()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer
translation_of: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer
browser-compat: javascript.builtins.ArrayBuffer.ArrayBuffer
---
{{JSRef}}

Le **constructeur `ArrayBuffer()`** permet de créer des objets [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

{{EmbedInteractiveExample("pages/js/arraybuffer-constructor.html","shorter")}}

## Syntaxe

```js
new ArrayBuffer(longueur)
```

### Paramètres

- `longueur`
  - : La longueur, exprimée en octets, du tableau de mémoire tampon à créer.

### Valeur de retour

Un nouvel objet `ArrayBuffer` de la taille indiquée et dont le contenu des éléments est fixé à 0.

### Exceptions

Une exception [`RangeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RangeError) est levée si `longueur` est supérieure ou égale à [`Number.MAX_SAFE_INTEGER`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) (>= 2 \*\* 53) ou si elle est négative.

## Exemples

### Créer un objet `ArrayBuffer`

Dans cet exemple, on crée un tampon de 8 octets avec une vue [`Int32Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Int32Array) qui y fait référence&nbsp;:

```js
const buffer = new ArrayBuffer(8);
const vue = new Int32Array(buffer);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

### Notes de compatibilité

À partir d'ECMAScript 2015, le constructeur `ArrayBuffer()` doit être appelé avec l'opérateur [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new). Appeler le constructeur `ArrayBuffer()` comme une fonction, c'est-à-dire sans le mot-clé `new`, déclenchera une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError).

```js example-bad
const buffer = ArrayBuffer(10);
// TypeError: calling a builtin ArrayBuffer constructor
// without new is forbidden
```

```js example-good
const buffer = new ArrayBuffer(10);
```

## Voir aussi

- [Une prothèse d'émulation pour `ArrayBuffer` avec la bibliothèque `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Typed_arrays)
- [`SharedArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)
