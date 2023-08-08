---
title: Constructeur Uint8Array()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/Uint8Array
---

{{JSRef}}

Le constructeur **`Uint8Array()`** crée un tableau typé contenant des entiers non-signés sur 8 bits. Le contenu de ces éléments est initialisé à `0`. Une fois le tableau construit, on peut faire référence aux éléments du tableau à l'aide des méthodes de l'objet ou en utilisant la notation usuelle pour les tableaux avec les crochets.

## Syntaxe

```js
new Uint8Array(); // apparu avec ES2017
new Uint8Array(longueur);
new Uint8Array(tableauType);
new Uint8Array(objet);

new Uint8Array(buffer);
new Uint8Array(buffer, decalageOctets);
new Uint8Array(buffer, decalageOctets, longueur);
```

### Paramètres

- `longueur`
  - : Lorsque le constructeur est invoqué avec un argument indiquant une longueur, un tampon de mémoire interne tabulé est créé, dont la taille en octets est `longueur` _multipliée par `BYTES_PER_ELEMENT`_, et qui contient des zéros.
- `tableauType`
  - : Lorsque le constructeur est invoqué avec un tableau typé comme argument (tout tableau typé en dehors des tableaux typés [`bigint`](/fr/docs/Glossary/BigInt) tel que `Int32Array`), ce tableau typé est copié dans un nouveau tableau typé. Chaque valeur de `tableauType` est convertie dans le type correspondant au constructeur avant d'être copiée dans le nouveau tableau. La longueur du nouveau tableau typé sera la même que celle de `tableauType`.
- `objet`
  - : Lorsque le constructeur est appelé avec un objet comme argument, le nouveau tableau typé est créé avec la méthode `TypedArray.from()`.
- `buffer`, `decalageOctets`, `longueur`
  - : Lorsque le constructeur est invoqué avec un tampon, éventuellement un décalage en octets et une longueur, une nouvelle vue en tableau typé est créée qui reflète l'objet [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) correspondant. Les paramètres `decalageOctets` et `longueur` indique l'intervalle de mémoire exposé à la vue. Si ces deux paramètres sont absents, c'est l'intégralité du tampon qui est vue. Si la longueur est absente, c'est la portion du tampon, après le décalage indiqué, qui est vue.

## Exemples

### Différentes façons de construire un objet `Uint8Array`

```js
// Construction à partir d'une longueur
let uint8 = new Uint8Array(2);
uint8[0] = 42;
console.log(uint8[0]); // 42
console.log(uint8.length); // 2
console.log(uint8.BYTES_PER_ELEMENT); // 1

// Construction à partir d'un tableau
let arr = new Uint8Array([21, 31]);
console.log(arr[1]); // 31

// Construction à partir d'un tableau typé
let x = new Uint8Array([21, 31]);
let y = new Uint8Array(x);
console.log(y[0]); // 21

// Construction à partir d'un ArrayBuffer
let buffer = new ArrayBuffer(8);
let z = new Uint8Array(buffer, 1, 4);

// Construction à partir d'un itérable
let iterable = (function* () {
  yield* [1, 2, 3];
})();
let uint8 = new Uint8Array(iterable);
// Uint8Array[1, 2, 3]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Notes de compatibilité

À partir d'ECMAScript 2015 (ES6), `Uint8Array` doit être utilisé avec l'opérateur [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new). Appeler un constructeur `Uint8Array` comme une fonction, sans `new`, provoquera une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError).

```js example-bad
let dv = Uint8Array([1, 2, 3]);
// TypeError: calling a builtin Uint8Array constructor
// without new is forbidden
```

```js example-good
let dv = new Uint8Array([1, 2, 3]);
```

## Voir aussi

- [Une prothèse d'émulation (<i lang="en">polyfill</i>) pour `Uint8ClampedArray` avec `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Typed_arrays)
- [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
- [`DataView`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView)
