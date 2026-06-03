---
title: Float32Array
slug: Web/JavaScript/Reference/Global_Objects/Float32Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Le tableau typé **`Float32Array`** représente un tableau de nombres à virgule flottante sur 32 bits dans l'ordre des octets de la plateforme. Si vous avez besoin de contrôler l'ordre des octets, utilisez plutôt {{JSxRef("DataView")}}. Le contenu est initialisé à `0` sauf si des données d'initialisation sont explicitement fournies. Une fois créé, vous pouvez accéder aux éléments du tableau en utilisant les méthodes de l'objet ou la syntaxe d'index de tableau standard (c'est-à-dire la notation entre crochets).

`Float32Array` est une sous-classe de la classe cachée de {{JSxRef("TypedArray")}}.

## Constructeur

- {{JSxRef("Float32Array/Float32Array", "Float32Array()")}}
  - : Crée un nouvel objet `Float32Array`.

## Propriétés statiques

_Hérite aussi des propriétés statiques de son parent {{JSxRef("TypedArray")}}._

- {{JSxRef("TypedArray/BYTES_PER_ELEMENT", "Float32Array.BYTES_PER_ELEMENT")}}
  - : Retourne une valeur numérique correspondant à la taille d'un élément. `4` dans le cas de `Float32Array`.

## Méthodes statiques

_Hérite des méthodes statiques de son parent {{JSxRef("TypedArray")}}._

### Propriétés d'instance

_Hérite aussi des propriétés d'instance de son parent {{JSxRef("TypedArray")}}._

Ces propriétés sont définies sur `Float32Array.prototype` et partagées par toutes les instances de `Float32Array`.

- {{JSxRef("TypedArray/BYTES_PER_ELEMENT", "Float32Array.prototype.BYTES_PER_ELEMENT")}}
  - : Retourne une valeur numérique correspondant à la taille d'un élément. `4` dans le cas d'un `Float32Array`.
- {{JSxRef("Object/constructor", "Float32Array.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances de `Float32Array`, la valeur initiale est le constructeur {{JSxRef("Float32Array/Float32Array", "Float32Array")}}.

### Méthodes d'instance

_Hérite des méthodes d'instance de son parent {{JSxRef("TypedArray")}}._

## Exemples

### Différentes façons de créer un objet `Float32Array`

```js
// Construction à partir d'une longueur
const float32 = new Float32Array(2);
float32[0] = 42;
console.log(float32[0]); // 42
console.log(float32.length); // 2
console.log(float32.BYTES_PER_ELEMENT); // 4

// Construction à partir d'un tableau
const x = new Float32Array([21, 31]);
console.log(x[1]); // 31

// Construction à partir d'un tableau typé
const y = new Float32Array(x);
console.log(y[0]); // 21

// Construction à partir d'un ArrayBuffer
const tampon = new ArrayBuffer(32);
const z = new Float32Array(tampon, 4, 4);
console.log(z.byteOffset); // 4

// Construction à partir d'un itérable
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
