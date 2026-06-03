---
title: Constructeur BigInt64Array()
slug: Web/JavaScript/Reference/Global_Objects/BigInt64Array/BigInt64Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Le constructeur **`BigInt64Array()`** crée des objets {{JSxRef("BigInt64Array")}}. Les éléments sont initialisés à `0n` sauf si des données d'initialisation sont fournies explicitement.

## Syntaxe

```js-nolint
new BigInt64Array()
new BigInt64Array(length)
new BigInt64Array(typedArray)
new BigInt64Array(object)

new BigInt64Array(buffer)
new BigInt64Array(buffer, byteOffset)
new BigInt64Array(buffer, byteOffset, length)
```

> [!NOTE]
> `BigInt64Array()` ne peut être construit qu'avec [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new). Tenter de l'appeler sans `new` provoque une erreur {{JSxRef("TypeError")}}.

### Paramètres

Voir [`TypedArray`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#paramètres).

### Exceptions

Voir [`TypedArray`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#exceptions).

## Exemples

### Différentes façons de créer un objet `BigInt64Array`

```js
// Construction à partir d'une longueur
const bigint64 = new BigInt64Array(2);
bigint64[0] = 42n;
console.log(bigint64[0]); // 42n
console.log(bigint64.length); // 2
console.log(bigint64.BYTES_PER_ELEMENT); // 8

// Construction à partir d'un tableau
const x = new BigInt64Array([21n, 31n]);
console.log(x[1]); // 31n

// Construction à partir d'un tableau typé
const y = new BigInt64Array(x);
console.log(y[0]); // 21n

// Construction à partir d'un ArrayBuffer
const buffer = new ArrayBuffer(64);
const z = new BigInt64Array(buffer, 8, 4);
console.log(z.byteOffset); // 8

// Construction à partir d'un itérable
const iterable = (function* () {
  yield* [1n, 2n, 3n];
})();
const bigint64FromIterable = new BigInt64Array(iterable);
console.log(bigint64FromIterable);
// BigInt64Array[1n, 2n, 3n]
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
