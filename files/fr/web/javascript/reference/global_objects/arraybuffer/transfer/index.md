---
title: "ArrayBuffer : méthode transfer()"
short-title: transfer()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transfer
l10n:
  sourceCommit: 16f462ee43bbd7fd39561a480e3e323d1c542966
---

La méthode **`transfer()`** des instances de {{JSxRef("ArrayBuffer")}} crée un nouveau tableau de mémoire tampon (<i lang="en">array buffer</i> en anglais) contenant les mêmes octets que ce tableau, puis détache ce tableau.

## Syntaxe

```js-nolint
transfer()
transfer(newByteLength)
```

### Paramètres

- `newByteLength` {{Optional_Inline}}
  - : La longueur {{JSxRef("ArrayBuffer/byteLength", "byteLength")}} du nouveau tableau de mémoire tampon. Par défaut, il s'agit de la valeur de `byteLength` de ce tableau de mémoire tampon.
    - Si `newByteLength` est inférieur à la valeur de `byteLength` de ce tableau de mémoire tampon, les octets «&nbsp;débordants&nbsp;» sont supprimés.
    - Si `newByteLength` est supérieur à la valeur de `byteLength` de ce tableau de mémoire tampon, les octets supplémentaires sont remplis de zéros.
    - Si ce tableau de mémoire tampon est redimensionnable, `newByteLength` ne doit pas dépasser sa valeur de {{JSxRef("ArrayBuffer/maxByteLength", "maxByteLength")}}.

### Valeur de retour

Un nouvel objet {{JSxRef("ArrayBuffer")}}. Son contenu est initialisé avec le contenu de ce `ArrayBuffer`, et les octets supplémentaires, le cas échéant, sont remplis de zéros. Le nouveau `ArrayBuffer` est redimensionnable si, et seulement si, ce `ArrayBuffer` est redimensionnable, auquel cas sa valeur de {{JSxRef("ArrayBuffer/maxByteLength", "maxByteLength")}} est la même que celle de ce `ArrayBuffer`. Le `ArrayBuffer` d'origine est détaché.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si ce `ArrayBuffer` est redimensionnable et que `newByteLength` est supérieur à la valeur de {{JSxRef("ArrayBuffer/maxByteLength", "maxByteLength")}} de ce `ArrayBuffer`.
- {{JSxRef("TypeError")}}
  - : Levée si ce `ArrayBuffer` est déjà détaché, ou s'il ne peut être détaché que par des opérations désignées. Actuellement, seules certaines API web sont capables de créer des objets `ArrayBuffer` avec des méthodes de détachement désignées, comme {{DOMxRef("GPUBuffer.getMappedRange()")}} et [`WebAssembly.Memory.buffer`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer).

## Description

La méthode `transfer()` effectue la même opération que l'[algorithme de clonage structuré](/fr/docs/Web/API/Web_Workers_API/Structured_clone_algorithm). Elle copie les octets de ce `ArrayBuffer` dans un nouveau `ArrayBuffer`, puis détache ce `ArrayBuffer`. Voir [transfert des ArrayBuffer](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transfert_des_arraybuffer) pour plus d'informations.

`transfer()` préserve la capacité de redimensionnement de ce `ArrayBuffer`. Si vous souhaitez que le nouveau `ArrayBuffer` ne soit pas redimensionnable, utilisez plutôt {{JSxRef("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}}. Il n'existe aucun moyen de transférer un buffer qui rend un `ArrayBuffer` à longueur fixe redimensionnable.

`transfer()` est très efficace car les implémentations peuvent réaliser cette méthode comme un déplacement sans copie ou un `realloc` — il n'est pas nécessaire de copier effectivement les données.

## Exemples

### Transférer un `ArrayBuffer`

```js
// Crée un tableau de mémoire tampon et écrit quelques octets
const buffer = new ArrayBuffer(8);
const view = new Uint8Array(buffer);
view[1] = 2;
view[7] = 4;

// Copie le tableau à la même taille
const buffer2 = buffer.transfer();
console.log(buffer.detached); // true
console.log(buffer2.byteLength); // 8
const view2 = new Uint8Array(buffer2);
console.log(view2[1]); // 2
console.log(view2[7]); // 4

// Copie le tableau à une taille plus petite
const buffer3 = buffer2.transfer(4);
console.log(buffer3.byteLength); // 4
const view3 = new Uint8Array(buffer3);
console.log(view3[1]); // 2
console.log(view3[7]); // undefined

// Copie le tableau à une taille plus grande
const buffer4 = buffer3.transfer(8);
console.log(buffer4.byteLength); // 8
const view4 = new Uint8Array(buffer4);
console.log(view4[1]); // 2
console.log(view4[7]); // 0

// Déjà détaché, lève une TypeError
buffer.transfer(); // TypeError: Cannot perform ArrayBuffer.prototype.transfer on a detached ArrayBuffer
```

### Transférer un `ArrayBuffer` redimensionnable

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const view = new Uint8Array(buffer);
view[1] = 2;
view[7] = 4;

// Copie le tableau à une taille plus petite
const buffer2 = buffer.transfer(4);
console.log(buffer2.byteLength); // 4
console.log(buffer2.maxByteLength); // 16
const view2 = new Uint8Array(buffer2);
console.log(view2[1]); // 2
console.log(view2[7]); // undefined
buffer2.resize(8);
console.log(view2[7]); // 0

// Copie le tableau à une taille plus grande dans la limite de maxByteLength
const buffer3 = buffer2.transfer(12);
console.log(buffer3.byteLength); // 12

// Copie le tableau à une taille supérieure à maxByteLength
buffer3.transfer(20); // RangeError: Invalid array buffer length
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet global {{JSxRef("ArrayBuffer")}}
- La propriété {{JSxRef("ArrayBuffer.prototype.detached")}}
- La méthode {{JSxRef("ArrayBuffer.prototype.transferToFixedLength()")}}
- [Prothèse d'émulation de `ArrayBuffer.prototype.transfer` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#arraybufferprototypetransfer-and-friends)
- [Prothèse d'émulation es-shims de `ArrayBuffer.prototype.transfer` <sup>(angl.)</sup>](https://www.npmjs.com/package/arraybuffer.prototype.transfer)
