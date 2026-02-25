---
title: Constructeur Float64Array()
short-title: Float64Array()
slug: Web/JavaScript/Reference/Global_Objects/Float64Array/Float64Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Le constructeur **`Float64Array()`** crée des objets {{JSxRef("Float64Array")}}. Le contenu est initialisé à `0` sauf si des données d'initialisation sont explicitement fournies.

## Syntaxe

```js-nolint
new Float64Array()
new Float64Array(length)
new Float64Array(typedArray)
new Float64Array(object)

new Float64Array(buffer)
new Float64Array(buffer, byteOffset)
new Float64Array(buffer, byteOffset, length)
```

> [!NOTE]
> Le constructeur `Float64Array()` ne peut être appelé qu'avec {{JSxRef("Operators/new", "new")}}. Tenter de l'appeler sans `new` provoque une {{JSxRef("TypeError")}}.

### Paramètres

Voir [`TypedArray`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#paramètres).

### Exceptions

Voir [`TypedArray`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#exceptions).

## Exemples

### Différentes façons de créer un objet `Float64Array`

```js
// Construction avec une longueur de tableau
const float64 = new Float64Array(2);
float64[0] = 42;
console.log(float64[0]); // 42
console.log(float64.length); // 2
console.log(float64.BYTES_PER_ELEMENT); // 8

// Construction à partir d'un tableau
const x = new Float64Array([21, 31]);
console.log(x[1]); // 31

// Construction à partir d'un autre tableau typé
const y = new Float64Array(x);
console.log(y[0]); // 21

// Construction à partir d'un ArrayBuffer
const tampon = new ArrayBuffer(64);
const z = new Float64Array(tampon, 8, 4);
console.log(z.byteOffset); // 8

// Construction à partir d'un itérable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const float64DepuisUnIterable = new Float64Array(iterable);
console.log(float64DepuisUnIterable);
// Float64Array [1, 2, 3]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Float64Array` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- Le guide [des tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Guide/Typed_arrays)
- L'objet {{JSxRef("TypedArray")}}
- L'objet {{JSxRef("ArrayBuffer")}}
- L'objet {{JSxRef("DataView")}}
