---
title: "ArrayBuffer : méthode transferToFixedLength()"
short-title: transferToFixedLength()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transferToFixedLength
l10n:
  sourceCommit: 16f462ee43bbd7fd39561a480e3e323d1c542966
---

La méthode **`transferToFixedLength()`** des instances de {{JSxRef("ArrayBuffer")}} crée un nouvel objet `ArrayBuffer` non redimensionnable contenant les mêmes octets que ce tampon, puis détache ce tampon.

## Syntaxe

```js-nolint
transferToFixedLength()
transferToFixedLength(newByteLength)
```

### Paramètres

- `newByteLength`
  - : La longueur {{JSxRef("ArrayBuffer/byteLength", "byteLength")}} du nouvel `ArrayBuffer`. Par défaut, il prend la valeur de `byteLength` de cet `ArrayBuffer`.
    - Si `newByteLength` est inférieur à la propriété `byteLength` de cet `ArrayBuffer`, les octets «&nbsp;débordants&nbsp;» sont supprimés.
    - Si `newByteLength` est supérieur à la propriété `byteLength` de cet `ArrayBuffer`, les octets supplémentaires sont remplis de zéros.

### Valeur de retour

Un nouvel objet {{JSxRef("ArrayBuffer")}}. Son contenu est initialisé à partir de cet `ArrayBuffer`, et les octets supplémentaires, s'il y en a, sont remplis de zéros. Le nouvel `ArrayBuffer` est toujours non redimensionnable. L'`ArrayBuffer` d'origine est détaché.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si cet `ArrayBuffer` est déjà détaché, ou s'il ne peut être détaché que par des opérations désignées. Actuellement, seules certaines API Web peuvent créer des objets `ArrayBuffer` avec des méthodes de détachement spécifiques, comme {{DOMxRef("GPUBuffer.getMappedRange()")}} et [`WebAssembly.Memory.buffer`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer).

## Description

Contrairement à {{JSxRef("ArrayBuffer/transfer", "transfer()")}}, `transferToFixedLength()` crée toujours un `ArrayBuffer` non redimensionnable. Cela signifie que `newByteLength` peut être supérieur à `maxByteLength`, même si cet `ArrayBuffer` est redimensionnable. Voir [transfert des ArrayBuffer](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transfert_des_arraybuffer) pour plus d'informations.

## Exemples

### Transférer un `ArrayBuffer` redimensionnable en longueur fixe

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const view = new Uint8Array(buffer);
view[1] = 2;
view[7] = 4;

const buffer2 = buffer.transferToFixedLength();
console.log(buffer2.byteLength); // 8
console.log(buffer2.resizable); // false
const view2 = new Uint8Array(buffer2);
console.log(view2[1]); // 2
console.log(view2[7]); // 4
```

Avec `transferToFixedLength`, `newByteLength` peut être supérieur à la propriété `maxByteLength` de l'`ArrayBuffer` d'origine.

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const view = new Uint8Array(buffer);
view[1] = 2;
view[7] = 4;

const buffer2 = buffer.transferToFixedLength(20);
console.log(buffer2.byteLength); // 20
console.log(buffer2.resizable); // false
const view2 = new Uint8Array(buffer2);
console.log(view2[1]); // 2
console.log(view2[7]); // 4
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet global {{JSxRef("ArrayBuffer")}}
- La propriété {{JSxRef("ArrayBuffer.prototype.detached")}}
- La méthode {{JSxRef("ArrayBuffer.prototype.transfer()")}}
- [Prothèse d'émulation de `ArrayBuffer.prototype.transferToFixedLength` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#arraybufferprototypetransfer-and-friends)
- [Prothèse d'émulation es-shims de `ArrayBuffer.prototype.transferToFixedLength` <sup>(angl.)</sup>](https://www.npmjs.com/package/arraybuffer.prototype.transfertofixedlength)
