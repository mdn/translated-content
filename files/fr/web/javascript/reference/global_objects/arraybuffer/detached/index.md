---
title: "ArrayBuffer : propriété detached"
short-title: detached
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/detached
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété d'accesseur **`detached`** des instances de {{JSxRef("ArrayBuffer")}} retourne un booléen indiquant si ce tampon a été détaché (transféré) ou non.

## Description

La propriété `detached` est un accesseur dont le mutateur associé vaut `undefined`, ce qui signifie que cette propriété est en lecture seule. La valeur est `false` lors de la création de l'`ArrayBuffer`. Elle devient `true` si l'`ArrayBuffer` est [transféré](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transfert_des_arraybuffer), ce qui détache l'instance de sa mémoire sous-jacente. Une fois le tampon détaché, il n'est plus utilisable.

## Exemples

### Utiliser `detached`

```js
const buffer = new ArrayBuffer(8);
console.log(buffer.detached); // false
const newBuffer = buffer.transfer();
console.log(buffer.detached); // true
console.log(newBuffer.detached); // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{JSxRef("ArrayBuffer")}}
- {{JSxRef("ArrayBuffer.prototype.transfer()")}}
- {{JSxRef("ArrayBuffer.prototype.transferToFixedLength()")}}
- [Prothèse d'émulation de `ArrayBuffer.prototype.detached` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#arraybufferprototypetransfer-and-friends)
- [Prothèse d'émulation es-shims de `ArrayBuffer.prototype.detached` <sup>(angl.)</sup>](https://www.npmjs.com/package/arraybuffer.prototype.detached)
