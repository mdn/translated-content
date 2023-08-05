---
title: ArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
---

{{JSRef}}

L'objet **`ArrayBuffer`** est utilisé afin de représenter un tampon (_buffer_) de données binaires de longueur fixe de façon générique.

Il s'agit d'un tableau d'octets. Il n'est pas possible de manipuler directement le contenu d'un `ArrayBuffer`, la manipulation se fait de façon indirecte en créant un [tableau typé](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) ou un objet [`DataView`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView) qui permet de représenter le tampon dans un format donné qui permet de lire/écrire des contenus dans le tampon de mémoire.

Le constructeur [`ArrayBuffer()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer) permet de créer un nouvel objet `ArrayBuffer` dont la longueur, en octets, est fournie par l'argument. Il est aussi possible d'obtenir un tableau typé à partir de données existantes, par exemple depuis une chaîne en [Base64](/fr/docs/Glossary/Base64) ou [depuis un fichier local](/fr/docs/Web/API/FileReader/readAsArrayBuffer).

## Constructeur

- [`ArrayBuffer()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer)
  - : Crée un nouvel objet `ArrayBuffer`.

## Propriétés statiques

- [`get ArrayBuffer[@@species]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/@@species)
  - : La fonction de construction utilisée pour créer des objets dérivés.

## Méthodes statiques

- [`ArrayBuffer.isView(arg)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView)
  - : Renvoie `true` si `arg` est une des vues sur le tableau typé sous la forme d'un [objet de tableau typé](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) ou [`DataView`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView) et `false` sinon.

## Propriétés des instances

- [`ArrayBuffer.prototype.byteLength`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength)
  - : La taille exprimée en octets, et en lecture seule, de l'objet `ArrayBuffer`. Elle est établie à la construction du tableau et ne peut pas être changée.

## Méthodes des instances

- [`ArrayBuffer.prototype.slice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice)
  - : Renvoie un nouvel objet `ArrayBuffer` dont le contenu est une copie des octets de l'objet `ArrayBuffer` courant entre l'indice de début (inclus) et l'indice de fin (exclus), passés en argument. Si les valeurs fournies pour l'indice de début ou de fin sont négatives, elles expriment un indice compté depuis la fin du tableau (plutôt que depuis le début).

## Exemples

### Créer un objet `ArrayBuffer`

Dans cet exemple, on crée un tampon de mémoire sur 8 octets avec une vue [`Int32Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Int32Array) qui porte sur le tampon&nbsp;:

```js
const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Une prothèse d'émulation (<i lang="en">polyfill</i>) pour `ArrayBuffer` dans la bibliothèque `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Typed_arrays)
- [`SharedArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)
- [<i lang="en">RangeError: invalid array length</i>](/fr/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
