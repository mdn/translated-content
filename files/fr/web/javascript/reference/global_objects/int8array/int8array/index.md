---
title: Constructeur Int8Array()
short-title: Int8Array()
slug: Web/JavaScript/Reference/Global_Objects/Int8Array/Int8Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Le constructeur **`Int8Array()`** crée des objets {{JSxRef("Int8Array")}}. Les contenus sont initialisés à `0` sauf si des données d'initialisation sont explicitement fournies.

## Syntaxe

```js-nolint
new Int8Array()
new Int8Array(length)
new Int8Array(typedArray)
new Int8Array(object)

new Int8Array(buffer)
new Int8Array(buffer, byteOffset)
new Int8Array(buffer, byteOffset, length)
```

> [!NOTE]
> `Int8Array()` ne peut être construit qu'avec {{JSxRef("Operators/new", "new")}}. Tenter de l'appeler sans `new` lève une erreur {{JSxRef("TypeError")}}.

### Paramètres

Voir [`TypedArray`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#paramètres).

### Exceptions

Voir [`TypedArray`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#exceptions).

## Exemples

### Plusieurs façons de créer un objet `Int8Array`

```js
// Construction à partir d'une longueur
const int8 = new Int8Array(2);
int8[0] = 42;
console.log(int8[0]); // 42
console.log(int8.length); // 2
console.log(int8.BYTES_PER_ELEMENT); // 1

// Construction à partir d'un tableau
const x = new Int8Array([21, 31]);
console.log(x[1]); // 31

// Construction à partir d'un autre TypedArray
const y = new Int8Array(x);
console.log(y[0]); // 21

// Construction à partir d'un ArrayBuffer
const buffer = new ArrayBuffer(8);
const z = new Int8Array(buffer, 1, 4);
console.log(z.byteOffset); // 1

// Construction à partir d'un itérable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const int8FromIterable = new Int8Array(iterable);
console.log(int8FromIterable);
// Int8Array [1, 2, 3]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Int8Array` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- Le guide [des tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Guide/Typed_arrays)
- L'objet {{JSxRef("TypedArray")}}
- L'objet {{JSxRef("ArrayBuffer")}}
- L'objet {{JSxRef("DataView")}}
