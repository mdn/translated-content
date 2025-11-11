---
title: ArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

L'objet **`ArrayBuffer`** est utilisé afin de représenter un tampon (_buffer_) de données binaires de longueur fixe de façon générique.

Il s'agit d'un tableau d'octets. Il n'est pas possible de manipuler directement le contenu d'un `ArrayBuffer`, la manipulation se fait de façon indirecte en créant un [tableau typé](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) ou un objet [`DataView`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView) qui permet de représenter le tampon dans un format donné qui permet de lire/écrire des contenus dans le tampon de mémoire.

Le constructeur [`ArrayBuffer()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer) permet de créer un nouvel objet `ArrayBuffer` dont la longueur, en octets, est fournie par l'argument. Il est aussi possible d'obtenir un tableau typé à partir de données existantes, par exemple depuis une chaîne en [Base64](/fr/docs/Glossary/Base64) ou [depuis un fichier local](/fr/docs/Web/API/FileReader/readAsArrayBuffer).

## Description

### Redimensionnement des ArrayBuffer

Un objet `ArrayBuffer` peut être redimensionnable en incluant l'option `maxByteLength` lors de l'appel au constructeur {{JSxRef("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}}. Vous pouvez savoir si un `ArrayBuffer` est redimensionnable et connaître sa taille maximale en consultant ses propriétés {{JSxRef("ArrayBuffer/resizable", "resizable")}} et {{JSxRef("ArrayBuffer/maxByteLength", "maxByteLength")}}. Vous pouvez attribuer une nouvelle taille à un `ArrayBuffer` redimensionnable avec {{JSxRef("ArrayBuffer/resize", "resize()")}}. Les nouveaux octets sont initialisés à 0.

Ces fonctionnalités rendent le redimensionnement des `ArrayBuffer` plus efficace — sinon, il faut copier le tampon dans une nouvelle taille. Cela rapproche JavaScript de WebAssembly (la mémoire linéaire Wasm peut être redimensionnée avec [`WebAssembly.Memory.prototype.grow()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow)).

### Transfert des ArrayBuffer

Un objet `ArrayBuffer` peut être transféré entre différents contextes d'exécution, comme les [Web Workers](/fr/docs/Web/API/Web_Workers_API) ou les [Service Workers](/fr/docs/Web/API/Service_Worker_API), en utilisant l'[algorithme de clonage structuré](/fr/docs/Web/API/Web_Workers_API/Structured_clone_algorithm). Cela se fait en passant l'`ArrayBuffer` comme [objet transférable](/fr/docs/Web/API/Web_Workers_API/Transferable_objects) lors d'un appel à {{DOMxRef("Worker.postMessage()")}} ou {{DOMxRef("ServiceWorker.postMessage()")}}. En JavaScript, vous pouvez aussi transférer la mémoire d'un `ArrayBuffer` à un autre avec {{JSxRef("ArrayBuffer/transfer", "transfer()")}} ou {{JSxRef("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}}.

Quand un `ArrayBuffer` est transféré, sa copie d'origine devient _détachée_ — cela signifie qu'il n'est plus utilisable. À tout moment, il n'existe qu'une seule copie de l'`ArrayBuffer` qui a accès à la mémoire sous-jacente. Un tampon détaché a les comportements suivants&nbsp;:

- {{JSxRef("ArrayBuffer/byteLength", "byteLength")}} vaut 0 (dans le tampon et les vues de tableau typé associées).
- Les méthodes comme {{JSxRef("ArrayBuffer/resize", "resize()")}} et {{JSxRef("ArrayBuffer/slice", "slice()")}} lèvent une exception {{JSxRef("TypeError")}} lorsqu'on les appelle. Les méthodes des vues de tableau typé associées lèvent aussi une `TypeError`.

Vous pouvez vérifier si un `ArrayBuffer` est détaché grâce à sa propriété {{JSxRef("ArrayBuffer/detached", "detached")}}.

## Constructeur

- {{JSxRef("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}}
  - : Crée un nouvel objet `ArrayBuffer`.

## Propriétés statiques

- [`ArrayBuffer[Symbol.species]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/Symbol.species)
  - : La fonction de construction utilisée pour créer des objets dérivés.

## Méthodes statiques

- {{JSxRef("ArrayBuffer.isView()")}}
  - : Retourne `true` si `arg` est une des vues sur le tableau typé sous la forme d'un [objet de tableau typé](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) ou {{JSxRef("DataView")}} et `false` sinon.

## Propriétés d'instances

Ces propriétés sont définies sur `ArrayBuffer.prototype` et partagées par toutes les instances de `ArrayBuffer`.

- {{JSxRef("ArrayBuffer.prototype.byteLength")}}
  - : La taille, en octets, de l'objet `ArrayBuffer`. Cette valeur est établie à la construction du tableau et ne peut être modifiée qu'en utilisant la méthode {{JSxRef("ArrayBuffer.prototype.resize()")}} si l'objet `ArrayBuffer` est redimensionnable.
- {{JSxRef("Object/constructor", "ArrayBuffer.prototype.constructor")}}
  - : La fonction de construction qui a créé l'objet d'instance. Pour les instances de `ArrayBuffer`, la valeur initiale est le constructeur {{JSxRef("ArrayBuffer/ArrayBuffer", "ArrayBuffer")}}.
- {{JSxRef("ArrayBuffer.prototype.detached")}} {{ReadOnlyInline}}
  - : Retourne `true` si l'objet `ArrayBuffer` a été détaché (transféré), ou `false` sinon.
- {{JSxRef("ArrayBuffer.prototype.maxByteLength")}}
  - : La longueur maximale, en octets, à laquelle l'objet `ArrayBuffer` peut être redimensionné. Cette valeur est établie à la construction du tableau et ne peut pas être modifiée.
- {{JSxRef("ArrayBuffer.prototype.resizable")}} {{ReadOnlyInline}}
  - : Retourne `true` si l'objet `ArrayBuffer` peut être redimensionné, ou `false` sinon.
- `ArrayBuffer.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"ArrayBuffer"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Méthodes d'instances

- {{JSxRef("ArrayBuffer.prototype.resize()")}}
  - : Redimensionne l'objet `ArrayBuffer` à la taille définie, en octets.
- {{JSxRef("ArrayBuffer.prototype.slice()")}}
  - : Retourne un nouvel objet `ArrayBuffer` dont le contenu est une copie des octets de cet objet `ArrayBuffer` depuis `begin` (inclus) jusqu'à `end` (exclus). Si `begin` ou `end` est négatif, cela indique un indice à partir de la fin du tableau, plutôt qu'à partir du début.
- {{JSxRef("ArrayBuffer.prototype.transfer()")}}
  - : Crée un nouvel objet `ArrayBuffer` avec le même contenu d'octets que ce tampon, puis détache ce tampon.
- {{JSxRef("ArrayBuffer.prototype.transferToFixedLength()")}}
  - : Crée un nouvel objet `ArrayBuffer` non redimensionnable avec le même contenu d'octets que ce tampon, puis détache ce tampon.

## Exemples

### Créer un objet `ArrayBuffer`

Dans cet exemple, on crée un tampon de mémoire sur 8 octets avec une vue {{JSxRef("Int32Array")}} qui porte sur le tampon&nbsp;:

```js
const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Guide/Typed_arrays)
- L'objet global {{JSxRef("SharedArrayBuffer")}}
- [<i lang="en">RangeError: invalid array length</i>](/fr/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
- [Prothèse d'émulation (<i lang="en">polyfill</i>) pour `ArrayBuffer` dans la bibliothèque `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
