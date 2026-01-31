---
title: Constructeur BigUint64Array()
slug: Web/JavaScript/Reference/Global_Objects/BigUint64Array/BigUint64Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Le constructeur **`BigUint64Array()`** crée des objets {{JSxRef("BigUint64Array")}}. Les éléments sont initialisés à `0n` sauf si des données d'initialisation sont fournies explicitement.

## Syntaxe

```js-nolint
new BigUint64Array()
new BigUint64Array(length)
new BigUint64Array(typedArray)
new BigUint64Array(object)

new BigUint64Array(buffer)
new BigUint64Array(buffer, byteOffset)
new BigUint64Array(buffer, byteOffset, length)
```

> [!NOTE]
> `BigUint64Array()` ne peut être construit qu'avec [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new). Tenter de l'appeler sans `new` provoque une erreur {{JSxRef("TypeError")}}.

### Paramètres

Voir [`TypedArray`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#paramètres).

### Exceptions

Voir [`TypedArray`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#exceptions).

## Exemples

### Différentes façons de créer un objet `BigUint64Array`

```js
// Construction à partir d'une longueur
const biguint64 = new BigUint64Array(2);
biguint64[0] = 42n;
console.log(biguint64[0]); // 42n
console.log(biguint64.length); // 2
console.log(biguint64.BYTES_PER_ELEMENT); // 8

// Construction à partir d'un tableau
const x = new BigUint64Array([21n, 31n]);
console.log(x[1]); // 31n

// Construction à partir d'un tableau typé
const y = new BigUint64Array(x);
console.log(y[0]); // 21n

// Construction à partir d'un ArrayBuffer
const buffer = new ArrayBuffer(64);
const z = new BigUint64Array(buffer, 8, 4);
console.log(z.byteOffset); // 8

// Construction à partir d'un itérable
const iterable = (function* () {
  yield* [1n, 2n, 3n];
})();
const biguint64FromIterable = new BigUint64Array(iterable);
console.log(biguint64FromIterable);
// BigUint64Array[1n, 2n, 3n]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Guide/Typed_arrays)
- L'objet {{JSxRef("TypedArray")}}
- L'objet {{JSxRef("ArrayBuffer")}}
- L'objet {{JSxRef("DataView")}}
