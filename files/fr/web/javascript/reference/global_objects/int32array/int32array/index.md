---
title: Constructeur Int32Array()
slug: Web/JavaScript/Reference/Global_Objects/Int32Array/Int32Array
---

{{JSRef}}

Le **constructeur `Int32Array()`** permet de créer un nouveau tableau typé [`Int32Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Int32Array) dont les éléments sont des nombres entiers signés en complément à deux, représentés sur 32 bits et utilisant le boutisme de la plateforme. S'il est nécessaire de contrôler l'ordre des octets, on utilisera un objet [`DataView`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView) à la place. Lors de la construction, les éléments du tableau sont initialisés avec la valeur `0`. Une fois le tableau construit, on peut faire référence aux éléments du tableau à l'aide des méthodes de l'objet ou en utilisant la notation avec les crochets et l'indice voulu.

## Syntaxe

```js
new Int32Array(); // apparu avec ES2017
new Int32Array(longueur);
new Int32Array(tableauType);
new Int32Array(object);
new Int32Array(buffer);
new Int32Array(buffer, decalageOctets);
new Int32Array(buffer, decalageOctets, longueur);
```

### Paramètres

- `longueur`
  - : Lorsque le constructeur est appelé avec un argument `longueur`, un tableau interne de tampon de mémoire est créé avec une taille en octets de `longueur` _multipliée par `BYTES_PER_ELEMENT`_ et dont les éléments sont des zéros.
- `tableauType`
  - : Lorsque le constructeur est appelé avec un argument `tableauType`, qui peut être un tableau typé de n'importe quel type **non** [`bigint`](/fr/docs/Glossary/BigInt) (comme `Int16Array`), `tableauType` est copié dans un nouveau tableau typé et chaque valeur de `tableauType` est convertie dans le type correspondant au constructeur avant d'être copiée dans le nouveau tableau. La longueur du nouveau tableau typé est égale à celle de l'argument `tableauType`.
- `object`
  - : Lorsque le constructeur est appelé avec un argument objet quelconque, un nouveau tableau typé est créé, de la même façon qu'avec un appel à la méthode `TypedArray.from()`.
- `buffer`, `decalageOctets`, `longueur`
  - : Lorsqu'il est appelé avec un argument `buffer`, et éventuellement des arguments `decalageOctets` et `longueur`, le constructeur crée une nouvelle vue sous la forme d'un tableau typé qui porte sur l'objet [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) donné par le paramètre `buffer`. Les paramètres `decalageOctets` et `longueur` indiquent l'intervalle de mémoire exposé à la vue formée par le tableau typé. Si ces deux derniers paramètres sont absents, c'est l'ensemble de `buffer` qui sera vu&nbsp;; si seul `longueur` est absent, c'est tout `buffer` qui sera vu à partir de `decalageOctets`.

## Exemples

### Plusieurs façons de créer un objet `Int32Array`

```js
// À partir d'une longueur
const int32 = new Int32Array(2);
int32[0] = 42;
console.log(int32[0]); // 42
console.log(int32.length); // 2
console.log(int32.BYTES_PER_ELEMENT); // 4

// À partir d'un tableau
const arr = new Int32Array([21, 31]);
console.log(arr[1]); // 31

// À partir d'un autre tableau typé
const x = new Int32Array([21, 31]);
const y = new Int32Array(x);
console.log(y[0]); // 21

// À partir d'un ArrayBuffer
const buffer = new ArrayBuffer(16);
const z = new Int32Array(buffer, 0, 4);

// À partir d'un itérable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const int32_from_iterable = new Int32Array(iterable);
// Int32Array[1, 2, 3]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

### Notes de compatibilité

À partir d'ECMAScript 2015, le constructeur de `Int32Array` doit être appelé avec l'opérateur [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new). Utiliser le constructeur `Int32Array` comme une fonction, c'est-à-dire sans le mot-clé `new`, déclenchera désormais une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError).

```js example-bad
const dv = Int32Array([1, 2, 3]);
// TypeError: calling a builtin Int32Array constructor
// without new is forbidden
```

```js example-good
const dv = new Int32Array([1, 2, 3]);
```

## Voir aussi

- [Prothèse d'émulation pour `Int32Array` avec la bibliothèque `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Typed_arrays)
- [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
- [`DataView`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView)
