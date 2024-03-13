---
title: Constructeur BigUint64Array()
slug: Web/JavaScript/Reference/Global_Objects/BigUint64Array/BigUint64Array
---

{{JSRef}}

Le **constructeur `BigUint64Array()`** permet de créer un nouveau tableau typé [`BigUint64Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigUint64Array) dont les éléments sont des entiers non-signés sur 64 bits, utilisant le boutisme de la plateforme. S'il est nécessaire de contrôler l'ordre des octets, on utilisera un objet [`DataView`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView) à la place. Lors de la construction, les éléments du tableau sont initialisés avec la valeur `0n`. Une fois le tableau construit, on peut faire référence aux éléments du tableau à l'aide des méthodes de l'objet ou en utilisant la notation avec les crochets et l'indice voulu.

## Syntaxe

```js
new BigUint64Array();
new BigUint64Array(longueur);
new BigUint64Array(typedArray);
new BigUint64Array(object);

new BigUint64Array(buffer);
new BigUint64Array(buffer, decalageOctets);
new BigUint64Array(buffer, decalageOctets, longueur);
```

### Paramètres

- `longueur`
  - : Lorsque le constructeur est appelé avec un argument `longueur`, un tableau interne de tampon de mémoire est créé avec une taille en octets de `longueur` _multipliée par `BYTES_PER_ELEMENT`_ et dont les éléments sont des zéros.
- `typedArray`
  - : Lorsque le constructeur est appelé avec un argument `tableauType`, qui peut être un tableau typé de type [`bigint`](/fr/docs/Glossary/BigInt) (comme [`BigInt64Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array)), `tableauType` est copié dans un nouveau tableau typé et chaque valeur de `tableauType` est convertie dans le type correspondant au constructeur avant d'être copiée dans le nouveau tableau. La longueur du nouveau tableau typé est égale à celle de l'argument `tableauType`.
- `object`
  - : Lorsque le constructeur est appelé avec un argument objet quelconque, un nouveau tableau typé est créé, de la même façon qu'avec un appel à la méthode `TypedArray.from()`.
- `buffer`, `decalageOctets`, `longueur`
  - : Lorsqu'il est appelé avec un argument `buffer`, et éventuellement des arguments `decalageOctets` et `longueur`, le constructeur crée une nouvelle vue sous la forme d'un tableau typé qui porte sur l'objet [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) donné par le paramètre `buffer`. Les paramètres `decalageOctets` et `longueur` indiquent l'intervalle de mémoire exposé à la vue formée par le tableau typé. Si ces deux derniers paramètres sont absents, c'est l'ensemble de `buffer` qui sera vu&nbsp;; si seul `longueur` est absent, c'est tout `buffer` qui sera vu à partir de `decalageOctets`.

## Exemples

### Plusieurs façons de créer un objet `BigUint64Array`

```js
// À partir d'une longueur
const biguint64 = new BigUint64Array(2);
biguint64[0] = 42n;
console.log(biguint64[0]); // 42n
console.log(biguint64.length); // 2
console.log(biguint64.BYTES_PER_ELEMENT); // 8

// À partir d'un tableau
const arr = new BigUint64Array([21n, 31n]);
console.log(arr[1]); // 31n

// À partir d'un autre tableau typé
const x = new BigUint64Array([21n, 31n]);
const y = new BigUint64Array(x);
console.log(y[0]); // 21n

// À partir d'un ArrayBuffer
const buffer = new ArrayBuffer(32);
const z = new BigUint64Array(buffer, 0, 4);

// À partir d'un itérable
const iterable = (function* () {
  yield* [1n, 2n, 3n];
})();
const biguint64 = new BigUint64Array(iterable);
// BigUint64Array[1n, 2n, 3n]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Typed_arrays)
- [`BigInt64Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array)
- [`DataView`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView)
