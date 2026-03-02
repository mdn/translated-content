---
title: Constructeur Float32Array()
short-title: Float32Array()
slug: Web/JavaScript/Reference/Global_Objects/Float32Array/Float32Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Le constructeur **`Float32Array()`** crée des objets {{JSxRef("Float32Array")}}. Le contenu est initialisé à `0` sauf si des données d'initialisation sont explicitement fournies.

## Syntaxe

```js-nolint
new Float32Array()
new Float32Array(length)
new Float32Array(typedArray)
new Float32Array(object)

new Float32Array(buffer)
new Float32Array(buffer, byteOffset)
new Float32Array(buffer, byteOffset, length)
```

> [!NOTE]
> Le constructeur `Float32Array()` ne peut être appelé qu'avec {{JSxRef("Operators/new", "new")}}. Tenter de l'appeler sans `new` provoque une {{JSxRef("TypeError")}}.

### Paramètres

Voir [`TypedArray`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#paramètres).

### Exceptions

Voir [`TypedArray`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#exceptions).

## Exemples

### Plusieurs façons de créer un objet `Float32Array`

```js
// À partir d'une longueur
const float32 = new Float32Array(2);
float32[0] = 42;
console.log(float32[0]); // 42
console.log(float32.length); // 2
console.log(float32.BYTES_PER_ELEMENT); // 4

// À partir d'un tableau
const x = new Float32Array([21, 31]);
console.log(x[1]); // 31

// À partir d'un autre tableau typé
const y = new Float32Array(x);
console.log(y[0]); // 21

// À partir d'un ArrayBuffer
const tampon = new ArrayBuffer(32);
const z = new Float32Array(tampon, 4, 4);
console.log(z.byteOffset); // 4

// À partir d'un itérable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const float32DepuisUnIterable = new Float32Array(iterable);
console.log(float32DepuisUnIterable);
// Float32Array [1, 2, 3]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Float32Array` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- Le guide [des tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Guide/Typed_arrays)
- L'objet {{JSxRef("TypedArray")}}
- L'objet {{JSxRef("ArrayBuffer")}}
- L'objet {{JSxRef("DataView")}}
