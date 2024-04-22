---
title: TypedArray
slug: Web/JavaScript/Reference/Global_Objects/TypedArray
---

{{JSRef}}

Un objet **_TypedArray_** décrit une vue organisée à la façon d'un tableau pour manipuler [un tampon (_buffer_) de données binaires](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer). `TypedArray` n'est pas une propriété globale, il n'existe pas non plus de constructeur `TypedArray`. En revanche, plusieurs propriétés globales existent et leurs valeurs permettent de construire des tableaux typés (<i lang="en">typed arrays</i>) avec différents types de données. Ceux-ci sont listés ci-après. Les pages suivantes permettent de décrire les propriétés et méthodes qui peuvent être utilisées sur les différents tableaux typés.

{{EmbedInteractiveExample("pages/js/typedarray-constructor.html")}}

## Description

ECMAScript 2015 (ES6) définit un constructeur `%TypedArray%` qui est un `[[Prototype]]` de tous les constructeurs _TypedArray_. Ce constructeur n'est pas accessible directement. Il n'existe pas de `%TypedArray%` global ou de propriété `TypedArray`. Il est uniquement accessible via `Object.getPrototypeOf(Int8Array.prototype)` ou avec les méthodes semblables. L'ensemble des différents constructeurs *TypedArray*s hérite de propriétés communes de la fonction `%TypedArray%`. De plus, tous les prototypes des tableaux typés (_TypedArray_`.prototype`) ont `%TypedArray%.prototype` pour `[[Prototype]]`.

Lorsqu'on crée une instance de _TypedArray_ (par exemple, une instance de `Int8Array` ou autre), un tampon de mémoire tableau est créé en interne par le moteur (si un objet `ArrayBuffer` est passé en argument, c'est celui-ci qui est utilisé). C'est l'adresse de cette mémoire tampon qui est sauvegardée comme une propriété interne à l'objet. Toutes les méthodes de `%TypedArray%.prototype` utiliseront ensuite cet espace pour les opérations.

### Objets _TypedArray_

| Type                                                                                      | Intervalle de valeurs                                             | Taille en octets | Description                                                                                                | Type Web IDL          | Type C équivalent               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------- | --------------------- | ------------------------------- |
| [`Int8Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Int8Array)                 | `-128` à `127`                                                    | 1                | Entier sur 8 bits signé en complément à deux                                                               | `byte`                | `int8_t`                        |
| [`Uint8Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)               | `0` à `255`                                                       | 1                | Entier non-signé sur 8 bits                                                                                | `octet`               | `uint8_t`                       |
| [`Uint8ClampedArray`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray) | `0` à `255`                                                       | 1                | Entier non-signé sur 8 bits (écrété)                                                                       | `octet`               | `uint8_t`                       |
| [`Int16Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Int16Array)               | `-32768` à `32767`                                                | 2                | Entier sur 16 bits, signé en complément à deux                                                             | `short`               | `int16_t`                       |
| [`Uint16Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array)             | `0` à `65535`                                                     | 2                | Entier non-signé sur 16 bits                                                                               | `unsigned short`      | `uint16_t`                      |
| [`Int32Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)               | `-2147483648` à `2147483647`                                      | 4                | Entier sur 32 bits, signé en complément à deux                                                             | `long`                | `int32_t`                       |
| [`Uint32Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array)             | `0` à `4294967295`                                                | 4                | Entier sur 32 bits non-signé                                                                               | `unsigned long`       | `uint32_t`                      |
| [`Float32Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)           | `-3.4E38` à `3.4E38` avec `1.2E-38` le plus petit nombre positif  | 4                | Nombre flottant sur 32 bits au format IEEE avec 7 chiffres significatifs (par exemple `1.234567`)          | `unrestricted float`  | `float`                         |
| [`Float64Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Float64Array)           | `-1.8E308` à `1.8E308` avec `5E-324` le plus petit nombre positif | 8                | Nombre flottant sur 64 bits au format IEEE avec 16 chiffres significatifs (par exemple `1.23456789012345`) | `unrestricted double` | `double`                        |
| [`BigInt64Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array)         | `-2^63` à `2^63 - 1`                                              | 8                | Entier sur 64 bits, signé en complément à deux integer                                                     | `bigint`              | `int64_t (signed long long)`    |
| [`BigUint64Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigUint64Array)       | `0` à `2^64 - 1`                                                  | 8                | Entier sur 64 bits non-signé                                                                               | `bigint`              | `uint64_t (unsigned long long)` |

## Constructeur

