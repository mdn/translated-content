---
title: Constructeur Uint8ClampedArray()
slug: Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray/Uint8ClampedArray
translation_of: Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray/Uint8ClampedArray
browser-compat: javascript.builtins.Uint8ClampedArray.Uint8ClampedArray
---
{{JSRef}}

Le constructeur **`Uint8ClampedArray()`** permet de créer un tableau typé contenant des entiers non-signés sur 8 bits, dont la valeur est ramenée entre 0 et 255. Une valeur indiquée, en dehors de cet intervalle, sera écrêtée. Une valeur non entière sera arrondie à l'entier le plus proche. Le contenu d'un tel tableau est initialisé avec des `0`. Une fois le tableau construit, on peut faire référence aux éléments du tableau à l'aide des méthodes de l'objet ou en utilisant la notation usuelle pour les tableaux avec les crochets.

## Syntaxe

```js
new Uint8ClampedArray(); // apparu avec ES2017
new Uint8ClampedArray(longueur);
new Uint8ClampedArray(tableauType);
new Uint8ClampedArray(objet);

new Uint8ClampedArray(buffer);
new Uint8ClampedArray(buffer, decalageOctets);
new Uint8ClampedArray(buffer, decalageOctets, longueur);
```

### Paramètres

- `longueur`
  - : Lorsque le constructeur est invoqué avec un argument indiquant une longueur, un tampon de mémoire interne tabulé est créé, dont la taille en octets est `longueur` _multipliée par `BYTES_PER_ELEMENT`_, et qui contient des zéros.
- `tableauType`
  - : Lorsque le constructeur est invoqué avec un tableau typé comme argument (tout tableau typé en dehors des tableaux typés [`bigint`](/fr/docs/Glossary/BigInt) tel que [`Int32Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)), ce tableau typé est copié dans un nouveau tableau typé. Chaque valeur de `tableauType` est convertie dans le type correspondant au constructeur avant d'être copiée dans le nouveau tableau. La longueur du nouveau tableau typé sera la même que celle de `tableauType`.
- `objet`
  - : Lorsque le constructeur est appelé avec un objet comme argument, le nouveau tableau typé est créé avec la méthode `TypedArray.from()`.
- `buffer`, `decalageOctets`, `longueur`
  - : Lorsque le constructeur est invoqué avec un tampon, éventuellement un décalage en octets et une longueur, une nouvelle vue en tableau typé est créée qui reflète l'objet [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) correspondant. Les paramètres `decalageOctets` et `longueur` indique l'intervalle de mémoire exposé à la vue. Si ces deux paramètres sont absents, c'est l'intégralité du tampon qui est vue. Si la longueur est absente, c'est la portion du tampon, après le décalage indiqué, qui est vue.

## Exemples

### Différentes façons de créer un objet `Uint8ClampedArray`

```js
// À partir d'une longueur
let uintc8 = new Uint8ClampedArray(2);
uintc8[0] = 42;
uintc8[1] = 1337;
console.log(uintc8[0]); // 42
console.log(uintc8[1]); // 255 (écrétée)
console.log(uintc8.length); // 2
console.log(uintc8.BYTES_PER_ELEMENT); // 1

// À partir d'un tableau
let arr = new Uint8ClampedArray([21,31]);
console.log(arr[1]); // 31

// À partir d'un autre tableau typé
let x = new Uint8ClampedArray([21, 31]);
let y = new Uint8ClampedArray(x);
console.log(y[0]); // 21

// À partir d'un ArrayBuffer
let buffer = new ArrayBuffer(8);
let z = new Uint8ClampedArray(buffer, 1, 4);

// À partir d'un itérable
let iterable = function*(){ yield* [1,2,3]; }();
let uintc8 = new Uint8ClampedArray(iterable);
// Uint8ClampedArray[1, 2, 3]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

### Notes de compatibilité

À partir d'ECMAScript 2015, le constructeur `Uint8ClampedArray` doit être appelé avec l'opérateur [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new). Invoquer le constructeur `Uint8ClampedArray` comme une fonction, sans `new`, déclenchera une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError).

```js example-bad
let dv = Uint8ClampedArray([1, 2, 3]);
// TypeError: calling a builtin Uint8ClampedArray
// constructor without new is forbidden
```

```js example-good
let dv = new Uint8ClampedArray([1, 2, 3]);
```

## Voir aussi

- [Une prothèse d'émulation (<i lang="en">polyfill</i>) pour `Uint8ClampedArray` avec `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Typed_arrays)
- [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
- [`DataView`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView)
