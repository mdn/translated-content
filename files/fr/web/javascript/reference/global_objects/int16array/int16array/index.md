---
title: Constructeur Int16Array()
short-title: Int16Array()
slug: Web/JavaScript/Reference/Global_Objects/Int16Array/Int16Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Le constructeur **`Int16Array()`** crée des objets {{JSxRef("Int16Array")}}. Les contenus sont initialisés à `0` sauf si des données d'initialisation sont explicitement fournies.

## Syntaxe

```js-nolint
new Int16Array()
new Int16Array(length)
new Int16Array(typedArray)
new Int16Array(object)

new Int16Array(buffer)
new Int16Array(buffer, byteOffset)
new Int16Array(buffer, byteOffset, length)
```

> [!NOTE]
> `Int16Array()` ne peut être construit qu'avec {{JSxRef("Operators/new", "new")}}. Tenter de l'appeler sans `new` lève une erreur {{JSxRef("TypeError")}}.

### Paramètres

Voir [`TypedArray`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#paramètres).

### Exceptions

Voir [`TypedArray`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#exceptions).

## Exemples

### Plusieurs façons de créer un objet `Int16Array`

```js
// Construction à partir d'une longueur
const int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42
console.log(int16.length); // 2
console.log(int16.BYTES_PER_ELEMENT); // 2

// Construction à partir d'un tableau
const x = new Int16Array([21, 31]);
console.log(x[1]); // 31

// Construction à partir d'un autre TypedArray
const y = new Int16Array(x);
console.log(y[0]); // 21

// Construction à partir d'un ArrayBuffer
const buffer = new ArrayBuffer(16);
const z = new Int16Array(buffer, 2, 4);
console.log(z.byteOffset); // 2

// Construction à partir d'un itérable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const int16FromIterable = new Int16Array(iterable);
console.log(int16FromIterable);
// Int16Array [1, 2, 3]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Int16Array` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- Le guide [des tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Guide/Typed_arrays)
- L'objet {{JSxRef("TypedArray")}}
- L'objet {{JSxRef("ArrayBuffer")}}
- L'objet {{JSxRef("DataView")}}