Cet objet ne peut pas être instancié directement. On créera plutôt une instance d'un tableau typé d'un type donné, tel que [`Int8Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Int8Array) ou
[`BigInt64Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array). Ces différents types partagent une syntaxe commune pour leur constructeur&nbsp;:

```js
new TypedArray();
new TypedArray(longueur);
new TypedArray(tableauType);
new TypedArray(objet);

new TypedArray(buffer);
new TypedArray(buffer, decalageOctet);
new TypedArray(buffer, decalageOctet, longueur);
```

Où _TypedArray_ est un constructeur donné pour un type de tableau typé existant.

### Paramètres

- `longueur`
  - : Lorsque le constructeur est appelé avec un argument `longueur`, un tampon de mémoire interne sous forme de tableau est créé et dont la taille est `longueur` multipliée par `BYTES_PER_ELEMENT` octets. Chaque élément du tableau contient des zéros.
- `tableauType`
  - : Lorsque le constructeur est appelé avec un argument `tableauType`, `tableauType` est copié dans un nouveau tableau typé. Pour un tableay typé **dont le type n'est pas [`BigInt64Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array)**, le paramètre peut être un objet de n'importe quel type de tableau typé en dehors de `BigInt64Array` (par exemple [`Int32Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)). L'inverse est aussi valable, pour obtenir un tableau typé `BigInt64Array`, le paramètre devra nécessairement être de type `BigInt64Array`.
    Chaque valeur contenue dans `tableauType` est convertie dans le type correspondant au constructeur avant d'être copiée dans le nouveau tableau. La longueur du nouveau tableau typé sera la même que celle de l'argument `tableauType`.
- `objet`
  - : Lorsque le constructeur est appelé avec un objet comme argument, un nouveau tableau typé est créé à la façon de la méthode `TypedArray.from()`.
- `buffer`, `decalageOctet`, `longueur`
  - : Lorsque le constructeur est appelé avec un tampon de mémoire `buffer`, et éventuellement des arguments `decalageOctet` et `longueur`, une nouvelle vue sous la formule d'un tableau typé est créé sur l'objet [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) porté par le premier argument. Les paramètres `decalageOctet` et `longueur` indique l'intervalle de mémoire exposée à la vue du tableau typé. Si les deux paramètres sont absents, c'est tout le tampon qui est vu. Si seul le paramètre `longueur` est absent, c'est le reste du tampon qui est vu (à partir de `decalageOctet`).

## Propriétés statiques

- [`TypedArray.BYTES_PER_ELEMENT`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT)
  - : Renvoie un nombre indiquant la taille, exprimée en octets, de chaque élément du tableau typé.
- [`TypedArray.name`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/name)
  - : Renvoie la chaîne de caractères correspondant au nom du constructeur (par exemple, `"Int8Array"`).
- [`get TypedArray[@@species]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@species)
  - : La fonction de construction utilisée pour créer des objets dérivés.
- `TypedArray`
  - : Le prototype pour les objes `TypedArray`.

## Méthodes statiques

- [`TypedArray.from()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from)
  - : Crée un nouveau tableau typé à partir d'un objet itérable ou semblable à un tableau. Voir aussi [`Array.from()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/from).
- [`TypedArray.of()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of)
  - : Crée un nouveau tableau typé avec un nombre variable d'arguments. Voir aussi [`Array.of()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/of).

## Propriétés des instances

- [`TypedArray.prototype.buffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/buffer)
  - : Renvoie l'objet [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) référencé par le tableau typé. Il est déterminé au moment de la construction et est donc uniquement accessible **en lecture seule**.
- [`TypedArray.prototype.byteLength`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength)
  - : Renvoie la longueur, exprimée en octets, du tableau typé. Elle est déterminée au moment de la construction et est donc uniquement accessible **en lecture seule**.
- [`TypedArray.prototype.byteOffset`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset)
  - : Renvoie le décalage, exprimé en octet, de la vue fournie par le tableau typé par rapport au début de l'objet [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) correspondant. Il est déterminé au moment de la construction et est donc uniquement accessible **en lecture seule**.
- [`TypedArray.prototype.length`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length)
  - : Renvoie le nombre d'éléments contenus dans le tableau typé. Il est déterminé au moment de la construction et est donc uniquement accessible **en lecture seule**.

## Méthodes des instances

- [`TypedArray.prototype.at()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/at)
  - : Prend une valeur entière comme argument et renvoie l'élément situé à cet indice. Il est possible d'utiliser des indices négatifs, le tableau est alors parcouru depuis la fin.
- [`TypedArray.prototype.copyWithin()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin)
  - : Copie une suite d'éléments de tableau dans le tableau typé. Voir aussi [`Array.prototype.copyWithin()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin).
- [`TypedArray.prototype.entries()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/entries)
  - : Renvoie un nouvel objet itérateur de tableau qui contient les paires de clé/valeur pour chaque indice du tableau. Voir aussi [`Array.prototype.entries()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/entries).
- [`TypedArray.prototype.every()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/every)
  - : Teste si l'ensemble des éléments du tableau valident le test fourni par la fonction passée en argument. Voir aussi [`Array.prototype.every()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/every).
- [`TypedArray.prototype.fill()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill)
  - : Remplit l'ensemble des éléments du tableau situés entre un indice de début et un indice de fin avec une valeur statique. Voir aussi [`Array.prototype.fill()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/fill).
- [`TypedArray.prototype.filter()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter)
  - : Crée un nouveau tableau avec l'ensemble des éléments du tableau pour lesquels la fonction passée en argument renvoi `true`. Voir aussi [`Array.prototype.filter()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).
- [`TypedArray.prototype.find()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/find)
  - : Renvoie la valeur trouvée dans le tableau si un élément du tableau satisfait au critère fourni par la fonction passée en argument, ou `undefined` s'il n'existe pas de tel élément. Voir aussi [`Array.prototype.find()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find).
- [`TypedArray.prototype.findIndex()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex)
  - : Renvoie l'indice d'un élément du tableau qui satisfait au critère fourni par la fonction passée en argument ou `-1` s'il n'existe pas de tel élément. Voir aussi [`Array.prototype.findIndex()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex).
- [`TypedArray.prototype.forEach()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach)
  - : Appelle une fonction pour chaque élément du tableau. Voir aussi [`Array.prototype.forEach()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).
- [`TypedArray.prototype.includes()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes)
  - : Détermine si un tableau typé inclut un certain élément, renvoyant
    `true` ou `false` selon le cas de figure. Voir aussi [`Array.prototype.includes()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/includes).
- [`TypedArray.prototype.indexOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf)
  - : Renvoie le plus petit indice d'un élément du tableau qui est égal à la valeur fournie en argument, ou `-1` si aucun élément n'est trouvé. Voir aussi [`Array.prototype.indexOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf).
- [`TypedArray.prototype.join()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/join)
  - : Fusionne l'ensemble des éléments du tableau en une chaîne de caractères. Voir aussi [`Array.prototype.join()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/join).
- [`TypedArray.prototype.keys()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/keys)
  - : Renvoie un nouvel itérateur de tableau qui contient les clés pour chaque indice du tableau. Voir aussi [`Array.prototype.keys()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/keys).
- [`TypedArray.prototype.lastIndexOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf)
  - : Renvoie le plus grand indice d'un élément du tableau qui est égal à la valeur fournie, ou `-1` s'il n'y a pas de tel élément. Voir aussi [`Array.prototype.lastIndexOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf).
- [`TypedArray.prototype.map()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map)
  - : Crée un nouveau tableau dont les éléments sont les résultats de l'appel de la fonction passée en argument pour chaque élément du tableau original. Voir aussi [`Array.prototype.map()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map).
- [`TypedArray.prototype.reduce()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduce)
  - : Applique une fonction avec un accumulateur pour chaque valeur du tableau (de gauche à droite), afin de le réduire à une seule valeur. Voir aussi [`Array.prototype.reduce()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).
- [`TypedArray.prototype.reduceRight()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight)
  - : Applique une fonction avec un accumulateur pour chaque valeur du tableau (de droite à gauche), afin de le réduire à une seule valeur. Voir aussi [`Array.prototype.reduceRight()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight).
- [`TypedArray.prototype.reverse()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reverse)
  - : Inverse l'ordre des éléments d'un tableau (le premier devenant le dernier, le dernier devenant le premier et ainsi de suite). Voir aussi [`Array.prototype.reverse()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse).
- [`TypedArray.prototype.set()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set)
  - : Enregistre plusieurs valeurs dans le tableau typé à partir d'un tableau de valeurs donné.
- [`TypedArray.prototype.slice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/slice)
  - : Extrait une section d'un tableau et renvoie un nouveau tableau. Voir aussi [`Array.prototype.slice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/slice).
- [`TypedArray.prototype.some()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/some)
  - : Renvoie `true` si au moins un des éléments du tableau satisfait au critère fourni par la fonction passée en argument. Voir aussi [`Array.prototype.some()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/some).
- [`TypedArray.prototype.sort()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/sort)
  - : Trie les éléments du tableau à même le tableau puis le renvoie. Voir aussi [`Array.prototype.sort()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).
- [`TypedArray.prototype.subarray()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray)
  - : Renvoie un nouveau tableau typé avec les éléments contenus entre un indice de début et un indice de fin.
- [`TypedArray.prototype.values()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/values)
  - : Renvoie un nouvel objet _itérateur de tableau_ qui contient les valeurs pour chaque indice du tableau. Voir aussi [`Array.prototype.values()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/values).
- [`TypedArray.prototype.toLocaleString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString)
  - : Renvoie une chaîne de caractères localisée qui représente le tableau et ses éléments. Voir aussi [`Array.prototype.toLocaleString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString).
- [`TypedArray.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString)
  - : Renvoie une chaîne de caractères représentant le tableau et ses éléments. Voir aussi [`Array.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/toString).
- [`TypedArray.prototype[@@iterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator)
  - : Renvoie un nouvel objet _itérateur de tableau_ qui contient les valeurs pour chaque indice du tableau.

## Exemples

### Caractère obligatoire de `new`

À partir d'ECMAScript 2015, les constructeurs `TypedArray` doivent être appelés avec l'opérateur [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new). Appeler un tel constructeur comme fonction, sans `new`, déclenchera une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError).

```js example-bad
let dv = Int8Array([1, 2, 3]);
// TypeError: calling a builtin Int8Array constructor
// without new is forbidden
```

```js example-good
let dv = new Int8Array([1, 2, 3]);
```

### Accès aux propriétés

Il est possible d'accéder aux éléments du tableau en utilisant la notation usuelle avec les crochets. Cependant, définir ou accéder à des propriétés indexées ne se fera pas avec la chaîne de prototypes, même si l'indice utilisé est en dehors des limites du tableau. Les propriétés indexées seront uniquement basées sur le contenu du [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) et ne consulteront pas les propriétés des objets. En revanche, il est toujours possible d'utiliser des propriétés nommées, comme avec les autres objets.

```js
// Définir et accéder du contenu avec la syntaxe usuelle
let int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42

// Les propriétés indexées sur les prototypes ne sont pas consultées
Int8Array.prototype[20] = "toto";
new Int8Array(32)[20]; // 0
// y compris en dehors des limites
Int8Array.prototype[20] = "toto";
new Int8Array(8)[20]; // undefined
// ou avec des index négatifs
Int8Array.prototype[-1] = "toto";
new Int8Array(8)[-1]; // undefined

// Mais il est possible d'utiliser des propriétés nommées
Int8Array.prototype.toto = "truc";
new Int8Array(32).toto; // "truc"
```

### Impossibles à geler

Les tableaux typés qui ne sont pas vides ne peuvent pas être gelés, car le tampon de mémoire `ArrayBuffer` sous-jacent pourrait être modifié via une autre vue fournie par un autre tableau typé sur ce même tampon. En pratique, cela voudrait dire que l'objet n'est pas réellement gelé.

```js example-bad
const i8 = Int8Array.of(1, 2, 3);
Object.freeze(i8);
// TypeError: Cannot freeze array buffer views with elements
```

### Alignement de `decalageOctet`

Lors de la construction d'un objet `TypedArray` comme une vue sur un tampon `ArrayBuffer`, l'argument `decalageOctet` doit être aligné par rapport à la taille des éléments. Autrement dit, le décalage fourni doit être un multiple de `BYTES_PER_ELEMENT`.

```js example-bad
const i32 = new Int32Array(new ArrayBuffer(4), 1);
// RangeError: start offset of Int32Array should be a multiple of 4
```

```js example-good
const i32 = new Int32Array(new ArrayBuffer(4), 0);
```

### Alignement de la propriété `byteLength`

À l'instar du paramètre `decalageOctet`, la propriété `byteLength` d'un objet `ArrayBuffer` passé au constructeur `TypedArray` doit être un multiple de la valeur `BYTES_PER_ELEMENT` correspondant au type du constructeur.

```js example-bad
const i32 = new Int32Array(new ArrayBuffer(3));
// RangeError: byte length of Int32Array should be a multiple of 4
```

```js example-good
const i32 = new Int32Array(new ArrayBuffer(4));
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Une prothèse d'émulation pour les tableaux typés avec la bibliothèque `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Typed_arrays)
- [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
- [`DataView`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView)
- [TextDecoder](/fr/docs/Web/API/TextDecoder), une API utilitaire pour décoder des chaînes de caractères à partir de données numériques
