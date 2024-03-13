---
title: Constructeur SharedArrayBuffer()
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer
---

{{JSRef}}

> **Note :** `SharedArrayBuffer` a été désactivé par défaut pour l'ensemble des navigateurs principaux le 5 janvier 2018 en réponse à la faille [Spectre](https://meltdownattack.com/). Chrome [a réactivé cette fonctionnalité à partir de la version 67](https://bugs.chromium.org/p/chromium/issues/detail?id=821270) sur les plateformes où la fonctionnalité d'isolation des sites est activée et protège des vulnérabilités analogues à Spectre.

Le **constructeur `SharedArrayBuffer()`** permet de créer un objet [`SharedArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) qui représente un tampon de mémoire binaire brute de taille fixe, similaire à un objet [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

{{EmbedInteractiveExample("pages/js/sharedarraybuffer-constructor.html","shorter")}}

## Syntaxe

```js
new SharedArrayBuffer();
new SharedArrayBuffer(longueur);
```

### Paramètres

- `longueur` {{optional_inline}}
  - : La longueur, exprimée en octets, du tampon de mémoire à créer.

### Valeur de retour

Un nouvel objet `SharedArrayBuffer` de la taille indiquée et dont les éléments du tableau sont initialisés à `0`.

## Exemples

### L'opérateur `new` est obligatoire

Le constructeur `SharedArrayBuffer()` doit être appelé avec l'opérateur [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new). Appeler le constructeur `SharedArrayBuffer()` comme une fonction, c'est-à-dire sans utiliser `new`, déclenchera une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError).

```js example-bad
const sab = SharedArrayBuffer(1024);
// TypeError: calling a builtin SharedArrayBuffer constructor
// without new is forbidden
```

```js example-good
const sab = new SharedArrayBuffer(1024);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Atomics`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Atomics)
- [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Typed_arrays)
