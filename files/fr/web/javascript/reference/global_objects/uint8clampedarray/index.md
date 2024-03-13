---
title: Uint8ClampedArray
slug: Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray
---

{{JSRef}}

Le tableau typé **`Uint8ClampedArray`** permet de représenter un tableau d'entiers non signés représentés sur 8 bits, dont les valeurs sont ramenées entre 0 et 255. Si une valeur non-entière est fournie, elle sera arrondie à l'entier le plus proche. Les éléments du tableau sont initialisés à `0`. Une fois que le tableau est construit, on peut manipuler ses différents éléments grâce aux méthodes de l'objet ou grâce à la notation usuelle (avec les crochets).

## Constructeur

- [`Uint8ClampedArray()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray/Uint8ClampedArray)
  - : Crée un nouvel objet `Uint8ClampedArray`.

## Propriétés statiques

- [`Uint8ClampedArray.BYTES_PER_ELEMENT`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT)
  - : Cette propriété renvoie la taille d'un élément du tableau, en octets. En l'occurrence, pour `Uint8ClampedArray` ce sera `1`.
- [`Uint8ClampedArray.name`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/name)
  - : Cette propriété renvoie la chaîne de caractères correspondant au nom du constructeur. Pour `Uint8ClampedArray` ce sera&nbsp;: "`Uint8ClampedArray`".

## Méthodes statiques

- [`Uint8ClampedArray.from()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from)
  - : Cette méthode permet de créer un nouvel objet `Uint8ClampedArray` à partir d'un itérable ou d'un objet semblable à un tableau. Voir aussi [`Array.from()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/from).
- [`Uint8ClampedArray.of()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of)
  - : Cette méthode permet de créer un nouvel objet `Uint8ClampedArray` à partir d'un nombre variable d'arguments. Voir aussi [`Array.of()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/of).

## Propriétés des instances

- [`Uint8ClampedArray.prototype.buffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/buffer)
  - : Cette propriété renvoie l'objet [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) référencé par l'objet `Uint8ClampedArray`. Elle est déterminée lors de la construction et est accessible uniquement en **lecture seule**.
- [`Uint8ClampedArray.prototype.byteLength`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength)
  - : Cette propriété renvoie la longueur, exprimée en octets, de l'objet `Uint8ClampedArray` à partir du début de l'objet [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) correspondant. Elle est déterminée lors de la construction et est accessible uniquement en **lecture seule**.
- [`Uint8ClampedArray.prototype.byteOffset`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset)
  - : Cette propriété renvoie le décalage, en nombre d'octets, entre le début du tableau typé courant et du début du [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) correspondant. Elle est déterminée lors de la construction et est accessible uniquement en **lecture seule**.
- [`Uint8ClampedArray.prototype.length`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length)
  - : Cette propriété renvoie le nombre d'éléments contenus dans le tableau `Uint8ClampedArray`. Elle est déterminée lors de la construction et est accessible uniquement en **lecture seule**.

## Méthodes des instances

- [`Uint8ClampedArray.prototype.copyWithin()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin)
  - : Copie une suite d'éléments d'un tableau dans le tableau. Voir également [`Array.prototype.copyWithin()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin).
- [`Uint8ClampedArray.prototype.entries()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/entries)
  - : Renvoie un nouvel _itérateur de tableau_ qui contient les paires clé/valeur pour chaque indice du tableau. Voir également [`Array.prototype.entries()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/entries).
- [`Uint8ClampedArray.prototype.every()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/every)
  - : Teste si l'ensemble des éléments du tableau remplissent une certaine condition donnée par une fonction de test. Voir également [`Array.prototype.every()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/every).
- [`Uint8ClampedArray.prototype.fill()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill)
  - : Remplit les éléments d'un tableau avec une certaine valeur pour les éléments compris entre un indice de début et un indice de fin. Voir également [`Array.prototype.fill()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/fill).
- [`Uint8ClampedArray.prototype.filter()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter)
  - : Crée un nouveau tableau dont tous les éléments proviennent de ce tableau et respectent une condition fournie par une fonction de test. Voir également [`Array.prototype.filter()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).
- [`Uint8ClampedArray.prototype.find()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/find)
  - : Renvoie une valeur trouvée dans le tableau s'il existe un élément du tableau qui satisfait une condition fournie par une fonction de test, s'il n'y a pas de tel élément `undefined` sera renvoyé. Voir également [`Array.prototype.find()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find).
- [`Uint8ClampedArray.prototype.findIndex()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex)
  - : Renvoie l'indice d'un élément qui satisfait une condition fournie par une fonction de test, si aucun élément ne remplit la condition `-1` sera renvoyé. Voir également [`Array.prototype.findIndex()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex).
- [`Uint8ClampedArray.prototype.forEach()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach)
  - : Appelle une fonction pour chacun des éléments du tableau. Voir également [`Array.prototype.forEach()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).
- [`Uint8ClampedArray.prototype.includes()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes)
  - : Détermine si le tableau typé contient un élément donné. Cette méthode renvoie `true` ou `false` selon le cas de figure. Voir également [`Array.prototype.includes()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/includes).
