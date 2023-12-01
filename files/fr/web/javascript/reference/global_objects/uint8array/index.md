---
title: Uint8Array
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array
---

{{JSRef}}

Le tableau typé **`Uint8Array`** représente un tableau d'entiers non signés, représentés sur 8 bits. Les éléments du tableau sont initialisés à `0`. Une fois que le tableau est construit, on peut manipuler ses différents éléments grâce aux méthodes de l'objet ou grâce à la notation usuelle (avec les crochets).

## Constructeur

- [`Uint8Array()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/Uint8Array)
  - : Crée un nouvel objet `Uint8Array`.

## Propriétés statiques

- [`Uint8Array.BYTES_PER_ELEMENT`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT)
  - : Cette propriété renvoie la taille d'un élément du tableau, en octets. En l'occurrence, pour `Uint8Array` ce sera `1`.
- [`Uint8Array.name`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/name)
  - : Cette propriété renvoie la chaîne de caractères correspondant au nom du constructeur. Pour `Uint8Array` ce sera&nbsp;: "`Uint8Array`".

## Méthodes statiques

- [`Uint8Array.from()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from)
  - : Cette méthode permet de créer un nouvel objet `Uint8Array` à partir d'un itérable ou d'un objet semblable à un tableau. Voir aussi [`Array.from()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/from).
- [`Uint8Array.of()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of)
  - : Cette méthode permet de créer un nouvel objet `Uint8Array` à partir d'un nombre variable d'arguments. Voir aussi [`Array.of()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/of).

## Propriétés des instances

- [`Uint8Array.prototype.buffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/buffer)
  - : Cette propriété renvoie l'objet [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) référencé par l'objet `Uint8Array`. Elle est déterminée lors de la construction et est accessible uniquement en **lecture seule**.
- [`Uint8Array.prototype.byteLength`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength)
  - : Cette propriété renvoie la longueur, exprimée en octets, de l'objet `Uint8Array` à partir du début de l'objet [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) correspondant. Elle est déterminée lors de la construction et est accessible uniquement en **lecture seule**.
- [`Uint8Array.prototype.byteOffset`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset)
  - : Cette propriété renvoie le décalage, en nombre d'octets, entre le début du tableau typé courant et du début du [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) correspondant. Elle est déterminée lors de la construction et est accessible uniquement en **lecture seule**.
- [`Uint8Array.prototype.length`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length)
  - : Cette propriété renvoie le nombre d'éléments contenus dans le tableau `Uint8Array`. Elle est déterminée lors de la construction et est accessible uniquement en **lecture seule**.

## Méthodes des instances

- [`Uint8Array.prototype.copyWithin()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin)
  - : Copie une suite d'éléments d'un tableau dans le tableau. Voir également [`Array.prototype.copyWithin()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin).
- [`Uint8Array.prototype.entries()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/entries)
  - : Renvoie un nouvel _itérateur de tableau_ qui contient les paires clé/valeur pour chaque indice du tableau. Voir également [`Array.prototype.entries()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/entries).
- [`Uint8Array.prototype.every()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/every)
  - : Teste si l'ensemble des éléments du tableau remplissent une certaine condition donnée par une fonction de test. Voir également [`Array.prototype.every()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/every).
- [`Uint8Array.prototype.fill()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill)
  - : Remplit les éléments d'un tableau avec une certaine valeur pour les éléments compris entre un indice de début et un indice de fin. Voir également [`Array.prototype.fill()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/fill).
- [`Uint8Array.prototype.filter()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter)
  - : Crée un nouveau tableau dont tous les éléments proviennent de ce tableau et respectent une condition fournie par une fonction de test. Voir également [`Array.prototype.filter()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).
- [`Uint8Array.prototype.find()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/find)
  - : Renvoie une valeur trouvée dans le tableau s'il existe un élément du tableau qui satisfait une condition fournie par une fonction de test, s'il n'y a pas de tel élément `undefined` sera renvoyé. Voir également [`Array.prototype.find()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find).
- [`Uint8Array.prototype.findIndex()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex)
  - : Renvoie l'indice d'un élément qui satisfait une condition fournie par une fonction de test, si aucun élément ne remplit la condition `-1` sera renvoyé. Voir également [`Array.prototype.findIndex()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex).
