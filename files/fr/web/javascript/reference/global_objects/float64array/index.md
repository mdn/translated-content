---
title: Float64Array
slug: Web/JavaScript/Reference/Global_Objects/Float64Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Le tableau typé **`Float64Array`** représente un tableau de nombres à virgule flottante sur 64 bits dans l'ordre des octets de la plateforme. Si vous avez besoin de contrôler l'ordre des octets, utilisez plutôt {{JSxRef("DataView")}}. Le contenu est initialisé à `0` sauf si des données d'initialisation sont explicitement fournies. Une fois créé, vous pouvez accéder aux éléments du tableau en utilisant les méthodes de l'objet ou la syntaxe d'index de tableau standard (c'est-à-dire la notation entre crochets).

`Float64Array` est une sous-classe de la classe cachée de {{JSxRef("TypedArray")}}.

## Constructeur

- {{JSxRef("Float64Array/Float64Array", "Float64Array()")}}
  - : Crée un nouvel objet `Float64Array`.

## Propriétés statiques

_Hérite aussi des propriétés statiques de son parent {{JSxRef("TypedArray")}}._

- {{JSxRef("TypedArray/BYTES_PER_ELEMENT", "Float64Array.BYTES_PER_ELEMENT")}}
  - : Retourne une valeur numérique correspondant à la taille d'un élément. `8` dans le cas de `Float64Array`.

## Méthodes statiques

_Hérite des méthodes statiques de son parent {{JSxRef("TypedArray")}}._

## Propriétés d'instance

_Hérite aussi des propriétés d'instance de son parent {{JSxRef("TypedArray")}}._

Ces propriétés sont définies sur `Float64Array.prototype` et partagées par toutes les instances de `Float64Array`.

- {{JSxRef("TypedArray/BYTES_PER_ELEMENT", "Float64Array.prototype.BYTES_PER_ELEMENT")}}
  - : Retourne une valeur numérique correspondant à la taille d'un élément. `8` dans le cas d'un `Float64Array`.
- {{JSxRef("Object/constructor", "Float64Array.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances de `Float64Array`, la valeur initiale est le constructeur {{JSxRef("Float64Array/Float64Array", "Float64Array")}}.

## Méthodes d'instance

_Hérite des méthodes d'instance de son parent {{JSxRef("TypedArray")}}._

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
