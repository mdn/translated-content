---
title: "ArrayBuffer : propriété detached"
short-title: detached
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/detached
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La propriété d'accesseur **`detached`** des instances de {{JSxRef("ArrayBuffer")}} retourne un booléen indiquant si ce tampon a été détaché (transféré) ou non.

## Description

La propriété `detached` est un accesseur dont le mutateur associé vaut `undefined`, ce qui signifie que cette propriété est en lecture seule. La valeur est `false` lors de la création d'un `ArrayBuffer`. Elle devient `true` si un `ArrayBuffer` est [transféré](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transfert_des_arraybuffer), ce qui détache l'instance de sa mémoire sous-jacente. Une fois le tampon détaché, il n'est plus utilisable.

## Exemples

### Utiliser la propriété `detached`

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

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `ArrayBuffer.prototype.detached` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `ArrayBuffer.prototype.detached` <sup>(angl.)</sup>](https://www.npmjs.com/package/arraybuffer.prototype.detached)
- {{JSxRef("ArrayBuffer")}}
- {{JSxRef("ArrayBuffer.prototype.transfer()")}}
- {{JSxRef("ArrayBuffer.prototype.transferToFixedLength()")}}
