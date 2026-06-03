---
title: Int32Array
slug: Web/JavaScript/Reference/Global_Objects/Int32Array
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Le tableau typé **`Int32Array`** représente un tableau d'entiers signés sur 8 bits. Les contenus sont initialisés à `0` sauf si des données d'initialisation sont explicitement fournies. Une fois établi, vous pouvez référencer les éléments du tableau en utilisant les méthodes de l'objet, ou en utilisant la syntaxe d'index de tableau standard (c'est-à-dire la notation entre crochets).

`Int32Array` est une sous-classe de la classe cachée {{JSxRef("TypedArray")}}.

## Constructeur

- {{JSxRef("Int32Array/Int32Array", "Int32Array()")}}
  - : Crée un nouvel objet `Int32Array`.

## Propriétés statiques

_Hérite aussi des propriétés statiques de son parent {{JSxRef("TypedArray")}}._

- {{JSxRef("TypedArray/BYTES_PER_ELEMENT", "Int32Array.BYTES_PER_ELEMENT")}}
  - : Retourne une valeur numérique de la taille d'un élément. `4` dans le cas de `Int32Array`.

## Méthodes statiques

_Hérite des méthodes statiques de son parent {{JSxRef("TypedArray")}}._

## Propriétés d'instance

_Hérite aussi des propriétés d'instance de son parent {{JSxRef("TypedArray")}}._

Ces propriétés sont définies sur `Int32Array.prototype` et partagées par toutes les instances de `Int32Array`.

- {{JSxRef("TypedArray/BYTES_PER_ELEMENT", "Int32Array.prototype.BYTES_PER_ELEMENT")}}
  - : Retourne une valeur numérique de la taille d'un élément. `4` dans le cas d'un `Int32Array`.
- {{JSxRef("Object/constructor", "Int32Array.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet d'instance. Pour les instances de `Int32Array`, la valeur initiale est le constructeur {{JSxRef("Int32Array/Int32Array", "Int32Array")}}.

## Méthodes d'instance

_Hérite des méthodes d'instance de son parent {{JSxRef("TypedArray")}}._

## Exemples

### Différentes façons de créer un objet `Int32Array`

```js
// Construction à partir d'une longueur
const int32 = new Int32Array(2);
int32[0] = 42;
console.log(int32[0]); // 42
console.log(int32.length); // 2
console.log(int32.BYTES_PER_ELEMENT); // 4

// Construction à partir d'un tableau
const x = new Int32Array([21, 31]);
console.log(x[1]); // 31

// Construction à partir d'un autre TypedArray
const y = new Int32Array(x);
console.log(y[0]); // 21

// Construction à partir d'un ArrayBuffer
const buffer = new ArrayBuffer(32);
const z = new Int32Array(buffer, 4, 4);
console.log(z.byteOffset); // 4

// Construction à partir d'un itérable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const int32FromIterable = new Int32Array(iterable);
console.log(int32FromIterable);
// Int32Array [1, 2, 3]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Int32Array` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- Le guide [des tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Guide/Typed_arrays)
- L'objet {{JSxRef("TypedArray")}}
- L'objet {{JSxRef("ArrayBuffer")}}
- L'objet {{JSxRef("DataView")}}
