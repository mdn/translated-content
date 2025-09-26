---
title: ArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice
---

{{JSRef}}

La méthode **`slice()`** renvoie un nouvel `ArrayBuffer` dont le contenu est une copie des octets du `ArrayBuffer` courant, contenus entre `début` (compris) et `fin` (non-compris).

{{InteractiveExample("JavaScript Demo: ArrayBuffer.slice()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);
const int32View = new Int32Array(buffer);
// Produces Int32Array [0, 0, 0, 0]

int32View[1] = 42;
const sliced = new Int32Array(buffer.slice(4, 12));
// Produces Int32Array [42, 0]

console.log(sliced[0]);
// Expected output: 42
```

## Syntaxe

```js
arraybuffer.slice(début[, fin])
```

### Paramètres

- `début`
  - : Indice (numérotation commençant à zéro) de l'octet à partir duquel découper le tableau.
- `fin`
  - : Indice de l'octet auquel finir la découpe du tableau. Si ce paramètre n'est pas fourni, le nouvel `ArrayBuffer` contiendra tous les octets entre `début` et la fin du `ArrayBuffer` courant. L'intervalle défini par les valeurs `début` et `fin` est réduit à un intervalle valide pour le tableau courant si nécessaire. Si la longueur du nouveau tableau `ArrayBuffer` sera négative, l'intervalle est réduit à zéro.

### Valeur de retour

Un nouvel objet `ArrayBuffer`.

## Description

La méthode `slice` copie les octets contenus jusqu'au (au sens exclusif) paramètre `fin`. Si le paramètre `début` ou `fin` est négatif, il fera référence à l'indice à partir de la fin du tableau et non pas à l'indice à partir du début du tableau.

## Exemples

### Copier un `ArrayBuffer`

```js
var buf1 = new ArrayBuffer(8);
var buf2 = buf1.slice(0);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("ArrayBuffer")}}
