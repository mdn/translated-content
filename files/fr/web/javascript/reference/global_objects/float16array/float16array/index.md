---
title: Constructeur Float16Array()
short-title: Float16Array()
slug: Web/JavaScript/Reference/Global_Objects/Float16Array/Float16Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Le constructeur **`Float16Array()`** crée des objets {{JSxRef("Float16Array")}}. Le contenu est initialisé à `0` sauf si des données d'initialisation sont explicitement fournies.

## Syntaxe

```js-nolint
new Float16Array()
new Float16Array(length)
new Float16Array(typedArray)
new Float16Array(object)

new Float16Array(buffer)
new Float16Array(buffer, byteOffset)
new Float16Array(buffer, byteOffset, length)
```

> [!NOTE]
> Le constructeur `Float16Array()` ne peut être appelé qu'avec {{JSxRef("Operators/new", "new")}}. Tenter de l'appeler sans `new` provoque une {{JSxRef("TypeError")}}.

### Paramètres

Voir [`TypedArray`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#paramètres).

### Exceptions

Voir [`TypedArray`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#exceptions).

## Exemples

### Différentes manières de créer un `Float16Array`

```js
// À partir d'une longueur
const float16 = new Float16Array(2);
float16[0] = 42;
console.log(float16[0]); // 42
console.log(float16.length); // 2
console.log(float16.BYTES_PER_ELEMENT); // 2

// À partir d'un tableau
const x = new Float16Array([21, 31]);
console.log(x[1]); // 31

// À partir d'un autre TypedArray
const y = new Float16Array(x);
console.log(y[0]); // 21

// À partir d'un ArrayBuffer
const tampon = new ArrayBuffer(32);
const z = new Float16Array(tampon, 4, 4);
console.log(z.byteOffset); // 4

// À partir d'un itérable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const float16DepuisUnIterable = new Float16Array(iterable);
console.log(float16DepuisUnIterable);
// Float16Array [1, 2, 3]
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