- [`Uint8ClampedArray.prototype.indexOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf)
  - : Renvoie le premier indice (le plus petit) d'un élément du tableau qui est égal à la valeur fournie. Si aucun élément ne correspond, la valeur `-1` sera renvoyée. Voir également [`Array.prototype.indexOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf).
- [`Uint8ClampedArray.prototype.join()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/join)
  - : Fusionne l'ensemble des éléments du tableau en une chaîne de caractères. Voir également [`Array.prototype.join()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/join).
- [`Uint8ClampedArray.prototype.keys()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/keys)
  - : Renvoie un nouvel _itérateur de tableau_ qui contient les clés de chaque indice du tableau. Voir également [`Array.prototype.keys()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/keys).
- [`Uint8ClampedArray.prototype.lastIndexOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf)
  - : Renvoie le dernier indice (le plus élevé) d'un élément du tableau qui est égal à la valeur fournie. Si aucun élément ne correspond, la valeur `-1` sera renvoyée. Voir également [`Array.prototype.lastIndexOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf).
- [`Uint8ClampedArray.prototype.map()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map)
  - : Crée un nouveau tableau dont les éléments sont les images des éléments du tableau courant par une fonction donnée. Voir également [`Array.prototype.map()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map).
- [`Uint8ClampedArray.prototype.reduce()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduce)
  - : Applique une fonction sur un accumulateur et chaque élément du tableau (de gauche à droite) afin de réduire le tableau en une seule valeur. Voir également [`Array.prototype.reduce()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).
- [`Uint8ClampedArray.prototype.reduceRight()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight)
  - : Applique une fonction sur un accumulateur et chaque élément du tableau (de droite à gauche) afin de réduire le tableau en une seule valeur. Voir également [`Array.prototype.reduceRight()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight).
- [`Uint8ClampedArray.prototype.reverse()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reverse)
  - : Inverse l'ordre des éléments d'un tableau. Le premier élément du tableau devient le dernier et le dernier devient le premier (et ainsi de suite). Voir également [`Array.prototype.reverse()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse).
- [`Uint8ClampedArray.prototype.set()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set)
  - : Enregistre plusieurs valeurs dans le tableau typé à partir de valeurs d'un autre tableau.
- [`Uint8ClampedArray.prototype.slice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/slice)
  - : Extrait un fragment d'un tableau et renvoie ce fragment. Voir également [`Array.prototype.slice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/slice).
- [`Uint8ClampedArray.prototype.some()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/some)
  - : Renvoie `true` si au moins un des éléments remplit une condition donnée par une fonction de test. Voir également [`Array.prototype.some()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/some).
- [`Uint8ClampedArray.prototype.sort()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/sort)
  - : Trie les éléments du tableau et renvoie ce tableau. Voir également [`Array.prototype.sort()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).
- [`Uint8ClampedArray.prototype.subarray()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray)
  - : Renvoie un nouvel objet `Uint8ClampedArray` qui est le fragment du tableau courant, entre les indices de début et de fin donnés.
- [`Uint8ClampedArray.prototype.values()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/values)
  - : Renvoie un nouvel _itérateur de tableau_ qui contient les valeurs correspondantes à chaque indice du tableau. Voir également [`Array.prototype.values()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/values).
- [`Uint8ClampedArray.prototype.toLocaleString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString)
  - : Renvoie une chaîne de caractères localisée qui représente le tableau et ses éléments. Voir également [`Array.prototype.toLocaleString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString).
- [`Uint8ClampedArray.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString)
  - : Renvoie une chaîne de caractères qui représente le tableau et ses éléments. Voir également [`Array.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/toString).
- [`Uint8ClampedArray.prototype[@@iterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator)
  - : Renvoie un nouvel _itérateur de tableau_ qui contient les valeurs correspondantes à chaque indice du tableau.

## Exemples

### Différentes façons de créer un objet `Uint8ClampedArray`

```js
// Construction à partir d'une longueur
let uintc8 = new Uint8ClampedArray(2);
uintc8[0] = 42;
uintc8[1] = 1337;
console.log(uintc8[0]); // 42
console.log(uintc8[1]); // 255 (valeur ramenée à 255)
console.log(uintc8.length); // 2
console.log(uintc8.BYTES_PER_ELEMENT); // 1

// Construction à partir d'un tableau
let arr = new Uint8ClampedArray([21, 31]);
console.log(arr[1]); // 31

// Construction à partir d'un autre TypedArray
let x = new Uint8ClampedArray([21, 31]);
let y = new Uint8ClampedArray(x);
console.log(y[0]); // 21

// Construction à partir d'un ArrayBuffer
let buffer = new ArrayBuffer(8);
let z = new Uint8ClampedArray(buffer, 1, 4);

// Construction à partir d'un itérable
let iterable = (function* () {
  yield* [1, 2, 3];
})();
let uintc8 = new Uint8ClampedArray(iterable);
// Uint8ClampedArray[1, 2, 3]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Une prothèse d'émulation (<i lang="en">polyfill</i>) pour `Uint8ClampedArray` avec `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Typed_arrays)
- [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
- [`DataView`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView)