- [`Uint8Array.prototype.forEach()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach)
  - : Appelle une fonction pour chacun des éléments du tableau. Voir également [`Array.prototype.forEach()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).
- [`Uint8Array.prototype.includes()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes)
  - : Détermine si le tableau typé contient un élément donné. Cette méthode renvoie `true` ou `false` selon le cas de figure. Voir également [`Array.prototype.includes()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/includes).
- [`Uint8Array.prototype.indexOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf)
  - : Renvoie le premier indice (le plus petit) d'un élément du tableau qui est égal à la valeur fournie. Si aucun élément ne correspond, la valeur `-1` sera renvoyée. Voir également [`Array.prototype.indexOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf).
- [`Uint8Array.prototype.join()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/join)
  - : Fusionne l'ensemble des éléments du tableau en une chaîne de caractères. Voir également [`Array.prototype.join()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/join).
- [`Uint8Array.prototype.keys()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/keys)
  - : Renvoie un nouvel _itérateur de tableau_ qui contient les clés de chaque indice du tableau. Voir également [`Array.prototype.keys()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/keys).
- [`Uint8Array.prototype.lastIndexOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf)
  - : Renvoie le dernier indice (le plus élevé) d'un élément du tableau qui est égal à la valeur fournie. Si aucun élément ne correspond, la valeur `-1` sera renvoyée. Voir également [`Array.prototype.lastIndexOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf).
- [`Uint8Array.prototype.map()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map)
  - : Crée un nouveau tableau dont les éléments sont les images des éléments du tableau courant par une fonction donnée. Voir également [`Array.prototype.map()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map).
- [`Uint8Array.prototype.reduce()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduce)
  - : Applique une fonction sur un accumulateur et chaque élément du tableau (de gauche à droite) afin de réduire le tableau en une seule valeur. Voir également [`Array.prototype.reduce()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).
- [`Uint8Array.prototype.reduceRight()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight)
  - : Applique une fonction sur un accumulateur et chaque élément du tableau (de droite à gauche) afin de réduire le tableau en une seule valeur. Voir également [`Array.prototype.reduceRight()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight).
- [`Uint8Array.prototype.reverse()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reverse)
  - : Inverse l'ordre des éléments d'un tableau. Le premier élément du tableau devient le dernier et le dernier devient le premier (et ainsi de suite). Voir également [`Array.prototype.reverse()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse).
- [`Uint8Array.prototype.set()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set)
  - : Enregistre plusieurs valeurs dans le tableau typé à partir des valeurs d'un autre tableau.
- [`Uint8Array.prototype.slice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/slice)
  - : Extrait un fragment d'un tableau et renvoie ce fragment. Voir également [`Array.prototype.slice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/slice).
- [`Uint8Array.prototype.some()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/some)
  - : Renvoie `true` si au moins un des éléments remplit une condition donnée par une fonction de test. Voir également [`Array.prototype.some()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/some).
- [`Uint8Array.prototype.sort()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/sort)
  - : Trie les éléments du tableau et renvoie ce tableau. Voir également [`Array.prototype.sort()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).
- [`Uint8Array.prototype.subarray()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray)
  - : Renvoie un nouvel objet `Uint8Array` qui est le fragment du tableau courant, entre les indices de début et de fin donnés.
- [`Uint8Array.prototype.values()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/values)
  - : Renvoie un nouvel _itérateur de tableau_ qui contient les valeurs correspondantes à chaque indice du tableau. Voir également [`Array.prototype.values()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/values).
- [`Uint8Array.prototype.toLocaleString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString)
  - : Renvoie une chaîne de caractères localisée qui représente le tableau et ses éléments. Voir également [`Array.prototype.toLocaleString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString).
- [`Uint8Array.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString)
  - : Renvoie une chaîne de caractères qui représente le tableau et ses éléments. Voir également [`Array.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/toString).
- [`Uint8Array.prototype[@@iterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator)
  - : Renvoie un nouvel _itérateur de tableau_ qui contient les valeurs correspondantes à chaque indice du tableau.

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

## Voir aussi

- [Une prothèse d'émulation (<i lang="en">polyfill</i>) pour `Uint8ClampedArray` avec `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Typed_arrays)
- [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
- [`DataView`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView)
