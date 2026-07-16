---
title: Int16Array
slug: Web/JavaScript/Reference/Global_Objects/Int16Array
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Le tableau typé **`Int16Array`** représente un tableau d'entiers signés sur 8 bits. Les contenus sont initialisés à `0` sauf si des données d'initialisation sont explicitement fournies. Une fois établi, vous pouvez référencer les éléments du tableau en utilisant les méthodes de l'objet, ou en utilisant la syntaxe d'index de tableau standard (c'est-à-dire la notation entre crochets).

`Int16Array` est une sous-classe de la classe cachée {{JSxRef("TypedArray")}}.

## Constructeur

- {{JSxRef("Int16Array/Int16Array", "Int16Array()")}}
  - : Crée un nouvel objet `Int16Array`.

## Propriétés statiques

_Hérite aussi des propriétés statiques de son parent {{JSxRef("TypedArray")}}._

- {{JSxRef("TypedArray/BYTES_PER_ELEMENT", "Int16Array.BYTES_PER_ELEMENT")}}
  - : Retourne une valeur numérique de la taille d'un élément. `2` dans le cas de `Int16Array`.

## Méthodes statiques

_Hérite des méthodes statiques de son parent {{JSxRef("TypedArray")}}._

## Propriétés d'instance

_Hérite aussi des propriétés d'instance de son parent {{JSxRef("TypedArray")}}._

Ces propriétés sont définies sur `Int16Array.prototype` et partagées par toutes les instances de `Int16Array`.

- {{JSxRef("TypedArray/BYTES_PER_ELEMENT", "Int16Array.prototype.BYTES_PER_ELEMENT")}}
  - : Retourne une valeur numérique de la taille d'un élément. `2` dans le cas d'un `Int16Array`.
- {{JSxRef("Object/constructor", "Int16Array.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet d'instance. Pour les instances de `Int16Array`, la valeur initiale est le constructeur {{JSxRef("Int16Array/Int16Array", "Int16Array")}}.

## Méthodes d'instance

_Hérite des méthodes d'instance de son parent {{JSxRef("TypedArray")}}._

## Exemples

### Différentes façons de créer un objet `Int16Array`

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
